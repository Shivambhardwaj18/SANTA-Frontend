"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[3578],{4520:function(e,s,a){var n=a(8182),t=a(184);s.Z=function(e){var s=e.data,a=e.spaceBottomClass;return(0,t.jsx)("div",{className:(0,n.Z)("single-brand-logo",a),children:(0,t.jsx)("img",{src:""+s.image,alt:""})})}},9725:function(e,s,a){var n=a(8182),t=a(1087),r=a(184);s.Z=function(e){var s=e.footerLogo,a=e.spaceBottomClass,i=e.colorClass;return(0,r.jsxs)("div",{className:(0,n.Z)("copyright",a,i),children:[(0,r.jsx)("div",{className:"footer-logo",children:(0,r.jsx)(t.rU,{to:"/",children:(0,r.jsx)("img",{alt:"",src:""+s})})}),(0,r.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,r.jsx)("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Flone"}),".",(0,r.jsx)("br",{})," All Rights Reserved"]})]})}},5184:function(e,s,a){a.d(s,{Z:function(){return o}});var n=a(8182),t=a(9577),r=a(184),i=function(e){var s,a=e.status,n=e.message,t=e.onValidated;return(0,r.jsxs)("div",{className:"subscribe-form",children:[(0,r.jsxs)("div",{className:"mc-form",children:[(0,r.jsx)("div",{children:(0,r.jsx)("input",{id:"mc-form-email",className:"email",ref:function(e){return s=e},type:"email",placeholder:"Enter your email address..."})}),(0,r.jsx)("div",{className:"clear",children:(0,r.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&t({EMAIL:s.value}),document.getElementById("mc-form-email").value=""},children:"SUBSCRIBE"})})]}),"sending"===a&&(0,r.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===a&&(0,r.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===a&&(0,r.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}})]})},l=function(e){var s=e.mailchimpUrl;return(0,r.jsx)("div",{children:(0,r.jsx)(t.Z,{url:s,render:function(e){var s=e.subscribe,a=e.status,n=e.message;return(0,r.jsx)(i,{status:a,message:n,onValidated:function(e){return s(e)}})}})})},o=function(e){var s=e.spaceBottomClass,a=e.spaceLeftClass,t=e.sideMenu,i=e.colorClass,o=e.widgetColorClass;return(0,r.jsxs)("div",{className:(0,n.Z)("footer-widget",s,t?"ml-ntv5":a,o),children:[(0,r.jsx)("div",{className:"footer-title",children:(0,r.jsx)("h3",{children:"SUBSCRIBE"})}),(0,r.jsxs)("div",{className:(0,n.Z)("subscribe-style",i),children:[(0,r.jsx)("p",{children:"Get E-mail updates about our latest shop and special offers."}),(0,r.jsx)(l,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})]})]})}},1567:function(e,s,a){var n=a(8182),t=a(1087),r=a(184);s.Z=function(e){var s=e.imageUrl,a=e.logoClass;return(0,r.jsx)("div",{className:(0,n.Z)(a),children:(0,r.jsx)(t.rU,{to:"/",children:(0,r.jsx)("img",{alt:"",src:""+s})})})}},7127:function(e,s,a){var n=a(9434),t=a(9230),r=(a(147),a(184));s.Z=function(e){e.currency;var s=(0,t.$G)().i18n,a=((0,n.I0)(),function(e){var a=e.target.value;s.changeLanguage(a)});return(0,r.jsxs)("div",{className:"language-currency-wrap",children:[(0,r.jsxs)("div",{className:"same-language-currency language-style",children:[(0,r.jsxs)("span",{children:["en"===s.resolvedLanguage?"English":"fn"===s.resolvedLanguage?"French":"de"===s.resolvedLanguage?"Germany":""," ",(0,r.jsx)("i",{className:"fa fa-angle-down"})]}),(0,r.jsx)("div",{className:"lang-car-dropdown",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"en",onClick:function(e){return a(e)},children:"English"})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"fn",onClick:function(e){return a(e)},children:"French"})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"de",onClick:function(e){return a(e)},children:"Germany"})})]})})]}),(0,r.jsx)("div",{className:"same-language-currency",children:(0,r.jsx)("p",{children:"Call Us 3965410"})})]})}},9354:function(e,s,a){a.d(s,{Z:function(){return l}});var n=a(9439),t=a(2791),r=function(){var e=(0,t.useState)(!1),s=(0,n.Z)(e,2),a=s[0],r=s[1];return(0,t.useEffect)((function(){var e=function(){var e=window.pageYOffset;r(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[a]),{stick:a,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},i=a(184),l=function(){var e=r(),s=e.stick,a=e.onClickHandler;return s?(0,i.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:a,children:(0,i.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},6103:function(e,s,a){var n=a(8182),t=a(184);s.Z=function(e){var s=e.titleText,a=e.subTitleText,r=e.positionClass,i=e.spaceClass;return(0,t.jsxs)("div",{className:(0,n.Z)("section-title-2",r,i),children:[(0,t.jsx)("h2",{children:s}),(0,t.jsx)("p",{children:a})]})}},9801:function(e,s,a){var n=a(8182),t=a(184);s.Z=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass;return(0,t.jsx)("div",{className:(0,n.Z)("welcome-area",s,a),children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"welcome-content text-center",children:[(0,t.jsx)("h5",{children:"Who Are We"}),(0,t.jsx)("h1",{children:"Welcome To Flone"}),(0,t.jsxs)("p",{children:["Our ethics of working with modernized method and systems has helped us to achieve the highest quality standard. The most notable manufacturing technology used by us gives increased robustness and products excellence. Our products water pump replacement parts are manufactured by using the up-to-the-minute technology and machine that offers them high-quality products. Regarding export, we believe that it is the biggest business driver for our organization. This is clearly evident, as, in few years of entering the export market; we have successfully accomplished a noteworthy number of export orders for, and are developing water pump assemblies for the USA and various other countries. We had taken major steps to fortify research both at the technical level as well as customer level. Our marketing approach is anchored in the quality and customer contentment we cater. The company is persistently adapting itself to the changing demands of its customers in terms of new designs, together with the wide-ranging product catalog of automotive water pump assemblies. The aspiration to give our customer the most excellent is revealed in our meticulously planned forward and backward integration. Our efforts are always fixated at the future growth. Automotive Waterpump Assemblies Parts The automobile water pumps assembly that we proffer is manufactured by using better-quality of raw material to make sure that they provide durable performance. These are available in a variety of dimensions and merchandise at reasonable prices."," "]})]})})})}},7842:function(e,s,a){a.d(s,{o:function(){return o.o5}});var n=a(3433),t=a(1413),r=a(2791),i=a(8182),l=a(1496),o=a(8563),c=a(184),d=(0,r.forwardRef)((function(e,s){var a=e.options,r=e.prevIcon,d=e.nextIcon,m=e.children,u=e.className,h=e.navClass,p=void 0!==(null===a||void 0===a?void 0:a.modules)?a.modules:[],x="prev-".concat(h||"swiper-nav"),g="next-".concat(h||"swiper-nav"),f=(0,t.Z)((0,t.Z)({slidesPerView:1,spaceBetween:0,loop:!1,autoplay:!(null===a||void 0===a||!a.autoplay)&&{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{}},a),{},{modules:[l.W_,l.tl,l.s5,l.pt].concat((0,n.Z)(p)),navigation:!(null===a||void 0===a||!a.navigation)&&{prevEl:".".concat(x),nextEl:".".concat(g)},pagination:!(null===a||void 0===a||!a.pagination)&&{clickable:!0}});return(0,c.jsxs)("div",{className:(0,i.Z)("swiper-wrap",u),ref:s,children:[(0,c.jsx)(o.tq,(0,t.Z)((0,t.Z)({},f),{},{children:m})),(null===f||void 0===f?void 0:f.navigation)&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("button",{type:"button",className:"swiper-button-prev ht-swiper-button-nav ".concat(x),children:(0,c.jsx)("i",{className:(0,i.Z)(r,"icon")})}),(0,c.jsx)("button",{type:"button",className:"swiper-button-next ht-swiper-button-nav ".concat(g),children:(0,c.jsx)("i",{className:(0,i.Z)(d,"icon")})})]})]})}));d.defaultProps={prevIcon:"pe-7s-angle-left",nextIcon:"pe-7s-angle-right",navStyle:1,dotStyle:1},s.Z=d},9858:function(e,s,a){var n=a(2791),t=a(7939),r=a(8032),i=a(9354),l=a(184);s.Z=function(e){var s=e.children,a=e.headerContainerClass,o=e.headerTop,c=e.headerPaddingClass,d=e.headerPositionClass;return(0,l.jsxs)(n.Fragment,{children:[(0,l.jsx)(t.Z,{layout:a,top:o,headerPaddingClass:c,headerPositionClass:d}),s,(0,l.jsx)(r.Z,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,l.jsx)(i.Z,{})]})}},3578:function(e,s,a){a.r(s),a.d(s,{default:function(){return S}});var n=a(2791),t=a(7689),r=a(3695),i=a(9858),l=a(9778),o=a(9801),c=a(6831),d=a(8182),m=JSON.parse('[{"id":"1","title":"Our Vision","text":"Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth."},{"id":"2","title":"Our Mission","text":"Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth."},{"id":"3","title":"Our Goal","text":"Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth."}]'),u=a(184),h=function(e){var s=e.data,a=e.spaceBottomClass;return(0,u.jsxs)("div",{className:(0,d.Z)("single-mission",a),children:[(0,u.jsx)("h3",{children:s.title}),(0,u.jsx)("p",{children:s.text})]})},p=function(e){var s=e.spaceBottomClass;return(0,u.jsx)("div",{className:(0,d.Z)("about-mission-area",s),children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"row",children:null===m||void 0===m?void 0:m.map((function(e,s){return(0,u.jsx)("div",{className:"col-lg-4 col-md-4",children:(0,u.jsx)(h,{data:e,spaceBottomClass:"mb-30"})},s)}))})})})},x=JSON.parse('[{"id":"1","iconClass":"pe-7s-portfolio","countNum":360,"title":"project done"},{"id":"2","iconClass":"pe-7s-cup","countNum":690,"title":"cups of coffee"},{"id":"3","iconClass":"pe-7s-light","countNum":100,"title":"branding"},{"id":"4","iconClass":"pe-7s-smile","countNum":420,"title":"happy clients"}]'),g=a(9439),f=a(835),j=a(6572),v=a.n(j),b=function(e){var s=e.data,a=e.spaceBottomClass,t=e.textAlignClass,r=(0,n.useState)(!1),i=(0,g.Z)(r,2),l=i[0],o=i[1];return(0,u.jsxs)("div",{className:(0,d.Z)("single-count",t,a),children:[(0,u.jsx)("div",{className:"count-icon",children:(0,u.jsx)("i",{className:s.iconClass})}),(0,u.jsx)("h2",{className:"count",children:(0,u.jsx)(v(),{onChange:function(e){e&&o(!0)},offset:{top:10},delayedCall:!0,children:(0,u.jsx)(f.ZP,{end:l?s.countNum:0})})}),(0,u.jsx)("span",{children:s.title})]})},w=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,n=e.bgClass;return(0,u.jsx)("div",{className:(0,d.Z)("funfact-area",s,a,n),children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"row",children:null===x||void 0===x?void 0:x.map((function(e,s){return(0,u.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-6",children:(0,u.jsx)(b,{data:e,spaceBottomClass:"mb-30",textAlignClass:"text-center"})},s)}))})})})},N=a(6103),C=JSON.parse('[{"id":"1","image":"/assets/img/team/team-1.jpg","fbLink":"//www.facebook.com","twitterLink":"//www.twitter.com","instagramLink":"//www.instagram.com","name":"Mr.Mike Banding","position":"Manager"},{"id":"2","image":"/assets/img/team/team-3.jpg","fbLink":"//www.facebook.com","twitterLink":"//www.twitter.com","instagramLink":"//www.instagram.com","name":"Mr.Peter Pan","position":"Developer"},{"id":"3","image":"/assets/img/team/team-2.jpg","fbLink":"//www.facebook.com","twitterLink":"//www.twitter.com","instagramLink":"//www.instagram.com","name":"Ms.Sophia","position":"Designer"},{"id":"4","image":"/assets/img/team/team-4.jpg","fbLink":"//www.facebook.com","twitterLink":"//www.twitter.com","instagramLink":"//www.instagram.com","name":"Mr.John Lee","position":"Chairman"}]'),y=function(e){var s=e.data,a=e.spaceBottomClass;return(0,u.jsxs)("div",{className:(0,d.Z)("team-wrapper",a),children:[(0,u.jsxs)("div",{className:"team-img",children:[(0,u.jsx)("img",{src:""+s.image,alt:"",className:"img-fluid"}),(0,u.jsxs)("div",{className:"team-action",children:[(0,u.jsx)("a",{className:"facebook",href:s.fbLink,target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)("i",{className:"fa fa-facebook"})}),(0,u.jsx)("a",{className:"twitter",href:s.twitterLink,target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)("i",{className:"fa fa-twitter"})}),(0,u.jsx)("a",{className:"instagram",href:s.instagramLink,target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)("i",{className:"fa fa-instagram"})})]})]}),(0,u.jsxs)("div",{className:"team-content text-center",children:[(0,u.jsx)("h4",{children:s.name}),(0,u.jsxs)("span",{children:[s.position," "]})]})]})},k=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass;return(0,u.jsx)("div",{className:(0,d.Z)("team-area",s,a),children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)(N.Z,{titleText:"Team Members",subTitleText:"Lorem ipsum dolor sit amet conse ctetu.",positionClass:"text-center",spaceClass:"mb-60"}),(0,u.jsx)("div",{className:"row",children:null===C||void 0===C?void 0:C.map((function(e,s){return(0,u.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-6",children:(0,u.jsx)(y,{data:e,spaceBottomClass:"mb-30"})},s)}))})]})})},Z=a(5037),S=function(){var e=(0,t.TH)().pathname;return(0,u.jsxs)(n.Fragment,{children:[(0,u.jsx)(r.Z,{titleTemplate:"About us",description:"About page of flone react minimalist eCommerce template."}),(0,u.jsxs)(i.Z,{headerTop:"visible",children:[(0,u.jsx)(l.Z,{pages:[{label:"Home",path:"/"},{label:"About us",path:""+e}]}),(0,u.jsx)(o.Z,{spaceTopClass:"pt-100",spaceBottomClass:"pb-95"}),(0,u.jsx)(c.Z,{spaceBottomClass:"pb-70"}),(0,u.jsx)(p,{spaceBottomClass:"pb-70"}),(0,u.jsx)(w,{spaceTopClass:"pt-100",spaceBottomClass:"pb-70",bgClass:"bg-gray-3"}),(0,u.jsx)(k,{spaceTopClass:"pt-95",spaceBottomClass:"pb-70"}),(0,u.jsx)(Z.Z,{spaceBottomClass:"pb-70"})]})]})}},6831:function(e,s,a){a.d(s,{Z:function(){return o}});var n=a(8182),t=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner-1.jpg","title":"Watches","subtitle":"Starting at","price":"$99.00","link":"/shop-grid-standard"},{"id":2,"image":"/assets/img/banner/banner-2.jpg","title":"Plo Bag","subtitle":"Starting at","price":"$79.00","link":"/shop-grid-standard"},{"id":3,"image":"/assets/img/banner/banner-3.jpg","title":"Sunglass","subtitle":"Starting at","price":"$29.00","link":"/shop-grid-standard"}]'),r=a(1087),i=a(184),l=function(e){var s=e.data,a=e.spaceBottomClass;return(0,i.jsxs)("div",{className:(0,n.Z)("single-banner",a),children:[(0,i.jsx)(r.rU,{to:""+s.link,children:(0,i.jsx)("img",{src:""+s.image,alt:""})}),(0,i.jsxs)("div",{className:"banner-content",children:[(0,i.jsx)("h3",{children:s.title}),(0,i.jsxs)("h4",{children:[s.subtitle," ",(0,i.jsx)("span",{children:s.price})]}),(0,i.jsx)(r.rU,{to:""+s.link,children:(0,i.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})},o=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass;return(0,i.jsx)("div",{className:(0,n.Z)("banner-area",s,a),children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:null===t||void 0===t?void 0:t.map((function(e,s){return(0,i.jsx)("div",{className:"col-lg-4 col-md-4",children:(0,i.jsx)(l,{data:e,spaceBottomClass:"mb-30"})},s)}))})})})}},5037:function(e,s,a){var n=a(8182),t=a(7842),r=a(4520),i=a(5947),l=a(184),o={loop:!0,autoplay:!0,grabCursor:!0,breakpoints:{320:{slidesPerView:2},640:{slidesPerView:3},1024:{slidesPerView:5},768:{slidesPerView:4}}};s.Z=function(e){var s=e.spaceBottomClass,a=e.spaceTopClass;return(0,l.jsx)("div",{className:(0,n.Z)("brand-logo-area",s,a),children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"brand-logo-active",children:i&&(0,l.jsx)(t.Z,{options:o,children:i.map((function(e,s){return(0,l.jsx)(t.o,{children:(0,l.jsx)(r.Z,{data:e,spaceBottomClass:"mb-30"})},s)}))})})})})}},9778:function(e,s,a){var n=a(2461),t=a(1087),r=a(184);s.Z=function(e){var s=e.pages;return(0,r.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)(n.Z,{children:null===s||void 0===s?void 0:s.map((function(e,a){var i=e.path,l=e.label;return a!==s.length-1?(0,r.jsx)(n.Z.Item,{linkProps:{to:i},linkAs:t.rU,children:l},l):(0,r.jsx)(n.Z.Item,{active:!0,children:l},l)}))})})})}},8032:function(e,s,a){var n=a(8182),t=a(1087),r=a(9725),i=a(5184),l=a(184);s.Z=function(e){var s=e.backgroundColorClass,a=e.spaceTopClass,o=e.spaceBottomClass,c=e.spaceLeftClass,d=e.spaceRightClass,m=e.containerClass,u=e.extraFooterClass,h=e.sideMenu;return(0,l.jsx)("footer",{className:(0,n.Z)("footer-area",s,a,o,u,c,d),children:(0,l.jsx)("div",{className:"".concat(m||"container"),children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,l.jsx)(r.Z,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})}),(0,l.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,l.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,l.jsx)("div",{className:"footer-title",children:(0,l.jsx)("h3",{children:"ABOUT US"})}),(0,l.jsx)("div",{className:"footer-list",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(t.rU,{to:"/about",children:"About us"})}),(0,l.jsx)("li",{children:(0,l.jsx)(t.rU,{to:"#/",children:"Store location"})}),(0,l.jsx)("li",{children:(0,l.jsx)(t.rU,{to:"/contact",children:"Contact"})}),(0,l.jsx)("li",{children:(0,l.jsx)(t.rU,{to:"#/",children:"Orders tracking"})})]})})]})}),(0,l.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,l.jsxs)("div",{className:"".concat(h?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,l.jsx)("div",{className:"footer-title",children:(0,l.jsx)("h3",{children:"USEFUL LINKS"})}),(0,l.jsx)("div",{className:"footer-list",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(t.rU,{to:"#/",children:"Returns"})}),(0,l.jsx)("li",{children:(0,l.jsx)(t.rU,{to:"#/",children:"Support Policy"})}),(0,l.jsx)("li",{children:(0,l.jsx)(t.rU,{to:"#/",children:"Size guide"})}),(0,l.jsx)("li",{children:(0,l.jsx)(t.rU,{to:"#/",children:"FAQs"})})]})})]})}),(0,l.jsx)("div",{className:"".concat(h?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,l.jsxs)("div",{className:"".concat(h?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,l.jsx)("div",{className:"footer-title",children:(0,l.jsx)("h3",{children:"FOLLOW US"})}),(0,l.jsx)("div",{className:"footer-list",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:"Youtube"})})]})})]})}),(0,l.jsx)("div",{className:"".concat(h?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,l.jsx)(i.Z,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:h})})]})})})}},7939:function(e,s,a){a.d(s,{Z:function(){return p}});var n=a(9439),t=a(2791),r=a(8182),i=a(1567),l=a(9381),o=a(2824),c=a(2412),d=a(9434),m=a(7127),u=a(184),h=function(e){var s=e.borderStyle,a=(0,d.v9)((function(e){return e.currency}));return(0,u.jsxs)("div",{className:(0,r.Z)("header-top-wap","fluid-border"===s&&"border-bottom"),children:[(0,u.jsx)(m.Z,{currency:a}),(0,u.jsx)("div",{className:"header-offer",children:(0,u.jsxs)("p",{children:["Free delivery on order over"," ",(0,u.jsx)("span",{children:a.currencySymbol+(200*a.currencyRate).toFixed(2)})]})})]})},p=function(e){var s=e.layout,a=e.top,d=e.borderStyle,m=e.headerPaddingClass,p=e.headerPositionClass,x=e.headerBgClass,g=(0,t.useState)(0),f=(0,n.Z)(g,2),j=f[0],v=f[1],b=(0,t.useState)(0),w=(0,n.Z)(b,2),N=w[0],C=w[1];(0,t.useEffect)((function(){var e=document.querySelector(".sticky-bar");return C(e.offsetTop),window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[]);var y=function(){v(window.scrollY)};return(0,u.jsxs)("header",{className:(0,r.Z)("header-area clearfix",x,p),children:[(0,u.jsx)("div",{className:(0,r.Z)("header-top-area",m,"visible"===a?"d-none d-lg-block":"d-none","fluid-border"===d&&"border-none"),children:(0,u.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,u.jsx)(h,{borderStyle:d})})}),(0,u.jsxs)("div",{className:(0,r.Z)(m,"sticky-bar header-res-padding clearfix",j>N&&"stick"),children:[(0,u.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,u.jsx)(i.Z,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})}),(0,u.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,u.jsx)(l.Z,{})}),(0,u.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,u.jsx)(o.Z,{})})]})}),(0,u.jsx)(c.Z,{})]})]})}},5947:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/brand-logo/brand-logo-1.png"},{"id":"2","image":"/assets/img/brand-logo/brand-logo-2.png"},{"id":"3","image":"/assets/img/brand-logo/brand-logo-3.png"},{"id":"4","image":"/assets/img/brand-logo/brand-logo-4.png"},{"id":"5","image":"/assets/img/brand-logo/brand-logo-5.png"}]')}}]);
//# sourceMappingURL=3578.7a9285c5.chunk.js.map