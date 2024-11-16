import{r as t,a as w,K as E,j as e,C as P,F as s,R as D,o as F,M as A,O as j,y as g,P as I,Q as N,ap as L,aq as R}from"./index-5a5fd040.js";import{B as q}from"./BreadcrumbWidget-c34707b9.js";import{A as b}from"./Alert-197a5ec7.js";const B=t.memo(()=>{const{t:o}=w(),[i,y]=t.useState(""),[n,l]=t.useState(""),[c,d]=t.useState(""),[u,U]=t.useState(""),[m,p]=t.useState(""),[f,C]=t.useState("");t.useEffect(()=>{const r=E(N,async a=>{if(a){y(a.uid),U(a.email);const v=j(g,"webAppUsers",a.uid),x=await I(v);if(x.exists()){const h=x.data();l(h.firstName||""),d(h.lastName||"")}else console.log("No user data found in Firestore.")}});return()=>r()},[]);const S=async r=>{r.preventDefault();try{if(!i)throw new Error("User not logged in.");await L(N.currentUser,{displayName:n});const a=j(g,"webAppUsers",i);await R(a,{firstName:n,lastName:c,email:u}),C("Profile updated successfully."),p("")}catch(a){console.error("Error updating profile:",a.message),p("Failed to update profile: "+a.message)}};return e.jsxs(t.Fragment,{children:[e.jsx(q,{title:o("Update")}),e.jsxs(P,{className:"section-padding",children:[e.jsx("h1",{className:"text-center mb-4",children:o("Update")}),m&&e.jsx(b,{variant:"danger",children:m}),f&&e.jsx(b,{variant:"success",children:f}),e.jsx(s,{onSubmit:S,children:e.jsx(D,{className:"justify-content-center",children:e.jsxs(F,{md:"6",children:[e.jsxs(s.Group,{controlId:"formFirstName",className:"mb-3",children:[e.jsx(s.Label,{children:o("form.first_name")}),e.jsx(s.Control,{type:"text",required:!0,value:n,onChange:r=>l(r.target.value)})]}),e.jsxs(s.Group,{controlId:"formLastName",className:"mb-3",children:[e.jsx(s.Label,{children:o("form.last_name")}),e.jsx(s.Control,{type:"text",required:!0,value:c,onChange:r=>d(r.target.value)})]}),e.jsxs(s.Group,{controlId:"formEmail",className:"mb-3",children:[e.jsx(s.Label,{children:o("form.email")}),e.jsx(s.Control,{type:"email",required:!0,value:u,disabled:!0})]}),e.jsx(A,{variant:"primary",type:"submit",children:o("Update")})]})})})]})]})});B.displayName="UserProfilePage";export{B as default};