import{r as t,a as c,j as o}from"./index-5a5fd040.js";import{S as m}from"./SectionSlider-f9026f72.js";import{a as n}from"./ViewAll-c3907468.js";import{h as l}from"./endPoints-af565a7d.js";const d=t.memo(s=>{c(),t.useState([]);const[a,r]=t.useState([]),i=async()=>{console.log("content Data Execute start");try{const e=await l();r(e.data.data)}catch(e){console.error("Error:",e)}};return t.useEffect(()=>{i()},[]),o.jsx(t.Fragment,{children:o.jsx(m,{title:"Movies We Recommend",list:a,className:"recommended-block streamit-block",paddingY:s.paddingY,children:e=>o.jsx(n,{image:e.thumbnail_url,title:e.title,watchlistLink:"/playlist",link:"/movies-detail",selectedVideo_Data:e,selectedVideo_Array:a})})})});d.displayName="RecommendedForYou";export{d as R};
