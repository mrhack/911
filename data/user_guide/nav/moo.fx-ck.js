/*
moo.fx, simple effects library built with prototype.js (http://prototype.conio.net).
by Valerio Proietti (http://mad4milk.net) MIT-style LICENSE.
for more info (http://moofx.mad4milk.net).
10/24/2005
v(1.0.2)
*///base
var fx=new Object;fx.Base=function(){};fx.Base.prototype={setOptions:function(e){this.options={duration:500,onComplete:""};Object.extend(this.options,e||{})},go:function(){this.duration=this.options.duration;this.startTime=(new Date).getTime();this.timer=setInterval(this.step.bind(this),13)},step:function(){var e=(new Date).getTime(),t=(e-this.startTime)/this.duration;if(e>=this.duration+this.startTime){this.now=this.to;clearInterval(this.timer);this.timer=null;this.options.onComplete&&setTimeout(this.options.onComplete.bind(this),10)}else this.now=(-Math.cos(t*Math.PI)/2+.5)*(this.to-this.from)+this.from;this.increase()},custom:function(e,t){if(this.timer!=null)return;this.from=e;this.to=t;this.go()},hide:function(){this.now=0;this.increase()},clearTimer:function(){clearInterval(this.timer);this.timer=null}};fx.Layout=Class.create();fx.Layout.prototype=Object.extend(new fx.Base,{initialize:function(e,t){this.el=$(e);this.el.style.overflow="hidden";this.el.iniWidth=this.el.offsetWidth;this.el.iniHeight=this.el.offsetHeight;this.setOptions(t)}});fx.Height=Class.create();Object.extend(Object.extend(fx.Height.prototype,fx.Layout.prototype),{increase:function(){this.el.style.height=this.now+"px"},toggle:function(){this.el.offsetHeight>0?this.custom(this.el.offsetHeight,0):this.custom(0,this.el.scrollHeight)}});