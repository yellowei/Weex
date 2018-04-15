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
/******/ 	return __webpack_require__(__webpack_require__.s = 265);
/******/ })
/************************************************************************/
/******/ ({

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(74)
)

/* script */
__vue_exports__ = __webpack_require__(75)

/* template */
var __vue_template__ = __webpack_require__(76)
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
__vue_options__.__file = "/Users/swift/Documents/Weex/WeexDemoOne/src/vue/showcase/include/goods.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7b5aca61"
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

/***/ 74:
/***/ (function(module, exports) {

module.exports = {
  "title": {
    "width": 750,
    "height": 100
  },
  "slider": {
    "height": 652
  },
  "pannel": {
    "width": 750,
    "height": 592,
    "flexDirection": "row"
  },
  "middle-col": {
    "marginLeft": 4,
    "marginRight": 4,
    "width": 240,
    "height": 588
  }
}

/***/ }),

/***/ 75:
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

module.exports = {
  components: {
    banner: __webpack_require__(4)
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
      NUMBER_251: 251,
      NUMBER_240: 240,
      NUMBER_292: 292,
      NUMBER_588: 588
    };
  }
};

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (!_vm.ds.isHide) ? _c('div', [(_vm.ds.floorTitle) ? _c('image', {
    staticClass: ["title"],
    attrs: {
      "src": _vm.ds.floorTitle
    }
  }) : _vm._e(), _c('slider', {
    staticClass: ["slider"],
    attrs: {
      "showIndicators": "true",
      "autoPlay": "true",
      "interval": "3000"
    }
  }, [_vm._l((_vm.ds.bannerItems), function(item, i) {
    return _c('div', {
      key: i,
      staticClass: ["pannel"]
    }, [_c('div', [_c('banner', {
      staticStyle: {
        marginBottom: "4"
      },
      attrs: {
        "width": _vm.NUMBER_251,
        "height": _vm.NUMBER_292,
        "src": item.img1,
        "href": item.url1
      }
    }), _c('banner', {
      attrs: {
        "width": _vm.NUMBER_251,
        "height": _vm.NUMBER_292,
        "src": item.img2,
        "href": item.url2
      }
    })], 1), _c('div', {
      staticClass: ["middle-col"]
    }, [_c('banner', {
      attrs: {
        "width": _vm.NUMBER_240,
        "height": _vm.NUMBER_588,
        "src": item.img3,
        "href": item.url3
      }
    })], 1), _c('div', [_c('banner', {
      staticStyle: {
        marginBottom: "4"
      },
      attrs: {
        "width": _vm.NUMBER_251,
        "height": _vm.NUMBER_292,
        "src": item.img4,
        "href": item.url4
      }
    }), _c('banner', {
      attrs: {
        "width": _vm.NUMBER_251,
        "height": _vm.NUMBER_292,
        "src": item.img5,
        "href": item.url5
      }
    })], 1)])
  }), _c('indicator', {
    staticStyle: {
      position: "absolute",
      width: "714",
      height: "200",
      left: "10",
      bottom: "-80",
      itemSize: "20",
      itemColor: "#999999",
      itemSelectedColor: "#000000"
    }
  })], 2)]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });