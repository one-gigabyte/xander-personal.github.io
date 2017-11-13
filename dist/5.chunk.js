webpackJsonp([5],{

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(767)

var Component = __webpack_require__(37)(
  /* script */
  __webpack_require__(736),
  /* template */
  __webpack_require__(805),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/august/Open/iview-admin/src/views/my_components/count-to/count-to.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] count-to.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05f4d520", Component.options)
  } else {
    hotAPI.reload("data-v-05f4d520", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(a,t){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=t(require,exports,module):a.CountUp=t()}(this,function(a,t,n){var e=function(a,t,n,e,i,r){for(var o=0,s=["webkit","moz","ms","o"],m=0;m<s.length&&!window.requestAnimationFrame;++m)window.requestAnimationFrame=window[s[m]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[s[m]+"CancelAnimationFrame"]||window[s[m]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,t){var n=(new Date).getTime(),e=Math.max(0,16-(n-o)),i=window.setTimeout(function(){a(n+e)},e);return o=n+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)});var u=this;u.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:null,formattingFn:null};for(var l in r)r.hasOwnProperty(l)&&(u.options[l]=r[l]);""===u.options.separator&&(u.options.useGrouping=!1),u.options.prefix||(u.options.prefix=""),u.options.suffix||(u.options.suffix=""),u.d="string"==typeof a?document.getElementById(a):a,u.startVal=Number(t),u.endVal=Number(n),u.countDown=u.startVal>u.endVal,u.frameVal=u.startVal,u.decimals=Math.max(0,e||0),u.dec=Math.pow(10,u.decimals),u.duration=1e3*Number(i)||2e3,u.formatNumber=function(a){a=a.toFixed(u.decimals),a+="";var t,n,e,i;if(t=a.split("."),n=t[0],e=t.length>1?u.options.decimal+t[1]:"",i=/(\d+)(\d{3})/,u.options.useGrouping)for(;i.test(n);)n=n.replace(i,"$1"+u.options.separator+"$2");return u.options.prefix+n+e+u.options.suffix},u.easeOutExpo=function(a,t,n,e){return n*(-Math.pow(2,-10*a/e)+1)*1024/1023+t},u.easingFn=u.options.easingFn?u.options.easingFn:u.easeOutExpo,u.formattingFn=u.options.formattingFn?u.options.formattingFn:u.formatNumber,u.version=function(){return"1.7.1"},u.printValue=function(a){var t=u.formattingFn(a);"INPUT"===u.d.tagName?this.d.value=t:"text"===u.d.tagName||"tspan"===u.d.tagName?this.d.textContent=t:this.d.innerHTML=t},u.count=function(a){u.startTime||(u.startTime=a),u.timestamp=a;var t=a-u.startTime;u.remaining=u.duration-t,u.options.useEasing?u.countDown?u.frameVal=u.startVal-u.easingFn(t,0,u.startVal-u.endVal,u.duration):u.frameVal=u.easingFn(t,u.startVal,u.endVal-u.startVal,u.duration):u.countDown?u.frameVal=u.startVal-(u.startVal-u.endVal)*(t/u.duration):u.frameVal=u.startVal+(u.endVal-u.startVal)*(t/u.duration),u.countDown?u.frameVal=u.frameVal<u.endVal?u.endVal:u.frameVal:u.frameVal=u.frameVal>u.endVal?u.endVal:u.frameVal,u.frameVal=Math.round(u.frameVal*u.dec)/u.dec,u.printValue(u.frameVal),t<u.duration?u.rAF=requestAnimationFrame(u.count):u.callback&&u.callback()},u.start=function(a){return u.callback=a,u.rAF=requestAnimationFrame(u.count),!1},u.pauseResume=function(){u.paused?(u.paused=!1,delete u.startTime,u.duration=u.remaining,u.startVal=u.frameVal,requestAnimationFrame(u.count)):(u.paused=!0,cancelAnimationFrame(u.rAF))},u.reset=function(){u.paused=!1,delete u.startTime,u.startVal=t,cancelAnimationFrame(u.rAF),u.printValue(u.startVal)},u.update=function(a){cancelAnimationFrame(u.rAF),u.paused=!1,delete u.startTime,u.startVal=u.frameVal,u.endVal=Number(a),u.countDown=u.startVal>u.endVal,u.rAF=requestAnimationFrame(u.count)},u.printValue(u.startVal)};return e});

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _countUp = __webpack_require__(701);

var _countUp2 = _interopRequireDefault(_countUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'CountTo',
    data: function data() {
        return {
            counter: {},
            unitText: '',
            countId: 'count' + parseInt(Math.random() * 1000000)
        };
    },

    props: {
        mainClass: String,
        countClass: String,
        mainStyle: {
            type: Object,
            default: function _default() {
                return {
                    fontSize: '16px',
                    fontWeight: 500,
                    color: 'gray'
                };
            }
        },
        countStyle: Object,
        initCount: {
            type: Number,
            default: 0
        },
        startVal: {
            type: Number,
            default: 0
        },
        endVal: {
            type: Number,
            required: true
        },
        simplify: {
            type: Boolean,
            default: false
        },
        duration: {
            type: Number,
            default: 2
        },
        delay: {
            type: Number,
            default: 200
        },
        uneasing: {
            type: Boolean,
            default: false
        },
        ungroup: {
            type: Boolean,
            default: false
        },
        separator: {
            type: String,
            default: ','
        },
        decimals: {
            type: Number,
            default: 0
        },
        decimal: {
            type: String,
            default: '.'
        },
        unit: {
            type: Array,
            default: function _default() {
                return [[3, 'K+'], [6, 'M+'], [9, 'B+']];
            }
        }
    },
    methods: {
        transformValue: function transformValue(val) {
            var endVal = 0;
            var unit = '';
            var len = this.unit.length;
            if (val < Math.pow(10, this.unit[0][0])) {
                endVal = val;
            } else {
                for (var i = 1; i < len; i++) {
                    if (val >= Math.pow(10, this.unit[i - 1][0]) && val < Math.pow(10, this.unit[i][0])) {
                        endVal = parseInt(val / Math.pow(10, this.unit[i - 1][0]));
                        unit = this.unit[i - 1][1];
                    }
                }
            }
            if (val > Math.pow(10, this.unit[len - 1][0])) {
                endVal = parseInt(val / Math.pow(10, this.unit[len - 1][0]));
                unit = this.unit[len - 1][1];
            }
            return {
                val: endVal,
                unit: unit
            };
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            setTimeout(function () {
                var endVal = 0;
                var res = {};
                if (_this.simplify) {
                    res = _this.transformValue(_this.endVal);
                    endVal = res.val;
                    _this.unitText = res.unit;
                } else {
                    endVal = _this.endVal;
                }
                var counter = {};
                _this.counter = counter = new _countUp2.default(_this.countId, _this.startVal, endVal, _this.decimals, _this.duration, {
                    useEasing: !_this.uneasing,
                    useGrouping: !_this.ungroup,
                    separator: _this.separator,
                    decimal: _this.decimal
                });
                if (!counter.error) {
                    counter.start();
                }
            }, _this.delay);
        });
    },

    watch: {
        endVal: function endVal(val) {
            var endVal = 0;
            if (this.simplify) {
                var res = this.transformValue(this.endVal);
                endVal = res.val;
                this.unitText = res.unit;
            } else {
                endVal = this.endVal;
            }
            this.counter.update(endVal);
        }
    }
};

/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _CountTo = __webpack_require__(801);

var _CountTo2 = _interopRequireDefault(_CountTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        CountTo: _CountTo2.default
    },
    data: function data() {
        return {
            endVal: 0,
            mainStyle: {
                fontSize: '30px'
            },
            countStyle: {
                fontSize: '50px',
                color: '#dc9387'
            },
            mainStyle2: {
                fontSize: '22px'
            },
            countStyle2: {
                fontSize: '30px',
                color: '#dc9387'
            },
            unit: [[3, '千多'], [4, '万多'], [5, '十万多']],
            unit2: [[1, '十多'], [2, '百多'], [3, '千多'], [4, '万多'], [5, '十万多'], [6, '百万多'], [7, '千万多'], [8, '亿多']],
            asynEndVal: 487,
            integratedEndVal: 3
        };
    },

    methods: {
        init: function init() {
            var _this = this;

            setInterval(function () {
                _this.asynEndVal += parseInt(Math.random() * 20);
                _this.integratedEndVal += parseInt(Math.random() * 30);
            }, 2000);
        }
    },
    mounted: function mounted() {
        this.init();
    }
};

/***/ }),

/***/ 767:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(37)(
  /* script */
  __webpack_require__(735),
  /* template */
  __webpack_require__(810),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/august/Open/iview-admin/src/views/my_components/count-to/CountTo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CountTo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-21a3dc73", Component.options)
  } else {
    hotAPI.reload("data-v-21a3dc73", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 805:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Row', [_c('Col', {
    attrs: {
      "span": "3"
    }
  }, [_c('Card', [_c('p', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "waterdrop"
    }
  }), _vm._v("\n                    CountTo组件基础用法\n                ")], 1), _vm._v(" "), _c('Row', {
    staticClass: "countto-page-row",
    attrs: {
      "type": "flex",
      "justify": "center",
      "align": "middle"
    }
  }, [_c('div', {
    staticClass: "count-to-con"
  }, [_c('CountTo', {
    attrs: {
      "endVal": 2534
    }
  })], 1)])], 1)], 1), _vm._v(" "), _c('Col', {
    staticClass: "padding-left-10",
    attrs: {
      "span": "5"
    }
  }, [_c('Card', [_c('p', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "code"
    }
  }), _vm._v("\n                    可添加左右文字\n                ")], 1), _vm._v(" "), _c('Row', {
    staticClass: "countto-page-row",
    attrs: {
      "type": "flex",
      "justify": "center",
      "align": "middle"
    }
  }, [_c('div', {
    staticClass: "count-to-con"
  }, [_c('CountTo', {
    attrs: {
      "endVal": 2534
    }
  }, [_c('span', {
    attrs: {
      "slot": "leftText"
    },
    slot: "leftText"
  }, [_vm._v("Total: ")]), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "rightText"
    },
    slot: "rightText"
  }, [_vm._v(" times")])])], 1)])], 1)], 1), _vm._v(" "), _c('Col', {
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
      "type": "paintbucket"
    }
  }), _vm._v("\n                    自定义样式\n                ")], 1), _vm._v(" "), _c('Row', {
    staticClass: "countto-page-row",
    attrs: {
      "type": "flex",
      "justify": "center",
      "align": "middle"
    }
  }, [_c('div', {
    staticClass: "count-to-con"
  }, [_c('CountTo', {
    attrs: {
      "endVal": 2534,
      "mainStyle": _vm.mainStyle,
      "countStyle": _vm.countStyle
    }
  }, [_c('span', {
    attrs: {
      "slot": "leftText"
    },
    slot: "leftText"
  }, [_vm._v("Total: ")]), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "rightText"
    },
    slot: "rightText"
  }, [_vm._v(" times")])])], 1)])], 1)], 1), _vm._v(" "), _c('Col', {
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
      "type": "settings"
    }
  }), _vm._v("\n                    设置数据格式\n                ")], 1), _vm._v(" "), _c('Row', {
    staticClass: "countto-page-row",
    attrs: {
      "type": "flex",
      "justify": "center",
      "align": "middle"
    }
  }, [_c('div', {
    staticClass: "count-to-con"
  }, [_c('CountTo', {
    attrs: {
      "endVal": 2534,
      "mainStyle": _vm.mainStyle,
      "countStyle": _vm.countStyle,
      "decimals": 2
    }
  }, [_c('span', {
    attrs: {
      "slot": "leftText"
    },
    slot: "leftText"
  }, [_vm._v("Total: ")]), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "rightText"
    },
    slot: "rightText"
  }, [_vm._v(" times")])])], 1)])], 1)], 1)], 1), _vm._v(" "), _c('Row', {
    staticClass: "margin-top-10"
  }, [_c('Col', {
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
      "type": "ios-color-wand"
    }
  }), _vm._v("\n                    转换单位简化数据\n                ")], 1), _vm._v(" "), _c('Row', {
    staticClass: "countto-page-row",
    attrs: {
      "type": "flex",
      "justify": "center",
      "align": "middle"
    }
  }, [_c('div', {
    staticClass: "count-to-con"
  }, [_c('CountTo', {
    attrs: {
      "simplify": true,
      "endVal": 2534,
      "mainStyle": _vm.mainStyle,
      "countStyle": _vm.countStyle
    }
  }, [_c('span', {
    attrs: {
      "slot": "leftText"
    },
    slot: "leftText"
  }, [_vm._v("Total: ")]), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "rightText"
    },
    slot: "rightText"
  }, [_vm._v(" times")])])], 1)])], 1)], 1), _vm._v(" "), _c('Col', {
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
      "type": "ios-shuffle-strong"
    }
  }), _vm._v("\n                    自定义单位\n                ")], 1), _vm._v(" "), _c('Row', {
    staticClass: "countto-page-row",
    attrs: {
      "type": "flex",
      "justify": "center",
      "align": "middle"
    }
  }, [_c('div', {
    staticClass: "count-to-con"
  }, [_c('CountTo', {
    attrs: {
      "simplify": true,
      "unit": _vm.unit,
      "endVal": 253,
      "mainStyle": _vm.mainStyle2,
      "countStyle": _vm.countStyle2
    }
  }, [_c('span', {
    attrs: {
      "slot": "leftText"
    },
    slot: "leftText"
  }, [_vm._v("原始数据：253 => ")])]), _vm._v(" "), _c('CountTo', {
    attrs: {
      "simplify": true,
      "unit": _vm.unit,
      "endVal": 2534,
      "mainStyle": _vm.mainStyle2,
      "countStyle": _vm.countStyle2
    }
  }, [_c('span', {
    attrs: {
      "slot": "leftText"
    },
    slot: "leftText"
  }, [_vm._v("原始数据：2534 => ")])]), _vm._v(" "), _c('CountTo', {
    attrs: {
      "simplify": true,
      "unit": _vm.unit,
      "endVal": 257678,
      "mainStyle": _vm.mainStyle2,
      "countStyle": _vm.countStyle2
    }
  }, [_c('span', {
    attrs: {
      "slot": "leftText"
    },
    slot: "leftText"
  }, [_vm._v("原始数据：257678 => ")])])], 1)])], 1)], 1), _vm._v(" "), _c('Col', {
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
      "type": "android-stopwatch"
    }
  }), _vm._v("\n                    可异步更新数据\n                ")], 1), _vm._v(" "), _c('Row', {
    staticClass: "countto-page-row",
    attrs: {
      "type": "flex",
      "justify": "center",
      "align": "middle"
    }
  }, [_c('div', {
    staticClass: "count-to-con"
  }, [_c('CountTo', {
    attrs: {
      "endVal": _vm.asynEndVal,
      "mainStyle": _vm.mainStyle,
      "countStyle": _vm.countStyle
    }
  }, [_c('span', {
    attrs: {
      "slot": "leftText"
    },
    slot: "leftText"
  }, [_vm._v("Total: ")]), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "rightText"
    },
    slot: "rightText"
  }, [_vm._v(" times")])])], 1)])], 1)], 1)], 1), _vm._v(" "), _c('Row', {
    staticClass: "margin-top-10"
  }, [_c('Card', [_c('p', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-analytics"
    }
  }), _vm._v("\n                综合实例\n            ")], 1), _vm._v(" "), _c('Row', {
    staticClass: "countto-page-row",
    attrs: {
      "type": "flex",
      "justify": "center",
      "align": "middle"
    }
  }, [_c('div', {
    staticClass: "count-to-con"
  }, [_c('CountTo', {
    attrs: {
      "delay": 500,
      "simplify": true,
      "unit": _vm.unit2,
      "endVal": _vm.integratedEndVal,
      "mainStyle": _vm.mainStyle,
      "countStyle": _vm.countStyle
    }
  }, [_c('span', {
    attrs: {
      "slot": "leftText"
    },
    slot: "leftText"
  }, [_vm._v("原始数据: " + _vm._s(_vm.integratedEndVal) + " => ")]), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "rightText"
    },
    slot: "rightText"
  }, [_vm._v(" times")])])], 1)])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-05f4d520", module.exports)
  }
}

/***/ }),

/***/ 810:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    class: _vm.mainClass,
    style: (_vm.mainStyle)
  }, [_vm._t("leftText"), _vm._v(" "), _c('span', {
    class: _vm.countClass,
    style: (_vm.countStyle)
  }, [_c('span', {
    attrs: {
      "id": _vm.countId
    }
  }, [_vm._v(_vm._s(_vm.initCount))]), _c('span', [_vm._v(_vm._s(_vm.unitText))])]), _vm._v(" "), _vm._t("rightText")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-21a3dc73", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=5.chunk.js.map