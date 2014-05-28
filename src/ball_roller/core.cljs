(ns ball-roller.core
  (:require [cljs.core.async :refer [put! timeout chan sliding-buffer <!]]
            [cljs.core.match]
            [ball-roller.util :refer [create-element]]
            [ball-roller.sounds :as sounds]
            [ball-roller.graphics :as graphics]
            [ball-roller.level1 :as level1])
  (:require-macros [cljs.core.async.macros :as m :refer [go alt! go-loop]]
                   [cljs.core.match.macros :refer [match]]))

(enable-console-print!)

(defn temper-tilt [tilt]
  (* tilt 0.000012))

(defn damper-bounce [speed]
  (* speed 0.62))

(def last-accel (atom #js {:alpha 0 :beta 0 :gamma 0}))

(if js/DeviceOrientationEvent
  (.addEventListener js/window "deviceorientation" 
                     (fn [e] (reset! last-accel e)))
  (js/navigator.accelerometer.watchAcceleration
    (fn [accel] (reset! last-accel accel))
    (fn [error] (.log js/console error))))


(def speed 10)

(defn watch-stub []
  (if-not js/DeviceOrientationEvent
    (js/navigator.accelerometer.watchAcceleration
      (fn [acceleration] nil)
      (fn [error] nil)
      #js {:frequency speed})))

(defn move [item [xvel yvel] dt]
  (update-in item [:position] #(hash-map :x 
                                         (-> % :x (+ (* dt xvel)))
                                         :y
                                         (-> % :y (+ (* dt yvel))))))

(defn mean [x y] (/ (+ x y) 2))

(defn update-physics [item dt]
  (let [xacel (-> item :acceleration :x -)
        yacel (-> item :acceleration :y -)
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
  ;; (print x)
  ;; (js* "debugger;")
  (apply concat x))

(defn p [x y] (print y) x)

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
      (let [oldpos (-> old-item :position coord)
            newpos (-> new-item :position coord)
            ; This line uses old-item height
            ; If a resizing item is introduced we will need to move to the mean.
            length (old-item (if (= coord :x) :width :height))]
        ; Each side.
          (for [[p1 p2] 
                (apply map vector 
                  (map #(+- % (/ length 2)) [oldpos newpos]))]
            [wall (if (in-between? pos [p1 p2]) 
                    (* (- pos p2) 2))]))))))

(defn remove-flags [item]
  (dissoc item :has-bounced?))

(defn next-ball [state dt]
  (let [xacel (temper-tilt (.-gamma (:phone state)))
        yacel (temper-tilt (.-beta  (:phone state)))]
    (assoc state :ball
      (-> (state :ball) 
          (remove-flags)
          (assoc-in [:acceleration] (hash-map :x xacel :y yacel))
          (update-physics dt)
          (bounce (state :ball) (state :walls))))))

(defn update-walls [state dt] 
  (let [hit-wall (-> state :ball :has-bounced?)]
    (if hit-wall
      (update-in state [:wall-hits] #(conj % [hit-wall (state :timestamp) ]))
      state)))

(defn next-state [state]
  (let [now (.now js/Date)
        dt (- now (:timestamp state))]
    (-> state
        (assoc :phone @last-accel)
        (next-ball dt)
        (update-walls dt)
        (assoc :timestamp now))))

(defn add-timestamp [state]
  (merge state {:timestamp (.now js/Date)}))

(def init-state (assoc (level1/new) :wall-hits []))

(defn animate [state canvas]
  (js/requestAnimationFrame (fn []
      (animate (next-state state) canvas)))
  (sounds/play state)
  (graphics/render canvas state))

(defn start-loop [canvas]
  (animate (add-timestamp init-state) canvas))

(defn ^:export start []
  (print "Starting...")
  (watch-stub)
  (start-loop (let [ele (create-element "canvas")]
                (set! (.-width ele) js/innerWidth)
                (set! (.-height ele) js/innerHeight)
                (.appendChild js/document.body ele)
                ele)))

(.addEventListener js/document "DOMContentLoaded" (fn [] (start)))
