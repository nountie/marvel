(function(e){function t(t){for(var n,a,i=t[0],s=t[1],u=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({mainStage:"mainStage"}[e]||e)+"."+{mainStage:"4eaab3b4"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={mainStage:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({mainStage:"mainStage"}[e]||e)+"."+{mainStage:"5f3db409"}[e]+".css",o=s.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],p.parentNode.removeChild(p),r(c)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e._m(0),r("transition",{attrs:{name:"slide",mode:"out-in"}},[r("router-view")],1)],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"max-w-sm mx-auto m-5 pt-5 pl-5 pr-2 pb-2 bg-white rounded-lg shadow-xl"},[n("img",{staticClass:"max-w-full",attrs:{src:r("e5b9"),alt:"Marvel Comics"}})])}],c=r("2877"),i={},s=Object(c["a"])(i,a,o,!1,null,null,null),u=s.exports,l=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("159b"),r("ade3")),f=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container mx-auto justify-center flex h-56 items-end"},[r("router-link",{staticClass:"my-16 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",attrs:{to:{name:"list",params:{page:1}},tag:"button"}},[e._v(" Show the list! ")])],1)},m=[],d={name:"home"},g=d,h=Object(c["a"])(g,p,m,!1,null,null,null),b=h.exports;function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(l["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}n["a"].use(f["a"]);var O=[{path:"/",name:"home",component:b},{path:"/list/:page",name:"list",props:function(e){var t=y({},e.params);return t.page=+t.page,t},component:function(){return r.e("mainStage").then(r.bind(null,"82fa"))}},{path:"/character/:id/",name:"characterDetails",props:function(e){var t=y({},e.params);return t.id=+t.id,t},component:function(){return r.e("mainStage").then(r.bind(null,"82fa"))}},{path:"*",redirect:"/"}],w=new f["a"]({routes:O,mode:"history"}),C=w,S=(r("96cf"),r("2f62")),j=(r("0d03"),r("bc3a")),E=r.n(j),_=r("6821"),T=r.n(_);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){Object(l["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A="http://gateway.marvel.com",I="".concat(A,"/v1/public"),R={$http:E.a.create({baseURL:I,timeout:5e3}),setConfig:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{params:x({apikey:"d84cc49319ae6c1709fecc8f773cf3b1"},e)}},getItems:function(e,t){var r=this;return new Promise((function(n,a){var o=T()(JSON.stringify({url:e,config:t}));r.cache.exist(o)&&!r.cache.isOutdated(o)?n(r.cache.get(o)):r.$http(e,t).then((function(e){localStorage.setItem(o,JSON.stringify({time:Date.now(),content:e})),n(e)})).catch((function(e){console.error("API Request "+e),a()}))}))},cache:{CACHE_TIME:6e5,get:function(e){return JSON.parse(localStorage.getItem(e)).content},exist:function(e){return null!==localStorage.getItem(e)},isOutdated:function(e){return(new Date).getTime()-e>this.CACHE_TIME}}},D="characters",L={get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12;return t?R.getItems("".concat(D),R.setConfig({limit:r,offset:(e-1)*r,nameStartsWith:t})):R.getItems("".concat(D),R.setConfig({limit:r,offset:(e-1)*r}))},getCharacter:function(e){return R.getItems("".concat(D,"/").concat(e),R.setConfig())},getCharacterLatestComics:function(e){return R.getItems("".concat(D,"/").concat(e,"/comics"),R.setConfig({limit:6,orderBy:"-onsaleDate"}))}};n["a"].use(S["a"]);var k=new S["a"].Store({state:{characters:[],charactersDetails:{},characterLatestComics:[]},mutations:{SET_CHARACTERS_LIST:function(e,t){e.characters=t.data.data.results},SET_CHARACTER_DETAILS:function(e,t){var r=t.details,n=t.characterId;e.charactersDetails[n]=r.data.data.results[0]},SET_CHARACTER_LATEST_COMICS:function(e,t){var r=t.comics,n=t.characterId;e.characterLatestComics[n]=r.data.data.results}},actions:{getCharactersList:function(e,t){var r,n,a;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return r=e.commit,n=t.pageNumber,a=t.text,o.t0=r,o.next=5,regeneratorRuntime.awrap(L.get(n,a,12));case 5:o.t1=o.sent,(0,o.t0)("SET_CHARACTERS_LIST",o.t1);case 7:case"end":return o.stop()}}))},getCharacterDetails:function(e,t){var r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.t0=r,n.next=4,regeneratorRuntime.awrap(L.getCharacter(t));case 4:n.t1=n.sent,n.t2=t,n.t3={details:n.t1,characterId:n.t2},(0,n.t0)("SET_CHARACTER_DETAILS",n.t3);case 8:case"end":return n.stop()}}))},getCharacterLatestComics:function(e,t){var r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.t0=r,n.next=4,regeneratorRuntime.awrap(L.getCharacterLatestComics(t));case 4:n.t1=n.sent,n.t2=t,n.t3={comics:n.t1,characterId:n.t2},(0,n.t0)("SET_CHARACTER_LATEST_COMICS",n.t3);case 8:case"end":return n.stop()}}))}}});r("ba8c");n["a"].config.productionTip=!1,n["a"].use(k),n["a"].use(C),new n["a"]({router:C,store:k,render:function(e){return e(u)}}).$mount("#app")},ba8c:function(e,t,r){},e5b9:function(e,t,r){e.exports=r.p+"img/marvel.7bcec043.png"}});
//# sourceMappingURL=app.b427f09e.js.map