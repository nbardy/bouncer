(ns ball-roller.level1)

(defn new []
  (let [w js/innerWidth 
        h js/innerHeight]
    {:walls [{:coord :x 
              :pos 0 
              :length h
              :direction 1} 
             {:coord :y
              :pos 0
              :length w
              :direction 1}
             {:coord :x 
              :pos w
              :length h 
              :direction -1 } 
             {:coord :y 
              :pos h 
              :length w
              :direction -1}]
     :ball {:width 40 :height 40
            :position {:x (/ w 2) :y (/ h 2)}
            :velocity {:x 0 :y 0}}}))
