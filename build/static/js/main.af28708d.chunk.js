(this["webpackJsonpshopify-internship-project"]=this["webpackJsonpshopify-internship-project"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(4),a=n.n(i),r=(n(9),n(3)),o=(n(10),n(0));function j(e){var t=e.movie;return console.log(t),Object(o.jsxs)("div",{className:"Mcard",children:[Object(o.jsx)("h1",{className:"Mtitle",children:t.Title}),Object(o.jsx)("h2",{className:"Mrating",children:t.Rated}),Object(o.jsxs)("p",{className:"Mdescription",children:[" ",t.Plot]}),Object(o.jsx)("img",{className:"Mposter",src:t.Poster,alt:t.title,style:{height:"120px",width:"100px"}}),Object(o.jsx)("p",{children:"hi"}),Object(o.jsx)("button",{className:"Nbutton",children:"Nomnate?"})]})}var l=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(""),a=Object(r.a)(i,2),l=a[0],h=a[1];return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"Search",children:[Object(o.jsxs)("div",{className:"Header",children:[Object(o.jsxs)("label",{className:"label",children:["Movies:",Object(o.jsx)("input",{type:"text",value:n,onChange:function(e){return s(e.target.value)}})]}),Object(o.jsx)("input",{type:"submit",value:"Submit",onClick:function(){fetch("http://www.omdbapi.com/?t=".concat(n,"&apikey=be23069c&type=movie&r=json")).then((function(e){return e.json()})).then((function(e){return h(e)}))}})]}),Object(o.jsx)("div",{className:"Mcontainer",children:Object(o.jsx)(j,{movie:l})})]})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root")),h()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.af28708d.chunk.js.map