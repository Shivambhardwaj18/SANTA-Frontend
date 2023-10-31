"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[6959],{6255:function(e,s,a){a.d(s,{Z:function(){return o}});var t=a(9439),i=a(8182),n=a(2791),r=function(e){var s=new Date(e).getTime(),a=(0,n.useState)(s-(new Date).getTime()),i=(0,t.Z)(a,2),r=i[0],l=i[1];return(0,n.useEffect)((function(){if(!(r<=0)){var e=setInterval((function(){l(s-(new Date).getTime())}),1e3);return function(){return clearInterval(e)}}}),[s,r]),function(e){return e<=0?[0,0,0,0]:[Math.floor(e/864e5),Math.floor(e%864e5/36e5),Math.floor(e%36e5/6e4),Math.floor(e%6e4/1e3)]}(r)},l=a(184),c=function(e){var s=e.value,a=e.type;return(0,l.jsxs)("span",{className:"cdown",children:[s," ",(0,l.jsx)("p",{children:a})]})},o=function(e){var s=e.date,a=e.className,n=r(s),o=(0,t.Z)(n,4),d=o[0],u=o[1],m=o[2],p=o[3];return(0,l.jsxs)("div",{className:(0,i.Z)("timer timer-style",a),children:[(0,l.jsx)(c,{value:d,type:"days"}),(0,l.jsx)(c,{value:u,type:"hours"}),(0,l.jsx)(c,{value:m,type:"minutes"}),(0,l.jsx)(c,{value:p,type:"secs"})]})}},7127:function(e,s,a){var t=a(9434),i=a(9230),n=(a(147),a(184));s.Z=function(e){e.currency;var s=(0,i.$G)().i18n,a=((0,t.I0)(),function(e){var a=e.target.value;s.changeLanguage(a)});return(0,n.jsxs)("div",{className:"language-currency-wrap",children:[(0,n.jsxs)("div",{className:"same-language-currency language-style",children:[(0,n.jsxs)("span",{children:["en"===s.resolvedLanguage?"English":"fn"===s.resolvedLanguage?"French":"de"===s.resolvedLanguage?"Germany":""," ",(0,n.jsx)("i",{className:"fa fa-angle-down"})]}),(0,n.jsx)("div",{className:"lang-car-dropdown",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("button",{value:"en",onClick:function(e){return a(e)},children:"English"})}),(0,n.jsx)("li",{children:(0,n.jsx)("button",{value:"fn",onClick:function(e){return a(e)},children:"French"})}),(0,n.jsx)("li",{children:(0,n.jsx)("button",{value:"de",onClick:function(e){return a(e)},children:"Germany"})})]})})]}),(0,n.jsx)("div",{className:"same-language-currency",children:(0,n.jsx)("p",{children:"Call Us 3965410"})})]})}},9841:function(e,s,a){var t=a(8182),i=a(9577),n=a(184),r=function(e){var s,a=e.status,i=e.message,r=e.onValidated,l=e.spaceTopClass,c=e.subscribeBtnClass;return(0,n.jsx)("div",{className:(0,t.Z)("subscribe-form-3",l),children:(0,n.jsxs)("div",{className:"mc-form",children:[(0,n.jsx)("div",{children:(0,n.jsx)("input",{className:"email",ref:function(e){return s=e},type:"email",placeholder:"Your Email Address",required:!0})}),"sending"===a&&(0,n.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===a&&(0,n.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:i}}),"success"===a&&(0,n.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:i}}),(0,n.jsx)("div",{className:"clear-3 ".concat(c||""),children:(0,n.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&r({EMAIL:s.value}),s.value=""},children:"SUBSCRIBE"})})]})})};s.Z=function(e){var s=e.mailchimpUrl,a=e.spaceTopClass,t=e.subscribeBtnClass;return(0,n.jsx)("div",{children:(0,n.jsx)(i.Z,{url:s,render:function(e){var s=e.subscribe,i=e.status,l=e.message;return(0,n.jsx)(r,{status:i,message:l,onValidated:function(e){return s(e)},spaceTopClass:a,subscribeBtnClass:t})}})})}},27:function(e,s,a){var t=a(9439),i=a(2791),n=a(8182),r=a(1087),l=a(9434),c=a(2558),o=a(1770),d=a(6664),u=a(4275),m=a(8725),p=a(184);s.Z=function(e){var s=e.product,a=e.currency,h=e.cartItem,x=e.wishlistItem,g=e.compareItem,j=e.spaceBottomClass,v=(0,i.useState)(!1),f=(0,t.Z)(v,2),b=f[0],N=f[1],C=(0,o.lk)(s.price,s.discount),y=+(s.price*a.currencyRate).toFixed(2),Z=+(C*a.currencyRate).toFixed(2),w=(0,l.I0)();return(0,p.jsxs)(i.Fragment,{children:[(0,p.jsxs)("div",{className:(0,n.Z)("product-wrap",j),children:[(0,p.jsxs)("div",{className:"product-img",children:[(0,p.jsxs)(r.rU,{to:"/product/"+s.id,children:[(0,p.jsx)("img",{className:"default-img",src:""+s.image[0],alt:""}),s.image.length>1?(0,p.jsx)("img",{className:"hover-img",src:""+s.image[1],alt:""}):""]}),s.discount||s.new?(0,p.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,p.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,p.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,p.jsxs)("div",{className:"product-action",children:[(0,p.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,p.jsx)("button",{className:void 0!==x?"active":"",disabled:void 0!==x,title:void 0!==x?"Added to wishlist":"Add to wishlist",onClick:function(){return w((0,m.Mp)(s))},children:(0,p.jsx)("i",{className:"pe-7s-like"})})}),(0,p.jsx)("div",{className:"pro-same-action pro-cart",children:s.affiliateLink?(0,p.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Buy now"," "]}):s.variation&&s.variation.length>=1?(0,p.jsx)(r.rU,{to:"".concat("","/product/").concat(s.id),children:"Select Option"}):s.stock&&s.stock>0?(0,p.jsxs)("button",{onClick:function(){return w((0,u.Xq)(s))},className:void 0!==h&&h.quantity>0?"active":"",disabled:void 0!==h&&h.quantity>0,title:void 0!==h?"Added to cart":"Add to cart",children:[" ",(0,p.jsx)("i",{className:"pe-7s-cart"})," ",void 0!==h&&h.quantity>0?"Added":"Add to cart"]}):(0,p.jsx)("button",{disabled:!0,className:"active",children:"Out of Stock"})}),(0,p.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,p.jsx)("button",{title:"Quick View",onClick:function(){return N(!0)},children:(0,p.jsx)("i",{className:"pe-7s-look"})})})]})]}),(0,p.jsxs)("div",{className:"product-content text-center",children:[(0,p.jsx)("h3",{children:(0,p.jsx)(r.rU,{to:"/product/"+s.id,children:s.name})}),s.rating&&s.rating>0?(0,p.jsx)("div",{className:"product-rating",children:(0,p.jsx)(c.Z,{ratingValue:s.rating})}):"",(0,p.jsx)("div",{className:"product-price",children:null!==C?(0,p.jsxs)(i.Fragment,{children:[(0,p.jsx)("span",{children:a.currencySymbol+Z})," ",(0,p.jsx)("span",{className:"old",children:a.currencySymbol+y})]}):(0,p.jsxs)("span",{children:[a.currencySymbol+y," "]})})]})]}),(0,p.jsx)(d.Z,{show:b,onHide:function(){return N(!1)},product:s,currency:a,discountedPrice:C,finalProductPrice:y,finalDiscountedPrice:Z,wishlistItem:x,compareItem:g})]})}},1977:function(e,s,a){var t=a(8182),i=a(184);s.Z=function(e){var s=e.data,a=e.testimonialClass;return(0,i.jsxs)("div",{className:(0,t.Z)(a||"single-testimonial","text-center"),children:[(0,i.jsx)("img",{src:""+s.image,alt:""}),(0,i.jsx)("p",{children:s.content}),(0,i.jsxs)("div",{className:"client-info",children:[(0,i.jsx)("i",{className:"fa fa-map-signs"}),(0,i.jsx)("h5",{children:s.customerName}),(0,i.jsx)("span",{children:s.title})]})]})}},9858:function(e,s,a){var t=a(2791),i=a(7939),n=a(8032),r=a(9354),l=a(184);s.Z=function(e){var s=e.children,a=e.headerContainerClass,c=e.headerTop,o=e.headerPaddingClass,d=e.headerPositionClass;return(0,l.jsxs)(t.Fragment,{children:[(0,l.jsx)(i.Z,{layout:a,top:c,headerPaddingClass:o,headerPositionClass:d}),s,(0,l.jsx)(n.Z,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,l.jsx)(r.Z,{})]})}},6959:function(e,s,a){a.r(s),a.d(s,{default:function(){return I}});var t=a(2791),i=a(3695),n=a(9858),r=a(1496),l=a(7842),c=JSON.parse('[{"id":1,"title":"2020 Latest Collection","subtitle":"-30% Offer All <br /> Hand & Made.","image":"/assets/img/slider/slider-14.jpg","url":"/shop-grid-standard"},{"id":2,"title":"2020 Latest Collection","subtitle":"-40% Offer All <br /> Hand & Made.","image":"/assets/img/slider/slider-15.jpg","url":"/shop-grid-standard"}]'),o=a(1087),d=a(184),u=function(e){var s=e.data;return(0,d.jsx)("div",{className:"single-slider-2 slider-height-2 d-flex align-items-center bg-img",style:{backgroundImage:"url(".concat(""+s.image,")")},children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"col-xl-6 col-lg-7 col-md-8 col-12",children:(0,d.jsxs)("div",{className:"slider-content-2 slider-animated-1",children:[(0,d.jsx)("h3",{className:"animated no-style",children:s.title}),(0,d.jsx)("h1",{className:"animated",dangerouslySetInnerHTML:{__html:s.subtitle}}),(0,d.jsx)("div",{className:"slider-btn slider-btn--style2 btn-hover",children:(0,d.jsx)(o.rU,{className:"animated rounden-btn",to:""+s.url,children:"SHOP NOW"})})]})})})})})},m={effect:"fade",fadeEffect:{crossFade:!0},modules:[r.xW],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},p=function(){return(0,d.jsx)("div",{className:"slider-area",children:(0,d.jsx)("div",{className:"slider-active nav-style-1",children:c&&(0,d.jsx)(l.Z,{options:m,children:c.map((function(e,s){return(0,d.jsx)(l.o,{children:(0,d.jsx)(u,{data:e})},s)}))})})})},h=a(8182),x=JSON.parse('[{"id":"1","image":"/assets/img/product/category1.jpg","subtitle":"2 Products","title":"New","link":"/shop-grid-standard"},{"id":"2","image":"/assets/img/product/category2.jpg","subtitle":"3 Products","title":"Crafts","link":"/shop-grid-standard"},{"id":"3","image":"/assets/img/product/category3.jpg","subtitle":"6 Products","title":"Earthenware","link":"/shop-grid-standard"},{"id":"4","image":"/assets/img/product/category4.jpg","subtitle":"5 Products","title":"Featured","link":"/shop-grid-standard"},{"id":"5","image":"/assets/img/product/category2.jpg","subtitle":"3 Products","title":"Best Products","link":"/shop-grid-standard"}]'),g=function(e){var s=e.data;e.sliderClass;return(0,d.jsxs)("div",{className:"collection-product",children:[(0,d.jsx)("div",{className:"collection-img",children:(0,d.jsx)(o.rU,{to:""+s.link,children:(0,d.jsx)("img",{src:""+s.image,alt:""})})}),(0,d.jsxs)("div",{className:"collection-content text-center",children:[(0,d.jsx)("span",{children:s.subtitle}),(0,d.jsx)("h4",{children:(0,d.jsx)(o.rU,{to:""+s.link,children:s.title})}),(0,d.jsx)(o.rU,{to:""+s.link,className:"collection-btn",children:"SHOP NOW"})]})]})},j={loop:!1,spaceBetween:30,autoplay:!0,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:3},992:{slidesPerView:4}}},v=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass;return(0,d.jsx)("div",{className:(0,h.Z)("collections-area",s,a),children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"collection-wrap",children:(0,d.jsx)("div",{className:"collection-active",children:x&&(0,d.jsx)(l.Z,{options:j,children:x.map((function(e,s){return(0,d.jsx)(l.o,{children:(0,d.jsx)(g,{data:e})},s)}))})})})})})},f=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner9.jpg","title":"Featured Products","subtitle":"Choose Your Products Here","link":"/shop-grid-standard","textAlign":"right"},{"id":2,"image":"/assets/img/banner/banner10.jpg","title":"New Products","subtitle":"Choose Your Products Here","link":"/shop-grid-standard","textAlign":"left"}]'),b=function(e){var s=e.data,a=e.spaceBottomClass;return(0,d.jsxs)("div",{className:(0,h.Z)("single-banner-2",a,"right"===s.textAlign&&"align_right"),children:[(0,d.jsx)(o.rU,{to:""+s.link,children:(0,d.jsx)("img",{src:""+s.image,alt:""})}),(0,d.jsxs)("div",{className:"banner-content-2 banner-content-2--style2",children:[(0,d.jsx)("h3",{children:s.title}),(0,d.jsxs)("h4",{children:[s.subtitle," ",(0,d.jsx)("span",{children:s.price})]}),(0,d.jsx)(o.rU,{to:""+s.link,children:(0,d.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})},N=function(e){var s=e.spaceBottomClass;return(0,d.jsx)("div",{className:"banner-area ".concat(s||""),children:(0,d.jsx)("div",{className:"row no-gutters",children:null===f||void 0===f?void 0:f.map((function(e,s){return(0,d.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,d.jsx)(b,{data:e,spaceBottomClass:"mb-30"})},s)}))})})},C=a(9721),y=a(4454),Z=a(651),w=a(4023),k=a(3708),I=function(){return(0,d.jsxs)(t.Fragment,{children:[(0,d.jsx)(i.Z,{titleTemplate:"Handmade Home",description:"Handmade home of flone react minimalist eCommerce template."}),(0,d.jsxs)(n.Z,{headerTop:"visible",children:[(0,d.jsx)(p,{}),(0,d.jsx)(v,{spaceTopClass:"pt-100",spaceBottomClass:"pb-95"}),(0,d.jsx)(N,{}),(0,d.jsx)(k.Z,{spaceBottomClass:"pb-65",spaceTopClass:"pt-70",category:"handmade"}),(0,d.jsx)(y.Z,{bgImg:"/assets/img/bg/shape.png",containerClass:"container-fluid",gutterClass:"padding-10-row-col",spaceTopClass:"pt-50",spaceBottomClass:"pb-40"}),(0,d.jsx)(C.Z,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",dateTime:"November 13, 2023 12:12:00",countDownImage:"/assets/img/banner/deal-3.png"}),(0,d.jsx)(w.Z,{spaceTopClass:"pt-100",spaceBottomClass:"pb-95",spaceLeftClass:"ml-70",spaceRightClass:"mr-70",bgColorClass:"bg-gray-3"}),(0,d.jsx)(Z.Z,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",subscribeBtnClass:"dark-red-subscribe"})]})]})}},9721:function(e,s,a){var t=a(8182),i=a(1087),n=a(6255),r=a(184);s.Z=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,l=e.dateTime,c=e.countDownImage;return(0,r.jsx)("div",{className:(0,t.Z)("funfact-area",s,a),children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row align-items-center",children:[(0,r.jsx)("div",{className:"col-md-8 col-lg-6 order-1 order-lg-2",children:(0,r.jsxs)("div",{className:"funfact-content funfact-res text-center",children:[(0,r.jsx)("h2",{children:"Deal of the day"}),(0,r.jsx)("div",{className:"timer",children:(0,r.jsx)(n.Z,{date:l})}),(0,r.jsx)("div",{className:"funfact-btn funfact-btn--round-shape funfact-btn-red btn-hover",children:(0,r.jsx)(i.rU,{to:"/shop-grid-standard",children:"SHOP NOW"})})]})}),(0,r.jsx)("div",{className:"col-md-4 col-lg-6 order-2 order-lg-1",children:(0,r.jsx)("div",{className:"funfact-image",children:(0,r.jsx)(i.rU,{to:"/shop-grid-standard",children:(0,r.jsx)("img",{src:""+c,alt:"",className:"img-fluid"})})})})]})})})}},4454:function(e,s,a){a.d(s,{Z:function(){return l}});var t=a(8182),i=JSON.parse('[{"id":1,"titleImage":"/assets/img/icon-img/support-8.png","title":"Free shipping on all order","iconImage":"/assets/img/icon-img/support-5.png","backgroundColor":"#ccfbe9"},{"id":2,"titleImage":"/assets/img/icon-img/support-9.png","title":"Back guarantee under 5 days","iconImage":"/assets/img/icon-img/support-6.png","backgroundColor":"#f2fbcc"},{"id":3,"titleImage":"/assets/img/icon-img/support-10.png","title":"On every order over $150","iconImage":"/assets/img/icon-img/support-7.png","backgroundColor":"#ddfbcc"}]'),n=a(184),r=function(e){var s=e.data,a=e.spaceBottomClass;return(0,n.jsxs)("div",{className:(0,t.Z)("support-wrap-3 text-center",a),style:{backgroundColor:"".concat(s.backgroundColor)},children:[(0,n.jsx)("div",{className:"support-icon-2",children:(0,n.jsx)("img",{className:"animated",src:""+s.iconImage,alt:""})}),(0,n.jsxs)("div",{className:"support-content-3",children:[(0,n.jsx)("img",{src:""+s.titleImage,alt:""}),(0,n.jsx)("p",{children:s.title})]})]})},l=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,l=e.containerClass,c=e.gutterClass,o=e.responsiveClass,d=e.bgImg;return(0,n.jsx)("div",{className:(0,t.Z)("support-area hm9-section-padding",s,a,o),style:d?{backgroundImage:"url(".concat(""+d,")")}:{},children:(0,n.jsx)("div",{className:(0,t.Z)(l,c),children:(0,n.jsx)("div",{className:"row",children:null===i||void 0===i?void 0:i.map((function(e,s){return(0,n.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,n.jsx)(r,{data:e,spaceBottomClass:"mb-10"})},s)}))})})})}},7939:function(e,s,a){a.d(s,{Z:function(){return h}});var t=a(9439),i=a(2791),n=a(8182),r=a(1567),l=a(9381),c=a(2824),o=a(2412),d=a(9434),u=a(7127),m=a(184),p=function(e){var s=e.borderStyle,a=(0,d.v9)((function(e){return e.currency}));return(0,m.jsxs)("div",{className:(0,n.Z)("header-top-wap","fluid-border"===s&&"border-bottom"),children:[(0,m.jsx)(u.Z,{currency:a}),(0,m.jsx)("div",{className:"header-offer",children:(0,m.jsxs)("p",{children:["Free delivery on order over"," ",(0,m.jsx)("span",{children:a.currencySymbol+(200*a.currencyRate).toFixed(2)})]})})]})},h=function(e){var s=e.layout,a=e.top,d=e.borderStyle,u=e.headerPaddingClass,h=e.headerPositionClass,x=e.headerBgClass,g=(0,i.useState)(0),j=(0,t.Z)(g,2),v=j[0],f=j[1],b=(0,i.useState)(0),N=(0,t.Z)(b,2),C=N[0],y=N[1];(0,i.useEffect)((function(){var e=document.querySelector(".sticky-bar");return y(e.offsetTop),window.addEventListener("scroll",Z),function(){window.removeEventListener("scroll",Z)}}),[]);var Z=function(){f(window.scrollY)};return(0,m.jsxs)("header",{className:(0,n.Z)("header-area clearfix",x,h),children:[(0,m.jsx)("div",{className:(0,n.Z)("header-top-area",u,"visible"===a?"d-none d-lg-block":"d-none","fluid-border"===d&&"border-none"),children:(0,m.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,m.jsx)(p,{borderStyle:d})})}),(0,m.jsxs)("div",{className:(0,n.Z)(u,"sticky-bar header-res-padding clearfix",v>C&&"stick"),children:[(0,m.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,m.jsx)(r.Z,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})}),(0,m.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,m.jsx)(l.Z,{})}),(0,m.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,m.jsx)(c.Z,{})})]})}),(0,m.jsx)(o.Z,{})]})]})}},651:function(e,s,a){var t=a(8182),i=a(9841),n=a(184);s.Z=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,r=e.subscribeBtnClass,l=e.bgColorClass,c=e.subscribeColorClass;return(0,n.jsx)("div",{className:(0,t.Z)("subscribe-area-3",l,s,a),children:(0,n.jsx)("div",{className:"container-fluid",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-xl-5 col-lg-7 col-md-10 mx-auto",children:(0,n.jsxs)("div",{className:(0,t.Z)("subscribe-style-3 text-center",c),children:[(0,n.jsx)("h2",{children:"Join With Us! "}),(0,n.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,n.jsx)(i.Z,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:r})]})})})})})}},2563:function(e,s,a){var t=a(2791),i=a(9434),n=a(1770),r=a(27),l=a(184);s.Z=function(e){var s=e.spaceBottomClass,a=e.category,c=e.type,o=e.limit,d=(0,i.v9)((function(e){return e.product})).products,u=(0,i.v9)((function(e){return e.currency})),m=(0,i.v9)((function(e){return e.cart})).cartItems,p=(0,i.v9)((function(e){return e.wishlist})).wishlistItems,h=(0,i.v9)((function(e){return e.compare})).compareItems,x=(0,n.Xp)(d,a,c,o);return(0,l.jsx)(t.Fragment,{children:null===x||void 0===x?void 0:x.map((function(e){return(0,l.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,l.jsx)(r.Z,{spaceBottomClass:s,product:e,currency:u,cartItem:m.find((function(s){return s.id===e.id})),wishlistItem:p.find((function(s){return s.id===e.id})),compareItem:h.find((function(s){return s.id===e.id}))})},e.id)}))})}},3708:function(e,s,a){var t=a(8182),i=a(1865),n=a(126),r=a(996),l=a(2563),c=a(184);s.Z=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,o=e.bgColorClass,d=e.category;return(0,c.jsx)("div",{className:(0,t.Z)("product-area",s,a,o),children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(r.Z,{titleText:"Daily Deals",positionClass:"text-center",borderClass:"no-border"}),(0,c.jsxs)(i.Z.Container,{defaultActiveKey:"bestSeller",children:[(0,c.jsxs)(n.Z,{variant:"pills",className:"product-tab-list pt-30 pb-55 text-center",children:[(0,c.jsx)(n.Z.Item,{children:(0,c.jsx)(n.Z.Link,{eventKey:"newArrival",children:(0,c.jsx)("h4",{children:"New Arrivals"})})}),(0,c.jsx)(n.Z.Item,{children:(0,c.jsx)(n.Z.Link,{eventKey:"bestSeller",children:(0,c.jsx)("h4",{children:"Best Sellers"})})}),(0,c.jsx)(n.Z.Item,{children:(0,c.jsx)(n.Z.Link,{eventKey:"saleItems",children:(0,c.jsx)("h4",{children:"Sale Items"})})})]}),(0,c.jsxs)(i.Z.Content,{children:[(0,c.jsx)(i.Z.Pane,{eventKey:"newArrival",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)(l.Z,{category:d,type:"new",limit:8,spaceBottomClass:"mb-25"})})}),(0,c.jsx)(i.Z.Pane,{eventKey:"bestSeller",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)(l.Z,{category:d,type:"bestSeller",limit:8,spaceBottomClass:"mb-25"})})}),(0,c.jsx)(i.Z.Pane,{eventKey:"saleItems",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)(l.Z,{category:d,type:"saleItems",limit:8,spaceBottomClass:"mb-25"})})})]})]})]})})}},4023:function(e,s,a){var t=a(8182),i=a(7842),n=a(9207),r=a(1977),l=a(184),c={slidesPerView:1,loop:!0,autoplay:!0};s.Z=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,o=e.spaceLeftClass,d=e.spaceRightClass,u=e.bgColorClass,m=e.testimonialClass;return(0,l.jsx)("div",{className:(0,t.Z)("testimonial-area",s,a,o,d,u),children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-lg-10 mx-auto",children:(0,l.jsx)("div",{className:"testimonial-active nav-style-1 nav-testi-style",children:n&&(0,l.jsx)(i.Z,{options:c,children:n.map((function(e,s){return(0,l.jsx)(i.o,{children:(0,l.jsx)(r.Z,{data:e,testimonialClass:m})},s)}))})})})})})})}},9207:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"Grace Alvarado","title":"customer"},{"id":"2","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"John Doe","title":"customer"}]')}}]);
//# sourceMappingURL=6959.68a91934.chunk.js.map