(ns ball-roller.sounds
  (:require [ball-roller.util :refer [create-element]]))

(defn clamp [x [bottom top]]
  (js/Math.min (js/Math.max x bottom) top))

(defn ball-speed-to-volume [speed]
  (-> speed 
    (/ 1.2)
    (clamp [0 1])
    (#(* % %))))

(defn get-hit-noise [hit] 
  (case [(:coord hit) (:direction hit)]
    [:x 1] "boink.wav"
    [:y 1] "boink.wav"
    [:x -1] "boink.wav"
    [:y -1] "boink.wav"
    "squish.mp3" ))
    

(defn play-sound [uri volume]
  (let [audio (create-element "audio" {:src uri})]
      (set! (.-volume audio) volume)
      (.play audio)))

(defn play [state]
  (if-let [hit (-> state :ball :has-bounced?)]
    (play-sound (get-hit-noise hit)
                (-> hit :speed ball-speed-to-volume))))
