import{r as e,j as a}from"./index-5a5fd040.js";const x=a.jsx("span",{children:a.jsx("i",{className:"fa fa-star","aria-hidden":"true"})}),g=a.jsx("span",{children:a.jsx("i",{className:"fa fa-star"})}),d=e.memo(function({count:l,count1:c,starColor:m,inactiveColor:o="text-white",activeColor:f=m,onChange:h}){const j=Array.from({length:l},()=>x),u=Array.from({length:c},()=>g),i=t=>{h(t+1)};return a.jsxs("div",{children:[j.map((t,s)=>{let r=o;return s<l&&(r=f),a.jsx("span",{className:"star me-1 "+r,onClick:()=>i(s),children:t},s)}),u.map((t,s)=>{let r;return s<c&&(r=o),a.jsx("span",{className:"star me-1 "+r,onClick:()=>i(s),children:t},s)})]})}),p=e.memo(n=>a.jsx(e.Fragment,{children:a.jsx(d,{count1:n.count1,count:n.count,starColor:n.starColor})}));p.displayName="RatingStar";export{p as R};
