(ns ball-roller.graphics.ball
  (:require [ball-roller.util :refer [create-element]]))

(def PI js/Math.PI)

(def loop-time 90000)

(defn ring [rad] 
  (let [img (new js/Image)]
    (aset img "src" "/assets/images/ring.clj.svg")
    (aset img "width" (* 2 rad))
    (aset img "height" (* 2 rad))
    img))

(defn draw-ring [ctx x y rotate size]
    (.save ctx)
    (.translate ctx x y)
    (.rotate ctx rotate)
    (.drawImage ctx (ring (/ (size :width) 2))
                (- (/ (size :width) 2)) (- (/ (size :height) 2))
                (:width size) (:height size))
    (.restore ctx))

(defn to-rad [v] (* v (/ 360 PI)))

(defn rotate [timestamp shift speed] 
  (to-rad (/ (mod (+ timestamp shift) 90000) loop-time)))

(defn draw-ball [ctx state]
  (let [ball (state :ball)
        size {:width (ball :width)
              :height (ball :height)}
        timestamp (state :timestamp)
        x (-> ball :position :x)
        y (-> ball :position :y)]
    (draw-ring ctx x y (rotate timestamp 1000 1) {:width 32 :height 32})
    (draw-ring ctx x y (rotate (- timestamp) 90 20) size)))
