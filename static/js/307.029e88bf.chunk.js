"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[307],{307:function(t,e,r){r.r(e),r.d(e,{default:function(){return Z}});var n,a,s,u=r(439),c=r(791),i=r(87),o=r(689),f=r(390),p=r(128),d=r(184),v=function(t){var e=t.to,r=t.children;return(0,d.jsxs)(i.rU,{to:e,children:[(0,d.jsx)(p.jTe,{size:"20"}),r]})},h=r(168),l=r(444),x=l.ZP.div(n||(n=(0,h.Z)(["\n  display: flex;\n"]))),m=l.ZP.img(a||(a=(0,h.Z)(["\n  height: 450px;\n  margin: 10px;\n"]))),w=l.ZP.div(s||(s=(0,h.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),Z=function(){var t,e,r=(0,c.useState)(null),n=(0,u.Z)(r,2),a=n[0],s=n[1],p=(0,o.UO)().movieId,h=null!==(t=null===(e=(0,o.TH)().state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/movies";if((0,c.useEffect)((function(){(0,f.vq)(p).then(s)}),[p]),a){var l=a.poster_path,Z=a.title,j=a.overview,g=a.vote_average,k=a.genres.map((function(t){return t.name+" "}));return(0,d.jsxs)("div",{children:[(0,d.jsx)(v,{to:h,children:"Go back"}),(0,d.jsxs)(x,{children:[(0,d.jsx)(m,{src:"https://image.tmdb.org/t/p/w300".concat(l),alt:"".concat(Z)}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:Z}),(0,d.jsxs)("h3",{children:["Rating: ",Math.round(10*g),"%"]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:j}),(0,d.jsxs)("h3",{children:["Genres: ",k]}),(0,d.jsxs)(w,{children:[(0,d.jsx)(i.rU,{to:"cast",children:"Cast"}),(0,d.jsx)(i.rU,{to:"reviews",children:"Reviews"})]}),(0,d.jsx)(o.j3,{})]})]})]})}}},390:function(t,e,r){r.d(e,{Df:function(){return c},M1:function(){return f},Pt:function(){return i},tx:function(){return p},vq:function(){return o}});var n=r(861),a=r(757),s=r.n(a),u=r(388);u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.params={api_key:"50331c259a8d216f974a09fadb8f8a27"};var c=function(){var t=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day");case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?query=".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/reviews"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=307.029e88bf.chunk.js.map