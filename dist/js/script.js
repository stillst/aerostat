function CountdownTimer(e,a,t){this.initialize.apply(this,arguments)}function CDT(){var e=new Date,a=new Date;a.setDate(e.getDate()+3);var t=new CountdownTimer("CDT",a,'<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>');t.countDown()}$(document).ready(function(){$(function(){$(".bxslider").bxSlider({auto:!0,slideWidth:400,minSlides:4,maxSlides:4,slideMargin:1,pager:!1,nextSelector:".gallery__controls--next",nextText:'<i class="fa  fa-2x fa-chevron-right"></i>',prevSelector:".gallery__controls--prev",prevText:'<i class="fa  fa-2x fa-chevron-left"></i>'}),$(".bxslider__small").bxSlider({auto:!0,slideWidth:400,minSlides:1,maxSlides:1,slideMargin:1,pager:!1}),$(".feedbacks__slider").bxSlider({auto:!0,slideWidth:450,minSlides:2,maxSlides:2,slideMargin:1,pager:!1,nextSelector:".feedbacks__controls--next",nextText:'<i class="fa  fa-chevron-right"></i>',prevSelector:".feedbacks__controls--prev",prevText:'<i class="fa fa-chevron-left"></i>'}),$(".feedbacks__slider--small").bxSlider({auto:!0,slideWidth:400,minSlides:1,maxSlides:1,slideMargin:1})}),$(function(){$(document).on("click",".questions__list dt",function(){$(".questions__list dt").removeClass("questions__active"),$(this).addClass("questions__active")})}),$(function(){$(document).on("click",".tabs__menu-item",function(){var e=$(this).index();$(".tabs__menu-item--active").removeClass("tabs__menu-item--active"),$(this).addClass("tabs__menu-item--active"),$(".tabs__article--active").removeClass("tabs__article--active"),$(".tabs__article").eq(e).addClass("tabs__article--active")})}),$(function(){$(document).on("click",".nav-btn",function(){return $("header nav .head-foot__nav").length?($("header .head-foot__nav").detach().appendTo($("header .wrapper")),$(".head-foot__nav").slideToggle("slow")):$(".head-foot__nav").slideToggle("slow",function(){$("header .head-foot__nav").detach().prependTo($("header .col-8"))}),!1})}),$(function(){$(document).on("click",".nav-btn--up",function(){return $("footer nav .head-foot__nav").length?($("footer .head-foot__nav").detach().prependTo($("footer .col-8")),$(".head-foot__nav").slideToggle("slow")):$(".head-foot__nav").slideToggle("slow",function(){$("footer .head-foot__nav").detach().prependTo($("footer .wrapper"))}),!1})})}),CountdownTimer.prototype={initialize:function(e,a,t){this.elem=document.getElementById(e),this.tl=a,this.mes=t},countDown:function(){var e="",a=new Date,t=Math.floor((this.tl-a)/864e5),n=Math.floor((this.tl-a)%864e5/36e5),s=Math.floor((this.tl-a)%864e5/6e4)%60,i=Math.floor((this.tl-a)%864e5/1e3)%60%60,o=this;return this.tl-a>0?(e+='<span class="number-wrapper"><span class="number day">'+t+'</span><span class="caption">дня</span></span>',e+='<span class="number-wrapper"><span class="number hour">'+n+'</span><span class="caption">часа</span></span>',e+='<span class="number-wrapper"><span class="number min">'+this.addZero(s)+'</span><span class="caption">минут</span></span><span class="number-wrapper"><span class="number sec">'+this.addZero(i)+'</span><span class="caption">секунд</span></span>',this.elem.innerHTML=e,tid=setTimeout(function(){o.countDown()},10),void 0):void(this.elem.innerHTML=this.mes)},addZero:function(e){return("0"+e).slice(-2)}},window.onload=function(){CDT()},$(function(){ParallaxScroll.init()});var ParallaxScroll={showLogs:!1,round:1e3,init:function(){return this._log("init"),this._inited?(this._log("Already Inited"),void(this._inited=!0)):(this._requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,a){window.setTimeout(e,1e3/60)}}(),void this._onScroll(!0))},_inited:!1,_properties:["x","y","z","rotateX","rotateY","rotateZ","scaleX","scaleY","scaleZ","scale"],_requestAnimationFrame:null,_log:function(e){this.showLogs&&console.log("Parallax Scroll / "+e)},_onScroll:function(e){var a=$(document).scrollTop(),t=$(window).height();this._log("onScroll "+a),$("[data-parallax]").each($.proxy(function(n,s){var i=$(s),o=[],r=!1,l=i.data("style");void 0==l&&(l=i.attr("style")||"",i.data("style",l));var d,c=[i.data("parallax")];for(d=2;i.data("parallax"+d);d++)c.push(i.data("parallax-"+d));var p=c.length;for(d=0;p>d;d++){var u=c[d],h=u["from-scroll"];void 0==h&&(h=Math.max(0,$(s).offset().top-t)),h=0|h;var v=u.distance,m=u["to-scroll"];void 0==v&&void 0==m&&(v=t),v=Math.max(0|v,1);var _=u.easing,f=u["easing-return"];if(void 0!=_&&$.easing&&$.easing[_]||(_=null),void 0!=f&&$.easing&&$.easing[f]||(f=_),_){var g=u.duration;void 0==g&&(g=v),g=Math.max(0|g,1);var w=u["duration-return"];void 0==w&&(w=g),v=1;var x=i.data("current-time");void 0==x&&(x=0)}void 0==m&&(m=h+v),m=0|m;var b=u.smoothness;void 0==b&&(b=30),b=0|b,(e||0==b)&&(b=1),b=0|b;var y=a;y=Math.max(y,h),y=Math.min(y,m),_&&(void 0==i.data("sens")&&i.data("sens","back"),y>h&&("back"==i.data("sens")?(x=1,i.data("sens","go")):x++),m>y&&("go"==i.data("sens")?(x=1,i.data("sens","back")):x++),e&&(x=g),i.data("current-time",x)),this._properties.map($.proxy(function(e){var a=0,t=u[e];if(void 0!=t){"scale"==e||"scaleX"==e||"scaleY"==e||"scaleZ"==e?a=1:t=0|t;var n=i.data("_"+e);void 0==n&&(n=a);var s=(t-a)*((y-h)/(m-h))+a,l=n+(s-n)/b;if(_&&x>0&&g>=x){var d=a;"back"==i.data("sens")&&(d=t,t=-t,_=f,g=w),l=$.easing[_](null,x,d,t,g)}l=Math.ceil(l*this.round)/this.round,l==n&&s==t&&(l=t),o[e]||(o[e]=0),o[e]+=l,n!=o[e]&&(i.data("_"+e,o[e]),r=!0)}},this))}if(r){if(void 0!=o.z){var S=u.perspective;void 0==S&&(S=800);var T=i.parent();T.data("style")||T.data("style",T.attr("style")||""),T.attr("style","perspective:"+S+"px; -webkit-perspective:"+S+"px; "+T.data("style"))}void 0==o.scaleX&&(o.scaleX=1),void 0==o.scaleY&&(o.scaleY=1),void 0==o.scaleZ&&(o.scaleZ=1),void 0!=o.scale&&(o.scaleX*=o.scale,o.scaleY*=o.scale,o.scaleZ*=o.scale);var M="translate3d("+(o.x?o.x:0)+"px, "+(o.y?o.y:0)+"px, "+(o.z?o.z:0)+"px)",k="rotateX("+(o.rotateX?o.rotateX:0)+"deg) rotateY("+(o.rotateY?o.rotateY:0)+"deg) rotateZ("+(o.rotateZ?o.rotateZ:0)+"deg)",q="scaleX("+o.scaleX+") scaleY("+o.scaleY+") scaleZ("+o.scaleZ+")",Z=M+" "+k+" "+q+";";this._log(Z),i.attr("style","transform:"+Z+" -webkit-transform:"+Z+" "+l)}},this)),window.requestAnimationFrame?window.requestAnimationFrame($.proxy(this._onScroll,this,!1)):this._requestAnimationFrame($.proxy(this._onScroll,this,!1))}};