// Compiled by ClojureScript 0.0-2234
goog.provide('ball_roller.level1');
goog.require('cljs.core');
goog.require('ball_roller.components');
goog.require('ball_roller.components');
ball_roller.level1.num_bounces = 100;
ball_roller.level1.no_repeat = (function() {
var no_repeat = null;
var no_repeat__2 = (function (from,n){return no_repeat.call(null,cljs.core.List.EMPTY,from,n);
});
var no_repeat__3 = (function (col,from,n){while(true){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,col),n))
{return col;
} else
{{
var G__18482 = (new cljs.core.LazySeq(null,((function (col,from,n){
return (function (){return cljs.core.cons.call(null,cljs.core.rand_nth.call(null,cljs.core.remove.call(null,((function (col,from,n){
return (function (p1__18481_SHARP_){return cljs.core._EQ_.call(null,cljs.core.first.call(null,col),p1__18481_SHARP_);
});})(col,from,n))
,from)),col);
});})(col,from,n))
,null,null));
var G__18483 = from;
var G__18484 = n;
col = G__18482;
from = G__18483;
n = G__18484;
continue;
}
}
break;
}
});
no_repeat = function(col,from,n){
switch(arguments.length){
case 2:
return no_repeat__2.call(this,col,from);
case 3:
return no_repeat__3.call(this,col,from,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
no_repeat.cljs$core$IFn$_invoke$arity$2 = no_repeat__2;
no_repeat.cljs$core$IFn$_invoke$arity$3 = no_repeat__3;
return no_repeat;
})()
;
ball_roller.level1.new$ = (function new$(){var w = window.innerWidth;var h = window.innerHeight;var walls = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coord","coord",1108749927),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"pos","pos",1014015430),0,new cljs.core.Keyword(null,"length","length",4202507864),h,new cljs.core.Keyword(null,"direction","direction",4346280689),1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coord","coord",1108749927),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"pos","pos",1014015430),0,new cljs.core.Keyword(null,"length","length",4202507864),w,new cljs.core.Keyword(null,"direction","direction",4346280689),1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coord","coord",1108749927),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"pos","pos",1014015430),w,new cljs.core.Keyword(null,"length","length",4202507864),h,new cljs.core.Keyword(null,"direction","direction",4346280689),-1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coord","coord",1108749927),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"pos","pos",1014015430),h,new cljs.core.Keyword(null,"length","length",4202507864),w,new cljs.core.Keyword(null,"direction","direction",4346280689),-1], null)], null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"walls","walls",1126800219),walls,new cljs.core.Keyword(null,"pattern","pattern",4517781250),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current","current",2140844267),0,new cljs.core.Keyword(null,"steps","steps",1123665561),ball_roller.level1.no_repeat.call(null,walls,ball_roller.level1.num_bounces)], null),new cljs.core.Keyword(null,"ball","ball",1016920433),ball_roller.components.ball.call(null,(w / 2),(h / 2))], null);
});

//# sourceMappingURL=level1.js.map