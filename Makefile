SHELL := /bin/bash

build: 
	lein do \
		cljsbuild clean, \
		cljsbuild once production
	make bundle

bundle:
	pushd ./resources/public ; \
	zip -l ../../build.zip \
		index.js \
		js/graphics.js \
		index.html \
		sounds/* \
		images/* \
		style.css

devop:
	lein watcher &
	lein figwheel

test:
	lein do \
		cljsbuild clean,
		cljsbuild once test
