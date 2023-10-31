/*! For license information please see 5009.cfd39632.chunk.js.LICENSE.txt */
(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[5009],{9841:function(e,s,t){"use strict";var i=t(8182),n=t(9577),r=t(184),a=function(e){var s,t=e.status,n=e.message,a=e.onValidated,c=e.spaceTopClass,o=e.subscribeBtnClass;return(0,r.jsx)("div",{className:(0,i.Z)("subscribe-form-3",c),children:(0,r.jsxs)("div",{className:"mc-form",children:[(0,r.jsx)("div",{children:(0,r.jsx)("input",{className:"email",ref:function(e){return s=e},type:"email",placeholder:"Your Email Address",required:!0})}),"sending"===t&&(0,r.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===t&&(0,r.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===t&&(0,r.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),(0,r.jsx)("div",{className:"clear-3 ".concat(o||""),children:(0,r.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&a({EMAIL:s.value}),s.value=""},children:"SUBSCRIBE"})})]})})};s.Z=function(e){var s=e.mailchimpUrl,t=e.spaceTopClass,i=e.subscribeBtnClass;return(0,r.jsx)("div",{children:(0,r.jsx)(n.Z,{url:s,render:function(e){var s=e.subscribe,n=e.status,c=e.message;return(0,r.jsx)(a,{status:n,message:c,onValidated:function(e){return s(e)},spaceTopClass:t,subscribeBtnClass:i})}})})}},6664:function(e,s,t){"use strict";var i=t(1413),n=t(9439),r=t(2791),a=t(1496),c=t(9234),o=t(9434),l=t(2558),d=t(7842),u=t(1770),m=t(4275),p=t(8725),f=t(1065),h=t(184);s.Z=function(e){var s=e.product,t=e.currency,x=e.discountedPrice,v=e.finalProductPrice,j=e.finalDiscountedPrice,g=e.show,b=e.onHide,N=e.wishlistItem,w=e.compareItem,y=(0,r.useState)(null),k=(0,n.Z)(y,2),C=k[0],Z=k[1],S=(0,o.I0)(),I=(0,o.v9)((function(e){return e.cart})).cartItems,B=(0,r.useState)(s.variation?s.variation[0].color:""),P=(0,n.Z)(B,2),T=P[0],E=P[1],O=(0,r.useState)(s.variation?s.variation[0].size[0].name:""),z=(0,n.Z)(O,2),A=z[0],F=z[1],q=(0,r.useState)(s.variation?s.variation[0].size[0].stock:s.stock),L=(0,n.Z)(q,2),R=L[0],H=L[1],U=(0,r.useState)(1),_=(0,n.Z)(U,2),V=_[0],M=_[1],W=(0,u.bh)(I,s,T,A),D={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:C},modules:[a.xW,a.o3]},Y={onSwiper:Z,spaceBetween:10,slidesPerView:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:!0};return(0,h.jsxs)(c.Z,{show:g,onHide:function(){Z(null),b()},className:"product-quickview-modal-wrapper",children:[(0,h.jsx)(c.Z.Header,{closeButton:!0}),(0,h.jsx)("div",{className:"modal-body",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsxs)("div",{className:"col-md-5 col-sm-12 col-xs-12",children:[(0,h.jsx)("div",{className:"product-large-image-wrapper",children:(0,h.jsx)(d.Z,{options:D,children:s.image&&s.image.map((function(e,s){return(0,h.jsx)(d.o,{children:(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:""+e,className:"img-fluid",alt:"Product"})})},s)}))})}),(0,h.jsx)("div",{className:"product-small-image-wrapper mt-15",children:(0,h.jsx)(d.Z,{options:Y,children:s.image&&s.image.map((function(e,s){return(0,h.jsx)(d.o,{children:(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:""+e,className:"img-fluid",alt:""})})},s)}))})})]}),(0,h.jsx)("div",{className:"col-md-7 col-sm-12 col-xs-12",children:(0,h.jsxs)("div",{className:"product-details-content quickview-content",children:[(0,h.jsx)("h2",{children:s.name}),(0,h.jsx)("div",{className:"product-details-price",children:null!==x?(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)("span",{children:t.currencySymbol+j})," ",(0,h.jsx)("span",{className:"old",children:t.currencySymbol+v})]}):(0,h.jsxs)("span",{children:[t.currencySymbol+v," "]})}),s.rating&&s.rating>0?(0,h.jsx)("div",{className:"pro-details-rating-wrap",children:(0,h.jsx)("div",{className:"pro-details-rating",children:(0,h.jsx)(l.Z,{ratingValue:s.rating})})}):"",(0,h.jsx)("div",{className:"pro-details-list",children:(0,h.jsx)("p",{children:s.shortDescription})}),s.variation?(0,h.jsxs)("div",{className:"pro-details-size-color",children:[(0,h.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,h.jsx)("span",{children:"Color"}),(0,h.jsx)("div",{className:"pro-details-color-content",children:s.variation.map((function(e,s){return(0,h.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,h.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===T?"checked":"",onChange:function(){E(e.color),F(e.size[0].name),H(e.size[0].stock),M(1)}}),(0,h.jsx)("span",{className:"checkmark"})]},s)}))})]}),(0,h.jsxs)("div",{className:"pro-details-size",children:[(0,h.jsx)("span",{children:"Size"}),(0,h.jsx)("div",{className:"pro-details-size-content",children:s.variation&&s.variation.map((function(e){return e.color===T?e.size.map((function(e,s){return(0,h.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,h.jsx)("input",{type:"radio",value:e.name,checked:e.name===A?"checked":"",onChange:function(){F(e.name),H(e.stock),M(1)}}),(0,h.jsx)("span",{className:"size-name",children:e.name})]},s)})):""}))})]})]}):"",s.affiliateLink?(0,h.jsx)("div",{className:"pro-details-quality",children:(0,h.jsx)("div",{className:"pro-details-cart btn-hover",children:(0,h.jsx)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Buy Now"})})}):(0,h.jsxs)("div",{className:"pro-details-quality",children:[(0,h.jsxs)("div",{className:"cart-plus-minus",children:[(0,h.jsx)("button",{onClick:function(){return M(V>1?V-1:1)},className:"dec qtybutton",children:"-"}),(0,h.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:V,readOnly:!0}),(0,h.jsx)("button",{onClick:function(){return M(V<R-W?V+1:V)},className:"inc qtybutton",children:"+"})]}),(0,h.jsx)("div",{className:"pro-details-cart btn-hover",children:R&&R>0?(0,h.jsxs)("button",{onClick:function(){return S((0,m.Xq)((0,i.Z)((0,i.Z)({},s),{},{quantity:V,selectedProductColor:T||(s.selectedProductColor?s.selectedProductColor:null),selectedProductSize:A||(s.selectedProductSize?s.selectedProductSize:null)})))},disabled:W>=R,children:[" ","Add To Cart"," "]}):(0,h.jsx)("button",{disabled:!0,children:"Out of Stock"})}),(0,h.jsx)("div",{className:"pro-details-wishlist",children:(0,h.jsx)("button",{className:void 0!==N?"active":"",disabled:void 0!==N,title:void 0!==N?"Added to wishlist":"Add to wishlist",onClick:function(){return S((0,p.Mp)(s))},children:(0,h.jsx)("i",{className:"pe-7s-like"})})}),(0,h.jsx)("div",{className:"pro-details-compare",children:(0,h.jsx)("button",{className:void 0!==w?"active":"",disabled:void 0!==w,title:void 0!==w?"Added to compare":"Add to compare",onClick:function(){return S((0,f.a$)(s))},children:(0,h.jsx)("i",{className:"pe-7s-shuffle"})})})]})]})})]})})]})}},2558:function(e,s,t){"use strict";var i=t(2791),n=t(184);s.Z=function(e){for(var s=e.ratingValue,t=[],r=0;r<5;r++)t.push((0,n.jsx)("i",{className:"fa fa-star-o"},r));if(s&&s>0)for(var a=0;a<=s-1;a++)t[a]=(0,n.jsx)("i",{className:"fa fa-star-o yellow"},a);return(0,n.jsx)(i.Fragment,{children:t})}},9354:function(e,s,t){"use strict";t.d(s,{Z:function(){return c}});var i=t(9439),n=t(2791),r=function(){var e=(0,n.useState)(!1),s=(0,i.Z)(e,2),t=s[0],r=s[1];return(0,n.useEffect)((function(){var e=function(){var e=window.pageYOffset;r(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[t]),{stick:t,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},a=t(184),c=function(){var e=r(),s=e.stick,t=e.onClickHandler;return s?(0,a.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:t,children:(0,a.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},7842:function(e,s,t){"use strict";t.d(s,{o:function(){return o.o5}});var i=t(3433),n=t(1413),r=t(2791),a=t(8182),c=t(1496),o=t(8563),l=t(184),d=(0,r.forwardRef)((function(e,s){var t=e.options,r=e.prevIcon,d=e.nextIcon,u=e.children,m=e.className,p=e.navClass,f=void 0!==(null===t||void 0===t?void 0:t.modules)?t.modules:[],h="prev-".concat(p||"swiper-nav"),x="next-".concat(p||"swiper-nav"),v=(0,n.Z)((0,n.Z)({slidesPerView:1,spaceBetween:0,loop:!1,autoplay:!(null===t||void 0===t||!t.autoplay)&&{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{}},t),{},{modules:[c.W_,c.tl,c.s5,c.pt].concat((0,i.Z)(f)),navigation:!(null===t||void 0===t||!t.navigation)&&{prevEl:".".concat(h),nextEl:".".concat(x)},pagination:!(null===t||void 0===t||!t.pagination)&&{clickable:!0}});return(0,l.jsxs)("div",{className:(0,a.Z)("swiper-wrap",m),ref:s,children:[(0,l.jsx)(o.tq,(0,n.Z)((0,n.Z)({},v),{},{children:u})),(null===v||void 0===v?void 0:v.navigation)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{type:"button",className:"swiper-button-prev ht-swiper-button-nav ".concat(h),children:(0,l.jsx)("i",{className:(0,a.Z)(r,"icon")})}),(0,l.jsx)("button",{type:"button",className:"swiper-button-next ht-swiper-button-nav ".concat(x),children:(0,l.jsx)("i",{className:(0,a.Z)(d,"icon")})})]})]})}));d.defaultProps={prevIcon:"pe-7s-angle-left",nextIcon:"pe-7s-angle-right",navStyle:1,dotStyle:1},s.Z=d},6705:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return E}});var i=t(2791),n=t(3695),r=t(9439),a=t(1087),c=t(8182),o=t(9381),l=t(2824),d=t(2412),u=t(184),m=function(){var e=(0,i.useState)(0),s=(0,r.Z)(e,2),t=s[0],n=s[1],m=(0,i.useState)(0),p=(0,r.Z)(m,2),f=p[0],h=p[1];(0,i.useEffect)((function(){var e=document.querySelector(".sticky-bar");return h(e.offsetTop),window.addEventListener("scroll",x),function(){window.removeEventListener("scroll",x)}}),[]);var x=function(){n(window.scrollY)};return(0,u.jsx)("header",{className:(0,c.Z)("header-area sticky-bar header-padding-3 header-res-padding clearfix transparent-bar",t>f&"stick"),children:(0,u.jsxs)("div",{className:"container-fluid",children:[(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-xl-5 col-lg-6 d-none d-lg-block",children:(0,u.jsx)(o.Z,{menuWhiteClass:"menu-white"})}),(0,u.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,u.jsxs)("div",{className:"logo text-center logo-hm5",children:[(0,u.jsx)(a.rU,{className:"sticky-none",to:"/",children:(0,u.jsx)("img",{alt:"",src:"assets/img/logo/logo-2.png"})}),(0,u.jsx)(a.rU,{className:"sticky-block",to:"/",children:(0,u.jsx)("img",{alt:"",src:"assets/img/logo/logo.png"})})]})}),(0,u.jsx)("div",{className:"col-xl-5 col-lg-4 col-md-6 col-8",children:(0,u.jsx)(l.Z,{iconWhiteClass:"header-right-wrap-white"})})]}),(0,u.jsx)(d.Z,{})]})})},p=t(4490),f=t(9354),h=function(e){var s=e.children;return(0,u.jsxs)("div",{className:"wrapper",children:[(0,u.jsx)(m,{}),s,(0,u.jsx)(p.Z,{backgroundColorClass:"bg-black",footerTopBackgroundColorClass:"bg-black",footerTopSpaceTopClass:"pt-80",spaceBottomClass:"pb-25",footerLogo:"/assets/img/logo/logo-2.png"}),(0,u.jsx)(f.Z,{})]})},x=t(1496),v=t(7842),j=JSON.parse('[{"id":1,"title":"New Arrival","subtitle":"Final Sale","text":"30% off Summer Vacation","image":"/assets/img/slider/slider-3.jpg","url":"/shop-grid-standard"},{"id":2,"title":"New Arrival","subtitle":"Final Sale","text":"40% off Summer Vacation","image":"/assets/img/slider/slider-4.jpg","url":"/shop-grid-standard"}]'),g=function(e){var s=e.data;return(0,u.jsx)("div",{className:(0,c.Z)("slider-height-4 d-flex align-items-center bg-img"),style:{backgroundImage:"url(".concat(""+s.image,")")},children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col-xl-12 col-lg-12 col-md-12 col-12",children:(0,u.jsxs)("div",{className:"slider-content-5 slider-animated-1 text-center",children:[(0,u.jsx)("h3",{className:"animated",children:s.title}),(0,u.jsx)("h1",{className:"animated",children:s.subtitle}),(0,u.jsx)("p",{className:"animated",children:s.text}),(0,u.jsx)("div",{className:"slider-btn-5 btn-hover",children:(0,u.jsx)(a.rU,{className:"animated",to:""+s.url,children:"SHOP NOW"})})]})})})})})},b={effect:"fade",fadeEffect:{crossFade:!0},modules:[x.xW],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},N=function(){return(0,u.jsx)("div",{className:"slider-area",children:(0,u.jsx)("div",{className:"slider-active-2 nav-style-2",children:(0,u.jsx)(v.Z,{options:b,children:null===j||void 0===j?void 0:j.map((function(e,s){return(0,u.jsx)(v.o,{children:(0,u.jsx)(g,{data:e})},s)}))})})})},w=t(1208),y=t(9434),k=t(1770),C=t(6664),Z=t(4275),S=t(8725),I=t(1065),B=function(e){var s=e.product,t=e.currency,n=e.cartItem,o=e.wishlistItem,l=e.compareItem,d=e.spaceBottomClass,m=(0,i.useState)(!1),p=(0,r.Z)(m,2),f=p[0],h=p[1],x=(0,k.lk)(s.price,s.discount),v=+(s.price*t.currencyRate).toFixed(2),j=+(x*t.currencyRate).toFixed(2),g=(0,y.I0)();return(0,u.jsxs)(i.Fragment,{children:[(0,u.jsx)("div",{className:(0,c.Z)("product-wrap-3 scroll-zoom",d),children:(0,u.jsxs)("div",{className:"product-img",children:[(0,u.jsx)(a.rU,{to:"/product/"+s.id,children:(0,u.jsx)("img",{className:"default-img",src:""+s.image[0],alt:""})}),s.discount||s.new?(0,u.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,u.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,u.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,u.jsx)("div",{className:"product-content-3-wrap",children:(0,u.jsxs)("div",{className:"product-content-3",children:[(0,u.jsx)("div",{className:"product-title",children:(0,u.jsx)("h3",{children:(0,u.jsx)(a.rU,{to:"/product/"+s.id,children:s.name})})}),(0,u.jsx)("div",{className:"price-3",children:null!==x?(0,u.jsxs)(i.Fragment,{children:[(0,u.jsx)("span",{children:t.currencySymbol+j})," ",(0,u.jsx)("span",{className:"old",children:t.currencySymbol+v})]}):(0,u.jsxs)("span",{children:[t.currencySymbol+v," "]})}),(0,u.jsxs)("div",{className:"product-action-3",children:[(0,u.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,u.jsx)("button",{className:void 0!==o?"active":"",disabled:void 0!==o,title:void 0!==o?"Added to wishlist":"Add to wishlist",onClick:function(){return g((0,S.Mp)(s))},children:(0,u.jsx)("i",{className:"fa fa-heart-o"})})}),(0,u.jsx)("div",{className:"pro-same-action pro-cart",children:s.affiliateLink?(0,u.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,u.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?(0,u.jsx)(a.rU,{to:"".concat("","/product/").concat(s.id),title:"Select options",children:(0,u.jsx)("i",{class:"fa fa-cog"})}):s.stock&&s.stock>0?(0,u.jsxs)("button",{onClick:function(){return g((0,Z.Xq)(s))},className:void 0!==n&&n.quantity>0?"active":"",disabled:void 0!==n&&n.quantity>0,title:void 0!==n?"Added to cart":"Add to cart",children:[" ",(0,u.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,u.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,u.jsx)("i",{className:"fa fa-shopping-cart"})})}),(0,u.jsx)("div",{className:"pro-same-action pro-compare",children:(0,u.jsx)("button",{className:void 0!==l?"active":"",disabled:void 0!==l,title:void 0!==l?"Added to compare":"Add to compare",onClick:function(){return g((0,I.a$)(s))},children:(0,u.jsx)("i",{className:"fa fa-retweet"})})}),(0,u.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,u.jsx)("button",{onClick:function(){return h(!0)},title:"Quick View",children:(0,u.jsx)("i",{className:"fa fa-eye"})})})]})]})})]})}),(0,u.jsx)(C.Z,{show:f,onHide:function(){return h(!1)},product:s,currency:t,discountedPrice:x,finalProductPrice:v,finalDiscountedPrice:j,wishlistItem:o,compareItem:l})]})},P=function(e){var s=e.sliderClassName,t=e.spaceBottomClass,n=e.category,r=e.type,a=e.limit,c=(0,y.v9)((function(e){return e.product})).products,o=(0,y.v9)((function(e){return e.currency})),l=(0,y.v9)((function(e){return e.cart})).cartItems,d=(0,y.v9)((function(e){return e.wishlist})).wishlistItems,m=(0,y.v9)((function(e){return e.compare})).compareItems,p=(0,k.Xp)(c,n,r,a);return(0,u.jsx)(i.Fragment,{children:null===p||void 0===p?void 0:p.map((function(e){return(0,u.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12",children:(0,u.jsx)(B,{sliderClassName:s,spaceBottomClass:t,product:e,currency:o,cartItem:l.find((function(s){return s.id===e.id})),wishlistItem:d.find((function(s){return s.id===e.id})),compareItem:m.find((function(s){return s.id===e.id}))})},e.id)}))})},T=function(e){var s=e.spaceTopClass,t=e.spaceBottomClass,i=e.category;return(0,u.jsx)("div",{className:(0,c.Z)("product-area hm5-section-padding",s,t),children:(0,u.jsx)("div",{className:"container-fluid",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)(P,{category:i,limit:12,spaceBottomClass:"mb-20"})})})})},E=function(){return(0,u.jsxs)(i.Fragment,{children:[(0,u.jsx)(n.Z,{titleTemplate:"Fashion Home",description:"Fashion home of flone react minimalist eCommerce template."}),(0,u.jsxs)(h,{children:[(0,u.jsx)(N,{}),(0,u.jsx)(T,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",category:"accessories"}),(0,u.jsx)(w.Z,{spaceBottomClass:"pb-100"})]})]})}},4490:function(e,s,t){"use strict";var i=t(8182),n=t(1087),r=t(184);s.Z=function(e){var s=e.backgroundColorClass,t=e.copyrightColorClass,a=e.spaceLeftClass,c=e.spaceRightClass,o=e.footerTopBackgroundColorClass,l=e.footerTopSpaceTopClass,d=e.footerTopSpaceBottomClass,u=e.footerLogo,m=e.backgroundImage;return(0,r.jsxs)("footer",{className:(0,i.Z)("footer-area",s,a,c,m&&"bg-img"),style:{backgroundImage:" ".concat(m?"url(".concat(""+m,")"):"url()")},children:[(0,r.jsx)("div",{className:(0,i.Z)("footer-top text-center",o,l,d),children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"footer-logo",children:(0,r.jsx)(n.rU,{to:"",children:(0,r.jsx)("img",{alt:"",src:""+"".concat(u||"/assets/img/logo/logo.png")})})}),(0,r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"}),(0,r.jsx)("div",{className:"footer-social",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"//www.facebook.com",children:(0,r.jsx)("i",{className:"fa fa-facebook"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"//www.dribbble.com",children:(0,r.jsx)("i",{className:"fa fa-dribbble"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"//www.pinterest.com",children:(0,r.jsx)("i",{className:"fa fa-pinterest-p"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"//www.twitter.com",children:(0,r.jsx)("i",{className:"fa fa-twitter"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"//www.linkedin.com",children:(0,r.jsx)("i",{className:"fa fa-linkedin"})})})]})})]})}),(0,r.jsx)("div",{className:"footer-bottom text-center",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:(0,i.Z)("copyright-2",t),children:(0,r.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,r.jsx)("a",{href:"//www.hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Flone"}),". All Rights Reserved."]})})})})]})}},1208:function(e,s,t){"use strict";var i=t(8182),n=t(9841),r=t(184);s.Z=function(e){var s=e.spaceTopClass,t=e.spaceBottomClass,a=e.subscribeBtnClass;return(0,r.jsx)("div",{className:(0,i.Z)("subscribe-area-3",s,t),children:(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-xl-5 col-lg-7 col-md-10 ms-auto me-auto",children:(0,r.jsxs)("div",{className:"subscribe-style-3 text-center",children:[(0,r.jsx)("h2",{children:"Subscribe "}),(0,r.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,r.jsx)(n.Z,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:a})]})})})})})}},8633:function(e,s,t){"use strict";t.d(s,{Z:function(){return n}});var i=t(2791);function n(){return(0,i.useState)(null)}},7904:function(e,s,t){"use strict";var i=t(2791);s.Z=function(e){var s=(0,i.useRef)(e);return(0,i.useEffect)((function(){s.current=e}),[e]),s}},9007:function(e,s,t){"use strict";t.d(s,{Z:function(){return r}});var i=t(2791),n=t(7904);function r(e){var s=(0,n.Z)(e);return(0,i.useCallback)((function(){return s.current&&s.current.apply(s,arguments)}),[s])}},9815:function(e,s,t){"use strict";var i=t(2791),n="undefined"!==typeof t.g&&t.g.navigator&&"ReactNative"===t.g.navigator.product,r="undefined"!==typeof document;s.Z=r||n?i.useLayoutEffect:i.useEffect},5746:function(e,s,t){"use strict";t.d(s,{Z:function(){return n}});var i=t(2791);function n(){var e=(0,i.useRef)(!0),s=(0,i.useRef)((function(){return e.current}));return(0,i.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),s.current}},2803:function(e,s,t){"use strict";t.d(s,{Z:function(){return n}});var i=t(2791);function n(e){var s=(0,i.useRef)(null);return(0,i.useEffect)((function(){s.current=e})),s.current}},1694:function(e,s){var t;!function(){"use strict";var i={}.hasOwnProperty;function n(){for(var e=[],s=0;s<arguments.length;s++){var t=arguments[s];if(t){var r=typeof t;if("string"===r||"number"===r)e.push(t);else if(Array.isArray(t)){if(t.length){var a=n.apply(null,t);a&&e.push(a)}}else if("object"===r){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var c in t)i.call(t,c)&&t[c]&&e.push(c)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(t=function(){return n}.apply(s,[]))||(e.exports=t)}()},162:function(e,s,t){"use strict";t.d(s,{SC:function(){return o},vE:function(){return c}});var i=t(2791),n=(t(184),["xxl","xl","lg","md","sm","xs"]),r="xs",a=i.createContext({prefixes:{},breakpoints:n,minBreakpoint:r});a.Consumer,a.Provider;function c(e,s){var t=(0,i.useContext)(a).prefixes;return e||t[s]||s}function o(){return"rtl"===(0,i.useContext)(a).dir}},5987:function(e,s,t){"use strict";t.d(s,{Z:function(){return n}});var i=t(3366);function n(e,s){if(null==e)return{};var t,n,r=(0,i.Z)(e,s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}},3366:function(e,s,t){"use strict";function i(e,s){if(null==e)return{};var t,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],s.indexOf(t)>=0||(n[t]=e[t]);return n}t.d(s,{Z:function(){return i}})}}]);
//# sourceMappingURL=5009.cfd39632.chunk.js.map