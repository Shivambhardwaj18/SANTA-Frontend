"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[87],{9725:function(e,s,l){var n=l(8182),r=l(1087),c=l(184);s.Z=function(e){var s=e.footerLogo,l=e.spaceBottomClass,i=e.colorClass;return(0,c.jsxs)("div",{className:(0,n.Z)("copyright",l,i),children:[(0,c.jsx)("div",{className:"footer-logo",children:(0,c.jsx)(r.rU,{to:"/",children:(0,c.jsx)("img",{alt:"",src:""+s})})}),(0,c.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,c.jsx)("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Flone"}),".",(0,c.jsx)("br",{})," All Rights Reserved"]})]})}},5184:function(e,s,l){l.d(s,{Z:function(){return o}});var n=l(8182),r=l(9577),c=l(184),i=function(e){var s,l=e.status,n=e.message,r=e.onValidated;return(0,c.jsxs)("div",{className:"subscribe-form",children:[(0,c.jsxs)("div",{className:"mc-form",children:[(0,c.jsx)("div",{children:(0,c.jsx)("input",{id:"mc-form-email",className:"email",ref:function(e){return s=e},type:"email",placeholder:"Enter your email address..."})}),(0,c.jsx)("div",{className:"clear",children:(0,c.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&r({EMAIL:s.value}),document.getElementById("mc-form-email").value=""},children:"SUBSCRIBE"})})]}),"sending"===l&&(0,c.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===l&&(0,c.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===l&&(0,c.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}})]})},a=function(e){var s=e.mailchimpUrl;return(0,c.jsx)("div",{children:(0,c.jsx)(r.Z,{url:s,render:function(e){var s=e.subscribe,l=e.status,n=e.message;return(0,c.jsx)(i,{status:l,message:n,onValidated:function(e){return s(e)}})}})})},o=function(e){var s=e.spaceBottomClass,l=e.spaceLeftClass,r=e.sideMenu,i=e.colorClass,o=e.widgetColorClass;return(0,c.jsxs)("div",{className:(0,n.Z)("footer-widget",s,r?"ml-ntv5":l,o),children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"SUBSCRIBE"})}),(0,c.jsxs)("div",{className:(0,n.Z)("subscribe-style",i),children:[(0,c.jsx)("p",{children:"Get E-mail updates about our latest shop and special offers."}),(0,c.jsx)(a,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})]})]})}},1567:function(e,s,l){var n=l(8182),r=l(1087),c=l(184);s.Z=function(e){var s=e.imageUrl,l=e.logoClass;return(0,c.jsx)("div",{className:(0,n.Z)(l),children:(0,c.jsx)(r.rU,{to:"/",children:(0,c.jsx)("img",{alt:"",src:""+s})})})}},7127:function(e,s,l){var n=l(9434),r=l(9230),c=(l(147),l(184));s.Z=function(e){e.currency;var s=(0,r.$G)().i18n,l=((0,n.I0)(),function(e){var l=e.target.value;s.changeLanguage(l)});return(0,c.jsxs)("div",{className:"language-currency-wrap",children:[(0,c.jsxs)("div",{className:"same-language-currency language-style",children:[(0,c.jsxs)("span",{children:["en"===s.resolvedLanguage?"English":"fn"===s.resolvedLanguage?"French":"de"===s.resolvedLanguage?"Germany":""," ",(0,c.jsx)("i",{className:"fa fa-angle-down"})]}),(0,c.jsx)("div",{className:"lang-car-dropdown",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"en",onClick:function(e){return l(e)},children:"English"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"fn",onClick:function(e){return l(e)},children:"French"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"de",onClick:function(e){return l(e)},children:"Germany"})})]})})]}),(0,c.jsx)("div",{className:"same-language-currency",children:(0,c.jsx)("p",{children:"Call Us 3965410"})})]})}},9354:function(e,s,l){l.d(s,{Z:function(){return a}});var n=l(9439),r=l(2791),c=function(){var e=(0,r.useState)(!1),s=(0,n.Z)(e,2),l=s[0],c=s[1];return(0,r.useEffect)((function(){var e=function(){var e=window.pageYOffset;c(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[l]),{stick:l,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},i=l(184),a=function(){var e=c(),s=e.stick,l=e.onClickHandler;return s?(0,i.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:l,children:(0,i.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},9858:function(e,s,l){var n=l(2791),r=l(7939),c=l(8032),i=l(9354),a=l(184);s.Z=function(e){var s=e.children,l=e.headerContainerClass,o=e.headerTop,t=e.headerPaddingClass,d=e.headerPositionClass;return(0,a.jsxs)(n.Fragment,{children:[(0,a.jsx)(r.Z,{layout:l,top:o,headerPaddingClass:t,headerPositionClass:d}),s,(0,a.jsx)(c.Z,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,a.jsx)(i.Z,{})]})}},87:function(e,s,l){l.r(s);var n=l(2791),r=l(7689),c=l(9764),i=l(3695),a=l(9858),o=l(9778),t=l(184);s.default=function(){var e=(0,r.TH)().pathname;return(0,t.jsxs)(n.Fragment,{children:[(0,t.jsx)(i.Z,{titleTemplate:"My Account",description:"My Account page of flone react minimalist eCommerce template."}),(0,t.jsxs)(a.Z,{headerTop:"visible",children:[(0,t.jsx)(o.Z,{pages:[{label:"Home",path:"/"},{label:"My Account",path:""+e}]}),(0,t.jsx)("div",{className:"myaccount-area pb-80 pt-100",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"ms-auto me-auto col-lg-9",children:(0,t.jsx)("div",{className:"myaccount-wrapper",children:(0,t.jsxs)(c.Z,{defaultActiveKey:"0",children:[(0,t.jsxs)(c.Z.Item,{eventKey:"0",className:"single-my-account mb-20",children:[(0,t.jsxs)(c.Z.Header,{className:"panel-heading",children:[(0,t.jsx)("span",{children:"1 ."})," Edit your account information"," "]}),(0,t.jsx)(c.Z.Body,{children:(0,t.jsxs)("div",{className:"myaccount-info-wrapper",children:[(0,t.jsxs)("div",{className:"account-info-wrapper",children:[(0,t.jsx)("h4",{children:"My Account Information"}),(0,t.jsx)("h5",{children:"Your Personal Details"})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,t.jsxs)("div",{className:"billing-info",children:[(0,t.jsx)("label",{children:"First Name"}),(0,t.jsx)("input",{type:"text"})]})}),(0,t.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,t.jsxs)("div",{className:"billing-info",children:[(0,t.jsx)("label",{children:"Last Name"}),(0,t.jsx)("input",{type:"text"})]})}),(0,t.jsx)("div",{className:"col-lg-12 col-md-12",children:(0,t.jsxs)("div",{className:"billing-info",children:[(0,t.jsx)("label",{children:"Email Address"}),(0,t.jsx)("input",{type:"email"})]})}),(0,t.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,t.jsxs)("div",{className:"billing-info",children:[(0,t.jsx)("label",{children:"Telephone"}),(0,t.jsx)("input",{type:"text"})]})}),(0,t.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,t.jsxs)("div",{className:"billing-info",children:[(0,t.jsx)("label",{children:"Fax"}),(0,t.jsx)("input",{type:"text"})]})})]}),(0,t.jsx)("div",{className:"billing-back-btn",children:(0,t.jsx)("div",{className:"billing-btn",children:(0,t.jsx)("button",{type:"submit",children:"Continue"})})})]})})]}),(0,t.jsxs)(c.Z.Item,{eventKey:"1",className:"single-my-account mb-20",children:[(0,t.jsxs)(c.Z.Header,{className:"panel-heading",children:[(0,t.jsx)("span",{children:"2 ."})," Change your password"]}),(0,t.jsx)(c.Z.Body,{children:(0,t.jsxs)("div",{className:"myaccount-info-wrapper",children:[(0,t.jsxs)("div",{className:"account-info-wrapper",children:[(0,t.jsx)("h4",{children:"Change Password"}),(0,t.jsx)("h5",{children:"Your Password"})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-12 col-md-12",children:(0,t.jsxs)("div",{className:"billing-info",children:[(0,t.jsx)("label",{children:"Password"}),(0,t.jsx)("input",{type:"password"})]})}),(0,t.jsx)("div",{className:"col-lg-12 col-md-12",children:(0,t.jsxs)("div",{className:"billing-info",children:[(0,t.jsx)("label",{children:"Password Confirm"}),(0,t.jsx)("input",{type:"password"})]})})]}),(0,t.jsx)("div",{className:"billing-back-btn",children:(0,t.jsx)("div",{className:"billing-btn",children:(0,t.jsx)("button",{type:"submit",children:"Continue"})})})]})})]}),(0,t.jsxs)(c.Z.Item,{eventKey:"2",className:"single-my-account mb-20",children:[(0,t.jsxs)(c.Z.Header,{className:"panel-heading",children:[(0,t.jsx)("span",{children:"3 ."})," Modify your address book entries"]}),(0,t.jsx)(c.Z.Body,{children:(0,t.jsxs)("div",{className:"myaccount-info-wrapper",children:[(0,t.jsx)("div",{className:"account-info-wrapper",children:(0,t.jsx)("h4",{children:"Address Book Entries"})}),(0,t.jsx)("div",{className:"entries-wrapper",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-6 col-md-6 d-flex align-items-center justify-content-center",children:(0,t.jsxs)("div",{className:"entries-info text-center",children:[(0,t.jsx)("p",{children:"John Doe"}),(0,t.jsx)("p",{children:"Paul Park "}),(0,t.jsx)("p",{children:"Lorem ipsum dolor set amet"}),(0,t.jsx)("p",{children:"NYC"}),(0,t.jsx)("p",{children:"New York"})]})}),(0,t.jsx)("div",{className:"col-lg-6 col-md-6 d-flex align-items-center justify-content-center",children:(0,t.jsxs)("div",{className:"entries-edit-delete text-center",children:[(0,t.jsx)("button",{className:"edit",children:"Edit"}),(0,t.jsx)("button",{children:"Delete"})]})})]})}),(0,t.jsx)("div",{className:"billing-back-btn",children:(0,t.jsx)("div",{className:"billing-btn",children:(0,t.jsx)("button",{type:"submit",children:"Continue"})})})]})})]})]})})})})})})]})]})}},9778:function(e,s,l){var n=l(2461),r=l(1087),c=l(184);s.Z=function(e){var s=e.pages;return(0,c.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)(n.Z,{children:null===s||void 0===s?void 0:s.map((function(e,l){var i=e.path,a=e.label;return l!==s.length-1?(0,c.jsx)(n.Z.Item,{linkProps:{to:i},linkAs:r.rU,children:a},a):(0,c.jsx)(n.Z.Item,{active:!0,children:a},a)}))})})})}},8032:function(e,s,l){var n=l(8182),r=l(1087),c=l(9725),i=l(5184),a=l(184);s.Z=function(e){var s=e.backgroundColorClass,l=e.spaceTopClass,o=e.spaceBottomClass,t=e.spaceLeftClass,d=e.spaceRightClass,h=e.containerClass,m=e.extraFooterClass,x=e.sideMenu;return(0,a.jsx)("footer",{className:(0,n.Z)("footer-area",s,l,o,m,t,d),children:(0,a.jsx)("div",{className:"".concat(h||"container"),children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"".concat(x?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,a.jsx)(c.Z,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})}),(0,a.jsx)("div",{className:"".concat(x?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,a.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,a.jsx)("div",{className:"footer-title",children:(0,a.jsx)("h3",{children:"ABOUT US"})}),(0,a.jsx)("div",{className:"footer-list",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"/about",children:"About us"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"#/",children:"Store location"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"/contact",children:"Contact"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"#/",children:"Orders tracking"})})]})})]})}),(0,a.jsx)("div",{className:"".concat(x?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,a.jsxs)("div",{className:"".concat(x?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,a.jsx)("div",{className:"footer-title",children:(0,a.jsx)("h3",{children:"USEFUL LINKS"})}),(0,a.jsx)("div",{className:"footer-list",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"#/",children:"Returns"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"#/",children:"Support Policy"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"#/",children:"Size guide"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"#/",children:"FAQs"})})]})})]})}),(0,a.jsx)("div",{className:"".concat(x?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,a.jsxs)("div",{className:"".concat(x?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,a.jsx)("div",{className:"footer-title",children:(0,a.jsx)("h3",{children:"FOLLOW US"})}),(0,a.jsx)("div",{className:"footer-list",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:"Youtube"})})]})})]})}),(0,a.jsx)("div",{className:"".concat(x?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,a.jsx)(i.Z,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:x})})]})})})}},7939:function(e,s,l){l.d(s,{Z:function(){return u}});var n=l(9439),r=l(2791),c=l(8182),i=l(1567),a=l(9381),o=l(2824),t=l(2412),d=l(9434),h=l(7127),m=l(184),x=function(e){var s=e.borderStyle,l=(0,d.v9)((function(e){return e.currency}));return(0,m.jsxs)("div",{className:(0,c.Z)("header-top-wap","fluid-border"===s&&"border-bottom"),children:[(0,m.jsx)(h.Z,{currency:l}),(0,m.jsx)("div",{className:"header-offer",children:(0,m.jsxs)("p",{children:["Free delivery on order over"," ",(0,m.jsx)("span",{children:l.currencySymbol+(200*l.currencyRate).toFixed(2)})]})})]})},u=function(e){var s=e.layout,l=e.top,d=e.borderStyle,h=e.headerPaddingClass,u=e.headerPositionClass,j=e.headerBgClass,v=(0,r.useState)(0),f=(0,n.Z)(v,2),g=f[0],p=f[1],b=(0,r.useState)(0),N=(0,n.Z)(b,2),y=N[0],w=N[1];(0,r.useEffect)((function(){var e=document.querySelector(".sticky-bar");return w(e.offsetTop),window.addEventListener("scroll",C),function(){window.removeEventListener("scroll",C)}}),[]);var C=function(){p(window.scrollY)};return(0,m.jsxs)("header",{className:(0,c.Z)("header-area clearfix",j,u),children:[(0,m.jsx)("div",{className:(0,c.Z)("header-top-area",h,"visible"===l?"d-none d-lg-block":"d-none","fluid-border"===d&&"border-none"),children:(0,m.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,m.jsx)(x,{borderStyle:d})})}),(0,m.jsxs)("div",{className:(0,c.Z)(h,"sticky-bar header-res-padding clearfix",g>y&&"stick"),children:[(0,m.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,m.jsx)(i.Z,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})}),(0,m.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,m.jsx)(a.Z,{})}),(0,m.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,m.jsx)(o.Z,{})})]})}),(0,m.jsx)(t.Z,{})]})]})}}}]);
//# sourceMappingURL=87.e3e9e0a0.chunk.js.map