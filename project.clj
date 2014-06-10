(defproject ball-roller "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [hiccup "1.0.5"]
                 [org.clojure/core.async "0.1.301.0-deb34a-alpha"]
                 [org.clojure/core.match "0.2.1"]
                 [org.clojure/clojurescript "0.0-2197"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-watcher "0.3.0"]
            [com.cemerick/clojurescript.test "0.2.3"]]

  :source-paths ["src/clj" ]

  :lein-watcher {:input-dir "src/clj/ball_roller/svgs/"
                 :output-dir "assets/images/"
                 :output-type "svg"}

  :cljsbuild { 
    :builds [{:id "ball-roller"
              :source-paths ["src/cljs"]
              :compiler {
                :output-to "ball_roller.js"
                :output-dir "out/dev"
                :optimizations :none
                :source-map true}}
             {:id "test"
              :source-paths ["src/cljs" "test"]
              :compiler {
                :optimizations :none
                :pretty-print true
                :source-map true
                :output-dir "out/test"
                :output-to "target/cljs/testable.js"}}
             {:id "production"
              :source-paths ["src/cljs"]
              :compiler {
                :pretty-print false
                :optimizations :advanced
                :output-to "index.js"
                :externs ["src/js/*"] }}]})
