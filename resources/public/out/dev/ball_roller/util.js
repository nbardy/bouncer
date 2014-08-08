// Compiled by ClojureScript 0.0-2234
goog.provide('ball_roller.util');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
ball_roller.util.create_element_BANG_ = (function() { 
var create_element_BANG___delegate = function (ele_name,attrs){var ele = document.createElement(ele_name);var seq__23243_23249 = cljs.core.seq.call(null,cljs.core.first.call(null,attrs));var chunk__23244_23250 = null;var count__23245_23251 = 0;var i__23246_23252 = 0;while(true){
if((i__23246_23252 < count__23245_23251))
{var vec__23247_23253 = cljs.core._nth.call(null,chunk__23244_23250,i__23246_23252);var k_23254 = cljs.core.nth.call(null,vec__23247_23253,0,null);var v_23255 = cljs.core.nth.call(null,vec__23247_23253,1,null);ele.setAttribute(cljs.core.name.call(null,k_23254),v_23255);
{
var G__23256 = seq__23243_23249;
var G__23257 = chunk__23244_23250;
var G__23258 = count__23245_23251;
var G__23259 = (i__23246_23252 + 1);
seq__23243_23249 = G__23256;
chunk__23244_23250 = G__23257;
count__23245_23251 = G__23258;
i__23246_23252 = G__23259;
continue;
}
} else
{var temp__4092__auto___23260 = cljs.core.seq.call(null,seq__23243_23249);if(temp__4092__auto___23260)
{var seq__23243_23261__$1 = temp__4092__auto___23260;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23243_23261__$1))
{var c__11892__auto___23262 = cljs.core.chunk_first.call(null,seq__23243_23261__$1);{
var G__23263 = cljs.core.chunk_rest.call(null,seq__23243_23261__$1);
var G__23264 = c__11892__auto___23262;
var G__23265 = cljs.core.count.call(null,c__11892__auto___23262);
var G__23266 = 0;
seq__23243_23249 = G__23263;
chunk__23244_23250 = G__23264;
count__23245_23251 = G__23265;
i__23246_23252 = G__23266;
continue;
}
} else
{var vec__23248_23267 = cljs.core.first.call(null,seq__23243_23261__$1);var k_23268 = cljs.core.nth.call(null,vec__23248_23267,0,null);var v_23269 = cljs.core.nth.call(null,vec__23248_23267,1,null);ele.setAttribute(cljs.core.name.call(null,k_23268),v_23269);
{
var G__23270 = cljs.core.next.call(null,seq__23243_23261__$1);
var G__23271 = null;
var G__23272 = 0;
var G__23273 = 0;
seq__23243_23249 = G__23270;
chunk__23244_23250 = G__23271;
count__23245_23251 = G__23272;
i__23246_23252 = G__23273;
continue;
}
}
} else
{}
}
break;
}
return ele;
};
var create_element_BANG_ = function (ele_name,var_args){
var attrs = null;if (arguments.length > 1) {
  attrs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return create_element_BANG___delegate.call(this,ele_name,attrs);};
create_element_BANG_.cljs$lang$maxFixedArity = 1;
create_element_BANG_.cljs$lang$applyTo = (function (arglist__23274){
var ele_name = cljs.core.first(arglist__23274);
var attrs = cljs.core.rest(arglist__23274);
return create_element_BANG___delegate(ele_name,attrs);
});
create_element_BANG_.cljs$core$IFn$_invoke$arity$variadic = create_element_BANG___delegate;
return create_element_BANG_;
})()
;
ball_roller.util.sign = (function sign(x){if(cljs.core._EQ_.call(null,x,0))
{return 0;
} else
{return (Math.abs(x) / x);
}
});
/**
* Returns the current time.
* NOTE: Non-pure function.
*/
ball_roller.util.current_time$ = (function current_time$(){return Date.now();
});

//# sourceMappingURL=util.js.map