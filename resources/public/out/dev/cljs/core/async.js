// Compiled by ClojureScript 0.0-2234
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24923 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24923 = (function (f,fn_handler,meta24924){
this.f = f;
this.fn_handler = fn_handler;
this.meta24924 = meta24924;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24923.cljs$lang$type = true;
cljs.core.async.t24923.cljs$lang$ctorStr = "cljs.core.async/t24923";
cljs.core.async.t24923.cljs$lang$ctorPrWriter = (function (this__11703__auto__,writer__11704__auto__,opt__11705__auto__){return cljs.core._write.call(null,writer__11704__auto__,"cljs.core.async/t24923");
});
cljs.core.async.t24923.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24923.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24923.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24925){var self__ = this;
var _24925__$1 = this;return self__.meta24924;
});
cljs.core.async.t24923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24925,meta24924__$1){var self__ = this;
var _24925__$1 = this;return (new cljs.core.async.t24923(self__.f,self__.fn_handler,meta24924__$1));
});
cljs.core.async.__GT_t24923 = (function __GT_t24923(f__$1,fn_handler__$1,meta24924){return (new cljs.core.async.t24923(f__$1,fn_handler__$1,meta24924));
});
}
return (new cljs.core.async.t24923(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24927 = buff;if(G__24927)
{var bit__11786__auto__ = null;if(cljs.core.truth_((function (){var or__11136__auto__ = bit__11786__auto__;if(cljs.core.truth_(or__11136__auto__))
{return or__11136__auto__;
} else
{return G__24927.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24927.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24927);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24927);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_24928 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_24928);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_24928,ret){
return (function (){return fn1.call(null,val_24928);
});})(val_24928,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4090__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4090__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__11992__auto___24929 = n;var x_24930 = 0;while(true){
if((x_24930 < n__11992__auto___24929))
{(a[x_24930] = 0);
{
var G__24931 = (x_24930 + 1);
x_24930 = G__24931;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__24932 = (i + 1);
i = G__24932;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t24936 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24936 = (function (flag,alt_flag,meta24937){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24937 = meta24937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24936.cljs$lang$type = true;
cljs.core.async.t24936.cljs$lang$ctorStr = "cljs.core.async/t24936";
cljs.core.async.t24936.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__11703__auto__,writer__11704__auto__,opt__11705__auto__){return cljs.core._write.call(null,writer__11704__auto__,"cljs.core.async/t24936");
});})(flag))
;
cljs.core.async.t24936.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24936.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t24936.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t24936.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24938){var self__ = this;
var _24938__$1 = this;return self__.meta24937;
});})(flag))
;
cljs.core.async.t24936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24938,meta24937__$1){var self__ = this;
var _24938__$1 = this;return (new cljs.core.async.t24936(self__.flag,self__.alt_flag,meta24937__$1));
});})(flag))
;
cljs.core.async.__GT_t24936 = ((function (flag){
return (function __GT_t24936(flag__$1,alt_flag__$1,meta24937){return (new cljs.core.async.t24936(flag__$1,alt_flag__$1,meta24937));
});})(flag))
;
}
return (new cljs.core.async.t24936(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24942 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24942 = (function (cb,flag,alt_handler,meta24943){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24943 = meta24943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24942.cljs$lang$type = true;
cljs.core.async.t24942.cljs$lang$ctorStr = "cljs.core.async/t24942";
cljs.core.async.t24942.cljs$lang$ctorPrWriter = (function (this__11703__auto__,writer__11704__auto__,opt__11705__auto__){return cljs.core._write.call(null,writer__11704__auto__,"cljs.core.async/t24942");
});
cljs.core.async.t24942.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24942.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t24942.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t24942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24944){var self__ = this;
var _24944__$1 = this;return self__.meta24943;
});
cljs.core.async.t24942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24944,meta24943__$1){var self__ = this;
var _24944__$1 = this;return (new cljs.core.async.t24942(self__.cb,self__.flag,self__.alt_handler,meta24943__$1));
});
cljs.core.async.__GT_t24942 = (function __GT_t24942(cb__$1,flag__$1,alt_handler__$1,meta24943){return (new cljs.core.async.t24942(cb__$1,flag__$1,alt_handler__$1,meta24943));
});
}
return (new cljs.core.async.t24942(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24945_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24945_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24946_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24946_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__11136__auto__ = wport;if(cljs.core.truth_(or__11136__auto__))
{return or__11136__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__24947 = (i + 1);
i = G__24947;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__11136__auto__ = ret;if(cljs.core.truth_(or__11136__auto__))
{return or__11136__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__11124__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__11124__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__11124__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__24948){var map__24950 = p__24948;var map__24950__$1 = ((cljs.core.seq_QMARK_.call(null,map__24950))?cljs.core.apply.call(null,cljs.core.hash_map,map__24950):map__24950);var opts = map__24950__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__24948 = null;if (arguments.length > 1) {
  p__24948 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24948);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24951){
var ports = cljs.core.first(arglist__24951);
var p__24948 = cljs.core.rest(arglist__24951);
return alts_BANG___delegate(ports,p__24948);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24959 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24959 = (function (ch,f,map_LT_,meta24960){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24960 = meta24960;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24959.cljs$lang$type = true;
cljs.core.async.t24959.cljs$lang$ctorStr = "cljs.core.async/t24959";
cljs.core.async.t24959.cljs$lang$ctorPrWriter = (function (this__11703__auto__,writer__11704__auto__,opt__11705__auto__){return cljs.core._write.call(null,writer__11704__auto__,"cljs.core.async/t24959");
});
cljs.core.async.t24959.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24959.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t24959.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24959.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t24962 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24962 = (function (fn1,_,meta24960,ch,f,map_LT_,meta24963){
this.fn1 = fn1;
this._ = _;
this.meta24960 = meta24960;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24963 = meta24963;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24962.cljs$lang$type = true;
cljs.core.async.t24962.cljs$lang$ctorStr = "cljs.core.async/t24962";
cljs.core.async.t24962.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__11703__auto__,writer__11704__auto__,opt__11705__auto__){return cljs.core._write.call(null,writer__11704__auto__,"cljs.core.async/t24962");
});})(___$1))
;
cljs.core.async.t24962.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t24962.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t24962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__24952_SHARP_){return f1.call(null,(((p1__24952_SHARP_ == null))?null:self__.f.call(null,p1__24952_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t24962.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24964){var self__ = this;
var _24964__$1 = this;return self__.meta24963;
});})(___$1))
;
cljs.core.async.t24962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24964,meta24963__$1){var self__ = this;
var _24964__$1 = this;return (new cljs.core.async.t24962(self__.fn1,self__._,self__.meta24960,self__.ch,self__.f,self__.map_LT_,meta24963__$1));
});})(___$1))
;
cljs.core.async.__GT_t24962 = ((function (___$1){
return (function __GT_t24962(fn1__$1,___$2,meta24960__$1,ch__$2,f__$2,map_LT___$2,meta24963){return (new cljs.core.async.t24962(fn1__$1,___$2,meta24960__$1,ch__$2,f__$2,map_LT___$2,meta24963));
});})(___$1))
;
}
return (new cljs.core.async.t24962(fn1,___$1,self__.meta24960,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__11124__auto__ = ret;if(cljs.core.truth_(and__11124__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__11124__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t24959.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24959.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24959.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t24959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24961){var self__ = this;
var _24961__$1 = this;return self__.meta24960;
});
cljs.core.async.t24959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24961,meta24960__$1){var self__ = this;
var _24961__$1 = this;return (new cljs.core.async.t24959(self__.ch,self__.f,self__.map_LT_,meta24960__$1));
});
cljs.core.async.__GT_t24959 = (function __GT_t24959(ch__$1,f__$1,map_LT___$1,meta24960){return (new cljs.core.async.t24959(ch__$1,f__$1,map_LT___$1,meta24960));
});
}
return (new cljs.core.async.t24959(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24968 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24968 = (function (ch,f,map_GT_,meta24969){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24969 = meta24969;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24968.cljs$lang$type = true;
cljs.core.async.t24968.cljs$lang$ctorStr = "cljs.core.async/t24968";
cljs.core.async.t24968.cljs$lang$ctorPrWriter = (function (this__11703__auto__,writer__11704__auto__,opt__11705__auto__){return cljs.core._write.call(null,writer__11704__auto__,"cljs.core.async/t24968");
});
cljs.core.async.t24968.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24968.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t24968.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24968.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t24968.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24968.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24970){var self__ = this;
var _24970__$1 = this;return self__.meta24969;
});
cljs.core.async.t24968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24970,meta24969__$1){var self__ = this;
var _24970__$1 = this;return (new cljs.core.async.t24968(self__.ch,self__.f,self__.map_GT_,meta24969__$1));
});
cljs.core.async.__GT_t24968 = (function __GT_t24968(ch__$1,f__$1,map_GT___$1,meta24969){return (new cljs.core.async.t24968(ch__$1,f__$1,map_GT___$1,meta24969));
});
}
return (new cljs.core.async.t24968(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24974 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24974 = (function (ch,p,filter_GT_,meta24975){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24975 = meta24975;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24974.cljs$lang$type = true;
cljs.core.async.t24974.cljs$lang$ctorStr = "cljs.core.async/t24974";
cljs.core.async.t24974.cljs$lang$ctorPrWriter = (function (this__11703__auto__,writer__11704__auto__,opt__11705__auto__){return cljs.core._write.call(null,writer__11704__auto__,"cljs.core.async/t24974");
});
cljs.core.async.t24974.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24974.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t24974.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24974.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t24974.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24974.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24974.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t24974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24976){var self__ = this;
var _24976__$1 = this;return self__.meta24975;
});
cljs.core.async.t24974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24976,meta24975__$1){var self__ = this;
var _24976__$1 = this;return (new cljs.core.async.t24974(self__.ch,self__.p,self__.filter_GT_,meta24975__$1));
});
cljs.core.async.__GT_t24974 = (function __GT_t24974(ch__$1,p__$1,filter_GT___$1,meta24975){return (new cljs.core.async.t24974(ch__$1,p__$1,filter_GT___$1,meta24975));
});
}
return (new cljs.core.async.t24974(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14932__auto___25059 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14932__auto___25059,out){
return (function (){var f__14933__auto__ = (function (){var switch__14861__auto__ = ((function (c__14932__auto___25059,out){
return (function (state_25038){var state_val_25039 = (state_25038[1]);if((state_val_25039 === 1))
{var state_25038__$1 = state_25038;var statearr_25040_25060 = state_25038__$1;(statearr_25040_25060[2] = null);
(statearr_25040_25060[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25039 === 2))
{var state_25038__$1 = state_25038;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25038__$1,4,ch);
} else
{if((state_val_25039 === 3))
{var inst_25036 = (state_25038[2]);var state_25038__$1 = state_25038;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25038__$1,inst_25036);
} else
{if((state_val_25039 === 4))
{var inst_25020 = (state_25038[7]);var inst_25020__$1 = (state_25038[2]);var inst_25021 = (inst_25020__$1 == null);var state_25038__$1 = (function (){var statearr_25041 = state_25038;(statearr_25041[7] = inst_25020__$1);
return statearr_25041;
})();if(cljs.core.truth_(inst_25021))
{var statearr_25042_25061 = state_25038__$1;(statearr_25042_25061[1] = 5);
} else
{var statearr_25043_25062 = state_25038__$1;(statearr_25043_25062[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25039 === 5))
{var inst_25023 = cljs.core.async.close_BANG_.call(null,out);var state_25038__$1 = state_25038;var statearr_25044_25063 = state_25038__$1;(statearr_25044_25063[2] = inst_25023);
(statearr_25044_25063[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25039 === 6))
{var inst_25020 = (state_25038[7]);var inst_25025 = p.call(null,inst_25020);var state_25038__$1 = state_25038;if(cljs.core.truth_(inst_25025))
{var statearr_25045_25064 = state_25038__$1;(statearr_25045_25064[1] = 8);
} else
{var statearr_25046_25065 = state_25038__$1;(statearr_25046_25065[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25039 === 7))
{var inst_25034 = (state_25038[2]);var state_25038__$1 = state_25038;var statearr_25047_25066 = state_25038__$1;(statearr_25047_25066[2] = inst_25034);
(statearr_25047_25066[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25039 === 8))
{var inst_25020 = (state_25038[7]);var state_25038__$1 = state_25038;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25038__$1,11,out,inst_25020);
} else
{if((state_val_25039 === 9))
{var state_25038__$1 = state_25038;var statearr_25048_25067 = state_25038__$1;(statearr_25048_25067[2] = null);
(statearr_25048_25067[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25039 === 10))
{var inst_25031 = (state_25038[2]);var state_25038__$1 = (function (){var statearr_25049 = state_25038;(statearr_25049[8] = inst_25031);
return statearr_25049;
})();var statearr_25050_25068 = state_25038__$1;(statearr_25050_25068[2] = null);
(statearr_25050_25068[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25039 === 11))
{var inst_25028 = (state_25038[2]);var state_25038__$1 = state_25038;var statearr_25051_25069 = state_25038__$1;(statearr_25051_25069[2] = inst_25028);
(statearr_25051_25069[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14932__auto___25059,out))
;return ((function (switch__14861__auto__,c__14932__auto___25059,out){
return (function() {
var state_machine__14862__auto__ = null;
var state_machine__14862__auto____0 = (function (){var statearr_25055 = [null,null,null,null,null,null,null,null,null];(statearr_25055[0] = state_machine__14862__auto__);
(statearr_25055[1] = 1);
return statearr_25055;
});
var state_machine__14862__auto____1 = (function (state_25038){while(true){
var ret_value__14863__auto__ = (function (){try{while(true){
var result__14864__auto__ = switch__14861__auto__.call(null,state_25038);if(cljs.core.keyword_identical_QMARK_.call(null,result__14864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14864__auto__;
}
break;
}
}catch (e25056){if((e25056 instanceof Object))
{var ex__14865__auto__ = e25056;var statearr_25057_25070 = state_25038;(statearr_25057_25070[5] = ex__14865__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25038);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25056;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14863__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25071 = state_25038;
state_25038 = G__25071;
continue;
}
} else
{return ret_value__14863__auto__;
}
break;
}
});
state_machine__14862__auto__ = function(state_25038){
switch(arguments.length){
case 0:
return state_machine__14862__auto____0.call(this);
case 1:
return state_machine__14862__auto____1.call(this,state_25038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14862__auto____0;
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14862__auto____1;
return state_machine__14862__auto__;
})()
;})(switch__14861__auto__,c__14932__auto___25059,out))
})();var state__14934__auto__ = (function (){var statearr_25058 = f__14933__auto__.call(null);(statearr_25058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14932__auto___25059);
return statearr_25058;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14934__auto__);
});})(c__14932__auto___25059,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__14932__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14932__auto__){
return (function (){var f__14933__auto__ = (function (){var switch__14861__auto__ = ((function (c__14932__auto__){
return (function (state_25237){var state_val_25238 = (state_25237[1]);if((state_val_25238 === 1))
{var state_25237__$1 = state_25237;var statearr_25239_25280 = state_25237__$1;(statearr_25239_25280[2] = null);
(statearr_25239_25280[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25238 === 2))
{var state_25237__$1 = state_25237;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25237__$1,4,in$);
} else
{if((state_val_25238 === 3))
{var inst_25235 = (state_25237[2]);var state_25237__$1 = state_25237;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25237__$1,inst_25235);
} else
{if((state_val_25238 === 4))
{var inst_25178 = (state_25237[7]);var inst_25178__$1 = (state_25237[2]);var inst_25179 = (inst_25178__$1 == null);var state_25237__$1 = (function (){var statearr_25240 = state_25237;(statearr_25240[7] = inst_25178__$1);
return statearr_25240;
})();if(cljs.core.truth_(inst_25179))
{var statearr_25241_25281 = state_25237__$1;(statearr_25241_25281[1] = 5);
} else
{var statearr_25242_25282 = state_25237__$1;(statearr_25242_25282[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25238 === 5))
{var inst_25181 = cljs.core.async.close_BANG_.call(null,out);var state_25237__$1 = state_25237;var statearr_25243_25283 = state_25237__$1;(statearr_25243_25283[2] = inst_25181);
(statearr_25243_25283[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25238 === 6))
{var inst_25178 = (state_25237[7]);var inst_25187 = f.call(null,inst_25178);var inst_25188 = cljs.core.seq.call(null,inst_25187);var inst_25189 = inst_25188;var inst_25190 = null;var inst_25191 = 0;var inst_25192 = 0;var state_25237__$1 = (function (){var statearr_25244 = state_25237;(statearr_25244[8] = inst_25190);
(statearr_25244[9] = inst_25189);
(statearr_25244[10] = inst_25191);
(statearr_25244[11] = inst_25192);
return statearr_25244;
})();var statearr_25245_25284 = state_25237__$1;(statearr_25245_25284[2] = null);
(statearr_25245_25284[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25238 === 7))
{var inst_25233 = (state_25237[2]);var state_25237__$1 = state_25237;var statearr_25246_25285 = state_25237__$1;(statearr_25246_25285[2] = inst_25233);
(statearr_25246_25285[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25238 === 8))
{var inst_25191 = (state_25237[10]);var inst_25192 = (state_25237[11]);var inst_25194 = (inst_25192 < inst_25191);var inst_25195 = inst_25194;var state_25237__$1 = state_25237;if(cljs.core.truth_(inst_25195))
{var statearr_25247_25286 = state_25237__$1;(statearr_25247_25286[1] = 10);
} else
{var statearr_25248_25287 = state_25237__$1;(statearr_25248_25287[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25238 === 9))
{var inst_25225 = (state_25237[2]);var inst_25226 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_25237__$1 = (function (){var statearr_25249 = state_25237;(statearr_25249[12] = inst_25225);
return statearr_25249;
})();if(cljs.core.truth_(inst_25226))
{var statearr_25250_25288 = state_25237__$1;(statearr_25250_25288[1] = 21);
} else
{var statearr_25251_25289 = state_25237__$1;(statearr_25251_25289[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25238 === 10))
{var inst_25190 = (state_25237[8]);var inst_25192 = (state_25237[11]);var inst_25197 = cljs.core._nth.call(null,inst_25190,inst_25192);var state_25237__$1 = state_25237;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25237__$1,13,out,inst_25197);
} else
{if((state_val_25238 === 11))
{var inst_25189 = (state_25237[9]);var inst_25203 = (state_25237[13]);var inst_25203__$1 = cljs.core.seq.call(null,inst_25189);var state_25237__$1 = (function (){var statearr_25255 = state_25237;(statearr_25255[13] = inst_25203__$1);
return statearr_25255;
})();if(inst_25203__$1)
{var statearr_25256_25290 = state_25237__$1;(statearr_25256_25290[1] = 14);
} else
{var statearr_25257_25291 = state_25237__$1;(statearr_25257_25291[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25238 === 12))
{var inst_25223 = (state_25237[2]);var state_25237__$1 = state_25237;var statearr_25258_25292 = state_25237__$1;(statearr_25258_25292[2] = inst_25223);
(statearr_25258_25292[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25238 === 13))
{var inst_25190 = (state_25237[8]);var inst_25189 = (state_25237[9]);var inst_25191 = (state_25237[10]);var inst_25192 = (state_25237[11]);var inst_25199 = (state_25237[2]);var inst_25200 = (inst_25192 + 1);var tmp25252 = inst_25190;var tmp25253 = inst_25189;var tmp25254 = inst_25191;var inst_25189__$1 = tmp25253;var inst_25190__$1 = tmp25252;var inst_25191__$1 = tmp25254;var inst_25192__$1 = inst_25200;var state_25237__$1 = (function (){var statearr_25259 = state_25237;(statearr_25259[8] = inst_25190__$1);
(statearr_25259[9] = inst_25189__$1);
(statearr_25259[10] = inst_25191__$1);
(statearr_25259[11] = inst_25192__$1);
(statearr_25259[14] = inst_25199);
return statearr_25259;
})();var statearr_25260_25293 = state_25237__$1;(statearr_25260_25293[2] = null);
(statearr_25260_25293[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25238 === 14))
{var inst_25203 = (state_25237[13]);var inst_25205 = cljs.core.chunked_seq_QMARK_.call(null,inst_25203);var state_25237__$1 = state_25237;if(inst_25205)
{var statearr_25261_25294 = state_25237__$1;(statearr_25261_25294[1] = 17);
} else
{var statearr_25262_25295 = state_25237__$1;(statearr_25262_25295[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25238 === 15))
{var state_25237__$1 = state_25237;var statearr_25263_25296 = state_25237__$1;(statearr_25263_25296[2] = null);
(statearr_25263_25296[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25238 === 16))
{var inst_25221 = (state_25237[2]);var state_25237__$1 = state_25237;var statearr_25264_25297 = state_25237__$1;(statearr_25264_25297[2] = inst_25221);
(statearr_25264_25297[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25238 === 17))
{var inst_25203 = (state_25237[13]);var inst_25207 = cljs.core.chunk_first.call(null,inst_25203);var inst_25208 = cljs.core.chunk_rest.call(null,inst_25203);var inst_25209 = cljs.core.count.call(null,inst_25207);var inst_25189 = inst_25208;var inst_25190 = inst_25207;var inst_25191 = inst_25209;var inst_25192 = 0;var state_25237__$1 = (function (){var statearr_25265 = state_25237;(statearr_25265[8] = inst_25190);
(statearr_25265[9] = inst_25189);
(statearr_25265[10] = inst_25191);
(statearr_25265[11] = inst_25192);
return statearr_25265;
})();var statearr_25266_25298 = state_25237__$1;(statearr_25266_25298[2] = null);
(statearr_25266_25298[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25238 === 18))
{var inst_25203 = (state_25237[13]);var inst_25212 = cljs.core.first.call(null,inst_25203);var state_25237__$1 = state_25237;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25237__$1,20,out,inst_25212);
} else
{if((state_val_25238 === 19))
{var inst_25218 = (state_25237[2]);var state_25237__$1 = state_25237;var statearr_25267_25299 = state_25237__$1;(statearr_25267_25299[2] = inst_25218);
(statearr_25267_25299[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25238 === 20))
{var inst_25203 = (state_25237[13]);var inst_25214 = (state_25237[2]);var inst_25215 = cljs.core.next.call(null,inst_25203);var inst_25189 = inst_25215;var inst_25190 = null;var inst_25191 = 0;var inst_25192 = 0;var state_25237__$1 = (function (){var statearr_25268 = state_25237;(statearr_25268[8] = inst_25190);
(statearr_25268[9] = inst_25189);
(statearr_25268[10] = inst_25191);
(statearr_25268[11] = inst_25192);
(statearr_25268[15] = inst_25214);
return statearr_25268;
})();var statearr_25269_25300 = state_25237__$1;(statearr_25269_25300[2] = null);
(statearr_25269_25300[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25238 === 21))
{var state_25237__$1 = state_25237;var statearr_25270_25301 = state_25237__$1;(statearr_25270_25301[2] = null);
(statearr_25270_25301[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25238 === 22))
{var state_25237__$1 = state_25237;var statearr_25271_25302 = state_25237__$1;(statearr_25271_25302[2] = null);
(statearr_25271_25302[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25238 === 23))
{var inst_25231 = (state_25237[2]);var state_25237__$1 = state_25237;var statearr_25272_25303 = state_25237__$1;(statearr_25272_25303[2] = inst_25231);
(statearr_25272_25303[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14932__auto__))
;return ((function (switch__14861__auto__,c__14932__auto__){
return (function() {
var state_machine__14862__auto__ = null;
var state_machine__14862__auto____0 = (function (){var statearr_25276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25276[0] = state_machine__14862__auto__);
(statearr_25276[1] = 1);
return statearr_25276;
});
var state_machine__14862__auto____1 = (function (state_25237){while(true){
var ret_value__14863__auto__ = (function (){try{while(true){
var result__14864__auto__ = switch__14861__auto__.call(null,state_25237);if(cljs.core.keyword_identical_QMARK_.call(null,result__14864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14864__auto__;
}
break;
}
}catch (e25277){if((e25277 instanceof Object))
{var ex__14865__auto__ = e25277;var statearr_25278_25304 = state_25237;(statearr_25278_25304[5] = ex__14865__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25237);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25277;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14863__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25305 = state_25237;
state_25237 = G__25305;
continue;
}
} else
{return ret_value__14863__auto__;
}
break;
}
});
state_machine__14862__auto__ = function(state_25237){
switch(arguments.length){
case 0:
return state_machine__14862__auto____0.call(this);
case 1:
return state_machine__14862__auto____1.call(this,state_25237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14862__auto____0;
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14862__auto____1;
return state_machine__14862__auto__;
})()
;})(switch__14861__auto__,c__14932__auto__))
})();var state__14934__auto__ = (function (){var statearr_25279 = f__14933__auto__.call(null);(statearr_25279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14932__auto__);
return statearr_25279;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14934__auto__);
});})(c__14932__auto__))
);
return c__14932__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__14932__auto___25400 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14932__auto___25400){
return (function (){var f__14933__auto__ = (function (){var switch__14861__auto__ = ((function (c__14932__auto___25400){
return (function (state_25376){var state_val_25377 = (state_25376[1]);if((state_val_25377 === 1))
{var state_25376__$1 = state_25376;var statearr_25378_25401 = state_25376__$1;(statearr_25378_25401[2] = null);
(statearr_25378_25401[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25377 === 2))
{var state_25376__$1 = state_25376;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25376__$1,4,from);
} else
{if((state_val_25377 === 3))
{var inst_25374 = (state_25376[2]);var state_25376__$1 = state_25376;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25376__$1,inst_25374);
} else
{if((state_val_25377 === 4))
{var inst_25355 = (state_25376[7]);var inst_25355__$1 = (state_25376[2]);var inst_25356 = (inst_25355__$1 == null);var state_25376__$1 = (function (){var statearr_25379 = state_25376;(statearr_25379[7] = inst_25355__$1);
return statearr_25379;
})();if(cljs.core.truth_(inst_25356))
{var statearr_25380_25402 = state_25376__$1;(statearr_25380_25402[1] = 5);
} else
{var statearr_25381_25403 = state_25376__$1;(statearr_25381_25403[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25377 === 5))
{var state_25376__$1 = state_25376;if(cljs.core.truth_(close_QMARK_))
{var statearr_25382_25404 = state_25376__$1;(statearr_25382_25404[1] = 8);
} else
{var statearr_25383_25405 = state_25376__$1;(statearr_25383_25405[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25377 === 6))
{var inst_25355 = (state_25376[7]);var state_25376__$1 = state_25376;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25376__$1,11,to,inst_25355);
} else
{if((state_val_25377 === 7))
{var inst_25372 = (state_25376[2]);var state_25376__$1 = state_25376;var statearr_25384_25406 = state_25376__$1;(statearr_25384_25406[2] = inst_25372);
(statearr_25384_25406[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25377 === 8))
{var inst_25359 = cljs.core.async.close_BANG_.call(null,to);var state_25376__$1 = state_25376;var statearr_25385_25407 = state_25376__$1;(statearr_25385_25407[2] = inst_25359);
(statearr_25385_25407[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25377 === 9))
{var state_25376__$1 = state_25376;var statearr_25386_25408 = state_25376__$1;(statearr_25386_25408[2] = null);
(statearr_25386_25408[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25377 === 10))
{var inst_25362 = (state_25376[2]);var state_25376__$1 = state_25376;var statearr_25387_25409 = state_25376__$1;(statearr_25387_25409[2] = inst_25362);
(statearr_25387_25409[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25377 === 11))
{var inst_25365 = (state_25376[2]);var state_25376__$1 = state_25376;if(cljs.core.truth_(inst_25365))
{var statearr_25388_25410 = state_25376__$1;(statearr_25388_25410[1] = 12);
} else
{var statearr_25389_25411 = state_25376__$1;(statearr_25389_25411[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25377 === 12))
{var state_25376__$1 = state_25376;var statearr_25390_25412 = state_25376__$1;(statearr_25390_25412[2] = null);
(statearr_25390_25412[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25377 === 13))
{var state_25376__$1 = state_25376;var statearr_25391_25413 = state_25376__$1;(statearr_25391_25413[2] = null);
(statearr_25391_25413[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25377 === 14))
{var inst_25370 = (state_25376[2]);var state_25376__$1 = state_25376;var statearr_25392_25414 = state_25376__$1;(statearr_25392_25414[2] = inst_25370);
(statearr_25392_25414[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14932__auto___25400))
;return ((function (switch__14861__auto__,c__14932__auto___25400){
return (function() {
var state_machine__14862__auto__ = null;
var state_machine__14862__auto____0 = (function (){var statearr_25396 = [null,null,null,null,null,null,null,null];(statearr_25396[0] = state_machine__14862__auto__);
(statearr_25396[1] = 1);
return statearr_25396;
});
var state_machine__14862__auto____1 = (function (state_25376){while(true){
var ret_value__14863__auto__ = (function (){try{while(true){
var result__14864__auto__ = switch__14861__auto__.call(null,state_25376);if(cljs.core.keyword_identical_QMARK_.call(null,result__14864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14864__auto__;
}
break;
}
}catch (e25397){if((e25397 instanceof Object))
{var ex__14865__auto__ = e25397;var statearr_25398_25415 = state_25376;(statearr_25398_25415[5] = ex__14865__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25376);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25397;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14863__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25416 = state_25376;
state_25376 = G__25416;
continue;
}
} else
{return ret_value__14863__auto__;
}
break;
}
});
state_machine__14862__auto__ = function(state_25376){
switch(arguments.length){
case 0:
return state_machine__14862__auto____0.call(this);
case 1:
return state_machine__14862__auto____1.call(this,state_25376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14862__auto____0;
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14862__auto____1;
return state_machine__14862__auto__;
})()
;})(switch__14861__auto__,c__14932__auto___25400))
})();var state__14934__auto__ = (function (){var statearr_25399 = f__14933__auto__.call(null);(statearr_25399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14932__auto___25400);
return statearr_25399;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14934__auto__);
});})(c__14932__auto___25400))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__14932__auto___25517 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14932__auto___25517,tc,fc){
return (function (){var f__14933__auto__ = (function (){var switch__14861__auto__ = ((function (c__14932__auto___25517,tc,fc){
return (function (state_25492){var state_val_25493 = (state_25492[1]);if((state_val_25493 === 1))
{var state_25492__$1 = state_25492;var statearr_25494_25518 = state_25492__$1;(statearr_25494_25518[2] = null);
(statearr_25494_25518[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25493 === 2))
{var state_25492__$1 = state_25492;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25492__$1,4,ch);
} else
{if((state_val_25493 === 3))
{var inst_25490 = (state_25492[2]);var state_25492__$1 = state_25492;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25492__$1,inst_25490);
} else
{if((state_val_25493 === 4))
{var inst_25469 = (state_25492[7]);var inst_25469__$1 = (state_25492[2]);var inst_25470 = (inst_25469__$1 == null);var state_25492__$1 = (function (){var statearr_25495 = state_25492;(statearr_25495[7] = inst_25469__$1);
return statearr_25495;
})();if(cljs.core.truth_(inst_25470))
{var statearr_25496_25519 = state_25492__$1;(statearr_25496_25519[1] = 5);
} else
{var statearr_25497_25520 = state_25492__$1;(statearr_25497_25520[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25493 === 5))
{var inst_25472 = cljs.core.async.close_BANG_.call(null,tc);var inst_25473 = cljs.core.async.close_BANG_.call(null,fc);var state_25492__$1 = (function (){var statearr_25498 = state_25492;(statearr_25498[8] = inst_25472);
return statearr_25498;
})();var statearr_25499_25521 = state_25492__$1;(statearr_25499_25521[2] = inst_25473);
(statearr_25499_25521[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25493 === 6))
{var inst_25469 = (state_25492[7]);var inst_25475 = p.call(null,inst_25469);var state_25492__$1 = state_25492;if(cljs.core.truth_(inst_25475))
{var statearr_25500_25522 = state_25492__$1;(statearr_25500_25522[1] = 9);
} else
{var statearr_25501_25523 = state_25492__$1;(statearr_25501_25523[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25493 === 7))
{var inst_25488 = (state_25492[2]);var state_25492__$1 = state_25492;var statearr_25502_25524 = state_25492__$1;(statearr_25502_25524[2] = inst_25488);
(statearr_25502_25524[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25493 === 8))
{var inst_25481 = (state_25492[2]);var state_25492__$1 = state_25492;if(cljs.core.truth_(inst_25481))
{var statearr_25503_25525 = state_25492__$1;(statearr_25503_25525[1] = 12);
} else
{var statearr_25504_25526 = state_25492__$1;(statearr_25504_25526[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25493 === 9))
{var state_25492__$1 = state_25492;var statearr_25505_25527 = state_25492__$1;(statearr_25505_25527[2] = tc);
(statearr_25505_25527[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25493 === 10))
{var state_25492__$1 = state_25492;var statearr_25506_25528 = state_25492__$1;(statearr_25506_25528[2] = fc);
(statearr_25506_25528[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25493 === 11))
{var inst_25469 = (state_25492[7]);var inst_25479 = (state_25492[2]);var state_25492__$1 = state_25492;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25492__$1,8,inst_25479,inst_25469);
} else
{if((state_val_25493 === 12))
{var state_25492__$1 = state_25492;var statearr_25507_25529 = state_25492__$1;(statearr_25507_25529[2] = null);
(statearr_25507_25529[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25493 === 13))
{var state_25492__$1 = state_25492;var statearr_25508_25530 = state_25492__$1;(statearr_25508_25530[2] = null);
(statearr_25508_25530[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25493 === 14))
{var inst_25486 = (state_25492[2]);var state_25492__$1 = state_25492;var statearr_25509_25531 = state_25492__$1;(statearr_25509_25531[2] = inst_25486);
(statearr_25509_25531[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14932__auto___25517,tc,fc))
;return ((function (switch__14861__auto__,c__14932__auto___25517,tc,fc){
return (function() {
var state_machine__14862__auto__ = null;
var state_machine__14862__auto____0 = (function (){var statearr_25513 = [null,null,null,null,null,null,null,null,null];(statearr_25513[0] = state_machine__14862__auto__);
(statearr_25513[1] = 1);
return statearr_25513;
});
var state_machine__14862__auto____1 = (function (state_25492){while(true){
var ret_value__14863__auto__ = (function (){try{while(true){
var result__14864__auto__ = switch__14861__auto__.call(null,state_25492);if(cljs.core.keyword_identical_QMARK_.call(null,result__14864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14864__auto__;
}
break;
}
}catch (e25514){if((e25514 instanceof Object))
{var ex__14865__auto__ = e25514;var statearr_25515_25532 = state_25492;(statearr_25515_25532[5] = ex__14865__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25492);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25514;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14863__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25533 = state_25492;
state_25492 = G__25533;
continue;
}
} else
{return ret_value__14863__auto__;
}
break;
}
});
state_machine__14862__auto__ = function(state_25492){
switch(arguments.length){
case 0:
return state_machine__14862__auto____0.call(this);
case 1:
return state_machine__14862__auto____1.call(this,state_25492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14862__auto____0;
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14862__auto____1;
return state_machine__14862__auto__;
})()
;})(switch__14861__auto__,c__14932__auto___25517,tc,fc))
})();var state__14934__auto__ = (function (){var statearr_25516 = f__14933__auto__.call(null);(statearr_25516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14932__auto___25517);
return statearr_25516;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14934__auto__);
});})(c__14932__auto___25517,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__14932__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14932__auto__){
return (function (){var f__14933__auto__ = (function (){var switch__14861__auto__ = ((function (c__14932__auto__){
return (function (state_25580){var state_val_25581 = (state_25580[1]);if((state_val_25581 === 7))
{var inst_25576 = (state_25580[2]);var state_25580__$1 = state_25580;var statearr_25582_25598 = state_25580__$1;(statearr_25582_25598[2] = inst_25576);
(statearr_25582_25598[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25581 === 6))
{var inst_25569 = (state_25580[7]);var inst_25566 = (state_25580[8]);var inst_25573 = f.call(null,inst_25566,inst_25569);var inst_25566__$1 = inst_25573;var state_25580__$1 = (function (){var statearr_25583 = state_25580;(statearr_25583[8] = inst_25566__$1);
return statearr_25583;
})();var statearr_25584_25599 = state_25580__$1;(statearr_25584_25599[2] = null);
(statearr_25584_25599[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25581 === 5))
{var inst_25566 = (state_25580[8]);var state_25580__$1 = state_25580;var statearr_25585_25600 = state_25580__$1;(statearr_25585_25600[2] = inst_25566);
(statearr_25585_25600[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25581 === 4))
{var inst_25569 = (state_25580[7]);var inst_25569__$1 = (state_25580[2]);var inst_25570 = (inst_25569__$1 == null);var state_25580__$1 = (function (){var statearr_25586 = state_25580;(statearr_25586[7] = inst_25569__$1);
return statearr_25586;
})();if(cljs.core.truth_(inst_25570))
{var statearr_25587_25601 = state_25580__$1;(statearr_25587_25601[1] = 5);
} else
{var statearr_25588_25602 = state_25580__$1;(statearr_25588_25602[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25581 === 3))
{var inst_25578 = (state_25580[2]);var state_25580__$1 = state_25580;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25580__$1,inst_25578);
} else
{if((state_val_25581 === 2))
{var state_25580__$1 = state_25580;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25580__$1,4,ch);
} else
{if((state_val_25581 === 1))
{var inst_25566 = init;var state_25580__$1 = (function (){var statearr_25589 = state_25580;(statearr_25589[8] = inst_25566);
return statearr_25589;
})();var statearr_25590_25603 = state_25580__$1;(statearr_25590_25603[2] = null);
(statearr_25590_25603[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__14932__auto__))
;return ((function (switch__14861__auto__,c__14932__auto__){
return (function() {
var state_machine__14862__auto__ = null;
var state_machine__14862__auto____0 = (function (){var statearr_25594 = [null,null,null,null,null,null,null,null,null];(statearr_25594[0] = state_machine__14862__auto__);
(statearr_25594[1] = 1);
return statearr_25594;
});
var state_machine__14862__auto____1 = (function (state_25580){while(true){
var ret_value__14863__auto__ = (function (){try{while(true){
var result__14864__auto__ = switch__14861__auto__.call(null,state_25580);if(cljs.core.keyword_identical_QMARK_.call(null,result__14864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14864__auto__;
}
break;
}
}catch (e25595){if((e25595 instanceof Object))
{var ex__14865__auto__ = e25595;var statearr_25596_25604 = state_25580;(statearr_25596_25604[5] = ex__14865__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25580);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25595;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14863__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25605 = state_25580;
state_25580 = G__25605;
continue;
}
} else
{return ret_value__14863__auto__;
}
break;
}
});
state_machine__14862__auto__ = function(state_25580){
switch(arguments.length){
case 0:
return state_machine__14862__auto____0.call(this);
case 1:
return state_machine__14862__auto____1.call(this,state_25580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14862__auto____0;
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14862__auto____1;
return state_machine__14862__auto__;
})()
;})(switch__14861__auto__,c__14932__auto__))
})();var state__14934__auto__ = (function (){var statearr_25597 = f__14933__auto__.call(null);(statearr_25597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14932__auto__);
return statearr_25597;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14934__auto__);
});})(c__14932__auto__))
);
return c__14932__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__14932__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14932__auto__){
return (function (){var f__14933__auto__ = (function (){var switch__14861__auto__ = ((function (c__14932__auto__){
return (function (state_25679){var state_val_25680 = (state_25679[1]);if((state_val_25680 === 1))
{var inst_25655 = cljs.core.seq.call(null,coll);var inst_25656 = inst_25655;var state_25679__$1 = (function (){var statearr_25681 = state_25679;(statearr_25681[7] = inst_25656);
return statearr_25681;
})();var statearr_25682_25704 = state_25679__$1;(statearr_25682_25704[2] = null);
(statearr_25682_25704[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25680 === 2))
{var inst_25656 = (state_25679[7]);var state_25679__$1 = state_25679;if(cljs.core.truth_(inst_25656))
{var statearr_25683_25705 = state_25679__$1;(statearr_25683_25705[1] = 4);
} else
{var statearr_25684_25706 = state_25679__$1;(statearr_25684_25706[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25680 === 3))
{var inst_25677 = (state_25679[2]);var state_25679__$1 = state_25679;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25679__$1,inst_25677);
} else
{if((state_val_25680 === 4))
{var inst_25656 = (state_25679[7]);var inst_25659 = cljs.core.first.call(null,inst_25656);var state_25679__$1 = state_25679;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25679__$1,7,ch,inst_25659);
} else
{if((state_val_25680 === 5))
{var inst_25656 = (state_25679[7]);var state_25679__$1 = state_25679;var statearr_25685_25707 = state_25679__$1;(statearr_25685_25707[2] = inst_25656);
(statearr_25685_25707[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25680 === 6))
{var inst_25664 = (state_25679[2]);var state_25679__$1 = state_25679;if(cljs.core.truth_(inst_25664))
{var statearr_25686_25708 = state_25679__$1;(statearr_25686_25708[1] = 8);
} else
{var statearr_25687_25709 = state_25679__$1;(statearr_25687_25709[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25680 === 7))
{var inst_25661 = (state_25679[2]);var state_25679__$1 = state_25679;var statearr_25688_25710 = state_25679__$1;(statearr_25688_25710[2] = inst_25661);
(statearr_25688_25710[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25680 === 8))
{var inst_25656 = (state_25679[7]);var inst_25666 = cljs.core.next.call(null,inst_25656);var inst_25656__$1 = inst_25666;var state_25679__$1 = (function (){var statearr_25689 = state_25679;(statearr_25689[7] = inst_25656__$1);
return statearr_25689;
})();var statearr_25690_25711 = state_25679__$1;(statearr_25690_25711[2] = null);
(statearr_25690_25711[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25680 === 9))
{var state_25679__$1 = state_25679;if(cljs.core.truth_(close_QMARK_))
{var statearr_25691_25712 = state_25679__$1;(statearr_25691_25712[1] = 11);
} else
{var statearr_25692_25713 = state_25679__$1;(statearr_25692_25713[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25680 === 10))
{var inst_25675 = (state_25679[2]);var state_25679__$1 = state_25679;var statearr_25693_25714 = state_25679__$1;(statearr_25693_25714[2] = inst_25675);
(statearr_25693_25714[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25680 === 11))
{var inst_25670 = cljs.core.async.close_BANG_.call(null,ch);var state_25679__$1 = state_25679;var statearr_25694_25715 = state_25679__$1;(statearr_25694_25715[2] = inst_25670);
(statearr_25694_25715[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25680 === 12))
{var state_25679__$1 = state_25679;var statearr_25695_25716 = state_25679__$1;(statearr_25695_25716[2] = null);
(statearr_25695_25716[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25680 === 13))
{var inst_25673 = (state_25679[2]);var state_25679__$1 = state_25679;var statearr_25696_25717 = state_25679__$1;(statearr_25696_25717[2] = inst_25673);
(statearr_25696_25717[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14932__auto__))
;return ((function (switch__14861__auto__,c__14932__auto__){
return (function() {
var state_machine__14862__auto__ = null;
var state_machine__14862__auto____0 = (function (){var statearr_25700 = [null,null,null,null,null,null,null,null];(statearr_25700[0] = state_machine__14862__auto__);
(statearr_25700[1] = 1);
return statearr_25700;
});
var state_machine__14862__auto____1 = (function (state_25679){while(true){
var ret_value__14863__auto__ = (function (){try{while(true){
var result__14864__auto__ = switch__14861__auto__.call(null,state_25679);if(cljs.core.keyword_identical_QMARK_.call(null,result__14864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14864__auto__;
}
break;
}
}catch (e25701){if((e25701 instanceof Object))
{var ex__14865__auto__ = e25701;var statearr_25702_25718 = state_25679;(statearr_25702_25718[5] = ex__14865__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25679);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25701;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14863__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25719 = state_25679;
state_25679 = G__25719;
continue;
}
} else
{return ret_value__14863__auto__;
}
break;
}
});
state_machine__14862__auto__ = function(state_25679){
switch(arguments.length){
case 0:
return state_machine__14862__auto____0.call(this);
case 1:
return state_machine__14862__auto____1.call(this,state_25679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14862__auto____0;
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14862__auto____1;
return state_machine__14862__auto__;
})()
;})(switch__14861__auto__,c__14932__auto__))
})();var state__14934__auto__ = (function (){var statearr_25703 = f__14933__auto__.call(null);(statearr_25703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14932__auto__);
return statearr_25703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14934__auto__);
});})(c__14932__auto__))
);
return c__14932__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj25721 = {};return obj25721;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__11124__auto__ = _;if(and__11124__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__11124__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__11763__auto__ = (((_ == null))?null:_);return (function (){var or__11136__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__11763__auto__)]);if(or__11136__auto__)
{return or__11136__auto__;
} else
{var or__11136__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__11136__auto____$1)
{return or__11136__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj25723 = {};return obj25723;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__11124__auto__ = m;if(and__11124__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__11124__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__11763__auto__ = (((m == null))?null:m);return (function (){var or__11136__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__11763__auto__)]);if(or__11136__auto__)
{return or__11136__auto__;
} else
{var or__11136__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__11136__auto____$1)
{return or__11136__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__11124__auto__ = m;if(and__11124__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__11124__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__11763__auto__ = (((m == null))?null:m);return (function (){var or__11136__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__11763__auto__)]);if(or__11136__auto__)
{return or__11136__auto__;
} else
{var or__11136__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__11136__auto____$1)
{return or__11136__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__11124__auto__ = m;if(and__11124__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__11124__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__11763__auto__ = (((m == null))?null:m);return (function (){var or__11136__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__11763__auto__)]);if(or__11136__auto__)
{return or__11136__auto__;
} else
{var or__11136__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__11136__auto____$1)
{return or__11136__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25945 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25945 = (function (cs,ch,mult,meta25946){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25946 = meta25946;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25945.cljs$lang$type = true;
cljs.core.async.t25945.cljs$lang$ctorStr = "cljs.core.async/t25945";
cljs.core.async.t25945.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__11703__auto__,writer__11704__auto__,opt__11705__auto__){return cljs.core._write.call(null,writer__11704__auto__,"cljs.core.async/t25945");
});})(cs))
;
cljs.core.async.t25945.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25945.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25945.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25945.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25945.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25945.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25945.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25947){var self__ = this;
var _25947__$1 = this;return self__.meta25946;
});})(cs))
;
cljs.core.async.t25945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25947,meta25946__$1){var self__ = this;
var _25947__$1 = this;return (new cljs.core.async.t25945(self__.cs,self__.ch,self__.mult,meta25946__$1));
});})(cs))
;
cljs.core.async.__GT_t25945 = ((function (cs){
return (function __GT_t25945(cs__$1,ch__$1,mult__$1,meta25946){return (new cljs.core.async.t25945(cs__$1,ch__$1,mult__$1,meta25946));
});})(cs))
;
}
return (new cljs.core.async.t25945(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__14932__auto___26166 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14932__auto___26166,cs,m,dchan,dctr,done){
return (function (){var f__14933__auto__ = (function (){var switch__14861__auto__ = ((function (c__14932__auto___26166,cs,m,dchan,dctr,done){
return (function (state_26078){var state_val_26079 = (state_26078[1]);if((state_val_26079 === 32))
{var inst_26020 = (state_26078[7]);var inst_26021 = (state_26078[8]);var inst_26019 = (state_26078[9]);var inst_26018 = (state_26078[10]);var inst_26033 = (state_26078[2]);var inst_26034 = (inst_26021 + 1);var tmp26080 = inst_26020;var tmp26081 = inst_26019;var tmp26082 = inst_26018;var inst_26018__$1 = tmp26082;var inst_26019__$1 = tmp26081;var inst_26020__$1 = tmp26080;var inst_26021__$1 = inst_26034;var state_26078__$1 = (function (){var statearr_26083 = state_26078;(statearr_26083[7] = inst_26020__$1);
(statearr_26083[8] = inst_26021__$1);
(statearr_26083[11] = inst_26033);
(statearr_26083[9] = inst_26019__$1);
(statearr_26083[10] = inst_26018__$1);
return statearr_26083;
})();var statearr_26084_26167 = state_26078__$1;(statearr_26084_26167[2] = null);
(statearr_26084_26167[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 1))
{var state_26078__$1 = state_26078;var statearr_26085_26168 = state_26078__$1;(statearr_26085_26168[2] = null);
(statearr_26085_26168[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 33))
{var inst_26037 = (state_26078[12]);var inst_26039 = cljs.core.chunked_seq_QMARK_.call(null,inst_26037);var state_26078__$1 = state_26078;if(inst_26039)
{var statearr_26086_26169 = state_26078__$1;(statearr_26086_26169[1] = 36);
} else
{var statearr_26087_26170 = state_26078__$1;(statearr_26087_26170[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 2))
{var state_26078__$1 = state_26078;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26078__$1,4,ch);
} else
{if((state_val_26079 === 34))
{var state_26078__$1 = state_26078;var statearr_26088_26171 = state_26078__$1;(statearr_26088_26171[2] = null);
(statearr_26088_26171[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 3))
{var inst_26076 = (state_26078[2]);var state_26078__$1 = state_26078;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26078__$1,inst_26076);
} else
{if((state_val_26079 === 35))
{var inst_26060 = (state_26078[2]);var state_26078__$1 = state_26078;var statearr_26089_26172 = state_26078__$1;(statearr_26089_26172[2] = inst_26060);
(statearr_26089_26172[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 4))
{var inst_25950 = (state_26078[13]);var inst_25950__$1 = (state_26078[2]);var inst_25951 = (inst_25950__$1 == null);var state_26078__$1 = (function (){var statearr_26090 = state_26078;(statearr_26090[13] = inst_25950__$1);
return statearr_26090;
})();if(cljs.core.truth_(inst_25951))
{var statearr_26091_26173 = state_26078__$1;(statearr_26091_26173[1] = 5);
} else
{var statearr_26092_26174 = state_26078__$1;(statearr_26092_26174[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 36))
{var inst_26037 = (state_26078[12]);var inst_26041 = cljs.core.chunk_first.call(null,inst_26037);var inst_26042 = cljs.core.chunk_rest.call(null,inst_26037);var inst_26043 = cljs.core.count.call(null,inst_26041);var inst_26018 = inst_26042;var inst_26019 = inst_26041;var inst_26020 = inst_26043;var inst_26021 = 0;var state_26078__$1 = (function (){var statearr_26093 = state_26078;(statearr_26093[7] = inst_26020);
(statearr_26093[8] = inst_26021);
(statearr_26093[9] = inst_26019);
(statearr_26093[10] = inst_26018);
return statearr_26093;
})();var statearr_26094_26175 = state_26078__$1;(statearr_26094_26175[2] = null);
(statearr_26094_26175[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 5))
{var inst_25957 = cljs.core.deref.call(null,cs);var inst_25958 = cljs.core.seq.call(null,inst_25957);var inst_25959 = inst_25958;var inst_25960 = null;var inst_25961 = 0;var inst_25962 = 0;var state_26078__$1 = (function (){var statearr_26095 = state_26078;(statearr_26095[14] = inst_25959);
(statearr_26095[15] = inst_25962);
(statearr_26095[16] = inst_25961);
(statearr_26095[17] = inst_25960);
return statearr_26095;
})();var statearr_26096_26176 = state_26078__$1;(statearr_26096_26176[2] = null);
(statearr_26096_26176[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 37))
{var inst_26037 = (state_26078[12]);var inst_26046 = (state_26078[18]);var inst_25950 = (state_26078[13]);var inst_26046__$1 = cljs.core.first.call(null,inst_26037);var inst_26047 = cljs.core.async.put_BANG_.call(null,inst_26046__$1,inst_25950,done);var state_26078__$1 = (function (){var statearr_26097 = state_26078;(statearr_26097[18] = inst_26046__$1);
return statearr_26097;
})();if(cljs.core.truth_(inst_26047))
{var statearr_26098_26177 = state_26078__$1;(statearr_26098_26177[1] = 39);
} else
{var statearr_26099_26178 = state_26078__$1;(statearr_26099_26178[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 6))
{var inst_26010 = (state_26078[19]);var inst_26009 = cljs.core.deref.call(null,cs);var inst_26010__$1 = cljs.core.keys.call(null,inst_26009);var inst_26011 = cljs.core.count.call(null,inst_26010__$1);var inst_26012 = cljs.core.reset_BANG_.call(null,dctr,inst_26011);var inst_26017 = cljs.core.seq.call(null,inst_26010__$1);var inst_26018 = inst_26017;var inst_26019 = null;var inst_26020 = 0;var inst_26021 = 0;var state_26078__$1 = (function (){var statearr_26100 = state_26078;(statearr_26100[7] = inst_26020);
(statearr_26100[8] = inst_26021);
(statearr_26100[9] = inst_26019);
(statearr_26100[10] = inst_26018);
(statearr_26100[20] = inst_26012);
(statearr_26100[19] = inst_26010__$1);
return statearr_26100;
})();var statearr_26101_26179 = state_26078__$1;(statearr_26101_26179[2] = null);
(statearr_26101_26179[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 38))
{var inst_26057 = (state_26078[2]);var state_26078__$1 = state_26078;var statearr_26102_26180 = state_26078__$1;(statearr_26102_26180[2] = inst_26057);
(statearr_26102_26180[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 7))
{var inst_26074 = (state_26078[2]);var state_26078__$1 = state_26078;var statearr_26103_26181 = state_26078__$1;(statearr_26103_26181[2] = inst_26074);
(statearr_26103_26181[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 39))
{var state_26078__$1 = state_26078;var statearr_26104_26182 = state_26078__$1;(statearr_26104_26182[2] = null);
(statearr_26104_26182[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 8))
{var inst_25962 = (state_26078[15]);var inst_25961 = (state_26078[16]);var inst_25964 = (inst_25962 < inst_25961);var inst_25965 = inst_25964;var state_26078__$1 = state_26078;if(cljs.core.truth_(inst_25965))
{var statearr_26105_26183 = state_26078__$1;(statearr_26105_26183[1] = 10);
} else
{var statearr_26106_26184 = state_26078__$1;(statearr_26106_26184[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 40))
{var inst_26046 = (state_26078[18]);var inst_26050 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26051 = cljs.core.async.untap_STAR_.call(null,m,inst_26046);var state_26078__$1 = (function (){var statearr_26107 = state_26078;(statearr_26107[21] = inst_26050);
return statearr_26107;
})();var statearr_26108_26185 = state_26078__$1;(statearr_26108_26185[2] = inst_26051);
(statearr_26108_26185[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 9))
{var inst_26007 = (state_26078[2]);var state_26078__$1 = state_26078;var statearr_26109_26186 = state_26078__$1;(statearr_26109_26186[2] = inst_26007);
(statearr_26109_26186[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 41))
{var inst_26037 = (state_26078[12]);var inst_26053 = (state_26078[2]);var inst_26054 = cljs.core.next.call(null,inst_26037);var inst_26018 = inst_26054;var inst_26019 = null;var inst_26020 = 0;var inst_26021 = 0;var state_26078__$1 = (function (){var statearr_26110 = state_26078;(statearr_26110[7] = inst_26020);
(statearr_26110[8] = inst_26021);
(statearr_26110[9] = inst_26019);
(statearr_26110[10] = inst_26018);
(statearr_26110[22] = inst_26053);
return statearr_26110;
})();var statearr_26111_26187 = state_26078__$1;(statearr_26111_26187[2] = null);
(statearr_26111_26187[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 10))
{var inst_25962 = (state_26078[15]);var inst_25960 = (state_26078[17]);var inst_25968 = cljs.core._nth.call(null,inst_25960,inst_25962);var inst_25969 = cljs.core.nth.call(null,inst_25968,0,null);var inst_25970 = cljs.core.nth.call(null,inst_25968,1,null);var state_26078__$1 = (function (){var statearr_26112 = state_26078;(statearr_26112[23] = inst_25969);
return statearr_26112;
})();if(cljs.core.truth_(inst_25970))
{var statearr_26113_26188 = state_26078__$1;(statearr_26113_26188[1] = 13);
} else
{var statearr_26114_26189 = state_26078__$1;(statearr_26114_26189[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 42))
{var state_26078__$1 = state_26078;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26078__$1,45,dchan);
} else
{if((state_val_26079 === 11))
{var inst_25979 = (state_26078[24]);var inst_25959 = (state_26078[14]);var inst_25979__$1 = cljs.core.seq.call(null,inst_25959);var state_26078__$1 = (function (){var statearr_26115 = state_26078;(statearr_26115[24] = inst_25979__$1);
return statearr_26115;
})();if(inst_25979__$1)
{var statearr_26116_26190 = state_26078__$1;(statearr_26116_26190[1] = 16);
} else
{var statearr_26117_26191 = state_26078__$1;(statearr_26117_26191[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 43))
{var state_26078__$1 = state_26078;var statearr_26118_26192 = state_26078__$1;(statearr_26118_26192[2] = null);
(statearr_26118_26192[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 12))
{var inst_26005 = (state_26078[2]);var state_26078__$1 = state_26078;var statearr_26119_26193 = state_26078__$1;(statearr_26119_26193[2] = inst_26005);
(statearr_26119_26193[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 44))
{var inst_26071 = (state_26078[2]);var state_26078__$1 = (function (){var statearr_26120 = state_26078;(statearr_26120[25] = inst_26071);
return statearr_26120;
})();var statearr_26121_26194 = state_26078__$1;(statearr_26121_26194[2] = null);
(statearr_26121_26194[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 13))
{var inst_25969 = (state_26078[23]);var inst_25972 = cljs.core.async.close_BANG_.call(null,inst_25969);var state_26078__$1 = state_26078;var statearr_26122_26195 = state_26078__$1;(statearr_26122_26195[2] = inst_25972);
(statearr_26122_26195[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 45))
{var inst_26068 = (state_26078[2]);var state_26078__$1 = state_26078;var statearr_26126_26196 = state_26078__$1;(statearr_26126_26196[2] = inst_26068);
(statearr_26126_26196[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 14))
{var state_26078__$1 = state_26078;var statearr_26127_26197 = state_26078__$1;(statearr_26127_26197[2] = null);
(statearr_26127_26197[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 15))
{var inst_25959 = (state_26078[14]);var inst_25962 = (state_26078[15]);var inst_25961 = (state_26078[16]);var inst_25960 = (state_26078[17]);var inst_25975 = (state_26078[2]);var inst_25976 = (inst_25962 + 1);var tmp26123 = inst_25959;var tmp26124 = inst_25961;var tmp26125 = inst_25960;var inst_25959__$1 = tmp26123;var inst_25960__$1 = tmp26125;var inst_25961__$1 = tmp26124;var inst_25962__$1 = inst_25976;var state_26078__$1 = (function (){var statearr_26128 = state_26078;(statearr_26128[14] = inst_25959__$1);
(statearr_26128[26] = inst_25975);
(statearr_26128[15] = inst_25962__$1);
(statearr_26128[16] = inst_25961__$1);
(statearr_26128[17] = inst_25960__$1);
return statearr_26128;
})();var statearr_26129_26198 = state_26078__$1;(statearr_26129_26198[2] = null);
(statearr_26129_26198[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 16))
{var inst_25979 = (state_26078[24]);var inst_25981 = cljs.core.chunked_seq_QMARK_.call(null,inst_25979);var state_26078__$1 = state_26078;if(inst_25981)
{var statearr_26130_26199 = state_26078__$1;(statearr_26130_26199[1] = 19);
} else
{var statearr_26131_26200 = state_26078__$1;(statearr_26131_26200[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 17))
{var state_26078__$1 = state_26078;var statearr_26132_26201 = state_26078__$1;(statearr_26132_26201[2] = null);
(statearr_26132_26201[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 18))
{var inst_26003 = (state_26078[2]);var state_26078__$1 = state_26078;var statearr_26133_26202 = state_26078__$1;(statearr_26133_26202[2] = inst_26003);
(statearr_26133_26202[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 19))
{var inst_25979 = (state_26078[24]);var inst_25983 = cljs.core.chunk_first.call(null,inst_25979);var inst_25984 = cljs.core.chunk_rest.call(null,inst_25979);var inst_25985 = cljs.core.count.call(null,inst_25983);var inst_25959 = inst_25984;var inst_25960 = inst_25983;var inst_25961 = inst_25985;var inst_25962 = 0;var state_26078__$1 = (function (){var statearr_26134 = state_26078;(statearr_26134[14] = inst_25959);
(statearr_26134[15] = inst_25962);
(statearr_26134[16] = inst_25961);
(statearr_26134[17] = inst_25960);
return statearr_26134;
})();var statearr_26135_26203 = state_26078__$1;(statearr_26135_26203[2] = null);
(statearr_26135_26203[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 20))
{var inst_25979 = (state_26078[24]);var inst_25989 = cljs.core.first.call(null,inst_25979);var inst_25990 = cljs.core.nth.call(null,inst_25989,0,null);var inst_25991 = cljs.core.nth.call(null,inst_25989,1,null);var state_26078__$1 = (function (){var statearr_26136 = state_26078;(statearr_26136[27] = inst_25990);
return statearr_26136;
})();if(cljs.core.truth_(inst_25991))
{var statearr_26137_26204 = state_26078__$1;(statearr_26137_26204[1] = 22);
} else
{var statearr_26138_26205 = state_26078__$1;(statearr_26138_26205[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 21))
{var inst_26000 = (state_26078[2]);var state_26078__$1 = state_26078;var statearr_26139_26206 = state_26078__$1;(statearr_26139_26206[2] = inst_26000);
(statearr_26139_26206[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 22))
{var inst_25990 = (state_26078[27]);var inst_25993 = cljs.core.async.close_BANG_.call(null,inst_25990);var state_26078__$1 = state_26078;var statearr_26140_26207 = state_26078__$1;(statearr_26140_26207[2] = inst_25993);
(statearr_26140_26207[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 23))
{var state_26078__$1 = state_26078;var statearr_26141_26208 = state_26078__$1;(statearr_26141_26208[2] = null);
(statearr_26141_26208[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 24))
{var inst_25979 = (state_26078[24]);var inst_25996 = (state_26078[2]);var inst_25997 = cljs.core.next.call(null,inst_25979);var inst_25959 = inst_25997;var inst_25960 = null;var inst_25961 = 0;var inst_25962 = 0;var state_26078__$1 = (function (){var statearr_26142 = state_26078;(statearr_26142[14] = inst_25959);
(statearr_26142[15] = inst_25962);
(statearr_26142[16] = inst_25961);
(statearr_26142[17] = inst_25960);
(statearr_26142[28] = inst_25996);
return statearr_26142;
})();var statearr_26143_26209 = state_26078__$1;(statearr_26143_26209[2] = null);
(statearr_26143_26209[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 25))
{var inst_26020 = (state_26078[7]);var inst_26021 = (state_26078[8]);var inst_26023 = (inst_26021 < inst_26020);var inst_26024 = inst_26023;var state_26078__$1 = state_26078;if(cljs.core.truth_(inst_26024))
{var statearr_26144_26210 = state_26078__$1;(statearr_26144_26210[1] = 27);
} else
{var statearr_26145_26211 = state_26078__$1;(statearr_26145_26211[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 26))
{var inst_26010 = (state_26078[19]);var inst_26064 = (state_26078[2]);var inst_26065 = cljs.core.seq.call(null,inst_26010);var state_26078__$1 = (function (){var statearr_26146 = state_26078;(statearr_26146[29] = inst_26064);
return statearr_26146;
})();if(inst_26065)
{var statearr_26147_26212 = state_26078__$1;(statearr_26147_26212[1] = 42);
} else
{var statearr_26148_26213 = state_26078__$1;(statearr_26148_26213[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 27))
{var inst_26026 = (state_26078[30]);var inst_26021 = (state_26078[8]);var inst_26019 = (state_26078[9]);var inst_25950 = (state_26078[13]);var inst_26026__$1 = cljs.core._nth.call(null,inst_26019,inst_26021);var inst_26027 = cljs.core.async.put_BANG_.call(null,inst_26026__$1,inst_25950,done);var state_26078__$1 = (function (){var statearr_26149 = state_26078;(statearr_26149[30] = inst_26026__$1);
return statearr_26149;
})();if(cljs.core.truth_(inst_26027))
{var statearr_26150_26214 = state_26078__$1;(statearr_26150_26214[1] = 30);
} else
{var statearr_26151_26215 = state_26078__$1;(statearr_26151_26215[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 28))
{var inst_26037 = (state_26078[12]);var inst_26018 = (state_26078[10]);var inst_26037__$1 = cljs.core.seq.call(null,inst_26018);var state_26078__$1 = (function (){var statearr_26152 = state_26078;(statearr_26152[12] = inst_26037__$1);
return statearr_26152;
})();if(inst_26037__$1)
{var statearr_26153_26216 = state_26078__$1;(statearr_26153_26216[1] = 33);
} else
{var statearr_26154_26217 = state_26078__$1;(statearr_26154_26217[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 29))
{var inst_26062 = (state_26078[2]);var state_26078__$1 = state_26078;var statearr_26155_26218 = state_26078__$1;(statearr_26155_26218[2] = inst_26062);
(statearr_26155_26218[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 30))
{var state_26078__$1 = state_26078;var statearr_26156_26219 = state_26078__$1;(statearr_26156_26219[2] = null);
(statearr_26156_26219[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26079 === 31))
{var inst_26026 = (state_26078[30]);var inst_26030 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26031 = cljs.core.async.untap_STAR_.call(null,m,inst_26026);var state_26078__$1 = (function (){var statearr_26157 = state_26078;(statearr_26157[31] = inst_26030);
return statearr_26157;
})();var statearr_26158_26220 = state_26078__$1;(statearr_26158_26220[2] = inst_26031);
(statearr_26158_26220[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14932__auto___26166,cs,m,dchan,dctr,done))
;return ((function (switch__14861__auto__,c__14932__auto___26166,cs,m,dchan,dctr,done){
return (function() {
var state_machine__14862__auto__ = null;
var state_machine__14862__auto____0 = (function (){var statearr_26162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26162[0] = state_machine__14862__auto__);
(statearr_26162[1] = 1);
return statearr_26162;
});
var state_machine__14862__auto____1 = (function (state_26078){while(true){
var ret_value__14863__auto__ = (function (){try{while(true){
var result__14864__auto__ = switch__14861__auto__.call(null,state_26078);if(cljs.core.keyword_identical_QMARK_.call(null,result__14864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14864__auto__;
}
break;
}
}catch (e26163){if((e26163 instanceof Object))
{var ex__14865__auto__ = e26163;var statearr_26164_26221 = state_26078;(statearr_26164_26221[5] = ex__14865__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26078);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26163;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14863__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26222 = state_26078;
state_26078 = G__26222;
continue;
}
} else
{return ret_value__14863__auto__;
}
break;
}
});
state_machine__14862__auto__ = function(state_26078){
switch(arguments.length){
case 0:
return state_machine__14862__auto____0.call(this);
case 1:
return state_machine__14862__auto____1.call(this,state_26078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14862__auto____0;
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14862__auto____1;
return state_machine__14862__auto__;
})()
;})(switch__14861__auto__,c__14932__auto___26166,cs,m,dchan,dctr,done))
})();var state__14934__auto__ = (function (){var statearr_26165 = f__14933__auto__.call(null);(statearr_26165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14932__auto___26166);
return statearr_26165;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14934__auto__);
});})(c__14932__auto___26166,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj26224 = {};return obj26224;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__11124__auto__ = m;if(and__11124__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__11124__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__11763__auto__ = (((m == null))?null:m);return (function (){var or__11136__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__11763__auto__)]);if(or__11136__auto__)
{return or__11136__auto__;
} else
{var or__11136__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__11136__auto____$1)
{return or__11136__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__11124__auto__ = m;if(and__11124__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__11124__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__11763__auto__ = (((m == null))?null:m);return (function (){var or__11136__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__11763__auto__)]);if(or__11136__auto__)
{return or__11136__auto__;
} else
{var or__11136__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__11136__auto____$1)
{return or__11136__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__11124__auto__ = m;if(and__11124__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__11124__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__11763__auto__ = (((m == null))?null:m);return (function (){var or__11136__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__11763__auto__)]);if(or__11136__auto__)
{return or__11136__auto__;
} else
{var or__11136__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__11136__auto____$1)
{return or__11136__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__11124__auto__ = m;if(and__11124__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__11124__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__11763__auto__ = (((m == null))?null:m);return (function (){var or__11136__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__11763__auto__)]);if(or__11136__auto__)
{return or__11136__auto__;
} else
{var or__11136__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__11136__auto____$1)
{return or__11136__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__11124__auto__ = m;if(and__11124__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__11124__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__11763__auto__ = (((m == null))?null:m);return (function (){var or__11136__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__11763__auto__)]);if(or__11136__auto__)
{return or__11136__auto__;
} else
{var or__11136__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__11136__auto____$1)
{return or__11136__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t26344 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26344 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta26345){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta26345 = meta26345;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26344.cljs$lang$type = true;
cljs.core.async.t26344.cljs$lang$ctorStr = "cljs.core.async/t26344";
cljs.core.async.t26344.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__11703__auto__,writer__11704__auto__,opt__11705__auto__){return cljs.core._write.call(null,writer__11704__auto__,"cljs.core.async/t26344");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26344.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26344.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26344.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26344.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26344.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26344.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26344.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26344.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26346){var self__ = this;
var _26346__$1 = this;return self__.meta26345;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26346,meta26345__$1){var self__ = this;
var _26346__$1 = this;return (new cljs.core.async.t26344(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta26345__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26344 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26344(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26345){return (new cljs.core.async.t26344(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26345));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26344(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__14932__auto___26463 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14932__auto___26463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__14933__auto__ = (function (){var switch__14861__auto__ = ((function (c__14932__auto___26463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26416){var state_val_26417 = (state_26416[1]);if((state_val_26417 === 1))
{var inst_26350 = (state_26416[7]);var inst_26350__$1 = calc_state.call(null);var inst_26351 = cljs.core.seq_QMARK_.call(null,inst_26350__$1);var state_26416__$1 = (function (){var statearr_26418 = state_26416;(statearr_26418[7] = inst_26350__$1);
return statearr_26418;
})();if(inst_26351)
{var statearr_26419_26464 = state_26416__$1;(statearr_26419_26464[1] = 2);
} else
{var statearr_26420_26465 = state_26416__$1;(statearr_26420_26465[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26417 === 2))
{var inst_26350 = (state_26416[7]);var inst_26353 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26350);var state_26416__$1 = state_26416;var statearr_26421_26466 = state_26416__$1;(statearr_26421_26466[2] = inst_26353);
(statearr_26421_26466[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26417 === 3))
{var inst_26350 = (state_26416[7]);var state_26416__$1 = state_26416;var statearr_26422_26467 = state_26416__$1;(statearr_26422_26467[2] = inst_26350);
(statearr_26422_26467[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26417 === 4))
{var inst_26350 = (state_26416[7]);var inst_26356 = (state_26416[2]);var inst_26357 = cljs.core.get.call(null,inst_26356,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26358 = cljs.core.get.call(null,inst_26356,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26359 = cljs.core.get.call(null,inst_26356,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_26360 = inst_26350;var state_26416__$1 = (function (){var statearr_26423 = state_26416;(statearr_26423[8] = inst_26359);
(statearr_26423[9] = inst_26358);
(statearr_26423[10] = inst_26357);
(statearr_26423[11] = inst_26360);
return statearr_26423;
})();var statearr_26424_26468 = state_26416__$1;(statearr_26424_26468[2] = null);
(statearr_26424_26468[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26417 === 5))
{var inst_26360 = (state_26416[11]);var inst_26363 = cljs.core.seq_QMARK_.call(null,inst_26360);var state_26416__$1 = state_26416;if(inst_26363)
{var statearr_26425_26469 = state_26416__$1;(statearr_26425_26469[1] = 7);
} else
{var statearr_26426_26470 = state_26416__$1;(statearr_26426_26470[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26417 === 6))
{var inst_26414 = (state_26416[2]);var state_26416__$1 = state_26416;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26416__$1,inst_26414);
} else
{if((state_val_26417 === 7))
{var inst_26360 = (state_26416[11]);var inst_26365 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26360);var state_26416__$1 = state_26416;var statearr_26427_26471 = state_26416__$1;(statearr_26427_26471[2] = inst_26365);
(statearr_26427_26471[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26417 === 8))
{var inst_26360 = (state_26416[11]);var state_26416__$1 = state_26416;var statearr_26428_26472 = state_26416__$1;(statearr_26428_26472[2] = inst_26360);
(statearr_26428_26472[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26417 === 9))
{var inst_26368 = (state_26416[12]);var inst_26368__$1 = (state_26416[2]);var inst_26369 = cljs.core.get.call(null,inst_26368__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26370 = cljs.core.get.call(null,inst_26368__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26371 = cljs.core.get.call(null,inst_26368__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_26416__$1 = (function (){var statearr_26429 = state_26416;(statearr_26429[13] = inst_26370);
(statearr_26429[14] = inst_26371);
(statearr_26429[12] = inst_26368__$1);
return statearr_26429;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26416__$1,10,inst_26369);
} else
{if((state_val_26417 === 10))
{var inst_26375 = (state_26416[15]);var inst_26376 = (state_26416[16]);var inst_26374 = (state_26416[2]);var inst_26375__$1 = cljs.core.nth.call(null,inst_26374,0,null);var inst_26376__$1 = cljs.core.nth.call(null,inst_26374,1,null);var inst_26377 = (inst_26375__$1 == null);var inst_26378 = cljs.core._EQ_.call(null,inst_26376__$1,change);var inst_26379 = (inst_26377) || (inst_26378);var state_26416__$1 = (function (){var statearr_26430 = state_26416;(statearr_26430[15] = inst_26375__$1);
(statearr_26430[16] = inst_26376__$1);
return statearr_26430;
})();if(cljs.core.truth_(inst_26379))
{var statearr_26431_26473 = state_26416__$1;(statearr_26431_26473[1] = 11);
} else
{var statearr_26432_26474 = state_26416__$1;(statearr_26432_26474[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26417 === 11))
{var inst_26375 = (state_26416[15]);var inst_26381 = (inst_26375 == null);var state_26416__$1 = state_26416;if(cljs.core.truth_(inst_26381))
{var statearr_26433_26475 = state_26416__$1;(statearr_26433_26475[1] = 14);
} else
{var statearr_26434_26476 = state_26416__$1;(statearr_26434_26476[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26417 === 12))
{var inst_26390 = (state_26416[17]);var inst_26376 = (state_26416[16]);var inst_26371 = (state_26416[14]);var inst_26390__$1 = inst_26371.call(null,inst_26376);var state_26416__$1 = (function (){var statearr_26435 = state_26416;(statearr_26435[17] = inst_26390__$1);
return statearr_26435;
})();if(cljs.core.truth_(inst_26390__$1))
{var statearr_26436_26477 = state_26416__$1;(statearr_26436_26477[1] = 17);
} else
{var statearr_26437_26478 = state_26416__$1;(statearr_26437_26478[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26417 === 13))
{var inst_26412 = (state_26416[2]);var state_26416__$1 = state_26416;var statearr_26438_26479 = state_26416__$1;(statearr_26438_26479[2] = inst_26412);
(statearr_26438_26479[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26417 === 14))
{var inst_26376 = (state_26416[16]);var inst_26383 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26376);var state_26416__$1 = state_26416;var statearr_26439_26480 = state_26416__$1;(statearr_26439_26480[2] = inst_26383);
(statearr_26439_26480[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26417 === 15))
{var state_26416__$1 = state_26416;var statearr_26440_26481 = state_26416__$1;(statearr_26440_26481[2] = null);
(statearr_26440_26481[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26417 === 16))
{var inst_26386 = (state_26416[2]);var inst_26387 = calc_state.call(null);var inst_26360 = inst_26387;var state_26416__$1 = (function (){var statearr_26441 = state_26416;(statearr_26441[18] = inst_26386);
(statearr_26441[11] = inst_26360);
return statearr_26441;
})();var statearr_26442_26482 = state_26416__$1;(statearr_26442_26482[2] = null);
(statearr_26442_26482[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26417 === 17))
{var inst_26390 = (state_26416[17]);var state_26416__$1 = state_26416;var statearr_26443_26483 = state_26416__$1;(statearr_26443_26483[2] = inst_26390);
(statearr_26443_26483[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26417 === 18))
{var inst_26370 = (state_26416[13]);var inst_26376 = (state_26416[16]);var inst_26371 = (state_26416[14]);var inst_26393 = cljs.core.empty_QMARK_.call(null,inst_26371);var inst_26394 = inst_26370.call(null,inst_26376);var inst_26395 = cljs.core.not.call(null,inst_26394);var inst_26396 = (inst_26393) && (inst_26395);var state_26416__$1 = state_26416;var statearr_26444_26484 = state_26416__$1;(statearr_26444_26484[2] = inst_26396);
(statearr_26444_26484[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26417 === 19))
{var inst_26398 = (state_26416[2]);var state_26416__$1 = state_26416;if(cljs.core.truth_(inst_26398))
{var statearr_26445_26485 = state_26416__$1;(statearr_26445_26485[1] = 20);
} else
{var statearr_26446_26486 = state_26416__$1;(statearr_26446_26486[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26417 === 20))
{var inst_26375 = (state_26416[15]);var state_26416__$1 = state_26416;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26416__$1,23,out,inst_26375);
} else
{if((state_val_26417 === 21))
{var inst_26368 = (state_26416[12]);var inst_26360 = inst_26368;var state_26416__$1 = (function (){var statearr_26447 = state_26416;(statearr_26447[11] = inst_26360);
return statearr_26447;
})();var statearr_26448_26487 = state_26416__$1;(statearr_26448_26487[2] = null);
(statearr_26448_26487[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26417 === 22))
{var inst_26410 = (state_26416[2]);var state_26416__$1 = state_26416;var statearr_26449_26488 = state_26416__$1;(statearr_26449_26488[2] = inst_26410);
(statearr_26449_26488[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26417 === 23))
{var inst_26401 = (state_26416[2]);var state_26416__$1 = state_26416;if(cljs.core.truth_(inst_26401))
{var statearr_26450_26489 = state_26416__$1;(statearr_26450_26489[1] = 24);
} else
{var statearr_26451_26490 = state_26416__$1;(statearr_26451_26490[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26417 === 24))
{var inst_26368 = (state_26416[12]);var inst_26360 = inst_26368;var state_26416__$1 = (function (){var statearr_26452 = state_26416;(statearr_26452[11] = inst_26360);
return statearr_26452;
})();var statearr_26453_26491 = state_26416__$1;(statearr_26453_26491[2] = null);
(statearr_26453_26491[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26417 === 25))
{var state_26416__$1 = state_26416;var statearr_26454_26492 = state_26416__$1;(statearr_26454_26492[2] = null);
(statearr_26454_26492[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26417 === 26))
{var inst_26406 = (state_26416[2]);var state_26416__$1 = state_26416;var statearr_26455_26493 = state_26416__$1;(statearr_26455_26493[2] = inst_26406);
(statearr_26455_26493[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14932__auto___26463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__14861__auto__,c__14932__auto___26463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__14862__auto__ = null;
var state_machine__14862__auto____0 = (function (){var statearr_26459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26459[0] = state_machine__14862__auto__);
(statearr_26459[1] = 1);
return statearr_26459;
});
var state_machine__14862__auto____1 = (function (state_26416){while(true){
var ret_value__14863__auto__ = (function (){try{while(true){
var result__14864__auto__ = switch__14861__auto__.call(null,state_26416);if(cljs.core.keyword_identical_QMARK_.call(null,result__14864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14864__auto__;
}
break;
}
}catch (e26460){if((e26460 instanceof Object))
{var ex__14865__auto__ = e26460;var statearr_26461_26494 = state_26416;(statearr_26461_26494[5] = ex__14865__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26416);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26460;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14863__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26495 = state_26416;
state_26416 = G__26495;
continue;
}
} else
{return ret_value__14863__auto__;
}
break;
}
});
state_machine__14862__auto__ = function(state_26416){
switch(arguments.length){
case 0:
return state_machine__14862__auto____0.call(this);
case 1:
return state_machine__14862__auto____1.call(this,state_26416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14862__auto____0;
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14862__auto____1;
return state_machine__14862__auto__;
})()
;})(switch__14861__auto__,c__14932__auto___26463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__14934__auto__ = (function (){var statearr_26462 = f__14933__auto__.call(null);(statearr_26462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14932__auto___26463);
return statearr_26462;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14934__auto__);
});})(c__14932__auto___26463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj26497 = {};return obj26497;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__11124__auto__ = p;if(and__11124__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__11124__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__11763__auto__ = (((p == null))?null:p);return (function (){var or__11136__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__11763__auto__)]);if(or__11136__auto__)
{return or__11136__auto__;
} else
{var or__11136__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__11136__auto____$1)
{return or__11136__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__11124__auto__ = p;if(and__11124__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__11124__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__11763__auto__ = (((p == null))?null:p);return (function (){var or__11136__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__11763__auto__)]);if(or__11136__auto__)
{return or__11136__auto__;
} else
{var or__11136__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__11136__auto____$1)
{return or__11136__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__11124__auto__ = p;if(and__11124__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__11124__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__11763__auto__ = (((p == null))?null:p);return (function (){var or__11136__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11763__auto__)]);if(or__11136__auto__)
{return or__11136__auto__;
} else
{var or__11136__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11136__auto____$1)
{return or__11136__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__11124__auto__ = p;if(and__11124__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__11124__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__11763__auto__ = (((p == null))?null:p);return (function (){var or__11136__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11763__auto__)]);if(or__11136__auto__)
{return or__11136__auto__;
} else
{var or__11136__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11136__auto____$1)
{return or__11136__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__11136__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__11136__auto__))
{return or__11136__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__11136__auto__,mults){
return (function (p1__26498_SHARP_){if(cljs.core.truth_(p1__26498_SHARP_.call(null,topic)))
{return p1__26498_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__26498_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11136__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26621 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26621 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26622){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26622 = meta26622;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26621.cljs$lang$type = true;
cljs.core.async.t26621.cljs$lang$ctorStr = "cljs.core.async/t26621";
cljs.core.async.t26621.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__11703__auto__,writer__11704__auto__,opt__11705__auto__){return cljs.core._write.call(null,writer__11704__auto__,"cljs.core.async/t26621");
});})(mults,ensure_mult))
;
cljs.core.async.t26621.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26621.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26621.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26621.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26621.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26621.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26621.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26621.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26623){var self__ = this;
var _26623__$1 = this;return self__.meta26622;
});})(mults,ensure_mult))
;
cljs.core.async.t26621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26623,meta26622__$1){var self__ = this;
var _26623__$1 = this;return (new cljs.core.async.t26621(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26622__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26621 = ((function (mults,ensure_mult){
return (function __GT_t26621(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26622){return (new cljs.core.async.t26621(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26622));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26621(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__14932__auto___26743 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14932__auto___26743,mults,ensure_mult,p){
return (function (){var f__14933__auto__ = (function (){var switch__14861__auto__ = ((function (c__14932__auto___26743,mults,ensure_mult,p){
return (function (state_26695){var state_val_26696 = (state_26695[1]);if((state_val_26696 === 1))
{var state_26695__$1 = state_26695;var statearr_26697_26744 = state_26695__$1;(statearr_26697_26744[2] = null);
(statearr_26697_26744[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26696 === 2))
{var state_26695__$1 = state_26695;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26695__$1,4,ch);
} else
{if((state_val_26696 === 3))
{var inst_26693 = (state_26695[2]);var state_26695__$1 = state_26695;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26695__$1,inst_26693);
} else
{if((state_val_26696 === 4))
{var inst_26626 = (state_26695[7]);var inst_26626__$1 = (state_26695[2]);var inst_26627 = (inst_26626__$1 == null);var state_26695__$1 = (function (){var statearr_26698 = state_26695;(statearr_26698[7] = inst_26626__$1);
return statearr_26698;
})();if(cljs.core.truth_(inst_26627))
{var statearr_26699_26745 = state_26695__$1;(statearr_26699_26745[1] = 5);
} else
{var statearr_26700_26746 = state_26695__$1;(statearr_26700_26746[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26696 === 5))
{var inst_26633 = cljs.core.deref.call(null,mults);var inst_26634 = cljs.core.vals.call(null,inst_26633);var inst_26635 = cljs.core.seq.call(null,inst_26634);var inst_26636 = inst_26635;var inst_26637 = null;var inst_26638 = 0;var inst_26639 = 0;var state_26695__$1 = (function (){var statearr_26701 = state_26695;(statearr_26701[8] = inst_26636);
(statearr_26701[9] = inst_26637);
(statearr_26701[10] = inst_26638);
(statearr_26701[11] = inst_26639);
return statearr_26701;
})();var statearr_26702_26747 = state_26695__$1;(statearr_26702_26747[2] = null);
(statearr_26702_26747[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26696 === 6))
{var inst_26626 = (state_26695[7]);var inst_26676 = (state_26695[12]);var inst_26674 = (state_26695[13]);var inst_26674__$1 = topic_fn.call(null,inst_26626);var inst_26675 = cljs.core.deref.call(null,mults);var inst_26676__$1 = cljs.core.get.call(null,inst_26675,inst_26674__$1);var state_26695__$1 = (function (){var statearr_26703 = state_26695;(statearr_26703[12] = inst_26676__$1);
(statearr_26703[13] = inst_26674__$1);
return statearr_26703;
})();if(cljs.core.truth_(inst_26676__$1))
{var statearr_26704_26748 = state_26695__$1;(statearr_26704_26748[1] = 19);
} else
{var statearr_26705_26749 = state_26695__$1;(statearr_26705_26749[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26696 === 7))
{var inst_26691 = (state_26695[2]);var state_26695__$1 = state_26695;var statearr_26706_26750 = state_26695__$1;(statearr_26706_26750[2] = inst_26691);
(statearr_26706_26750[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26696 === 8))
{var inst_26638 = (state_26695[10]);var inst_26639 = (state_26695[11]);var inst_26641 = (inst_26639 < inst_26638);var inst_26642 = inst_26641;var state_26695__$1 = state_26695;if(cljs.core.truth_(inst_26642))
{var statearr_26710_26751 = state_26695__$1;(statearr_26710_26751[1] = 10);
} else
{var statearr_26711_26752 = state_26695__$1;(statearr_26711_26752[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26696 === 9))
{var inst_26672 = (state_26695[2]);var state_26695__$1 = state_26695;var statearr_26712_26753 = state_26695__$1;(statearr_26712_26753[2] = inst_26672);
(statearr_26712_26753[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26696 === 10))
{var inst_26636 = (state_26695[8]);var inst_26637 = (state_26695[9]);var inst_26638 = (state_26695[10]);var inst_26639 = (state_26695[11]);var inst_26644 = cljs.core._nth.call(null,inst_26637,inst_26639);var inst_26645 = cljs.core.async.muxch_STAR_.call(null,inst_26644);var inst_26646 = cljs.core.async.close_BANG_.call(null,inst_26645);var inst_26647 = (inst_26639 + 1);var tmp26707 = inst_26636;var tmp26708 = inst_26637;var tmp26709 = inst_26638;var inst_26636__$1 = tmp26707;var inst_26637__$1 = tmp26708;var inst_26638__$1 = tmp26709;var inst_26639__$1 = inst_26647;var state_26695__$1 = (function (){var statearr_26713 = state_26695;(statearr_26713[8] = inst_26636__$1);
(statearr_26713[14] = inst_26646);
(statearr_26713[9] = inst_26637__$1);
(statearr_26713[10] = inst_26638__$1);
(statearr_26713[11] = inst_26639__$1);
return statearr_26713;
})();var statearr_26714_26754 = state_26695__$1;(statearr_26714_26754[2] = null);
(statearr_26714_26754[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26696 === 11))
{var inst_26650 = (state_26695[15]);var inst_26636 = (state_26695[8]);var inst_26650__$1 = cljs.core.seq.call(null,inst_26636);var state_26695__$1 = (function (){var statearr_26715 = state_26695;(statearr_26715[15] = inst_26650__$1);
return statearr_26715;
})();if(inst_26650__$1)
{var statearr_26716_26755 = state_26695__$1;(statearr_26716_26755[1] = 13);
} else
{var statearr_26717_26756 = state_26695__$1;(statearr_26717_26756[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26696 === 12))
{var inst_26670 = (state_26695[2]);var state_26695__$1 = state_26695;var statearr_26718_26757 = state_26695__$1;(statearr_26718_26757[2] = inst_26670);
(statearr_26718_26757[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26696 === 13))
{var inst_26650 = (state_26695[15]);var inst_26652 = cljs.core.chunked_seq_QMARK_.call(null,inst_26650);var state_26695__$1 = state_26695;if(inst_26652)
{var statearr_26719_26758 = state_26695__$1;(statearr_26719_26758[1] = 16);
} else
{var statearr_26720_26759 = state_26695__$1;(statearr_26720_26759[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26696 === 14))
{var state_26695__$1 = state_26695;var statearr_26721_26760 = state_26695__$1;(statearr_26721_26760[2] = null);
(statearr_26721_26760[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26696 === 15))
{var inst_26668 = (state_26695[2]);var state_26695__$1 = state_26695;var statearr_26722_26761 = state_26695__$1;(statearr_26722_26761[2] = inst_26668);
(statearr_26722_26761[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26696 === 16))
{var inst_26650 = (state_26695[15]);var inst_26654 = cljs.core.chunk_first.call(null,inst_26650);var inst_26655 = cljs.core.chunk_rest.call(null,inst_26650);var inst_26656 = cljs.core.count.call(null,inst_26654);var inst_26636 = inst_26655;var inst_26637 = inst_26654;var inst_26638 = inst_26656;var inst_26639 = 0;var state_26695__$1 = (function (){var statearr_26723 = state_26695;(statearr_26723[8] = inst_26636);
(statearr_26723[9] = inst_26637);
(statearr_26723[10] = inst_26638);
(statearr_26723[11] = inst_26639);
return statearr_26723;
})();var statearr_26724_26762 = state_26695__$1;(statearr_26724_26762[2] = null);
(statearr_26724_26762[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26696 === 17))
{var inst_26650 = (state_26695[15]);var inst_26659 = cljs.core.first.call(null,inst_26650);var inst_26660 = cljs.core.async.muxch_STAR_.call(null,inst_26659);var inst_26661 = cljs.core.async.close_BANG_.call(null,inst_26660);var inst_26662 = cljs.core.next.call(null,inst_26650);var inst_26636 = inst_26662;var inst_26637 = null;var inst_26638 = 0;var inst_26639 = 0;var state_26695__$1 = (function (){var statearr_26725 = state_26695;(statearr_26725[16] = inst_26661);
(statearr_26725[8] = inst_26636);
(statearr_26725[9] = inst_26637);
(statearr_26725[10] = inst_26638);
(statearr_26725[11] = inst_26639);
return statearr_26725;
})();var statearr_26726_26763 = state_26695__$1;(statearr_26726_26763[2] = null);
(statearr_26726_26763[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26696 === 18))
{var inst_26665 = (state_26695[2]);var state_26695__$1 = state_26695;var statearr_26727_26764 = state_26695__$1;(statearr_26727_26764[2] = inst_26665);
(statearr_26727_26764[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26696 === 19))
{var inst_26626 = (state_26695[7]);var inst_26676 = (state_26695[12]);var inst_26678 = cljs.core.async.muxch_STAR_.call(null,inst_26676);var state_26695__$1 = state_26695;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26695__$1,22,inst_26678,inst_26626);
} else
{if((state_val_26696 === 20))
{var state_26695__$1 = state_26695;var statearr_26728_26765 = state_26695__$1;(statearr_26728_26765[2] = null);
(statearr_26728_26765[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26696 === 21))
{var inst_26688 = (state_26695[2]);var state_26695__$1 = (function (){var statearr_26729 = state_26695;(statearr_26729[17] = inst_26688);
return statearr_26729;
})();var statearr_26730_26766 = state_26695__$1;(statearr_26730_26766[2] = null);
(statearr_26730_26766[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26696 === 22))
{var inst_26680 = (state_26695[2]);var state_26695__$1 = state_26695;if(cljs.core.truth_(inst_26680))
{var statearr_26731_26767 = state_26695__$1;(statearr_26731_26767[1] = 23);
} else
{var statearr_26732_26768 = state_26695__$1;(statearr_26732_26768[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26696 === 23))
{var state_26695__$1 = state_26695;var statearr_26733_26769 = state_26695__$1;(statearr_26733_26769[2] = null);
(statearr_26733_26769[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26696 === 24))
{var inst_26674 = (state_26695[13]);var inst_26683 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26674);var state_26695__$1 = state_26695;var statearr_26734_26770 = state_26695__$1;(statearr_26734_26770[2] = inst_26683);
(statearr_26734_26770[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26696 === 25))
{var inst_26685 = (state_26695[2]);var state_26695__$1 = state_26695;var statearr_26735_26771 = state_26695__$1;(statearr_26735_26771[2] = inst_26685);
(statearr_26735_26771[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14932__auto___26743,mults,ensure_mult,p))
;return ((function (switch__14861__auto__,c__14932__auto___26743,mults,ensure_mult,p){
return (function() {
var state_machine__14862__auto__ = null;
var state_machine__14862__auto____0 = (function (){var statearr_26739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26739[0] = state_machine__14862__auto__);
(statearr_26739[1] = 1);
return statearr_26739;
});
var state_machine__14862__auto____1 = (function (state_26695){while(true){
var ret_value__14863__auto__ = (function (){try{while(true){
var result__14864__auto__ = switch__14861__auto__.call(null,state_26695);if(cljs.core.keyword_identical_QMARK_.call(null,result__14864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14864__auto__;
}
break;
}
}catch (e26740){if((e26740 instanceof Object))
{var ex__14865__auto__ = e26740;var statearr_26741_26772 = state_26695;(statearr_26741_26772[5] = ex__14865__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26695);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26740;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14863__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26773 = state_26695;
state_26695 = G__26773;
continue;
}
} else
{return ret_value__14863__auto__;
}
break;
}
});
state_machine__14862__auto__ = function(state_26695){
switch(arguments.length){
case 0:
return state_machine__14862__auto____0.call(this);
case 1:
return state_machine__14862__auto____1.call(this,state_26695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14862__auto____0;
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14862__auto____1;
return state_machine__14862__auto__;
})()
;})(switch__14861__auto__,c__14932__auto___26743,mults,ensure_mult,p))
})();var state__14934__auto__ = (function (){var statearr_26742 = f__14933__auto__.call(null);(statearr_26742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14932__auto___26743);
return statearr_26742;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14934__auto__);
});})(c__14932__auto___26743,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__14932__auto___26910 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14932__auto___26910,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__14933__auto__ = (function (){var switch__14861__auto__ = ((function (c__14932__auto___26910,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26880){var state_val_26881 = (state_26880[1]);if((state_val_26881 === 1))
{var state_26880__$1 = state_26880;var statearr_26882_26911 = state_26880__$1;(statearr_26882_26911[2] = null);
(statearr_26882_26911[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26881 === 2))
{var inst_26843 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26844 = 0;var state_26880__$1 = (function (){var statearr_26883 = state_26880;(statearr_26883[7] = inst_26844);
(statearr_26883[8] = inst_26843);
return statearr_26883;
})();var statearr_26884_26912 = state_26880__$1;(statearr_26884_26912[2] = null);
(statearr_26884_26912[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26881 === 3))
{var inst_26878 = (state_26880[2]);var state_26880__$1 = state_26880;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26880__$1,inst_26878);
} else
{if((state_val_26881 === 4))
{var inst_26844 = (state_26880[7]);var inst_26846 = (inst_26844 < cnt);var state_26880__$1 = state_26880;if(cljs.core.truth_(inst_26846))
{var statearr_26885_26913 = state_26880__$1;(statearr_26885_26913[1] = 6);
} else
{var statearr_26886_26914 = state_26880__$1;(statearr_26886_26914[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26881 === 5))
{var inst_26864 = (state_26880[2]);var state_26880__$1 = (function (){var statearr_26887 = state_26880;(statearr_26887[9] = inst_26864);
return statearr_26887;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26880__$1,12,dchan);
} else
{if((state_val_26881 === 6))
{var state_26880__$1 = state_26880;var statearr_26888_26915 = state_26880__$1;(statearr_26888_26915[2] = null);
(statearr_26888_26915[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26881 === 7))
{var state_26880__$1 = state_26880;var statearr_26889_26916 = state_26880__$1;(statearr_26889_26916[2] = null);
(statearr_26889_26916[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26881 === 8))
{var inst_26862 = (state_26880[2]);var state_26880__$1 = state_26880;var statearr_26890_26917 = state_26880__$1;(statearr_26890_26917[2] = inst_26862);
(statearr_26890_26917[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26881 === 9))
{var inst_26844 = (state_26880[7]);var inst_26857 = (state_26880[2]);var inst_26858 = (inst_26844 + 1);var inst_26844__$1 = inst_26858;var state_26880__$1 = (function (){var statearr_26891 = state_26880;(statearr_26891[10] = inst_26857);
(statearr_26891[7] = inst_26844__$1);
return statearr_26891;
})();var statearr_26892_26918 = state_26880__$1;(statearr_26892_26918[2] = null);
(statearr_26892_26918[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26881 === 10))
{var inst_26848 = (state_26880[2]);var inst_26849 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26880__$1 = (function (){var statearr_26893 = state_26880;(statearr_26893[11] = inst_26848);
return statearr_26893;
})();var statearr_26894_26919 = state_26880__$1;(statearr_26894_26919[2] = inst_26849);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26880__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26881 === 11))
{var inst_26844 = (state_26880[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26880,10,Object,null,9);var inst_26853 = chs__$1.call(null,inst_26844);var inst_26854 = done.call(null,inst_26844);var inst_26855 = cljs.core.async.take_BANG_.call(null,inst_26853,inst_26854);var state_26880__$1 = state_26880;var statearr_26895_26920 = state_26880__$1;(statearr_26895_26920[2] = inst_26855);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26880__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26881 === 12))
{var inst_26866 = (state_26880[12]);var inst_26866__$1 = (state_26880[2]);var inst_26867 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26866__$1);var state_26880__$1 = (function (){var statearr_26896 = state_26880;(statearr_26896[12] = inst_26866__$1);
return statearr_26896;
})();if(cljs.core.truth_(inst_26867))
{var statearr_26897_26921 = state_26880__$1;(statearr_26897_26921[1] = 13);
} else
{var statearr_26898_26922 = state_26880__$1;(statearr_26898_26922[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26881 === 13))
{var inst_26869 = cljs.core.async.close_BANG_.call(null,out);var state_26880__$1 = state_26880;var statearr_26899_26923 = state_26880__$1;(statearr_26899_26923[2] = inst_26869);
(statearr_26899_26923[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26881 === 14))
{var inst_26866 = (state_26880[12]);var inst_26871 = cljs.core.apply.call(null,f,inst_26866);var state_26880__$1 = state_26880;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26880__$1,16,out,inst_26871);
} else
{if((state_val_26881 === 15))
{var inst_26876 = (state_26880[2]);var state_26880__$1 = state_26880;var statearr_26900_26924 = state_26880__$1;(statearr_26900_26924[2] = inst_26876);
(statearr_26900_26924[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26881 === 16))
{var inst_26873 = (state_26880[2]);var state_26880__$1 = (function (){var statearr_26901 = state_26880;(statearr_26901[13] = inst_26873);
return statearr_26901;
})();var statearr_26902_26925 = state_26880__$1;(statearr_26902_26925[2] = null);
(statearr_26902_26925[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14932__auto___26910,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__14861__auto__,c__14932__auto___26910,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__14862__auto__ = null;
var state_machine__14862__auto____0 = (function (){var statearr_26906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26906[0] = state_machine__14862__auto__);
(statearr_26906[1] = 1);
return statearr_26906;
});
var state_machine__14862__auto____1 = (function (state_26880){while(true){
var ret_value__14863__auto__ = (function (){try{while(true){
var result__14864__auto__ = switch__14861__auto__.call(null,state_26880);if(cljs.core.keyword_identical_QMARK_.call(null,result__14864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14864__auto__;
}
break;
}
}catch (e26907){if((e26907 instanceof Object))
{var ex__14865__auto__ = e26907;var statearr_26908_26926 = state_26880;(statearr_26908_26926[5] = ex__14865__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26880);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26907;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14863__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26927 = state_26880;
state_26880 = G__26927;
continue;
}
} else
{return ret_value__14863__auto__;
}
break;
}
});
state_machine__14862__auto__ = function(state_26880){
switch(arguments.length){
case 0:
return state_machine__14862__auto____0.call(this);
case 1:
return state_machine__14862__auto____1.call(this,state_26880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14862__auto____0;
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14862__auto____1;
return state_machine__14862__auto__;
})()
;})(switch__14861__auto__,c__14932__auto___26910,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__14934__auto__ = (function (){var statearr_26909 = f__14933__auto__.call(null);(statearr_26909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14932__auto___26910);
return statearr_26909;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14934__auto__);
});})(c__14932__auto___26910,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14932__auto___27035 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14932__auto___27035,out){
return (function (){var f__14933__auto__ = (function (){var switch__14861__auto__ = ((function (c__14932__auto___27035,out){
return (function (state_27011){var state_val_27012 = (state_27011[1]);if((state_val_27012 === 1))
{var inst_26982 = cljs.core.vec.call(null,chs);var inst_26983 = inst_26982;var state_27011__$1 = (function (){var statearr_27013 = state_27011;(statearr_27013[7] = inst_26983);
return statearr_27013;
})();var statearr_27014_27036 = state_27011__$1;(statearr_27014_27036[2] = null);
(statearr_27014_27036[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27012 === 2))
{var inst_26983 = (state_27011[7]);var inst_26985 = cljs.core.count.call(null,inst_26983);var inst_26986 = (inst_26985 > 0);var state_27011__$1 = state_27011;if(cljs.core.truth_(inst_26986))
{var statearr_27015_27037 = state_27011__$1;(statearr_27015_27037[1] = 4);
} else
{var statearr_27016_27038 = state_27011__$1;(statearr_27016_27038[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27012 === 3))
{var inst_27009 = (state_27011[2]);var state_27011__$1 = state_27011;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27011__$1,inst_27009);
} else
{if((state_val_27012 === 4))
{var inst_26983 = (state_27011[7]);var state_27011__$1 = state_27011;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27011__$1,7,inst_26983);
} else
{if((state_val_27012 === 5))
{var inst_27005 = cljs.core.async.close_BANG_.call(null,out);var state_27011__$1 = state_27011;var statearr_27017_27039 = state_27011__$1;(statearr_27017_27039[2] = inst_27005);
(statearr_27017_27039[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27012 === 6))
{var inst_27007 = (state_27011[2]);var state_27011__$1 = state_27011;var statearr_27018_27040 = state_27011__$1;(statearr_27018_27040[2] = inst_27007);
(statearr_27018_27040[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27012 === 7))
{var inst_26991 = (state_27011[8]);var inst_26990 = (state_27011[9]);var inst_26990__$1 = (state_27011[2]);var inst_26991__$1 = cljs.core.nth.call(null,inst_26990__$1,0,null);var inst_26992 = cljs.core.nth.call(null,inst_26990__$1,1,null);var inst_26993 = (inst_26991__$1 == null);var state_27011__$1 = (function (){var statearr_27019 = state_27011;(statearr_27019[8] = inst_26991__$1);
(statearr_27019[10] = inst_26992);
(statearr_27019[9] = inst_26990__$1);
return statearr_27019;
})();if(cljs.core.truth_(inst_26993))
{var statearr_27020_27041 = state_27011__$1;(statearr_27020_27041[1] = 8);
} else
{var statearr_27021_27042 = state_27011__$1;(statearr_27021_27042[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27012 === 8))
{var inst_26983 = (state_27011[7]);var inst_26991 = (state_27011[8]);var inst_26992 = (state_27011[10]);var inst_26990 = (state_27011[9]);var inst_26995 = (function (){var c = inst_26992;var v = inst_26991;var vec__26988 = inst_26990;var cs = inst_26983;return ((function (c,v,vec__26988,cs,inst_26983,inst_26991,inst_26992,inst_26990,state_val_27012,c__14932__auto___27035,out){
return (function (p1__26928_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26928_SHARP_);
});
;})(c,v,vec__26988,cs,inst_26983,inst_26991,inst_26992,inst_26990,state_val_27012,c__14932__auto___27035,out))
})();var inst_26996 = cljs.core.filterv.call(null,inst_26995,inst_26983);var inst_26983__$1 = inst_26996;var state_27011__$1 = (function (){var statearr_27022 = state_27011;(statearr_27022[7] = inst_26983__$1);
return statearr_27022;
})();var statearr_27023_27043 = state_27011__$1;(statearr_27023_27043[2] = null);
(statearr_27023_27043[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27012 === 9))
{var inst_26991 = (state_27011[8]);var state_27011__$1 = state_27011;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27011__$1,11,out,inst_26991);
} else
{if((state_val_27012 === 10))
{var inst_27003 = (state_27011[2]);var state_27011__$1 = state_27011;var statearr_27025_27044 = state_27011__$1;(statearr_27025_27044[2] = inst_27003);
(statearr_27025_27044[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27012 === 11))
{var inst_26983 = (state_27011[7]);var inst_27000 = (state_27011[2]);var tmp27024 = inst_26983;var inst_26983__$1 = tmp27024;var state_27011__$1 = (function (){var statearr_27026 = state_27011;(statearr_27026[7] = inst_26983__$1);
(statearr_27026[11] = inst_27000);
return statearr_27026;
})();var statearr_27027_27045 = state_27011__$1;(statearr_27027_27045[2] = null);
(statearr_27027_27045[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14932__auto___27035,out))
;return ((function (switch__14861__auto__,c__14932__auto___27035,out){
return (function() {
var state_machine__14862__auto__ = null;
var state_machine__14862__auto____0 = (function (){var statearr_27031 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27031[0] = state_machine__14862__auto__);
(statearr_27031[1] = 1);
return statearr_27031;
});
var state_machine__14862__auto____1 = (function (state_27011){while(true){
var ret_value__14863__auto__ = (function (){try{while(true){
var result__14864__auto__ = switch__14861__auto__.call(null,state_27011);if(cljs.core.keyword_identical_QMARK_.call(null,result__14864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14864__auto__;
}
break;
}
}catch (e27032){if((e27032 instanceof Object))
{var ex__14865__auto__ = e27032;var statearr_27033_27046 = state_27011;(statearr_27033_27046[5] = ex__14865__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27011);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27032;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14863__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27047 = state_27011;
state_27011 = G__27047;
continue;
}
} else
{return ret_value__14863__auto__;
}
break;
}
});
state_machine__14862__auto__ = function(state_27011){
switch(arguments.length){
case 0:
return state_machine__14862__auto____0.call(this);
case 1:
return state_machine__14862__auto____1.call(this,state_27011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14862__auto____0;
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14862__auto____1;
return state_machine__14862__auto__;
})()
;})(switch__14861__auto__,c__14932__auto___27035,out))
})();var state__14934__auto__ = (function (){var statearr_27034 = f__14933__auto__.call(null);(statearr_27034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14932__auto___27035);
return statearr_27034;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14934__auto__);
});})(c__14932__auto___27035,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14932__auto___27140 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14932__auto___27140,out){
return (function (){var f__14933__auto__ = (function (){var switch__14861__auto__ = ((function (c__14932__auto___27140,out){
return (function (state_27117){var state_val_27118 = (state_27117[1]);if((state_val_27118 === 1))
{var inst_27094 = 0;var state_27117__$1 = (function (){var statearr_27119 = state_27117;(statearr_27119[7] = inst_27094);
return statearr_27119;
})();var statearr_27120_27141 = state_27117__$1;(statearr_27120_27141[2] = null);
(statearr_27120_27141[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27118 === 2))
{var inst_27094 = (state_27117[7]);var inst_27096 = (inst_27094 < n);var state_27117__$1 = state_27117;if(cljs.core.truth_(inst_27096))
{var statearr_27121_27142 = state_27117__$1;(statearr_27121_27142[1] = 4);
} else
{var statearr_27122_27143 = state_27117__$1;(statearr_27122_27143[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27118 === 3))
{var inst_27114 = (state_27117[2]);var inst_27115 = cljs.core.async.close_BANG_.call(null,out);var state_27117__$1 = (function (){var statearr_27123 = state_27117;(statearr_27123[8] = inst_27114);
return statearr_27123;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27117__$1,inst_27115);
} else
{if((state_val_27118 === 4))
{var state_27117__$1 = state_27117;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27117__$1,7,ch);
} else
{if((state_val_27118 === 5))
{var state_27117__$1 = state_27117;var statearr_27124_27144 = state_27117__$1;(statearr_27124_27144[2] = null);
(statearr_27124_27144[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27118 === 6))
{var inst_27112 = (state_27117[2]);var state_27117__$1 = state_27117;var statearr_27125_27145 = state_27117__$1;(statearr_27125_27145[2] = inst_27112);
(statearr_27125_27145[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27118 === 7))
{var inst_27099 = (state_27117[9]);var inst_27099__$1 = (state_27117[2]);var inst_27100 = (inst_27099__$1 == null);var inst_27101 = cljs.core.not.call(null,inst_27100);var state_27117__$1 = (function (){var statearr_27126 = state_27117;(statearr_27126[9] = inst_27099__$1);
return statearr_27126;
})();if(inst_27101)
{var statearr_27127_27146 = state_27117__$1;(statearr_27127_27146[1] = 8);
} else
{var statearr_27128_27147 = state_27117__$1;(statearr_27128_27147[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27118 === 8))
{var inst_27099 = (state_27117[9]);var state_27117__$1 = state_27117;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27117__$1,11,out,inst_27099);
} else
{if((state_val_27118 === 9))
{var state_27117__$1 = state_27117;var statearr_27129_27148 = state_27117__$1;(statearr_27129_27148[2] = null);
(statearr_27129_27148[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27118 === 10))
{var inst_27109 = (state_27117[2]);var state_27117__$1 = state_27117;var statearr_27130_27149 = state_27117__$1;(statearr_27130_27149[2] = inst_27109);
(statearr_27130_27149[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27118 === 11))
{var inst_27094 = (state_27117[7]);var inst_27104 = (state_27117[2]);var inst_27105 = (inst_27094 + 1);var inst_27094__$1 = inst_27105;var state_27117__$1 = (function (){var statearr_27131 = state_27117;(statearr_27131[7] = inst_27094__$1);
(statearr_27131[10] = inst_27104);
return statearr_27131;
})();var statearr_27132_27150 = state_27117__$1;(statearr_27132_27150[2] = null);
(statearr_27132_27150[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14932__auto___27140,out))
;return ((function (switch__14861__auto__,c__14932__auto___27140,out){
return (function() {
var state_machine__14862__auto__ = null;
var state_machine__14862__auto____0 = (function (){var statearr_27136 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27136[0] = state_machine__14862__auto__);
(statearr_27136[1] = 1);
return statearr_27136;
});
var state_machine__14862__auto____1 = (function (state_27117){while(true){
var ret_value__14863__auto__ = (function (){try{while(true){
var result__14864__auto__ = switch__14861__auto__.call(null,state_27117);if(cljs.core.keyword_identical_QMARK_.call(null,result__14864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14864__auto__;
}
break;
}
}catch (e27137){if((e27137 instanceof Object))
{var ex__14865__auto__ = e27137;var statearr_27138_27151 = state_27117;(statearr_27138_27151[5] = ex__14865__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27117);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27137;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14863__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27152 = state_27117;
state_27117 = G__27152;
continue;
}
} else
{return ret_value__14863__auto__;
}
break;
}
});
state_machine__14862__auto__ = function(state_27117){
switch(arguments.length){
case 0:
return state_machine__14862__auto____0.call(this);
case 1:
return state_machine__14862__auto____1.call(this,state_27117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14862__auto____0;
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14862__auto____1;
return state_machine__14862__auto__;
})()
;})(switch__14861__auto__,c__14932__auto___27140,out))
})();var state__14934__auto__ = (function (){var statearr_27139 = f__14933__auto__.call(null);(statearr_27139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14932__auto___27140);
return statearr_27139;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14934__auto__);
});})(c__14932__auto___27140,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14932__auto___27249 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14932__auto___27249,out){
return (function (){var f__14933__auto__ = (function (){var switch__14861__auto__ = ((function (c__14932__auto___27249,out){
return (function (state_27224){var state_val_27225 = (state_27224[1]);if((state_val_27225 === 1))
{var inst_27201 = null;var state_27224__$1 = (function (){var statearr_27226 = state_27224;(statearr_27226[7] = inst_27201);
return statearr_27226;
})();var statearr_27227_27250 = state_27224__$1;(statearr_27227_27250[2] = null);
(statearr_27227_27250[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27225 === 2))
{var state_27224__$1 = state_27224;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27224__$1,4,ch);
} else
{if((state_val_27225 === 3))
{var inst_27221 = (state_27224[2]);var inst_27222 = cljs.core.async.close_BANG_.call(null,out);var state_27224__$1 = (function (){var statearr_27228 = state_27224;(statearr_27228[8] = inst_27221);
return statearr_27228;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27224__$1,inst_27222);
} else
{if((state_val_27225 === 4))
{var inst_27204 = (state_27224[9]);var inst_27204__$1 = (state_27224[2]);var inst_27205 = (inst_27204__$1 == null);var inst_27206 = cljs.core.not.call(null,inst_27205);var state_27224__$1 = (function (){var statearr_27229 = state_27224;(statearr_27229[9] = inst_27204__$1);
return statearr_27229;
})();if(inst_27206)
{var statearr_27230_27251 = state_27224__$1;(statearr_27230_27251[1] = 5);
} else
{var statearr_27231_27252 = state_27224__$1;(statearr_27231_27252[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27225 === 5))
{var inst_27204 = (state_27224[9]);var inst_27201 = (state_27224[7]);var inst_27208 = cljs.core._EQ_.call(null,inst_27204,inst_27201);var state_27224__$1 = state_27224;if(inst_27208)
{var statearr_27232_27253 = state_27224__$1;(statearr_27232_27253[1] = 8);
} else
{var statearr_27233_27254 = state_27224__$1;(statearr_27233_27254[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27225 === 6))
{var state_27224__$1 = state_27224;var statearr_27235_27255 = state_27224__$1;(statearr_27235_27255[2] = null);
(statearr_27235_27255[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27225 === 7))
{var inst_27219 = (state_27224[2]);var state_27224__$1 = state_27224;var statearr_27236_27256 = state_27224__$1;(statearr_27236_27256[2] = inst_27219);
(statearr_27236_27256[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27225 === 8))
{var inst_27201 = (state_27224[7]);var tmp27234 = inst_27201;var inst_27201__$1 = tmp27234;var state_27224__$1 = (function (){var statearr_27237 = state_27224;(statearr_27237[7] = inst_27201__$1);
return statearr_27237;
})();var statearr_27238_27257 = state_27224__$1;(statearr_27238_27257[2] = null);
(statearr_27238_27257[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27225 === 9))
{var inst_27204 = (state_27224[9]);var state_27224__$1 = state_27224;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27224__$1,11,out,inst_27204);
} else
{if((state_val_27225 === 10))
{var inst_27216 = (state_27224[2]);var state_27224__$1 = state_27224;var statearr_27239_27258 = state_27224__$1;(statearr_27239_27258[2] = inst_27216);
(statearr_27239_27258[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27225 === 11))
{var inst_27204 = (state_27224[9]);var inst_27213 = (state_27224[2]);var inst_27201 = inst_27204;var state_27224__$1 = (function (){var statearr_27240 = state_27224;(statearr_27240[7] = inst_27201);
(statearr_27240[10] = inst_27213);
return statearr_27240;
})();var statearr_27241_27259 = state_27224__$1;(statearr_27241_27259[2] = null);
(statearr_27241_27259[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14932__auto___27249,out))
;return ((function (switch__14861__auto__,c__14932__auto___27249,out){
return (function() {
var state_machine__14862__auto__ = null;
var state_machine__14862__auto____0 = (function (){var statearr_27245 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27245[0] = state_machine__14862__auto__);
(statearr_27245[1] = 1);
return statearr_27245;
});
var state_machine__14862__auto____1 = (function (state_27224){while(true){
var ret_value__14863__auto__ = (function (){try{while(true){
var result__14864__auto__ = switch__14861__auto__.call(null,state_27224);if(cljs.core.keyword_identical_QMARK_.call(null,result__14864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14864__auto__;
}
break;
}
}catch (e27246){if((e27246 instanceof Object))
{var ex__14865__auto__ = e27246;var statearr_27247_27260 = state_27224;(statearr_27247_27260[5] = ex__14865__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27224);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27246;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14863__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27261 = state_27224;
state_27224 = G__27261;
continue;
}
} else
{return ret_value__14863__auto__;
}
break;
}
});
state_machine__14862__auto__ = function(state_27224){
switch(arguments.length){
case 0:
return state_machine__14862__auto____0.call(this);
case 1:
return state_machine__14862__auto____1.call(this,state_27224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14862__auto____0;
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14862__auto____1;
return state_machine__14862__auto__;
})()
;})(switch__14861__auto__,c__14932__auto___27249,out))
})();var state__14934__auto__ = (function (){var statearr_27248 = f__14933__auto__.call(null);(statearr_27248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14932__auto___27249);
return statearr_27248;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14934__auto__);
});})(c__14932__auto___27249,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14932__auto___27396 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14932__auto___27396,out){
return (function (){var f__14933__auto__ = (function (){var switch__14861__auto__ = ((function (c__14932__auto___27396,out){
return (function (state_27366){var state_val_27367 = (state_27366[1]);if((state_val_27367 === 1))
{var inst_27329 = (new Array(n));var inst_27330 = inst_27329;var inst_27331 = 0;var state_27366__$1 = (function (){var statearr_27368 = state_27366;(statearr_27368[7] = inst_27331);
(statearr_27368[8] = inst_27330);
return statearr_27368;
})();var statearr_27369_27397 = state_27366__$1;(statearr_27369_27397[2] = null);
(statearr_27369_27397[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27367 === 2))
{var state_27366__$1 = state_27366;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27366__$1,4,ch);
} else
{if((state_val_27367 === 3))
{var inst_27364 = (state_27366[2]);var state_27366__$1 = state_27366;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27366__$1,inst_27364);
} else
{if((state_val_27367 === 4))
{var inst_27334 = (state_27366[9]);var inst_27334__$1 = (state_27366[2]);var inst_27335 = (inst_27334__$1 == null);var inst_27336 = cljs.core.not.call(null,inst_27335);var state_27366__$1 = (function (){var statearr_27370 = state_27366;(statearr_27370[9] = inst_27334__$1);
return statearr_27370;
})();if(inst_27336)
{var statearr_27371_27398 = state_27366__$1;(statearr_27371_27398[1] = 5);
} else
{var statearr_27372_27399 = state_27366__$1;(statearr_27372_27399[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27367 === 5))
{var inst_27334 = (state_27366[9]);var inst_27331 = (state_27366[7]);var inst_27330 = (state_27366[8]);var inst_27339 = (state_27366[10]);var inst_27338 = (inst_27330[inst_27331] = inst_27334);var inst_27339__$1 = (inst_27331 + 1);var inst_27340 = (inst_27339__$1 < n);var state_27366__$1 = (function (){var statearr_27373 = state_27366;(statearr_27373[10] = inst_27339__$1);
(statearr_27373[11] = inst_27338);
return statearr_27373;
})();if(cljs.core.truth_(inst_27340))
{var statearr_27374_27400 = state_27366__$1;(statearr_27374_27400[1] = 8);
} else
{var statearr_27375_27401 = state_27366__$1;(statearr_27375_27401[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27367 === 6))
{var inst_27331 = (state_27366[7]);var inst_27352 = (inst_27331 > 0);var state_27366__$1 = state_27366;if(cljs.core.truth_(inst_27352))
{var statearr_27377_27402 = state_27366__$1;(statearr_27377_27402[1] = 12);
} else
{var statearr_27378_27403 = state_27366__$1;(statearr_27378_27403[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27367 === 7))
{var inst_27362 = (state_27366[2]);var state_27366__$1 = state_27366;var statearr_27379_27404 = state_27366__$1;(statearr_27379_27404[2] = inst_27362);
(statearr_27379_27404[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27367 === 8))
{var inst_27330 = (state_27366[8]);var inst_27339 = (state_27366[10]);var tmp27376 = inst_27330;var inst_27330__$1 = tmp27376;var inst_27331 = inst_27339;var state_27366__$1 = (function (){var statearr_27380 = state_27366;(statearr_27380[7] = inst_27331);
(statearr_27380[8] = inst_27330__$1);
return statearr_27380;
})();var statearr_27381_27405 = state_27366__$1;(statearr_27381_27405[2] = null);
(statearr_27381_27405[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27367 === 9))
{var inst_27330 = (state_27366[8]);var inst_27344 = cljs.core.vec.call(null,inst_27330);var state_27366__$1 = state_27366;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27366__$1,11,out,inst_27344);
} else
{if((state_val_27367 === 10))
{var inst_27350 = (state_27366[2]);var state_27366__$1 = state_27366;var statearr_27382_27406 = state_27366__$1;(statearr_27382_27406[2] = inst_27350);
(statearr_27382_27406[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27367 === 11))
{var inst_27346 = (state_27366[2]);var inst_27347 = (new Array(n));var inst_27330 = inst_27347;var inst_27331 = 0;var state_27366__$1 = (function (){var statearr_27383 = state_27366;(statearr_27383[7] = inst_27331);
(statearr_27383[8] = inst_27330);
(statearr_27383[12] = inst_27346);
return statearr_27383;
})();var statearr_27384_27407 = state_27366__$1;(statearr_27384_27407[2] = null);
(statearr_27384_27407[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27367 === 12))
{var inst_27330 = (state_27366[8]);var inst_27354 = cljs.core.vec.call(null,inst_27330);var state_27366__$1 = state_27366;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27366__$1,15,out,inst_27354);
} else
{if((state_val_27367 === 13))
{var state_27366__$1 = state_27366;var statearr_27385_27408 = state_27366__$1;(statearr_27385_27408[2] = null);
(statearr_27385_27408[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27367 === 14))
{var inst_27359 = (state_27366[2]);var inst_27360 = cljs.core.async.close_BANG_.call(null,out);var state_27366__$1 = (function (){var statearr_27386 = state_27366;(statearr_27386[13] = inst_27359);
return statearr_27386;
})();var statearr_27387_27409 = state_27366__$1;(statearr_27387_27409[2] = inst_27360);
(statearr_27387_27409[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27367 === 15))
{var inst_27356 = (state_27366[2]);var state_27366__$1 = state_27366;var statearr_27388_27410 = state_27366__$1;(statearr_27388_27410[2] = inst_27356);
(statearr_27388_27410[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14932__auto___27396,out))
;return ((function (switch__14861__auto__,c__14932__auto___27396,out){
return (function() {
var state_machine__14862__auto__ = null;
var state_machine__14862__auto____0 = (function (){var statearr_27392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27392[0] = state_machine__14862__auto__);
(statearr_27392[1] = 1);
return statearr_27392;
});
var state_machine__14862__auto____1 = (function (state_27366){while(true){
var ret_value__14863__auto__ = (function (){try{while(true){
var result__14864__auto__ = switch__14861__auto__.call(null,state_27366);if(cljs.core.keyword_identical_QMARK_.call(null,result__14864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14864__auto__;
}
break;
}
}catch (e27393){if((e27393 instanceof Object))
{var ex__14865__auto__ = e27393;var statearr_27394_27411 = state_27366;(statearr_27394_27411[5] = ex__14865__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27366);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27393;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14863__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27412 = state_27366;
state_27366 = G__27412;
continue;
}
} else
{return ret_value__14863__auto__;
}
break;
}
});
state_machine__14862__auto__ = function(state_27366){
switch(arguments.length){
case 0:
return state_machine__14862__auto____0.call(this);
case 1:
return state_machine__14862__auto____1.call(this,state_27366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14862__auto____0;
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14862__auto____1;
return state_machine__14862__auto__;
})()
;})(switch__14861__auto__,c__14932__auto___27396,out))
})();var state__14934__auto__ = (function (){var statearr_27395 = f__14933__auto__.call(null);(statearr_27395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14932__auto___27396);
return statearr_27395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14934__auto__);
});})(c__14932__auto___27396,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14932__auto___27555 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14932__auto___27555,out){
return (function (){var f__14933__auto__ = (function (){var switch__14861__auto__ = ((function (c__14932__auto___27555,out){
return (function (state_27525){var state_val_27526 = (state_27525[1]);if((state_val_27526 === 1))
{var inst_27484 = [];var inst_27485 = inst_27484;var inst_27486 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_27525__$1 = (function (){var statearr_27527 = state_27525;(statearr_27527[7] = inst_27486);
(statearr_27527[8] = inst_27485);
return statearr_27527;
})();var statearr_27528_27556 = state_27525__$1;(statearr_27528_27556[2] = null);
(statearr_27528_27556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27526 === 2))
{var state_27525__$1 = state_27525;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27525__$1,4,ch);
} else
{if((state_val_27526 === 3))
{var inst_27523 = (state_27525[2]);var state_27525__$1 = state_27525;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27525__$1,inst_27523);
} else
{if((state_val_27526 === 4))
{var inst_27489 = (state_27525[9]);var inst_27489__$1 = (state_27525[2]);var inst_27490 = (inst_27489__$1 == null);var inst_27491 = cljs.core.not.call(null,inst_27490);var state_27525__$1 = (function (){var statearr_27529 = state_27525;(statearr_27529[9] = inst_27489__$1);
return statearr_27529;
})();if(inst_27491)
{var statearr_27530_27557 = state_27525__$1;(statearr_27530_27557[1] = 5);
} else
{var statearr_27531_27558 = state_27525__$1;(statearr_27531_27558[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27526 === 5))
{var inst_27489 = (state_27525[9]);var inst_27486 = (state_27525[7]);var inst_27493 = (state_27525[10]);var inst_27493__$1 = f.call(null,inst_27489);var inst_27494 = cljs.core._EQ_.call(null,inst_27493__$1,inst_27486);var inst_27495 = cljs.core.keyword_identical_QMARK_.call(null,inst_27486,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_27496 = (inst_27494) || (inst_27495);var state_27525__$1 = (function (){var statearr_27532 = state_27525;(statearr_27532[10] = inst_27493__$1);
return statearr_27532;
})();if(cljs.core.truth_(inst_27496))
{var statearr_27533_27559 = state_27525__$1;(statearr_27533_27559[1] = 8);
} else
{var statearr_27534_27560 = state_27525__$1;(statearr_27534_27560[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27526 === 6))
{var inst_27485 = (state_27525[8]);var inst_27510 = inst_27485.length;var inst_27511 = (inst_27510 > 0);var state_27525__$1 = state_27525;if(cljs.core.truth_(inst_27511))
{var statearr_27536_27561 = state_27525__$1;(statearr_27536_27561[1] = 12);
} else
{var statearr_27537_27562 = state_27525__$1;(statearr_27537_27562[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27526 === 7))
{var inst_27521 = (state_27525[2]);var state_27525__$1 = state_27525;var statearr_27538_27563 = state_27525__$1;(statearr_27538_27563[2] = inst_27521);
(statearr_27538_27563[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27526 === 8))
{var inst_27489 = (state_27525[9]);var inst_27485 = (state_27525[8]);var inst_27493 = (state_27525[10]);var inst_27498 = inst_27485.push(inst_27489);var tmp27535 = inst_27485;var inst_27485__$1 = tmp27535;var inst_27486 = inst_27493;var state_27525__$1 = (function (){var statearr_27539 = state_27525;(statearr_27539[7] = inst_27486);
(statearr_27539[8] = inst_27485__$1);
(statearr_27539[11] = inst_27498);
return statearr_27539;
})();var statearr_27540_27564 = state_27525__$1;(statearr_27540_27564[2] = null);
(statearr_27540_27564[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27526 === 9))
{var inst_27485 = (state_27525[8]);var inst_27501 = cljs.core.vec.call(null,inst_27485);var state_27525__$1 = state_27525;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27525__$1,11,out,inst_27501);
} else
{if((state_val_27526 === 10))
{var inst_27508 = (state_27525[2]);var state_27525__$1 = state_27525;var statearr_27541_27565 = state_27525__$1;(statearr_27541_27565[2] = inst_27508);
(statearr_27541_27565[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27526 === 11))
{var inst_27489 = (state_27525[9]);var inst_27493 = (state_27525[10]);var inst_27503 = (state_27525[2]);var inst_27504 = [];var inst_27505 = inst_27504.push(inst_27489);var inst_27485 = inst_27504;var inst_27486 = inst_27493;var state_27525__$1 = (function (){var statearr_27542 = state_27525;(statearr_27542[7] = inst_27486);
(statearr_27542[12] = inst_27505);
(statearr_27542[8] = inst_27485);
(statearr_27542[13] = inst_27503);
return statearr_27542;
})();var statearr_27543_27566 = state_27525__$1;(statearr_27543_27566[2] = null);
(statearr_27543_27566[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27526 === 12))
{var inst_27485 = (state_27525[8]);var inst_27513 = cljs.core.vec.call(null,inst_27485);var state_27525__$1 = state_27525;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27525__$1,15,out,inst_27513);
} else
{if((state_val_27526 === 13))
{var state_27525__$1 = state_27525;var statearr_27544_27567 = state_27525__$1;(statearr_27544_27567[2] = null);
(statearr_27544_27567[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27526 === 14))
{var inst_27518 = (state_27525[2]);var inst_27519 = cljs.core.async.close_BANG_.call(null,out);var state_27525__$1 = (function (){var statearr_27545 = state_27525;(statearr_27545[14] = inst_27518);
return statearr_27545;
})();var statearr_27546_27568 = state_27525__$1;(statearr_27546_27568[2] = inst_27519);
(statearr_27546_27568[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27526 === 15))
{var inst_27515 = (state_27525[2]);var state_27525__$1 = state_27525;var statearr_27547_27569 = state_27525__$1;(statearr_27547_27569[2] = inst_27515);
(statearr_27547_27569[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14932__auto___27555,out))
;return ((function (switch__14861__auto__,c__14932__auto___27555,out){
return (function() {
var state_machine__14862__auto__ = null;
var state_machine__14862__auto____0 = (function (){var statearr_27551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27551[0] = state_machine__14862__auto__);
(statearr_27551[1] = 1);
return statearr_27551;
});
var state_machine__14862__auto____1 = (function (state_27525){while(true){
var ret_value__14863__auto__ = (function (){try{while(true){
var result__14864__auto__ = switch__14861__auto__.call(null,state_27525);if(cljs.core.keyword_identical_QMARK_.call(null,result__14864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14864__auto__;
}
break;
}
}catch (e27552){if((e27552 instanceof Object))
{var ex__14865__auto__ = e27552;var statearr_27553_27570 = state_27525;(statearr_27553_27570[5] = ex__14865__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27525);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27552;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14863__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27571 = state_27525;
state_27525 = G__27571;
continue;
}
} else
{return ret_value__14863__auto__;
}
break;
}
});
state_machine__14862__auto__ = function(state_27525){
switch(arguments.length){
case 0:
return state_machine__14862__auto____0.call(this);
case 1:
return state_machine__14862__auto____1.call(this,state_27525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14862__auto____0;
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14862__auto____1;
return state_machine__14862__auto__;
})()
;})(switch__14861__auto__,c__14932__auto___27555,out))
})();var state__14934__auto__ = (function (){var statearr_27554 = f__14933__auto__.call(null);(statearr_27554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14932__auto___27555);
return statearr_27554;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14934__auto__);
});})(c__14932__auto___27555,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map