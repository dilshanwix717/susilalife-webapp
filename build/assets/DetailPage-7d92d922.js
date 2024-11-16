import{r as o,a as f,z as _,j as e,C as p,R as c,o as m,L as l,N as n,e as t}from"./index-5a5fd040.js";import{F as w,R as N,S as y}from"./fslight-box-7551b57c.js";import{S as C}from"./SusilaOriginals-3c4b8274.js";import{R as k}from"./rating-star-836c1674.js";import{V as R}from"./VideoJs-6064087e.js";import{u as S}from"./usePage-a5a5532b.js";import{F as q}from"./index-ccffd98d.js";import{C as L}from"./choice-73387a90.js";import{T as r}from"./Tab-09247483.js";import"./SectionSlider-f9026f72.js";import"./swiper-slide-93824bd1.js";import"./ViewAll-c3907468.js";import"./BreadcrumbWidget-c34707b9.js";import"./interceptor-00bddfa3.js";import"./video.es-d27641c8.js";const $=o.memo(()=>{const[h,g]=o.useState(!1),x=()=>{g(!h)},{t:a}=f();S();const b=[{value:`${a("header.playlist")}`,label:`${a("header.playlist")}`},{value:`${a("detail_page.zombie_island")}`,label:`${a("detail_page.zombie_island")}`},{value:`${a("detail_page.sand_dust")}`,label:`${a("detail_page.sand_dust")}`},{value:`${a("detail_page.jumbo_queen")}`,label:`${a("detail_page.jumbo_queen")}`}],j=_.useRef(null),u={autoplay:!1,controls:!0,responsive:!0,techOrder:["youtube"],sources:[{src:"https://www.youtube.com/watch?v=QCGq1epI9pQ",type:"video/youtube"}],youtube:{iv_load_policy:1}},v=i=>{j.current=i,i.on("waiting",()=>{videojs.log("player is waiting")}),i.on("dispose",()=>{videojs.log("player will dispose")})},s={id:1,slug:"zombie-world",thumbnail:t("/assets/images/genre/01.webp"),title:"detail_page.zombie_island",detail:"detail_page.movie_desc",season_type:"2 Season",certificate:"Adventure",rating:4.5,likes:9,rating_from:"Imdb",geners:["home.action","home.adventure","ott_home.drama"],tags:["ott_home.brother","ott_home.brother_relationship","ott_home.kings","ott_home.vikings"],video_link:"",video_type:"video",is_restricted:!1,cast:[{title:"ott_home.james_chinlund",thumbnail:t("/assets/images/genre/g1.webp"),as:"detail_page.as_james"},{title:"detail_page.james_earl",thumbnail:t("/assets/images/genre/g2.webp"),as:"detail_page.as_jones"}],crew:[{title:"detail_page.jeff_nathanson",thumbnail:t("/assets/images/genre/g3.webp"),as:"detail_page.writing"},{title:"detail_page.irene_mecchi",thumbnail:t("/assets/images/genre/g5.webp"),as:"detail_page.writing"},{title:"detail_page.karan_gilchrist",thumbnail:t("/assets/images/genre/g4.webp"),as:"detail_page.production"}],created_by_username:"Admin",created_at:"Feb 2019",ranking:"#1 in Series Today ",date:"Nov 2020"};return e.jsxs(o.Fragment,{children:[e.jsx("div",{className:"iq-main-slider site-video",children:e.jsx(p,{fluid:!0,children:e.jsx(c,{children:e.jsx(m,{lg:"12",children:e.jsx("div",{className:"pt-0",children:e.jsx(R,{options:u,onReady:v})})})})})}),e.jsx("div",{className:"details-part",children:e.jsx(p,{fluid:!0,children:e.jsx(c,{children:e.jsxs(m,{lg:"12",children:[e.jsx("div",{className:"trending-info mt-4 pt-0 pb-4",children:e.jsxs(c,{children:[e.jsxs(m,{md:"9",className:"mb-auto",children:[e.jsxs("div",{className:"d-block d-lg-flex align-items-center",children:[e.jsx("h2",{className:"trending-text fw-bold texture-text text-uppercase my-0 fadeInLeft animated d-inline-block",children:a(s.title)}),e.jsxs("div",{className:"slider-ratting d-flex align-items-center ms-lg-3 ms-0",children:[e.jsx(k,{count:"4",count1:"1",starColor:"text-warning"}),e.jsxs("span",{className:"text-white ms-2",children:[s.rating," (imdb)"]})]})]}),e.jsx("ul",{className:"p-0 mt-2 list-inline d-flex flex-wrap movie-tag",children:s.geners.map((i,d)=>e.jsx("li",{className:"trending-list",children:e.jsx(l,{to:"/view-all",className:"text-primary text-capitalize",children:a(i)})},d))}),e.jsxs("div",{className:"d-flex flex-wrap align-items-center text-white text-detail flex-wrap mb-4",children:[e.jsx("span",{className:"badge bg-secondary",children:a("ott_home.horror")}),e.jsxs("span",{className:"ms-3 font-Weight-500 genres-info me-2",children:["1hr : 48mins"," "]}),e.jsx("span",{className:"trending-year trending-year-list font-Weight-500 genres-info ms-2",children:s.created_at})]}),e.jsxs("div",{className:"d-flex align-items-center gap-4 flex-wrap mb-4",children:[e.jsxs("ul",{className:"list-inline p-0 share-icons music-play-lists mb-n2 mx-n2",children:[e.jsxs("li",{className:"share",children:[e.jsx("span",{children:e.jsx("i",{className:"fa-solid fa-share-nodes"})}),e.jsxs("div",{className:"share-box",children:[e.jsx("svg",{width:"15",height:"40",viewBox:"0 0 15 40",className:"share-shape",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z",fill:"#191919"})}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(l,{to:"#",className:"share-ico",children:e.jsx("i",{className:"fa-brands fa-facebook-f"})}),e.jsx(l,{to:"#",className:"share-ico",children:e.jsx("i",{className:"fa-brands fa-twitter"})}),e.jsx(l,{to:"#",className:"share-ico",children:e.jsx("i",{className:"fa-solid fa-link"})})]})]})]}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("i",{className:"fa-solid fa-heart"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("i",{className:"fa-solid fa-plus"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("i",{className:"fa-solid fa-download"})})})]}),e.jsx("div",{className:"movie-detail-select",children:e.jsx(L,{options:b,className:"js-choice",select:"one"})})]}),e.jsxs("ul",{className:"iq-blogtag list-unstyled d-flex flex-wrap align-items-center gap-3 p-0",children:[e.jsxs("li",{className:"iq-tag-title text-primary mb-0",children:[e.jsx("i",{className:"fa fa-tags","aria-hidden":"true"}),a("detail_page.tags"),":"," "]}),s.tags.map((i,d)=>e.jsxs("li",{children:[e.jsx(l,{to:"/view-all",className:"title text-capitalize",children:a(i)}),e.jsx("span",{className:"text-secondary",children:","})]},d))]})]}),e.jsx(w,{image:s.thumbnail,handleToggle:x})]})}),e.jsx("div",{className:"content-details trending-info",children:e.jsxs(r.Container,{defaultActiveKey:"first",children:[e.jsx(n,{className:"iq-custom-tab tab-bg-gredient-center d-flex nav nav-pills align-items-center text-center mb-5 justify-content-center list-inline",children:e.jsxs(n,{variant:"",className:"nav-item",id:"nav-tab",role:"tablist",children:[e.jsx(n.Link,{eventKey:"first",variant:" d-flex align-items-center",id:"nav-description-tab","data-bs-toggle":"tab","data-bs-target":"#nav-description",type:"button",role:"tab","aria-controls":"nav-description","aria-selected":"true",children:a("detail_page.description")}),e.jsxs(n.Link,{eventKey:"second",variant:"",id:"nav-review-tab","data-bs-toggle":"tab","data-bs-target":"#nav-review",type:"button",role:"tab","aria-controls":"nav-review","aria-selected":"false",children:[a("detail_page.rate"),"& ",a("detail_page.review")]}),e.jsx(n.Link,{eventKey:"third",variant:"",id:"nav-sources-tab","data-bs-toggle":"tab","data-bs-target":"#nav-sources",type:"button",role:"tab","aria-controls":"nav-sources","aria-selected":"false",children:a("restricted.sources")})]})}),e.jsxs(r.Content,{children:[e.jsx(r.Pane,{className:" fade show",eventKey:"first",id:"nav-description",role:"tabpanel","aria-labelledby":"nav-description-tab",children:e.jsx("p",{children:a(s.detail)})}),e.jsx(r.Pane,{className:" fade",id:"nav-review",eventKey:"second",role:"tabpanel","aria-labelledby":"nav-review-tab",children:e.jsx(N,{})}),e.jsx(r.Pane,{className:" fade",id:"nav-sources",eventKey:"third",role:"tabpanel","aria-labelledby":"nav-sources-tab",children:e.jsx(y,{})})]})]})})]})})})}),e.jsx(C,{viewAll:!1,paddingY:"my-4 pt-2",title:"home.upcoming"}),e.jsx(q,{maxYoutubeVideoDimensions:{width:1e3,height:600},exitFullscreenOnClose:!0,toggler:h,sources:["https://www.youtube.com/watch?v=QCGq1epI9pQ"]})]})});$.displayName="VideoDetail";export{$ as default};