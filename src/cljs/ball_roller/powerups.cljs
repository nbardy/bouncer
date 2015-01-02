(ns ball-roller.powerups
  (:require [ball-roller.util :refer [create-element current-time$]]
            [ball-roller.components :refer [powerup]]))

(def grow-ball!
  [0
   (fn [state dt dump]
     (let [grow #(+ % (* (get-in state [:ball :radius]) 0.001 dt))]
       (do state
           (print "grow by" (grow (-> state :ball :radius)))
           (swap! dump grow)
           (update-in state [:ball :radius] grow))))
   (fn [state dt dump]
     (let [shrink #(- % (* @dump 0.14 dt))]
       (do state
           (print "shrink by" (shrink (-> state :ball :radius)))
           (swap! dump shrink)
           (update-in state [:ball :radius] shrink))))])

(defn add-powerup [{:keys [width height] :as state} seed]
  (-> state 
      (update-in [:items] conj (powerup {:x (rand width)
                                         :y (rand height)
                                         :effect grow-ball!} (state :timestamp)))
      (update-in [:last-powerup] current-time$)))

(declare spawn-powerups%)
(declare clear-expired-powerups)
(declare utilize-powerups)
(defn handle-powerups% [state dt] 
  (-> state
      (spawn-powerups%)
      (utilize-powerups dt)
      (clear-expired-powerups)))

; TODO: Turn this into path collision, not static
(defn utilize-powerups 
  "Transforms state based on the "
  [state dt] 
  ((apply comp (map (fn [powerup] #(powerup % dt)) 
                    (state :powerups))) state))

(defn spawn-powerups%
  "Spawns powerups.
  NOTE: Non-pure random function"
  [state]
  (if-let [last-powerup (:last-powerup state)]
    (if (< (rand 1700000) (- (current-time$) last-powerup) )
      (add-powerup state (rand 10))
      state)
    (spawn-powerups% (assoc state :last-powerup (current-time$)))))

(defn clear-expired [items t]
  (filter #(> (:expires %) t) items))

(defn clear-expired-powerups [state] 
  (-> state 
      (update-in [:items] #(clear-expired % (state :timestamp)))))

