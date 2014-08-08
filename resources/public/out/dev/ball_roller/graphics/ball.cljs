(ns ball-roller.graphics.ball
  (:require [ball-roller.util :refer [create-element!]]
            [ball-roller.vector-math :as vec]))

(def PI js/Math.PI)

(def loop-time 90000)

(def directory "/images")

(defn ring [rad] 
  (let [img (new js/Image)]
    (aset img "src" (str directory "/ring.clj.svg"))
    (aset img "width" (* 2 rad))
    (aset img "height" (* 2 rad))
    img))

(defn to-rad [v] (* v (/ 360 PI)))

(def now (.now js/Date))

(defn rotate [timestamp shift speed]
	(-> timestamp
            (- now)
            (/ 360)
            (* speed)
	    (+ shift)))

(defn draw-ring [ctx x y rotate width radius percent]
    (.beginPath ctx)
    (aset ctx "lineWidth" width)
    (.arc ctx x y radius 
          (+ 0 rotate) 
          (+ rotate (* 2 js/Math.PI percent)))
    (.stroke ctx))

(defn draw-ball [ctx {:keys [ball timestamp bounce-time] :as state}]
  (let [radius (ball :radius)
        size {:width radius
              :height radius}
        timestamp (state :timestamp)
        ; Ball starts full
        timeleft (- bounce-time 
                    (if-let [hit (state :correct-hit)]
                      (- timestamp hit) 0))
        ; Ball renders blank with negatives
        percent (if (> timeleft 0)
                  (-> timeleft (/ (state :bounce-time)))
                  0)
        inner-rad (* 1 (ball :radius))
        percent (- 1 percent)
        ring-width (-> inner-rad (- 0) (/ 6))
        x (-> ball :position :x)
        y (-> ball :position :y)]
    (aset ctx "strokeStyle" "rgba(0,185,195,1)")
    (when-not (= percent 1)
      (doseq [[shift speed rad] [[400 1.4 0.1]
                              [400 -1.9 0.25]
                              [400 1.4 0.40]
                              [200 -1.8 0.55]
                              [600 1.2 0.70]
                              [800 -1.2 0.85]]]
        (draw-ring ctx x y (rotate timestamp shift speed) 
                   ring-width (* rad inner-rad) percent)))
    (.beginPath ctx)
    (aset ctx "strokeStyle" "rgba(0,0,0,0.6)")
    (aset ctx "lineWidth" (* 1 6))
    (.arc ctx x y (ball :radius) 0 (* js/Math.PI 2))
    (.stroke ctx)
    (when (= percent 0)
      (aset ctx "fillStyle" "rgba(0,185,195,1)")
      (.fill ctx))))

