(ns ball-roller.core
  (:require [cljs.core.async :refer [put! timeout chan sliding-buffer <!]]
            [cljs.core.match]
            [ball-roller.level1 :as level1])
  (:require-macros [cljs.core.async.macros :as m :refer [go alt! go-loop]]
                   [cljs.core.match.macros :refer [match]]))

(enable-console-print!)

(def glow-length 900)
(def glow-width 90)

(defn create-element [ele-name & attrs]
  (let [ele (.createElement js/document ele-name)]
    (doseq [[k v] (first attrs)]
      (.setAttribute ele (name k) v))
    ele))

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

(def last-drawn-state (atom {}))

(defn clear [canvas]
  (.clearRect (.getContext canvas "2d") 
              0 0
              (.-width canvas) (.-height canvas)))


(defn wall-fill [ctx coord x y width height direction]
  (let [color (case [coord direction]
                     [:x 1] "green"
                     [:x -1] "blue"
                     [:y -1] "yellow"
                     "red")
        gradient (.createLinearGradient ctx x y (+ x width) (+ y height))]
    (.addColorStop gradient 0 color)
    (.addColorStop gradient 1 "transparent")
    gradient))

(defn draw-glowing-wall! [{:keys [coord pos length direction] :as d} ctx]

  (let [[height width] (if (= coord :x) 
                         [length glow-width]
                         [glow-width length])
        [x y] (case [coord direction]
                     [:x -1] [(- pos width) 0]
                     [:x 1]  [pos 0]
                     [:y -1] [0 (- pos height)]
                     [:y 1]  [0 pos]
                     [0 0])]
                
    (aset ctx "fillStyle" (wall-fill ctx coord x y width height direction))
    (.fillRect ctx x y width height)))

(defn draw-ball [ctx x y width height]
  (aset ctx "fillStyle" "rgb(123,0,123)")
  (.fillRect ctx x y 
             width height))

(defn draw [canvas state]
  (let [ctx (.getContext canvas "2d")
        ball (state :ball)
        width (ball :width)
        height (ball :height)
        x (-> ball :position :x)
        y (-> ball :position :y)]
    (clear canvas)
    (doseq [[wall t] (state :wall-hits)] 
      (when (-> t (- (state :timestamp)) (> (- 0 glow-length)))
        (draw-glowing-wall! wall ctx)))
    (draw-ball ctx (- x (/ width 2)) (- y (/ width 2)) 
                   width width)))


(defn play-sound [uri volume]
  (let [audio (create-element "audio" {:src uri})]
      (set! (.-volume audio) volume)
      (.play audio)))

(defn clamp [x [bottom top]]
  (js/Math.min (js/Math.max x bottom) top))


(defn ball-speed-to-volume [speed]
  (clamp speed [0 1]))

(defn play-sounds [state]
  (when (-> state :ball :has-bounced?)
    (play-sound "squish.mp3" 
                (-> state :ball :has-bounced? :speed 
                    ball-speed-to-volume))))

(defn render [canvas state]
  (if-not (= last-drawn-state state)
    (js/requestAnimationFrame (fn []
      (reset! last-drawn-state state)
      (draw canvas state)
      (play-sounds state)))))

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
    (for [{:keys [coord pos] :as wall} walls]
      (let [p1 (-> old-item :position coord)
            p2 (-> new-item :position coord)]
        [wall (if (in-between? pos [p1 p2]) (* 2 (- pos p2)))]))))

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
      (update-in state [:wall-hits] #(conj % [hit-wall (+ (state :timestamp) dt)]))
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
  (render canvas state))

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
