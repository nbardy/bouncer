// Compiled by ClojureScript 0.0-2234
goog.provide('ball_roller.sounds');
goog.require('cljs.core');
goog.require('ball_roller.util');
goog.require('ball_roller.util');
ball_roller.sounds.directory = "sounds/";
ball_roller.sounds.clamp = (function clamp(x,p__23450){var vec__23452 = p__23450;var bottom = cljs.core.nth.call(null,vec__23452,0,null);var top = cljs.core.nth.call(null,vec__23452,1,null);return Math.min(Math.max(x,bottom),top);
});
ball_roller.sounds.ball_speed_to_volume = (function ball_speed_to_volume(speed){return (function (p1__23453_SHARP_){return (p1__23453_SHARP_ * p1__23453_SHARP_);
}).call(null,ball_roller.sounds.clamp.call(null,(speed / 1.2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null)));
});
ball_roller.sounds.get_hit_noise = (function get_hit_noise(hit){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ball_roller.sounds.directory)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__23455 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coord","coord",1108749927).cljs$core$IFn$_invoke$arity$1(hit),new cljs.core.Keyword(null,"direction","direction",4346280689).cljs$core$IFn$_invoke$arity$1(hit)], null);if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",1013904363),-1], null),G__23455))
{return "boink.wav";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362),-1], null),G__23455))
{return "boink.wav";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",1013904363),1], null),G__23455))
{return "boink.wav";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362),1], null),G__23455))
{return "boink.wav";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return "squish.mp3";
} else
{return null;
}
}
}
}
}
})()));
});
ball_roller.sounds.play_sound = (function play_sound(uri,volume){var audio = ball_roller.util.create_element_BANG_.call(null,"audio",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),uri], null));audio.volume = volume;
return audio.play();
});
ball_roller.sounds.play = (function play(state){var temp__4090__auto__ = new cljs.core.Keyword(null,"has-bounced?","has-bounced?",4667322920).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ball","ball",1016920433).cljs$core$IFn$_invoke$arity$1(state));if(cljs.core.truth_(temp__4090__auto__))
{var hit = temp__4090__auto__;return ball_roller.sounds.play_sound.call(null,ball_roller.sounds.get_hit_noise.call(null,hit),ball_roller.sounds.ball_speed_to_volume.call(null,new cljs.core.Keyword(null,"speed","speed",1123546041).cljs$core$IFn$_invoke$arity$1(hit)));
} else
{return null;
}
});

//# sourceMappingURL=sounds.js.map