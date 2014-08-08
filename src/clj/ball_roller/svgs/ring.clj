(ns ball-roller.svgs.ring
  (:use ball-roller.svg))

(defn ring [id & opacity-fn]
  (let [opacity-fn (if (empty? opacity-fn) identity (first opacity-fn))] 
    [:g {:id id :clip-path "url(#ring)"}
     ;; Blur the sectors together to make a smooth shape and rotate
     ;; them anti-clockwise by 6 degrees to hide the seam where the
     ;; fully opaque sector blurs with the fully transparent one.
     [:g {:filter "url(#blur)" :transform "rotate(-6 100 100)"}
      ;; Each successive sector increases in opacity and is rotated
      ;; by a further 12 degrees.
      (for [deg (range 0 360 12)]
        [:use {:xlink:href "#p" :fill-opacity (opacity-fn (/ deg 350))
               :transform (str "rotate(" deg " 100 100)")}])]]))

;; SVG ring modified from: http://stackoverflow.com/questions/22531861/create-circular-round-process-bar-with-gradient
(defsvg -main [] {:width 40 :height 40 :viewBox "0,0 200,200"}
  [:defs

   ;; Ring shape centred on 100, 100 with inner radius 90px, outer
   ;; radius 100px and a 12 degree gap at 348.
   [:clipPath {:id "ring"}
    [:path {:d (str "M" "200" "," "100"
                    "A 100, 100, 0, 1, 1, 197.81, 79.21
                    L 188.03, 81.29
                    A 90, 90, 0, 1, 0, 190, 100 z")}]]

   ;; Very simple Gaussian blur, used to visually merge sectors
   [:filter {:id "blur" :x "0" :y "0"}
    [:feGaussianBlur {:in "SourceGraphic" :stdDeviation "3"}]]

   ;; 12 degree sector extending to 150px
   [:path {:id "p" :d "M 250, 100
                      A 150, 150, 0, 0, 1, 246.72, 131.19
                      L 100, 100
                      A 0, 0, 0, 0, 0, 100, 100 z"}]

   ;;Clip the blurred sectors to the ring shape. -->
   (ring "r1" (fn [percent] 
                (if (< percent 0.3) 0 1)))]
  [:use {:xlink:href "#r1" :fill "cyan"}])
