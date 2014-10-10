(ns ball-roller.graphics.core
  (:require [clojure.set :refer [rename-keys]]
            [ball-roller.vector-math :as vec]
            [ball-roller.graphics.powerups :as powerups]
            [ball-roller.graphics.ball :refer [draw-ball]]))

(def glow-length 900)
(def glow-width 25)
(defn clear [canvas]
  (let [ctx (.getContext canvas "2d")]
    (aset ctx "fillStyle" "rgb(0,0,0,0)")))

(defn tesse [canvas]
  (let [ctx (.getContext canvas "2d")]
    (aset ctx "fillStyle" "rgb(26,26,26)")
    (aset ctx "strokeStyle" "rgba(0,0,0,0)")
    (js/Graphics.Tesselation 
      (.getContext canvas "2d") 
      (.-width canvas) (.-height canvas)
      6 12
      20 
      (js/Date.now))))

(defn wall-fill [ctx coord x y width height direction intensity]
  (let [color (case [coord direction]
                     [:x 1] "rgba(0,255,0,"
                     [:x -1] "rgba(0,123,176,"
                     [:y -1] "rgba(123,0,123,"
                     "rgba(255,0,0,")
        gradient (.createLinearGradient ctx x y 
                                        (if (= :x coord) (+ x width) 0) 
                                        (if (= :y coord) (+ y height) 0))]
    (doseq [[pos alpha] (if (= direction 1)
                          [[0 0.3] [0.1 0.3] [0.8 0]]
                          [[0.2 0] [0.9 0.3] [1 0.3]])]
      (.addColorStop gradient pos (str color alpha ")")))
    gradient))

; TODO: Explore a more general solution.
(defn draw-glowing-wall! [ctx {:keys [coord pos length direction intensity] :as item}]
  (let [[height width] 
        ((if (= coord :x) identity reverse) 
         [length (* glow-width intensity)])
        [x y] (case [coord direction]
                [:x 1]  [pos 0]
                [:x -1] [(- pos width) 0]
                [:y 1]  [0 pos]
                [:y -1] [0 (- pos height)])]
    (aset ctx "fillStyle" (wall-fill ctx coord x y width height direction intensity))

    (.fillRect ctx x y width height)))

(defn draw-wall-hits [ctx state]
  (doseq [[wall hit-time] (state :wall-hits)] 
    (let [current-time (state :timestamp)
          speed (wall :speed)]
    (when (-> hit-time (- (state :timestamp)) (> (- 0 glow-length)))
      (draw-glowing-wall! ctx (merge wall 
        {:intensity (/ (* speed 100) (- current-time hit-time))}))))))

(def old-states 12)
(defn draw-ball-path [ctx state]
  (let [ball-states 
        (filter #(-> % :velocity :x (not= 0))
                (map :ball (concat (take-last old-states (:previous-states state)) [state])))
        path (map :position ball-states)
        width (fn [ball] 
                (min (/ (:width ball) (vec/mag (:velocity ball)) 6) 30))
        shifts (map (fn [orthos ball] 
                      (map #(vec/scale (width ball) %) orthos))
                    (map (comp vec/orthogonal vec/unit) 
                         (map :velocity ball-states))
                    ball-states)
        edges (map vec/add path (map first shifts))
        edges2 (map vec/add path (map last shifts))
        ]

    (aset ctx "strokeStyle" "rgba(0,0,0,0.2)")

    (doseq [edge [edges edges2]]
      (.drawSpline js/Graphics 
                   ctx 
                   (clj->js (flatten (map (juxt :x :y) edge))) 0.6))))


(defn damper [val]
  (if (= val 0) 0 
    (let [sign (/ (.abs js/Math val) val)]
      (* sign (/ (* val val) 1290)))))

(defn text-offset [{:keys [phone] :as state}]
  {:x (damper (.-gamma phone))
   :y (damper (.-beta phone))})


(defmulti draw "Draw the state." (fn [canvases state] (:mode state)))

(defmethod draw :menu [[canvas background-canvas] state]
  (let [ctx (.getContext canvas "2d")
        shift (text-offset state)]
    (clear canvas)
    (aset ctx "font" "bold 12px sans-serif")
    (js/Graphics.neonLightEffect ctx "New Game" (+ 43 (:x shift)) (+ 100 (:y shift)))))


(defmethod draw :victory [[canvas background-canvas] state]
  (let [ctx (.getContext canvas "2d")
        shift (text-offset state)]
    (clear canvas)
    (aset ctx "font" "bold 12px sans-serif")
    (js/Graphics.neonLightEffect ctx "Victory" (+ 43 (:x shift)) (+ 100 (:y shift)))))


(defmethod draw :loss [[canvas background-canvas] state]
  (let [ctx (.getContext canvas "2d")
        shift (text-offset state)]
    (clear canvas)
    (draw canvas (assoc state :mode :game))
    (aset ctx "font" "bold 12px sans-serif")
    (js/Graphics.neonLightEffect ctx (str "Score: " (state :score)) (+ 43 (:x shift)) (+ 200 (:y shift)))
    (js/Graphics.neonLightEffect ctx (str "High Score: " (state :high-score)) (+ 43 (:x shift)) (+ 300 (:y shift)))))

(defmethod draw :game [[background-canvas canvas] state]
  (let [ctx (.getContext canvas "2d")
        current-step (merge {:intensity 2}
                       (nth (-> state :pattern :steps) 
                            (-> state :pattern :current)))]
    (tesse background-canvas)
    (powerups/draw ctx state)
    (draw-wall-hits ctx state)
    (draw-glowing-wall! ctx current-step)
    ;(draw-ball-path ctx state)
    (draw-ball ctx state)))

(defn render [canvases state]
  (draw canvases state))
