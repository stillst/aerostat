function countdown(e,t,a,o,n){theyear=e,themonth=t,theday=a,thehour=o,theminute=n;var i=new Date,r=i.getYear();1e3>r&&(r+=1900);var s=i.getMonth(),l=i.getDate(),d=i.getHours(),c=i.getMinutes(),h=i.getSeconds(),u=montharray[s]+" "+l+", "+r+" "+d+":"+c+":"+h,v=Date.parse(u)+1e3*tz*60*60,m=montharray[t-1]+" "+a+", "+e+" "+o+":"+n,f=Date.parse(m)-6e4*i.getTimezoneOffset(),_=f-v,p=Math.floor(_/864e5*1),g=Math.floor(_%864e5/36e5*1),x=Math.floor(_%864e5%36e5/6e4*1),y=Math.floor(_%864e5%36e5%6e4/1e3*1);return 0>=p&&0>=g&&0>=x&&0>=y?(document.getElementById("dday").style.display="none",document.getElementById("dhour").style.display="none",document.getElementById("dmin").style.display="none",void(document.getElementById("dsec").style.display="none")):(document.getElementById("dday").innerHTML=p,document.getElementById("dhour").innerHTML=g,document.getElementById("dmin").innerHTML=x,document.getElementById("dsec").innerHTML=y,setTimeout("countdown(theyear,themonth,theday,thehour,theminute)",1e3),void 0)}$(document).ready(function(){function e(){$(".head-foot__nav").css("display","none"),$(".wrapper").width()<720?(t.reloadSlider({auto:!0,slideWidth:700,maxSlides:1,pager:!0}),a.reloadSlider({auto:!0,slideWidth:700,maxSlides:1,pager:!1})):($(".head-foot__nav").css("display","block"),t.reloadSlider({auto:!0,slideWidth:400,minSlides:4,maxSlides:4,slideMargin:20,pager:!1,nextSelector:".gallery__controls--next",nextText:'<i class="fa  fa-2x fa-chevron-right"></i>',prevSelector:".gallery__controls--prev",prevText:'<i class="fa  fa-2x fa-chevron-left"></i>'}),a.reloadSlider({auto:!0,slideWidth:450,minSlides:2,maxSlides:2,slideMargin:1,pager:!1,nextSelector:".feedbacks__controls--next",nextText:'<i class="fa  fa-chevron-right"></i>',prevSelector:".feedbacks__controls--prev",prevText:'<i class="fa fa-chevron-left"></i>'}))}var t=$(".bxslider").bxSlider({auto:!0,slideWidth:400,minSlides:4,maxSlides:4,slideMargin:20,pager:!1,nextSelector:".gallery__controls--next",nextText:'<i class="fa  fa-2x fa-chevron-right"></i>',prevSelector:".gallery__controls--prev",prevText:'<i class="fa  fa-2x fa-chevron-left"></i>'}),a=$(".feedbacks__slider").bxSlider({auto:!0,slideWidth:450,minSlides:2,maxSlides:2,slideMargin:1,pager:!1,nextSelector:".feedbacks__controls--next",nextText:'<i class="fa  fa-chevron-right"></i>',prevSelector:".feedbacks__controls--prev",prevText:'<i class="fa fa-chevron-left"></i>'});$(".wrapper").width()<720&&(t.reloadSlider({auto:!0,slideWidth:700,maxSlides:1,pager:!0}),a.reloadSlider({auto:!0,slideWidth:700,maxSlides:1,pager:!1})),$(window).resize(e),$(function(){$(document).on("click",".questions__list dt",function(){$(".questions__list dt").removeClass("questions__active"),$(this).addClass("questions__active")})}),$(function(){$(document).on("click",".tabs__menu-item",function(){var e=$(this).index();$(".tabs__menu-item--active").removeClass("tabs__menu-item--active"),$(this).addClass("tabs__menu-item--active"),$(".tabs__article--active").removeClass("tabs__article--active"),$(".tabs__article").eq(e).addClass("tabs__article--active")})}),$(function(){$(document).on("click",".nav-btn",function(){return $("header nav .head-foot__nav").length?($("header .head-foot__nav").detach().appendTo($("header .wrapper")),$(".head-foot__nav").slideToggle("slow")):$(".head-foot__nav").slideToggle("slow",function(){$("header .head-foot__nav").detach().prependTo($("header .col-8"))}),!1})}),$(function(){$(document).on("click",".nav-btn--up",function(){return $("footer nav .head-foot__nav").length?($("footer .head-foot__nav").detach().prependTo($("footer .col-8")),$(".head-foot__nav").slideToggle("slow")):$(".head-foot__nav").slideToggle("slow",function(){$("footer .head-foot__nav").detach().prependTo($("footer .wrapper"))}),!1})})});var current="Winter is here!",year=2015,month=7,day=27,hour=0,minute=0,tz=3,montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");countdown(year,month,day,hour,minute),$(function(){ParallaxScroll.init()});var ParallaxScroll={showLogs:!1,round:1e3,init:function(){return this._log("init"),this._inited?(this._log("Already Inited"),void(this._inited=!0)):(this._requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){window.setTimeout(e,1e3/60)}}(),void this._onScroll(!0))},_inited:!1,_properties:["x","y","z","rotateX","rotateY","rotateZ","scaleX","scaleY","scaleZ","scale"],_requestAnimationFrame:null,_log:function(e){this.showLogs&&console.log("Parallax Scroll / "+e)},_onScroll:function(e){var t=$(document).scrollTop(),a=$(window).height();this._log("onScroll "+t),$("[data-parallax]").each($.proxy(function(o,n){var i=$(n),r=[],s=!1,l=i.data("style");void 0==l&&(l=i.attr("style")||"",i.data("style",l));var d,c=[i.data("parallax")];for(d=2;i.data("parallax"+d);d++)c.push(i.data("parallax-"+d));var h=c.length;for(d=0;h>d;d++){var u=c[d],v=u["from-scroll"];void 0==v&&(v=Math.max(0,$(n).offset().top-a)),v=0|v;var m=u.distance,f=u["to-scroll"];void 0==m&&void 0==f&&(m=a),m=Math.max(0|m,1);var _=u.easing,p=u["easing-return"];if(void 0!=_&&$.easing&&$.easing[_]||(_=null),void 0!=p&&$.easing&&$.easing[p]||(p=_),_){var g=u.duration;void 0==g&&(g=m),g=Math.max(0|g,1);var x=u["duration-return"];void 0==x&&(x=g),m=1;var y=i.data("current-time");void 0==y&&(y=0)}void 0==f&&(f=v+m),f=0|f;var w=u.smoothness;void 0==w&&(w=30),w=0|w,(e||0==w)&&(w=1),w=0|w;var S=t;S=Math.max(S,v),S=Math.min(S,f),_&&(void 0==i.data("sens")&&i.data("sens","back"),S>v&&("back"==i.data("sens")?(y=1,i.data("sens","go")):y++),f>S&&("go"==i.data("sens")?(y=1,i.data("sens","back")):y++),e&&(y=g),i.data("current-time",y)),this._properties.map($.proxy(function(e){var t=0,a=u[e];if(void 0!=a){"scale"==e||"scaleX"==e||"scaleY"==e||"scaleZ"==e?t=1:a=0|a;var o=i.data("_"+e);void 0==o&&(o=t);var n=(a-t)*((S-v)/(f-v))+t,l=o+(n-o)/w;if(_&&y>0&&g>=y){var d=t;"back"==i.data("sens")&&(d=a,a=-a,_=p,g=x),l=$.easing[_](null,y,d,a,g)}l=Math.ceil(l*this.round)/this.round,l==o&&n==a&&(l=a),r[e]||(r[e]=0),r[e]+=l,o!=r[e]&&(i.data("_"+e,r[e]),s=!0)}},this))}if(s){if(void 0!=r.z){var b=u.perspective;void 0==b&&(b=800);var T=i.parent();T.data("style")||T.data("style",T.attr("style")||""),T.attr("style","perspective:"+b+"px; -webkit-perspective:"+b+"px; "+T.data("style"))}void 0==r.scaleX&&(r.scaleX=1),void 0==r.scaleY&&(r.scaleY=1),void 0==r.scaleZ&&(r.scaleZ=1),void 0!=r.scale&&(r.scaleX*=r.scale,r.scaleY*=r.scale,r.scaleZ*=r.scale);var M="translate3d("+(r.x?r.x:0)+"px, "+(r.y?r.y:0)+"px, "+(r.z?r.z:0)+"px)",k="rotateX("+(r.rotateX?r.rotateX:0)+"deg) rotateY("+(r.rotateY?r.rotateY:0)+"deg) rotateZ("+(r.rotateZ?r.rotateZ:0)+"deg)",q="scaleX("+r.scaleX+") scaleY("+r.scaleY+") scaleZ("+r.scaleZ+")",A=M+" "+k+" "+q+";";this._log(A),i.attr("style","transform:"+A+" -webkit-transform:"+A+" "+l)}},this)),window.requestAnimationFrame?window.requestAnimationFrame($.proxy(this._onScroll,this,!1)):this._requestAnimationFrame($.proxy(this._onScroll,this,!1))}};