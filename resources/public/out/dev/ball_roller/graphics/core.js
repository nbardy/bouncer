// Compiled by ClojureScript 0.0-2234
goog.provide('ball_roller.graphics.core');
goog.require('cljs.core');
goog.require('ball_roller.graphics.ball');
goog.require('clojure.set');
goog.require('ball_roller.graphics.ball');
goog.require('ball_roller.graphics.powerups');
goog.require('ball_roller.graphics.powerups');
goog.require('ball_roller.vector_math');
goog.require('ball_roller.vector_math');
goog.require('clojure.set');
ball_roller.graphics.core.glow_length = 900;
ball_roller.graphics.core.glow_width = 25;
ball_roller.graphics.core.clear = (function clear(canvas){var ctx = canvas.getContext("2d");(ctx["fillStyle"] = "rgb(26,26,26)");
return canvas.getContext("2d").fillRect(0,0,canvas.width,canvas.height);
});
ball_roller.graphics.core.wall_fill = (function wall_fill(ctx,coord,x,y,width,height,direction,intensity){var color = (function (){var G__18369 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord,direction], null);if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",1013904363),-1], null),G__18369))
{return "rgba(123,0,123,";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362),-1], null),G__18369))
{return "rgba(0,123,176,";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362),1], null),G__18369))
{return "rgba(0,255,0,";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return "rgba(255,0,0,";
} else
{return null;
}
}
}
}
})();var gradient = ctx.createLinearGradient(x,y,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",1013904362),coord))?(x + width):0),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"y","y",1013904363),coord))?(y + height):0));var seq__18370_18376 = cljs.core.seq.call(null,((cljs.core._EQ_.call(null,direction,1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,0.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.8,0], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.2,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.9,0.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0.3], null)], null)));var chunk__18371_18377 = null;var count__18372_18378 = 0;var i__18373_18379 = 0;while(true){
if((i__18373_18379 < count__18372_18378))
{var vec__18374_18380 = cljs.core._nth.call(null,chunk__18371_18377,i__18373_18379);var pos_18381 = cljs.core.nth.call(null,vec__18374_18380,0,null);var alpha_18382 = cljs.core.nth.call(null,vec__18374_18380,1,null);gradient.addColorStop(pos_18381,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alpha_18382)+")"));
{
var G__18383 = seq__18370_18376;
var G__18384 = chunk__18371_18377;
var G__18385 = count__18372_18378;
var G__18386 = (i__18373_18379 + 1);
seq__18370_18376 = G__18383;
chunk__18371_18377 = G__18384;
count__18372_18378 = G__18385;
i__18373_18379 = G__18386;
continue;
}
} else
{var temp__4092__auto___18387 = cljs.core.seq.call(null,seq__18370_18376);if(temp__4092__auto___18387)
{var seq__18370_18388__$1 = temp__4092__auto___18387;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18370_18388__$1))
{var c__11892__auto___18389 = cljs.core.chunk_first.call(null,seq__18370_18388__$1);{
var G__18390 = cljs.core.chunk_rest.call(null,seq__18370_18388__$1);
var G__18391 = c__11892__auto___18389;
var G__18392 = cljs.core.count.call(null,c__11892__auto___18389);
var G__18393 = 0;
seq__18370_18376 = G__18390;
chunk__18371_18377 = G__18391;
count__18372_18378 = G__18392;
i__18373_18379 = G__18393;
continue;
}
} else
{var vec__18375_18394 = cljs.core.first.call(null,seq__18370_18388__$1);var pos_18395 = cljs.core.nth.call(null,vec__18375_18394,0,null);var alpha_18396 = cljs.core.nth.call(null,vec__18375_18394,1,null);gradient.addColorStop(pos_18395,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(alpha_18396)+")"));
{
var G__18397 = cljs.core.next.call(null,seq__18370_18388__$1);
var G__18398 = null;
var G__18399 = 0;
var G__18400 = 0;
seq__18370_18376 = G__18397;
chunk__18371_18377 = G__18398;
count__18372_18378 = G__18399;
i__18373_18379 = G__18400;
continue;
}
}
} else
{}
}
break;
}
return gradient;
});
ball_roller.graphics.core.draw_glowing_wall_BANG_ = (function draw_glowing_wall_BANG_(ctx,p__18401){var map__18406 = p__18401;var map__18406__$1 = ((cljs.core.seq_QMARK_.call(null,map__18406))?cljs.core.apply.call(null,cljs.core.hash_map,map__18406):map__18406);var item = map__18406__$1;var intensity = cljs.core.get.call(null,map__18406__$1,new cljs.core.Keyword(null,"intensity","intensity",1513229221));var direction = cljs.core.get.call(null,map__18406__$1,new cljs.core.Keyword(null,"direction","direction",4346280689));var length = cljs.core.get.call(null,map__18406__$1,new cljs.core.Keyword(null,"length","length",4202507864));var pos = cljs.core.get.call(null,map__18406__$1,new cljs.core.Keyword(null,"pos","pos",1014015430));var coord = cljs.core.get.call(null,map__18406__$1,new cljs.core.Keyword(null,"coord","coord",1108749927));var vec__18407 = ((cljs.core._EQ_.call(null,coord,new cljs.core.Keyword(null,"x","x",1013904362)))?cljs.core.identity:cljs.core.reverse).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [length,(ball_roller.graphics.core.glow_width * intensity)], null));var height = cljs.core.nth.call(null,vec__18407,0,null);var width = cljs.core.nth.call(null,vec__18407,1,null);var vec__18408 = (function (){var G__18409 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord,direction], null);if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",1013904363),-1], null),G__18409))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,(pos - height)], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",1013904363),1], null),G__18409))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,pos], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362),-1], null),G__18409))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pos - width),0], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362),1], null),G__18409))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,0], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord,direction], null)))));
} else
{return null;
}
}
}
}
}
})();var x = cljs.core.nth.call(null,vec__18408,0,null);var y = cljs.core.nth.call(null,vec__18408,1,null);(ctx["fillStyle"] = ball_roller.graphics.core.wall_fill.call(null,ctx,coord,x,y,width,height,direction,intensity));
return ctx.fillRect(x,y,width,height);
});
ball_roller.graphics.core.draw_wall_hits = (function draw_wall_hits(ctx,state){var seq__18416 = cljs.core.seq.call(null,state.call(null,new cljs.core.Keyword(null,"wall-hits","wall-hits",2426925269)));var chunk__18417 = null;var count__18418 = 0;var i__18419 = 0;while(true){
if((i__18419 < count__18418))
{var vec__18420 = cljs.core._nth.call(null,chunk__18417,i__18419);var wall = cljs.core.nth.call(null,vec__18420,0,null);var hit_time = cljs.core.nth.call(null,vec__18420,1,null);var current_time_18422 = state.call(null,new cljs.core.Keyword(null,"timestamp","timestamp",1069030536));var speed_18423 = wall.call(null,new cljs.core.Keyword(null,"speed","speed",1123546041));if(((hit_time - state.call(null,new cljs.core.Keyword(null,"timestamp","timestamp",1069030536))) > (0 - ball_roller.graphics.core.glow_length)))
{ball_roller.graphics.core.draw_glowing_wall_BANG_.call(null,ctx,cljs.core.merge.call(null,wall,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intensity","intensity",1513229221),((speed_18423 * 100) / (current_time_18422 - hit_time))], null)));
} else
{}
{
var G__18424 = seq__18416;
var G__18425 = chunk__18417;
var G__18426 = count__18418;
var G__18427 = (i__18419 + 1);
seq__18416 = G__18424;
chunk__18417 = G__18425;
count__18418 = G__18426;
i__18419 = G__18427;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18416);if(temp__4092__auto__)
{var seq__18416__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18416__$1))
{var c__11892__auto__ = cljs.core.chunk_first.call(null,seq__18416__$1);{
var G__18428 = cljs.core.chunk_rest.call(null,seq__18416__$1);
var G__18429 = c__11892__auto__;
var G__18430 = cljs.core.count.call(null,c__11892__auto__);
var G__18431 = 0;
seq__18416 = G__18428;
chunk__18417 = G__18429;
count__18418 = G__18430;
i__18419 = G__18431;
continue;
}
} else
{var vec__18421 = cljs.core.first.call(null,seq__18416__$1);var wall = cljs.core.nth.call(null,vec__18421,0,null);var hit_time = cljs.core.nth.call(null,vec__18421,1,null);var current_time_18432 = state.call(null,new cljs.core.Keyword(null,"timestamp","timestamp",1069030536));var speed_18433 = wall.call(null,new cljs.core.Keyword(null,"speed","speed",1123546041));if(((hit_time - state.call(null,new cljs.core.Keyword(null,"timestamp","timestamp",1069030536))) > (0 - ball_roller.graphics.core.glow_length)))
{ball_roller.graphics.core.draw_glowing_wall_BANG_.call(null,ctx,cljs.core.merge.call(null,wall,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intensity","intensity",1513229221),((speed_18433 * 100) / (current_time_18432 - hit_time))], null)));
} else
{}
{
var G__18434 = cljs.core.next.call(null,seq__18416__$1);
var G__18435 = null;
var G__18436 = 0;
var G__18437 = 0;
seq__18416 = G__18434;
chunk__18417 = G__18435;
count__18418 = G__18436;
i__18419 = G__18437;
continue;
}
}
} else
{return null;
}
}
break;
}
});
ball_roller.graphics.core.old_states = 12;
ball_roller.graphics.core.draw_ball_path = (function draw_ball_path(ctx,state){var ball_states = cljs.core.filter.call(null,(function (p1__18438_SHARP_){return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"velocity","velocity",3148165199).cljs$core$IFn$_invoke$arity$1(p1__18438_SHARP_)),0);
}),cljs.core.map.call(null,new cljs.core.Keyword(null,"ball","ball",1016920433),cljs.core.concat.call(null,cljs.core.take_last.call(null,ball_roller.graphics.core.old_states,new cljs.core.Keyword(null,"previous-states","previous-states",1226734858).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state], null))));var path = cljs.core.map.call(null,new cljs.core.Keyword(null,"position","position",1761709211),ball_states);var width = ((function (ball_states,path){
return (function (ball){var x__11450__auto__ = ((new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(ball) / ball_roller.vector_math.mag.call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199).cljs$core$IFn$_invoke$arity$1(ball))) / 6);var y__11451__auto__ = 30;return ((x__11450__auto__ < y__11451__auto__) ? x__11450__auto__ : y__11451__auto__);
});})(ball_states,path))
;var shifts = cljs.core.map.call(null,((function (ball_states,path,width){
return (function (orthos,ball){return cljs.core.map.call(null,((function (ball_states,path,width){
return (function (p1__18439_SHARP_){return ball_roller.vector_math.scale.call(null,width.call(null,ball),p1__18439_SHARP_);
});})(ball_states,path,width))
,orthos);
});})(ball_states,path,width))
,cljs.core.map.call(null,cljs.core.comp.call(null,ball_roller.vector_math.orthogonal,ball_roller.vector_math.unit),cljs.core.map.call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199),ball_states)),ball_states);var edges = cljs.core.map.call(null,ball_roller.vector_math.add,path,cljs.core.map.call(null,cljs.core.first,shifts));var edges2 = cljs.core.map.call(null,ball_roller.vector_math.add,path,cljs.core.map.call(null,cljs.core.last,shifts));(ctx["strokeStyle"] = "rgba(0,0,0,0.2)");
var seq__18444 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edges,edges2], null));var chunk__18445 = null;var count__18446 = 0;var i__18447 = 0;while(true){
if((i__18447 < count__18446))
{var edge = cljs.core._nth.call(null,chunk__18445,i__18447);Graphics.drawSpline(ctx,cljs.core.clj__GT_js.call(null,cljs.core.flatten.call(null,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363)),edge))),0.6);
{
var G__18448 = seq__18444;
var G__18449 = chunk__18445;
var G__18450 = count__18446;
var G__18451 = (i__18447 + 1);
seq__18444 = G__18448;
chunk__18445 = G__18449;
count__18446 = G__18450;
i__18447 = G__18451;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18444);if(temp__4092__auto__)
{var seq__18444__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18444__$1))
{var c__11892__auto__ = cljs.core.chunk_first.call(null,seq__18444__$1);{
var G__18452 = cljs.core.chunk_rest.call(null,seq__18444__$1);
var G__18453 = c__11892__auto__;
var G__18454 = cljs.core.count.call(null,c__11892__auto__);
var G__18455 = 0;
seq__18444 = G__18452;
chunk__18445 = G__18453;
count__18446 = G__18454;
i__18447 = G__18455;
continue;
}
} else
{var edge = cljs.core.first.call(null,seq__18444__$1);Graphics.drawSpline(ctx,cljs.core.clj__GT_js.call(null,cljs.core.flatten.call(null,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363)),edge))),0.6);
{
var G__18456 = cljs.core.next.call(null,seq__18444__$1);
var G__18457 = null;
var G__18458 = 0;
var G__18459 = 0;
seq__18444 = G__18456;
chunk__18445 = G__18457;
count__18446 = G__18458;
i__18447 = G__18459;
continue;
}
}
} else
{return null;
}
}
break;
}
});
ball_roller.graphics.core.damper = (function damper(val){if(cljs.core._EQ_.call(null,val,0))
{return 0;
} else
{var sign = (Math.abs(val) / val);return (sign * ((val * val) / 1290));
}
});
ball_roller.graphics.core.text_offset = (function text_offset(p__18460){var map__18462 = p__18460;var map__18462__$1 = ((cljs.core.seq_QMARK_.call(null,map__18462))?cljs.core.apply.call(null,cljs.core.hash_map,map__18462):map__18462);var state = map__18462__$1;var phone = cljs.core.get.call(null,map__18462__$1,new cljs.core.Keyword(null,"phone","phone",1120547040));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),ball_roller.graphics.core.damper.call(null,phone.gamma),new cljs.core.Keyword(null,"y","y",1013904363),ball_roller.graphics.core.damper.call(null,phone.beta)], null);
});
/**
* Draw the state.
*/
ball_roller.graphics.core.draw = (function (){var method_table__12002__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__12003__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__12004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__12005__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__12006__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw",((function (method_table__12002__auto__,prefer_table__12003__auto__,method_cache__12004__auto__,cached_hierarchy__12005__auto__,hierarchy__12006__auto__){
return (function (canvas,state){return new cljs.core.Keyword(null,"mode","mode",1017261333).cljs$core$IFn$_invoke$arity$1(state);
});})(method_table__12002__auto__,prefer_table__12003__auto__,method_cache__12004__auto__,cached_hierarchy__12005__auto__,hierarchy__12006__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__12006__auto__,method_table__12002__auto__,prefer_table__12003__auto__,method_cache__12004__auto__,cached_hierarchy__12005__auto__));
})();
cljs.core._add_method.call(null,ball_roller.graphics.core.draw,new cljs.core.Keyword(null,"menu","menu",1017252049),(function (canvas,state){var ctx = canvas.getContext("2d");var shift = ball_roller.graphics.core.text_offset.call(null,state);ball_roller.graphics.core.clear.call(null,canvas);
(ctx["font"] = "bold 12px sans-serif");
return Graphics.neonLightEffect(ctx,"New Game",(43 + new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(shift)),(100 + new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(shift)));
}));
cljs.core._add_method.call(null,ball_roller.graphics.core.draw,new cljs.core.Keyword(null,"victory","victory",1466211716),(function (canvas,state){var ctx = canvas.getContext("2d");var shift = ball_roller.graphics.core.text_offset.call(null,state);ball_roller.graphics.core.clear.call(null,canvas);
(ctx["font"] = "bold 12px sans-serif");
return Graphics.neonLightEffect(ctx,"Victory",(43 + new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(shift)),(100 + new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(shift)));
}));
cljs.core._add_method.call(null,ball_roller.graphics.core.draw,new cljs.core.Keyword(null,"loss","loss",1017232021),(function (canvas,state){var ctx = canvas.getContext("2d");var shift = ball_roller.graphics.core.text_offset.call(null,state);ball_roller.graphics.core.clear.call(null,canvas);
ball_roller.graphics.core.draw.call(null,canvas,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"game","game",1017069412)));
(ctx["font"] = "bold 12px sans-serif");
Graphics.neonLightEffect(ctx,"Loss",(43 + new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(shift)),(100 + new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(shift)));
return Graphics.neonLightEffect(ctx,("Score: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(state.call(null,new cljs.core.Keyword(null,"score","score",1123168772)))),(43 + new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(shift)),(200 + new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(shift)));
}));
cljs.core._add_method.call(null,ball_roller.graphics.core.draw,new cljs.core.Keyword(null,"game","game",1017069412),(function (canvas,state){var ctx = canvas.getContext("2d");var current_step = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intensity","intensity",1513229221),2], null),cljs.core.nth.call(null,new cljs.core.Keyword(null,"steps","steps",1123665561).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pattern","pattern",4517781250).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"current","current",2140844267).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pattern","pattern",4517781250).cljs$core$IFn$_invoke$arity$1(state))));ball_roller.graphics.core.clear.call(null,canvas);
ball_roller.graphics.powerups.draw.call(null,ctx,state);
ball_roller.graphics.core.draw_wall_hits.call(null,ctx,state);
ball_roller.graphics.core.draw_glowing_wall_BANG_.call(null,ctx,current_step);
return ball_roller.graphics.ball.draw_ball.call(null,ctx,state);
}));
ball_roller.graphics.core.render = (function render(canvas,state){return ball_roller.graphics.core.draw.call(null,canvas,state);
});

//# sourceMappingURL=core.js.map