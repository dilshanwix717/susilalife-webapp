import{r as j,u as O,j as r,C as M,L as C}from"./index-5a5fd040.js";import{g as S,b as I,S as k,a as V,N as B}from"./swiper-slide-93824bd1.js";import"./ViewAll-c3907468.js";function D({swiper:e,extendParams:d,on:l,emit:t}){let o;e.autoplay={running:!1,paused:!1},d({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function s(){if(!e.size){e.autoplay.running=!1,e.autoplay.paused=!1;return}const a=e.slides.eq(e.activeIndex);let n=e.params.autoplay.delay;a.attr("data-swiper-autoplay")&&(n=a.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(o),o=I(()=>{let u;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),u=e.slidePrev(e.params.speed,!0,!0),t("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?i():(u=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),t("autoplay")):(u=e.slidePrev(e.params.speed,!0,!0),t("autoplay")):e.params.loop?(e.loopFix(),u=e.slideNext(e.params.speed,!0,!0),t("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?i():(u=e.slideTo(0,e.params.speed,!0,!0),t("autoplay")):(u=e.slideNext(e.params.speed,!0,!0),t("autoplay")),(e.params.cssMode&&e.autoplay.running||u===!1)&&s()},n)}function x(){return typeof o<"u"||e.autoplay.running?!1:(e.autoplay.running=!0,t("autoplayStart"),s(),!0)}function i(){return!e.autoplay.running||typeof o>"u"?!1:(o&&(clearTimeout(o),o=void 0),e.autoplay.running=!1,t("autoplayStop"),!0)}function c(a){e.autoplay.running&&(e.autoplay.paused||(o&&clearTimeout(o),e.autoplay.paused=!0,a===0||!e.params.autoplay.waitForTransition?(e.autoplay.paused=!1,s()):["transitionend","webkitTransitionEnd"].forEach(n=>{e.$wrapperEl[0].addEventListener(n,f)})))}function m(){const a=S();a.visibilityState==="hidden"&&e.autoplay.running&&c(),a.visibilityState==="visible"&&e.autoplay.paused&&(s(),e.autoplay.paused=!1)}function f(a){!e||e.destroyed||!e.$wrapperEl||a.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(n=>{e.$wrapperEl[0].removeEventListener(n,f)}),e.autoplay.paused=!1,e.autoplay.running?s():i())}function p(){e.params.autoplay.disableOnInteraction?i():(t("autoplayPause"),c()),["transitionend","webkitTransitionEnd"].forEach(a=>{e.$wrapperEl[0].removeEventListener(a,f)})}function v(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,t("autoplayResume"),s())}function b(){e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",p),e.$el.on("mouseleave",v))}function E(){e.$el.off("mouseenter",p),e.$el.off("mouseleave",v)}l("init",()=>{e.params.autoplay.enabled&&(x(),S().addEventListener("visibilitychange",m),b())}),l("beforeTransitionStart",(a,n,u)=>{e.autoplay.running&&(u||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(n):i())}),l("sliderFirstMove",()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?i():c())}),l("touchEnd",()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&s()}),l("destroy",()=>{E(),e.autoplay.running&&i(),S().removeEventListener("visibilitychange",m)}),Object.assign(e.autoplay,{pause:c,run:s,start:x,stop:i})}const A=[D,B];function F(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var d=Math.random()*16|0,l=e=="x"?d:d&3|8;return l.toString(16)})}const P=j.memo(({children:e,title:d,list:l,slidesPerView:t=6,loop:o=!1,spaceBetween:s=0,className:x="",link:i,viewAll:c,wrapperClass:m,paddingY:f="",slideSmall:p=2,slideMedium:v=3,cardClass:b=!0,swiperClass:E,onClick:a})=>{const n=j.useRef(null),{setViewData:u,setArrayTitle:$}=O(),h=y=>{L(y)},L=y=>{if(n.current&&y){n.current.querySelectorAll(".swiper-slide").forEach(N=>N.classList.remove("last"));const g=n.current.querySelectorAll(".swiper-slide-visible"),T=g[g.length-1];setTimeout(()=>{T&&T.classList.add("swiper-active","last")},0)}};return r.jsx("div",{className:x,children:r.jsx(M,{fluid:!0,children:r.jsxs("div",{className:`overflow-hidden ${b?"card-style-slider":""}`,ref:n,children:[r.jsxs("div",{className:`d-flex align-items-center justify-content-between px-md-3 px-1 mb-4 ${f}`,children:[r.jsx("h5",{className:"main-title text-capitalize mb-0",children:d}),console.log("print list===>",l),c===!1?"":r.jsx(C,{to:i||"/view-all",className:"text-primary iq-view-all text-decoration-none",onClick:()=>{u(l),$(d)},children:"View All"})]}),r.jsxs(k,{className:`position-relative swiper swiper-card ${m?"wrapper-class":""} ${E}`,slidesPerView:t,loop:o,watchSlidesProgress:!0,spaceBetween:s,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},breakpoints:{0:{slidesPerView:p,spaceBetween:0},576:{slidesPerView:p,spaceBetween:0},768:{slidesPerView:v,spaceBetween:0},1025:{slidesPerView:t,spaceBetween:0},1500:{slidesPerView:t,spaceBetween:0}},onSwiper:h,onSlideChange:h,modules:A,children:[l.map((y,g)=>r.jsx(V,{tag:"li",children:e(y)},g+F()+"slider")),r.jsx("div",{className:"swiper-button swiper-button-next"}),r.jsx("div",{className:"swiper-button swiper-button-prev"})]})]})})})});P.displayName="SectionSlider";export{P as S};