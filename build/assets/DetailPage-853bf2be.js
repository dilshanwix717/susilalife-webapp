import{r as a,a as h,b as j,t as u,u as v,j as e,C as m,R as f,o as N,N as t,L as n}from"./index-5a5fd040.js";import{u as w}from"./usePage-a5a5532b.js";import{S as b,N as g,a as y}from"./swiper-slide-93824bd1.js";import{H as S}from"./HLS-e3a705c9.js";import{T as r}from"./Tab-09247483.js";const V=a.memo(()=>{const{t:x}=h();a.useRef(null),w();const d=j(u),{selectedVideoData:s,selectedVideoArray:l,setSelectedVideoData:c,setSelectedVideoArray:o}=v();return e.jsxs(a.Fragment,{children:[e.jsx("div",{className:"iq-main-slider site-video",children:s&&s.video_url&&e.jsx(S,{videoSource:s.video_url})}),e.jsx("div",{className:"details-part",children:e.jsxs(m,{fluid:!0,children:[e.jsx("div",{className:"trending-info mt-4 pt-0 pb-4",children:e.jsx(f,{children:e.jsxs(N,{md:9,className:"col-12 mb-auto",children:[e.jsx("div",{className:"d-md-flex",children:e.jsxs("h2",{className:"trending-text fw-bold texture-text text-uppercase mt-0 fadeInLeft animated",children:[s.title," | "]})}),e.jsxs("ul",{className:"p-0 mt-2 list-inline d-flex flex-wrap movie-tag",children:[e.jsx("li",{className:"font-size-18",children:s.title}),e.jsx("li",{className:"font-size-18",children:s.subcategory})]}),e.jsxs("ul",{className:"list-inline p-0 share-icons music-play-lists mb-n2 mx-n2",children:[e.jsx("li",{children:e.jsx("span",{children:e.jsx("i",{className:"fa-solid fa-heart"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("i",{className:"fa-solid fa-plus"})})})]})]})})}),e.jsx("div",{className:"content-details trending-info",children:e.jsxs(r.Container,{defaultActiveKey:"first",children:[e.jsx(t,{className:"iq-custom-tab tab-bg-gredient-center d-flex nav nav-pills align-items-center text-center mb-5 justify-content-center list-inline",children:e.jsx(t.Item,{children:e.jsx(t.Link,{eventKey:"first",variant:" d-flex align-items-center",children:x("episode_page.description")})})}),e.jsx(r.Content,{children:e.jsx(r.Pane,{eventKey:"first",children:e.jsx("p",{children:s.description})})})]})})]})}),e.jsx("div",{className:"recommended-block",children:e.jsx(m,{fluid:!0,children:e.jsxs("div",{className:"overflow-hidden",children:[e.jsx("div",{className:"d-flex align-items-center justify-content-between px-3 pt-2 my-4",children:e.jsx("h5",{className:"main-title text-capitalize mb-0",children:"Latest Movies"})}),e.jsx("div",{className:"card-style-slider",children:e.jsxs(b,{dir:d,slidesPerView:4,modules:[g],loop:!0,spaceBetween:5,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},breakpoints:{0:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:2},1025:{slidesPerView:4},1500:{slidesPerView:4}},children:[l.map((i,p)=>e.jsx(y,{children:e.jsxs("div",{className:"episode-block",children:[e.jsxs("div",{className:"block-image position-relative",children:[e.jsx(n,{to:"/episodes",children:e.jsx("img",{src:i.thumbnail_url,alt:"showImg",className:"img-fluid img-zoom",loading:"lazy"})}),e.jsxs("div",{className:"episode-number",children:["S",i.season,"-E",i.episode]}),e.jsx("div",{className:"episode-play",children:e.jsx(n,{to:"/episodes",onClick:()=>{o(l),c(i),window.scrollTo(0,0)},children:e.jsx("i",{className:"fa-solid fa-play"})})})]}),e.jsx("div",{className:"epi-desc p-3",children:e.jsx(n,{to:"/episodes",onClick:()=>{o(l),c(i)},children:e.jsxs("h5",{className:"epi-name text-white mb-0",children:[i.title," E-",i.episode]})})})]})},p)),e.jsx("div",{className:"swiper-button swiper-button-next"}),e.jsx("div",{className:"swiper-button swiper-button-prev"})]},d)})]})})})]})});V.displayName="TvShowsDetail";export{V as default};