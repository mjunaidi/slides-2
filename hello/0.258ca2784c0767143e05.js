webpackJsonp([0],{94:function(a,b,c){"use strict";function d(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(b,"__esModule",{value:!0});var h=c(0),j=c.n(h),i=c(95),k=c.n(i),l=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),m=function(a){function b(a){e(this,b);var c=f(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));c.slides=a.slides;return c.slides.shift(),c.slides=[].concat(d(c.slides),[{meta:{note:"",className:"",background:"default"},content:"<h2>finish</h2>"}]),c}return g(b,a),l(b,[{key:"componentWillReceiveProps",value:function(a){a.loadedBespoke&&!this.loaded&&(window.slide.bespoke.on("activate",function(a){localStorage.setItem("page",JSON.stringify({date:Date.now(),page:a.index}))}),this.loaded=!0)}},{key:"render",value:function(){return j.a.createElement("div",{className:"host-container"},j.a.createElement("div",{className:"host-note"},window.slide&&0<=window.slide.bespoke.slide()-1?j.a.createElement("pre",null,this.slides[window.slide.bespoke.slide()-1].meta.note):null),j.a.createElement("div",{className:"host-info"},j.a.createElement("h2",null,"next"),j.a.createElement("article",{className:"host-next-slide"},this.slides.map(function(a,b){return j.a.createElement("section",{key:b,className:a.meta.className,"data-bespoke-backdrop":a.meta.background,dangerouslySetInnerHTML:{__html:a.context}})}))))}}]),b}(j.a.Component);b["default"]=m},95:function(a,b,c){var d=c(96);"string"==typeof d&&(d=[[a.i,d,""]]);var e,f={hmr:!0};f.transform=e;c(2)(d,f);d.locals&&(a.exports=d.locals),!1},96:function(a,b,c){b=a.exports=c(1)(void 0),b.push([a.i,".host-container {\n  background: #222;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 20px;\n}\n\n.host-note {\n  width: 60%\n}\n\n.host-note pre {\n  color: #f5f5f5;\n  font-size: 19.2px;\n  font-size: 1.2rem;\n  margin: 15px;\n  white-space: pre-wrap;\n}\n\n.host-info {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #3498db;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: calc(100vh - 40px);\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  width: 40%\n}\n\n.host-info .host-next-slide {\n  height: 180px;\n  position: relative;\n  width: 320px;\n}\n",""])}});