// Compiled by ClojureScript 0.0-2234
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
figwheel.client.log_style = "color:rgb(0,128,0);";
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__24660,args){var map__24662 = p__24660;var map__24662__$1 = ((cljs.core.seq_QMARK_.call(null,map__24662))?cljs.core.apply.call(null,cljs.core.hash_map,map__24662):map__24662);var debug = cljs.core.get.call(null,map__24662__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__24660,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__24660,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__24663){
var p__24660 = cljs.core.first(arglist__24663);
var args = cljs.core.rest(arglist__24663);
return log__delegate(p__24660,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__24664){var map__24666 = p__24664;var map__24666__$1 = ((cljs.core.seq_QMARK_.call(null,map__24666))?cljs.core.apply.call(null,cljs.core.hash_map,map__24666):map__24666);var websocket_url = cljs.core.get.call(null,map__24666__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__24667,callback){var map__24669 = p__24667;var map__24669__$1 = ((cljs.core.seq_QMARK_.call(null,map__24669))?cljs.core.apply.call(null,cljs.core.hash_map,map__24669):map__24669);var msg = map__24669__$1;var dependency_file = cljs.core.get.call(null,map__24669__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__24669__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var request_url = cljs.core.get.call(null,map__24669__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));if(cljs.core.truth_((function (){var or__11136__auto__ = dependency_file;if(cljs.core.truth_(or__11136__auto__))
{return or__11136__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__24669,map__24669__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__24669,map__24669__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__24670,p__24671){var map__24674 = p__24670;var map__24674__$1 = ((cljs.core.seq_QMARK_.call(null,map__24674))?cljs.core.apply.call(null,cljs.core.hash_map,map__24674):map__24674);var opts = map__24674__$1;var url_rewriter = cljs.core.get.call(null,map__24674__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174));var map__24675 = p__24671;var map__24675__$1 = ((cljs.core.seq_QMARK_.call(null,map__24675))?cljs.core.apply.call(null,cljs.core.hash_map,map__24675):map__24675);var d = map__24675__$1;var file = cljs.core.get.call(null,map__24675__$1,new cljs.core.Keyword(null,"file","file",1017047278));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2162835619),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__24676,p__24677){var map__24718 = p__24676;var map__24718__$1 = ((cljs.core.seq_QMARK_.call(null,map__24718))?cljs.core.apply.call(null,cljs.core.hash_map,map__24718):map__24718);var opts = map__24718__$1;var on_jsload = cljs.core.get.call(null,map__24718__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103));var before_jsload = cljs.core.get.call(null,map__24718__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831));var map__24719 = p__24677;var map__24719__$1 = ((cljs.core.seq_QMARK_.call(null,map__24719))?cljs.core.apply.call(null,cljs.core.hash_map,map__24719):map__24719);var files = cljs.core.get.call(null,map__24719__$1,new cljs.core.Keyword(null,"files","files",1111338473));var c__14932__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14932__auto__,map__24718,map__24718__$1,opts,on_jsload,before_jsload,map__24719,map__24719__$1,files){
return (function (){var f__14933__auto__ = (function (){var switch__14861__auto__ = ((function (c__14932__auto__,map__24718,map__24718__$1,opts,on_jsload,before_jsload,map__24719,map__24719__$1,files){
return (function (state_24741){var state_val_24742 = (state_24741[1]);if((state_val_24742 === 6))
{var inst_24724 = (state_24741[7]);var inst_24733 = (state_24741[2]);var inst_24734 = [inst_24724];var inst_24735 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_24734,null));var inst_24736 = cljs.core.apply.call(null,on_jsload,inst_24735);var state_24741__$1 = (function (){var statearr_24743 = state_24741;(statearr_24743[8] = inst_24733);
return statearr_24743;
})();var statearr_24744_24758 = state_24741__$1;(statearr_24744_24758[2] = inst_24736);
(statearr_24744_24758[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24742 === 5))
{var inst_24739 = (state_24741[2]);var state_24741__$1 = state_24741;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24741__$1,inst_24739);
} else
{if((state_val_24742 === 4))
{var state_24741__$1 = state_24741;var statearr_24745_24759 = state_24741__$1;(statearr_24745_24759[2] = null);
(statearr_24745_24759[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24742 === 3))
{var inst_24724 = (state_24741[7]);var inst_24727 = console.log("%cFigwheel: loaded these files",figwheel.client.log_style);var inst_24728 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),inst_24724);var inst_24729 = cljs.core.prn_str.call(null,inst_24728);var inst_24730 = console.log(inst_24729);var inst_24731 = cljs.core.async.timeout.call(null,10);var state_24741__$1 = (function (){var statearr_24746 = state_24741;(statearr_24746[9] = inst_24730);
(statearr_24746[10] = inst_24727);
return statearr_24746;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24741__$1,6,inst_24731);
} else
{if((state_val_24742 === 2))
{var inst_24724 = (state_24741[7]);var inst_24724__$1 = (state_24741[2]);var inst_24725 = cljs.core.not_empty.call(null,inst_24724__$1);var state_24741__$1 = (function (){var statearr_24747 = state_24741;(statearr_24747[7] = inst_24724__$1);
return statearr_24747;
})();if(cljs.core.truth_(inst_24725))
{var statearr_24748_24760 = state_24741__$1;(statearr_24748_24760[1] = 3);
} else
{var statearr_24749_24761 = state_24741__$1;(statearr_24749_24761[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24742 === 1))
{var inst_24720 = before_jsload.call(null,files);var inst_24721 = figwheel.client.add_request_urls.call(null,opts,files);var inst_24722 = figwheel.client.load_all_js_files.call(null,inst_24721);var state_24741__$1 = (function (){var statearr_24750 = state_24741;(statearr_24750[11] = inst_24720);
return statearr_24750;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24741__$1,2,inst_24722);
} else
{return null;
}
}
}
}
}
}
});})(c__14932__auto__,map__24718,map__24718__$1,opts,on_jsload,before_jsload,map__24719,map__24719__$1,files))
;return ((function (switch__14861__auto__,c__14932__auto__,map__24718,map__24718__$1,opts,on_jsload,before_jsload,map__24719,map__24719__$1,files){
return (function() {
var state_machine__14862__auto__ = null;
var state_machine__14862__auto____0 = (function (){var statearr_24754 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24754[0] = state_machine__14862__auto__);
(statearr_24754[1] = 1);
return statearr_24754;
});
var state_machine__14862__auto____1 = (function (state_24741){while(true){
var ret_value__14863__auto__ = (function (){try{while(true){
var result__14864__auto__ = switch__14861__auto__.call(null,state_24741);if(cljs.core.keyword_identical_QMARK_.call(null,result__14864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14864__auto__;
}
break;
}
}catch (e24755){if((e24755 instanceof Object))
{var ex__14865__auto__ = e24755;var statearr_24756_24762 = state_24741;(statearr_24756_24762[5] = ex__14865__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24741);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24755;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14863__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24763 = state_24741;
state_24741 = G__24763;
continue;
}
} else
{return ret_value__14863__auto__;
}
break;
}
});
state_machine__14862__auto__ = function(state_24741){
switch(arguments.length){
case 0:
return state_machine__14862__auto____0.call(this);
case 1:
return state_machine__14862__auto____1.call(this,state_24741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14862__auto____0;
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14862__auto____1;
return state_machine__14862__auto__;
})()
;})(switch__14861__auto__,c__14932__auto__,map__24718,map__24718__$1,opts,on_jsload,before_jsload,map__24719,map__24719__$1,files))
})();var state__14934__auto__ = (function (){var statearr_24757 = f__14933__auto__.call(null);(statearr_24757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14932__auto__);
return statearr_24757;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14934__auto__);
});})(c__14932__auto__,map__24718,map__24718__$1,opts,on_jsload,before_jsload,map__24719,map__24719__$1,files))
);
return c__14932__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__24764,link_href){var map__24766 = p__24764;var map__24766__$1 = ((cljs.core.seq_QMARK_.call(null,map__24766))?cljs.core.apply.call(null,cljs.core.hash_map,map__24766):map__24766);var request_url = cljs.core.get.call(null,map__24766__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__24766__$1,new cljs.core.Keyword(null,"file","file",1017047278));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[0]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__14932__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14932__auto__,parent){
return (function (){var f__14933__auto__ = (function (){var switch__14861__auto__ = ((function (c__14932__auto__,parent){
return (function (state_24787){var state_val_24788 = (state_24787[1]);if((state_val_24788 === 2))
{var inst_24784 = (state_24787[2]);var inst_24785 = parent.removeChild(orig_link);var state_24787__$1 = (function (){var statearr_24789 = state_24787;(statearr_24789[7] = inst_24784);
return statearr_24789;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24787__$1,inst_24785);
} else
{if((state_val_24788 === 1))
{var inst_24782 = cljs.core.async.timeout.call(null,200);var state_24787__$1 = state_24787;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24787__$1,2,inst_24782);
} else
{return null;
}
}
});})(c__14932__auto__,parent))
;return ((function (switch__14861__auto__,c__14932__auto__,parent){
return (function() {
var state_machine__14862__auto__ = null;
var state_machine__14862__auto____0 = (function (){var statearr_24793 = [null,null,null,null,null,null,null,null];(statearr_24793[0] = state_machine__14862__auto__);
(statearr_24793[1] = 1);
return statearr_24793;
});
var state_machine__14862__auto____1 = (function (state_24787){while(true){
var ret_value__14863__auto__ = (function (){try{while(true){
var result__14864__auto__ = switch__14861__auto__.call(null,state_24787);if(cljs.core.keyword_identical_QMARK_.call(null,result__14864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14864__auto__;
}
break;
}
}catch (e24794){if((e24794 instanceof Object))
{var ex__14865__auto__ = e24794;var statearr_24795_24797 = state_24787;(statearr_24795_24797[5] = ex__14865__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24787);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24794;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14863__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24798 = state_24787;
state_24787 = G__24798;
continue;
}
} else
{return ret_value__14863__auto__;
}
break;
}
});
state_machine__14862__auto__ = function(state_24787){
switch(arguments.length){
case 0:
return state_machine__14862__auto____0.call(this);
case 1:
return state_machine__14862__auto____1.call(this,state_24787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14862__auto____0;
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14862__auto____1;
return state_machine__14862__auto__;
})()
;})(switch__14861__auto__,c__14932__auto__,parent))
})();var state__14934__auto__ = (function (){var statearr_24796 = f__14933__auto__.call(null);(statearr_24796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14932__auto__);
return statearr_24796;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14934__auto__);
});})(c__14932__auto__,parent))
);
return c__14932__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__24799){var map__24801 = p__24799;var map__24801__$1 = ((cljs.core.seq_QMARK_.call(null,map__24801))?cljs.core.apply.call(null,cljs.core.hash_map,map__24801):map__24801);var f_data = map__24801__$1;var request_url = cljs.core.get.call(null,map__24801__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__24801__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4090__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4090__auto__))
{var link = temp__4090__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__24802,files_msg){var map__24824 = p__24802;var map__24824__$1 = ((cljs.core.seq_QMARK_.call(null,map__24824))?cljs.core.apply.call(null,cljs.core.hash_map,map__24824):map__24824);var opts = map__24824__$1;var on_cssload = cljs.core.get.call(null,map__24824__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789));var seq__24825_24845 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__24826_24846 = null;var count__24827_24847 = 0;var i__24828_24848 = 0;while(true){
if((i__24828_24848 < count__24827_24847))
{var f_24849 = cljs.core._nth.call(null,chunk__24826_24846,i__24828_24848);figwheel.client.reload_css_file.call(null,f_24849);
{
var G__24850 = seq__24825_24845;
var G__24851 = chunk__24826_24846;
var G__24852 = count__24827_24847;
var G__24853 = (i__24828_24848 + 1);
seq__24825_24845 = G__24850;
chunk__24826_24846 = G__24851;
count__24827_24847 = G__24852;
i__24828_24848 = G__24853;
continue;
}
} else
{var temp__4092__auto___24854 = cljs.core.seq.call(null,seq__24825_24845);if(temp__4092__auto___24854)
{var seq__24825_24855__$1 = temp__4092__auto___24854;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24825_24855__$1))
{var c__11892__auto___24856 = cljs.core.chunk_first.call(null,seq__24825_24855__$1);{
var G__24857 = cljs.core.chunk_rest.call(null,seq__24825_24855__$1);
var G__24858 = c__11892__auto___24856;
var G__24859 = cljs.core.count.call(null,c__11892__auto___24856);
var G__24860 = 0;
seq__24825_24845 = G__24857;
chunk__24826_24846 = G__24858;
count__24827_24847 = G__24859;
i__24828_24848 = G__24860;
continue;
}
} else
{var f_24861 = cljs.core.first.call(null,seq__24825_24855__$1);figwheel.client.reload_css_file.call(null,f_24861);
{
var G__24862 = cljs.core.next.call(null,seq__24825_24855__$1);
var G__24863 = null;
var G__24864 = 0;
var G__24865 = 0;
seq__24825_24845 = G__24862;
chunk__24826_24846 = G__24863;
count__24827_24847 = G__24864;
i__24828_24848 = G__24865;
continue;
}
}
} else
{}
}
break;
}
var c__14932__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14932__auto__,map__24824,map__24824__$1,opts,on_cssload){
return (function (){var f__14933__auto__ = (function (){var switch__14861__auto__ = ((function (c__14932__auto__,map__24824,map__24824__$1,opts,on_cssload){
return (function (state_24835){var state_val_24836 = (state_24835[1]);if((state_val_24836 === 2))
{var inst_24831 = (state_24835[2]);var inst_24832 = new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_24833 = on_cssload.call(null,inst_24832);var state_24835__$1 = (function (){var statearr_24837 = state_24835;(statearr_24837[7] = inst_24831);
return statearr_24837;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24835__$1,inst_24833);
} else
{if((state_val_24836 === 1))
{var inst_24829 = cljs.core.async.timeout.call(null,100);var state_24835__$1 = state_24835;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24835__$1,2,inst_24829);
} else
{return null;
}
}
});})(c__14932__auto__,map__24824,map__24824__$1,opts,on_cssload))
;return ((function (switch__14861__auto__,c__14932__auto__,map__24824,map__24824__$1,opts,on_cssload){
return (function() {
var state_machine__14862__auto__ = null;
var state_machine__14862__auto____0 = (function (){var statearr_24841 = [null,null,null,null,null,null,null,null];(statearr_24841[0] = state_machine__14862__auto__);
(statearr_24841[1] = 1);
return statearr_24841;
});
var state_machine__14862__auto____1 = (function (state_24835){while(true){
var ret_value__14863__auto__ = (function (){try{while(true){
var result__14864__auto__ = switch__14861__auto__.call(null,state_24835);if(cljs.core.keyword_identical_QMARK_.call(null,result__14864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14864__auto__;
}
break;
}
}catch (e24842){if((e24842 instanceof Object))
{var ex__14865__auto__ = e24842;var statearr_24843_24866 = state_24835;(statearr_24843_24866[5] = ex__14865__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24835);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24842;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14863__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24867 = state_24835;
state_24835 = G__24867;
continue;
}
} else
{return ret_value__14863__auto__;
}
break;
}
});
state_machine__14862__auto__ = function(state_24835){
switch(arguments.length){
case 0:
return state_machine__14862__auto____0.call(this);
case 1:
return state_machine__14862__auto____1.call(this,state_24835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14862__auto____0;
state_machine__14862__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14862__auto____1;
return state_machine__14862__auto__;
})()
;})(switch__14861__auto__,c__14932__auto__,map__24824,map__24824__$1,opts,on_cssload))
})();var state__14934__auto__ = (function (){var statearr_24844 = f__14933__auto__.call(null);(statearr_24844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14932__auto__);
return statearr_24844;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14934__auto__);
});})(c__14932__auto__,map__24824,map__24824__$1,opts,on_cssload))
);
return c__14932__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",3979112649)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__24868){var map__24873 = p__24868;var map__24873__$1 = ((cljs.core.seq_QMARK_.call(null,map__24873))?cljs.core.apply.call(null,cljs.core.hash_map,map__24873):map__24873);var opts = map__24873__$1;var on_compile_fail = cljs.core.get.call(null,map__24873__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160));var jsload_callback = cljs.core.get.call(null,map__24873__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__24873__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__24873__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));console.log("%cFigwheel: trying to open cljs reload socket",figwheel.client.log_style);
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__24873,map__24873__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__24874 = cljs.core._EQ_;var expr__24875 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__24874.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__24875)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__24874.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__24875)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__24874.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569),expr__24875)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__24873,map__24873__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__24873,map__24873__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.log("%cFigwheel: socket connection established",figwheel.client.log_style);
});})(socket,map__24873,map__24873__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__24873,map__24873__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__24873,map__24873__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
});})(socket,map__24873,map__24873__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__24873,map__24873__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__24873,map__24873__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__24873,map__24873__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj24880 = {"detail":url};return obj24880;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"class","class",1108647146)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",1108338651).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__24881){var map__24883 = p__24881;var map__24883__$1 = ((cljs.core.seq_QMARK_.call(null,map__24883))?cljs.core.apply.call(null,cljs.core.hash_map,map__24883):map__24883);var class$ = cljs.core.get.call(null,map__24883__$1,new cljs.core.Keyword(null,"class","class",1108647146));var message = cljs.core.get.call(null,map__24883__$1,new cljs.core.Keyword(null,"message","message",1968829305));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__24884){var map__24890 = p__24884;var map__24890__$1 = ((cljs.core.seq_QMARK_.call(null,map__24890))?cljs.core.apply.call(null,cljs.core.hash_map,map__24890):map__24890);var ed = map__24890__$1;var exception_data = cljs.core.get.call(null,map__24890__$1,new cljs.core.Keyword(null,"exception-data","exception-data",922291674));var formatted_exception = cljs.core.get.call(null,map__24890__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",1408867312));console.log("%cFigwheel: Compile Exception",figwheel.client.log_style);
var seq__24891_24895 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__24892_24896 = null;var count__24893_24897 = 0;var i__24894_24898 = 0;while(true){
if((i__24894_24898 < count__24893_24897))
{var msg_24899 = cljs.core._nth.call(null,chunk__24892_24896,i__24894_24898);console.log(msg_24899);
{
var G__24900 = seq__24891_24895;
var G__24901 = chunk__24892_24896;
var G__24902 = count__24893_24897;
var G__24903 = (i__24894_24898 + 1);
seq__24891_24895 = G__24900;
chunk__24892_24896 = G__24901;
count__24893_24897 = G__24902;
i__24894_24898 = G__24903;
continue;
}
} else
{var temp__4092__auto___24904 = cljs.core.seq.call(null,seq__24891_24895);if(temp__4092__auto___24904)
{var seq__24891_24905__$1 = temp__4092__auto___24904;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24891_24905__$1))
{var c__11892__auto___24906 = cljs.core.chunk_first.call(null,seq__24891_24905__$1);{
var G__24907 = cljs.core.chunk_rest.call(null,seq__24891_24905__$1);
var G__24908 = c__11892__auto___24906;
var G__24909 = cljs.core.count.call(null,c__11892__auto___24906);
var G__24910 = 0;
seq__24891_24895 = G__24907;
chunk__24892_24896 = G__24908;
count__24893_24897 = G__24909;
i__24894_24898 = G__24910;
continue;
}
} else
{var msg_24911 = cljs.core.first.call(null,seq__24891_24905__$1);console.log(msg_24911);
{
var G__24912 = cljs.core.next.call(null,seq__24891_24905__$1);
var G__24913 = null;
var G__24914 = 0;
var G__24915 = 0;
seq__24891_24895 = G__24912;
chunk__24892_24896 = G__24913;
count__24893_24897 = G__24914;
i__24894_24898 = G__24915;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.log("%cFigwheel: loading files",figwheel.client.log_style);
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.log("%cFigwheel: loaded CSS files",figwheel.client.log_style);
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),100,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103),(function (){var or__11136__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__11136__auto__))
{return or__11136__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__24916){var map__24918 = p__24916;var map__24918__$1 = ((cljs.core.seq_QMARK_.call(null,map__24918))?cljs.core.apply.call(null,cljs.core.hash_map,map__24918):map__24918);var opts = map__24918__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__24916 = null;if (arguments.length > 0) {
  p__24916 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__24916);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__24919){
var p__24916 = cljs.core.seq(arglist__24919);
return watch_and_reload__delegate(p__24916);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map