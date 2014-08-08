// Compiled by ClojureScript 0.0-2234
goog.provide('ball_roller.core');
goog.require('cljs.core');
goog.require('ball_roller.powerups');
goog.require('ball_roller.util');
goog.require('ball_roller.powerups');
goog.require('ball_roller.graphics.core');
goog.require('ball_roller.level1');
goog.require('ball_roller.vector_math');
goog.require('figwheel.client');
goog.require('ball_roller.vector_math');
goog.require('ball_roller.sounds');
goog.require('ball_roller.sounds');
goog.require('ball_roller.graphics.core');
goog.require('ball_roller.level1');
goog.require('cljs.core.match');
goog.require('figwheel.client');
goog.require('ball_roller.util');
ball_roller.core.init_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"menu","menu",1017252049),new cljs.core.Keyword(null,"width","width",1127031096),window.innerWidth,new cljs.core.Keyword(null,"height","height",4087841945),window.innerHeight], null);
cljs.core.enable_console_print_BANG_.call(null);
ball_roller.core.damper = 0.6;
ball_roller.core.temper_tilt = (function temper_tilt(tilt){return (((tilt * tilt) * 1.2E-5) * ball_roller.util.sign.call(null,tilt));
});
ball_roller.core.damper_bounce = (function damper_bounce(speed){return (speed * ball_roller.core.damper);
});
if(typeof ball_roller.core.last_accel !== 'undefined')
{} else
{ball_roller.core.last_accel = cljs.core.atom.call(null,{"gamma": 0, "beta": 0, "alpha": 0});
}
if(typeof ball_roller.core.click_events !== 'undefined')
{} else
{ball_roller.core.click_events = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
ball_roller.core.setup_orientation_watcher_BANG_ = (function setup_orientation_watcher_BANG_(){return window.addEventListener("deviceorientation",(function (e){cljs.core.reset_BANG_.call(null,ball_roller.core.last_accel,e);
return true;
}));
});
ball_roller.core.setup_click_watcher_BANG_ = (function setup_click_watcher_BANG_(){var handler = (function (e){return cljs.core.swap_BANG_.call(null,ball_roller.core.click_events,cljs.core.conj,e);
});document.addEventListener("click",handler);
return document.addEventListener("touchstart",handler);
});
ball_roller.core.speed = 10;
ball_roller.core.move = (function move(item,p__23457,dt){var vec__23459 = p__23457;var xvel = cljs.core.nth.call(null,vec__23459,0,null);var yvel = cljs.core.nth.call(null,vec__23459,1,null);return cljs.core.update_in.call(null,item,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),((function (vec__23459,xvel,yvel){
return (function (p1__23456_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363)],[(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__23456_SHARP_) + (dt * xvel)),(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__23456_SHARP_) + (dt * yvel))]);
});})(vec__23459,xvel,yvel))
);
});
ball_roller.core.mean = (function mean(x,y){return ((x + y) / 2);
});
ball_roller.core.update_physics = (function update_physics(item,dt){var xacel = new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"acceleration","acceleration",746604530).cljs$core$IFn$_invoke$arity$1(item));var yacel = new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"acceleration","acceleration",746604530).cljs$core$IFn$_invoke$arity$1(item));var xvel = new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"velocity","velocity",3148165199).cljs$core$IFn$_invoke$arity$1(item));var yvel = new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"velocity","velocity",3148165199).cljs$core$IFn$_invoke$arity$1(item));var new_xvel = (xvel + (dt * xacel));var new_yvel = (yvel + (dt * yacel));return ball_roller.core.move.call(null,cljs.core.update_in.call(null,item,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),((function (xacel,yacel,xvel,yvel,new_xvel,new_yvel){
return (function (){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363)],[new_xvel,new_yvel]);
});})(xacel,yacel,xvel,yvel,new_xvel,new_yvel))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ball_roller.core.mean.call(null,xvel,new_xvel),ball_roller.core.mean.call(null,yvel,new_yvel)], null),dt);
});
ball_roller.core.in_between_QMARK_ = (function in_between_QMARK_(value,p__23460){var vec__23462 = p__23460;var p1 = cljs.core.nth.call(null,vec__23462,0,null);var p2 = cljs.core.nth.call(null,vec__23462,1,null);return (((p1 < value)) && ((value < p2))) || (((p1 > value)) && ((value > p2)));
});
ball_roller.core._PLUS__ = (function _PLUS__(x,y){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - y),(x + y)], null);
});
ball_roller.core.flat = (function flat(x){return cljs.core.apply.call(null,cljs.core.concat,x);
});
ball_roller.core.bounce = (function bounce(new_item,old_item,walls){return cljs.core.reduce.call(null,(function (item,p__23511){var vec__23512 = p__23511;var map__23513 = cljs.core.nth.call(null,vec__23512,0,null);var map__23513__$1 = ((cljs.core.seq_QMARK_.call(null,map__23513))?cljs.core.apply.call(null,cljs.core.hash_map,map__23513):map__23513);var wall = map__23513__$1;var pos = cljs.core.get.call(null,map__23513__$1,new cljs.core.Keyword(null,"pos","pos",1014015430));var coord = cljs.core.get.call(null,map__23513__$1,new cljs.core.Keyword(null,"coord","coord",1108749927));var change = cljs.core.nth.call(null,vec__23512,1,null);if(cljs.core.truth_(change))
{return cljs.core.merge.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211),coord], null),((function (vec__23512,map__23513,map__23513__$1,wall,pos,coord,change){
return (function (p1__23463_SHARP_){return (p1__23463_SHARP_ + change);
});})(vec__23512,map__23513,map__23513__$1,wall,pos,coord,change))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199),coord], null),((function (vec__23512,map__23513,map__23513__$1,wall,pos,coord,change){
return (function (p1__23464_SHARP_){return (- ball_roller.core.damper_bounce.call(null,p1__23464_SHARP_));
});})(vec__23512,map__23513,map__23513__$1,wall,pos,coord,change))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"has-bounced?","has-bounced?",4667322920),cljs.core.assoc.call(null,wall,new cljs.core.Keyword(null,"speed","speed",1123546041),Math.abs(coord.call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199).cljs$core$IFn$_invoke$arity$1(item))))], null));
} else
{return item;
}
}),new_item,ball_roller.core.flat.call(null,(function (){var iter__11861__auto__ = (function iter__23514(s__23515){return (new cljs.core.LazySeq(null,(function (){var s__23515__$1 = s__23515;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__23515__$1);if(temp__4092__auto__)
{var s__23515__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23515__$2))
{var c__11859__auto__ = cljs.core.chunk_first.call(null,s__23515__$2);var size__11860__auto__ = cljs.core.count.call(null,c__11859__auto__);var b__23517 = cljs.core.chunk_buffer.call(null,size__11860__auto__);if((function (){var i__23516 = 0;while(true){
if((i__23516 < size__11860__auto__))
{var map__23536 = cljs.core._nth.call(null,c__11859__auto__,i__23516);var map__23536__$1 = ((cljs.core.seq_QMARK_.call(null,map__23536))?cljs.core.apply.call(null,cljs.core.hash_map,map__23536):map__23536);var wall = map__23536__$1;var pos = cljs.core.get.call(null,map__23536__$1,new cljs.core.Keyword(null,"pos","pos",1014015430));var coord = cljs.core.get.call(null,map__23536__$1,new cljs.core.Keyword(null,"coord","coord",1108749927));cljs.core.chunk_append.call(null,b__23517,(function (){var oldpos = cljs.core.get_in.call(null,old_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211),coord], null));var newpos = cljs.core.get_in.call(null,new_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211),coord], null));var radius = cljs.core.apply.call(null,((function (i__23516,oldpos,newpos,map__23536,map__23536__$1,wall,pos,coord,c__11859__auto__,size__11860__auto__,b__23517,s__23515__$2,temp__4092__auto__){
return (function (p1__23465_SHARP_,p2__23466_SHARP_){return ((p1__23465_SHARP_ + p2__23466_SHARP_) / 2);
});})(i__23516,oldpos,newpos,map__23536,map__23536__$1,wall,pos,coord,c__11859__auto__,size__11860__auto__,b__23517,s__23515__$2,temp__4092__auto__))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"radius","radius",4370292740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_item,new_item], null)));var iter__11861__auto__ = ((function (i__23516,oldpos,newpos,radius,map__23536,map__23536__$1,wall,pos,coord,c__11859__auto__,size__11860__auto__,b__23517,s__23515__$2,temp__4092__auto__){
return (function iter__23537(s__23538){return (new cljs.core.LazySeq(null,((function (i__23516,oldpos,newpos,radius,map__23536,map__23536__$1,wall,pos,coord,c__11859__auto__,size__11860__auto__,b__23517,s__23515__$2,temp__4092__auto__){
return (function (){var s__23538__$1 = s__23538;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__23538__$1);if(temp__4092__auto____$1)
{var s__23538__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__23538__$2))
{var c__11859__auto____$1 = cljs.core.chunk_first.call(null,s__23538__$2);var size__11860__auto____$1 = cljs.core.count.call(null,c__11859__auto____$1);var b__23540 = cljs.core.chunk_buffer.call(null,size__11860__auto____$1);if((function (){var i__23539 = 0;while(true){
if((i__23539 < size__11860__auto____$1))
{var vec__23543 = cljs.core._nth.call(null,c__11859__auto____$1,i__23539);var p1 = cljs.core.nth.call(null,vec__23543,0,null);var p2 = cljs.core.nth.call(null,vec__23543,1,null);cljs.core.chunk_append.call(null,b__23540,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wall,((ball_roller.core.in_between_QMARK_.call(null,pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2], null)))?((pos - p2) * 2):null)], null));
{
var G__23554 = (i__23539 + 1);
i__23539 = G__23554;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23540),iter__23537.call(null,cljs.core.chunk_rest.call(null,s__23538__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23540),null);
}
} else
{var vec__23544 = cljs.core.first.call(null,s__23538__$2);var p1 = cljs.core.nth.call(null,vec__23544,0,null);var p2 = cljs.core.nth.call(null,vec__23544,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wall,((ball_roller.core.in_between_QMARK_.call(null,pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2], null)))?((pos - p2) * 2):null)], null),iter__23537.call(null,cljs.core.rest.call(null,s__23538__$2)));
}
} else
{return null;
}
break;
}
});})(i__23516,oldpos,newpos,radius,map__23536,map__23536__$1,wall,pos,coord,c__11859__auto__,size__11860__auto__,b__23517,s__23515__$2,temp__4092__auto__))
,null,null));
});})(i__23516,oldpos,newpos,radius,map__23536,map__23536__$1,wall,pos,coord,c__11859__auto__,size__11860__auto__,b__23517,s__23515__$2,temp__4092__auto__))
;return iter__11861__auto__.call(null,cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.map.call(null,((function (i__23516,iter__11861__auto__,oldpos,newpos,radius,map__23536,map__23536__$1,wall,pos,coord,c__11859__auto__,size__11860__auto__,b__23517,s__23515__$2,temp__4092__auto__){
return (function (p1__23467_SHARP_){return ball_roller.core._PLUS__.call(null,p1__23467_SHARP_,radius);
});})(i__23516,iter__11861__auto__,oldpos,newpos,radius,map__23536,map__23536__$1,wall,pos,coord,c__11859__auto__,size__11860__auto__,b__23517,s__23515__$2,temp__4092__auto__))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oldpos,newpos], null))));
})());
{
var G__23555 = (i__23516 + 1);
i__23516 = G__23555;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23517),iter__23514.call(null,cljs.core.chunk_rest.call(null,s__23515__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23517),null);
}
} else
{var map__23545 = cljs.core.first.call(null,s__23515__$2);var map__23545__$1 = ((cljs.core.seq_QMARK_.call(null,map__23545))?cljs.core.apply.call(null,cljs.core.hash_map,map__23545):map__23545);var wall = map__23545__$1;var pos = cljs.core.get.call(null,map__23545__$1,new cljs.core.Keyword(null,"pos","pos",1014015430));var coord = cljs.core.get.call(null,map__23545__$1,new cljs.core.Keyword(null,"coord","coord",1108749927));return cljs.core.cons.call(null,(function (){var oldpos = cljs.core.get_in.call(null,old_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211),coord], null));var newpos = cljs.core.get_in.call(null,new_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211),coord], null));var radius = cljs.core.apply.call(null,((function (oldpos,newpos,map__23545,map__23545__$1,wall,pos,coord,s__23515__$2,temp__4092__auto__){
return (function (p1__23465_SHARP_,p2__23466_SHARP_){return ((p1__23465_SHARP_ + p2__23466_SHARP_) / 2);
});})(oldpos,newpos,map__23545,map__23545__$1,wall,pos,coord,s__23515__$2,temp__4092__auto__))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"radius","radius",4370292740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_item,new_item], null)));var iter__11861__auto__ = ((function (oldpos,newpos,radius,map__23545,map__23545__$1,wall,pos,coord,s__23515__$2,temp__4092__auto__){
return (function iter__23546(s__23547){return (new cljs.core.LazySeq(null,((function (oldpos,newpos,radius,map__23545,map__23545__$1,wall,pos,coord,s__23515__$2,temp__4092__auto__){
return (function (){var s__23547__$1 = s__23547;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__23547__$1);if(temp__4092__auto____$1)
{var s__23547__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__23547__$2))
{var c__11859__auto__ = cljs.core.chunk_first.call(null,s__23547__$2);var size__11860__auto__ = cljs.core.count.call(null,c__11859__auto__);var b__23549 = cljs.core.chunk_buffer.call(null,size__11860__auto__);if((function (){var i__23548 = 0;while(true){
if((i__23548 < size__11860__auto__))
{var vec__23552 = cljs.core._nth.call(null,c__11859__auto__,i__23548);var p1 = cljs.core.nth.call(null,vec__23552,0,null);var p2 = cljs.core.nth.call(null,vec__23552,1,null);cljs.core.chunk_append.call(null,b__23549,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wall,((ball_roller.core.in_between_QMARK_.call(null,pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2], null)))?((pos - p2) * 2):null)], null));
{
var G__23556 = (i__23548 + 1);
i__23548 = G__23556;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23549),iter__23546.call(null,cljs.core.chunk_rest.call(null,s__23547__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23549),null);
}
} else
{var vec__23553 = cljs.core.first.call(null,s__23547__$2);var p1 = cljs.core.nth.call(null,vec__23553,0,null);var p2 = cljs.core.nth.call(null,vec__23553,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wall,((ball_roller.core.in_between_QMARK_.call(null,pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2], null)))?((pos - p2) * 2):null)], null),iter__23546.call(null,cljs.core.rest.call(null,s__23547__$2)));
}
} else
{return null;
}
break;
}
});})(oldpos,newpos,radius,map__23545,map__23545__$1,wall,pos,coord,s__23515__$2,temp__4092__auto__))
,null,null));
});})(oldpos,newpos,radius,map__23545,map__23545__$1,wall,pos,coord,s__23515__$2,temp__4092__auto__))
;return iter__11861__auto__.call(null,cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.map.call(null,((function (iter__11861__auto__,oldpos,newpos,radius,map__23545,map__23545__$1,wall,pos,coord,s__23515__$2,temp__4092__auto__){
return (function (p1__23467_SHARP_){return ball_roller.core._PLUS__.call(null,p1__23467_SHARP_,radius);
});})(iter__11861__auto__,oldpos,newpos,radius,map__23545,map__23545__$1,wall,pos,coord,s__23515__$2,temp__4092__auto__))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oldpos,newpos], null))));
})(),iter__23514.call(null,cljs.core.rest.call(null,s__23515__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__11861__auto__.call(null,walls);
})()));
});
ball_roller.core.add_history = (function add_history(ball,t){return cljs.core.update_in.call(null,ball,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",1940838406)], null),(function (p1__23557_SHARP_){return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ball,t], null),p1__23557_SHARP_);
}));
});
ball_roller.core.remove_flags = (function remove_flags(item){return cljs.core.dissoc.call(null,item,new cljs.core.Keyword(null,"has-bounced?","has-bounced?",4667322920));
});
ball_roller.core.next_ball = (function next_ball(state,dt){var xacel = ball_roller.core.temper_tilt.call(null,new cljs.core.Keyword(null,"phone","phone",1120547040).cljs$core$IFn$_invoke$arity$1(state).gamma);var yacel = ball_roller.core.temper_tilt.call(null,new cljs.core.Keyword(null,"phone","phone",1120547040).cljs$core$IFn$_invoke$arity$1(state).beta);return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"ball","ball",1016920433),ball_roller.core.bounce.call(null,ball_roller.core.update_physics.call(null,cljs.core.assoc_in.call(null,ball_roller.core.remove_flags.call(null,ball_roller.core.add_history.call(null,state.call(null,new cljs.core.Keyword(null,"ball","ball",1016920433)),state.call(null,new cljs.core.Keyword(null,"timestamp","timestamp",1069030536)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363)],[xacel,yacel])),dt),state.call(null,new cljs.core.Keyword(null,"ball","ball",1016920433)),state.call(null,new cljs.core.Keyword(null,"walls","walls",1126800219))));
});
ball_roller.core.update_walls = (function update_walls(state,dt){var hit_wall = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",1016920433),new cljs.core.Keyword(null,"has-bounced?","has-bounced?",4667322920)], null));if(cljs.core.truth_(hit_wall))
{return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wall-hits","wall-hits",2426925269)], null),((function (hit_wall){
return (function (p1__23558_SHARP_){return cljs.core.conj.call(null,p1__23558_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hit_wall,state.call(null,new cljs.core.Keyword(null,"timestamp","timestamp",1069030536))], null));
});})(hit_wall))
);
} else
{return state;
}
});
ball_roller.core.collision_QMARK_ = (function collision_QMARK_(p__23560,rect){var map__23568 = p__23560;var map__23568__$1 = ((cljs.core.seq_QMARK_.call(null,map__23568))?cljs.core.apply.call(null,cljs.core.hash_map,map__23568):map__23568);var ball = map__23568__$1;var radius = cljs.core.get.call(null,map__23568__$1,new cljs.core.Keyword(null,"radius","radius",4370292740));var corners = (function (){var iter__11861__auto__ = ((function (map__23568,map__23568__$1,ball,radius){
return (function iter__23569(s__23570){return (new cljs.core.LazySeq(null,((function (map__23568,map__23568__$1,ball,radius){
return (function (){var s__23570__$1 = s__23570;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__23570__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__11857__auto__ = ((function (s__23570__$1,x,xs__4579__auto__,temp__4092__auto__,map__23568,map__23568__$1,ball,radius){
return (function iter__23571(s__23572){return (new cljs.core.LazySeq(null,((function (s__23570__$1,x,xs__4579__auto__,temp__4092__auto__,map__23568,map__23568__$1,ball,radius){
return (function (){var s__23572__$1 = s__23572;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__23572__$1);if(temp__4092__auto____$1)
{var s__23572__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__23572__$2))
{var c__11859__auto__ = cljs.core.chunk_first.call(null,s__23572__$2);var size__11860__auto__ = cljs.core.count.call(null,c__11859__auto__);var b__23574 = cljs.core.chunk_buffer.call(null,size__11860__auto__);if((function (){var i__23573 = 0;while(true){
if((i__23573 < size__11860__auto__))
{var y = cljs.core._nth.call(null,c__11859__auto__,i__23573);cljs.core.chunk_append.call(null,b__23574,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),x,new cljs.core.Keyword(null,"y","y",1013904363),y], null));
{
var G__23575 = (i__23573 + 1);
i__23573 = G__23575;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23574),iter__23571.call(null,cljs.core.chunk_rest.call(null,s__23572__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23574),null);
}
} else
{var y = cljs.core.first.call(null,s__23572__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),x,new cljs.core.Keyword(null,"y","y",1013904363),y], null),iter__23571.call(null,cljs.core.rest.call(null,s__23572__$2)));
}
} else
{return null;
}
break;
}
});})(s__23570__$1,x,xs__4579__auto__,temp__4092__auto__,map__23568,map__23568__$1,ball,radius))
,null,null));
});})(s__23570__$1,x,xs__4579__auto__,temp__4092__auto__,map__23568,map__23568__$1,ball,radius))
;var fs__11858__auto__ = cljs.core.seq.call(null,iterys__11857__auto__.call(null,ball_roller.core._PLUS__.call(null,new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(rect),new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(rect))));if(fs__11858__auto__)
{return cljs.core.concat.call(null,fs__11858__auto__,iter__23569.call(null,cljs.core.rest.call(null,s__23570__$1)));
} else
{{
var G__23576 = cljs.core.rest.call(null,s__23570__$1);
s__23570__$1 = G__23576;
continue;
}
}
} else
{return null;
}
break;
}
});})(map__23568,map__23568__$1,ball,radius))
,null,null));
});})(map__23568,map__23568__$1,ball,radius))
;return iter__11861__auto__.call(null,ball_roller.core._PLUS__.call(null,new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(rect),new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(rect)));
})();return cljs.core.some.call(null,((function (corners,map__23568,map__23568__$1,ball,radius){
return (function (p1__23559_SHARP_){return (ball_roller.vector_math.dist.call(null,ball.call(null,new cljs.core.Keyword(null,"position","position",1761709211)),p1__23559_SHARP_) < radius);
});})(corners,map__23568,map__23568__$1,ball,radius))
,corners);
});
ball_roller.core.activate_items = (function activate_items(state){var vec__23581 = cljs.core.split_with.call(null,(function (p1__23577_SHARP_){return ball_roller.core.collision_QMARK_.call(null,state.call(null,new cljs.core.Keyword(null,"ball","ball",1016920433)),p1__23577_SHARP_);
}),state.call(null,new cljs.core.Keyword(null,"items","items",1114430258)));var to_activate = cljs.core.nth.call(null,vec__23581,0,null);var items = cljs.core.nth.call(null,vec__23581,1,null);return cljs.core.reduce.call(null,((function (vec__23581,to_activate,items){
return (function (p1__23579_SHARP_,p2__23578_SHARP_){return p2__23578_SHARP_.call(null,new cljs.core.Keyword(null,"activate","activate",3652896869)).call(null,p1__23579_SHARP_);
});})(vec__23581,to_activate,items))
,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"items","items",1114430258),items),to_activate);
});
ball_roller.core.update_pattern = (function update_pattern(state){var temp__4090__auto__ = cljs.core.last.call(null,state.call(null,new cljs.core.Keyword(null,"wall-hits","wall-hits",2426925269)));if(cljs.core.truth_(temp__4090__auto__))
{var vec__23585 = temp__4090__auto__;var hit = cljs.core.nth.call(null,vec__23585,0,null);var time = cljs.core.nth.call(null,vec__23585,1,null);if(cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",4517781250),new cljs.core.Keyword(null,"steps","steps",1123665561)], null)),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",4517781250),new cljs.core.Keyword(null,"current","current",2140844267)], null))),cljs.core.dissoc.call(null,hit,new cljs.core.Keyword(null,"speed","speed",1123546041))))
{return cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",4517781250),new cljs.core.Keyword(null,"current","current",2140844267)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bounce-time","bounce-time",2985182820)], null),((function (vec__23585,hit,time,temp__4090__auto__){
return (function (p1__23582_SHARP_){return (p1__23582_SHARP_ * 0.96);
});})(vec__23585,hit,time,temp__4090__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",1123168772)], null),((function (vec__23585,hit,time,temp__4090__auto__){
return (function (p1__23583_SHARP_){if(cljs.core.truth_(p1__23583_SHARP_))
{return (p1__23583_SHARP_ + 1);
} else
{return 1;
}
});})(vec__23585,hit,time,temp__4090__auto__))
),new cljs.core.Keyword(null,"correct-hit","correct-hit",2478137122),state.call(null,new cljs.core.Keyword(null,"timestamp","timestamp",1069030536)));
} else
{return state;
}
} else
{return state;
}
});
ball_roller.core.check_for_win_or_loss = (function check_for_win_or_loss(state){if((cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",4517781250),new cljs.core.Keyword(null,"current","current",2140844267)], null)) >= cljs.core.count.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",4517781250),new cljs.core.Keyword(null,"steps","steps",1123665561)], null)))))
{return ball_roller.core.next_state.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"victory","victory",1466211716)], null));
} else
{if(cljs.core.truth_((function (){var and__11124__auto__ = state.call(null,new cljs.core.Keyword(null,"correct-hit","correct-hit",2478137122));if(cljs.core.truth_(and__11124__auto__))
{return ((state.call(null,new cljs.core.Keyword(null,"correct-hit","correct-hit",2478137122)) + state.call(null,new cljs.core.Keyword(null,"bounce-time","bounce-time",2985182820))) < state.call(null,new cljs.core.Keyword(null,"timestamp","timestamp",1069030536)));
} else
{return and__11124__auto__;
}
})()))
{cljs.core.reset_BANG_.call(null,ball_roller.core.click_events,cljs.core.PersistentVector.EMPTY);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"loss","loss",1017232021));
} else
{if(new cljs.core.Keyword(null,"otherwise","otherwise",3364035366))
{return state;
} else
{return null;
}
}
}
});
ball_roller.core.log_state = (function log_state(state){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"previous-states","previous-states",1226734858)], null),(function (p1__23586_SHARP_){return cljs.core.conj.call(null,p1__23586_SHARP_,state);
}));
});
ball_roller.core.update_timestamp$ = (function update_timestamp$(state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"timestamp","timestamp",1069030536),ball_roller.util.current_time$.call(null));
});
ball_roller.core.new_game = (function new_game(level){return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"game","game",1017069412),new cljs.core.Keyword(null,"previous-states","previous-states",1226734858),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"wall-hits","wall-hits",2426925269),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"bounce-time","bounce-time",2985182820),(60 * 40),new cljs.core.Keyword(null,"width","width",1127031096),window.innerWidth,new cljs.core.Keyword(null,"height","height",4087841945),window.innerHeight], null),level.call(null));
});
/**
* Advances the game state.
*/
ball_roller.core.advance = (function (){var method_table__12002__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__12003__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__12004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__12005__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__12006__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("advance",new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__12006__auto__,method_table__12002__auto__,prefer_table__12003__auto__,method_cache__12004__auto__,cached_hierarchy__12005__auto__));
})();
cljs.core._add_method.call(null,ball_roller.core.advance,new cljs.core.Keyword(null,"game","game",1017069412),(function (state){var dt = (ball_roller.util.current_time$.call(null) - new cljs.core.Keyword(null,"timestamp","timestamp",1069030536).cljs$core$IFn$_invoke$arity$1(state));return ball_roller.core.update_timestamp$.call(null,ball_roller.core.activate_items.call(null,ball_roller.core.check_for_win_or_loss.call(null,ball_roller.core.update_pattern.call(null,ball_roller.core.update_walls.call(null,ball_roller.core.next_ball.call(null,ball_roller.core.log_state.call(null,state),dt),dt)))));
}));
cljs.core._add_method.call(null,ball_roller.core.advance,new cljs.core.Keyword(null,"menu","menu",1017252049),(function (state){if(!(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,ball_roller.core.click_events))))
{cljs.core.reset_BANG_.call(null,ball_roller.core.click_events,cljs.core.PersistentVector.EMPTY);
return ball_roller.core.update_timestamp$.call(null,ball_roller.core.new_game.call(null,ball_roller.level1.new$));
} else
{return state;
}
}));
cljs.core._add_method.call(null,ball_roller.core.advance,new cljs.core.Keyword(null,"victory","victory",1466211716),(function (state){if(!(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,ball_roller.core.click_events))))
{cljs.core.reset_BANG_.call(null,ball_roller.core.click_events,cljs.core.PersistentVector.EMPTY);
return ball_roller.core.init_state;
} else
{return state;
}
}));
cljs.core._add_method.call(null,ball_roller.core.advance,new cljs.core.Keyword(null,"loss","loss",1017232021),(function (state){if(!(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,ball_roller.core.click_events))))
{cljs.core.reset_BANG_.call(null,ball_roller.core.click_events,cljs.core.PersistentVector.EMPTY);
return ball_roller.core.init_state;
} else
{return state;
}
}));
ball_roller.core.next_state = (function next_state(state){return ball_roller.core.advance.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"phone","phone",1120547040),cljs.core.deref.call(null,ball_roller.core.last_accel)));
});
ball_roller.core.animate_BANG_ = (function animate_BANG_(state,canvas){window.requestAnimationFrame((function (){return animate_BANG_.call(null,ball_roller.core.next_state.call(null,state),canvas);
}));
return ball_roller.graphics.core.render.call(null,canvas,state);
});
ball_roller.core.start_loop = (function start_loop(canvas){return ball_roller.core.animate_BANG_.call(null,ball_roller.core.update_timestamp$.call(null,ball_roller.core.init_state),canvas);
});
ball_roller.core.start = (function start(dev){cljs.core.print.call(null,"Starting...");
if(cljs.core.truth_(dev))
{figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),(function (){return cljs.core.print.call(null,"Core reloaded!");
}));
} else
{}
ball_roller.core.setup_orientation_watcher_BANG_.call(null);
ball_roller.core.setup_click_watcher_BANG_.call(null);
return ball_roller.core.start_loop.call(null,(function (){var ele = ball_roller.util.create_element_BANG_.call(null,"canvas");ele.width = window.innerWidth;
ele.height = window.innerHeight;
document.body.appendChild(ele);
return ele;
})());
});
goog.exportSymbol('ball_roller.core.start', ball_roller.core.start);

//# sourceMappingURL=core.js.map