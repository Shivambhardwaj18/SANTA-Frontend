"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[369],{9725:function(e,s,r){var l=r(8182),a=r(1087),i=r(184);s.Z=function(e){var s=e.footerLogo,r=e.spaceBottomClass,n=e.colorClass;return(0,i.jsxs)("div",{className:(0,l.Z)("copyright",r,n),children:[(0,i.jsx)("div",{className:"footer-logo",children:(0,i.jsx)(a.rU,{to:"/",children:(0,i.jsx)("img",{alt:"",src:""+s})})}),(0,i.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,i.jsx)("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Flone"}),".",(0,i.jsx)("br",{})," All Rights Reserved"]})]})}},5184:function(e,s,r){r.d(s,{Z:function(){return d}});var l=r(8182),a=r(9577),i=r(184),n=function(e){var s,r=e.status,l=e.message,a=e.onValidated;return(0,i.jsxs)("div",{className:"subscribe-form",children:[(0,i.jsxs)("div",{className:"mc-form",children:[(0,i.jsx)("div",{children:(0,i.jsx)("input",{id:"mc-form-email",className:"email",ref:function(e){return s=e},type:"email",placeholder:"Enter your email address..."})}),(0,i.jsx)("div",{className:"clear",children:(0,i.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&a({EMAIL:s.value}),document.getElementById("mc-form-email").value=""},children:"SUBSCRIBE"})})]}),"sending"===r&&(0,i.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===r&&(0,i.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:l}}),"success"===r&&(0,i.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:l}})]})},c=function(e){var s=e.mailchimpUrl;return(0,i.jsx)("div",{children:(0,i.jsx)(a.Z,{url:s,render:function(e){var s=e.subscribe,r=e.status,l=e.message;return(0,i.jsx)(n,{status:r,message:l,onValidated:function(e){return s(e)}})}})})},d=function(e){var s=e.spaceBottomClass,r=e.spaceLeftClass,a=e.sideMenu,n=e.colorClass,d=e.widgetColorClass;return(0,i.jsxs)("div",{className:(0,l.Z)("footer-widget",s,a?"ml-ntv5":r,d),children:[(0,i.jsx)("div",{className:"footer-title",children:(0,i.jsx)("h3",{children:"SUBSCRIBE"})}),(0,i.jsxs)("div",{className:(0,l.Z)("subscribe-style",n),children:[(0,i.jsx)("p",{children:"Get E-mail updates about our latest shop and special offers."}),(0,i.jsx)(c,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})]})]})}},1567:function(e,s,r){var l=r(8182),a=r(1087),i=r(184);s.Z=function(e){var s=e.imageUrl,r=e.logoClass;return(0,i.jsx)("div",{className:(0,l.Z)(r),children:(0,i.jsx)(a.rU,{to:"/",children:(0,i.jsx)("img",{alt:"",src:""+s})})})}},7127:function(e,s,r){var l=r(9434),a=r(9230),i=(r(147),r(184));s.Z=function(e){e.currency;var s=(0,a.$G)().i18n,r=((0,l.I0)(),function(e){var r=e.target.value;s.changeLanguage(r)});return(0,i.jsxs)("div",{className:"language-currency-wrap",children:[(0,i.jsxs)("div",{className:"same-language-currency language-style",children:[(0,i.jsxs)("span",{children:["en"===s.resolvedLanguage?"English":"fn"===s.resolvedLanguage?"French":"de"===s.resolvedLanguage?"Germany":""," ",(0,i.jsx)("i",{className:"fa fa-angle-down"})]}),(0,i.jsx)("div",{className:"lang-car-dropdown",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("button",{value:"en",onClick:function(e){return r(e)},children:"English"})}),(0,i.jsx)("li",{children:(0,i.jsx)("button",{value:"fn",onClick:function(e){return r(e)},children:"French"})}),(0,i.jsx)("li",{children:(0,i.jsx)("button",{value:"de",onClick:function(e){return r(e)},children:"Germany"})})]})})]}),(0,i.jsx)("div",{className:"same-language-currency",children:(0,i.jsx)("p",{children:"Call Us 3965410"})})]})}},9354:function(e,s,r){r.d(s,{Z:function(){return c}});var l=r(9439),a=r(2791),i=function(){var e=(0,a.useState)(!1),s=(0,l.Z)(e,2),r=s[0],i=s[1];return(0,a.useEffect)((function(){var e=function(){var e=window.pageYOffset;i(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[r]),{stick:r,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},n=r(184),c=function(){var e=i(),s=e.stick,r=e.onClickHandler;return s?(0,n.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:r,children:(0,n.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},9858:function(e,s,r){var l=r(2791),a=r(7939),i=r(8032),n=r(9354),c=r(184);s.Z=function(e){var s=e.children,r=e.headerContainerClass,d=e.headerTop,t=e.headerPaddingClass,o=e.headerPositionClass;return(0,c.jsxs)(l.Fragment,{children:[(0,c.jsx)(a.Z,{layout:r,top:d,headerPaddingClass:t,headerPositionClass:o}),s,(0,c.jsx)(i.Z,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,c.jsx)(n.Z,{})]})}},8428:function(e,s,r){var l=r(1087),a=r(184);s.Z=function(){return(0,a.jsxs)("div",{className:"sidebar-style",children:[(0,a.jsxs)("div",{className:"sidebar-widget",children:[(0,a.jsx)("h4",{className:"pro-sidebar-title",children:"Search "}),(0,a.jsx)("div",{className:"pro-sidebar-search mb-55 mt-25",children:(0,a.jsxs)("form",{className:"pro-sidebar-search-form",action:"#",children:[(0,a.jsx)("input",{type:"text",placeholder:"Search here..."}),(0,a.jsx)("button",{children:(0,a.jsx)("i",{className:"pe-7s-search"})})]})})]}),(0,a.jsxs)("div",{className:"sidebar-widget",children:[(0,a.jsx)("h4",{className:"pro-sidebar-title",children:"Recent Projects "}),(0,a.jsxs)("div",{className:"sidebar-project-wrap mt-30",children:[(0,a.jsxs)("div",{className:"single-sidebar-blog",children:[(0,a.jsx)("div",{className:"sidebar-blog-img",children:(0,a.jsx)(l.rU,{to:"/blog-details-standard",children:(0,a.jsx)("img",{src:"/assets/img/blog/sidebar-1.jpg",alt:""})})}),(0,a.jsxs)("div",{className:"sidebar-blog-content",children:[(0,a.jsx)("span",{children:"Photography"}),(0,a.jsx)("h4",{children:(0,a.jsx)(l.rU,{to:"/blog-details-standard",children:"T- Shart And Jeans"})})]})]}),(0,a.jsxs)("div",{className:"single-sidebar-blog",children:[(0,a.jsx)("div",{className:"sidebar-blog-img",children:(0,a.jsx)(l.rU,{to:"/blog-details-standard",children:(0,a.jsx)("img",{src:"/assets/img/blog/sidebar-2.jpg",alt:""})})}),(0,a.jsxs)("div",{className:"sidebar-blog-content",children:[(0,a.jsx)("span",{children:"Branding"}),(0,a.jsx)("h4",{children:(0,a.jsx)(l.rU,{to:"/blog-details-standard",children:"T- Shart And Jeans"})})]})]}),(0,a.jsxs)("div",{className:"single-sidebar-blog",children:[(0,a.jsx)("div",{className:"sidebar-blog-img",children:(0,a.jsx)(l.rU,{to:"/blog-details-standard",children:(0,a.jsx)("img",{src:"/assets/img/blog/sidebar-3.jpg",alt:""})})}),(0,a.jsxs)("div",{className:"sidebar-blog-content",children:[(0,a.jsx)("span",{children:"Design"}),(0,a.jsx)("h4",{children:(0,a.jsx)(l.rU,{to:"/blog-details-standard",children:"T- Shart And Jeans"})})]})]}),(0,a.jsxs)("div",{className:"single-sidebar-blog",children:[(0,a.jsx)("div",{className:"sidebar-blog-img",children:(0,a.jsx)(l.rU,{to:"/blog-details-standard",children:(0,a.jsx)("img",{src:"/assets/img/blog/sidebar-2.jpg",alt:""})})}),(0,a.jsxs)("div",{className:"sidebar-blog-content",children:[(0,a.jsx)("span",{children:"Photography"}),(0,a.jsx)("h4",{children:(0,a.jsx)(l.rU,{to:"/blog-details-standard",children:"T- Shart And Jeans"})})]})]})]})]}),(0,a.jsxs)("div",{className:"sidebar-widget mt-35",children:[(0,a.jsx)("h4",{className:"pro-sidebar-title",children:"Categories"}),(0,a.jsx)("div",{className:"sidebar-widget-list sidebar-widget-list--blog mt-20",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsxs)("div",{className:"sidebar-widget-list-left",children:[(0,a.jsx)("input",{type:"checkbox",defaultValue:!0})," ",(0,a.jsxs)(l.rU,{to:"/blog-standard",children:["Women ",(0,a.jsx)("span",{children:"4"})," "]}),(0,a.jsx)("span",{className:"checkmark"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("div",{className:"sidebar-widget-list-left",children:[(0,a.jsx)("input",{type:"checkbox",defaultValue:!0})," ",(0,a.jsxs)(l.rU,{to:"/blog-standard",children:["Men ",(0,a.jsx)("span",{children:"4"})," "]}),(0,a.jsx)("span",{className:"checkmark"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("div",{className:"sidebar-widget-list-left",children:[(0,a.jsx)("input",{type:"checkbox",defaultValue:!0})," ",(0,a.jsxs)(l.rU,{to:"/blog-standard",children:["Bags ",(0,a.jsx)("span",{children:"4"})," "]}),(0,a.jsx)("span",{className:"checkmark"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("div",{className:"sidebar-widget-list-left",children:[(0,a.jsx)("input",{type:"checkbox",defaultValue:!0})," ",(0,a.jsxs)(l.rU,{to:"/blog-standard",children:["Accessories ",(0,a.jsx)("span",{children:"4"})," "]}),(0,a.jsx)("span",{className:"checkmark"})]})})]})})]}),(0,a.jsxs)("div",{className:"sidebar-widget mt-50",children:[(0,a.jsx)("h4",{className:"pro-sidebar-title",children:"Tag "}),(0,a.jsx)("div",{className:"sidebar-widget-tag mt-25",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(l.rU,{to:"/blog-standard",children:"Clothing"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l.rU,{to:"/blog-standard",children:"Accessories"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l.rU,{to:"/blog-standard",children:"For Men"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l.rU,{to:"/blog-standard",children:"Women"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l.rU,{to:"/blog-standard",children:"Fashion"})})]})})]})]})}},9778:function(e,s,r){var l=r(2461),a=r(1087),i=r(184);s.Z=function(e){var s=e.pages;return(0,i.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)(l.Z,{children:null===s||void 0===s?void 0:s.map((function(e,r){var n=e.path,c=e.label;return r!==s.length-1?(0,i.jsx)(l.Z.Item,{linkProps:{to:n},linkAs:a.rU,children:c},c):(0,i.jsx)(l.Z.Item,{active:!0,children:c},c)}))})})})}},8032:function(e,s,r){var l=r(8182),a=r(1087),i=r(9725),n=r(5184),c=r(184);s.Z=function(e){var s=e.backgroundColorClass,r=e.spaceTopClass,d=e.spaceBottomClass,t=e.spaceLeftClass,o=e.spaceRightClass,h=e.containerClass,x=e.extraFooterClass,j=e.sideMenu;return(0,c.jsx)("footer",{className:(0,l.Z)("footer-area",s,r,d,x,t,o),children:(0,c.jsx)("div",{className:"".concat(h||"container"),children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"".concat(j?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsx)(i.Z,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})}),(0,c.jsx)("div",{className:"".concat(j?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"ABOUT US"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/about",children:"About us"})}),(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"#/",children:"Store location"})}),(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/contact",children:"Contact"})}),(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"#/",children:"Orders tracking"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(j?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsxs)("div",{className:"".concat(j?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"USEFUL LINKS"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"#/",children:"Returns"})}),(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"#/",children:"Support Policy"})}),(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"#/",children:"Size guide"})}),(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"#/",children:"FAQs"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(j?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,c.jsxs)("div",{className:"".concat(j?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"FOLLOW US"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:"Youtube"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(j?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,c.jsx)(n.Z,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:j})})]})})})}},7939:function(e,s,r){r.d(s,{Z:function(){return m}});var l=r(9439),a=r(2791),i=r(8182),n=r(1567),c=r(9381),d=r(2824),t=r(2412),o=r(9434),h=r(7127),x=r(184),j=function(e){var s=e.borderStyle,r=(0,o.v9)((function(e){return e.currency}));return(0,x.jsxs)("div",{className:(0,i.Z)("header-top-wap","fluid-border"===s&&"border-bottom"),children:[(0,x.jsx)(h.Z,{currency:r}),(0,x.jsx)("div",{className:"header-offer",children:(0,x.jsxs)("p",{children:["Free delivery on order over"," ",(0,x.jsx)("span",{children:r.currencySymbol+(200*r.currencyRate).toFixed(2)})]})})]})},m=function(e){var s=e.layout,r=e.top,o=e.borderStyle,h=e.headerPaddingClass,m=e.headerPositionClass,u=e.headerBgClass,g=(0,a.useState)(0),b=(0,l.Z)(g,2),f=b[0],v=b[1],p=(0,a.useState)(0),N=(0,l.Z)(p,2),w=N[0],C=N[1];(0,a.useEffect)((function(){var e=document.querySelector(".sticky-bar");return C(e.offsetTop),window.addEventListener("scroll",Z),function(){window.removeEventListener("scroll",Z)}}),[]);var Z=function(){v(window.scrollY)};return(0,x.jsxs)("header",{className:(0,i.Z)("header-area clearfix",u,m),children:[(0,x.jsx)("div",{className:(0,i.Z)("header-top-area",h,"visible"===r?"d-none d-lg-block":"d-none","fluid-border"===o&&"border-none"),children:(0,x.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,x.jsx)(j,{borderStyle:o})})}),(0,x.jsxs)("div",{className:(0,i.Z)(h,"sticky-bar header-res-padding clearfix",f>w&&"stick"),children:[(0,x.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,x.jsx)(n.Z,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})}),(0,x.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,x.jsx)(c.Z,{})}),(0,x.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,x.jsx)(d.Z,{})})]})}),(0,x.jsx)(t.Z,{})]})]})}},2461:function(e,s,r){r.d(s,{Z:function(){return g}});var l=r(1413),a=r(5987),i=r(1694),n=r.n(i),c=r(2791),d=r(162),t=r(1396),o=r(184),h=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],x=c.forwardRef((function(e,s){var r=e.bsPrefix,i=e.active,c=e.children,x=e.className,j=e.as,m=void 0===j?"li":j,u=e.linkAs,g=void 0===u?t.Z:u,b=e.linkProps,f=e.href,v=e.title,p=e.target,N=(0,a.Z)(e,h),w=(0,d.vE)(r,"breadcrumb-item");return(0,o.jsx)(m,(0,l.Z)((0,l.Z)({ref:s},N),{},{className:n()(w,x,{active:i}),"aria-current":i?"page":void 0,children:i?c:(0,o.jsx)(g,(0,l.Z)((0,l.Z)({},b),{},{href:f,title:v,target:p,children:c}))}))}));x.displayName="BreadcrumbItem",x.defaultProps={active:!1,linkProps:{}};var j=x,m=["bsPrefix","className","listProps","children","label","as"],u=c.forwardRef((function(e,s){var r=e.bsPrefix,i=e.className,c=e.listProps,t=e.children,h=e.label,x=e.as,j=void 0===x?"nav":x,u=(0,a.Z)(e,m),g=(0,d.vE)(r,"breadcrumb");return(0,o.jsx)(j,(0,l.Z)((0,l.Z)({"aria-label":h,className:i,ref:s},u),{},{children:(0,o.jsx)("ol",(0,l.Z)((0,l.Z)({},c),{},{className:n()(g,null==c?void 0:c.className),children:t}))}))}));u.displayName="Breadcrumb",u.defaultProps={label:"breadcrumb",listProps:{}};var g=Object.assign(u,{Item:j})}}]);
//# sourceMappingURL=369.3aadbed5.chunk.js.map