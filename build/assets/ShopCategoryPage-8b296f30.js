import{r as n,a as f,j as s,L as t,E as V,F as H,o as h,R as x,S as y,b as M,G as k,C as Z,N as r}from"./index-5a5fd040.js";import{B as S}from"./BreadcrumbWidget-c34707b9.js";import{R as _}from"./rating-star-836c1674.js";import{P as w,n as C,p as $}from"./shop-cc94b22f.js";import{S as u}from"./sweetalert2-f9106ce1.js";import{C as P}from"./choice-73387a90.js";import{T as p}from"./Tab-09247483.js";const N=n.memo(a=>{const{t:e}=f(),[d,o]=n.useState(!1);return s.jsxs(n.Fragment,{children:[s.jsxs("div",{className:"shop-box",children:[s.jsx("h5",{className:"mb-4 text-uppercase",children:e("shop.product_categories")}),s.jsxs("ul",{className:"list-unstyled p-0 m-0 shop-list-checkbox",children:[s.jsx("li",{children:e("shop.activeman")}),s.jsxs("li",{children:[s.jsxs("div",{className:"d-flex align-items-center justify-content-between",children:[s.jsx("span",{children:e("shop.disney_world")}),s.jsx(t,{className:"checkbox me-3 me-md-0",onClick:()=>o(!d),to:"#",role:"button"})]}),s.jsx(V,{in:d,children:s.jsx("ul",{className:"list-unstyled ps-2 mt-3",children:s.jsx("li",{children:e("shop.fantasia")})})})]}),s.jsx("li",{children:e("shop.galaxy_heaven")}),s.jsx("li",{children:e("shop.haunted_halloween")}),s.jsx("li",{children:e("shop.marvel_studios")}),s.jsx("li",{children:e("shop.monster_house")}),s.jsx("li",{children:e("shop.quick_game")}),s.jsx("li",{children:e("shop.the_flashv")}),s.jsx("li",{children:e("shop.the_madrid")}),s.jsx("li",{children:e("shop.the_champion")}),s.jsx("li",{children:e("shop.uptight_birds")}),s.jsx("li",{children:e("shop.warner_bros_films")})]})]}),s.jsxs("div",{className:"shop-box",children:[s.jsx("h5",{className:"",children:e("shop.price_filter")}),s.jsx("div",{className:"form-group my-4 product-range",children:s.jsx("div",{className:"range-slider",id:"product-price-range",children:s.jsx(H.Range,{min:0,max:50,step:5,defaultValue:10})})}),s.jsxs("div",{className:" d-flex align-items-center my-3",children:[s.jsxs("small",{children:[e("shop.price")," :  "]}),s.jsx("small",{id:"lower-value",children:"  $11"}),s.jsx("small",{id:"lower-value1",children:"  -  "}),s.jsx("small",{id:"upper-value",children:" $50"})]})]}),s.jsxs("div",{className:"shop-box",children:[s.jsx("h5",{className:"mb-4",children:e("shop.product_size")}),s.jsxs("ul",{className:"shop_list_checkbox list-unstyled",children:[s.jsxs("li",{children:[s.jsx("label",{className:"shop_checkbox_label",children:"L"}),s.jsx("input",{type:"hidden",value:"L"})]}),s.jsxs("li",{children:[s.jsx("label",{className:"shop_checkbox_label",children:"M"}),s.jsx("input",{type:"hidden",value:"M"})]}),s.jsxs("li",{children:[s.jsx("label",{className:"shop_checkbox_label",children:"S"}),s.jsx("input",{type:"hidden",value:"S"})]})]})]}),s.jsxs("div",{className:"shop-box border-bottom-0",children:[s.jsx("h5",{className:"mb-4",children:e("shop.product")}),a.children]})]})});N.displayName="ShopCategorySidebar";const v=n.memo(a=>{const{t:e}=f(),[d,o]=n.useState(!1),m=()=>o(!1),c=()=>o(!0),l=()=>{u.fire({title:`${e("sweetalert.added")}`,text:`${e("sweetalert.added_to_cart")}`,icon:"success",confirmButtonText:`${e("sweetalert.ok_btn")}`,background:"#141314",color:"#ffffff"})},i=()=>{u.fire({title:`${e("sweetalert.added")}`,text:`${e("sweetalert.added_to_wishlist")}`,icon:"success",confirmButtonText:`${e("sweetalert.ok_btn")}`,background:"#141314",color:"#ffffff"})},b=a.is_sale,g=a.is_new;return s.jsxs(n.Fragment,{children:[s.jsx(h,{children:s.jsx("div",{className:"product-block product-list",children:s.jsxs(x,{children:[s.jsxs(h,{md:"4",className:"ps-0",children:[b?s.jsx("span",{className:"onsale bg-primary",children:e("shop.sale!")}):g?s.jsx("span",{className:"onsale bg-primary",children:e("shop.new!")}):"",s.jsxs("div",{className:"image-wrap",children:[s.jsx(t,{to:"/product-detail",children:s.jsx("div",{className:"product-image",children:s.jsx("img",{src:a.thumbnail,className:"img-fluid w-100",alt:"",loading:"lazy"})})}),s.jsx("div",{className:"buttons-holder",children:s.jsx("ul",{className:"list-unstyled m-0 p-0",children:s.jsx("li",{children:s.jsx(t,{className:"sq-btn",to:"#}",onClick:c,children:s.jsx("i",{className:"fa fa-eye","aria-hidden":"true"})})})})})]})]}),s.jsx(h,{lg:"8",md:"8",children:s.jsxs("div",{className:"product-caption",children:[s.jsx("h5",{className:"product__title",children:s.jsx(t,{to:"/product-detail",className:"product-title-link",children:e(a.product_name)})}),s.jsx("div",{className:"price-detail",children:s.jsxs("span",{className:"price",children:[s.jsx("del",{children:a.price})," ",a.final_price]})}),s.jsx("div",{className:"container-rating",children:s.jsx("div",{className:"star-rating text-primary",children:s.jsx(_,{count:a.rating,count1:a.count1,starColor:"text-warning"})})}),s.jsxs("ul",{className:"iq-button-holder list-inline d-flex flex-wrap gap-3",children:[s.jsx("li",{children:s.jsx("div",{className:"iq-button",children:s.jsxs(t,{to:"#",className:"btn btn-sm cart-btn text-uppercase position-relative",onClick:l,children:[s.jsx("span",{className:"button-text",children:e("shop.add_to_cart")}),s.jsx("i",{className:"fa-solid fa-play"})]})})}),s.jsx("li",{children:s.jsx(t,{to:"#",className:"add_to_wishlist wishlist-btn",onClick:i,children:s.jsx("i",{className:"far fa-heart"})})})]}),s.jsx("p",{className:"blog-desc line-count-2",children:e("shop.desc1")})]})})]})})}),s.jsx(w,{show:d,handleClose:m})]})});v.displayName="CardShopListView";const j=n.memo(a=>{const{t:e}=f(),d=()=>{u.fire({title:`${e("sweetalert.added")}`,text:`${e("sweetalert.added_to_cart")}`,icon:"success",confirmButtonText:`${e("sweetalert.ok_btn")}`,background:"#141314",color:"#ffffff"})},o=()=>{u.fire({title:`${e("sweetalert.added")}`,text:`${e("sweetalert.added_to_wishlist")}`,icon:"success",confirmButtonText:`${e("sweetalert.ok_btn")}`,background:"#141314",color:"#ffffff"})},[m,c]=n.useState(!1),l=()=>c(!1),i=()=>c(!0),b=a.is_sale,g=a.is_new;return s.jsxs(n.Fragment,{children:[s.jsxs("div",{className:"product-block",children:[b?s.jsx("span",{className:"onsale bg-primary",children:e("shop.sale!")}):g?s.jsx("span",{className:"onsale bg-primary",children:e("shop.new!")}):"",s.jsxs("div",{className:"image-wrap",children:[s.jsx(t,{to:"/product-detail",children:s.jsx("div",{className:"product-image",children:s.jsx("img",{src:a.thumbnail,className:"img-fluid w-100",alt:"",loading:"lazy"})})}),s.jsx("div",{className:"buttons-holder",children:s.jsxs("ul",{className:"list-unstyled m-0 p-0",children:[s.jsx("li",{children:s.jsx(t,{className:"sq-btn",to:"#",onClick:i,children:s.jsx("i",{className:"fa fa-eye","aria-hidden":"true"})})}),s.jsx("li",{children:s.jsx("div",{className:"on-first-load",children:s.jsx("div",{className:"add-button",children:s.jsx(t,{to:"#",className:"add_to_wishlist",onClick:o,children:s.jsx("i",{className:"fa fa-heart"})})})})}),s.jsx("li",{children:s.jsx(t,{to:"#",className:"added_to_cart d-flex align-items-center",onClick:d,children:s.jsx("i",{className:"fa-solid fa-basket-shopping"})})})]})})]}),s.jsxs("div",{className:"product-caption",children:[s.jsx("h5",{className:"product__title",children:s.jsxs(t,{to:"/product-detail",className:"title-link",children:[" ",a.product_name]})}),s.jsx("div",{className:"price-detail",children:s.jsxs("div",{className:"price",children:[s.jsx("del",{children:a.price}),a.final_price]})}),s.jsx("div",{className:"container-rating",children:s.jsx("div",{className:"star-rating text-primary",children:s.jsx(_,{count:a.rating,count1:a.count1,starColor:"text-warning"})})})]})]}),s.jsx(w,{show:m,handleClose:l})]})});j.displayName="CardShopGridView";const{hero_slider:G,shop_category:W,shop_products:D,shop_banner_slider:J,new_product:B,best_seller:O,my_wishlist:Q,my_cart:U}=y.actions,K=()=>a=>{setTimeout(()=>{a(B(C))},3e3)},L=a=>a.shop.newProduct,T=n.memo(a=>{const{t:e}=f(),d=[{value:`${e("shop.default_sorting")}`,label:`${e("shop.default_sorting")}`},{value:`${e("shop.sort_by_popularity")}`,label:`${e("shop.sort_by_popularity")}`},{value:`${e("shop.sort_by_rating")}`,label:`${e("shop.sort_by_rating")}`},{value:`${e("shop.sort_by_latest")}`,label:`${e("shop.sort_by_latest")}`},{value:`${e("shop.price_low_to_high")}`,label:`${e("shop.price_low_to_high")}`},{value:`${e("shop.price_high_to_low")}`,label:`${e("shop.price_high_to_low")}`}],o=M(L),m=k();n.useEffect(()=>{m(K())});let c=$;return s.jsxs(n.Fragment,{children:[s.jsx(S,{title:e("header.shop")}),s.jsx("div",{className:"section-padding",children:s.jsx(Z,{children:s.jsxs(x,{children:[s.jsx(h,{lg:"3",children:s.jsx(N,{children:o.map((l,i)=>s.jsx("span",{children:s.jsx("ul",{className:"list-unstyled m-0 p-0 shop-product",children:s.jsxs("li",{className:"d-flex align-items-center mb-4",children:[s.jsx("div",{className:"top-product-img pe-3",children:s.jsx("img",{src:l.thumbnail,className:"img-fluid"})}),s.jsxs("div",{className:"",children:[s.jsx(t,{to:"/product-detail",className:"",children:e(l.product_name)}),s.jsxs("div",{children:[s.jsx("del",{children:l.price})," ",l.final_price]})]})]})})},i))})}),s.jsx(h,{xl:"9",children:s.jsxs(p.Container,{defaultActiveKey:"third",children:[s.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-5 shop-filter flex-wrap",children:[s.jsx("p",{children:e("shop.showing")}),s.jsxs("div",{className:"d-flex align-items-center",children:[s.jsx("div",{className:"product-view-button",children:s.jsxs(r,{as:"ul",id:"pills-tab",className:"nav_shop nav d-flex nav-pills mb-0 iq-product-filter d-flex bg-transparent align-items-center list-inline",role:"tablist",children:[s.jsx(r.Item,{as:"li",className:"nav-item",role:"presentation",children:s.jsx(r.Link,{id:"list-view-tab",className:"btn-sm btn-icon rounded-pill p-0","data-toggle":"pill","data-bs-target":"#pills-list-view",eventKey:"first",role:"tab","aria-selected":"true",children:s.jsx("span",{className:"btn-inner",children:s.jsxs("svg",{className:"hover_effect active_effect",width:"18",height:"16",viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsxs("g",{clipPath:"url(#clip0_1379_355)",children:[s.jsx("path",{d:"M3.42857 0H0V3.42857H3.42857V0Z",fill:""}),s.jsx("path",{d:"M18 0.857422H6V2.57171H18V0.857422Z",fill:""}),s.jsx("path",{d:"M3.42857 6H0V9.42857H3.42857V6Z",fill:""}),s.jsx("path",{d:"M18 6.85742H6V8.57171H18V6.85742Z",fill:""}),s.jsx("path",{d:"M3.42857 12H0V15.4286H3.42857V12Z",fill:""}),s.jsx("path",{d:"M18 12.8574H6V14.5717H18V12.8574Z",fill:""})]}),s.jsx("defs",{children:s.jsx("clipPath",{id:"clip0_1379_355",children:s.jsx("rect",{width:"18",height:"15.4286",fill:""})})})]})})})}),s.jsx(r.Item,{as:"li",className:"nav-item",role:"presentation",children:s.jsx(r.Link,{id:"grid-view-tab",className:"nav-link btn-sm btn-icon rounded-pill p-0","data-toggle":"pill","data-bs-target":"#pills-grid-view",eventKey:"second",role:"tab","aria-selected":"false",children:s.jsx("span",{className:"btn-inner",children:s.jsxs("svg",{className:"hover_effect active_effect",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M8.57143 0H0V8.57143H8.57143V0Z",fill:""}),s.jsx("path",{d:"M17.9999 0H9.42847V8.57143H17.9999V0Z",fill:""}),s.jsx("path",{d:"M8.57143 9.42871H0V18.0001H8.57143V9.42871Z",fill:""}),s.jsx("path",{d:"M17.9999 9.42871H9.42847V18.0001H17.9999V9.42871Z",fill:""})]})})})}),s.jsx(r.Item,{as:"li",className:"nav-item",role:"presentation",children:s.jsx(r.Link,{id:"grid-three-view-tab",className:"nav-link btn-sm btn-icon rounded-pill p-0","data-toggle":"pill","data-bs-target":"#pills-grid-three-view-tab",eventKey:"third",role:"tab","aria-selected":"false",children:s.jsx("span",{className:"btn-inner",children:s.jsxs("svg",{className:"hover_effect active_effect",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M4.90909 0H0V4.90909H4.90909V0Z",fill:""}),s.jsx("path",{d:"M11.4545 0H6.54541V4.90909H11.4545V0Z",fill:""}),s.jsx("path",{d:"M17.9999 0H13.0908V4.90909H17.9999V0Z",fill:""}),s.jsx("path",{d:"M4.90909 6.5459H0V11.455H4.90909V6.5459Z",fill:""}),s.jsx("path",{d:"M11.4545 6.5459H6.54541V11.455H11.4545V6.5459Z",fill:""}),s.jsx("path",{d:"M17.9999 6.5459H13.0908V11.455H17.9999V6.5459Z",fill:""}),s.jsx("path",{d:"M4.90909 13.0908H0V17.9999H4.90909V13.0908Z",fill:""}),s.jsx("path",{d:"M11.4545 13.0908H6.54541V17.9999H11.4545V13.0908Z",fill:""}),s.jsx("path",{d:"M17.9999 13.0908H13.0908V17.9999H17.9999V13.0908Z",fill:""})]})})})}),s.jsx(r.Item,{as:"li",className:"nav-item",role:"presentation",children:s.jsx(r.Link,{id:"grid-four-view-tab",className:"nav-link btn-sm btn-icon rounded-pill p-0","data-toggle":"pill","data-bs-target":"#pills-grid-four-view-tab",eventKey:"forth",role:"tab","aria-selected":"false",children:s.jsx("span",{className:"btn-inner",children:s.jsxs("svg",{className:"hover_effect active_effect",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M3.85714 0H0V3.85714H3.85714V0Z",fill:""}),s.jsx("path",{d:"M8.5715 0H4.71436V3.85714H8.5715V0Z",fill:""}),s.jsx("path",{d:"M13.2856 0H9.42847V3.85714H13.2856V0Z",fill:""}),s.jsx("path",{d:"M18 0H14.1428V3.85714H18V0Z",fill:""}),s.jsx("path",{d:"M3.85714 4.71387H0V8.57101H3.85714V4.71387Z",fill:""}),s.jsx("path",{d:"M8.5715 4.71387H4.71436V8.57101H8.5715V4.71387Z",fill:""}),s.jsx("path",{d:"M13.2856 4.71387H9.42847V8.57101H13.2856V4.71387Z",fill:""}),s.jsx("path",{d:"M18 4.71387H14.1428V8.57101H18V4.71387Z",fill:""}),s.jsx("path",{d:"M3.85714 9.42871H0V13.2859H3.85714V9.42871Z",fill:""}),s.jsx("path",{d:"M8.5715 9.42871H4.71436V13.2859H8.5715V9.42871Z",fill:""}),s.jsx("path",{d:"M13.2856 9.42871H9.42847V13.2859H13.2856V9.42871Z",fill:""}),s.jsx("path",{d:"M18 9.42871H14.1428V13.2859H18V9.42871Z",fill:""}),s.jsx("path",{d:"M3.85714 14.1426H0V17.9997H3.85714V14.1426Z",fill:""}),s.jsx("path",{d:"M8.5715 14.1426H4.71436V17.9997H8.5715V14.1426Z",fill:""}),s.jsx("path",{d:"M13.2856 14.1426H9.42847V17.9997H13.2856V14.1426Z",fill:""}),s.jsx("path",{d:"M18 14.1426H14.1428V17.9997H18V14.1426Z",fill:""})]})})})})]})}),s.jsx("div",{className:"iq-custom-select d-inline-block shop-select",children:s.jsx(P,{options:d,className:"js-choice",select:"one"})})]})]}),s.jsxs(p.Content,{defaultActiveKey:"third",children:[s.jsx(p.Pane,{id:"pills-list-view",eventKey:"first",className:"tab-pane fade show ",role:"tabpanel","data-current-page":"1",children:c.slice(0,9).map((l,i)=>s.jsx(x,{className:"row-cols-1",children:s.jsx(v,{thumbnail:l.thumbnail,slug:l.slug,is_sale:l.is_sale,is_new:l.is_new,product_name:e(l.product_name),price:l.price,final_price:l.final_price,rating:"4",count1:"1"})},i))}),s.jsx(p.Pane,{id:"pills-grid-view",eventKey:"second",className:"tab-pane fade",role:"tabpanel","aria-labelledby":"grid-view-tab","tab-current-page":"2",children:s.jsx(x,{className:"row-cols-1 row-cols-md-2 row-cols-lg-2",children:c.slice(0,9).map((l,i)=>s.jsx(h,{children:s.jsx(j,{thumbnail:l.thumbnail,slug:l.slug,is_sale:l.is_sale,is_new:l.is_new,product_name:e(l.product_name),price:l.price,final_price:l.final_price,rating:"5",count1:"0"})},i))})}),s.jsx(p.Pane,{id:"pills-grid-view",eventKey:"third",className:"tab-pane fade",role:"tabpanel","aria-labelledby":"grid-view-tab","tab-current-page":"3",children:s.jsx(x,{className:"row-cols-1 row-cols-md-2 row-cols-lg-3",children:c.slice(0,9).map((l,i)=>s.jsx(h,{children:s.jsx(j,{thumbnail:l.thumbnail,slug:l.slug,is_sale:l.is_sale,is_new:l.is_new,product_name:e(l.product_name),price:l.price,final_price:l.final_price,rating:"5",count1:"0"})},i))})}),s.jsx(p.Pane,{id:"pills-grid-view",eventKey:"forth",className:"tab-pane fade",role:"tabpanel","aria-labelledby":"grid-view-tab","tab-current-page":"4",children:s.jsx(x,{className:"row-cols-1 row-cols-md-2 row-cols-lg-4",children:c.map((l,i)=>s.jsx(h,{children:s.jsx(j,{thumbnail:l.thumbnail,slug:l.slug,is_sale:l.is_sale,is_new:l.is_new,product_name:e(l.product_name),price:l.price,final_price:l.final_price,rating:"5",count1:"0"})},i))})})]})]})})]})})})]})});T.displayName="ShopCategoryPage";export{T as default};
