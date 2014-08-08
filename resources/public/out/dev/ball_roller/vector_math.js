// Compiled by ClojureScript 0.0-2234
goog.provide('ball_roller.vector_math');
goog.require('cljs.core');
ball_roller.vector_math.add = cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_);
ball_roller.vector_math.scale = (function scale(fac,vec){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__23208){var vec__23209 = p__23208;var k = cljs.core.nth.call(null,vec__23209,0,null);var v = cljs.core.nth.call(null,vec__23209,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(fac * v)], null);
}),vec));
});
ball_roller.vector_math.sub = (function sub(vec1,vec2){return ball_roller.vector_math.add.call(null,vec1,ball_roller.vector_math.scale.call(null,-1,vec2));
});
ball_roller.vector_math.mag = (function mag(vec){return Math.sqrt(cljs.core.reduce.call(null,(function (m,p__23212){var vec__23213 = p__23212;var k = cljs.core.nth.call(null,vec__23213,0,null);var v = cljs.core.nth.call(null,vec__23213,1,null);return (m + (v * v));
}),0,vec));
});
ball_roller.vector_math.dist = (function dist(vec1,vec2){return ball_roller.vector_math.mag.call(null,ball_roller.vector_math.sub.call(null,vec1,vec2));
});
ball_roller.vector_math.unit = (function unit(vec){if(cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.vals.call(null,vec)),0))
{return vec;
} else
{return ball_roller.vector_math.scale.call(null,(1 / ball_roller.vector_math.mag.call(null,vec)),vec);
}
});
ball_roller.vector_math.orthogonal = (function orthogonal(vec){if(cljs.core._EQ_.call(null,cljs.core.count.call(null,vec),2))
{var vec__23216 = cljs.core.keys.call(null,vec);var k1 = cljs.core.nth.call(null,vec__23216,0,null);var k2 = cljs.core.nth.call(null,vec__23216,1,null);var vec__23217 = cljs.core.vals.call(null,vec);var v1 = cljs.core.nth.call(null,vec__23217,0,null);var v2 = cljs.core.nth.call(null,vec__23217,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([k1,(- v2),k2,v1], true, false),new cljs.core.PersistentArrayMap.fromArray([k1,v2,k2,(- v1)], true, false)], null);
} else
{throw (new Error("Orthogonal only accepts vectors of dimension 2."));
}
});
ball_roller.vector_math.epsilon = 1.0E-6;
/**
* Defines mathematical equality for numbers and collections of numbers
* with a tolerance of epilson.
*/
ball_roller.vector_math._EQ__QMARK_ = (function (){var method_table__12002__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__12003__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__12004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__12005__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__12006__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("=?",((function (method_table__12002__auto__,prefer_table__12003__auto__,method_cache__12004__auto__,cached_hierarchy__12005__auto__,hierarchy__12006__auto__){
return (function() { 
var G__23218__delegate = function (subject,others){if((cljs.core.count.call(null,others) > 1))
{return new cljs.core.Keyword(null,"multiple","multiple",1667733890);
} else
{return cljs.core.type.call(null,subject);
}
};
var G__23218 = function (subject,var_args){
var others = null;if (arguments.length > 1) {
  others = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__23218__delegate.call(this,subject,others);};
G__23218.cljs$lang$maxFixedArity = 1;
G__23218.cljs$lang$applyTo = (function (arglist__23219){
var subject = cljs.core.first(arglist__23219);
var others = cljs.core.rest(arglist__23219);
return G__23218__delegate(subject,others);
});
G__23218.cljs$core$IFn$_invoke$arity$variadic = G__23218__delegate;
return G__23218;
})()
;})(method_table__12002__auto__,prefer_table__12003__auto__,method_cache__12004__auto__,cached_hierarchy__12005__auto__,hierarchy__12006__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__12006__auto__,method_table__12002__auto__,prefer_table__12003__auto__,method_cache__12004__auto__,cached_hierarchy__12005__auto__));
})();
cljs.core._add_method.call(null,ball_roller.vector_math._EQ__QMARK_,new cljs.core.Keyword(null,"multiple","multiple",1667733890),(function() { 
var G__23221__delegate = function (subject,others){return cljs.core.every_QMARK_.call(null,(function (p1__23220_SHARP_){return ball_roller.vector_math._EQ__QMARK_.call(null,subject,p1__23220_SHARP_);
}),others);
};
var G__23221 = function (subject,var_args){
var others = null;if (arguments.length > 1) {
  others = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__23221__delegate.call(this,subject,others);};
G__23221.cljs$lang$maxFixedArity = 1;
G__23221.cljs$lang$applyTo = (function (arglist__23222){
var subject = cljs.core.first(arglist__23222);
var others = cljs.core.rest(arglist__23222);
return G__23221__delegate(subject,others);
});
G__23221.cljs$core$IFn$_invoke$arity$variadic = G__23221__delegate;
return G__23221;
})()
);
cljs.core._add_method.call(null,ball_roller.vector_math._EQ__QMARK_,cljs.core.PersistentVector,(function (subject,others){return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__23223_SHARP_,p2__23224_SHARP_){return ball_roller.vector_math._EQ__QMARK_.call(null,p1__23223_SHARP_,p2__23224_SHARP_);
}),subject,others));
}));
cljs.core._add_method.call(null,ball_roller.vector_math._EQ__QMARK_,cljs.core.PersistentArrayMap,(function (subject,other){return cljs.core.every_QMARK_.call(null,(function (p__23225){var vec__23226 = p__23225;var k = cljs.core.nth.call(null,vec__23226,0,null);var v = cljs.core.nth.call(null,vec__23226,1,null);return ball_roller.vector_math._EQ__QMARK_.call(null,v,k.call(null,other));
}),subject);
}));
cljs.core._add_method.call(null,ball_roller.vector_math._EQ__QMARK_,new cljs.core.Keyword(null,"default","default",2558708147),(function (subject,other){return (((subject - ball_roller.vector_math.epsilon) < other)) && (((subject + ball_roller.vector_math.epsilon) > other));
}));

//# sourceMappingURL=vector_math.js.map