webpackJsonp([12],{

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(785)
__webpack_require__(765)

var Component = __webpack_require__(37)(
  /* script */
  __webpack_require__(716),
  /* template */
  __webpack_require__(833),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/august/Open/iview-admin/src/views/access/access.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] access.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b9390ff4", Component.options)
  } else {
    hotAPI.reload("data-v-b9390ff4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsCookie = __webpack_require__(46);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            accessCode: parseInt(_jsCookie2.default.get('access')),
            switchValue: parseInt(_jsCookie2.default.get('access')) === 1
        };
    },

    computed: {
        avatorPath: function avatorPath() {
            return localStorage.avatorImgPath;
        }
    },
    methods: {
        changeAccess: function changeAccess(res) {
            if (res) {
                this.accessCode = 1;
                _jsCookie2.default.set('access', 1);
            } else {
                this.accessCode = 0;
                _jsCookie2.default.set('access', 0);
            }
            this.$store.commit('updateMenulist');
        }
    }
};

/***/ }),

/***/ 765:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "access"
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('Card', [_c('p', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "android-contact"
    }
  }), _vm._v("\n                    当前用户\n                ")], 1), _vm._v(" "), _c('div', {
    staticClass: "access-user-con access-current-user-con"
  }, [_c('img', {
    attrs: {
      "src": _vm.avatorPath,
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("当前用户权限值:"), _c('b', [_vm._v(_vm._s(_vm.accessCode))])])])])], 1), _vm._v(" "), _c('Col', {
    staticClass: "padding-left-10",
    attrs: {
      "span": "16"
    }
  }, [_c('Card', [_c('p', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "android-contacts"
    }
  }), _vm._v("\n                    不同权限用户的不同菜单\n                ")], 1), _vm._v(" "), _c('div', {
    staticClass: "access-user-con access-change-access-con"
  }, [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('Row', {
    staticClass: "access-change-access-con-row",
    attrs: {
      "type": "flex",
      "justify": "center",
      "align": "middle"
    }
  }, [_c('i-switch', {
    attrs: {
      "value": _vm.switchValue,
      "size": "large"
    },
    on: {
      "on-change": _vm.changeAccess
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    staticClass: "padding-left-10",
    attrs: {
      "span": "16"
    }
  }, [_c('Row', {
    staticClass: "access-change-access-con-row",
    attrs: {
      "type": "flex",
      "justify": "center",
      "align": "middle"
    }
  }, [_c('p', [_vm._v("您可以通过左侧的开关来切换当前用户的权限值，然后您可以观察左侧菜单栏的变化，如果当前用户的权限值是"), _c('b', [_vm._v(" 0 ")]), _vm._v("，则左侧菜单栏会显示’权限测试页‘这一项('权限测试页'只用于测试，点击不会跳转)。")])])], 1)], 1)])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-b9390ff4", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=12.chunk.js.map