"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[1060],{6255:function(e,s,a){a.d(s,{Z:function(){return o}});var t=a(9439),i=a(8182),n=a(2791),r=function(e){var s=new Date(e).getTime(),a=(0,n.useState)(s-(new Date).getTime()),i=(0,t.Z)(a,2),r=i[0],l=i[1];return(0,n.useEffect)((function(){if(!(r<=0)){var e=setInterval((function(){l(s-(new Date).getTime())}),1e3);return function(){return clearInterval(e)}}}),[s,r]),function(e){return e<=0?[0,0,0,0]:[Math.floor(e/864e5),Math.floor(e%864e5/36e5),Math.floor(e%36e5/6e4),Math.floor(e%6e4/1e3)]}(r)},l=a(184),c=function(e){var s=e.value,a=e.type;return(0,l.jsxs)("span",{className:"cdown",children:[s," ",(0,l.jsx)("p",{children:a})]})},o=function(e){var s=e.date,a=e.className,n=r(s),o=(0,t.Z)(n,4),d=o[0],u=o[1],m=o[2],h=o[3];return(0,l.jsxs)("div",{className:(0,i.Z)("timer timer-style",a),children:[(0,l.jsx)(c,{value:d,type:"days"}),(0,l.jsx)(c,{value:u,type:"hours"}),(0,l.jsx)(c,{value:m,type:"minutes"}),(0,l.jsx)(c,{value:h,type:"secs"})]})}},7127:function(e,s,a){var t=a(9434),i=a(9230),n=(a(147),a(184));s.Z=function(e){e.currency;var s=(0,i.$G)().i18n,a=((0,t.I0)(),function(e){var a=e.target.value;s.changeLanguage(a)});return(0,n.jsxs)("div",{className:"language-currency-wrap",children:[(0,n.jsxs)("div",{className:"same-language-currency language-style",children:[(0,n.jsxs)("span",{children:["en"===s.resolvedLanguage?"English":"fn"===s.resolvedLanguage?"French":"de"===s.resolvedLanguage?"Germany":""," ",(0,n.jsx)("i",{className:"fa fa-angle-down"})]}),(0,n.jsx)("div",{className:"lang-car-dropdown",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("button",{value:"en",onClick:function(e){return a(e)},children:"English"})}),(0,n.jsx)("li",{children:(0,n.jsx)("button",{value:"fn",onClick:function(e){return a(e)},children:"French"})}),(0,n.jsx)("li",{children:(0,n.jsx)("button",{value:"de",onClick:function(e){return a(e)},children:"Germany"})})]})})]}),(0,n.jsx)("div",{className:"same-language-currency",children:(0,n.jsx)("p",{children:"Call Us 3965410"})})]})}},1977:function(e,s,a){var t=a(8182),i=a(184);s.Z=function(e){var s=e.data,a=e.testimonialClass;return(0,i.jsxs)("div",{className:(0,t.Z)(a||"single-testimonial","text-center"),children:[(0,i.jsx)("img",{src:""+s.image,alt:""}),(0,i.jsx)("p",{children:s.content}),(0,i.jsxs)("div",{className:"client-info",children:[(0,i.jsx)("i",{className:"fa fa-map-signs"}),(0,i.jsx)("h5",{children:s.customerName}),(0,i.jsx)("span",{children:s.title})]})]})}},9858:function(e,s,a){var t=a(2791),i=a(7939),n=a(8032),r=a(9354),l=a(184);s.Z=function(e){var s=e.children,a=e.headerContainerClass,c=e.headerTop,o=e.headerPaddingClass,d=e.headerPositionClass;return(0,l.jsxs)(t.Fragment,{children:[(0,l.jsx)(i.Z,{layout:a,top:c,headerPaddingClass:o,headerPositionClass:d}),s,(0,l.jsx)(n.Z,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,l.jsx)(r.Z,{})]})}},1060:function(e,s,a){a.r(s),a.d(s,{default:function(){return Z}});var t=a(2791),i=a(3695),n=a(9858),r=a(8182),l=a(1496),c=a(7842),o=JSON.parse('[{"id":1,"title":"Natural & Healthy","subtitle":"100% Organic Fruits Collection","image":"/assets/img/slider/slider-19.jpg","url":"/shop-grid-standard"},{"id":2,"title":"Natural & Healthy","subtitle":"100% Organic Veg Collection","image":"/assets/img/slider/slider-19.jpg","url":"/shop-grid-standard"}]'),d=a(1087),u=a(184),m=function(e){var s=e.data;return(0,u.jsx)("div",{className:"single-slider-2 slider-height-1 slider-height-res15 d-flex align-items-center slider-height-res bg-img",style:{backgroundImage:"url(".concat(""+s.image,")")},children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-7 ms-auto",children:(0,u.jsxs)("div",{className:"slider-content-2 slider-content-fruits slider-content-fruits--style2 slider-animated-1",children:[(0,u.jsx)("h3",{className:"animated",children:s.title}),(0,u.jsx)("h1",{className:"animated",children:s.subtitle}),(0,u.jsx)("div",{className:"slider-btn btn-hover",children:(0,u.jsx)(d.rU,{className:"animated",to:""+s.url,children:"SHOP NOW"})})]})})})})})},h={effect:"fade",fadeEffect:{crossFade:!0},modules:[l.xW],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},g=function(e){var s=e.spaceLeftClass,a=e.spaceRightClass;return(0,u.jsx)("div",{className:(0,r.Z)("slider-area",s,a),children:(0,u.jsx)("div",{className:"slider-active nav-style-1",children:o&&(0,u.jsx)(c.Z,{options:h,children:null===o||void 0===o?void 0:o.map((function(e,s){return(0,u.jsx)(c.o,{children:(0,u.jsx)(m,{data:e})},s)}))})})})},p=a(4454),x=a(4023),j=a(5005),v=a(6255),f=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,t=e.dateTime,i=e.countDownImage;return(0,u.jsx)("div",{className:(0,r.Z)("funfact-area",s,a),children:(0,u.jsx)("div",{className:"container",children:(0,u.jsxs)("div",{className:"row align-items-center",children:[(0,u.jsx)("div",{className:"col-md-8 col-lg-6",children:(0,u.jsxs)("div",{className:"funfact-content funfact-res text-center",children:[(0,u.jsx)("h2",{children:"Deal of the day"}),(0,u.jsx)("div",{className:"timer",children:(0,u.jsx)(v.Z,{date:t})}),(0,u.jsx)("div",{className:"funfact-btn funfact-btn--round-shape funfact-btn-violet btn-hover",children:(0,u.jsx)(d.rU,{to:"/shop-grid-standard",children:"SHOP NOW"})})]})}),(0,u.jsx)("div",{className:"col-md-4 col-lg-6",children:(0,u.jsx)("div",{className:"funfact-image",children:(0,u.jsx)(d.rU,{to:"/shop-grid-standard",children:(0,u.jsx)("img",{src:""+i,alt:"",className:"img-fluid"})})})})]})})})},N=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner19.jpg","title":"Featured Products","subtitle":"Choose Your Products Here","link":"/shop-grid-standard","textAlign":"right"},{"id":2,"image":"/assets/img/banner/banner20.jpg","title":"New Products","subtitle":"Choose Your Products Here","link":"/shop-grid-standard","textAlign":"left"}]'),b=function(e){var s=e.data,a=e.spaceBottomClass;return(0,u.jsxs)("div",{className:(0,r.Z)("single-banner-2",a,"right"===s.textAlign&&"align_right"),children:[(0,u.jsx)(d.rU,{to:""+s.link,children:(0,u.jsx)("img",{src:""+s.image,alt:""})}),(0,u.jsxs)("div",{className:"banner-content-2 banner-content-2--style2 banner-content-2--style2--violet",children:[(0,u.jsx)("h3",{children:s.title}),(0,u.jsxs)("h4",{children:[s.subtitle," ",(0,u.jsx)("span",{children:s.price})]}),(0,u.jsx)(d.rU,{to:""+s.link,children:(0,u.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})},C=function(e){var s=e.spaceBottomClass,a=e.spaceTopClass;return(0,u.jsx)("div",{className:(0,r.Z)("banner-area",a,s),children:(0,u.jsx)("div",{className:"container-fluid",children:(0,u.jsx)("div",{className:"row",children:null===N||void 0===N?void 0:N.map((function(e,s){return(0,u.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,u.jsx)(b,{data:e,spaceBottomClass:"mb-30"})},s)}))})})})},y=a(919),Z=function(){return(0,u.jsxs)(t.Fragment,{children:[(0,u.jsx)(i.Z,{titleTemplate:"Organic Food Home",description:"Organic food home of flone react minimalist eCommerce template."}),(0,u.jsxs)(n.Z,{headerTop:"visible",children:[(0,u.jsx)(g,{spaceLeftClass:"ml-70",spaceRightClass:"mr-70"}),(0,u.jsx)(p.Z,{spaceTopClass:"pt-10",containerClass:"container-fluid",gutterClass:"padding-10-row-col"}),(0,u.jsx)(y.Z,{spaceTopClass:"pt-95",spaceBottomClass:"pb-70",category:"organic food"}),(0,u.jsx)(C,{spaceTopClass:"pt-95"}),(0,u.jsx)(f,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",dateTime:"November 13, 2023 12:12:00",countDownImage:"/assets/img/banner/deal-6.png"}),(0,u.jsx)(x.Z,{spaceTopClass:"pt-100",spaceBottomClass:"pb-95",bgColorClass:"bg-gray-3"}),(0,u.jsx)(j.Z,{spaceTopClass:"pt-70",spaceBottomClass:"pb-70"})]})]})}},5005:function(e,s,a){a.d(s,{Z:function(){return o}});var t=a(8182),i=a(9069),n=a(1087),r=a(184),l=function(e){var s=e.singlePost;return(0,r.jsxs)("div",{className:"blog-wrap mb-30 scroll-zoom",children:[(0,r.jsxs)("div",{className:"blog-img",children:[(0,r.jsx)(n.rU,{to:""+s.url,children:(0,r.jsx)("img",{src:""+s.image,alt:""})}),(0,r.jsx)("div",{className:"blog-category-names blog-category-names--style2",children:s.category.map((function(e,s){return(0,r.jsx)("span",{className:"red",children:e},s)}))})]}),(0,r.jsx)("div",{className:"blog-content-wrap",children:(0,r.jsxs)("div",{className:"blog-content blog-content--style2 text-center",children:[(0,r.jsx)("h3",{children:(0,r.jsx)(n.rU,{to:""+s.url,children:s.title})}),(0,r.jsxs)("span",{children:["By"," ",(0,r.jsx)(n.rU,{to:""+s.authorUrl,children:s.author})]})]})})]})},c=a(996),o=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass;return(0,r.jsx)("div",{className:(0,t.Z)("blog-area",s,a),children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(c.Z,{titleText:"Latest News",subtitleText:"But I must explain to you how all this mistaken idea of denouncing.",positionClass:"text-center",spaceClass:"mb-55",borderClass:"no-border"}),(0,r.jsx)("div",{className:"row",children:null===i||void 0===i?void 0:i.map((function(e){return(0,r.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,r.jsx)(l,{singlePost:e})},e.id)}))})]})})}},4454:function(e,s,a){a.d(s,{Z:function(){return l}});var t=a(8182),i=JSON.parse('[{"id":1,"titleImage":"/assets/img/icon-img/support-8.png","title":"Free shipping on all order","iconImage":"/assets/img/icon-img/support-5.png","backgroundColor":"#ccfbe9"},{"id":2,"titleImage":"/assets/img/icon-img/support-9.png","title":"Back guarantee under 5 days","iconImage":"/assets/img/icon-img/support-6.png","backgroundColor":"#f2fbcc"},{"id":3,"titleImage":"/assets/img/icon-img/support-10.png","title":"On every order over $150","iconImage":"/assets/img/icon-img/support-7.png","backgroundColor":"#ddfbcc"}]'),n=a(184),r=function(e){var s=e.data,a=e.spaceBottomClass;return(0,n.jsxs)("div",{className:(0,t.Z)("support-wrap-3 text-center",a),style:{backgroundColor:"".concat(s.backgroundColor)},children:[(0,n.jsx)("div",{className:"support-icon-2",children:(0,n.jsx)("img",{className:"animated",src:""+s.iconImage,alt:""})}),(0,n.jsxs)("div",{className:"support-content-3",children:[(0,n.jsx)("img",{src:""+s.titleImage,alt:""}),(0,n.jsx)("p",{children:s.title})]})]})},l=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,l=e.containerClass,c=e.gutterClass,o=e.responsiveClass,d=e.bgImg;return(0,n.jsx)("div",{className:(0,t.Z)("support-area hm9-section-padding",s,a,o),style:d?{backgroundImage:"url(".concat(""+d,")")}:{},children:(0,n.jsx)("div",{className:(0,t.Z)(l,c),children:(0,n.jsx)("div",{className:"row",children:null===i||void 0===i?void 0:i.map((function(e,s){return(0,n.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,n.jsx)(r,{data:e,spaceBottomClass:"mb-10"})},s)}))})})})}},7939:function(e,s,a){a.d(s,{Z:function(){return g}});var t=a(9439),i=a(2791),n=a(8182),r=a(1567),l=a(9381),c=a(2824),o=a(2412),d=a(9434),u=a(7127),m=a(184),h=function(e){var s=e.borderStyle,a=(0,d.v9)((function(e){return e.currency}));return(0,m.jsxs)("div",{className:(0,n.Z)("header-top-wap","fluid-border"===s&&"border-bottom"),children:[(0,m.jsx)(u.Z,{currency:a}),(0,m.jsx)("div",{className:"header-offer",children:(0,m.jsxs)("p",{children:["Free delivery on order over"," ",(0,m.jsx)("span",{children:a.currencySymbol+(200*a.currencyRate).toFixed(2)})]})})]})},g=function(e){var s=e.layout,a=e.top,d=e.borderStyle,u=e.headerPaddingClass,g=e.headerPositionClass,p=e.headerBgClass,x=(0,i.useState)(0),j=(0,t.Z)(x,2),v=j[0],f=j[1],N=(0,i.useState)(0),b=(0,t.Z)(N,2),C=b[0],y=b[1];(0,i.useEffect)((function(){var e=document.querySelector(".sticky-bar");return y(e.offsetTop),window.addEventListener("scroll",Z),function(){window.removeEventListener("scroll",Z)}}),[]);var Z=function(){f(window.scrollY)};return(0,m.jsxs)("header",{className:(0,n.Z)("header-area clearfix",p,g),children:[(0,m.jsx)("div",{className:(0,n.Z)("header-top-area",u,"visible"===a?"d-none d-lg-block":"d-none","fluid-border"===d&&"border-none"),children:(0,m.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,m.jsx)(h,{borderStyle:d})})}),(0,m.jsxs)("div",{className:(0,n.Z)(u,"sticky-bar header-res-padding clearfix",v>C&&"stick"),children:[(0,m.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,m.jsx)(r.Z,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})}),(0,m.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,m.jsx)(l.Z,{})}),(0,m.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,m.jsx)(c.Z,{})})]})}),(0,m.jsx)(o.Z,{})]})]})}},5770:function(e,s,a){a.d(s,{Z:function(){return p}});var t=a(2791),i=a(9434),n=a(1770),r=a(9439),l=a(1087),c=a(8182),o=a(6664),d=a(4275),u=a(8725),m=a(1065),h=a(184),g=function(e){var s=e.product,a=e.currency,g=e.cartItem,p=e.wishlistItem,x=e.compareItem,j=e.spaceBottomClass,v=e.colorClass,f=e.titlePriceClass,N=(0,t.useState)(!1),b=(0,r.Z)(N,2),C=b[0],y=b[1],Z=(0,n.lk)(s.price,s.discount),w=+(s.price*a.currencyRate).toFixed(2),k=+(Z*a.currencyRate).toFixed(2),I=(0,i.I0)();return(0,h.jsxs)(t.Fragment,{children:[(0,h.jsxs)("div",{className:(0,c.Z)("product-wrap-2",j,v),children:[(0,h.jsxs)("div",{className:"product-img",children:[(0,h.jsxs)(l.rU,{to:"/product/"+s.id,children:[(0,h.jsx)("img",{className:"default-img",src:""+s.image[0],alt:""}),s.image.length>1?(0,h.jsx)("img",{className:"hover-img",src:""+s.image[1],alt:""}):""]}),s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,h.jsxs)("div",{className:"product-action-2",children:[s.affiliateLink?(0,h.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,h.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?(0,h.jsx)(l.rU,{to:"".concat("","/product/").concat(s.id),title:"Select options",children:(0,h.jsx)("i",{className:"fa fa-cog"})}):s.stock&&s.stock>0?(0,h.jsxs)("button",{onClick:function(){return I((0,d.Xq)(s))},className:void 0!==g&&g.quantity>0?"active":"",disabled:void 0!==g&&g.quantity>0,title:void 0!==g?"Added to cart":"Add to cart",children:[" ",(0,h.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,h.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,h.jsx)("i",{className:"fa fa-shopping-cart"})}),(0,h.jsx)("button",{onClick:function(){return y(!0)},title:"Quick View",children:(0,h.jsx)("i",{className:"fa fa-eye"})}),(0,h.jsx)("button",{className:void 0!==x?"active":"",disabled:void 0!==x,title:void 0!==x?"Added to compare":"Add to compare",onClick:function(){return I((0,m.a$)(s))},children:(0,h.jsx)("i",{className:"fa fa-retweet"})})]})]}),(0,h.jsxs)("div",{className:"product-content-2",children:[(0,h.jsxs)("div",{className:"title-price-wrap-2 ".concat(f||""),children:[(0,h.jsx)("h3",{children:(0,h.jsx)(l.rU,{to:"/product/"+s.id,children:s.name})}),(0,h.jsx)("div",{className:"price-2",children:null!==Z?(0,h.jsxs)(t.Fragment,{children:[(0,h.jsx)("span",{children:a.currencySymbol+k})," ",(0,h.jsx)("span",{className:"old",children:a.currencySymbol+w})]}):(0,h.jsxs)("span",{children:[a.currencySymbol+w," "]})})]}),(0,h.jsx)("div",{className:"pro-wishlist-2",children:(0,h.jsx)("button",{className:void 0!==p?"active":"",disabled:void 0!==p,title:void 0!==p?"Added to wishlist":"Add to wishlist",onClick:function(){return I((0,u.Mp)(s))},children:(0,h.jsx)("i",{className:"fa fa-heart-o"})})})]})]}),(0,h.jsx)(o.Z,{show:C,onHide:function(){return y(!1)},product:s,currency:a,discountedPrice:Z,finalProductPrice:w,finalDiscountedPrice:k,wishlistItem:p,compareItem:x})]})},p=function(e){var s=e.spaceBottomClass,a=e.colorClass,r=e.titlePriceClass,l=e.category,c=e.type,o=e.limit,d=(0,i.v9)((function(e){return e.product})).products,u=(0,i.v9)((function(e){return e.currency})),m=(0,i.v9)((function(e){return e.cart})).cartItems,p=(0,i.v9)((function(e){return e.wishlist})).wishlistItems,x=(0,i.v9)((function(e){return e.compare})).compareItems,j=(0,n.Xp)(d,l,c,o);return(0,h.jsx)(t.Fragment,{children:null===j||void 0===j?void 0:j.map((function(e){return(0,h.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,h.jsx)(g,{spaceBottomClass:s,colorClass:a,product:e,currency:u,cartItem:m.find((function(s){return s.id===e.id})),wishlistItem:p.find((function(s){return s.id===e.id})),compareItem:x.find((function(s){return s.id===e.id})),titlePriceClass:r})},e.id)}))})}},919:function(e,s,a){var t=a(8182),i=a(1087),n=a(1865),r=a(126),l=a(5770),c=a(184);s.Z=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,o=e.category,d=e.productTabClass;return(0,c.jsx)("div",{className:(0,t.Z)("product-area",s,a),children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsxs)(n.Z.Container,{defaultActiveKey:"bestSeller",children:[(0,c.jsxs)(r.Z,{variant:"pills",className:(0,t.Z)("product-tab-list-2 mb-60",d),children:[(0,c.jsx)(r.Z.Item,{children:(0,c.jsx)(r.Z.Link,{eventKey:"newArrival",children:(0,c.jsx)("h4",{children:"New Arrivals"})})}),(0,c.jsx)(r.Z.Item,{children:(0,c.jsx)(r.Z.Link,{eventKey:"bestSeller",children:(0,c.jsx)("h4",{children:"Best Sellers"})})}),(0,c.jsx)(r.Z.Item,{children:(0,c.jsx)(r.Z.Link,{eventKey:"saleItems",children:(0,c.jsx)("h4",{children:"Sale Items"})})})]}),(0,c.jsxs)(n.Z.Content,{children:[(0,c.jsx)(n.Z.Pane,{eventKey:"newArrival",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)(l.Z,{category:o,type:"new",limit:8,spaceBottomClass:"mb-25"})})}),(0,c.jsx)(n.Z.Pane,{eventKey:"bestSeller",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)(l.Z,{category:o,type:"bestSeller",limit:8,spaceBottomClass:"mb-25"})})}),(0,c.jsx)(n.Z.Pane,{eventKey:"saleItems",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)(l.Z,{category:o,type:"saleItems",limit:8,spaceBottomClass:"mb-25"})})})]})]}),(0,c.jsx)("div",{className:"view-more text-center mt-20 toggle-btn6 col-12",children:(0,c.jsx)(i.rU,{className:"loadMore6",to:"/shop-grid-standard",children:"VIEW MORE PRODUCTS"})})]})})}},4023:function(e,s,a){var t=a(8182),i=a(7842),n=a(9207),r=a(1977),l=a(184),c={slidesPerView:1,loop:!0,autoplay:!0};s.Z=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,o=e.spaceLeftClass,d=e.spaceRightClass,u=e.bgColorClass,m=e.testimonialClass;return(0,l.jsx)("div",{className:(0,t.Z)("testimonial-area",s,a,o,d,u),children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-lg-10 mx-auto",children:(0,l.jsx)("div",{className:"testimonial-active nav-style-1 nav-testi-style",children:n&&(0,l.jsx)(i.Z,{options:c,children:n.map((function(e,s){return(0,l.jsx)(i.o,{children:(0,l.jsx)(r.Z,{data:e,testimonialClass:m})},s)}))})})})})})})}},9069:function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/img/blog/blog-1.jpg","category":["lifestyle","men"],"title":"A guide to latest trends","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":2,"image":"/assets/img/blog/blog-2.jpg","category":["lifestyle"],"title":"Five ways to lead a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":3,"image":"/assets/img/blog/blog-3.jpg","category":["lifestyle"],"title":"Tips on having a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"}]')},9207:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"Grace Alvarado","title":"customer"},{"id":"2","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"John Doe","title":"customer"}]')}}]);
//# sourceMappingURL=1060.d77be5c9.chunk.js.map