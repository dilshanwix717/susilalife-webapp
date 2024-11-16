import{r as T,ac as C,ad as P,j as a,ae as h,af as I,ag as _,ah as q,a2 as K,l as N,m as $,a7 as v}from"./index-5a5fd040.js";const L=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],U=["activeKey","getControlledId","getControllerId"],W=["as"];function y(n,t){if(n==null)return{};var e={};for(var o in n)if({}.hasOwnProperty.call(n,o)){if(t.indexOf(o)>=0)continue;e[o]=n[o]}return e}function A(n){let{active:t,eventKey:e,mountOnEnter:o,transition:i,unmountOnExit:r,role:u="tabpanel",onEnter:s,onEntering:E,onEntered:p,onExit:x,onExiting:l,onExited:d}=n,c=y(n,L);const b=T.useContext(C);if(!b)return[Object.assign({},c,{role:u}),{eventKey:e,isActive:t,mountOnEnter:o,transition:i,unmountOnExit:r,onEnter:s,onEntering:E,onEntered:p,onExit:x,onExiting:l,onExited:d}];const{activeKey:m,getControlledId:g,getControllerId:O}=b,f=y(b,U),j=P(e);return[Object.assign({},c,{role:u,id:g(e),"aria-labelledby":O(e)}),{eventKey:e,isActive:t==null&&j!=null?P(m)===j:t,transition:i||f.transition,mountOnEnter:o??f.mountOnEnter,unmountOnExit:r??f.unmountOnExit,onEnter:s,onEntering:E,onEntered:p,onExit:x,onExiting:l,onExited:d}]}const w=T.forwardRef((n,t)=>{let{as:e="div"}=n,o=y(n,W);const[i,{isActive:r,onEnter:u,onEntering:s,onEntered:E,onExit:p,onExiting:x,onExited:l,mountOnEnter:d,unmountOnExit:c,transition:b=I}]=A(o);return a.jsx(C.Provider,{value:null,children:a.jsx(h.Provider,{value:null,children:a.jsx(b,{in:r,onEnter:u,onEntering:s,onEntered:E,onExit:p,onExiting:x,onExited:l,mountOnEnter:d,unmountOnExit:c,children:a.jsx(e,Object.assign({},i,{ref:t,hidden:!r,"aria-hidden":!r}))})})})});w.displayName="TabPanel";const R=n=>{const{id:t,generateChildId:e,onSelect:o,activeKey:i,defaultActiveKey:r,transition:u,mountOnEnter:s,unmountOnExit:E,children:p}=n,[x,l]=_(i,r,o),d=q(t),c=T.useMemo(()=>e||((m,g)=>d?`${d}-${g}-${m}`:null),[d,e]),b=T.useMemo(()=>({onSelect:l,activeKey:x,transition:u,mountOnEnter:s||!1,unmountOnExit:E||!1,getControlledId:m=>c(m,"tabpane"),getControllerId:m=>c(m,"tab")}),[l,x,u,s,E,c]);return a.jsx(C.Provider,{value:b,children:a.jsx(h.Provider,{value:l||null,children:p})})};R.Panel=w;const z=R;function S(n){return typeof n=="boolean"?n?K:I:n}const B=({transition:n,...t})=>a.jsx(z,{...t,transition:S(n)});B.displayName="TabContainer";const D=B,k=T.forwardRef(({className:n,bsPrefix:t,as:e="div",...o},i)=>(t=N(t,"tab-content"),a.jsx(e,{ref:i,className:$(n,t),...o})));k.displayName="TabContent";const G=k,F=T.forwardRef(({bsPrefix:n,transition:t,...e},o)=>{const[{className:i,as:r="div",...u},{isActive:s,onEnter:E,onEntering:p,onEntered:x,onExit:l,onExiting:d,onExited:c,mountOnEnter:b,unmountOnExit:m,transition:g=K}]=A({...e,transition:S(t)}),O=N(n,"tab-pane");return a.jsx(C.Provider,{value:null,children:a.jsx(h.Provider,{value:null,children:a.jsx(g,{in:s,onEnter:E,onEntering:p,onEntered:x,onExit:l,onExiting:d,onExited:c,mountOnEnter:b,unmountOnExit:m,children:a.jsx(r,{...u,ref:o,className:$(i,O,s&&"active")})})})})});F.displayName="TabPane";const H=F,J={eventKey:v.oneOfType([v.string,v.number]),title:v.node.isRequired,disabled:v.bool,tabClassName:v.string,tabAttrs:v.object},M=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};M.propTypes=J;const V=Object.assign(M,{Container:D,Content:G,Pane:H});export{V as T};