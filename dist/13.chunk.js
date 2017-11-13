webpackJsonp([13],{

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(780)

var Component = __webpack_require__(37)(
  /* script */
  __webpack_require__(747),
  /* template */
  __webpack_require__(823),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/august/Open/iview-admin/src/views/tables/table-to-image.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] table-to-image.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3fecf6a9", Component.options)
  } else {
    hotAPI.reload("data-v-3fecf6a9", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _html2canvas = __webpack_require__(221);

var _html2canvas2 = _interopRequireDefault(_html2canvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        var _this = this;

        return {
            tableData1: this.mockTableData1(),
            imageName: '',
            tableColumns1: [{
                title: '名称',
                key: 'name'
            }, {
                title: '状态',
                key: 'status',
                render: function render(h, params) {
                    var row = params.row;
                    var color = row.status === 1 ? 'blue' : row.status === 2 ? 'green' : 'red';
                    var text = row.status === 1 ? '构建中' : row.status === 2 ? '构建完成' : '构建失败';

                    return h('Tag', {
                        props: {
                            type: 'dot',
                            color: color
                        }
                    }, text);
                }
            }, {
                title: '画像内容',
                key: 'portrayal',
                render: function render(h, params) {
                    return h('Poptip', {
                        props: {
                            trigger: 'hover',
                            title: params.row.portrayal.length + '个画像',
                            placement: 'bottom'
                        }
                    }, [h('Tag', params.row.portrayal.length), h('div', {
                        slot: 'content'
                    }, [h('ul', _this.tableData1[params.index].portrayal.map(function (item) {
                        return h('li', {
                            style: {
                                textAlign: 'center',
                                padding: '4px'
                            }
                        }, item);
                    }))])]);
                }
            }, {
                title: '选定人群数',
                key: 'people',
                render: function render(h, params) {
                    return h('Poptip', {
                        props: {
                            trigger: 'hover',
                            title: params.row.people.length + '个客群',
                            placement: 'bottom'
                        }
                    }, [h('Tag', params.row.people.length), h('div', {
                        slot: 'content'
                    }, [h('ul', _this.tableData1[params.index].people.map(function (item) {
                        return h('li', {
                            style: {
                                textAlign: 'center',
                                padding: '4px'
                            }
                        }, item.n + '：' + item.c + '人');
                    }))])]);
                }
            }, {
                title: '取样时段',
                key: 'time',
                render: function render(h, params) {
                    return h('div', '近' + params.row.time + '天');
                }
            }, {
                title: '更新时间',
                key: 'update',
                render: function render(h, params) {
                    return h('div', _this.formatDate(_this.tableData1[params.index].update));
                }
            }]
        };
    },

    methods: {
        mockTableData1: function mockTableData1() {
            var data = [];
            for (var i = 0; i < 10; i++) {
                data.push({
                    name: '商圈' + Math.floor(Math.random() * 100 + 1),
                    status: Math.floor(Math.random() * 3 + 1),
                    portrayal: ['城市渗透', '人群迁移', '消费指数', '生活指数', '娱乐指数'],
                    people: [{
                        n: '客群' + Math.floor(Math.random() * 100 + 1),
                        c: Math.floor(Math.random() * 1000000 + 100000)
                    }, {
                        n: '客群' + Math.floor(Math.random() * 100 + 1),
                        c: Math.floor(Math.random() * 1000000 + 100000)
                    }, {
                        n: '客群' + Math.floor(Math.random() * 100 + 1),
                        c: Math.floor(Math.random() * 1000000 + 100000)
                    }],
                    time: Math.floor(Math.random() * 7 + 1),
                    update: new Date()
                });
            }
            return data;
        },
        formatDate: function formatDate(date) {
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? '0' + m : m;
            var d = date.getDate();
            d = d < 10 ? '0' + d : d;
            return y + '-' + m + '-' + d;
        },
        exportImage: function exportImage() {
            var vm = this;
            var table = this.$refs.table2image.$el;

            (0, _html2canvas2.default)(table, {
                onrendered: function onrendered(image) {
                    var url = image.toDataURL();
                    document.getElementById('exportedImage').src = url;
                    var a = document.createElement('a');
                    a.href = url;
                    a.download = vm.imageName ? vm.imageName : '未命名';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                }
            });
        }
    }
};

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 823:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Row', [_c('Card', [_c('p', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "images"
    }
  }), _vm._v("\n                将表格数据连同样式一起以图片形式导出\n            ")], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "18"
    }
  }, [_c('Table', {
    ref: "table2image",
    attrs: {
      "data": _vm.tableData1,
      "columns": _vm.tableColumns1,
      "stripe": ""
    }
  })], 1), _vm._v(" "), _c('Col', {
    staticClass: "padding-left-20",
    attrs: {
      "span": "6"
    }
  }, [_c('div', {
    staticClass: "margin-bottom-10",
    attrs: {
      "id": "showImage"
    }
  }, [_c('span', [_vm._v("输入文件名：")]), _vm._v(" "), _c('Input', {
    staticStyle: {
      "width": "190px"
    },
    attrs: {
      "icon": "document",
      "placeholder": "请输入图片名"
    },
    model: {
      value: (_vm.imageName),
      callback: function($$v) {
        _vm.imageName = $$v
      },
      expression: "imageName"
    }
  })], 1), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.exportImage
    }
  }, [_vm._v("导出表格为图片")]), _vm._v(" "), _c('div', {
    staticClass: "show-image margin-top-20",
    attrs: {
      "id": "showImage"
    }
  }, [_c('img', {
    attrs: {
      "id": "exportedImage"
    }
  })])], 1)], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3fecf6a9", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=13.chunk.js.map