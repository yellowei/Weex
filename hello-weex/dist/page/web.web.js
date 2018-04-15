// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=62)}({0:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},1:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(a(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(a(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:i}}}}function o(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function a(e){var t,n,r=document.querySelector("style["+x+'~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(b){var a=p++;r=f||(f=o()),t=i.bind(null,r,a,!1),n=i.bind(null,r,a,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function i(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),g.ssrId&&e.setAttribute(x,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(6),l={},u=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,h=function(){},g=null,x="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,o){v=n,g=o||{};var a=d(e,t);return r(a),function(t){for(var n=[],o=0;o<a.length;o++){var i=a[o],s=l[i.id];s.refs--,n.push(s)}t?(a=d(e,t),r(a)):a=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete l[s.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},129:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"toolbar"},[n("div",{staticClass:"left"},[n("text",{staticClass:"btnTxt iconfont",on:{click:e.back}},[e._v("")]),e._v(" "),n("text",{staticClass:"btnTxt iconfont",on:{click:e.close}},[e._v("")])]),e._v(" "),n("text",{staticClass:"tlt"}),e._v(" "),n("div",{staticClass:"right"},[n("text",{staticClass:"btnTxt iconfont",on:{click:e.reload}},[e._v("")])])]),e._v(" "),n("div",{staticClass:"webview-box"},[n("web",{ref:"wv",staticClass:"webview",attrs:{src:e.url},on:{error:e.error}})],1)])},o=[];r._withStripped=!0;var a={render:r,staticRenderFns:o};t.a=a},159:function(e,t,n){var r=n(75);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("5afe7bc6",r,!1,{})},2:function(e,t){e.exports=function(e,t,n,r,o,a){var i,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(i=e,s=e.default);var d="function"==typeof s?s.options:s;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),o&&(d._scopeId=o);var l;if(a?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=l):r&&(l=r),l){var u=d.functional,f=u?d.render:d.beforeCreate;u?(d._injectStyles=l,d.render=function(e,t){return l.call(t),f(e,t)}):d.beforeCreate=f?[].concat(f,l):[l]}return{esModule:i,exports:s,options:d}}},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={initIconFont:function(){weex.requireModule("dom").addRule("fontFace",{fontFamily:"iconfont",src:"url('http://at.alicdn.com/t/font_426094_wezclb30gujtt9.ttf')"})},setBundleUrl:function(e,t){var n=e,r="",o="",a=void 0,i=n.indexOf("your_current_IP")>=0||n.indexOf("file://assets/")>=0,s=n.indexOf("file:///")>=0&&n.indexOf("WeexDemo.app")>0;if(i)a="file://assets/dist";else if(s)a=n.substring(0,n.lastIndexOf("/")+1);else{var c=/\/\/([^\/]+?)\//.exec(n),d=/\/\/[^\/]+\/([^\/]+)\//.exec(n);c&&c.length>=2&&(r=c[1]),d&&d.length>=2&&(o=d[1]),a="http://"+r+"/"}return("undefined"==typeof navigator||"Mozilla"!==navigator.appCodeName&&"Gecko"!==navigator.product?a+(o?o+"/":""):"web"===o||"dist"===o?"./index.html?page=/dist/":"./index.html?page=")+t},getUrlSearch:function(e,t){var n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),r=e.slice(e.indexOf("?")+1).match(n);if(null!=r)try{return decodeURIComponent(r[2])}catch(e){return null}return null}};t.default=r},46:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=function(e){return e&&e.__esModule?e:{default:e}}(r),a=weex.requireModule("navigator"),i=weex.requireModule("webview"),s=weex.requireModule("modal");t.default={components:{},data:function(){return{url0:"http://m.you.163.com"}},created:function(e){o.default.initIconFont(),this.url=o.default.getUrlSearch(weex.config.bundleUrl,"weburl")||this.url0,console.log("webPageURL",this.url)},methods:{back:function(e){s.toast({message:"back"}),i.goBack(this.$refs.wv)},close:function(e){a.pop({animated:"false"})},reload:function(e){s.toast({message:"reload"}),i.reload(this.$refs.wv)},error:function(e){console.log("error",e)}}}},55:function(e,t,n){"use strict";function r(e){c||n(159)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(46),a=n.n(o);for(var i in o)["default","default"].indexOf(i)<0&&function(e){n.d(t,e,function(){return o[e]})}(i);var s=n(129),c=!1,d=n(2),l=r,u=d(a.a,s.a,!1,l,"data-v-54cd4aa6",null);u.options.__file="src/page/web.vue",t.default=u.exports},6:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=a[0],s=a[1],c=a[2],d=a[3],l={id:e+":"+o,css:s,media:c,sourceMap:d};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}},62:function(e,t,n){"use strict";var r=n(55);r.el="#root",new Vue(r)},75:function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"\n.wrapper[data-v-54cd4aa6]{\n    position: absolute;\n    left: 0;\n    right:0;\n    bottom: 0;\n    top:0;\n}\n.iconfont[data-v-54cd4aa6] {\n    font-family:iconfont;\n}\n.toolbar[data-v-54cd4aa6]{\n    position: fixed;\n    top: 0;\n    left: 0;right: 0;\n    height: 114px;\n    padding-top: 44px;\n    background-color: #fafafa;\n    opacity: .99;\n    z-index: 101;\n    flex-wrap: nowrap;\n    flex-direction: row;\n    justify-content: space-around;\n    border-bottom-width: 1px;\n    border-bottom-color: #d9d9d9;\n}\n.tlt[data-v-54cd4aa6]{\n    flex: 1;\n    font-size: 36px;\n    padding-top: 10px;\n    color:#333;\n    text-align: center;\n}\n.left[data-v-54cd4aa6],.right[data-v-54cd4aa6]{\n    height: 68px;\n    width: 150px;\n    padding-top:10px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n}\n.left[data-v-54cd4aa6]{\n    justify-content: flex-start;\n    padding-left: 20px;\n}\n.right[data-v-54cd4aa6]{\n    justify-content: flex-end;\n    padding-right: 20px;\n}\n.btnTxt[data-v-54cd4aa6]{\n    font-size: 40px;\n    width: 70px;\n    color:#666;\n\n    text-align: center;\n}\n.webview-box[data-v-54cd4aa6] {\n    position: absolute;\n    top: 114px ;\n    left: 0;\n    right:0;\n    bottom: 0;\n}\n.webview[data-v-54cd4aa6]{\n    position: absolute;\n    top: 0 ;\n    left: 0;\n    right:0;\n    bottom: 0;\n}\n\n",""])}});