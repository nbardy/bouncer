(defproject ball-roller "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :profiles {:dev {:source-paths ["dev"]
                   :dependencies [[figwheel "0.1.3-SNAPSHOT"]]
                   :plugins [[lein-figwheel "0.1.3-SNAPSHOT"]]}}

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [alandipert/storage-atom "1.2.3"]
                 [org.clojure/core.async "0.1.301.0-deb34a-alpha"]
                 [org.clojure/core.match "0.2.1"]
                 [org.clojure/clojurescript "0.0-2234"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-watcher "0.3.0"]
            [com.cemerick/clojurescript.test "0.2.3"]]

  :source-paths ["src/clj" "test"]

  :lein-watcher {:input-dir "src/clj/ball_roller/svgs/"
                 :output-dir "resources/public/images"
                 :output-type "svg"}

  :cljsbuild { 
    :builds [{:id "ball-roller"
              :source-paths ["src/cljs"]
              :compiler {
                :output-to "resources/public/ball_roller.js"
                :output-dir "resources/public/out/dev"
                :optimizations :none
                :source-map true}}
             {:id "test"
              :source-paths ["src/cljs" "test"]
              :compiler {
                :optimizations :none
                :pretty-print true
                :source-map true
                :output-dir "resources/public/out/test"
                :output-to "resources/public/testable.js"}}
             {:id "production"
              :source-paths ["src/cljs"]
              :compiler {
                :pretty-print false
                :optimizations :advanced
                :output-to "resources/public/index.js"
                :externs ["src/js/phonegap-mung.js", "resources/public/js/graphics.js"]}}]})
