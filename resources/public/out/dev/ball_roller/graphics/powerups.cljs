(ns ball-roller.graphics.powerups)

(defn draw [ctx state]
  (doseq [{:keys [x y width height] :as powerup} (state :items)]
    (aset ctx "fillStyle" "blue")
    (.fillRect ctx (- x (/ width 2))
                   (- y (/ width 2))
                   width height)))
