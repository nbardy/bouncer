(ns ball-roller.components)

(defn ball [x y]
  {:radius 40
   :width 40
   :height 40
   :position {:x x :y y}
   :acceleration {:x 0 :y 0}
   :velocity {:x 0 :y 0}})

(def default-width 40)
(def default-height 40)
(def default-duration 4000)
(def default-effect-duration 6000)

(defn activate-powerup 
  "Generates a clojure which activates the given powerup."
  [[init-dump active cleanup] duration]
  (print "dur " duration)
  (fn [original-state]
    (update-in original-state [:powerups] conj 
               (let [dump (atom init-dump)]
                  (fn [{:keys [timestamp] :as state} dt]
                    (print timestamp)
                    (if (< timestamp (+ timestamp duration))
                      (active state dt dump)
                      (cleanup state dt dump)))))))

(defn powerup [{:keys [x y width height effect duration effect-duration]
                :or {duration default-duration
                     height default-height
                     width default-width
                     effect-duration default-effect-duration }}
               t]
  "Create a new powerup component."
  {:x x :y y :width width :height height
   :expires (+ t duration)
   :activate (activate-powerup effect effect-duration)}) 
