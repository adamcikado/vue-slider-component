/*!
  * vuejs-slider-component v2.6.1
  * (c) 2018 Andrej Adamcik
  * @license MIT
  */
// Unsharp text [#166](https://github.com/NightCatSama/vue-slider-component/issues/166)
var roundToDPR = (function () {
  var r = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
  return function (value) { return Math.round(value * r) / r; }
})();

var vue2Slider = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],ref:"wrap",class:['vue-slider-component', _vm.flowDirection, _vm.disabledClass, _vm.stateClass, { 'vue-slider-has-label': _vm.piecewiseLabel }],style:(_vm.wrapStyles),on:{"click":_vm.wrapClick}},[_c('div',{ref:"elem",staticClass:"vue-slider",style:([_vm.elemStyles, _vm.bgStyle]),attrs:{"aria-hidden":"true"}},[(_vm.isRange)?[_c('div',{ref:"dot0",class:[_vm.tooltipStatus, 'vue-slider-dot', { 'vue-slider-dot-focus': _vm.focusFlag && _vm.focusSlider === 0 }],style:([_vm.dotStyles, _vm.sliderStyles[0], _vm.focusFlag && _vm.focusSlider === 0 ? _vm.focusStyles[0] : null]),on:{"mousedown":function($event){_vm.moveStart($event, 0);},"touchstart":function($event){_vm.moveStart($event, 0);}}},[_c('span',{class:['vue-slider-tooltip-' + _vm.tooltipDirection[0], 'vue-slider-tooltip-wrap']},[_vm._t("tooltip",[_c('span',{staticClass:"vue-slider-tooltip",style:(_vm.tooltipStyles[0])},[_vm._v(_vm._s(_vm.formatter ? _vm.formatting(_vm.val[0]) : _vm.val[0]))])],{value:_vm.val[0],index:0})],2)]),_vm._v(" "),_c('div',{ref:"dot1",class:[_vm.tooltipStatus, 'vue-slider-dot', { 'vue-slider-dot-focus': _vm.focusFlag && _vm.focusSlider === 1 }],style:([_vm.dotStyles, _vm.sliderStyles[1], _vm.focusFlag && _vm.focusSlider === 1 ? _vm.focusStyles[1] : null]),on:{"mousedown":function($event){_vm.moveStart($event, 1);},"touchstart":function($event){_vm.moveStart($event, 1);}}},[_c('span',{class:['vue-slider-tooltip-' + _vm.tooltipDirection[1], 'vue-slider-tooltip-wrap']},[_vm._t("tooltip",[_c('span',{staticClass:"vue-slider-tooltip",style:(_vm.tooltipStyles[1])},[_vm._v(_vm._s(_vm.formatter ? _vm.formatting(_vm.val[1]) : _vm.val[1]))])],{value:_vm.val[1],index:1})],2)])]:[_c('div',{ref:"dot",class:[_vm.tooltipStatus, 'vue-slider-dot', { 'vue-slider-dot-focus': _vm.focusFlag && _vm.focusSlider === 0 }],style:([_vm.dotStyles, _vm.sliderStyles, _vm.focusFlag && _vm.focusSlider === 0 ? _vm.focusStyles : null]),on:{"mousedown":_vm.moveStart,"touchstart":_vm.moveStart}},[_c('span',{class:['vue-slider-tooltip-' + _vm.tooltipDirection, 'vue-slider-tooltip-wrap']},[_vm._t("tooltip",[_c('span',{staticClass:"vue-slider-tooltip",style:(_vm.tooltipStyles)},[_vm._v(_vm._s(_vm.formatter ? _vm.formatting(_vm.val) : _vm.val))])],{value:_vm.val})],2)])],_vm._v(" "),_c('ul',{staticClass:"vue-slider-piecewise"},_vm._l((_vm.piecewiseDotWrap),function(piecewiseObj,index){return _c('li',{key:index,staticClass:"vue-slider-piecewise-item",style:([_vm.piecewiseDotStyle, piecewiseObj.style])},[_vm._t("piecewise",[(_vm.piecewise)?_c('span',{staticClass:"vue-slider-piecewise-dot",style:([ _vm.piecewiseStyle, piecewiseObj.inRange ? _vm.piecewiseActiveStyle : null ])}):_vm._e()],{label:piecewiseObj.label,index:index,first:index === 0,last:index === _vm.piecewiseDotWrap.length - 1,active:piecewiseObj.inRange}),_vm._v(" "),_vm._t("label",[(_vm.piecewiseLabel)?_c('span',{staticClass:"vue-slider-piecewise-label",style:([ _vm.labelStyle, piecewiseObj.inRange ? _vm.labelActiveStyle : null ])},[_vm._v(" "+_vm._s(piecewiseObj.label)+" ")]):_vm._e()],{label:piecewiseObj.label,index:index,first:index === 0,last:index === _vm.piecewiseDotWrap.length - 1,active:piecewiseObj.inRange})],2)})),_vm._v(" "),_c('div',{ref:"process",class:['vue-slider-process', { 'vue-slider-process-dragable': _vm.isRange && _vm.processDragable }],style:(_vm.processStyle),on:{"click":_vm.processClick,"mousedown":function($event){_vm.moveStart($event, 0, true);},"touchstart":function($event){_vm.moveStart($event, 0, true);}}})],2),_vm._v(" "),(!_vm.isRange && !_vm.data)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.val),expression:"val"}],staticClass:"vue-slider-sr-only",attrs:{"type":"range","min":_vm.min,"max":_vm.max},domProps:{"value":(_vm.val)},on:{"__r":function($event){_vm.val=$event.target.value;}}}):_vm._e()])},staticRenderFns: [],
  name: 'VueSliderComponent',
  props: {
    width: {
      type: [Number, String],
      default: 'auto'
    },
    height: {
      type: [Number, String],
      default: 6
    },
    data: {
      type: Array,
      default: null
    },
    dotSize: {
      type: Number,
      default: 16
    },
    dotWidth: {
      type: Number,
      required: false
    },
    dotHeight: {
      type: Number,
      required: false
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    interval: {
      type: Number,
      default: 1
    },
    show: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    piecewise: {
      type: Boolean,
      default: false
    },
    tooltip: {
      type: [String, Boolean],
      default: 'always'
    },
    eventType: {
      type: String,
      default: 'auto'
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    reverse: {
      type: Boolean,
      default: false
    },
    lazy: {
      type: Boolean,
      default: false
    },
    clickable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 0.5
    },
    realTime: {
      type: Boolean,
      default: false
    },
    stopPropagation: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Array, Object],
      default: 0
    },
    piecewiseLabel: {
      type: Boolean,
      default: false
    },
    debug: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: false
    },
    processDragable: {
      type: Boolean,
      default: false
    },
    useKeyboard: {
      type: Boolean,
      default: false
    },
    actionsKeyboard: {
      type: Array,
      default: function default$1 () {
        return [function (i) { return i - 1; }, function (i) { return i + 1; }]
      }
    },
    sliderStyle: [Array, Object, Function],
    focusStyle: [Array, Object, Function],
    tooltipDir: [Array, String],
    formatter: [String, Function],
    piecewiseStyle: Object,
    piecewiseActiveStyle: Object,
    processStyle: Object,
    bgStyle: Object,
    tooltipStyle: [Array, Object, Function],
    labelStyle: Object,
    labelActiveStyle: Object
  },
  data: function data () {
    return {
      flag: false,
      keydownFlag: null,
      focusFlag: false,
      processFlag: false,
      processSign: null,
      size: 0,
      fixedValue: 0,
      focusSlider: 0,
      currentValue: 0,
      currentSlider: 0,
      isComponentExists: true
    }
  },
  computed: {
    dotWidthVal: function dotWidthVal () {
      return typeof this.dotWidth === 'number' ? this.dotWidth : this.dotSize
    },
    dotHeightVal: function dotHeightVal () {
      return typeof this.dotHeight === 'number' ? this.dotHeight : this.dotSize
    },
    flowDirection: function flowDirection () {
      return ("vue-slider-" + (this.direction + (this.reverse ? '-reverse' : '')))
    },
    tooltipDirection: function tooltipDirection () {
      var dir = this.tooltipDir || (this.direction === 'vertical' ? 'left' : 'top');
      if (Array.isArray(dir)) {
        return this.isRange ? dir : dir[1]
      } else {
        return this.isRange ? [dir, dir] : dir
      }
    },
    tooltipStatus: function tooltipStatus () {
      return this.tooltip === 'hover' && this.flag ? 'vue-slider-always' : this.tooltip ? ("vue-slider-" + (this.tooltip)) : ''
    },
    tooltipClass: function tooltipClass () {
      return [("vue-slider-tooltip-" + (this.tooltipDirection)), 'vue-slider-tooltip']
    },
    isDisabled: function isDisabled () {
      return this.eventType === 'none' ? true : this.disabled
    },
    disabledClass: function disabledClass () {
      return this.disabled ? 'vue-slider-disabled' : ''
    },
    stateClass: function stateClass () {
      return {
        'vue-slider-state-process-drag': this.processFlag,
        'vue-slider-state-drag': this.flag && !this.processFlag && !this.keydownFlag,
        'vue-slider-state-focus': this.focusFlag
      }
    },
    isRange: function isRange () {
      return Array.isArray(this.value)
    },
    slider: function slider () {
      return this.isRange ? [this.$refs.dot0, this.$refs.dot1] : this.$refs.dot
    },
    minimum: function minimum () {
      return this.data ? 0 : this.min
    },
    val: {
      get: function get () {
        return this.data ? (this.isRange ? [this.data[this.currentValue[0]], this.data[this.currentValue[1]]] : this.data[this.currentValue]) : this.currentValue
      },
      set: function set (val) {
        if (this.data) {
          if (this.isRange) {
            var index0 = this.data.indexOf(val[0]);
            var index1 = this.data.indexOf(val[1]);
            if (index0 > -1 && index1 > -1) {
              this.currentValue = [index0, index1];
            }
          } else {
            var index = this.data.indexOf(val);
            if (index > -1) {
              this.currentValue = index;
            }
          }
        } else {
          this.currentValue = val;
        }
      }
    },
    currentIndex: function currentIndex () {
      if (this.isRange) {
        return this.data ? this.currentValue : [(this.currentValue[0] - this.minimum) / this.spacing, (this.currentValue[1] - this.minimum) / this.spacing]
      } else {
        return (this.currentValue - this.minimum) / this.spacing
      }
    },
    indexRange: function indexRange () {
      if (this.isRange) {
        return this.currentIndex
      } else {
        return [0, this.currentIndex]
      }
    },
    maximum: function maximum () {
      return this.data ? (this.data.length - 1) : this.max
    },
    multiple: function multiple () {
      var decimals = ("" + (this.interval)).split('.')[1];
      return decimals ? Math.pow(10, decimals.length) : 1
    },
    spacing: function spacing () {
      return this.data ? 1 : this.interval
    },
    total: function total () {
      if (this.data) {
        return this.data.length - 1
      } else if (Math.floor((this.maximum - this.minimum) * this.multiple) % (this.interval * this.multiple) !== 0) {
        this.printError('Prop[interval] is illegal, Please make sure that the interval can be divisible');
      }
      return (this.maximum - this.minimum) / this.interval
    },
    gap: function gap () {
      return this.size / this.total
    },
    position: function position () {
      return this.isRange ? [(this.currentValue[0] - this.minimum) / this.spacing * this.gap, (this.currentValue[1] - this.minimum) / this.spacing * this.gap] : ((this.currentValue - this.minimum) / this.spacing * this.gap)
    },
    limit: function limit () {
      return this.isRange ? this.fixed ? [[0, (this.maximum - this.fixedValue * this.spacing) / this.spacing * this.gap], [(this.minimum + this.fixedValue * this.spacing) / this.spacing * this.gap, this.size]] : [[0, this.position[1]], [this.position[0], this.size]] : [0, this.size]
    },
    valueLimit: function valueLimit () {
      return this.isRange ? this.fixed ? [[this.minimum, this.maximum - this.fixedValue * this.spacing], [this.minimum + this.fixedValue * this.spacing, this.maximum]] : [[this.minimum, this.currentValue[1]], [this.currentValue[0], this.maximum]] : [this.minimum, this.maximum]
    },
    idleSlider: function idleSlider () {
      return this.currentSlider === 0 ? 1 : 0
    },
    wrapStyles: function wrapStyles () {
      return this.direction === 'vertical' ? {
        height: typeof this.height === 'number' ? ((this.height) + "px") : this.height,
        padding: ((this.dotHeightVal / 2) + "px " + (this.dotWidthVal / 2) + "px")
      } : {
        width: typeof this.width === 'number' ? ((this.width) + "px") : this.width,
        padding: ((this.dotHeightVal / 2) + "px " + (this.dotWidthVal / 2) + "px")
      }
    },
    sliderStyles: function sliderStyles () {
      if (Array.isArray(this.sliderStyle)) {
        return this.isRange ? this.sliderStyle : this.sliderStyle[1]
      } else if (typeof this.sliderStyle === 'function') {
        return this.sliderStyle(this.val, this.currentIndex)
      } else {
        return this.isRange ? [this.sliderStyle, this.sliderStyle] : this.sliderStyle
      }
    },
    focusStyles: function focusStyles () {
      if (Array.isArray(this.focusStyle)) {
        return this.isRange ? this.focusStyle : this.focusStyle[1]
      } else if (typeof this.focusStyle === 'function') {
        return this.focusStyle(this.val, this.currentIndex)
      } else {
        return this.isRange ? [this.focusStyle, this.focusStyle] : this.focusStyle
      }
    },
    tooltipStyles: function tooltipStyles () {
      if (Array.isArray(this.tooltipStyle)) {
        return this.isRange ? this.tooltipStyle : this.tooltipStyle[1]
      } else if (typeof this.tooltipStyle === 'function') {
        return this.tooltipStyle(this.val, this.currentIndex)
      } else {
        return this.isRange ? [this.tooltipStyle, this.tooltipStyle] : this.tooltipStyle
      }
    },
    elemStyles: function elemStyles () {
      return this.direction === 'vertical' ? {
        width: ((this.width) + "px"),
        height: '100%'
      } : {
        height: ((this.height) + "px")
      }
    },
    dotStyles: function dotStyles () {
      return this.direction === 'vertical' ? {
        width: ((this.dotWidthVal) + "px"),
        height: ((this.dotHeightVal) + "px"),
        left: (((-(this.dotWidthVal - this.width) / 2)) + "px")
      } : {
        width: ((this.dotWidthVal) + "px"),
        height: ((this.dotHeightVal) + "px"),
        top: (((-(this.dotHeightVal - this.height) / 2)) + "px")
      }
    },
    piecewiseDotStyle: function piecewiseDotStyle () {
      return this.direction === 'vertical' ? {
        width: ((this.width) + "px"),
        height: ((this.width) + "px")
      } : {
        width: ((this.height) + "px"),
        height: ((this.height) + "px")
      }
    },
    piecewiseDotWrap: function piecewiseDotWrap () {
      var this$1 = this;

      if (!this.piecewise && !this.piecewiseLabel) {
        return false
      }

      var arr = [];
      for (var i = 0; i <= this.total; i++) {
        var style = this$1.direction === 'vertical' ? {
          bottom: ((this$1.gap * i - this$1.width / 2) + "px"),
          left: 0
        } : {
          left: ((this$1.gap * i - this$1.height / 2) + "px"),
          top: 0
        };
        var index = this$1.reverse ? (this$1.total - i) : i;
        var label = this$1.data ? this$1.data[index] : (this$1.spacing * index) + this$1.min;
        arr.push({
          style: style,
          label: this$1.formatter ? this$1.formatting(label) : label,
          inRange: index >= this$1.indexRange[0] && index <= this$1.indexRange[1]
        });
      }
      return arr
    }
  },
  watch: {
    value: function value (val) {
      this.flag || this.setValue(val, true);
    },
    max: function max (val) {
      if (val < this.min) {
        return this.printError('The maximum value can not be less than the minimum value.')
      }

      var resetVal = this.limitValue(this.val);
      this.setValue(resetVal);
      this.refresh();
    },
    min: function min (val) {
      if (val > this.max) {
        return this.printError('The minimum value can not be greater than the maximum value.')
      }

      var resetVal = this.limitValue(this.val);
      this.setValue(resetVal);
      this.refresh();
    },
    show: function show (bool) {
      var this$1 = this;

      if (bool && !this.size) {
        this.$nextTick(function () {
          this$1.refresh();
        });
      }
    },
    fixed: function fixed () {
      this.computedFixedValue();
    }
  },
  methods: {
    bindEvents: function bindEvents () {
      document.addEventListener('touchmove', this.moving, {passive: false});
      document.addEventListener('touchend', this.moveEnd, {passive: false});
      document.addEventListener('mousedown', this.blurSlider);
      document.addEventListener('mousemove', this.moving);
      document.addEventListener('mouseup', this.moveEnd);
      document.addEventListener('mouseleave', this.moveEnd);
      document.addEventListener('keydown', this.handleKeydown);
      document.addEventListener('keyup', this.handleKeyup);
      window.addEventListener('resize', this.refresh);
    },
    unbindEvents: function unbindEvents () {
      document.removeEventListener('touchmove', this.moving);
      document.removeEventListener('touchend', this.moveEnd);
      document.removeEventListener('mousedown', this.blurSlider);
      document.removeEventListener('mousemove', this.moving);
      document.removeEventListener('mouseup', this.moveEnd);
      document.removeEventListener('mouseleave', this.moveEnd);
      document.removeEventListener('keydown', this.handleKeydown);
      document.removeEventListener('keyup', this.handleKeyup);
      window.removeEventListener('resize', this.refresh);
    },
    handleKeydown: function handleKeydown (e) {
      if (!this.useKeyboard || !this.focusFlag) {
        return false
      }
      switch (e.keyCode) {
      case 37:
      case 40:
        e.preventDefault();
        this.keydownFlag = true;
        this.flag = true;
        this.changeFocusSlider(this.actionsKeyboard[0]);
        break
      case 38:
      case 39:
        e.preventDefault();
        this.keydownFlag = true;
        this.flag = true;
        this.changeFocusSlider(this.actionsKeyboard[1]);
        break
      }
    },
    handleKeyup: function handleKeyup () {
      if (this.keydownFlag) {
        this.keydownFlag = false;
        this.flag = false;
      }
    },
    changeFocusSlider: function changeFocusSlider (fn) {
      var this$1 = this;

      if (this.isRange) {
        var arr = this.currentIndex.map(function (index, i) {
          if (i === this$1.focusSlider || this$1.fixed) {
            var val = fn(index);
            var range = this$1.fixed ? this$1.valueLimit[i] : [this$1.minimum, this$1.maximum];
            if (val <= range[1] && val >= range[0]) {
              return val
            }
          }
          return index
        });
        if (arr[0] > arr[1]) {
          this.focusSlider = this.focusSlider === 0 ? 1 : 0;
          arr = arr.reverse();
        }
        this.setIndex(arr);
      } else {
        this.setIndex(fn(this.currentIndex));
      }
    },
    blurSlider: function blurSlider (e) {
      var dot = this.isRange ? this.$refs[("dot" + (this.focusSlider))] : this.$refs.dot;
      if (!dot || dot === e.target) {
        return false
      }
      this.focusFlag = false;
    },
    formatting: function formatting (value) {
      return typeof this.formatter === 'string' ? this.formatter.replace(/\{value\}/, value) : this.formatter(value)
    },
    getPos: function getPos (e) {
      this.realTime && this.getStaticData();
      return this.direction === 'vertical' ? (this.reverse ? (e.pageY - this.offset) : (this.size - (e.pageY - this.offset))) : (this.reverse ? (this.size - (e.clientX - this.offset)) : (e.clientX - this.offset))
    },
    processClick: function processClick (e) {
      if (this.fixed) {
        e.stopPropagation();
      }
    },
    wrapClick: function wrapClick (e) {
      if (this.isDisabled || !this.clickable || this.processFlag) { return false }
      var pos = this.getPos(e);
      if (this.isRange) {
        this.currentSlider = pos > ((this.position[1] - this.position[0]) / 2 + this.position[0]) ? 1 : 0;
      }
      this.setValueOnPos(pos);
    },
    moveStart: function moveStart (e, index, isProcess) {
      if ( index === void 0 ) index = 0;

      if (this.isDisabled) {
        return false
      }
      if (this.stopPropagation) {
        e.stopPropagation();
      }
      if (this.isRange) {
        this.currentSlider = index;

        if (isProcess) {
          if (!this.processDragable) {
            return false
          }
          this.processFlag = true;
          this.processSign = {
            pos: this.position,
            start: this.getPos((e.targetTouches && e.targetTouches[0]) ? e.targetTouches[0] : e)
          };
        }
      }
      if (!isProcess && this.useKeyboard) {
        this.focusFlag = true;
        this.focusSlider = index;
      }
      this.flag = true;
      this.$emit('drag-start', this);
    },
    moving: function moving (e) {
      if (this.stopPropagation) {
        e.stopPropagation();
      }

      if (!this.flag) { return false }
      e.preventDefault();

      if (e.targetTouches && e.targetTouches[0]) { e = e.targetTouches[0]; }
      if (this.processFlag) {
        this.currentSlider = 0;
        this.setValueOnPos(this.processSign.pos[0] + this.getPos(e) - this.processSign.start, true);
        this.currentSlider = 1;
        this.setValueOnPos(this.processSign.pos[1] + this.getPos(e) - this.processSign.start, true);
      } else {
        this.setValueOnPos(this.getPos(e), true);
      }
    },
    moveEnd: function moveEnd (e) {
      var this$1 = this;

      if (this.stopPropagation) {
        e.stopPropagation();
      }
      if (this.flag) {
        this.$emit('drag-end', this);
        if (this.lazy && this.isDiff(this.val, this.value)) {
          this.syncValue();
        }
      } else {
        return false
      }
      this.flag = false;
      window.setTimeout(function () {
        this$1.processFlag = false;
      }, 0);
      this.setPosition();
    },
    setValueOnPos: function setValueOnPos (pos, isDrag) {
      var range = this.isRange ? this.limit[this.currentSlider] : this.limit;
      var valueRange = this.isRange ? this.valueLimit[this.currentSlider] : this.valueLimit;
      if (pos >= range[0] && pos <= range[1]) {
        this.setTransform(pos);
        var v = (Math.round(pos / this.gap) * (this.spacing * this.multiple) + (this.minimum * this.multiple)) / this.multiple;
        this.setCurrentValue(v, isDrag);
        if (this.isRange && this.fixed) {
          this.setTransform(pos + ((this.fixedValue * this.gap) * (this.currentSlider === 0 ? 1 : -1)), true);
          this.setCurrentValue(v + (this.fixedValue * this.spacing * (this.currentSlider === 0 ? 1 : -1)), isDrag, true);
        }
      } else if (pos < range[0]) {
        this.setTransform(range[0]);
        this.setCurrentValue(valueRange[0]);
        if (this.isRange && this.fixed) {
          this.setTransform(this.limit[this.idleSlider][0], true);
          this.setCurrentValue(this.valueLimit[this.idleSlider][0], isDrag, true);
        } else if (!this.fixed && this.currentSlider === 1) {
          this.focusSlider = 0;
          this.currentSlider = 0;
        }
      } else {
        this.setTransform(range[1]);
        this.setCurrentValue(valueRange[1]);
        if (this.isRange && this.fixed) {
          this.setTransform(this.limit[this.idleSlider][1], true);
          this.setCurrentValue(this.valueLimit[this.idleSlider][1], isDrag, true);
        } else if (!this.fixed && this.currentSlider === 0) {
          this.focusSlider = 1;
          this.currentSlider = 1;
        }
      }
    },
    isDiff: function isDiff (a, b) {
      if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
        return true
      } else if (Array.isArray(a) && a.length === b.length) {
        return a.some(function (v, i) { return v !== b[i]; })
      }
      return a !== b
    },
    setCurrentValue: function setCurrentValue (val, bool, isIdleSlider) {
      var slider = isIdleSlider ? this.idleSlider : this.currentSlider;
      if (val < this.minimum || val > this.maximum) { return false }
      if (this.isRange) {
        if (this.isDiff(this.currentValue[slider], val)) {
          this.currentValue.splice(slider, 1, val);
          if (!this.lazy || !this.flag) {
            this.syncValue();
          }
        }
      } else if (this.isDiff(this.currentValue, val)) {
        this.currentValue = val;
        if (!this.lazy || !this.flag) {
          this.syncValue();
        }
      }
      bool || this.setPosition();
    },
    setIndex: function setIndex (val) {
      if (Array.isArray(val) && this.isRange) {
        var value;
        if (this.data) {
          value = [this.data[val[0]], this.data[val[1]]];
        } else {
          value = [this.spacing * val[0] + this.minimum, this.spacing * val[1] + this.minimum];
        }
        this.setValue(value);
      } else {
        val = this.spacing * val + this.minimum;
        if (this.isRange) {
          this.currentSlider = val > ((this.currentValue[1] - this.currentValue[0]) / 2 + this.currentValue[0]) ? 1 : 0;
        }
        this.setCurrentValue(val);
      }
    },
    setValue: function setValue (val, noCb, speed) {
      var this$1 = this;

      if (this.isDiff(this.val, val)) {
        var resetVal = this.limitValue(val);
        this.val = this.isRange ? resetVal.concat() : resetVal;
        this.computedFixedValue();
        this.syncValue(noCb);
      }

      this.$nextTick(function () { return this$1.setPosition(speed); });
    },
    computedFixedValue: function computedFixedValue () {
      if (!this.fixed) {
        this.fixedValue = 0;
        return false
      }

      this.fixedValue = this.currentIndex[1] - this.currentIndex[0];
    },
    setPosition: function setPosition (speed) {
      this.flag || this.setTransitionTime(speed === undefined ? this.speed : speed);
      if (this.isRange) {
        this.setTransform(this.position[0], this.currentSlider === 1);
        this.setTransform(this.position[1], this.currentSlider === 0);
      } else {
        this.setTransform(this.position);
      }
      this.flag || this.setTransitionTime(0);
    },
    setTransform: function setTransform (val, isIdleSlider) {
      var slider = isIdleSlider ? this.idleSlider : this.currentSlider;
      var value = roundToDPR((this.direction === 'vertical' ? ((this.dotHeightVal / 2) - val) : (val - (this.dotWidthVal / 2))) * (this.reverse ? -1 : 1));
      var translateValue = this.direction === 'vertical' ? ("translateY(" + value + "px)") : ("translateX(" + value + "px)");
      var processSize = this.fixed ? ((this.fixedValue * this.gap) + "px") : ((slider === 0 ? this.position[1] - val : val - this.position[0]) + "px");
      var processPos = this.fixed ? ((slider === 0 ? val : (val - this.fixedValue * this.gap)) + "px") : ((slider === 0 ? val : this.position[0]) + "px");
      if (this.isRange) {
        this.slider[slider].style.transform = translateValue;
        this.slider[slider].style.WebkitTransform = translateValue;
        this.slider[slider].style.msTransform = translateValue;
        if (this.direction === 'vertical') {
          this.$refs.process.style.height = processSize;
          this.$refs.process.style[this.reverse ? 'top' : 'bottom'] = processPos;
        } else {
          this.$refs.process.style.width = processSize;
          this.$refs.process.style[this.reverse ? 'right' : 'left'] = processPos;
        }
      } else {
        this.slider.style.transform = translateValue;
        this.slider.style.WebkitTransform = translateValue;
        this.slider.style.msTransform = translateValue;
        if (this.direction === 'vertical') {
          this.$refs.process.style.height = val + "px";
          this.$refs.process.style[this.reverse ? 'top' : 'bottom'] = 0;
        } else {
          this.$refs.process.style.width = val + "px";
          this.$refs.process.style[this.reverse ? 'right' : 'left'] = 0;
        }
      }
    },
    setTransitionTime: function setTransitionTime (time) {
      var this$1 = this;

      // In order to avoid browser merge style and modify together
      time || this.$refs.process.offsetWidth;

      if (this.isRange) {
        for (var i = 0; i < this.slider.length; i++) {
          this$1.slider[i].style.transitionDuration = time + "s";
          this$1.slider[i].style.WebkitTransitionDuration = time + "s";
        }
        this.$refs.process.style.transitionDuration = time + "s";
        this.$refs.process.style.WebkitTransitionDuration = time + "s";
      } else {
        this.slider.style.transitionDuration = time + "s";
        this.slider.style.WebkitTransitionDuration = time + "s";
        this.$refs.process.style.transitionDuration = time + "s";
        this.$refs.process.style.WebkitTransitionDuration = time + "s";
      }
    },
    limitValue: function limitValue (val) {
      var this$1 = this;

      if (this.data) {
        return val
      }

      var inRange = function (v) {
        if (v < this$1.min) {
          this$1.printError(("The value of the slider is " + val + ", the minimum value is " + (this$1.min) + ", the value of this slider can not be less than the minimum value"));
          return this$1.min
        } else if (v > this$1.max) {
          this$1.printError(("The value of the slider is " + val + ", the maximum value is " + (this$1.max) + ", the value of this slider can not be greater than the maximum value"));
          return this$1.max
        }
        return v
      };

      if (this.isRange) {
        return val.map(function (v) { return inRange(v); })
      } else {
        return inRange(val)
      }
    },
    syncValue: function syncValue (noCb) {
      var val = this.isRange ? this.val.concat() : this.val;
      this.$emit('input', val);
      noCb || this.$emit('callback', val);
    },
    getValue: function getValue () {
      return this.val
    },
    getIndex: function getIndex () {
      return this.currentIndex
    },
    getStaticData: function getStaticData () {
      if (this.$refs.elem) {
        this.size = this.direction === 'vertical' ? this.$refs.elem.offsetHeight : this.$refs.elem.offsetWidth;
        this.offset = this.direction === 'vertical' ? (this.$refs.elem.getBoundingClientRect().top + window.pageYOffset || document.documentElement.scrollTop) : this.$refs.elem.getBoundingClientRect().left;
      }
    },
    refresh: function refresh () {
      if (this.$refs.elem) {
        this.getStaticData();
        this.computedFixedValue();
        this.setPosition();
      }
    },
    printError: function printError (msg) {
      if (this.debug) {
        console.error(("[VueSlider error]: " + msg));
      }
    }
  },
  mounted: function mounted () {
    var this$1 = this;

    this.isComponentExists = true;

    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return this.printError('window or document is undefined, can not be initialization.')
    }

    this.$nextTick(function () {
      if (this$1.isComponentExists) {
        this$1.getStaticData();
        this$1.setValue(this$1.limitValue(this$1.value), true, 0);
        this$1.bindEvents();
      }
    });
  },
  beforeDestroy: function beforeDestroy () {
    this.isComponentExists = false;
    this.unbindEvents();
  }
}

export default vue2Slider;
