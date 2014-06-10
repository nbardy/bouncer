(ns ball-roller.level1
  (:require [ball-roller.components :refer [ball]] ))

(def num-bounces 10)

(defn new []
  (let [w js/innerWidth 
        h js/innerHeight
        walls [{:coord :x 
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
                :direction -1}]]
        {:walls walls
         :pattern {:current 0
                   :steps (for [_ (range num-bounces)] (get walls (rand-int 4)))}
         :ball (ball (/ w 2) (/ h 2))}))
