"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,t,n){n.r(t);var r=n(861),s=n(439),a=n(757),c=n.n(a),i=n(791),u=n(689),o=n(138),h=n(966),l=n(184);t.default=function(){var e=(0,i.useState)([]),t=(0,s.Z)(e,2),n=t[0],a=t[1],p=(0,i.useState)(null),v=(0,s.Z)(p,2),f=v[0],d=v[1],x=(0,u.UO)().movieId,j=(0,i.useState)(!1),m=(0,s.Z)(j,2),w=m[0],k=m[1];return(0,i.useEffect)((function(){k(!0);var e=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(x,"/reviews?api_key=").concat(o.J,"&language=en-US"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a(n.results),k(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),d("Failed to fetch reviews"),k(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[x]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Reviews"}),w&&(0,l.jsx)(h.a,{}),f&&(0,l.jsx)("p",{children:f}),0===n.length?(0,l.jsx)("p",{children:"We don't have any reviews for this movie."}):(0,l.jsx)("ul",{children:n.map((function(e){return(0,l.jsxs)("li",{children:[(0,l.jsxs)("h3",{children:["Author: ",e.author]}),(0,l.jsx)("p",{children:e.content})]},e.id)}))})]})}}}]);
//# sourceMappingURL=186.118eeea7.chunk.js.map