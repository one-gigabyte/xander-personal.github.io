webpackJsonp([15],{

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(783)

var Component = __webpack_require__(37)(
  /* script */
  __webpack_require__(738),
  /* template */
  __webpack_require__(829),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/august/Open/iview-admin/src/views/my_components/file-upload/file-upload.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] file-upload.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59272b34", Component.options)
  } else {
    hotAPI.reload("data-v-59272b34", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            defaultList: [{
                'name': 'a42bdcc1178e62b4694c830f028db5c0',
                'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
            }, {
                'name': 'bc7521e033abdd1e92222d733590f104',
                'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
            }],
            imgName: '',
            visible: false,
            uploadList: []
        };
    },

    methods: {
        handleFormatError: function handleFormatError(file) {
            this.$Notice.warning({
                title: '文件格式不正确',
                desc: '文件 ' + file.name + ' 格式不正确，请选择图片文件。'
            });
        },
        handleBeforeUpload: function handleBeforeUpload(file) {
            this.$Notice.warning({
                title: '文件准备上传',
                desc: '文件 ' + file.name + ' 准备上传。'
            });
        },
        handleProgress: function handleProgress(event, file) {
            this.$Notice.info({
                title: '文件正在上传',
                desc: '文件 ' + file.name + ' 正在上传。'
            });
        },
        handleSuccess: function handleSuccess(evnet, file) {
            this.$Notice.success({
                title: '文件上传成功',
                desc: '文件 ' + file.name + ' 上传成功。'
            });
        },
        handleError: function handleError(event, file) {
            this.$Notice.error({
                title: '文件上传成功',
                desc: '文件 ' + file.name + ' 上传失败。'
            });
        },
        handleView: function handleView(name) {
            this.imgName = name;
            this.visible = true;
        },
        handleRemove: function handleRemove(file) {
            var fileList = this.$refs.upload.fileList;
            this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
        },
        handleSuccess2: function handleSuccess2(res, file) {
            file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
            file.name = '7eb99afb9d5f317c912f08b5212fd69a';
        },
        handleFormatError2: function handleFormatError2(file) {
            this.$Notice.warning({
                title: '文件格式不正确',
                desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
            });
        },
        handleMaxSize: function handleMaxSize(file) {
            this.$Notice.warning({
                title: '超出文件大小限制',
                desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
            });
        },
        handleBeforeUpload2: function handleBeforeUpload2() {
            var check = this.uploadList.length < 5;
            if (!check) {
                this.$Notice.warning({
                    title: '最多只能上传 5 张图片。'
                });
            }
            return check;
        }
    },
    mounted: function mounted() {
        this.uploadList = this.$refs.upload.fileList;
    }
};

/***/ }),

/***/ 783:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Row', [_c('Col', {
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
      "type": "ios-cloud-upload-outline"
    }
  }), _vm._v("\n                    基本上传功能\n                ")], 1), _vm._v(" "), _c('div', {
    staticClass: "height-120px"
  }, [_c('Row', {
    staticClass: "height-100",
    attrs: {
      "type": "flex",
      "justify": "center",
      "align": "middle"
    }
  }, [_c('Upload', {
    attrs: {
      "action": "//jsonplaceholder.typicode.com/posts/"
    }
  }, [_c('Button', {
    attrs: {
      "type": "ghost",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("上传文件")])], 1)], 1)], 1)])], 1), _vm._v(" "), _c('Col', {
    staticClass: "padding-left-10",
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
      "type": "ios-copy-outline"
    }
  }), _vm._v("\n                    可多选的上传\n                ")], 1), _vm._v(" "), _c('div', {
    staticClass: "height-120px"
  }, [_c('Row', {
    staticClass: "height-100",
    attrs: {
      "type": "flex",
      "justify": "center",
      "align": "middle"
    }
  }, [_c('Upload', {
    attrs: {
      "multiple": "",
      "action": "//jsonplaceholder.typicode.com/posts/"
    }
  }, [_c('span', [_vm._v("多选文件上传  ")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "ghost",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("上传文件")])], 1)], 1)], 1)])], 1), _vm._v(" "), _c('Col', {
    staticClass: "padding-left-10",
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
      "type": "upload"
    }
  }), _vm._v("\n                    可限制文件类型\n                ")], 1), _vm._v(" "), _c('div', {
    staticClass: "height-120px"
  }, [_c('Row', {
    staticClass: "height-100",
    attrs: {
      "type": "flex",
      "justify": "center",
      "align": "middle"
    }
  }, [_c('Upload', {
    attrs: {
      "action": "//jsonplaceholder.typicode.com/posts/",
      "format": ['jpg', 'png', 'jpeg', 'gif', 'bmp', 'svg'],
      "on-format-error": _vm.handleFormatError
    }
  }, [_c('span', [_vm._v("选择图片上传  ")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "ghost",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("上传文件")])], 1)], 1)], 1)])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "margin-top-10"
  }, [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('div', [_c('Card', [_c('p', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "android-funnel"
    }
  }), _vm._v("\n                        可监听上传各个阶段\n                    ")], 1), _vm._v(" "), _c('div', {
    staticClass: "height-200px"
  }, [_c('Row', {
    staticClass: "height-100",
    attrs: {
      "type": "flex",
      "justify": "center",
      "align": "middle"
    }
  }, [_c('div', {
    staticStyle: {
      "display": "block",
      "width": "100%",
      "text-align": "center"
    }
  }, [_c('Upload', {
    attrs: {
      "action": "//jsonplaceholder.typicode.com/posts/",
      "on-format-error": _vm.handleFormatError,
      "before-upload": _vm.handleBeforeUpload,
      "on-progress": _vm.handleProgress,
      "on-success": _vm.handleSuccess,
      "on-error": _vm.handleError
    }
  }, [_c('span', [_vm._v("请选择文件  ")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "ghost",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("上传文件")])], 1)], 1)])], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "margin-top-10"
  }, [_c('Card', [_c('p', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "android-hand"
    }
  }), _vm._v("\n                        可拖拽上传\n                    ")], 1), _vm._v(" "), _c('div', {
    staticClass: "height-200px"
  }, [_c('Upload', {
    attrs: {
      "multiple": "",
      "type": "drag",
      "action": "//jsonplaceholder.typicode.com/posts/"
    }
  }, [_c('div', {
    staticStyle: {
      "padding": "60px 0",
      "height": "200px"
    }
  }, [_c('Icon', {
    staticStyle: {
      "color": "#3399ff"
    },
    attrs: {
      "type": "ios-cloud-upload",
      "size": "52"
    }
  }), _vm._v(" "), _c('p', [_vm._v("点击或将文件拖拽到这里上传")])], 1)])], 1)])], 1)]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "16"
    }
  }, [_c('div', {
    staticClass: "padding-left-10"
  }, [_c('Card', [_c('p', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-analytics"
    }
  }), _vm._v("\n                        综合实例\n                    ")], 1), _vm._v(" "), _c('div', {
    staticClass: "height-492px"
  }, [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('Card', [_c('Upload', {
    ref: "upload",
    staticStyle: {
      "display": "inline-block",
      "width": "58px"
    },
    attrs: {
      "show-upload-list": false,
      "default-file-list": _vm.defaultList,
      "on-success": _vm.handleSuccess2,
      "format": ['jpg', 'jpeg', 'png'],
      "max-size": 2048,
      "on-format-error": _vm.handleFormatError2,
      "on-exceeded-size": _vm.handleMaxSize,
      "before-upload": _vm.handleBeforeUpload2,
      "multiple": "",
      "type": "drag",
      "action": "//jsonplaceholder.typicode.com/posts/"
    }
  }, [_c('div', {
    staticStyle: {
      "width": "58px",
      "height": "58px",
      "line-height": "58px"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "camera",
      "size": "20"
    }
  })], 1)]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "查看图片"
    },
    model: {
      value: (_vm.visible),
      callback: function($$v) {
        _vm.visible = $$v
      },
      expression: "visible"
    }
  }, [(_vm.visible) ? _c('img', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "src": 'https://o5wwk8baw.qnssl.com/' + _vm.imgName + '/large'
    }
  }) : _vm._e()])], 1)], 1), _vm._v(" "), _c('Col', {
    staticClass: "padding-left-10",
    attrs: {
      "span": "16"
    }
  }, [_c('Card', [_c('div', {
    staticClass: "height-460px"
  }, _vm._l((_vm.uploadList), function(item) {
    return _c('div', {
      key: item.url,
      staticClass: "admin-upload-list"
    }, [(item.status === 'finished') ? [_c('img', {
      attrs: {
        "src": item.url
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "admin-upload-list-cover"
    }, [_c('Icon', {
      attrs: {
        "type": "ios-eye-outline"
      },
      nativeOn: {
        "click": function($event) {
          _vm.handleView(item.name)
        }
      }
    }), _vm._v(" "), _c('Icon', {
      attrs: {
        "type": "ios-trash-outline"
      },
      nativeOn: {
        "click": function($event) {
          _vm.handleRemove(item)
        }
      }
    })], 1)] : [(item.showProgress) ? _c('Progress', {
      attrs: {
        "percent": item.percentage,
        "hide-info": ""
      }
    }) : _vm._e()]], 2)
  }))])], 1)], 1)])], 1)])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-59272b34", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=15.chunk.js.map