// Compiled by ClojureScript 0.0-2234
goog.provide('ball_roller.components');
goog.require('cljs.core');
ball_roller.components.ball = (function ball(x,y){return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"radius","radius",4370292740),40,new cljs.core.Keyword(null,"width","width",1127031096),40,new cljs.core.Keyword(null,"height","height",4087841945),40,new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),x,new cljs.core.Keyword(null,"y","y",1013904363),y], null),new cljs.core.Keyword(null,"acceleration","acceleration",746604530),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),0,new cljs.core.Keyword(null,"y","y",1013904363),0], null),new cljs.core.Keyword(null,"velocity","velocity",3148165199),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),0,new cljs.core.Keyword(null,"y","y",1013904363),0], null)], null);
});
ball_roller.components.default_width = 40;
ball_roller.components.default_height = 40;
ball_roller.components.default_duration = 4000;
ball_roller.components.default_effect_duration = 6000;
/**
* Generates a clojure which activates the given powerup.
*/
ball_roller.components.activate_powerup = (function activate_powerup(p__23227,duration){var vec__23231 = p__23227;var init_dump = cljs.core.nth.call(null,vec__23231,0,null);var active = cljs.core.nth.call(null,vec__23231,1,null);var cleanup = cljs.core.nth.call(null,vec__23231,2,null);cljs.core.print.call(null,"dur ",duration);
return ((function (vec__23231,init_dump,active,cleanup){
return (function (original_state){return cljs.core.update_in.call(null,original_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"powerups","powerups",1872483717)], null),cljs.core.conj,(function (){var dump = cljs.core.atom.call(null,init_dump);return ((function (dump,vec__23231,init_dump,active,cleanup){
return (function (p__23232,dt){var map__23233 = p__23232;var map__23233__$1 = ((cljs.core.seq_QMARK_.call(null,map__23233))?cljs.core.apply.call(null,cljs.core.hash_map,map__23233):map__23233);var state = map__23233__$1;var timestamp = cljs.core.get.call(null,map__23233__$1,new cljs.core.Keyword(null,"timestamp","timestamp",1069030536));cljs.core.print.call(null,timestamp);
if((timestamp < (timestamp + duration)))
{return active.call(null,state,dt,dump);
} else
{return cleanup.call(null,state,dt,dump);
}
});
;})(dump,vec__23231,init_dump,active,cleanup))
})());
});
;})(vec__23231,init_dump,active,cleanup))
});
ball_roller.components.powerup = (function powerup(p__23234,t){var map__23236 = p__23234;var map__23236__$1 = ((cljs.core.seq_QMARK_.call(null,map__23236))?cljs.core.apply.call(null,cljs.core.hash_map,map__23236):map__23236);var effect_duration = cljs.core.get.call(null,map__23236__$1,new cljs.core.Keyword(null,"effect-duration","effect-duration",2662153666),ball_roller.components.default_effect_duration);var duration = cljs.core.get.call(null,map__23236__$1,new cljs.core.Keyword(null,"duration","duration",3316859142),ball_roller.components.default_duration);var effect = cljs.core.get.call(null,map__23236__$1,new cljs.core.Keyword(null,"effect","effect",4002786563));var height = cljs.core.get.call(null,map__23236__$1,new cljs.core.Keyword(null,"height","height",4087841945),ball_roller.components.default_height);var width = cljs.core.get.call(null,map__23236__$1,new cljs.core.Keyword(null,"width","width",1127031096),ball_roller.components.default_width);var y = cljs.core.get.call(null,map__23236__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__23236__$1,new cljs.core.Keyword(null,"x","x",1013904362));return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",1013904362),x,new cljs.core.Keyword(null,"y","y",1013904363),y,new cljs.core.Keyword(null,"width","width",1127031096),width,new cljs.core.Keyword(null,"height","height",4087841945),height,new cljs.core.Keyword(null,"expires","expires",3999636134),(t + duration),new cljs.core.Keyword(null,"activate","activate",3652896869),ball_roller.components.activate_powerup.call(null,effect,effect_duration)], null);
});

//# sourceMappingURL=components.js.map