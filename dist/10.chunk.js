webpackJsonp([10],{

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(766)
__webpack_require__(763)

var Component = __webpack_require__(37)(
  /* script */
  __webpack_require__(731),
  /* template */
  __webpack_require__(804),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/august/Open/iview-admin/src/views/login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-052c8100", Component.options)
  } else {
    hotAPI.reload("data-v-052c8100", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 731:
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
            form: {
                userName: 'iview_admin',
                password: ''
            },
            rules: {
                userName: [{ required: true, message: '账号不能为空', trigger: 'blur' }],
                password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
            }
        };
    },

    methods: {
        handleSubmit: function handleSubmit() {
            var _this = this;

            this.$refs.loginForm.validate(function (valid) {
                if (valid) {
                    _jsCookie2.default.set('user', _this.form.userName);
                    _jsCookie2.default.set('password', _this.form.password);
                    _this.$store.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');
                    if (_this.form.userName === 'iview_admin') {
                        _jsCookie2.default.set('access', 0);
                    } else {
                        _jsCookie2.default.set('access', 1);
                    }
                    _this.$router.push({
                        name: 'home_index'
                    });
                }
            });
        }
    }
};

/***/ }),

/***/ 763:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 766:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login",
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
        _vm.handleSubmit($event)
      }
    }
  }, [_c('div', {
    staticClass: "login-con"
  }, [_c('Card', {
    attrs: {
      "bordered": false
    }
  }, [_c('p', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "log-in"
    }
  }), _vm._v("\n                欢迎登录\n            ")], 1), _vm._v(" "), _c('div', {
    staticClass: "form-con"
  }, [_c('Form', {
    ref: "loginForm",
    attrs: {
      "model": _vm.form,
      "rules": _vm.rules
    }
  }, [_c('FormItem', {
    attrs: {
      "prop": "userName"
    }
  }, [_c('Input', {
    model: {
      value: (_vm.form.userName),
      callback: function($$v) {
        _vm.$set(_vm.form, "userName", $$v)
      },
      expression: "form.userName"
    }
  }, [_c('span', {
    attrs: {
      "slot": "prepend"
    },
    slot: "prepend"
  }, [_c('Icon', {
    attrs: {
      "size": 16,
      "type": "person"
    }
  })], 1)])], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "prop": "password"
    }
  }, [_c('Input', {
    model: {
      value: (_vm.form.password),
      callback: function($$v) {
        _vm.$set(_vm.form, "password", $$v)
      },
      expression: "form.password"
    }
  }, [_c('span', {
    attrs: {
      "slot": "prepend"
    },
    slot: "prepend"
  }, [_c('Icon', {
    attrs: {
      "size": 14,
      "type": "locked"
    }
  })], 1)])], 1), _vm._v(" "), _c('FormItem', [_c('Button', {
    attrs: {
      "type": "primary",
      "long": ""
    },
    on: {
      "click": _vm.handleSubmit
    }
  }, [_vm._v("登录")])], 1)], 1), _vm._v(" "), _c('p', {
    staticClass: "login-tip"
  }, [_vm._v("输入任意用户名和密码即可")])], 1)])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-052c8100", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=10.chunk.js.map