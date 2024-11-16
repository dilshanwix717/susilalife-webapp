import{r as a,a as d,j as e,C as m,L as c,E as p,F as r,R as h,o}from"./index-5a5fd040.js";import{B as x}from"./BreadcrumbWidget-c34707b9.js";import{C as t}from"./CustomButton-611958a4.js";import{i as j}from"./01-9e65ffb4.js";import{C as u}from"./choice-73387a90.js";import{T as N}from"./Table-5edf0e7d.js";const b="/assets/images/shop/product/07.webp",f="/assets/images/shop/product/05.webp",y=a.memo(()=>{const{t:s}=d(),i=[{value:`${s("shop.india")}`,label:`${s("shop.india")}`},{value:`${s("shop.united_kindom")}`,label:`${s("shop.united_kindom")}`},{value:`${s("shop.united_states")}`,label:`${s("shop.united_states")}`},{value:`${s("shop.australia")}`,label:`${s("shop.australia")}`},{value:`${s("shop.north_corea")}`,label:`${s("shop.north_corea")}`}],[l,n]=a.useState(!1);return e.jsxs(a.Fragment,{children:[e.jsx(x,{title:s("shop.checkout")}),e.jsx("div",{className:"checkout-page  section-padding",children:e.jsxs(m,{children:[e.jsx("div",{className:"main-cart mb-3 mb-md-5 pb-0 pb-md-5",children:e.jsxs("ul",{className:"cart-page-items d-flex justify-content-center list-inline align-items-center gap-3 gap-md-5 flex-wrap",children:[e.jsxs("li",{className:"cart-page-item",children:[e.jsx("span",{className:" cart-pre-number  border-radius rounded-circle me-1",children:"1"})," ",e.jsx("span",{className:"cart-page-link ",children:s("shop.shopping_cart")})]}),e.jsx("li",{className:"cart-page-item",children:e.jsxs("svg",{width:"25",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsxs("li",{className:"cart-page-item  active",children:[e.jsx("span",{className:"cart-pre-heading badge cart-pre-number bg-primary border-radius rounded-circle me-1",children:"2"})," ",e.jsxs("span",{className:"cart-page-link ",children:[s("shop.checkout")," "]})]}),e.jsx("li",{className:"cart-page-item",children:e.jsxs("svg",{width:"25",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsxs("li",{className:"cart-page-item ",children:[e.jsx("span",{className:" cart-pre-number  border-radius rounded-circle me-1",children:"3"})," ",e.jsxs("span",{className:"cart-page-link ",children:[s("shop.order_summary")," "]})]})]})}),e.jsxs("div",{className:"mb-5",children:[e.jsx("div",{className:"d-flex align-items-center justify-content-center gap-3 flex-wrap",children:e.jsxs("div",{className:"woocommerce-info",children:[e.jsx("span",{className:"text-primary",children:e.jsx("i",{className:"fa-solid fa-percent"})})," ",e.jsx("span",{className:"text-body ps-2",children:s("shop.have_a_coupon")})," ",e.jsx(c,{to:"#",className:"text-white",onClick:()=>n(!l),children:s("shop.enter_code")})]})}),e.jsx(p,{in:l,id:"apply-coupon",className:" mt-5",children:e.jsxs(r,{className:"checkout-coupon",children:[e.jsx("p",{className:"mt-0",children:s("shop.apply_coupon_code")}),e.jsxs("div",{className:"iq-checkout-coupon",children:[e.jsx("input",{name:"coupon-code",type:"text",required:"required",placeholder:"Coupon code",className:"form-control"}),e.jsx(t,{buttonTitle:s("shop.apply_coupon"),link:"#",linkButton:"false"})]})]})})]}),e.jsxs(h,{children:[e.jsx(o,{lg:"8",md:"7",children:e.jsxs(r,{action:"",children:[e.jsx("h5",{className:"mb-4",children:s("shop.billing_details")}),e.jsx("div",{className:"mb-4",children:e.jsx("input",{name:"first-name",type:"text",required:"required",placeholder:s("form.first_name"),className:"form-control"})}),e.jsx("div",{className:"mb-4",children:e.jsx("input",{name:"last-name",type:"text",required:"required",placeholder:s("form.last_name"),className:"form-control"})}),e.jsx("div",{className:"mb-4",children:e.jsx("input",{name:"billing-company",type:"text",required:"required",placeholder:s("shop.company"),className:"form-control"})}),e.jsx("div",{className:"mb-4 iq-custom-select",children:e.jsx(u,{options:i,className:"js-choice",select:"one"})}),e.jsx("div",{className:"mb-4",children:e.jsx("input",{name:"billing-address",type:"text",required:"required",placeholder:s("form.billing_address"),className:"form-control"})}),e.jsx("div",{className:"mb-4",children:e.jsx("input",{name:"billing-address2",type:"text",required:"required",placeholder:s("form.apartment"),className:"form-control"})}),e.jsx("div",{className:"mb-4",children:e.jsx("input",{name:"city",type:"text",required:"required",placeholder:s("shop.town_city"),className:"form-control"})}),e.jsx("div",{className:"mb-4",children:e.jsxs("select",{className:"select2-basic-single js-states form-control","aria-label":"Default select example",children:[e.jsx("option",{defaultValue:"",children:s("shop.colorado")}),e.jsx("option",{value:"2",children:s("shop.alaska")}),e.jsx("option",{value:"1",children:s("shop.hawai")}),e.jsx("option",{value:"3",children:s("shop.texas")}),e.jsx("option",{value:"1",children:s("shop.washington")})]})}),e.jsx("div",{className:"mb-4",children:e.jsx("input",{name:"postcode",type:"text",required:"required",placeholder:s("form.zip_code"),className:"form-control"})}),e.jsx("div",{className:"mb-4",children:e.jsx("input",{name:"phone",type:"tel",required:"required",placeholder:s("form.phone"),className:"form-control"})}),e.jsx("div",{className:"mb-4",children:e.jsx("input",{name:"billing-company",type:"email",required:"required",placeholder:s("shop.email_address"),className:"form-control rounded-0 mb-5"})}),e.jsx("h5",{className:"mb-4",children:s("shop.additional_information")}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"mb-2",children:s("shop.order_notes")}),e.jsx("textarea",{name:"your-message",placeholder:s("shop.order_notes_eg"),className:"form-control mb-5",required:!0})]})]})}),e.jsx(o,{lg:"4",md:"5",children:e.jsxs("div",{className:"order_review-box border p-4",children:[e.jsx("h5",{className:"mb-3 mt-0 mt-md-2",children:s("shop.product_")}),e.jsxs("div",{className:"checkout-review-order",children:[e.jsxs(N,{className:"table w-100",responsive:!0,children:[e.jsxs("tbody",{children:[e.jsxs("tr",{className:"cart_item",children:[e.jsxs("td",{className:"product-name",children:[e.jsx("div",{className:"product-image",children:e.jsx("img",{width:"300",height:"400",src:j,className:"cartimg",alt:"image",loading:"lazy"})}),e.jsxs("div",{className:"text",children:[e.jsx("span",{className:"fw-500 text-body",children:s("shop.bag_pack")}),e.jsx("br",{}),e.jsx("strong",{className:"text-white font-size-12 fw-bold",children:"QTY: 1"})]})]}),e.jsx("td",{className:"product-total",children:e.jsx("span",{className:"Price-amount",children:e.jsxs("bdi",{className:"fw-500 text-body",children:[e.jsx("span",{children:"$"}),"28.00"]})})})]}),e.jsxs("tr",{className:"cart_item",children:[e.jsxs("td",{className:"product-name",children:[e.jsx("div",{className:"product-image",children:e.jsx("img",{width:"300",height:"400",src:b,className:"cartimg",alt:"image",loading:"lazy"})}),e.jsxs("div",{className:"text",children:[e.jsx("span",{className:"fw-500 text-body",children:s("shop.cartoon_character")}),e.jsx("br",{}),e.jsx("strong",{className:"text-white font-size-12 fw-bold",children:"QTY: 1"})]})]}),e.jsx("td",{className:"product-total",children:e.jsx("span",{className:"Price-amount",children:e.jsxs("bdi",{className:"fw-500 text-body",children:[e.jsx("span",{children:"$"}),"25.00"]})})})]}),e.jsxs("tr",{className:"cart_item",children:[e.jsxs("td",{className:"product-name",children:[e.jsx("div",{className:"product-image",children:e.jsx("img",{width:"300",height:"400",src:f,className:"cartimg",alt:"image",loading:"lazy"})}),e.jsxs("div",{className:"text",children:[e.jsx("span",{className:"fw-500 text-body",children:s("shop.boxing_gloves")}),e.jsx("br",{}),e.jsx("strong",{className:"text-white font-size-12 fw-bold",children:"QTY: 1"})]})]}),e.jsx("td",{className:"product-total",children:e.jsx("span",{className:"Price-amount",children:e.jsxs("bdi",{className:"fw-500 text-body",children:[e.jsx("span",{children:"$"}),"18.00"]})})})]})]}),e.jsxs("tfoot",{children:[e.jsxs("tr",{className:"border-bottom",children:[e.jsx("td",{className:"ps-0 p-3 fw-500 font-size-18",children:s("shop.subtotal")}),e.jsx("td",{className:"pe-0 p-3 fw-500 text-end",children:e.jsx("span",{className:"mb-0 text-body",children:"$71.00"})})]}),e.jsxs("tr",{className:"border-bottom",children:[e.jsx("td",{className:"ps-0 p-3 fw-500 font-size-18",children:s("shop.total")}),e.jsx("td",{className:"pe-0 p-3 fw-500 text-end",children:e.jsx("span",{className:"text-primary mb-0",children:"$71.00"})})]})]})]}),e.jsxs("div",{className:"checkout-payment mt-4 pt-3 pb-2",children:[e.jsx("div",{className:"payment-box border-bottom mb-5 pb-4",children:e.jsxs("div",{className:"accordion",id:"accordionPayment",children:[e.jsxs("div",{className:"accordion-item-payment",children:[e.jsx("h6",{className:"accordion-header",id:"payment-1",children:e.jsx("div",{className:"accordion-button-payment","data-bs-toggle":"collapse","data-bs-target":"#collapseOnepayment","aria-expanded":"true","aria-controls":"collapseOnepayment",children:e.jsxs("span",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",defaultChecked:"checked"}),e.jsx("label",{className:"form-check-label",htmlFor:"flexRadioDefault1",children:s("shop.bank_transfer")})]})})}),e.jsx("div",{id:"collapseOnepayment",className:"accordion-collapse collapse show","data-bs-parent":"#accordionPayment",children:e.jsx("div",{className:"accordion-body",children:s("shop.make_direct_payment")})})]}),e.jsxs("div",{className:"accordion-item-payment",children:[e.jsx("h6",{className:"accordion-header",id:"payment-2",children:e.jsx("div",{className:"accordion-button-payment collapsed","data-bs-toggle":"collapse","data-bs-target":"#collapseTwopayment","aria-expanded":"false","aria-controls":"collapseTwopayment",children:e.jsxs("span",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2"}),e.jsx("label",{className:"form-check-label",htmlFor:"flexRadioDefault2",children:s("shop.cheque_payments")})]})})}),e.jsx("div",{id:"collapseTwopayment",className:"accordion-collapse collapse","aria-labelledby":"payment-2","data-bs-parent":"#accordionPayment",children:e.jsx("div",{className:"accordion-body",children:"Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode."})})]}),e.jsxs("div",{className:"accordion-item-payment",children:[e.jsx("h6",{className:"accordion-header",id:"payment-3",children:e.jsx("div",{className:"accordion-button-payment collapsed","data-bs-toggle":"collapse","data-bs-target":"#collapseThreepayment","aria-expanded":"false","aria-controls":"collapseThreepayment",children:e.jsxs("span",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault3"}),e.jsx("label",{className:"form-check-label",htmlFor:"flexRadioDefault3",children:s("shop.cod")})]})})}),e.jsx("div",{id:"collapseThreepayment",className:"accordion-collapse collapse","aria-labelledby":"payment-3","data-bs-parent":"#accordionPayment",children:e.jsx("div",{className:"accordion-body",children:"Pay with cash upon delivery."})})]})]})}),e.jsxs("p",{className:"mt-3 mb-5",children:[s("shop.your_personal_data")," ",e.jsx(c,{to:"/PrivacyPolicy",children:s("shop.privacy_policy")}),"."]}),e.jsx(t,{buttonTitle:s("shop.place_order"),link:"/track-order",linkButton:"false"})]})]})]})})]})]})})]})});y.displayName="CheckoutPage";export{y as default};