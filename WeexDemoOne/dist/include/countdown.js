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
/******/ 	return __webpack_require__(__webpack_require__.s = 177);
/******/ })
/************************************************************************/
/******/ ({

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(41)
)

/* script */
__vue_exports__ = __webpack_require__(42)

/* template */
var __vue_template__ = __webpack_require__(43)
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
__vue_options__.__file = "/Users/swift/Documents/Weex/WeexDemoOne/src/vue/include/countdown.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-182ffba6"
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

/***/ 41:
/***/ (function(module, exports) {

module.exports = {
  "wrap": {
    "overflow": "hidden"
  }
}

/***/ }),

/***/ 42:
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

function format(str) {
  if (str.length >= 2) {
    return str;
  } else {
    return '0' + str;
  }
}

function getTime(target, now) {
  var remain = parseInt((target - now) / 1000);
  var D = String(parseInt(remain / 86400));
  var DD = format(D);
  var h = String(parseInt((remain - parseInt(D) * 86400) / 3600));
  var hh = format(h);
  var H = String(parseInt(remain / 3600));
  var HH = format(H);
  var m = String(parseInt((remain - parseInt(H) * 3600) / 60));
  var mm = format(m);
  var M = String(parseInt(remain / 60));
  var MM = format(M);
  var s = String(remain - parseInt(M) * 60);
  var ss = format(s);
  var S = String(remain);
  var SS = format(S);
  return {
    D: D, DD: DD,
    h: h, hh: hh,
    H: H, HH: HH,
    m: m, mm: mm,
    M: M, MM: MM,
    s: s, ss: ss,
    S: S, SS: SS
  };
}

module.exports = {
  props: {
    remain: {
      default: 0
    }
  },
  data: function data() {
    return {
      now: 0,
      target: 0,
      outofview: false
    };
  },
  created: function created() {
    this.now = Date.now();
    this.target = this.now + this.remain * 1000;
    if (this.remain > 0) {
      this.run();
    }
  },
  methods: {
    run: function run() {
      if (!this.outofview) {
        this.now = Date.now();
      }
      var time = getTime(this.target, this.now);
      if (this.target >= this.now) {
        this.$emit('tick', time);
      } else {
        this.$emit('alarm', time);
        return;
      }
      setTimeout(this.run.bind(this), 1000);
    },
    appeared: function appeared() {
      this.outofview = false;
    },
    disappeared: function disappeared() {
      this.outofview = true;
    }
  }
};

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      overflow: "hidden",
      flexDirection: "row"
    },
    on: {
      "appear": _vm.appeared,
      "disappear": _vm.disappeared
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });