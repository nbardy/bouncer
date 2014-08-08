(ns ball-roller.util)

(defn create-element! [ele-name & attrs]
  (let [ele (.createElement js/document ele-name)]
    (doseq [[k v] (first attrs)]
      (.setAttribute ele (name k) v))
    ele))

(defn sign [x] (if (= x 0) 0 (/ (js/Math.abs x) x)))
(defn current-time$ 
  "Returns the current time.
   NOTE: Non-pure function."
  [] (.now js/Date))
