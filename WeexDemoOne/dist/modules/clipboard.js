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
/******/ 	return __webpack_require__(__webpack_require__.s = 217);
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

/***/ 11:
/***/ (function(module, exports) {

module.exports = {
  "tip": {
    "paddingLeft": "36",
    "paddingRight": "36",
    "paddingTop": "36",
    "paddingBottom": "36",
    "borderRadius": "10"
  },
  "tip-txt": {
    "fontSize": "28"
  },
  "tip-success": {
    "backgroundColor": "#dff0d8",
    "borderColor": "#d6e9c6"
  },
  "tip-txt-success": {
    "color": "#3c763d"
  },
  "tip-info": {
    "backgroundColor": "#d9edf7",
    "borderColor": "#bce8f1"
  },
  "tip-txt-info": {
    "color": "#31708f"
  },
  "tip-warning": {
    "backgroundColor": "#fcf8e3",
    "borderColor": "#faebcc"
  },
  "tip-txt-warning": {
    "color": "#8a6d3b"
  },
  "tip-danger": {
    "backgroundColor": "#f2dede",
    "borderColor": "#ebccd1"
  },
  "tip-txt-danger": {
    "color": "#a94442"
  }
}

/***/ }),

/***/ 12:
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
    type: { default: 'success' },
    value: { default: '' }
  }
};

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['tip', 'tip-' + _vm.type]
  }, [_c('text', {
    class: ['tip-txt', 'tip-txt-' + _vm.type]
  }, [_vm._v(_vm._s(_vm.value))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(11)
)

/* script */
__vue_exports__ = __webpack_require__(12)

/* template */
var __vue_template__ = __webpack_require__(13)
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
__vue_options__.__file = "/Users/swift/Documents/Weex/WeexDemoOne/src/vue/include/tip.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-9433aa60"
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

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(218)

/* template */
var __vue_template__ = __webpack_require__(219)
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
__vue_options__.__file = "/Users/swift/Documents/Weex/WeexDemoOne/src/vue/modules/clipboard.vue"
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

/***/ 218:
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

var modal = weex.requireModule('modal');
var clipboard = weex.requireModule('clipboard');
module.exports = {
  data: function data() {
    return {
      textToCopy: '',
      textFromPaste: '',
      tips: ''
    };
  },
  components: {
    panel: __webpack_require__(0),
    tip: __webpack_require__(14),
    button: __webpack_require__(10)
  },
  mounted: function mounted() {
    this.tips = "1. Just click COPY button. It will auto generate a string with random text, and copy to system clipboard. \n 2. do copy in another app, then come back and click PASTE button.";
  },
  methods: {
    doCopy: function doCopy() {
      modal.toast({ 'message': 'doCopy!', duration: 0.5 });
      textToCopy = "autoGenerateTextToCopy" + Math.random();
      clipboard.setString(textToCopy);
      this.textToCopy = textToCopy;
      this.tips = "copy done. Now system clipboard has string of '" + textToCopy + "', try PASTE button, or paste in another app.";
    },
    doPaste: function doPaste() {
      var me = this;
      modal.toast({ 'message': 'doPaste!', duration: 0.5 });
      clipboard.getString(function (ret) {
        console.log("paste result is " + JSON.stringify(ret));
        me.textFromPaste = ret.data;
        me.tips = "Paste done. Only support native(Android/iOS) NOW. according to security reason, paste in html5 is not supported.";
      });
    }
  }
};

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('panel', {
    attrs: {
      "title": "Clipboard",
      "type": "primary"
    }
  }, [_c('panel', {
    attrs: {
      "title": "Copy to clipboard5"
    }
  }, [_c('text', {
    staticStyle: {
      lineHeight: "40px",
      fontSize: "28px"
    }
  }, [_vm._v(_vm._s(_vm.textToCopy))]), _c('button', {
    attrs: {
      "type": "info",
      "size": "middle",
      "value": "Copy"
    },
    nativeOn: {
      "click": _vm.doCopy
    }
  })], 1), _c('panel', {
    attrs: {
      "title": "Paste from clipboard"
    }
  }, [_c('text', {
    staticStyle: {
      lineHeight: "40px",
      fontSize: "28px"
    }
  }, [_vm._v(_vm._s(_vm.textFromPaste))]), _c('button', {
    attrs: {
      "type": "info",
      "size": "middle",
      "value": "Paste"
    },
    nativeOn: {
      "click": _vm.doPaste
    }
  })], 1), _c('panel', {
    attrs: {
      "title": "Result"
    }
  }, [_c('tip', {
    staticStyle: {
      marginBottom: "20px"
    },
    attrs: {
      "value": _vm.tips
    }
  })], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

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