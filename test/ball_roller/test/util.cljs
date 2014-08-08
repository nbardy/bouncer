(ns ball-roller.test.util
  (:require [ball-roller.util :refer [create-element]]
            [clojure.string :refer [capitalize]]))

(defn write-to-id [id attrs content]
  (let [ele (or (.getElementById js/document id)
                (let [ele (create-element "div" (merge {:id id} attrs))] 
                  (.appendChild js/document.body ele)
                  ele))
        body (str "<h4>" id "</h4>" content)]
    (set! (.-innerHTML ele) body)))

(defn p [id results]
  (let [text (str (:pass results) "Passed. "
                  (:fail results) "Failed. ")]
    (write-to-id (capitalize id) 
                 (if true {} {})
                 text)))

