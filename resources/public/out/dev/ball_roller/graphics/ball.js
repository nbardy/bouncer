// Compiled by ClojureScript 0.0-2234
goog.provide('ball_roller.graphics.ball');
goog.require('cljs.core');
goog.require('ball_roller.util');
goog.require('ball_roller.vector_math');
goog.require('ball_roller.vector_math');
goog.require('ball_roller.util');
ball_roller.graphics.ball.PI = Math.PI;
ball_roller.graphics.ball.loop_time = 90000;
ball_roller.graphics.ball.directory = "/images";
ball_roller.graphics.ball.ring = (function ring(rad){var img = (new Image());(img["src"] = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ball_roller.graphics.ball.directory)+"/ring.clj.svg"));
(img["width"] = (2 * rad));
(img["height"] = (2 * rad));
return img;
});
ball_roller.graphics.ball.to_rad = (function to_rad(v){return (v * (360 / ball_roller.graphics.ball.PI));
});
ball_roller.graphics.ball.now = Date.now();
ball_roller.graphics.ball.rotate = (function rotate(timestamp,shift,speed){return ((((timestamp - ball_roller.graphics.ball.now) / 360) * speed) + shift);
});
ball_roller.graphics.ball.draw_ring = (function draw_ring(ctx,x,y,rotate,width,radius,percent){ctx.beginPath();
(ctx["lineWidth"] = width);
ctx.arc(x,y,radius,(0 + rotate),(rotate + ((2 * Math.PI) * percent)));
return ctx.stroke();
});
ball_roller.graphics.ball.draw_ball = (function draw_ball(ctx,p__23408){var map__23416 = p__23408;var map__23416__$1 = ((cljs.core.seq_QMARK_.call(null,map__23416))?cljs.core.apply.call(null,cljs.core.hash_map,map__23416):map__23416);var state = map__23416__$1;var bounce_time = cljs.core.get.call(null,map__23416__$1,new cljs.core.Keyword(null,"bounce-time","bounce-time",2985182820));var timestamp = cljs.core.get.call(null,map__23416__$1,new cljs.core.Keyword(null,"timestamp","timestamp",1069030536));var ball = cljs.core.get.call(null,map__23416__$1,new cljs.core.Keyword(null,"ball","ball",1016920433));var radius = ball.call(null,new cljs.core.Keyword(null,"radius","radius",4370292740));var size = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),radius,new cljs.core.Keyword(null,"height","height",4087841945),radius], null);var timestamp__$1 = state.call(null,new cljs.core.Keyword(null,"timestamp","timestamp",1069030536));var timeleft = (bounce_time - (function (){var temp__4090__auto__ = state.call(null,new cljs.core.Keyword(null,"correct-hit","correct-hit",2478137122));if(cljs.core.truth_(temp__4090__auto__))
{var hit = temp__4090__auto__;return (timestamp__$1 - hit);
} else
{return 0;
}
})());var percent = (((timeleft > 0))?(timeleft / state.call(null,new cljs.core.Keyword(null,"bounce-time","bounce-time",2985182820))):0);var inner_rad = (1 * ball.call(null,new cljs.core.Keyword(null,"radius","radius",4370292740)));var percent__$1 = (1 - percent);var ring_width = ((inner_rad - 0) / 6);var x = new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(ball));var y = new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(ball));(ctx["strokeStyle"] = "rgba(0,185,195,1)");
if(cljs.core._EQ_.call(null,percent__$1,1))
{} else
{var seq__23417_23423 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [400,1.4,0.1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [400,-1.9,0.25], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [400,1.4,0.4], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [200,-1.8,0.55], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [600,1.2,0.7], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [800,-1.2,0.85], null)], null));var chunk__23418_23424 = null;var count__23419_23425 = 0;var i__23420_23426 = 0;while(true){
if((i__23420_23426 < count__23419_23425))
{var vec__23421_23427 = cljs.core._nth.call(null,chunk__23418_23424,i__23420_23426);var shift_23428 = cljs.core.nth.call(null,vec__23421_23427,0,null);var speed_23429 = cljs.core.nth.call(null,vec__23421_23427,1,null);var rad_23430 = cljs.core.nth.call(null,vec__23421_23427,2,null);ball_roller.graphics.ball.draw_ring.call(null,ctx,x,y,ball_roller.graphics.ball.rotate.call(null,timestamp__$1,shift_23428,speed_23429),ring_width,(rad_23430 * inner_rad),percent__$1);
{
var G__23431 = seq__23417_23423;
var G__23432 = chunk__23418_23424;
var G__23433 = count__23419_23425;
var G__23434 = (i__23420_23426 + 1);
seq__23417_23423 = G__23431;
chunk__23418_23424 = G__23432;
count__23419_23425 = G__23433;
i__23420_23426 = G__23434;
continue;
}
} else
{var temp__4092__auto___23435 = cljs.core.seq.call(null,seq__23417_23423);if(temp__4092__auto___23435)
{var seq__23417_23436__$1 = temp__4092__auto___23435;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23417_23436__$1))
{var c__11892__auto___23437 = cljs.core.chunk_first.call(null,seq__23417_23436__$1);{
var G__23438 = cljs.core.chunk_rest.call(null,seq__23417_23436__$1);
var G__23439 = c__11892__auto___23437;
var G__23440 = cljs.core.count.call(null,c__11892__auto___23437);
var G__23441 = 0;
seq__23417_23423 = G__23438;
chunk__23418_23424 = G__23439;
count__23419_23425 = G__23440;
i__23420_23426 = G__23441;
continue;
}
} else
{var vec__23422_23442 = cljs.core.first.call(null,seq__23417_23436__$1);var shift_23443 = cljs.core.nth.call(null,vec__23422_23442,0,null);var speed_23444 = cljs.core.nth.call(null,vec__23422_23442,1,null);var rad_23445 = cljs.core.nth.call(null,vec__23422_23442,2,null);ball_roller.graphics.ball.draw_ring.call(null,ctx,x,y,ball_roller.graphics.ball.rotate.call(null,timestamp__$1,shift_23443,speed_23444),ring_width,(rad_23445 * inner_rad),percent__$1);
{
var G__23446 = cljs.core.next.call(null,seq__23417_23436__$1);
var G__23447 = null;
var G__23448 = 0;
var G__23449 = 0;
seq__23417_23423 = G__23446;
chunk__23418_23424 = G__23447;
count__23419_23425 = G__23448;
i__23420_23426 = G__23449;
continue;
}
}
} else
{}
}
break;
}
}
ctx.beginPath();
(ctx["strokeStyle"] = "rgba(0,0,0,0.6)");
(ctx["lineWidth"] = (1 * 6));
ctx.arc(x,y,ball.call(null,new cljs.core.Keyword(null,"radius","radius",4370292740)),0,(Math.PI * 2));
ctx.stroke();
if(cljs.core._EQ_.call(null,percent__$1,0))
{(ctx["fillStyle"] = "rgba(0,185,195,1)");
return ctx.fill();
} else
{return null;
}
});

//# sourceMappingURL=ball.js.map