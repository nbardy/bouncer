build: 
	lein cljsbuild clean
	lein cljsbuild once production
	zip -l build.zip \
	index.js \
	index.html \
	assets/sounds/* \
	assets/images/* \
	style.css
