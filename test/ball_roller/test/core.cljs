(ns ball-roller.test.core
  (:require-macros [cemerick.cljs.test :refer (is deftest with-test testing test-var)] )
  (:require [ball-roller.core :as core]
            [ball-roller.test.util]
            [ball-roller.components :as components]
            [cemerick.cljs.test :as t]))

(deftest in-between?
  (is (core/in-between? 1 [0 2]))
  (is (not (core/in-between? 4 [0 2]))))

(deftest collision?
  (is (core/collision? 
          {:x 0 :y 0 :radius 100}
          {:width 4 :height 4 :x 3 :y 3}))
  (is (not (core/collision?  
             {:x 0 :y 0 :radius 0}
             {:width 4 :height 4 :x 400 :y 400}))))

(enable-console-print!)

(cemerick.cljs.test/run-tests)
