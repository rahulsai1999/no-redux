(this["webpackJsonpno-redux"]=this["webpackJsonpno-redux"]||[]).push([[0],{122:function(e,t,a){e.exports=a(215)},127:function(e,t,a){},212:function(e,t,a){},215:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),i=(a(127),a(49)),u=a(17),o=a(217),m=a(219),s=a(100),d=a.n(s),E=a(30),p=a(8),f=a(218),y=a(216),v=a(220),g=a(221),h=a(117),b=a(118),A=a(50),F=r.a.createContext(),k={episodes:[],favourites:[]},V=function(e,t){switch(t.type){case"FETCH_DATA":return Object(A.a)({},e,{episodes:t.payload});case"ADD_FAV":return Object(A.a)({},e,{favourites:[].concat(Object(b.a)(e.favourites),[t.payload])});case"REMOVE_FAV":return Object(A.a)({},e,{favourites:t.payload});default:return e}},_=function(e){var t=r.a.useReducer(V,k),a=Object(h.a)(t,2),n={state:a[0],dispatch:a[1]};return r.a.createElement(F.Provider,{value:n},e.children)},D=function(e){var t=r.a.useContext(F),a=t.state,n=t.dispatch,l=a.episodes,c=a.favourites;return r.a.useEffect((function(){0===a.episodes.length&&d.a.get("https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes").then((function(e){var t=e.data._embedded;return n({type:"FETCH_DATA",payload:t.episodes})}))})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginTop:40}},r.a.createElement("h1",null,"Episodes"),r.a.createElement("p",null,"Select your favourite episodes"),r.a.createElement(E.a,{gutter:[16,16]},0!==l.length?l.map((function(e){return r.a.createElement(p.a,null,r.a.createElement(f.a,{key:e.id,style:{width:300},cover:r.a.createElement("img",{src:null!=e.image?e.image.medium:null,alt:e.name})},r.a.createElement(f.a.Meta,{title:"Season: ".concat(e.season," Episode: ").concat(e.number),description:e.name}),r.a.createElement("br",null),r.a.createElement(m.a,{icon:c.find((function(t){return t.id===e.id}))?r.a.createElement(v.a,null):r.a.createElement(g.a,null),type:"primary",onClick:function(){return function(e){var t=c.includes(e),a={type:"ADD_FAV",payload:e};t&&(a={type:"REMOVE_FAV",payload:c.filter((function(t){return t.id!==e.id}))});return n(a)}(e)}},c.find((function(t){return t.id===e.id}))?"Unlike":"Like")))})):r.a.createElement("div",{style:{marginLeft:10,marginTop:30}},r.a.createElement(y.a,{size:"large"})))))},O=a(29),T=function(e){var t=r.a.useContext(F),a=t.state,n=t.dispatch,l=a.favourites;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginTop:40}},r.a.createElement("h1",null,"Favourites"),r.a.createElement("p",null,"Here are your favourites"),r.a.createElement(E.a,{gutter:[16,16]},0!==l.length?l.map((function(e){return r.a.createElement(p.a,null,r.a.createElement(f.a,{key:e.id,style:{width:300},cover:r.a.createElement("img",{src:null!=e.image?e.image.medium:null,alt:e.name})},r.a.createElement(f.a.Meta,{title:"Season: ".concat(e.season," Episode: ").concat(e.number),description:e.name}),r.a.createElement("br",null),r.a.createElement(m.a,{icon:l.find((function(t){return t.id===e.id}))?r.a.createElement(v.a,null):r.a.createElement(g.a,null),type:"primary",onClick:function(){return function(e){var t=l.includes(e),a={type:"ADD_FAV",payload:e};t&&(a={type:"REMOVE_FAV",payload:l.filter((function(t){return t.id!==e.id}))});return n(a)}(e)}},l.find((function(t){return t.id===e.id}))?"Unlike":"Like")))})):r.a.createElement(O.a,{style:{marginTop:40}}))))},x=(a(212),function(){return r.a.createElement("div",{style:{margin:40}},r.a.createElement(i.a,null,r.a.createElement("header",null,r.a.createElement(o.a,null,r.a.createElement(m.a,{type:"danger"},r.a.createElement(i.b,{to:"/"},"Home")),r.a.createElement(m.a,{type:"danger"},r.a.createElement(i.b,{to:"/fav"},"Favourites")))),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:D}),r.a.createElement(u.a,{path:"/fav",component:T}))))});c.a.render(r.a.createElement(_,null,r.a.createElement(x,null)),document.getElementById("root"))}},[[122,1,2]]]);
//# sourceMappingURL=main.445c361f.chunk.js.map