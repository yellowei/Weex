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
/******/ 	return __webpack_require__(__webpack_require__.s = 266);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
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

module.exports = {
  components: {
    banner: __webpack_require__(4)
  },
  props: ['ds', 'width', 'height', 'space', 'direction']
};

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.direction === 'row') ? _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, _vm._l((_vm.ds), function(item, i) {
    return _c('div', {
      key: i,
      style: {
        width: _vm.width,
        height: _vm.height,
        marginLeft: (i % _vm.ds.length ? _vm.space : 0)
      }
    }, [_c('banner', {
      attrs: {
        "width": _vm.width,
        "height": _vm.height,
        "src": item.img,
        "href": item.url
      }
    })], 1)
  })) : _vm._e(), (_vm.direction === 'column') ? _c('div', _vm._l((_vm.ds), function(item, i) {
    return _c('div', {
      key: i,
      style: {
        width: _vm.width,
        height: _vm.height,
        marginTop: (i % _vm.ds.length ? _vm.space : 0)
      }
    }, [_c('banner', {
      attrs: {
        "width": _vm.width,
        "height": _vm.height,
        "src": item.img,
        "href": item.url
      }
    })], 1)
  })) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(16)
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
__vue_options__.__file = "/Users/swift/Documents/Weex/WeexDemoOne/src/vue/showcase/include/banners.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(77)
)

/* script */
__vue_exports__ = __webpack_require__(78)

/* template */
var __vue_template__ = __webpack_require__(80)
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
__vue_options__.__file = "/Users/swift/Documents/Weex/WeexDemoOne/src/vue/showcase/include/headlines.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-00b0622a"
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

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//

var modal = weex.requireModule('modal');
module.exports = {
  props: ['text', 'href'],
  methods: {
    clickHandler: function clickHandler() {
      modal.toast({
        message: 'click',
        duration: 1
      });
    }
  }
};

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(5)

/* template */
var __vue_template__ = __webpack_require__(6)
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
__vue_options__.__file = "/Users/swift/Documents/Weex/WeexDemoOne/src/vue/showcase/include/banner.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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

/***/ 40:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    on: {
      "click": _vm.clickHandler
    }
  }, [_vm._v(_vm._s(_vm.text))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//

var modal = weex.requireModule('modal');
module.exports = {
  props: ['width', 'height', 'src', 'href'],
  data: function data() {
    return {
      quality: 'normal'
    };
  },
  methods: {
    clickHandler: function clickHandler() {
      modal.toast({
        message: 'click',
        duration: 1
      });
    }
  }
};

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('image', {
    style: {
      width: _vm.width,
      height: _vm.height
    },
    attrs: {
      "src": _vm.src,
      "imageQuality": _vm.quality
    },
    on: {
      "click": _vm.clickHandler
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

module.exports = {
  "banner": {
    "width": 750,
    "height": 782
  },
  "share-container": {
    "position": "absolute",
    "right": 100,
    "top": 15,
    "zIndex": 100,
    "fontSize": 20,
    "color": "#ffffff",
    "backgroundColor": "#000000",
    "borderRadius": 17,
    "width": 110,
    "height": 35,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "rule-container": {
    "position": "absolute",
    "right": 22,
    "top": 15,
    "zIndex": 100,
    "fontSize": 20,
    "color": "#ffffff",
    "backgroundColor": "#000000",
    "borderRadius": 17,
    "width": 70,
    "height": 35,
    "justifyContent": "center"
  },
  "announce": {
    "backgroundColor": "#f5f3f4",
    "width": 716,
    "height": 286,
    "position": "absolute",
    "bottom": 17,
    "left": 17,
    "borderRadius": 5
  },
  "announce-hd": {
    "width": 700,
    "height": 90,
    "marginTop": 8,
    "marginBottom": 8,
    "marginLeft": 5,
    "marginRight": 5
  }
}

/***/ }),

/***/ 78:
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

module.exports = {
  components: {
    link: __webpack_require__(79),
    banners: __webpack_require__(17)
  },
  props: {
    ds: {
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      NUMBER_233: 233,
      NUMBER_172: 172,
      NUMBER_3: 3
    };
  }
};

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(39)

/* template */
var __vue_template__ = __webpack_require__(40)
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
__vue_options__.__file = "/Users/swift/Documents/Weex/WeexDemoOne/src/vue/showcase/include/link.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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

/***/ 80:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('image', {
    staticClass: ["banner"],
    attrs: {
      "src": _vm.ds.topBanner
    }
  }), _c('div', {
    staticClass: ["rule-container"]
  }, [_c('link', {
    staticStyle: {
      fontSize: "22px",
      color: "#ffffff",
      textAlign: "center"
    },
    attrs: {
      "text": "帮助",
      "href": _vm.ds.ruleLink
    }
  })]), _c('div', {
    staticClass: ["announce"]
  }, [_c('image', {
    staticClass: ["announce-hd"],
    attrs: {
      "src": _vm.ds.announceHdBanner
    }
  }), _c('banners', {
    staticStyle: {
      marginLeft: "6",
      marginRight: "6"
    },
    attrs: {
      "ds": _vm.ds.bannerItems,
      "direction": "row",
      "width": _vm.NUMBER_233,
      "height": _vm.NUMBER_172,
      "space": _vm.NUMBER_3
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });