(ns ball-roller.core
  (:require [cljs.core.async :refer [put! timeout chan sliding-buffer <!]]
            [ball-roller.level1 :as level1])
  (:require-macros [cljs.core.async.macros :as m :refer [go go-loop]]))

(enable-console-print!)

(defn temper-tilt [tilt]
  (/ tilt 830))

(defn damper-bounce [speed]
  (/ speed 1.2))

(defn get-accel []
  (let [c (chan)
        ga (-> js/navigator .-accelerometer .-getCurrentAcceleration)]
    (ga (fn [accel] (put! c accel)))
    c))

(def speed 10)

(defn watch-stub []
  ((-> js/navigator .-accelerometer .-watchAcceleration)
    (fn [acceleration] nil)
    (fn [error] nil)
    speed))

(def last-drawn-state (atom {}))

(defn clear [canvas]
  (.clearRect (.getContext canvas "2d") 
              0 0
              (.-width canvas) (.-height canvas)))

(defn draw [canvas state]
  (let [ctx (.getContext canvas "2d")
        width (-> state :ball :width)
        height (-> state :ball :height)
        x (-> state :ball :position :x)
        y (-> state :ball :position :y)]
    (clear canvas)
    (aset ctx "fillStyle" "rgb(123,0,123)")
    (.fillRect ctx (- x (/ width 2)) (- y (/ width 2)) 
                   width width)))

(defn play-sound [uri]
  (.play (create-element "audio" {:src uri})))

(defn play-sounds [state]
  (when (-> state :ball :has-bounced?)
    (play-sound "squish.mp3")))

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


(defn bounce [new-item old-item walls]
  (reduce 
    (fn [item [coord change]]
      (if change
        (-> item
            (update-in [:position coord] #(+ % change))
            (update-in [:velocity coord] #(- (damper-bounce %)))
            (merge {:has-bounced? true}))
        item))
    new-item
    (for [[coord wall] walls]
      (let [p1 (-> old-item :position coord)
            p2 (-> new-item :position coord)]
        [coord (if (in-between? wall [p1 p2]) (* 2 (- wall p2)))]))))

(defn remove-flags [item]
  (dissoc item :has-bounced?))

(defn update-ball-physics [item phone-state walls dt]
  (let [xacel (temper-tilt (.-x phone-state))
        yacel (temper-tilt (- (.-y phone-state)))]
    (-> item 
        (remove-flags)
        (assoc-in [:acceleration] (hash-map :x xacel :y yacel))
        (update-physics dt)
        (bounce item walls))))

(defn next-state [state]
  (let [now (.now js/Date)
        dt (- now (:timestamp state))]
    (-> state
        (update-in [:ball] #(update-ball-physics % (state :phone) (state :walls) dt))
        (assoc-in [:timestamp] now))))

(defn add-timestamp [state]
  (merge state {:timestamp (.now js/Date)}))

(def init-state (level1/new))

(defn start-loop [canvas]
  (go (loop [state (add-timestamp init-state)]
        (let [state (merge state {:phone (<! (get-accel))})]
          (render canvas state)
          (recur (next-state state))))))

(defn create-element [ele-name & attrs]
  (let [ele (.createElement js/document ele-name)]
    (doseq [[k v] (first attrs)]
      (.setAttribute ele (name k) v))
    ele))

(def canvas 
  (let [ele (create-element "canvas")]
    (set! (.-width ele) js/innerWidth)
    (set! (.-height ele) js/innerHeight)
    (.appendChild (-> js/document .-body) ele)
    ele))

(.addEventListener js/document "deviceready" 
  (fn []
      (watch-stub)
      (start-loop canvas)))
