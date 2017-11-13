webpackJsonp([6],{

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(771)

var Component = __webpack_require__(37)(
  /* script */
  __webpack_require__(746),
  /* template */
  __webpack_require__(811),
  /* scopeId */
  "data-v-25cac2e0",
  /* cssModules */
  null
)
Component.options.__file = "/Users/august/Open/iview-admin/src/views/tables/exportable-table.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] exportable-table.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-25cac2e0", Component.options)
  } else {
    hotAPI.reload("data-v-25cac2e0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _table2csv = __webpack_require__(752);

var _table2excel = __webpack_require__(753);

var _table2excel2 = __webpack_require__(748);

var _table2excel3 = _interopRequireDefault(_table2excel2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            columnsCsv: _table2csv.csvColumns,
            csvData: _table2csv.table2csvData,
            table2excelData: _table2excel.table2excelData,
            excelColumns: _table2excel.excelColumns,
            rowNum: _table2csv.table2csvData.length,
            colNum: _table2csv.csvColumns.length,
            selectMinRow: 1,
            selectMaxRow: _table2csv.table2csvData.length,
            selectMinCol: 1,
            selectMaxCol: _table2csv.csvColumns.length,
            maxRow: 0,
            minRow: 1,
            maxCol: 0,
            minCol: 1,
            csvFileName: '',
            excelFileName: '',
            tableExcel: {},
            fontSize: 16
        };
    },

    methods: {
        exportData: function exportData(type) {
            var _this = this;

            if (type === 1) {
                this.$refs.tableCsv.exportCsv({
                    filename: '原始数据'
                });
            } else if (type === 2) {
                this.$refs.tableCsv.exportCsv({
                    filename: '排序和过滤后的数据',
                    original: false
                });
            } else if (type === 3) {
                this.$refs.tableCsv.exportCsv({
                    filename: this.csvFileName,
                    columns: this.columnsCsv.filter(function (col, index) {
                        return index >= _this.selectMinCol - 1 && index <= _this.selectMaxCol - 1;
                    }),
                    data: this.csvData.filter(function (data, index) {
                        return index >= _this.selectMinRow - 1 && index <= _this.selectMaxRow - 1;
                    })
                });
            }
        },
        exportExcel: function exportExcel() {
            _table2excel3.default.transform(this.$refs.tableExcel, 'hrefToExportTable', this.excelFileName);
        }
    }
};

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _from = __webpack_require__(144);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var idTmr;
function getExplorer() {
    var explorer = window.navigator.userAgent;
    if (explorer.indexOf('MSIE') >= 0) {
        return 'ie';
    } else if (explorer.indexOf('Firefox') >= 0) {
        return 'Firefox';
    } else if (explorer.indexOf('Chrome') >= 0) {
        return 'Chrome';
    } else if (explorer.indexOf('Opera') >= 0) {
        return 'Opera';
    } else if (explorer.indexOf('Safari') >= 0) {
        return 'Safari';
    };
};
function tranform(table, aId, name) {
    var tableHead = table.$children[0].$el;
    var tableBody = table.$children[1].$el;
    var tableInnerHTML = '<thead><tr>';
    if (table.$children.length !== 1) {
        var len = tableBody.rows.length;
        var i = -1;
        while (i < len) {
            if (i === -1) {
                (0, _from2.default)(tableHead.rows[0].children).forEach(function (td) {
                    tableInnerHTML = tableInnerHTML + '<th>' + td.children[0].children[0].innerHTML + '</th>';
                });
                tableInnerHTML += '</tr><thead><tbody>';
            } else {
                tableInnerHTML += '<tr>';
                (0, _from2.default)(tableBody.rows[i].children).forEach(function (td) {
                    tableInnerHTML = tableInnerHTML + '<td>' + td.children[0].children[0].innerHTML + '</td>';
                });
                tableInnerHTML += '</tr>';
            }
            i++;
        }
        tableInnerHTML += '</tbody>';
    }

    if (getExplorer() !== 'Safari' && name.substr(-1, 4) !== '.xls') {
        name += '.xls';
    }

    if (getExplorer() === 'ie') {
        var curTbl = table;
        var oXL = new ActiveXObject('Excel.Application');
        var oWB = oXL.Workbooks.Add();
        var xlsheet = oWB.Worksheets(1);
        var sel = document.body.createTextRange();
        sel.moveToElementText(curTbl);
        sel.select();
        sel.execCommand('Copy');
        xlsheet.Paste();
        oXL.Visible = true;

        try {
            var fname = oXL.Application.GetSaveAsFilename('Excel.xls', 'Excel Spreadsheets (*.xls), *.xls');
        } catch (e) {
            print('Nested catch caught ' + e);
        } finally {
            oWB.SaveAs(fname);

            oXL.Quit();
            oXL = null;
            idTmr = setInterval(Cleanup(), 1);
        }
    } else {
        tableToExcel(tableInnerHTML, aId, name);
    }
}
function Cleanup() {
    window.clearInterval(idTmr);
}
var tableToExcel = function () {
    var uri = 'data:application/vnd.ms-excel;base64,';
    var template = '<html><head><meta charset="UTF-8"></head><body><table>{table}</table></body></html>';
    var base64 = function base64(s) {
        return window.btoa(unescape(encodeURIComponent(s)));
    };
    var format = function format(s, c) {
        return s.replace(/{(\w+)}/g, function (m, p) {
            return c[p];
        });
    };
    return function (table, aId, name) {
        var ctx = { worksheet: name || 'Worksheet', table: table };
        document.getElementById(aId).href = uri + base64(format(template, ctx));
        document.getElementById(aId).download = name;
        document.getElementById(aId).click();
    };
}();

var table2excel = {};

table2excel.transform = tranform;

exports.default = table2excel;

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var table2csvData = exports.table2csvData = [{
    'name': '推广名称1',
    'fav': 0,
    'show': 7302,
    'weak': 5627,
    'signin': 1563,
    'click': 4254,
    'active': 1438,
    'day7': 274,
    'day30': 285,
    'tomorrow': 1727,
    'day': 558,
    'week': 4440,
    'month': 5610
}, {
    'name': '推广名称2',
    'fav': 0,
    'show': 4720,
    'weak': 4086,
    'signin': 3792,
    'click': 8690,
    'active': 8470,
    'day7': 8172,
    'day30': 5197,
    'tomorrow': 1684,
    'day': 2593,
    'week': 2507,
    'month': 1537
}, {
    'name': '推广名称3',
    'fav': 0,
    'show': 7181,
    'weak': 8007,
    'signin': 8477,
    'click': 1879,
    'active': 16,
    'day7': 2249,
    'day30': 3450,
    'tomorrow': 377,
    'day': 1561,
    'week': 3219,
    'month': 1588
}, {
    'name': '推广名称4',
    'fav': 0,
    'show': 9911,
    'weak': 8976,
    'signin': 8807,
    'click': 8050,
    'active': 7668,
    'day7': 1547,
    'day30': 2357,
    'tomorrow': 7278,
    'day': 5309,
    'week': 1655,
    'month': 9043
}, {
    'name': '推广名称5',
    'fav': 0,
    'show': 934,
    'weak': 1394,
    'signin': 6463,
    'click': 5278,
    'active': 9256,
    'day7': 209,
    'day30': 3563,
    'tomorrow': 8285,
    'day': 1230,
    'week': 4840,
    'month': 9908
}, {
    'name': '推广名称6',
    'fav': 0,
    'show': 6856,
    'weak': 1608,
    'signin': 457,
    'click': 4949,
    'active': 2909,
    'day7': 4525,
    'day30': 6171,
    'tomorrow': 1920,
    'day': 1966,
    'week': 904,
    'month': 6851
}, {
    'name': '推广名称7',
    'fav': 0,
    'show': 5107,
    'weak': 6407,
    'signin': 4166,
    'click': 7970,
    'active': 1002,
    'day7': 8701,
    'day30': 9040,
    'tomorrow': 7632,
    'day': 4061,
    'week': 4359,
    'month': 3676
}];

var csvColumns = exports.csvColumns = [{
    'title': '名称',
    'key': 'name',
    'fixed': 'left',
    'width': 200
}, {
    'title': '展示',
    'key': 'show',
    'width': 150,
    'sortable': true,
    filters: [{
        label: '大于4000',
        value: 1
    }, {
        label: '小于4000',
        value: 2
    }],
    filterMultiple: false,
    filterMethod: function filterMethod(value, row) {
        if (value === 1) {
            return row.show > 4000;
        } else if (value === 2) {
            return row.show < 4000;
        }
    }
}, {
    'title': '唤醒',
    'key': 'weak',
    'width': 150,
    'sortable': true
}, {
    'title': '登录',
    'key': 'signin',
    'width': 150,
    'sortable': true
}, {
    'title': '点击',
    'key': 'click',
    'width': 150,
    'sortable': true
}, {
    'title': '激活',
    'key': 'active',
    'width': 150,
    'sortable': true
}, {
    'title': '7日留存',
    'key': 'day7',
    'width': 150,
    'sortable': true
}, {
    'title': '30日留存',
    'key': 'day30',
    'width': 150,
    'sortable': true
}, {
    'title': '次日留存',
    'key': 'tomorrow',
    'width': 150,
    'sortable': true
}, {
    'title': '日活跃',
    'key': 'day',
    'width': 150,
    'sortable': true
}, {
    'title': '周活跃',
    'key': 'week',
    'width': 150,
    'sortable': true
}, {
    'title': '月活跃',
    'key': 'month',
    'width': 150,
    'sortable': true
}];

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var table2excelData = exports.table2excelData = [{
    'name': '推广名称1',
    'fav': 0,
    'show': 7302,
    'weak': 5627,
    'signin': 1563,
    'click': 4254,
    'active': 1438,
    'day7': 274,
    'day30': 285,
    'tomorrow': 1727,
    'day': 558,
    'week': 4440,
    'month': 5610
}, {
    'name': '推广名称2',
    'fav': 0,
    'show': 4720,
    'weak': 4086,
    'signin': 3792,
    'click': 8690,
    'active': 8470,
    'day7': 8172,
    'day30': 5197,
    'tomorrow': 1684,
    'day': 2593,
    'week': 2507,
    'month': 1537
}, {
    'name': '推广名称3',
    'fav': 0,
    'show': 7181,
    'weak': 8007,
    'signin': 8477,
    'click': 1879,
    'active': 16,
    'day7': 2249,
    'day30': 3450,
    'tomorrow': 377,
    'day': 1561,
    'week': 3219,
    'month': 1588
}, {
    'name': '推广名称4',
    'fav': 0,
    'show': 9911,
    'weak': 8976,
    'signin': 8807,
    'click': 8050,
    'active': 7668,
    'day7': 1547,
    'day30': 2357,
    'tomorrow': 7278,
    'day': 5309,
    'week': 1655,
    'month': 9043
}, {
    'name': '推广名称5',
    'fav': 0,
    'show': 934,
    'weak': 1394,
    'signin': 6463,
    'click': 5278,
    'active': 9256,
    'day7': 209,
    'day30': 3563,
    'tomorrow': 8285,
    'day': 1230,
    'week': 4840,
    'month': 9908
}, {
    'name': '推广名称6',
    'fav': 0,
    'show': 6856,
    'weak': 1608,
    'signin': 457,
    'click': 4949,
    'active': 2909,
    'day7': 4525,
    'day30': 6171,
    'tomorrow': 1920,
    'day': 1966,
    'week': 904,
    'month': 6851
}, {
    'name': '推广名称7',
    'fav': 0,
    'show': 5107,
    'weak': 6407,
    'signin': 4166,
    'click': 7970,
    'active': 1002,
    'day7': 8701,
    'day30': 9040,
    'tomorrow': 7632,
    'day': 4061,
    'week': 4359,
    'month': 3676
}, {
    'name': '推广名称8',
    'fav': 0,
    'show': 5107,
    'weak': 6407,
    'signin': 4166,
    'click': 7970,
    'active': 1002,
    'day7': 8701,
    'day30': 9040,
    'tomorrow': 7632,
    'day': 4061,
    'week': 4359,
    'month': 3676
}, {
    'name': '推广名称9',
    'fav': 0,
    'show': 5107,
    'weak': 6407,
    'signin': 4166,
    'click': 7970,
    'active': 1002,
    'day7': 8701,
    'day30': 9040,
    'tomorrow': 7632,
    'day': 4061,
    'week': 4359,
    'month': 3676
}, {
    'name': '推广名称10',
    'fav': 0,
    'show': 5107,
    'weak': 6407,
    'signin': 4166,
    'click': 7970,
    'active': 1002,
    'day7': 8701,
    'day30': 9040,
    'tomorrow': 7632,
    'day': 4061,
    'week': 4359,
    'month': 3676
}];

var excelColumns = exports.excelColumns = [{
    'title': '名称',
    'key': 'name'
}, {
    'title': '展示',
    'key': 'show',
    'sortable': true,
    filters: [{
        label: '大于4000',
        value: 1
    }, {
        label: '小于4000',
        value: 2
    }],
    filterMultiple: false,
    filterMethod: function filterMethod(value, row) {
        if (value === 1) {
            return row.show > 4000;
        } else if (value === 2) {
            return row.show < 4000;
        }
    }
}, {
    'title': '唤醒',
    'key': 'weak',
    'sortable': true
}, {
    'title': '登录',
    'key': 'signin',
    'sortable': true
}, {
    'title': '点击',
    'key': 'click',
    'sortable': true
}, {
    'title': '激活',
    'key': 'active',
    'sortable': true
}, {
    'title': '30日留存',
    'key': 'day30',
    'sortable': true
}, {
    'title': '月活跃',
    'key': 'month',
    'sortable': true
}];

/***/ }),

/***/ 771:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 811:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Row', [_c('Card', [_c('h4', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "android-archive"
    }
  }), _vm._v("\n                导出表格数据到 .Csv 文件\n            ")], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "18"
    }
  }, [_c('Table', {
    ref: "tableCsv",
    attrs: {
      "columns": _vm.columnsCsv,
      "data": _vm.csvData,
      "size": "small"
    }
  })], 1), _vm._v(" "), _c('Col', {
    staticClass: "padding-left-10",
    attrs: {
      "span": "6"
    }
  }, [_c('div', {
    staticClass: "exportable-table-download-con1"
  }, [_c('span', {
    staticStyle: {
      "margin-right": "16px"
    }
  }, [_c('Button', {
    attrs: {
      "type": "primary",
      "size": "large"
    },
    on: {
      "click": function($event) {
        _vm.exportData(1)
      }
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-download-outline"
    }
  }), _vm._v(" 导出原始数据")], 1)], 1), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "primary",
      "size": "large"
    },
    on: {
      "click": function($event) {
        _vm.exportData(2)
      }
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-download-outline"
    }
  }), _vm._v(" 导出排序和过滤后的数据")], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "exportable-table-download-con2"
  }, [_c('div', [_c('span', [_vm._v("选取行范围： ")]), _c('InputNumber', {
    attrs: {
      "min": 1,
      "max": _vm.selectMaxRow
    },
    model: {
      value: (_vm.selectMinRow),
      callback: function($$v) {
        _vm.selectMinRow = $$v
      },
      expression: "selectMinRow"
    }
  }), _vm._v(" "), _c('span', [_vm._v("  -  ")]), _vm._v(" "), _c('InputNumber', {
    attrs: {
      "min": _vm.selectMinRow,
      "max": _vm.rowNum
    },
    model: {
      value: (_vm.selectMaxRow),
      callback: function($$v) {
        _vm.selectMaxRow = $$v
      },
      expression: "selectMaxRow"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "margin-top-10"
  }, [_c('span', [_vm._v("选取列范围： ")]), _c('InputNumber', {
    attrs: {
      "min": 1,
      "max": _vm.selectMaxCol
    },
    model: {
      value: (_vm.selectMinCol),
      callback: function($$v) {
        _vm.selectMinCol = $$v
      },
      expression: "selectMinCol"
    }
  }), _vm._v(" "), _c('span', [_vm._v("  -  ")]), _vm._v(" "), _c('InputNumber', {
    attrs: {
      "min": _vm.selectMinCol,
      "max": _vm.colNum
    },
    model: {
      value: (_vm.selectMaxCol),
      callback: function($$v) {
        _vm.selectMaxCol = $$v
      },
      expression: "selectMaxCol"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "margin-top-10"
  }, [_c('span', [_vm._v("输入文件名：")]), _vm._v(" "), _c('Input', {
    staticStyle: {
      "width": "190px"
    },
    attrs: {
      "icon": "document",
      "placeholder": "请输入文件名"
    },
    model: {
      value: (_vm.csvFileName),
      callback: function($$v) {
        _vm.csvFileName = $$v
      },
      expression: "csvFileName"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "margin-top-20"
  }, [_c('Button', {
    attrs: {
      "type": "primary",
      "size": "large"
    },
    on: {
      "click": function($event) {
        _vm.exportData(3)
      }
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-download-outline"
    }
  }), _vm._v(" 导出自定义数据")], 1)], 1)])])], 1)], 1)], 1), _vm._v(" "), _c('Row', {
    staticClass: "margin-top-10"
  }, [_c('Card', [_c('h4', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "android-archive"
    }
  }), _vm._v("\n                导出表格数据到 .Xls 文件 (Excel)\n            ")], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "18"
    }
  }, [_c('Table', {
    ref: "tableExcel",
    attrs: {
      "columns": _vm.excelColumns,
      "height": "390px",
      "data": _vm.table2excelData,
      "size": "small"
    }
  })], 1), _vm._v(" "), _c('Col', {
    staticClass: "padding-left-10",
    attrs: {
      "span": "6"
    }
  }, [_c('div', {
    staticClass: "margin-top-10 margin-left-10"
  }, [_c('span', [_vm._v("输入文件名：")]), _vm._v(" "), _c('Input', {
    staticStyle: {
      "width": "190px"
    },
    attrs: {
      "icon": "document",
      "placeholder": "请输入文件名"
    },
    model: {
      value: (_vm.excelFileName),
      callback: function($$v) {
        _vm.excelFileName = $$v
      },
      expression: "excelFileName"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "margin-left-10 margin-top-20"
  }, [_c('a', {
    staticStyle: {
      "postion": "absolute",
      "left": "-10px",
      "top": "-10px",
      "width": "0px",
      "height": "0px"
    },
    attrs: {
      "id": "hrefToExportTable"
    }
  }), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "primary",
      "size": "large"
    },
    on: {
      "click": _vm.exportExcel
    }
  }, [_vm._v("下载表格数据")])], 1)])], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-25cac2e0", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=6.chunk.js.map