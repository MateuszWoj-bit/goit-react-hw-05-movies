"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{138:function(t,e,n){n.d(e,{J:function(){return r}});var r="4e9fa3fc2487236fdff94602c5bb9552"},247:function(t,e,n){n.r(e);var r=n(861),a=n(439),c=n(757),o=n.n(c),i=n(791),s=n(689),u=n(138),f=n(966),h=n(184);e.default=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],p=(0,i.useState)(""),d=(0,a.Z)(p,2),l=d[0],v=d[1],m=(0,s.UO)().movieId,x=(0,i.useState)(!1),k=(0,a.Z)(x,2),w=k[0],j=k[1];return(0,i.useEffect)((function(){j(!0);var t=function(){var t=(0,r.Z)(o().mark((function t(){var e,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(m,"/credits?api_key=").concat(u.J,"&language=en-US"));case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,c(n.cast),j(!1),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),v("Failed to fetch cast"),j(!1);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();t()}),[m]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Cast"}),w&&(0,h.jsx)(f.a,{}),l&&(0,h.jsx)("p",{children:l}),0===n.length?(0,h.jsx)("p",{children:"We don't have cast informations for this movie."}):n.map((function(t){return(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w200".concat(t.profile_path):"https://poster.keepcalmandposters.com/3253015.jpg",alt:"".concat(t.name," profile"),width:"200"}),(0,h.jsxs)("p",{children:[t.name?t.name:""," as"," ",t.character?t.character:"unknown"]})]},t.id)}))]})}},861:function(t,e,n){function r(t,e,n,r,a,c,o){try{var i=t[c](o),s=i.value}catch(u){return void n(u)}i.done?e(s):Promise.resolve(s).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,c){var o=t.apply(e,n);function i(t){r(o,a,c,i,s,"next",t)}function s(t){r(o,a,c,i,s,"throw",t)}i(void 0)}))}}n.d(e,{Z:function(){return a}})}}]);
//# sourceMappingURL=247.253cb41c.chunk.js.map