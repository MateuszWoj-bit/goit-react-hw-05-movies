"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{138:function(e,t,r){r.d(t,{J:function(){return n}});var n="4e9fa3fc2487236fdff94602c5bb9552"},278:function(e,t,r){r.r(t);var n=r(861),c=r(439),o=r(757),a=r.n(o),u=r(791),i=r(87),s=r(138),f=r(966),l=r(184);t.default=function(){var e,t=(0,u.useState)(""),r=(0,c.Z)(t,2),o=r[0],h=r[1],v=(0,u.useState)([]),p=(0,c.Z)(v,2),d=p[0],m=p[1],x=(0,i.lr)(),y=(0,c.Z)(x,2),b=y[0],j=y[1],k=null!==(e=b.get("query"))&&void 0!==e?e:"",w=(0,u.useState)(!1),g=(0,c.Z)(w,2),Z=g[0],_=g[1];(0,u.useEffect)((function(){_(!0);var e=function(){var e=(0,n.Z)(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(s.J,"&query=").concat(k));case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,m(r.results),_(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error fetching movie:",e.t0),_(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var S=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),t.preventDefault(),e.prev=2,e.next=5,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(s.J,"&query=").concat(o));case 5:return r=e.sent,e.next=8,r.json();case 8:n=e.sent,m(n.results),_(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),console.error("Error searching for movie:",e.t0),_(!1);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();return(0,l.jsxs)("div",{children:[(0,l.jsxs)("form",{onSubmit:S,children:[(0,l.jsx)("label",{children:(0,l.jsx)("input",{type:"text",value:o,onChange:function(e){h(e.target.value),j("query=".concat(e.target.value))}})}),(0,l.jsx)("button",{type:"submit",children:"Search"})]}),Z&&(0,l.jsx)(f.a,{}),0===d.length?(0,l.jsx)("p",{children:"No results yet."}):(0,l.jsx)("ul",{children:d.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/goit-react-hw-05-movies/movies/".concat(e.id),state:{from:"/goit-react-hw-05-movies/movies?".concat(b)},children:e.title})},e.id)}))})]})}},861:function(e,t,r){function n(e,t,r,n,c,o,a){try{var u=e[o](a),i=u.value}catch(s){return void r(s)}u.done?t(i):Promise.resolve(i).then(n,c)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(c,o){var a=e.apply(t,r);function u(e){n(a,c,o,u,i,"next",e)}function i(e){n(a,c,o,u,i,"throw",e)}u(void 0)}))}}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=278.3c994c38.chunk.js.map