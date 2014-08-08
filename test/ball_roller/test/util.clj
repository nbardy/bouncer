(ns ball-roller.test.util)

(defmacro run-tests [id]
  `(binding [~'*print-fn* (fn [in#] ball-roller.test.util/write-to-id ~id in#)]
     (cemerick.cljs.test/run-tests)))
