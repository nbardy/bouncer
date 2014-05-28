(ns ball-roller.graphics)

(def last-drawn-state (atom {}))

(def glow-length 900)
(def glow-width 25)

(defn clear [canvas]
  (.clearRect (.getContext canvas "2d") 
              0 0
              (.-width canvas) (.-height canvas)))

; TODO: Refactor
(defn wall-fill [ctx coord x y width height direction speed]
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
(defn draw-glowing-wall! [{:keys [coord pos length direction speed] :as hit} ctx]
  (let [[height width] (if (= coord :x) 
                         [length (* glow-width speed)]
                         [(* glow-width speed) length])
        [x y] (case coord :x [pos 0] :y [0 pos])]
    (aset ctx "fillStyle" (wall-fill ctx coord x y width height direction speed))
    (.fillRect ctx (if (and (= coord :x) (= direction -1)) (- x width) x)
                   (if (and (= coord :y) (= direction -1)) (- y height) y) 
                   width height)))

(defn draw-ball [ctx x y width height]
  (aset ctx "fillStyle" "rgb(123,0,123)")
  (.fillRect ctx x y 
             width height))

(defn draw-walls [ctx state]
  (doseq [[wall t] (state :wall-hits)] 
    (when (-> t (- (state :timestamp)) (> (- 0 glow-length)))
      (draw-glowing-wall! wall ctx))))

(defn draw [canvas state]
  (let [ctx (.getContext canvas "2d")
        ball (state :ball)
        width (ball :width)
        height (ball :height)
        x (-> ball :position :x)
        y (-> ball :position :y)]
    (clear canvas)
    (draw-walls ctx state)
    (draw-ball ctx (- x (/ width 2)) (- y (/ width 2)) 
                   width width)))


(defn render [canvas state]
  (if-not (= @last-drawn-state state)
    (js/requestAnimationFrame (fn []
      (reset! last-drawn-state state)
      (draw canvas state)))))
