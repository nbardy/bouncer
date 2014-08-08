(ns ball-roller.core
  (:require [cljs.core.match]
            [ball-roller.util :refer [create-element! current-time$ sign]]
            [ball-roller.powerups :refer [handle-powerups%]]
            [ball-roller.sounds :as sounds]
            [ball-roller.vector-math :as vec]
            [ball-roller.graphics.core :as graphics]
            [alandipert.storage-atom :refer [local-storage]]
            [figwheel.client :as fw :include-macros true]
            [ball-roller.level1 :as level1])
  (:require-macros [cljs.core.match.macros :refer [match]]))

(declare next-state)

(def init-state 
  {:mode :menu
   :width js/window.innerWidth 
   :height js/window.innerHeight})

(enable-console-print!)

(def damper 0.2)
(def temper 0.000007)

(defn temper-tilt [tilt]
  (-> tilt (* tilt) (* temper) (* (sign tilt))))

(defn damper-bounce [speed]
  (* speed damper))

(defonce last-accel (atom #js {:alpha 0 :beta 0 :gamma 0}))
(defonce click-events (atom []))

(defn setup-orientation-watcher! []
  (js/window.addEventListener 
    "deviceorientation" 
    (fn [e] 
      (reset! last-accel e) 
       true)))

(defn setup-click-watcher! []
  (let [handler (fn [e] (swap! click-events conj e))]
    (js/document.addEventListener "click" handler)
    (js/document.addEventListener "touchstart" handler)))

(def speed 10)

(defn move [item [xvel yvel] dt]
  (update-in item [:position] #(hash-map :x 
                                         (-> % :x (+ (* dt xvel)))
                                         :y
                                         (-> % :y (+ (* dt yvel))))))

(defn mean [x y] (/ (+ x y) 2))

(defn update-physics [item dt]
  (let [xacel (-> item :acceleration :x)
        yacel (-> item :acceleration :y)
        xvel (-> item :velocity :x)
        yvel (-> item :velocity :y)
        new-xvel (+ xvel (* dt xacel))
        new-yvel (+ yvel (* dt yacel))]
    (-> item 
        (update-in [:velocity] #(hash-map :x new-xvel :y new-yvel))
        (move [(mean xvel new-xvel) (mean yvel new-yvel)] dt))))

(defn in-between? [value [p1 p2]]
  (or (< p1 value p2)
      (> p1 value p2)))

(defn +- [x y] [(- x y) (+ x y)])

(defn flat [x]
  (apply concat x))

(defn bounce [new-item old-item walls]
  (reduce 
    (fn [item [{:keys [coord pos] :as wall} change]]
      (if change
        (-> item
            (update-in [:position coord] #(+ % change))
            (update-in [:velocity coord] #(- (damper-bounce %)))
            (merge {:has-bounced? 
                    (assoc wall :speed 
                           (-> item :velocity coord
                               js/Math.abs))}))
        item))
    new-item
    ; Each wall.
    (flat (for [{:keys [coord pos] :as wall} walls]
      (let [oldpos (get-in old-item [:position coord])
            newpos (get-in new-item [:position coord])
            radius (apply #(/ (+ % %2) 2)
                        (map :radius
                             [old-item new-item]))]
        ; Each side.
        (for [[p1 p2] 
              (apply map vector 
                     (map #(+- % radius) [oldpos newpos]))]
          [wall (if (in-between? pos [p1 p2]) 
                  (* (- pos p2) 2))]))))))

(defn add-history [ball t]
  (update-in ball [:history] #(cons [ball t] %)))

(defn remove-flags [item]
  (dissoc item :has-bounced?))

(defn next-ball [state dt]
  (let [[xacel yacel] 
        (for [k ["gamma" "beta"]]
          (temper-tilt 
            (- (aget (state :phone) k)
               (aget (state :initial-tilt) k))))]
    (assoc state :ball
           (-> (state :ball) 
               (add-history (state :timestamp))
               (remove-flags)
               (assoc-in [:acceleration] (hash-map :x xacel :y yacel))
               (update-physics dt)
               (bounce (state :ball) (state :walls))))))

(defn update-walls [state dt] 
  (let [hit-wall (get-in state [:ball :has-bounced?])]
    (if hit-wall
      (update-in state [:wall-hits] #(conj % [hit-wall (state :timestamp) ]))
      state)))

(defn collision? [{:keys [radius] :as ball} rect] 
  (let [corners (for [x (+- (:x rect) (:width rect))
                      y (+- (:y rect) (:height rect))]
                      {:x x :y y})]
    (some #(< (vec/dist (ball :position) %) radius) corners)))

(defn activate-items [state]
  (let [[to-activate items]
        (split-with #(collision? (state :ball) %) (state :items))]
    (reduce #((%2 :activate) %) (assoc state :items items) to-activate)))

; TODO: Refactor
(defn update-pattern [state]
  (if-let [[hit time] (last (state :wall-hits))]
    (if (= (nth (get-in state [:pattern :steps]) (get-in state [:pattern :current]))
           (dissoc hit :speed ))
      (-> state 
          (update-in [:pattern :current] inc)
          (update-in [:bounce-time] #(* % 0.96))
          (update-in [:score] #(if % (inc %) 1))
          (assoc :correct-hit (state :timestamp)))
      state) state))

(defn check-for-win-or-loss [state]
  (cond 
    (>= (get-in state [:pattern :current])
        (count (get-in state [:pattern :steps])))
    (next-state {:mode :victory})

    (and (state :correct-hit) 
         (< (+ (state :correct-hit) (state :bounce-time))
            (state :timestamp)))
    (do (reset! click-events [])
        (assoc state :mode :loss))

    :otherwise
    state))


(defn log-state [state]
      (update-in state [:previous-states] #(conj % state)))

(defn update-timestamp$ [state]
  (assoc state :timestamp (current-time$)))

(defn new-game [level]
  (merge {:mode :game
          :previous-states []
          :wall-hits []
          :bounce-time (* 60 40)
          :width js/window.innerWidth
          :height js/window.innerHeight}
         (level) ))

(defmulti advance "Advances the game state." :mode)

(defmethod advance :game [state]
  (let [dt (- (current-time$) (:timestamp state))]
    (-> state
        (log-state)
        (next-ball dt)
        (update-walls dt)
        (update-pattern)
        (check-for-win-or-loss)
        ;(handle-powerups% dt)
        (activate-items)
        (update-timestamp$))))

(defmethod advance :menu [state]
  (if-not (empty? @click-events)
    (do (reset! click-events [])
        (update-timestamp$ (new-game level1/new)))
    state))

(def persistent-state (local-storage (atom {}) :persistent-state))
(defn log-high-score! [state]
  (swap! persistent-state update-in [:high-score] 
         #(max (or % 0) (state :score)))
  (assoc state :high-score (:high-score @persistent-state)))

(defn reset-on-click [state]
  (if-not (empty? @click-events)
    (do (reset! click-events [])
        init-state)
    state))

(defmethod advance :victory [state]
  (-> state 
      log-high-score!
      reset-on-click))

(defmethod advance :loss [state]
  (-> state 
      log-high-score!
      reset-on-click))

(defn next-state [state]
  (advance 
    (-> state
        (assoc :phone @last-accel)
        (update-in [:initial-tilt] #(or % @last-accel)))))

(defn animate! [state canvas]
  (js/window.requestAnimationFrame (fn []
      (animate! (next-state state) canvas)))
  ;(sounds/play state)
  (graphics/render canvas state)
  )

(defn start-loop [canvas]
  (animate! (update-timestamp$ init-state) canvas))

(defn ^:export start [dev]
  (print "Starting...")
  (when dev
    (fw/watch-and-reload
      :jsload-callback (fn [] (print "Core reloaded!"))))
  (setup-orientation-watcher!)
  (setup-click-watcher!)
  (start-loop (let [ele (create-element! "canvas")]
                (set! (.-width ele) js/window.innerWidth)
                (set! (.-height ele) js/window.innerHeight)
                (.appendChild js/document.body ele)
                ele)))
