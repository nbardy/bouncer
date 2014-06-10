(ns ball-roller.components)

(defn ball [x y]
  {:width 40 :height 40
   :position {:x x :y y}
   :acceleration {:x 0 :y 0}
   :velocity {:x 0 :y 0}})
