(()=>{"use strict";var e,t,r,n,d={},a={};function o(e){if(a[e])return a[e].exports;var t=a[e]={id:e,loaded:!1,exports:{}};return d[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}o.m=d,o.x=e=>{},o.amdO={},o.F={},o.E=e=>{Object.keys(o.F).map((t=>{o.F[t](e)}))},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>e+"."+e+"."+{3:"d9cf5dce0d7e417bdad4",4:"62dc0b88fa02b1d6115d",5:"edfd38532c4c104e6313",6:"854684fd21f9376a88ba",7:"0f6303894a09edce0d38",8:"ddb4166de634054708f4",9:"71430464d527036e33fd",10:"d9813480e9efc2ac22e9",11:"3e8300c203207a25012f"}[e]+".bundle.js",o.miniCssF=e=>1===e?"runtime.undefined.css":2===e?"vendor.9b2dbf1036a098c0d715.css":0===e?"main.04b604e120b08b8433f8.css":e+"."+e+"."+{3:"d9cf5dce0d7e417bdad4",4:"62dc0b88fa02b1d6115d",5:"edfd38532c4c104e6313",6:"854684fd21f9376a88ba",7:"0f6303894a09edce0d38",8:"ddb4166de634054708f4",9:"71430464d527036e33fd",10:"d9813480e9efc2ac22e9",11:"3e8300c203207a25012f"}[e]+".css",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="slides:",o.l=(r,n,d,a)=>{if(e[r])e[r].push(n);else{var i,l;if(void 0!==d)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var u=s[c];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+d){i=u;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+d),i.src=r),e[r]=[n];var f=(t,n)=>{i.onerror=i.onload=null,clearTimeout(p);var d=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),d&&d.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.p="/",r=e=>new Promise(((t,r)=>{var n=o.miniCssF(e),d=o.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var d=(o=r[n]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(d===e||d===t))return o}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var o;if((d=(o=a[n]).getAttribute("data-href"))===e||d===t)return o}})(n,d))return t();((e,t,r,n)=>{var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onerror=d.onload=a=>{if(d.onerror=d.onload=null,"load"===a.type)r();else{var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=i,d.parentNode.removeChild(d),n(l)}},d.href=t,document.head.appendChild(d)})(e,d,t,r)})),n={1:0},o.f.miniCss=(e,t)=>{n[e]?t.push(n[e]):0!==n[e]&&{3:1,10:1,11:1}[e]&&t.push(n[e]=r(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))},(()=>{var e={1:0},t=[];o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^1[01]$/.test(t))e[t]=0;else{var d=new Promise(((r,d)=>{n=e[t]=[r,d]}));r.push(n[2]=d);var a=o.p+o.u(t),i=new Error;o.l(a,(r=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var d=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+d+": "+a+")",i.name="ChunkLoadError",i.type=d,i.request=a,n[1](i)}}),"chunk-"+t,t)}},o.F.j=t=>{if(!(o.o(e,t)&&void 0!==e[t]||/^1[01]$/.test(t))){e[t]=null;var r=document.createElement("link");o.nc&&r.setAttribute("nonce",o.nc),r.rel="prefetch",r.as="script",r.href=o.p+o.u(t),document.head.appendChild(r)}};var r=e=>{},n=(n,d)=>{for(var a,i,[l,s,c,u]=d,f=0,p=[];f<l.length;f++)i=l[f],o.o(e,i)&&e[i]&&p.push(e[i][0]),e[i]=0;for(a in s)o.o(s,a)&&(o.m[a]=s[a]);for(c&&c(o),n&&n(d);p.length;)p.shift()();return u&&t.push.apply(t,u),r()},d=self.webpackChunkslides=self.webpackChunkslides||[];function a(){for(var r,n=0;n<t.length;n++){for(var d=t[n],a=!0,i=1;i<d.length;i++){var l=d[i];0!==e[l]&&(a=!1)}a&&(t.splice(n--,1),r=o(o.s=d[0]))}return 0===t.length&&(o.x(),o.x=e=>{}),r}d.forEach(n.bind(null,0)),d.push=n.bind(null,d.push.bind(d));var i=o.x;o.x=()=>(o.x=i||(e=>{}),(r=a)())})(),o.x()})();