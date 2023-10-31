"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[5258],{7127:function(e,s,a){var n=a(9434),r=a(9230),i=(a(147),a(184));s.Z=function(e){e.currency;var s=(0,r.$G)().i18n,a=((0,n.I0)(),function(e){var a=e.target.value;s.changeLanguage(a)});return(0,i.jsxs)("div",{className:"language-currency-wrap",children:[(0,i.jsxs)("div",{className:"same-language-currency language-style",children:[(0,i.jsxs)("span",{children:["en"===s.resolvedLanguage?"English":"fn"===s.resolvedLanguage?"French":"de"===s.resolvedLanguage?"Germany":""," ",(0,i.jsx)("i",{className:"fa fa-angle-down"})]}),(0,i.jsx)("div",{className:"lang-car-dropdown",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("button",{value:"en",onClick:function(e){return a(e)},children:"English"})}),(0,i.jsx)("li",{children:(0,i.jsx)("button",{value:"fn",onClick:function(e){return a(e)},children:"French"})}),(0,i.jsx)("li",{children:(0,i.jsx)("button",{value:"de",onClick:function(e){return a(e)},children:"Germany"})})]})})]}),(0,i.jsx)("div",{className:"same-language-currency",children:(0,i.jsx)("p",{children:"Call Us 3965410"})})]})}},27:function(e,s,a){var n=a(9439),r=a(2791),i=a(8182),t=a(1087),l=a(9434),c=a(2558),d=a(1770),o=a(6664),m=a(4275),u=a(8725),h=a(184);s.Z=function(e){var s=e.product,a=e.currency,x=e.cartItem,p=e.wishlistItem,g=e.compareItem,j=e.spaceBottomClass,v=(0,r.useState)(!1),f=(0,n.Z)(v,2),b=f[0],N=f[1],y=(0,d.lk)(s.price,s.discount),C=+(s.price*a.currencyRate).toFixed(2),Z=+(y*a.currencyRate).toFixed(2),w=(0,l.I0)();return(0,h.jsxs)(r.Fragment,{children:[(0,h.jsxs)("div",{className:(0,i.Z)("product-wrap",j),children:[(0,h.jsxs)("div",{className:"product-img",children:[(0,h.jsxs)(t.rU,{to:"/product/"+s.id,children:[(0,h.jsx)("img",{className:"default-img",src:""+s.image[0],alt:""}),s.image.length>1?(0,h.jsx)("img",{className:"hover-img",src:""+s.image[1],alt:""}):""]}),s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,h.jsxs)("div",{className:"product-action",children:[(0,h.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,h.jsx)("button",{className:void 0!==p?"active":"",disabled:void 0!==p,title:void 0!==p?"Added to wishlist":"Add to wishlist",onClick:function(){return w((0,u.Mp)(s))},children:(0,h.jsx)("i",{className:"pe-7s-like"})})}),(0,h.jsx)("div",{className:"pro-same-action pro-cart",children:s.affiliateLink?(0,h.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Buy now"," "]}):s.variation&&s.variation.length>=1?(0,h.jsx)(t.rU,{to:"".concat("","/product/").concat(s.id),children:"Select Option"}):s.stock&&s.stock>0?(0,h.jsxs)("button",{onClick:function(){return w((0,m.Xq)(s))},className:void 0!==x&&x.quantity>0?"active":"",disabled:void 0!==x&&x.quantity>0,title:void 0!==x?"Added to cart":"Add to cart",children:[" ",(0,h.jsx)("i",{className:"pe-7s-cart"})," ",void 0!==x&&x.quantity>0?"Added":"Add to cart"]}):(0,h.jsx)("button",{disabled:!0,className:"active",children:"Out of Stock"})}),(0,h.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,h.jsx)("button",{title:"Quick View",onClick:function(){return N(!0)},children:(0,h.jsx)("i",{className:"pe-7s-look"})})})]})]}),(0,h.jsxs)("div",{className:"product-content text-center",children:[(0,h.jsx)("h3",{children:(0,h.jsx)(t.rU,{to:"/product/"+s.id,children:s.name})}),s.rating&&s.rating>0?(0,h.jsx)("div",{className:"product-rating",children:(0,h.jsx)(c.Z,{ratingValue:s.rating})}):"",(0,h.jsx)("div",{className:"product-price",children:null!==y?(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)("span",{children:a.currencySymbol+Z})," ",(0,h.jsx)("span",{className:"old",children:a.currencySymbol+C})]}):(0,h.jsxs)("span",{children:[a.currencySymbol+C," "]})})]})]}),(0,h.jsx)(o.Z,{show:b,onHide:function(){return N(!1)},product:s,currency:a,discountedPrice:y,finalProductPrice:C,finalDiscountedPrice:Z,wishlistItem:p,compareItem:g})]})}},5685:function(e,s,a){a.d(s,{Z:function(){return p}});var n=a(2791),r=a(9439),i=a(9434),t=a(1567),l=a(2824),c=a(9381),d=a(2412),o=a(7127),m=a(184),u=function(){var e=(0,n.useState)(0),s=(0,r.Z)(e,2),a=s[0],u=s[1],h=(0,n.useState)(0),x=(0,r.Z)(h,2),p=x[0],g=x[1],j=(0,i.v9)((function(e){return e.currency}));(0,n.useEffect)((function(){var e=document.querySelector(".sticky-bar");return g(e.offsetTop),window.addEventListener("scroll",v),function(){window.removeEventListener("scroll",v)}}),[]);var v=function(){u(window.scrollY)};return(0,m.jsxs)("header",{className:"header-area clearfix header-hm9 transparent-bar",children:[(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"header-top-area d-none d-lg-block",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-lg-5 col-md-8 col-12",children:(0,m.jsx)(o.Z,{currency:j})}),(0,m.jsx)("div",{className:"col-lg-2 d-none d-lg-block text-center",children:(0,m.jsx)(t.Z,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo-hm-9"})}),(0,m.jsx)("div",{className:"col-lg-5 col-md-4 col-12",children:(0,m.jsx)(l.Z,{})})]})})}),(0,m.jsx)("div",{className:"header-bottom sticky-bar header-res-padding header-padding-2 ".concat(a>p?"stick":""),children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-6 d-block d-lg-none",children:(0,m.jsx)(t.Z,{imageUrl:"/assets/img/logo/logo.png"})}),(0,m.jsx)("div",{className:"col-6 d-block d-lg-none",children:(0,m.jsx)(l.Z,{})}),(0,m.jsx)("div",{className:"col-xl-12 col-lg-12 d-none d-lg-block",children:(0,m.jsx)(c.Z,{})})]}),(0,m.jsx)(d.Z,{})]})})]})},h=a(8032),x=a(9354),p=function(e){var s=e.children,a=e.footerBgClass;return(0,m.jsxs)(n.Fragment,{children:[(0,m.jsx)(u,{}),s,(0,m.jsx)(h.Z,{backgroundColorClass:a||"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,m.jsx)(x.Z,{})]})}},5258:function(e,s,a){a.r(s),a.d(s,{default:function(){return N}});var n=a(2791),r=a(3695),i=a(5685),t=a(1496),l=a(7842),c=JSON.parse('[{"id":1,"title":"-20% Off All Items","subtitle":"Green Up <br/> Your Room","image":"/assets/img/slider/single-slide-11-1.png","url":"/shop-grid-standard"},{"id":2,"title":"-40% Off All Items","subtitle":"Summer Offer <br/> 2024 Collection","image":"/assets/img/slider/single-slide-11-2.png","url":"/shop-grid-standard"}]'),d=a(1087),o=a(184),m=function(e){var s=e.data;return(0,o.jsx)("div",{className:"slider-height-9 bg-gray-2 d-flex align-items-center",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"row align-items-center slider-h11-mrg",children:[(0,o.jsx)("div",{className:"col-12 col-sm-6",children:(0,o.jsxs)("div",{className:"slider-content-11 slider-animated-1",children:[(0,o.jsx)("h3",{className:"animated",children:s.title}),(0,o.jsx)("h1",{className:"animated",dangerouslySetInnerHTML:{__html:s.subtitle}}),(0,o.jsx)("div",{className:"slider-btn-11 btn-hover",children:(0,o.jsx)(d.rU,{className:"animated",to:""+s.url,children:"SHOP NOW"})})]})}),(0,o.jsx)("div",{className:"col-lg-6 col-md-6 col-12 col-sm-6",children:(0,o.jsx)("div",{className:"slider-singleimg-hm11 slider-animated-1",children:(0,o.jsx)("img",{className:"animated",src:""+s.image,alt:""})})})]})})})},u={effect:"fade",fadeEffect:{crossFade:!0},modules:[t.xW],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},h=function(){return(0,o.jsx)("div",{className:"slider-area",children:(0,o.jsx)("div",{className:"slider-active nav-style-1",children:c&&(0,o.jsx)(l.Z,{options:u,children:c.map((function(e,s){return(0,o.jsx)(l.o,{children:(0,o.jsx)(m,{data:e})},s)}))})})})},x=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner-13.png","title":"Peepal","subtitle":"Starting at","price":"$99.00","link":"/shop-grid-standard"},{"id":2,"image":"/assets/img/banner/banner-14.png","title":"Banyan","subtitle":"Starting at","price":"$79.00","link":"/shop-grid-standard"},{"id":3,"image":"/assets/img/banner/banner-15.png","title":"Aloe Vera","subtitle":"Starting at","price":"$29.00","link":"/shop-grid-standard"}]'),p=a(8182),g=function(e){var s=e.data,a=e.spaceBottomClass;return(0,o.jsxs)("div",{className:(0,p.Z)("single-banner banner-shape banner-green-color",a),children:[(0,o.jsx)(d.rU,{to:""+s.link,children:(0,o.jsx)("img",{src:""+s.image,alt:""})}),(0,o.jsxs)("div",{className:"banner-content",children:[(0,o.jsx)("h3",{children:s.title}),(0,o.jsxs)("h4",{children:[s.subtitle," ",(0,o.jsx)("span",{children:s.price})]}),(0,o.jsx)(d.rU,{to:""+s.link,children:(0,o.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})},j=function(){return(0,o.jsx)("div",{className:"banner-area bg-gray-2",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:null===x||void 0===x?void 0:x.map((function(e,s){return(0,o.jsx)("div",{className:"col-lg-4 col-md-4",children:(0,o.jsx)(g,{data:e,spaceBottomClass:"mb-30"})},s)}))})})})},v=a(8708),f=a(6293),b=a(780),N=function(){return(0,o.jsxs)(n.Fragment,{children:[(0,o.jsx)(r.Z,{titleTemplate:"Plants Home",description:"Plants home of flone react minimalist eCommerce template."}),(0,o.jsxs)(i.Z,{footerBgClass:"bg-gray-4",children:[(0,o.jsx)(h,{}),(0,o.jsx)(j,{}),(0,o.jsx)(v.Z,{spaceTopClass:"pt-60",spaceBottomClass:"pb-70",bgColorClass:"bg-gray-2",category:"plant"}),(0,o.jsx)(f.Z,{bgColorClass:"bg-gray-2",spaceBottomClass:"pb-70",featureShapeClass:"support-shape-2"}),(0,o.jsx)(b.Z,{bgColorClass:"bg-gray-2",spaceBottomClass:"pb-100",spaceLeftClass:"pl-30",spaceRightClass:"pr-30"})]})]})}},6293:function(e,s,a){a.d(s,{Z:function(){return l}});var n=a(8182),r=JSON.parse('[{"id":1,"image":"/assets/img/icon-img/support-1.png","title":"Free Shipping","subtitle":"Free shipping on all order"},{"id":2,"image":"/assets/img/icon-img/support-2.png","title":"Support 24/7","subtitle":"Free shipping on all order"},{"id":3,"image":"/assets/img/icon-img/support-3.png","title":"Money Return","subtitle":"Free shipping on all order"}]'),i=a(184),t=function(e){var s=e.data,a=e.spaceBottomClass,r=e.featureShapeClass;return(0,i.jsx)("div",{className:(0,n.Z)("support-wrap-2 support-padding-2 text-center",r,a),children:(0,i.jsxs)("div",{className:"support-content-2",children:[(0,i.jsx)("img",{className:"animated",src:""+s.image,alt:""}),(0,i.jsx)("h5",{children:s.title}),(0,i.jsx)("p",{children:s.subtitle})]})})},l=function(e){var s=e.bgColorClass,a=e.spaceBottomClass,l=e.featureShapeClass;return(0,i.jsx)("div",{className:(0,n.Z)("support-area",s,a),children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:null===r||void 0===r?void 0:r.map((function(e,s){return(0,i.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-6",children:(0,i.jsx)(t,{data:e,spaceBottomClass:"mb-30",featureShapeClass:l})},s)}))})})})}},780:function(e,s,a){a.d(s,{Z:function(){return c}});var n=a(8182),r=a(9577),i=a(184),t=function(e){var s,a=e.status,n=e.message,r=e.onValidated;return(0,i.jsxs)("div",{className:"subscribe-form-2",children:[(0,i.jsxs)("div",{className:"mc-form",children:[(0,i.jsx)("div",{children:(0,i.jsx)("input",{className:"email",ref:function(e){return s=e},type:"email",placeholder:"Your Email Address",required:!0})}),(0,i.jsx)("div",{className:"clear-2",children:(0,i.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&r({EMAIL:s.value}),s.value=""},children:(0,i.jsx)("i",{className:"fa fa-long-arrow-right"})})})]}),"sending"===a&&(0,i.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===a&&(0,i.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===a&&(0,i.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}})]})},l=function(e){var s=e.mailchimpUrl;return(0,i.jsx)("div",{children:(0,i.jsx)(r.Z,{url:s,render:function(e){var s=e.subscribe,a=e.status,n=e.message;return(0,i.jsx)(t,{status:a,message:n,onValidated:function(e){return s(e)}})}})})},c=function(e){var s=e.bgColorClass,a=e.spaceBottomClass,r=e.spaceLeftClass,t=e.spaceRightClass;return(0,i.jsx)("div",{className:(0,n.Z)("subscribe-area",s,a,r,t),children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-xl-8 col-lg-8 ms-auto me-auto",children:(0,i.jsxs)("div",{className:"subscribe-style-2 text-center",children:[(0,i.jsx)("h2",{children:"Subscribe "}),(0,i.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,i.jsx)(l,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})]})})})})})}},2563:function(e,s,a){var n=a(2791),r=a(9434),i=a(1770),t=a(27),l=a(184);s.Z=function(e){var s=e.spaceBottomClass,a=e.category,c=e.type,d=e.limit,o=(0,r.v9)((function(e){return e.product})).products,m=(0,r.v9)((function(e){return e.currency})),u=(0,r.v9)((function(e){return e.cart})).cartItems,h=(0,r.v9)((function(e){return e.wishlist})).wishlistItems,x=(0,r.v9)((function(e){return e.compare})).compareItems,p=(0,i.Xp)(o,a,c,d);return(0,l.jsx)(n.Fragment,{children:null===p||void 0===p?void 0:p.map((function(e){return(0,l.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,l.jsx)(t.Z,{spaceBottomClass:s,product:e,currency:m,cartItem:u.find((function(s){return s.id===e.id})),wishlistItem:h.find((function(s){return s.id===e.id})),compareItem:x.find((function(s){return s.id===e.id}))})},e.id)}))})}},8708:function(e,s,a){var n=a(8182),r=a(1865),i=a(126),t=a(996),l=a(2563),c=a(184);s.Z=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,d=e.bgColorClass,o=e.category;return(0,c.jsx)("div",{className:(0,n.Z)("product-area",s,a,d),children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(t.Z,{titleText:"DAILY DEALS!",positionClass:"text-center"}),(0,c.jsxs)(r.Z.Container,{defaultActiveKey:"bestSeller",children:[(0,c.jsxs)(i.Z,{variant:"pills",className:"product-tab-list pt-30 pb-55 text-center",children:[(0,c.jsx)(i.Z.Item,{children:(0,c.jsx)(i.Z.Link,{eventKey:"newArrival",children:(0,c.jsx)("h4",{children:"New Arrivals"})})}),(0,c.jsx)(i.Z.Item,{children:(0,c.jsx)(i.Z.Link,{eventKey:"bestSeller",children:(0,c.jsx)("h4",{children:"Best Sellers"})})}),(0,c.jsx)(i.Z.Item,{children:(0,c.jsx)(i.Z.Link,{eventKey:"saleItems",children:(0,c.jsx)("h4",{children:"Sale Items"})})})]}),(0,c.jsxs)(r.Z.Content,{children:[(0,c.jsx)(r.Z.Pane,{eventKey:"newArrival",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)(l.Z,{category:o,type:"new",limit:8,spaceBottomClass:"mb-25"})})}),(0,c.jsx)(r.Z.Pane,{eventKey:"bestSeller",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)(l.Z,{category:o,type:"bestSeller",limit:8,spaceBottomClass:"mb-25"})})}),(0,c.jsx)(r.Z.Pane,{eventKey:"saleItems",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)(l.Z,{category:o,type:"saleItems",limit:8,spaceBottomClass:"mb-25"})})})]})]})]})})}}}]);
//# sourceMappingURL=5258.488e99cf.chunk.js.map