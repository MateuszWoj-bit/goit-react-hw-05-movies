"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{138:function(e,n,t){t.d(n,{J:function(){return r}});var r="4e9fa3fc2487236fdff94602c5bb9552"},186:function(e,n,t){t.r(n);var r=t(861),c=t(439),i=t(757),u=t.n(i),a=t(791),o=t(689),s=t(138),f=t(966),h=t(184);n.default=function(){var e=(0,a.useState)([]),n=(0,c.Z)(e,2),t=n[0],i=n[1],l=(0,a.useState)(null),v=(0,c.Z)(l,2),d=v[0],p=v[1],x=(0,o.UO)().movieId,m=(0,a.useState)(!1),w=(0,c.Z)(m,2),j=w[0],k=w[1];return(0,a.useEffect)((function(){k(!0);var e=function(){var e=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(x,"/reviews?api_key=").concat(s.J,"&language=en-US"));case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,i(t.results),k(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),p("Failed to fetch reviews"),k(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[x]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Reviews"}),j&&(0,h.jsx)(f.a,{}),d&&(0,h.jsx)("p",{children:d}),0===t.length?(0,h.jsx)("p",{children:"We don't have any reviews for this movie."}):(0,h.jsx)("ul",{children:t.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsxs)("h3",{children:["Author: ",e.author]}),(0,h.jsx)("p",{children:e.content})]},e.id)}))})]})}},861:function(e,n,t){function r(e,n,t,r,c,i,u){try{var a=e[i](u),o=a.value}catch(s){return void t(s)}a.done?n(o):Promise.resolve(o).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,i){var u=e.apply(n,t);function a(e){r(u,c,i,a,o,"next",e)}function o(e){r(u,c,i,a,o,"throw",e)}a(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=186.7130f2f4.chunk.js.map