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
/******/ 	return __webpack_require__(__webpack_require__.s = 125);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
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
__vue_options__.__file = "/Users/swift/Documents/Weex/WeexDemoOne/src/vue/include/panel.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-384cc479"
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

/***/ 1:
/***/ (function(module, exports) {

module.exports = {
  "panel": {
    "marginBottom": "20",
    "backgroundColor": "#ffffff",
    "borderColor": "#dddddd",
    "borderWidth": "1"
  },
  "panel-primary": {
    "borderColor": "rgb(40,96,144)"
  },
  "panel-success": {
    "borderColor": "rgb(76,174,76)"
  },
  "panel-info": {
    "borderColor": "rgb(70,184,218)"
  },
  "panel-warning": {
    "borderColor": "rgb(238,162,54)"
  },
  "panel-danger": {
    "borderColor": "rgb(212,63,58)"
  },
  "panel-header": {
    "backgroundColor": "#f5f5f5",
    "fontSize": "40",
    "color": "#333333"
  },
  "panel-header-primary": {
    "backgroundColor": "rgb(40,96,144)",
    "color": "#ffffff"
  },
  "panel-header-success": {
    "backgroundColor": "rgb(92,184,92)",
    "color": "#ffffff"
  },
  "panel-header-info": {
    "backgroundColor": "rgb(91,192,222)",
    "color": "#ffffff"
  },
  "panel-header-warning": {
    "backgroundColor": "rgb(240,173,78)",
    "color": "#ffffff"
  },
  "panel-header-danger": {
    "backgroundColor": "rgb(217,83,79)",
    "color": "#ffffff"
  },
  "panel-body": {
    "paddingLeft": "12",
    "paddingRight": "12",
    "paddingTop": "20",
    "paddingBottom": "20"
  }
}

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(126)

/* template */
var __vue_template__ = __webpack_require__(128)
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
__vue_options__.__file = "/Users/swift/Documents/Weex/WeexDemoOne/src/vue/components/marquee.vue"
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
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ 126:
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

module.exports = {
  data: function data() {
    return {
      marquee: {
        height: 30,
        duration: 1500,
        interval: 2000,
        list: [{ text: 'Introducing Bots on Messenger' }, { text: 'Capturing 3D 360-Stereo VR Video' }, { text: 'The Future of Video on Facebook' }, { text: 'Announcing Vue.js 2.0' }, { text: 'Not Your Average Virtual-DOM' }, { text: 'Templates, JSX, or Hyperscript?' }]
      }
    };
  },
  components: {
    panel: __webpack_require__(0),
    marquee: __webpack_require__(127)
  },
  methods: {
    marqueeChange: function marqueeChange(e) {
      console.log(e);
    }
  }
};

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(44)
)

/* script */
__vue_exports__ = __webpack_require__(45)

/* template */
var __vue_template__ = __webpack_require__(46)
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
__vue_options__.__file = "/Users/swift/Documents/Weex/WeexDemoOne/src/vue/include/marquee.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-02026057"
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

/***/ 128:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('panel', {
    attrs: {
      "title": "Marquee",
      "type": "primary"
    }
  }, [_c('marquee', {
    style: {
      width: 700,
      height: _vm.marquee.height * 2,
      backgroundColor: 'rgb(223, 240, 216)',
      borderRadius: 8,
      paddingLeft: 10,
      paddingRight: 10
    },
    attrs: {
      "step": _vm.marquee.height * 2,
      "count": _vm.marquee.list.length,
      "interval": _vm.marquee.interval,
      "duration": _vm.marquee.duration
    },
    on: {
      "change": _vm.marqueeChange
    }
  }, _vm._l((_vm.marquee.list), function(item, i) {
    return _c('div', {
      key: i,
      style: {
        height: _vm.marquee.height * _vm.marquee.length,
        paddingTop: _vm.marquee.height * 0.5,
        paddingBottom: _vm.marquee.height * 0.5,
        overflow: 'hidden'
      }
    }, [_c('text', {
      style: {
        height: _vm.marquee.height,
        color: 'rgb(60, 118, 61)',
        fontSize: 28
      }
    }, [_vm._v(_vm._s(item.text))])])
  }))])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 2:
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

module.exports = {
  props: {
    type: { default: 'default' },
    title: { default: '' },
    paddingBody: { default: 20 },
    paddingHead: { default: 20 },
    dataClass: { default: '' }, // FIXME transfer class
    border: { default: 0 }
  }
};

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['panel', 'panel-' + _vm.type],
    style: {
      borderWidth: _vm.border
    }
  }, [_c('text', {
    class: ['panel-header', 'panel-header-' + _vm.type],
    style: {
      paddingTop: _vm.paddingHead,
      paddingBottom: _vm.paddingHead,
      paddingLeft: _vm.paddingHead * 1.5,
      paddingRight: _vm.paddingHead * 1.5
    }
  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
    class: ['panel-body', 'panel-body-' + _vm.type],
    style: {
      paddingTop: _vm.paddingBody,
      paddingBottom: _vm.paddingBody,
      paddingLeft: _vm.paddingBody * 1.5,
      paddingRight: _vm.paddingBody * 1.5
    }
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = {
  "wrap": {
    "overflow": "hidden",
    "position": "relative"
  },
  "anim": {
    "flexDirection": "column",
    "position": "absolute",
    "transform": "translateY(0) translateZ(0)"
  }
}

/***/ }),

/***/ 45:
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

var _animation = weex.requireModule('animation');

module.exports = {
  props: {
    step: { default: 0 },
    count: { default: 0 },
    index: { default: 1 },
    duration: { default: 0 },
    interval: { default: 0 },
    outofview: { default: false }
  },
  created: function created() {
    if (this.interval > 0 && this.step > 0 && this.duration > 0) {
      this.run();
    }
  },
  methods: {
    run: function run() {
      if (this.outofview) {
        setTimeout(this.run.bind(this), this.interval);
      } else {
        setTimeout(function () {
          this.animation(this.run.bind(this));
        }.bind(this), this.interval);
      }
    },
    animation: function animation(cb) {
      var offset = -this.step * this.index;
      _animation.transition(this.$refs.anim, {
        styles: {
          transform: 'translateY(' + offset + 'px) translateZ(0)'
        },
        timingFunction: 'ease',
        duration: this.duration
      }, function () {
        this.index = (this.index + 1) % this.count;
        this.$emit('change', {
          index: this.index,
          count: this.count
        });
        cb && cb();
      }.bind(this));
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

/***/ 46:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrap"],
    on: {
      "appear": _vm.appeared,
      "disappear": _vm.disappeared
    }
  }, [_c('div', {
    ref: "anim",
    staticClass: ["anim"]
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });