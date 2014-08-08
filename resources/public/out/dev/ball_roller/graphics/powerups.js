// Compiled by ClojureScript 0.0-2234
goog.provide('ball_roller.graphics.powerups');
goog.require('cljs.core');
ball_roller.graphics.powerups.draw = (function draw(ctx,state){var seq__23289 = cljs.core.seq.call(null,state.call(null,new cljs.core.Keyword(null,"items","items",1114430258)));var chunk__23290 = null;var count__23291 = 0;var i__23292 = 0;while(true){
if((i__23292 < count__23291))
{var map__23293 = cljs.core._nth.call(null,chunk__23290,i__23292);var map__23293__$1 = ((cljs.core.seq_QMARK_.call(null,map__23293))?cljs.core.apply.call(null,cljs.core.hash_map,map__23293):map__23293);var powerup = map__23293__$1;var height = cljs.core.get.call(null,map__23293__$1,new cljs.core.Keyword(null,"height","height",4087841945));var width = cljs.core.get.call(null,map__23293__$1,new cljs.core.Keyword(null,"width","width",1127031096));var y = cljs.core.get.call(null,map__23293__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__23293__$1,new cljs.core.Keyword(null,"x","x",1013904362));(ctx["fillStyle"] = "blue");
ctx.fillRect((x - (width / 2)),(y - (width / 2)),width,height);
{
var G__23295 = seq__23289;
var G__23296 = chunk__23290;
var G__23297 = count__23291;
var G__23298 = (i__23292 + 1);
seq__23289 = G__23295;
chunk__23290 = G__23296;
count__23291 = G__23297;
i__23292 = G__23298;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__23289);if(temp__4092__auto__)
{var seq__23289__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23289__$1))
{var c__11892__auto__ = cljs.core.chunk_first.call(null,seq__23289__$1);{
var G__23299 = cljs.core.chunk_rest.call(null,seq__23289__$1);
var G__23300 = c__11892__auto__;
var G__23301 = cljs.core.count.call(null,c__11892__auto__);
var G__23302 = 0;
seq__23289 = G__23299;
chunk__23290 = G__23300;
count__23291 = G__23301;
i__23292 = G__23302;
continue;
}
} else
{var map__23294 = cljs.core.first.call(null,seq__23289__$1);var map__23294__$1 = ((cljs.core.seq_QMARK_.call(null,map__23294))?cljs.core.apply.call(null,cljs.core.hash_map,map__23294):map__23294);var powerup = map__23294__$1;var height = cljs.core.get.call(null,map__23294__$1,new cljs.core.Keyword(null,"height","height",4087841945));var width = cljs.core.get.call(null,map__23294__$1,new cljs.core.Keyword(null,"width","width",1127031096));var y = cljs.core.get.call(null,map__23294__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__23294__$1,new cljs.core.Keyword(null,"x","x",1013904362));(ctx["fillStyle"] = "blue");
ctx.fillRect((x - (width / 2)),(y - (width / 2)),width,height);
{
var G__23303 = cljs.core.next.call(null,seq__23289__$1);
var G__23304 = null;
var G__23305 = 0;
var G__23306 = 0;
seq__23289 = G__23303;
chunk__23290 = G__23304;
count__23291 = G__23305;
i__23292 = G__23306;
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

//# sourceMappingURL=powerups.js.map