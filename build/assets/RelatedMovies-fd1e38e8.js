import{r as t,a as m,s as d,j as l}from"./index-5a5fd040.js";import{S as o}from"./SectionSlider-f9026f72.js";import{a as r}from"./ViewAll-c3907468.js";const n=t.memo(e=>{const{t:s}=m(),[a]=t.useState(d);return l.jsx(t.Fragment,{children:l.jsx(o,{title:s("form.related_videos"),list:a,className:"streamit-block",slidesPerView:5,viewAll:e.viewAll,slideMedium:e.slideMedium,paddingY:e.paddingY,children:i=>l.jsx(r,{image:i.image,title:s(i.title),movieTime:s(i.movieTime),watchlistLink:"/playlist",link:"/movies-detail"})})})});n.displayName="RelatedVideos";const c=t.memo(e=>{const{t:s}=m(),[a]=t.useState(d);return l.jsx(t.Fragment,{children:l.jsx(o,{title:s("form.related_movies"),list:a,className:"related-movie-block",slidesPerView:5,wrapperClass:!0,viewAll:e.viewAll,slideMedium:e.slideMedium,paddingY:e.paddingY,children:i=>l.jsx(r,{image:i.image,title:s(i.title),movieTime:i.movieTime,watchlistLink:"/playlist",link:"/movies-detail"})})})});c.displayName="RelatedMovies";export{c as R,n as a};
