"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[2801],{2801:function(e,t,r){r.r(t);var s=r(9439),c=r(2791),n=r(9434),o=r(6443),i=r(7689),a=r(1770),l=r(3695),u=r(9858),d=r(9778),h=r(6581),p=r(4427),m=r(184);t.default=function(){var e=(0,c.useState)("grid three-column"),t=(0,s.Z)(e,2),r=t[0],x=t[1],f=(0,c.useState)(""),j=(0,s.Z)(f,2),g=j[0],v=j[1],N=(0,c.useState)(""),S=(0,s.Z)(N,2),C=S[0],P=S[1],b=(0,c.useState)(""),Z=(0,s.Z)(b,2),w=Z[0],k=Z[1],H=(0,c.useState)(""),L=(0,s.Z)(H,2),F=L[0],T=L[1],y=(0,c.useState)(0),_=(0,s.Z)(y,2),z=_[0],B=_[1],D=(0,c.useState)(1),E=(0,s.Z)(D,2),O=E[0],R=E[1],X=(0,c.useState)([]),q=(0,s.Z)(X,2),A=q[0],G=q[1],I=(0,c.useState)([]),J=(0,s.Z)(I,2),K=J[0],M=J[1],Q=(0,n.v9)((function(e){return e.product})).products,U=(0,i.TH)().pathname;return(0,c.useEffect)((function(){var e=(0,a.LB)(Q,g,C),t=(0,a.LB)(e,w,F);M(e=t),G(e.slice(z,z+15))}),[z,Q,g,C,w,F]),(0,m.jsxs)(c.Fragment,{children:[(0,m.jsx)(l.Z,{titleTemplate:"Shop Page",description:"Shop page of flone react minimalist eCommerce template."}),(0,m.jsxs)(u.Z,{headerTop:"visible",children:[(0,m.jsx)(d.Z,{pages:[{label:"Home",path:"/"},{label:"Shop",path:""+U}]}),(0,m.jsx)("div",{className:"shop-area pt-95 pb-100",children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"row",children:(0,m.jsxs)("div",{className:"col-lg-12",children:[(0,m.jsx)(h.Z,{getLayout:function(e){x(e)},getFilterSortParams:function(e,t){k(e),T(t)},productCount:Q.length,sortedProductCount:A.length,products:Q,getSortParams:function(e,t){v(e),P(t)}}),(0,m.jsx)(p.Z,{layout:r,products:A}),(0,m.jsx)("div",{className:"pro-pagination-style text-center mt-30",children:(0,m.jsx)(o.Z,{totalRecords:K.length,pageLimit:15,pageNeighbours:2,setOffset:B,currentPage:O,setCurrentPage:R,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"})})]})})})})]})]})}},6581:function(e,t,r){r.d(t,{Z:function(){return a}});var s=r(2791),c=r(1770),n=r(184),o=function(e){var t=e.products,r=e.getSortParams,s=(0,c.uX)(t),o=(0,c.mF)(t),i=(0,c.l9)(t),a=(0,c.ku)(t);return(0,n.jsx)("div",{className:"product-filter-wrapper",id:"product-filter-wrapper",children:(0,n.jsx)("div",{className:"product-filter-wrapper__inner",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30",children:(0,n.jsxs)("div",{className:"product-filter",children:[(0,n.jsx)("h5",{children:"Categories"}),s?(0,n.jsx)("ul",{children:s.map((function(e,t){return(0,n.jsx)("li",{children:(0,n.jsx)("button",{onClick:function(t){r("category",e),(0,c.H7)(t)},children:e})},t)}))}):"No categories found"]})}),(0,n.jsx)("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30",children:(0,n.jsxs)("div",{className:"product-filter",children:[(0,n.jsx)("h5",{children:"Color"}),o?(0,n.jsx)("ul",{children:o.map((function(e,t){return(0,n.jsx)("li",{children:(0,n.jsx)("button",{onClick:function(t){r("color",e),(0,c.H7)(t)},children:e})},t)}))}):"No colors found"]})}),(0,n.jsx)("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30",children:(0,n.jsxs)("div",{className:"product-filter",children:[(0,n.jsx)("h5",{children:"Size"}),i?(0,n.jsx)("ul",{children:i.map((function(e,t){return(0,n.jsx)("li",{children:(0,n.jsx)("button",{className:"text-uppercase",onClick:function(t){r("size",e),(0,c.H7)(t)},children:e})},t)}))}):"No sizes found"]})}),(0,n.jsx)("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30",children:(0,n.jsxs)("div",{className:"product-filter product-filter--tag",children:[(0,n.jsx)("h5",{children:"Tag"}),a?(0,n.jsx)("ul",{children:a.map((function(e,t){return(0,n.jsx)("li",{children:(0,n.jsx)("button",{onClick:function(t){r("tag",e),(0,c.H7)(t)},children:e})},t)}))}):"No tags found"]})})]})})})},i=function(e){var t=e.getFilterSortParams,r=e.productCount,i=e.sortedProductCount,a=e.products,l=e.getSortParams;return(0,n.jsxs)(s.Fragment,{children:[(0,n.jsxs)("div",{className:"shop-top-bar mb-35",children:[(0,n.jsxs)("div",{className:"select-shoing-wrap",children:[(0,n.jsx)("div",{className:"shop-select",children:(0,n.jsxs)("select",{onChange:function(e){return t("filterSort",e.target.value)},children:[(0,n.jsx)("option",{value:"default",children:"Default"}),(0,n.jsx)("option",{value:"priceHighToLow",children:"Price - High to Low"}),(0,n.jsx)("option",{value:"priceLowToHigh",children:"Price - Low to High"})]})}),(0,n.jsxs)("p",{children:["Showing ",i," of ",r," result"]})]}),(0,n.jsx)("div",{className:"filter-active",children:(0,n.jsxs)("button",{onClick:function(e){return(0,c.Zf)(e)},children:[(0,n.jsx)("i",{className:"fa fa-plus"})," filter"]})})]}),(0,n.jsx)(o,{products:a,getSortParams:l})]})},a=function(e){var t=e.getLayout,r=e.getFilterSortParams,c=e.productCount,o=e.sortedProductCount,a=e.products,l=e.getSortParams;return(0,n.jsx)(s.Fragment,{children:(0,n.jsx)(i,{getLayout:t,getFilterSortParams:r,productCount:c,sortedProductCount:o,products:a,getSortParams:l})})}}}]);
//# sourceMappingURL=2801.bb857f96.chunk.js.map