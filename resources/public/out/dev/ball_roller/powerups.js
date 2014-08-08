// Compiled by ClojureScript 0.0-2234
goog.provide('ball_roller.powerups');
goog.require('cljs.core');
goog.require('ball_roller.components');
goog.require('ball_roller.util');
goog.require('ball_roller.components');
goog.require('ball_roller.util');
ball_roller.powerups.grow_ball_BANG_ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,(function (state,dt,dump){var grow = (function (p1__23275_SHARP_){return (p1__23275_SHARP_ + ((cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",1016920433),new cljs.core.Keyword(null,"radius","radius",4370292740)], null)) * 0.001) * dt));
});cljs.core.print.call(null,"grow by",grow.call(null,new cljs.core.Keyword(null,"radius","radius",4370292740).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ball","ball",1016920433).cljs$core$IFn$_invoke$arity$1(state))));
cljs.core.swap_BANG_.call(null,dump,grow);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",1016920433),new cljs.core.Keyword(null,"radius","radius",4370292740)], null),grow);
}),(function (state,dt,dump){var shrink = (function (p1__23276_SHARP_){return (p1__23276_SHARP_ - ((cljs.core.deref.call(null,dump) * 0.14) * dt));
});cljs.core.print.call(null,"shrink by",shrink.call(null,new cljs.core.Keyword(null,"radius","radius",4370292740).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ball","ball",1016920433).cljs$core$IFn$_invoke$arity$1(state))));
cljs.core.swap_BANG_.call(null,dump,shrink);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",1016920433),new cljs.core.Keyword(null,"radius","radius",4370292740)], null),shrink);
})], null);
ball_roller.powerups.add_powerup = (function add_powerup(p__23277,seed){var map__23279 = p__23277;var map__23279__$1 = ((cljs.core.seq_QMARK_.call(null,map__23279))?cljs.core.apply.call(null,cljs.core.hash_map,map__23279):map__23279);var state = map__23279__$1;var height = cljs.core.get.call(null,map__23279__$1,new cljs.core.Keyword(null,"height","height",4087841945));var width = cljs.core.get.call(null,map__23279__$1,new cljs.core.Keyword(null,"width","width",1127031096));return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),cljs.core.conj,ball_roller.components.powerup.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.rand.call(null,width),new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.rand.call(null,height),new cljs.core.Keyword(null,"effect","effect",4002786563),ball_roller.powerups.grow_ball_BANG_], null),state.call(null,new cljs.core.Keyword(null,"timestamp","timestamp",1069030536)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-powerup","last-powerup",4252884379)], null),ball_roller.util.current_time$);
});
ball_roller.powerups.handle_powerups_PERCENT_ = (function handle_powerups_PERCENT_(state,dt){return ball_roller.powerups.clear_expired_powerups.call(null,ball_roller.powerups.utilize_powerups.call(null,ball_roller.powerups.spawn_powerups_PERCENT_.call(null,state),dt));
});
/**
* Transforms state based on the
*/
ball_roller.powerups.utilize_powerups = (function utilize_powerups(state,dt){return cljs.core.apply.call(null,cljs.core.comp,cljs.core.map.call(null,(function (powerup){return (function (p1__23280_SHARP_){return powerup.call(null,p1__23280_SHARP_,dt);
});
}),state.call(null,new cljs.core.Keyword(null,"powerups","powerups",1872483717)))).call(null,state);
});
/**
* Spawns powerups.
* NOTE: Non-pure random function
*/
ball_roller.powerups.spawn_powerups_PERCENT_ = (function spawn_powerups_PERCENT_(state){var temp__4090__auto__ = new cljs.core.Keyword(null,"last-powerup","last-powerup",4252884379).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(temp__4090__auto__))
{var last_powerup = temp__4090__auto__;if((cljs.core.rand.call(null,1700000) < (ball_roller.util.current_time$.call(null) - last_powerup)))
{return ball_roller.powerups.add_powerup.call(null,state,cljs.core.rand.call(null,10));
} else
{return state;
}
} else
{return spawn_powerups_PERCENT_.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"last-powerup","last-powerup",4252884379),ball_roller.util.current_time$.call(null)));
}
});
ball_roller.powerups.clear_expired = (function clear_expired(items,t){return cljs.core.filter.call(null,(function (p1__23281_SHARP_){return (new cljs.core.Keyword(null,"expires","expires",3999636134).cljs$core$IFn$_invoke$arity$1(p1__23281_SHARP_) > t);
}),items);
});
ball_roller.powerups.clear_expired_powerups = (function clear_expired_powerups(state){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),(function (p1__23282_SHARP_){return ball_roller.powerups.clear_expired.call(null,p1__23282_SHARP_,state.call(null,new cljs.core.Keyword(null,"timestamp","timestamp",1069030536)));
}));
});

//# sourceMappingURL=powerups.js.map