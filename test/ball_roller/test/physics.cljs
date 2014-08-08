(ns ball-roller.test.physics
  (:require-macros [cemerick.cljs.test :refer (is deftest with-test testing test-var with-test-out)])
  (:require [ball-roller.core :as core]
            [ball-roller.components :as components]
            [cemerick.cljs.test :as t]))

(defn key1-increases-by-key2 [key1 key2]
  (fn [val]
    (doseq [k (keys ((components/ball 0 0) key1))]
      (let [oldball (assoc-in (components/ball 0 0) [key2 k] val)
            newball (core/update-physics oldball 1)]
        (is (= (get-in newball [key1 k])
               (+ (get-in oldball [key1 k])
                  val)))))))

(deftest base-physics
  (doseq [val [-100 0 1 1.9]]
    (testing (str "Position by Velocity" " Value: " val)
      ((key1-increases-by-key2 :position :velocity) val))
    (testing (str "Velocity by Acceleration" " Value: " val)
      ((key1-increases-by-key2 :velocity :acceleration) val))))

(deftest in-between?
  (is (core/in-between? 1 [0 2]))
  (is (not (core/in-between? 4 [0 2]))))

(deftest bounce
  (testing "No walls"
    (let [b1 (components/ball 0 0)
          b2 (components/ball 2 0)]
      (is (= (core/bounce b2 b1 []) b2))))
  (testing "Collision"
    (let [b1 (components/ball 100 0)
          b2 (components/ball 200 0)]
      (is (not= (core/bounce b2 b1 [{:coord :x :pos 190 :direction 1 :length 1000}]) 
             b2)))))

(cemerick.cljs.test/run-tests)
