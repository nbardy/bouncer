(ns ball-roller.graphics.core
  (:require [clojure.set :refer [rename-keys]]
            [ball-roller.graphics.ball :refer [draw-ball]]))

(def glow-length 900)
(def glow-width 25)

(defn clear [canvas]
  (.clearRect (.getContext canvas "2d") 
              0 0
              (.-width canvas) (.-height canvas)))

; TODO: Refactor
(defn wall-fill [ctx coord x y width height direction intensity]
  (let [color (case [coord direction]
                     [:x 1] "rgba(0,255,0,"
                     [:x -1] "rgba(0,123,176,"
                     [:y -1] "rgba(123,0,123,"
                     "rgba(255,0,0,")
        height (* direction height)
        width (* direction width)
        gradient (if (= coord :x) 
                   (.createLinearGradient ctx x y (+ x width) (/ y 2))
                   (.createLinearGradient ctx x y (/ x 2) (+ y height)))]
    (.addColorStop gradient 0 (str color "0.3)"))
    (.addColorStop gradient 0.1 (str color "0.3)"))
    (.addColorStop gradient 0.8 (str color "0)"))
    gradient))

; TODO: Refactor
(defn draw-glowing-wall! [ctx {:keys [coord pos length direction intensity] :as item}]
  (let [[height width] (if (= coord :x) 
                         [length (* glow-width intensity)]
                         [(* glow-width intensity) length])
        [x y] (case coord :x [pos 0] :y [0 pos])]
    (aset ctx "fillStyle" (wall-fill ctx coord x y width height direction intensity))
    (.fillRect ctx (if (and (= coord :x) (= direction -1)) (- x width) x)
                   (if (and (= coord :y) (= direction -1)) (- y height) y) 
                   width height)))

(defn draw-wall-hits [ctx state]
  (doseq [[wall hit-time] (state :wall-hits)] 
    (let [current-time (state :timestamp)
          speed (wall :speed)]
    (when (-> hit-time (- (state :timestamp)) (> (- 0 glow-length)))
      (draw-glowing-wall! ctx (merge wall 
        {:intensity (/ (* speed 100) (- current-time hit-time))}))))))

(defn draw-game [canvas state]
  (let [ctx (.getContext canvas "2d")
        current-step (merge {:intensity 2}
                       (nth (-> state :pattern :steps) (-> state :pattern :current)))]
    (clear canvas)
    (draw-wall-hits ctx state)
    (draw-glowing-wall! ctx current-step)
    (draw-ball ctx state)))

(defn damper [val]
  (if (= val 0) 0 
    (let [sign (/ (.abs js/Math val) val)]
      (* sign (/ (* val val) 1290)))))

(defn text-offset [{:keys [phone] :as state}]
  {:x (damper (.-gamma phone))
   :y (damper (.-beta phone))})

(defn draw-menu [canvas state]
  (let [ctx (.getContext canvas "2d")
        shift (text-offset state)]
    (clear canvas)
    (aset ctx "font" "bold 12px sans-serif")
    (js/Graphics.neonLightEffect ctx "New Game" (+ 43 (:x shift)) (+ 100 (:y shift)))))

(defn draw [canvas state]
  (case (state :mode)
    :menu (draw-menu canvas state)
    :game (draw-game canvas state)))

(defn render [canvas state]
  (js/requestAnimationFrame (fn []
                              (draw canvas state))))
