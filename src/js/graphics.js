/**
 * @type {Object}
 * @const
 */
var Graphics = {};

/**
 * @type {number}
 * @const
 */
Graphics.start = Date.now();


// Seeed code from here.
// http://indiegamr.com/generate-repeatable-random-numbers-in-js/
/**
 * @type {number}
 * @const
 */
Math.seed = 1;

/* @param {number} min
 * @param {number} max
 */
Math.seededRandom = function(min,max) {
    Math.seed = (Math.seed * 9301 + 49297) % 233280;
    return min + Math.seed/233280 * (max - min); 
}

/**
 * @param {Object} ctx
 * @param {string} text
 * @param {number} x
 * @param {number} y
 * @param {number} blur
 */
Graphics.neonLightEffect = function(ctx,text,x,y) {
  var size = "40px"
  var font = size + " " + "Futura, Helvetica, sans-serif";
  var jitter = 5; // the distance of the maximum jitter
  var offsetX = x;
  var offsetY = y;
  var blur = 100;
  ctx.font = font;
  var metrics = ctx.measureText(text);
  metrics.height = parseInt(size.slice(0,-2))
  Math.seed = text.charCodeAt(0) + 
    (text.charCodeAt(1) || 0) * 34.4 +
    (text.charCodeAt(2) || 0) * 14.4 
  // Seed random so the word is drawn the same everytime.
  
  // create the rainbow linear-gradient
  speed = Math.seededRandom(0.0071,0.00923) / 52
  gradientOff = Math.seededRandom(0,1) + speed  * (Date.now() - Graphics.start)
  ctx.lineWidth = 0.40;
  var i = 4; while(i--) { 
    var left = Math.seededRandom(-jitter,jitter);
    var top = Math.seededRandom(-jitter, jitter);
    // ctx.rect(0,0,left + offsetX, top + offsetY);
    // ctx.stroke()

    // Make gradient
    var gradient = ctx.createLinearGradient(0, 0, metrics.width + 70, 0);
    makeRainbow(gradient, gradientOff )
    ctx.strokeStyle = gradient;
    ctx.strokeText(text, left + offsetX, top + offsetY);
  }    
  ctx.lineWidth = 3.20;
  ctx.strokeStyle = 'white';
  ctx.strokeText(text, offsetX, offsetY);

};

var makeRainbow = function(gradient,shift) {
  shift = shift%1
  var colors = ["rgba(255, 0, 0, 1)",
    "rgba(255, 255, 0, 1)",
    "rgba(0, 255, 0, 1)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(255, 0, 255, 1)",
    "rgba(255, 0, 0, 1)"]

  
  var l = colors.length ;
  var segment = 1 / (l - 1);
  for(var i = 0; i < l; i++) {
    gradient.addColorStop(((segment * i) + shift)%1 , colors[i]);
  }
}


var getBlurValue = function (v) { return v;}

