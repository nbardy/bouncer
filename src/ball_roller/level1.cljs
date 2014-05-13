(ns ball-roller.level1)

(defn new []
  (let [w js/innerWidth
        h js/innerHeight]
    {:walls [[:x 0] [:y 0] [:x w] [:y h]]
     :ball {:width 40 :height 40
            :position {:x (/ w 2) :y (/ h 2)}
            :velocity {:x 0 :y 0}}}))
