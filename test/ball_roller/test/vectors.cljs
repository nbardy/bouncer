(ns ball-roller.test.vectors
  (:require-macros [cemerick.cljs.test :refer (is deftest with-test testing test-var)])
  (:require [ball-roller.core :as core]
            [ball-roller.components :as components]
            [ball-roller.vector-math :as vec :refer [=?]]
            [cemerick.cljs.test :as t]))


(deftest eqtest
  (testing "Numbers"
    (=? 1 1.000000000001))
  (testing "Multiple"
    (=? 1 1 1))
  (testing "Vector"
    (is (=? [1 2] [1 2])))
  (testing "ArrayMap" 
    (is (=? {:x 1} {:x 1.00000000001}))
    (is (not (=? {:x 1} {:x 1.1})))))

(deftest scale
  (is (=? {:x 2} (vec/scale 2 {:x 1})))
  (is (=? {:x 1 :y 1} (vec/scale 2 {:x 0.5 :y 0.5}))))

(deftest add
  (is (=? {:x 2} (vec/add {:x 1} {:x 1}))
      (=? {:x 6 :y 9} (vec/add {:x 1 :y 9} {:y 0 :x 5}))))

(deftest sub
  (is (=? {:x 1} (vec/sub {:x 1} {:x 0})))
  (is (=? {:x 1 :y 1} (vec/sub {:x 3 :y 3} {:x 2 :y 2}))))

(deftest sub
  (is (=? 1 (vec/dist {:x 1} {:x 0})))
  (is (=? 5 (vec/dist {:x 0 :y 0} {:x 3 :y 4}))))

(deftest magnitude
  (is (=? 1 (vec/mag {:x 1})))
  (is (=? 7 (vec/mag {:x 2 :y 3 :z 6})))
  (is (=? 5 (vec/mag {:x 3 :y 4}))))

(deftest unit
  (is (=? {:a 1} (vec/unit {:a 9080})))
  (is (=? {:t (/ 4 5) :s (/ 3 5)} (vec/unit {:t 4 :s 3}))))

(deftest orthagonal
  (is (=? [{:a -2 :b 1} {:a 2 :b -1}]
           (vec/orthogonal {:a 1 :b 2})))
  (is (=? [{:x 0 :y 1} {:x 0 :y -1}] (vec/orthogonal {:x 1 :y 0}))))

(cemerick.cljs.test/run-tests)
