"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[245],{9725:function(e,s,r){var l=r(8182),a=r(1087),n=r(184);s.Z=function(e){var s=e.footerLogo,r=e.spaceBottomClass,c=e.colorClass;return(0,n.jsxs)("div",{className:(0,l.Z)("copyright",r,c),children:[(0,n.jsx)("div",{className:"footer-logo",children:(0,n.jsx)(a.rU,{to:"/",children:(0,n.jsx)("img",{alt:"",src:""+s})})}),(0,n.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,n.jsx)("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Flone"}),".",(0,n.jsx)("br",{})," All Rights Reserved"]})]})}},5184:function(e,s,r){r.d(s,{Z:function(){return o}});var l=r(8182),a=r(9577),n=r(184),c=function(e){var s,r=e.status,l=e.message,a=e.onValidated;return(0,n.jsxs)("div",{className:"subscribe-form",children:[(0,n.jsxs)("div",{className:"mc-form",children:[(0,n.jsx)("div",{children:(0,n.jsx)("input",{id:"mc-form-email",className:"email",ref:function(e){return s=e},type:"email",placeholder:"Enter your email address..."})}),(0,n.jsx)("div",{className:"clear",children:(0,n.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&a({EMAIL:s.value}),document.getElementById("mc-form-email").value=""},children:"SUBSCRIBE"})})]}),"sending"===r&&(0,n.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===r&&(0,n.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:l}}),"success"===r&&(0,n.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:l}})]})},i=function(e){var s=e.mailchimpUrl;return(0,n.jsx)("div",{children:(0,n.jsx)(a.Z,{url:s,render:function(e){var s=e.subscribe,r=e.status,l=e.message;return(0,n.jsx)(c,{status:r,message:l,onValidated:function(e){return s(e)}})}})})},o=function(e){var s=e.spaceBottomClass,r=e.spaceLeftClass,a=e.sideMenu,c=e.colorClass,o=e.widgetColorClass;return(0,n.jsxs)("div",{className:(0,l.Z)("footer-widget",s,a?"ml-ntv5":r,o),children:[(0,n.jsx)("div",{className:"footer-title",children:(0,n.jsx)("h3",{children:"SUBSCRIBE"})}),(0,n.jsxs)("div",{className:(0,l.Z)("subscribe-style",c),children:[(0,n.jsx)("p",{children:"Get E-mail updates about our latest shop and special offers."}),(0,n.jsx)(i,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})]})]})}},1567:function(e,s,r){var l=r(8182),a=r(1087),n=r(184);s.Z=function(e){var s=e.imageUrl,r=e.logoClass;return(0,n.jsx)("div",{className:(0,l.Z)(r),children:(0,n.jsx)(a.rU,{to:"/",children:(0,n.jsx)("img",{alt:"",src:""+s})})})}},7127:function(e,s,r){var l=r(9434),a=r(9230),n=(r(147),r(184));s.Z=function(e){e.currency;var s=(0,a.$G)().i18n,r=((0,l.I0)(),function(e){var r=e.target.value;s.changeLanguage(r)});return(0,n.jsxs)("div",{className:"language-currency-wrap",children:[(0,n.jsxs)("div",{className:"same-language-currency language-style",children:[(0,n.jsxs)("span",{children:["en"===s.resolvedLanguage?"English":"fn"===s.resolvedLanguage?"French":"de"===s.resolvedLanguage?"Germany":""," ",(0,n.jsx)("i",{className:"fa fa-angle-down"})]}),(0,n.jsx)("div",{className:"lang-car-dropdown",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("button",{value:"en",onClick:function(e){return r(e)},children:"English"})}),(0,n.jsx)("li",{children:(0,n.jsx)("button",{value:"fn",onClick:function(e){return r(e)},children:"French"})}),(0,n.jsx)("li",{children:(0,n.jsx)("button",{value:"de",onClick:function(e){return r(e)},children:"Germany"})})]})})]}),(0,n.jsx)("div",{className:"same-language-currency",children:(0,n.jsx)("p",{children:"Call Us 3965410"})})]})}},9354:function(e,s,r){r.d(s,{Z:function(){return i}});var l=r(9439),a=r(2791),n=function(){var e=(0,a.useState)(!1),s=(0,l.Z)(e,2),r=s[0],n=s[1];return(0,a.useEffect)((function(){var e=function(){var e=window.pageYOffset;n(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[r]),{stick:r,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},c=r(184),i=function(){var e=n(),s=e.stick,r=e.onClickHandler;return s?(0,c.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:r,children:(0,c.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},9858:function(e,s,r){var l=r(2791),a=r(7939),n=r(8032),c=r(9354),i=r(184);s.Z=function(e){var s=e.children,r=e.headerContainerClass,o=e.headerTop,t=e.headerPaddingClass,d=e.headerPositionClass;return(0,i.jsxs)(l.Fragment,{children:[(0,i.jsx)(a.Z,{layout:r,top:o,headerPaddingClass:t,headerPositionClass:d}),s,(0,i.jsx)(n.Z,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,i.jsx)(c.Z,{})]})}},245:function(e,s,r){r.r(s);var l=r(2791),a=r(7689),n=r(1087),c=r(3695),i=r(9858),o=r(9778),t=r(184);s.default=function(){var e=(0,a.TH)().pathname;return(0,t.jsxs)(l.Fragment,{children:[(0,t.jsx)(c.Z,{titleTemplate:"Not Found",description:"404 of flone react minimalist eCommerce template."}),(0,t.jsxs)(i.Z,{headerTop:"visible",children:[(0,t.jsx)(o.Z,{pages:[{label:"Home",path:"/"},{label:"404 page",path:""+e}]}),(0,t.jsx)("div",{className:"error-area pt-40 pb-100",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row justify-content-center",children:(0,t.jsx)("div",{className:"col-xl-7 col-lg-8 text-center",children:(0,t.jsxs)("div",{className:"error",children:[(0,t.jsx)("h1",{children:"404"}),(0,t.jsx)("h2",{children:"OPPS! PAGE NOT FOUND"}),(0,t.jsx)("p",{children:"Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarity unavailable."}),(0,t.jsxs)("form",{className:"searchform mb-50",children:[(0,t.jsx)("input",{type:"text",name:"search",id:"error_search",placeholder:"Search...",className:"searchform__input"}),(0,t.jsx)("button",{type:"submit",className:"searchform__submit",children:(0,t.jsx)("i",{className:"fa fa-search"})})]}),(0,t.jsx)(n.rU,{to:"/",className:"error-btn",children:"Back to home page"})]})})})})})]})]})}},9778:function(e,s,r){var l=r(2461),a=r(1087),n=r(184);s.Z=function(e){var s=e.pages;return(0,n.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)(l.Z,{children:null===s||void 0===s?void 0:s.map((function(e,r){var c=e.path,i=e.label;return r!==s.length-1?(0,n.jsx)(l.Z.Item,{linkProps:{to:c},linkAs:a.rU,children:i},i):(0,n.jsx)(l.Z.Item,{active:!0,children:i},i)}))})})})}},8032:function(e,s,r){var l=r(8182),a=r(1087),n=r(9725),c=r(5184),i=r(184);s.Z=function(e){var s=e.backgroundColorClass,r=e.spaceTopClass,o=e.spaceBottomClass,t=e.spaceLeftClass,d=e.spaceRightClass,h=e.containerClass,u=e.extraFooterClass,m=e.sideMenu;return(0,i.jsx)("footer",{className:(0,l.Z)("footer-area",s,r,o,u,t,d),children:(0,i.jsx)("div",{className:"".concat(h||"container"),children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"".concat(m?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,i.jsx)(n.Z,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})}),(0,i.jsx)("div",{className:"".concat(m?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,i.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,i.jsx)("div",{className:"footer-title",children:(0,i.jsx)("h3",{children:"ABOUT US"})}),(0,i.jsx)("div",{className:"footer-list",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{to:"/about",children:"About us"})}),(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{to:"#/",children:"Store location"})}),(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{to:"/contact",children:"Contact"})}),(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{to:"#/",children:"Orders tracking"})})]})})]})}),(0,i.jsx)("div",{className:"".concat(m?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,i.jsxs)("div",{className:"".concat(m?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,i.jsx)("div",{className:"footer-title",children:(0,i.jsx)("h3",{children:"USEFUL LINKS"})}),(0,i.jsx)("div",{className:"footer-list",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{to:"#/",children:"Returns"})}),(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{to:"#/",children:"Support Policy"})}),(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{to:"#/",children:"Size guide"})}),(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{to:"#/",children:"FAQs"})})]})})]})}),(0,i.jsx)("div",{className:"".concat(m?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,i.jsxs)("div",{className:"".concat(m?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,i.jsx)("div",{className:"footer-title",children:(0,i.jsx)("h3",{children:"FOLLOW US"})}),(0,i.jsx)("div",{className:"footer-list",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:"Youtube"})})]})})]})}),(0,i.jsx)("div",{className:"".concat(m?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,i.jsx)(c.Z,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:m})})]})})})}},7939:function(e,s,r){r.d(s,{Z:function(){return x}});var l=r(9439),a=r(2791),n=r(8182),c=r(1567),i=r(9381),o=r(2824),t=r(2412),d=r(9434),h=r(7127),u=r(184),m=function(e){var s=e.borderStyle,r=(0,d.v9)((function(e){return e.currency}));return(0,u.jsxs)("div",{className:(0,n.Z)("header-top-wap","fluid-border"===s&&"border-bottom"),children:[(0,u.jsx)(h.Z,{currency:r}),(0,u.jsx)("div",{className:"header-offer",children:(0,u.jsxs)("p",{children:["Free delivery on order over"," ",(0,u.jsx)("span",{children:r.currencySymbol+(200*r.currencyRate).toFixed(2)})]})})]})},x=function(e){var s=e.layout,r=e.top,d=e.borderStyle,h=e.headerPaddingClass,x=e.headerPositionClass,f=e.headerBgClass,j=(0,a.useState)(0),v=(0,l.Z)(j,2),g=v[0],p=v[1],b=(0,a.useState)(0),N=(0,l.Z)(b,2),Z=N[0],w=N[1];(0,a.useEffect)((function(){var e=document.querySelector(".sticky-bar");return w(e.offsetTop),window.addEventListener("scroll",C),function(){window.removeEventListener("scroll",C)}}),[]);var C=function(){p(window.scrollY)};return(0,u.jsxs)("header",{className:(0,n.Z)("header-area clearfix",f,x),children:[(0,u.jsx)("div",{className:(0,n.Z)("header-top-area",h,"visible"===r?"d-none d-lg-block":"d-none","fluid-border"===d&&"border-none"),children:(0,u.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,u.jsx)(m,{borderStyle:d})})}),(0,u.jsxs)("div",{className:(0,n.Z)(h,"sticky-bar header-res-padding clearfix",g>Z&&"stick"),children:[(0,u.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,u.jsx)(c.Z,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})}),(0,u.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,u.jsx)(i.Z,{})}),(0,u.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,u.jsx)(o.Z,{})})]})}),(0,u.jsx)(t.Z,{})]})]})}},2461:function(e,s,r){r.d(s,{Z:function(){return j}});var l=r(1413),a=r(5987),n=r(1694),c=r.n(n),i=r(2791),o=r(162),t=r(1396),d=r(184),h=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],u=i.forwardRef((function(e,s){var r=e.bsPrefix,n=e.active,i=e.children,u=e.className,m=e.as,x=void 0===m?"li":m,f=e.linkAs,j=void 0===f?t.Z:f,v=e.linkProps,g=e.href,p=e.title,b=e.target,N=(0,a.Z)(e,h),Z=(0,o.vE)(r,"breadcrumb-item");return(0,d.jsx)(x,(0,l.Z)((0,l.Z)({ref:s},N),{},{className:c()(Z,u,{active:n}),"aria-current":n?"page":void 0,children:n?i:(0,d.jsx)(j,(0,l.Z)((0,l.Z)({},v),{},{href:g,title:p,target:b,children:i}))}))}));u.displayName="BreadcrumbItem",u.defaultProps={active:!1,linkProps:{}};var m=u,x=["bsPrefix","className","listProps","children","label","as"],f=i.forwardRef((function(e,s){var r=e.bsPrefix,n=e.className,i=e.listProps,t=e.children,h=e.label,u=e.as,m=void 0===u?"nav":u,f=(0,a.Z)(e,x),j=(0,o.vE)(r,"breadcrumb");return(0,d.jsx)(m,(0,l.Z)((0,l.Z)({"aria-label":h,className:n,ref:s},f),{},{children:(0,d.jsx)("ol",(0,l.Z)((0,l.Z)({},i),{},{className:c()(j,null==i?void 0:i.className),children:t}))}))}));f.displayName="Breadcrumb",f.defaultProps={label:"breadcrumb",listProps:{}};var j=Object.assign(f,{Item:m})}}]);
//# sourceMappingURL=245.df3ad2d0.chunk.js.map