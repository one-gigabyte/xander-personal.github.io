webpackJsonp([18],{

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(768)

var Component = __webpack_require__(37)(
  /* script */
  __webpack_require__(719),
  /* template */
  __webpack_require__(806),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/august/Open/iview-admin/src/views/form/article-publish/preview.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] preview.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0a9ed0df", Component.options)
  } else {
    hotAPI.reload("data-v-0a9ed0df", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            articleTitle: '',
            tagsList: '',
            classificationSelected: [],
            content: '',
            publishTime: ''
        };
    },
    mounted: function mounted() {
        this.articleTitle = localStorage.articleTitle;
        this.tagsList = localStorage.tagsList ? JSON.parse(localStorage.tagsList) : [];
        this.classificationSelected = localStorage.classificationSelected ? JSON.parse(localStorage.classificationSelected) : [];
        this.content = localStorage.content;
        this.publishTime = localStorage.publishTime;
    }
};

/***/ }),

/***/ 768:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 806:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "preview-main"
  }, [_c('div', {
    staticClass: "preview-header"
  }, [_c('Menu', {
    attrs: {
      "mode": "horizontal",
      "theme": "dark",
      "active-name": "1"
    }
  }, [_c('div', {
    staticClass: "preview-header-nav"
  }, [_c('MenuItem', {
    attrs: {
      "name": "1"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-navigate"
    }
  }), _vm._v("\n                    导航一\n                ")], 1), _vm._v(" "), _c('MenuItem', {
    attrs: {
      "name": "2"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-keypad"
    }
  }), _vm._v("\n                    导航二\n                ")], 1), _vm._v(" "), _c('MenuItem', {
    attrs: {
      "name": "3"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-analytics"
    }
  }), _vm._v("\n                    导航三\n                ")], 1), _vm._v(" "), _c('MenuItem', {
    attrs: {
      "name": "4"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-paper"
    }
  }), _vm._v("\n                    导航四\n                ")], 1)], 1)])], 1), _vm._v(" "), _c('Row', {
    staticClass: "margin-top-20"
  }, [_c('Col', {
    attrs: {
      "span": "12",
      "offset": "5"
    }
  }, [_c('div', [_c('Card', [_c('h1', [_vm._v(_vm._s(_vm.articleTitle))]), _vm._v(" "), _c('p', {
    staticClass: "preview-publish-time"
  }, [_c('Icon', {
    attrs: {
      "type": "android-alarm-clock"
    }
  }), _vm._v(" 发布时间：" + _vm._s(_vm.publishTime))], 1), _vm._v(" "), _c('div', {
    staticClass: "preview-tags-con"
  }, [_c('b', {
    staticClass: "preview-tip"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-pricetags-outline"
    }
  }), _vm._v(" 标签：")], 1), _vm._l((_vm.tagsList), function(item) {
    return _c('Tag', {
      key: item,
      attrs: {
        "type": "border",
        "color": "blue"
      }
    }, [_vm._v(_vm._s(item))])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "preview-content-con",
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "preview-classifition-con"
  }, [_c('b', {
    staticClass: "preview-tip"
  }, [_c('Icon', {
    attrs: {
      "type": "navicon-round"
    }
  }), _vm._v(" 目录：")], 1), _vm._v(" "), _vm._l((_vm.classificationSelected), function(item) {
    return _c('a', {
      key: item,
      staticClass: "preview-classifition-item"
    }, [_c('Icon', {
      attrs: {
        "type": "android-folder-open"
      }
    }), _vm._v("\n                            " + _vm._s(item) + "\n                        ")], 1)
  })], 2)])], 1)]), _vm._v(" "), _c('Col', {
    staticClass: "padding-left-10",
    attrs: {
      "span": "4"
    }
  }, [_c('div', [_c('Card', [_c('p', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "paper-airplane"
    }
  }), _vm._v("\n                        热门文章\n                    ")], 1), _vm._v(" "), _c('div', {
    staticClass: "preview-placeholderCon"
  }, [_c('div', {
    staticClass: "preview-placeholder"
  }), _vm._v(" "), _c('div', {
    staticClass: "preview-placeholder"
  }), _vm._v(" "), _c('div', {
    staticClass: "preview-placeholder"
  }), _vm._v(" "), _c('div', {
    staticClass: "preview-placeholder"
  })])])], 1), _vm._v(" "), _c('div', {
    staticClass: "margin-top-10"
  }, [_c('Card', [_c('p', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "paper-airplane"
    }
  }), _vm._v("\n                        最新文章\n                    ")], 1), _vm._v(" "), _c('div', {
    staticClass: "preview-placeholderCon"
  }, [_c('div', {
    staticClass: "preview-placeholder"
  }), _vm._v(" "), _c('div', {
    staticClass: "preview-placeholder"
  }), _vm._v(" "), _c('div', {
    staticClass: "preview-placeholder"
  }), _vm._v(" "), _c('div', {
    staticClass: "preview-placeholder"
  })])])], 1)])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0a9ed0df", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=18.chunk.js.map