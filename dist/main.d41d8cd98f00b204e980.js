!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.r(t);var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.localStorage=window.localStorage,console.log("model")}var t,n,r;return t=e,(n=[{key:"getFromLocalStorage",value:function(){return this.links=this.localStorage.getItem("links")?this.localStorage.getItem("links").split(","):[],console.log("getFromLocalStorage"),this.links}},{key:"pushLink",value:function(e){var t=!0;return this.links.forEach(function(n){n==e&&(alert("Існує"),t=!1)}),t&&(this.links.unshift(e),this.localStorage.setItem("links",this.links.join())),console.log("pushLink"),this.links}}])&&o(t.prototype,n),r&&o(t,r),e}();function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.listLinks=document.querySelector(".list-links"),console.log("view")}var t,n,o;return t=e,(n=[{key:"compileHTML",value:function(e){var t=Handlebars.compile('{{#each links}}<a href="{{this}}">{{this}}</a></br>{{/each}}');this.listLinks.innerHTML=t({links:e}),console.log("compileHTML")}}])&&i(t.prototype,n),o&&i(t,o),e}();new function e(t,n){var o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.model=t,this.view=n,this.view.compileHTML(this.model.getFromLocalStorage()),this.btnSubmit=document.querySelector(".btn-submit"),(o=this).btnSubmit.addEventListener("click",function(){var e=document.querySelector(".input-value"),t=o.model.pushLink(e.value);o.view.compileHTML(t)}),console.log("controller")}(new r,new l)}]);