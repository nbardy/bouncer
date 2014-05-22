(defproject ball-roller "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/core.async "0.1.301.0-deb34a-alpha"]
                 [org.clojure/core.match "0.2.1"]
                 [org.clojure/clojurescript "0.0-2173"]]

  :plugins [[lein-cljsbuild "1.0.2"]]

  :source-paths ["src"]

  :cljsbuild { 
    :builds [{:id "ball-roller"
              :source-paths ["src"]
              :compiler {
                :output-to "ball_roller.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}
             {:id "production"
              :source-paths ["src"]
              :compiler {
                :output-to "index.js"
                :output-dir "out/production"
                :pretty-print false
                :externs ["phonegap-mung.js"]
                :optimizations :advanced}}
             ]})
