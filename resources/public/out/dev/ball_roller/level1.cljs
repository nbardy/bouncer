(ns ball-roller.level1
  (:require [ball-roller.components :refer [ball]] ))

(def num-bounces 100)

(defn no-repeat
  ([from n] (no-repeat '() from n))
  ([col from n]
   (if (= (count col) n)
     col
     (recur (lazy-seq (cons (rand-nth (remove #(= (first col) %) from))
                            col)) from n))))

(defn new []
  (let [w js/window.innerWidth 
        h js/window.innerHeight
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
                   :steps 
                   (no-repeat walls num-bounces)}
         :ball (ball (/ w 2) 
                     (/ h 2))}))
