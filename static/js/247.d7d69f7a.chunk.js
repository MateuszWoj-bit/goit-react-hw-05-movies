"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(e,t,n){n.r(t);var a=n(861),r=n(439),c=n(757),s=n.n(c),i=n(791),o=n(689),p=n(138),h=n(966),u=n(184);t.default=function(){var e=(0,i.useState)([]),t=(0,r.Z)(e,2),n=t[0],c=t[1],l=(0,i.useState)(""),f=(0,r.Z)(l,2),d=f[0],m=f[1],v=(0,o.UO)().movieId,x=(0,i.useState)(!1),k=(0,r.Z)(x,2),j=k[0],w=k[1];return(0,i.useEffect)((function(){w(!0);var e=function(){var e=(0,a.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(v,"/credits?api_key=").concat(p.J,"&language=en-US"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n.cast),w(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),m("Failed to fetch cast"),w(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[v]),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Cast"}),j&&(0,u.jsx)(h.a,{}),d&&(0,u.jsx)("p",{children:d}),0===n.length?(0,u.jsx)("p",{children:"We don't have cast informations for this movie."}):n.map((function(e){return(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/w200".concat(e.profile_path):"https://poster.keepcalmandposters.com/3253015.jpg",alt:"".concat(e.name," profile"),width:"200"}),(0,u.jsxs)("p",{children:[e.name?e.name:""," as"," ",e.character?e.character:"unknown"]})]},e.id)}))]})}}}]);
//# sourceMappingURL=247.d7d69f7a.chunk.js.map