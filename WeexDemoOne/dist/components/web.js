// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 166);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(7)
)

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(9)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/swift/Documents/Weex/WeexDemoOne/src/vue/include/button.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c82efae6"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(167)
)

/* script */
__vue_exports__ = __webpack_require__(168)

/* template */
var __vue_template__ = __webpack_require__(169)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/swift/Documents/Weex/WeexDemoOne/src/vue/components/web.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7737e822"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "width": 750,
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "content": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "marginTop": 0,
    "marginBottom": 70
  },
  "toolbar": {
    "flexDirection": "row",
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "right": 0,
    "height": 70
  }
}

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var webview = weex.requireModule('webview');
module.exports = {
  components: {
    button: __webpack_require__(10)
  },
  methods: {
    goback: function goback() {
      var el = this.$refs.webview;
      webview.goBack(el);
    },
    goforward: function goforward() {
      var el = this.$refs.webview;
      webview.goForward(el);
    },
    refresh: function refresh() {
      var el = this.$refs.webview;
      webview.reload(el);
    },
    startload: function startload(e) {},
    finishload: function finishload(e) {},
    failload: function failload(e) {}
  }
};

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["toolbar"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('button', {
    staticStyle: {
      marginLeft: "30px",
      width: "210px",
      marginTop: "5px",
      marginBottom: "5px"
    },
    attrs: {
      "type": "primary",
      "size": "small",
      "value": "back"
    },
    nativeOn: {
      "click": _vm.goback
    }
  }), _c('button', {
    staticStyle: {
      marginLeft: "30px",
      width: "210px",
      marginTop: "5px",
      marginBottom: "5px"
    },
    attrs: {
      "type": "primary",
      "size": "small",
      "value": "forward"
    },
    nativeOn: {
      "click": _vm.goforward
    }
  }), _c('button', {
    staticStyle: {
      marginLeft: "30px",
      width: "210px",
      marginTop: "5px",
      marginBottom: "5px"
    },
    attrs: {
      "type": "primary",
      "size": "small",
      "value": "refresh"
    },
    nativeOn: {
      "click": _vm.refresh
    }
  })], 1), _c('web', {
    ref: "webview",
    staticClass: ["content"],
    attrs: {
      "src": "http://alibaba.github.io/weex/index.html"
    },
    on: {
      "pagestart": _vm.startload,
      "pagefinish": _vm.finishload,
      "error": _vm.failload
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = {
  "btn": {
    "marginBottom": 0,
    "alignItems": "center",
    "justifyContent": "center",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#333333"
  },
  "btn-default": {
    "color": "rgb(51,51,51)"
  },
  "btn-primary": {
    "backgroundColor": "rgb(40,96,144)",
    "borderColor": "rgb(40,96,144)"
  },
  "btn-success": {
    "backgroundColor": "rgb(92,184,92)",
    "borderColor": "rgb(76,174,76)"
  },
  "btn-info": {
    "backgroundColor": "rgb(91,192,222)",
    "borderColor": "rgb(70,184,218)"
  },
  "btn-warning": {
    "backgroundColor": "rgb(240,173,78)",
    "borderColor": "rgb(238,162,54)"
  },
  "btn-danger": {
    "backgroundColor": "rgb(217,83,79)",
    "borderColor": "rgb(212,63,58)"
  },
  "btn-link": {
    "borderColor": "rgba(0,0,0,0)",
    "borderRadius": 0
  },
  "btn-txt-default": {
    "color": "rgb(51,51,51)"
  },
  "btn-txt-primary": {
    "color": "rgb(255,255,255)"
  },
  "btn-txt-success": {
    "color": "rgb(255,255,255)"
  },
  "btn-txt-info": {
    "color": "rgb(255,255,255)"
  },
  "btn-txt-warning": {
    "color": "rgb(255,255,255)"
  },
  "btn-txt-danger": {
    "color": "rgb(255,255,255)"
  },
  "btn-txt-link": {
    "color": "rgb(51,122,183)"
  },
  "btn-sz-large": {
    "width": "300",
    "height": "100",
    "paddingTop": "25",
    "paddingBottom": "25",
    "paddingLeft": "40",
    "paddingRight": "40",
    "borderRadius": "15"
  },
  "btn-sz-middle": {
    "width": "240",
    "height": "80",
    "paddingTop": "15",
    "paddingBottom": "15",
    "paddingLeft": "30",
    "paddingRight": "30",
    "borderRadius": "10"
  },
  "btn-sz-small": {
    "width": "170",
    "height": "60",
    "paddingTop": "12",
    "paddingBottom": "12",
    "paddingLeft": "25",
    "paddingRight": "25",
    "borderRadius": "7"
  },
  "btn-txt-sz-large": {
    "fontSize": "45"
  },
  "btn-txt-sz-middle": {
    "fontSize": "35"
  },
  "btn-txt-sz-small": {
    "fontSize": "30"
  }
}

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//

module.exports = {
  props: {
    type: { default: 'default' },
    size: { default: 'large' },
    value: { default: '' }
  }
};

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['btn', 'btn-' + _vm.type, 'btn-sz-' + _vm.size]
  }, [_c('text', {
    class: ['btn-txt', 'btn-txt-' + _vm.type, 'btn-txt-sz-' + _vm.size]
  }, [_vm._v(_vm._s(_vm.value))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });