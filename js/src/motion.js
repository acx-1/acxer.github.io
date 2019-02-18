// build time:Mon Feb 18 2019 11:41:50 GMT+0800 (GMT+08:00)
$(document).ready(function(){function i(i){this.el=$(i.el),this.status=$.extend({},{init:{width:"100%",opacity:1,left:0,rotateZ:0,top:0}},i.status)}NexT.motion={};var t={lines:[],push:function(i){this.lines.push(i)},init:function(){this.lines.forEach(function(i){i.init()})},arrow:function(){this.lines.forEach(function(i){i.arrow()})},close:function(){this.lines.forEach(function(i){i.close()})}};i.prototype.init=function(){this.transform("init")},i.prototype.arrow=function(){this.transform("arrow")},i.prototype.close=function(){this.transform("close")},i.prototype.transform=function(i){this.el.velocity("stop").velocity(this.status[i])};var e=new i({el:".sidebar-toggle-line-first",status:{arrow:{width:"50%",rotateZ:"-45deg",top:"2px"},close:{width:"100%",rotateZ:"-45deg",top:"5px"}}}),o=new i({el:".sidebar-toggle-line-middle",status:{arrow:{width:"90%"},close:{opacity:0}}}),n=new i({el:".sidebar-toggle-line-last",status:{arrow:{width:"50%",rotateZ:"45deg",top:"-2px"},close:{width:"100%",rotateZ:"45deg",top:"-5px"}}});t.push(e),t.push(o),t.push(n);var s,r,a="320px",l=200,c={toggleEl:$(".sidebar-toggle"),dimmerEl:$("#sidebar-dimmer"),sidebarEl:$(".sidebar"),isSidebarVisible:!1,init:function(){this.toggleEl.on("click",this.clickHandler.bind(this)),this.dimmerEl.on("click",this.clickHandler.bind(this)),this.toggleEl.on("mouseenter",this.mouseEnterHandler.bind(this)),this.toggleEl.on("mouseleave",this.mouseLeaveHandler.bind(this)),this.sidebarEl.on("touchstart",this.touchstartHandler.bind(this)),this.sidebarEl.on("touchend",this.touchendHandler.bind(this)),this.sidebarEl.on("touchmove",function(i){i.preventDefault()}),$(document).on("sidebar.isShowing",function(){NexT.utils.isDesktop()&&$("body").velocity("stop").velocity({paddingRight:a},l)}).on("sidebar.isHiding",function(){})},clickHandler:function(){this.isSidebarVisible?this.hideSidebar():this.showSidebar(),this.isSidebarVisible=!this.isSidebarVisible},mouseEnterHandler:function(){this.isSidebarVisible||t.arrow()},mouseLeaveHandler:function(){this.isSidebarVisible||t.init()},touchstartHandler:function(i){s=i.originalEvent.touches[0].clientX,r=i.originalEvent.touches[0].clientY},touchendHandler:function(i){var t=i.originalEvent.changedTouches[0].clientX,e=i.originalEvent.changedTouches[0].clientY;t-s>30&&Math.abs(e-r)<20&&this.clickHandler()},showSidebar:function(){var i=this;t.close(),this.sidebarEl.velocity("stop").velocity({width:a},{display:"block",duration:l,begin:function(){$(".sidebar .motion-element").velocity("transition.slideRightIn",{stagger:50,drag:!0,complete:function(){i.sidebarEl.trigger("sidebar.motion.complete")}})},complete:function(){i.sidebarEl.addClass("sidebar-active"),i.sidebarEl.trigger("sidebar.didShow")}}),this.sidebarEl.trigger("sidebar.isShowing")},hideSidebar:function(){NexT.utils.isDesktop()&&$("body").velocity("stop").velocity({paddingRight:0}),this.sidebarEl.find(".motion-element").velocity("stop").css("display","none"),this.sidebarEl.velocity("stop").velocity({width:0},{display:"none"}),t.init(),this.sidebarEl.removeClass("sidebar-active"),this.sidebarEl.trigger("sidebar.isHiding"),$(".post-toc-wrap")&&("block"===$(".site-overview-wrap").css("display")?$(".post-toc-wrap").removeClass("motion-element"):$(".post-toc-wrap").addClass("motion-element"))}};c.init(),NexT.motion.integrator={queue:[],cursor:-1,add:function(i){return this.queue.push(i),this},next:function(){this.cursor++;var i=this.queue[this.cursor];$.isFunction(i)&&i(NexT.motion.integrator)},bootstrap:function(){this.next()}},NexT.motion.middleWares={logo:function(i){function t(i,t){return{e:$(i),p:{translateX:t},o:{duration:500,sequenceQueue:!1}}}function e(i){return i=Array.isArray(i)?i:[i],i.every(function(i){return $.isFunction(i.size)&&i.size()>0})}var o=[],n=$(".brand"),s=$(".site-title"),r=$(".site-subtitle"),a=$(".logo-line-before i"),l=$(".logo-line-after i");n.size()>0&&o.push({e:n,p:{opacity:1},o:{duration:200}}),NexT.utils.isMist()&&e([a,l])&&o.push(t(a,"100%"),t(l,"-100%")),e(s)&&o.push({e:s,p:{opacity:1,top:0},o:{duration:200}}),e(r)&&o.push({e:r,p:{opacity:1,top:0},o:{duration:200}}),CONFIG.motion.async&&i.next(),o.length>0?(o[o.length-1].o.complete=function(){i.next()},$.Velocity.RunSequence(o)):i.next()},menu:function(i){CONFIG.motion.async&&i.next(),$(".menu-item").velocity("transition.slideDownIn",{display:null,duration:200,complete:function(){i.next()}})},postList:function(i){function t(){var t=window.postMotionOptions||{stagger:100,drag:!0};t.complete=function(){CONFIG.motion.transition.sidebar&&(NexT.utils.isPisces()||NexT.utils.isGemini())&&d.css({transform:"initial"}),i.next()},CONFIG.motion.transition.post_block&&e.velocity("transition."+o,t),CONFIG.motion.transition.post_header&&n.velocity("transition."+s,t),CONFIG.motion.transition.post_body&&r.velocity("transition."+a,t),CONFIG.motion.transition.coll_header&&l.velocity("transition."+c,t),CONFIG.motion.transition.sidebar&&(NexT.utils.isPisces()||NexT.utils.isGemini())&&d.velocity("transition."+u,t)}var e=$(".post-block, .pagination, .comments"),o=CONFIG.motion.transition.post_block,n=$(".post-header"),s=CONFIG.motion.transition.post_header,r=$(".post-body"),a=CONFIG.motion.transition.post_body,l=$(".collection-title, .archive-year"),c=CONFIG.motion.transition.coll_header,d=$(".sidebar-inner"),u=CONFIG.motion.transition.sidebar,h=e.size()>0;h?t():i.next(),CONFIG.motion.async&&i.next()},sidebar:function(i){"always"===CONFIG.sidebar.display&&NexT.utils.displaySidebar(),i.next()}}});
//rebuild by neat 