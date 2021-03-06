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
 */
Graphics.neonLightEffect = function(ctx,text,x,y) {
  var size = "65px"
  var font = size + " " + "Futura, Helvetica, sans-serif";
  var jitter = 5; // the distance of the maximum jitter
  var offsetX = x;
  var offsetY = y;
  var blur = 100;
  ctx.font = font;
  var metrics = {width: 800};
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
    "rgba(255, 0, 255, 1)"]

  var colors_with = [];
  
  var l = colors.length ;
  var segment = 1 / l;
  for(var i = 0; i < l; i++) {
    colors_with.push([colors[i],  ((segment * i) + shift)%1])
  }
  var sortedByPercent = colors_with.sort(function(a,b) {
    return a[1] - b[1];
  })
  for(var i= 0; i < sortedByPercent.length; i++) {
   gradient.addColorStop(sortedByPercent[i][1], sortedByPercent[i][0]);
  }
}


var getBlurValue = function (v) { return v;}

/**
 * @param {Object} ctx
 * @param {Object} pts
 * @param {number} t
 */
Graphics.drawSpline = function(ctx,pts,t){
    ctx.lineWidth=0;
    ctx.save();
    var cp=[];   // array of control points, as x0,y0,x1,y1,...
    var n=pts.length;
    close = false;
    ctx.shadowBlur = 10;
    ctx.shadowColor = "blue";
    ctx.strokeStyle = null;

    if(closed){
        //   Append and prepend knots and control points to close the curve
        pts.push(pts[0],pts[1],pts[2],pts[3]);
        pts.unshift(pts[n-1]);
        pts.unshift(pts[n-1]);
        for(var i=0;i<n;i+=2){
            cp=cp.concat(Graphics.getControlPoints(pts[i],pts[i+1],pts[i+2],pts[i+3],pts[i+4],pts[i+5],t));
        }
        cp=cp.concat(cp[0],cp[1]);   
        for(var i=2;i<n+2;i+=2){
            var color=HSVtoRGB(Math.floor(240*(i-2)/(n-2)),0.8,0.8);
            ctx.beginPath();
            ctx.moveTo(pts[i],pts[i+1]);
            ctx.bezierCurveTo(cp[2*i-2],cp[2*i-1],cp[2*i],cp[2*i+1],pts[i+2],pts[i+3]);
            ctx.stroke();
            ctx.closePath();
        }
    }else{  
        // Draw an open curve, not connected at the ends
        for(var i=0;i<n-4;i+=2){
            cp=cp.concat(Graphics.getControlPoints(pts[i],pts[i+1],pts[i+2],pts[i+3],pts[i+4],pts[i+5],t));
        }    
        for(var i=2;i<pts.length-5;i+=2){
            ctx.beginPath();
            ctx.moveTo(pts[i],pts[i+1]);
            ctx.bezierCurveTo(cp[2*i-2],cp[2*i-1],cp[2*i],cp[2*i+1],pts[i+2],pts[i+3]);
            ctx.stroke();
            ctx.closePath();
        }
        //  For open curves the first and last arcs are simple quadratics.
        ctx.beginPath();
        ctx.moveTo(pts[0],pts[1]);
        ctx.quadraticCurveTo(cp[0],cp[1],pts[2],pts[3]);
        ctx.stroke();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.moveTo(pts[n-2],pts[n-1]);
        ctx.quadraticCurveTo(cp[2*n-10],cp[2*n-9],pts[n-4],pts[n-3]);
        ctx.stroke();
        ctx.closePath();
    }
    ctx.restore();
    
}

/**
 * @param {number} x0
 * @param {number} y0
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} t
 */
Graphics.getControlPoints = function(x0,y0,x1,y1,x2,y2,t){
    //  Scaling factors: distances from this knot to the previous and following knots.
    var d01=Math.sqrt(Math.pow(x1-x0,2)+Math.pow(y1-y0,2));
    var d12=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
   
    var fa=t*d01/(d01+d12);
    var fb=t-fa;
  
    var p1x=x1+fa*(x0-x2);
    var p1y=y1+fa*(y0-y2);

    var p2x=x1-fb*(x0-x2);
    var p2y=y1-fb*(y0-y2);  
    
    return [p1x,p1y,p2x,p2y]
}

/* 
 * @param {number} t
 * @param {number} speed
 */
Graphics.bounce = function(t, speed) {
  return Math.cos(t/speed * 2 * Math.PI + 4) + Math.sin(t* (1/speed) * 2 * Math.PI);
}
/* 
 * @param {Object} ctx
 * @param {number} width
 * @param {number} height
 * @param {number} rows
 * @param {number} cols
 * @param {number} randness
 * @param {number} t
 */
Graphics.Tesselation = function(ctx, width, height, rows , cols, randness, t) {
  var bounceAmp = 60;
  var animBaseSpeed = 8000;
  var points = [];
  var fudge = function (at) { return bounceAmp * Graphics.bounce(at,animBaseSpeed);}
  for(var i = 0; i < rows; i++) {
    for(var j = 0; j < cols; j++) {
      // Default fudge edges
      Math.seed = i * 9 * j * 10;
      // Add a shift
      var xspeedmod = Math.seededRandom(0.8,1.2);
      var yspeedmod = Math.seededRandom(0.8,1.2);
      var xshiftmod = Math.seededRandom(-2000,2000);
      var yshiftmod = Math.seededRandom(-2000,2000);
      var xt = (t * xspeedmod) + xshiftmod;
      var yt = (t * yspeedmod) + yshiftmod;
      var xfudge;
      if( i === 0) { xfudge = -40; }
      else if(i === (rows - 1)) { xfudge = 40; }
      else { xfudge = Math.seededRandom(-1,1) * fudge(xt);}

      var yfudge;
      if(j === 0) { yfudge = -40; }
      else if(j === (cols - 1)) { yfudge = 40; }
      else { yfudge = Math.seededRandom(-1,1) * fudge(yt); }

      points.push([xfudge + i * (width / (rows - 1)),
            yfudge + j * (height / (cols - 1))])
    }
  }

  var triangles = Delaunay.triangulate(points);

  var i = triangles.length;
  while (i) {
    i--;
    var pt1 = [points[triangles[i]][0], points[triangles[i]][1]]; i--;
    var pt2 = [points[triangles[i]][0], points[triangles[i]][1]]; i--;
    var pt3 = [points[triangles[i]][0], points[triangles[i]][1]];
    ctx.fillStyle = Graphics.getTriangleColor(pt1,pt2,pt3,width,height);
    ctx.beginPath();
    ctx.moveTo(pt1[0],pt1[1]);
    ctx.lineTo(pt2[0],pt2[1]);
    ctx.lineTo(pt3[0],pt3[1]);
    ctx.closePath();
    ctx.fill();
  }
}

/*
 * @param {Object} triangle
 * @param {num} width
 * @param {num} height
 */
Graphics.getTriangleColor = function (pt1,pt2,pt3, width, height) {
	var midPoint = function (point1,point2) {
		return [(point1[0]+point2[0])/2, (point1[1]+point2[1])/2];
	}
	// Pick a point inside the triangle
	var point = midPoint(pt3, midPoint(pt1,pt2));
  return "rgb(" + Math.floor(point[0]/width * 255) + ",0," + 
    Math.floor(point[1]/height * 255) + ")";
}
