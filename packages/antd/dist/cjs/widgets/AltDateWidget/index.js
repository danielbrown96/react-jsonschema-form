"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@rjsf/core");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _col = _interopRequireDefault(require("antd/lib/col"));

var _row = _interopRequireDefault(require("antd/lib/row"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var pad = _core.utils.pad,
    parseDateString = _core.utils.parseDateString,
    toDateString = _core.utils.toDateString;

var rangeOptions = function rangeOptions(start, stop) {
  var options = [];

  for (var i = start; i <= stop; i++) {
    options.push({
      value: i,
      label: pad(i, 2)
    });
  }

  return options;
};

var readyForChange = function readyForChange(state) {
  return Object.keys(state).every(function (key) {
    return typeof state[key] !== "undefined" && state[key] !== -1;
  });
};

var AltDateWidget = function AltDateWidget(_ref) {
  var autofocus = _ref.autofocus,
      disabled = _ref.disabled,
      formContext = _ref.formContext,
      id = _ref.id,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      options = _ref.options,
      readonly = _ref.readonly,
      registry = _ref.registry,
      showTime = _ref.showTime,
      value = _ref.value;
  var SelectWidget = registry.widgets.SelectWidget;
  var _formContext$rowGutte = formContext.rowGutter,
      rowGutter = _formContext$rowGutte === void 0 ? 24 : _formContext$rowGutte;

  var _useState = (0, _react.useState)(parseDateString(value, showTime)),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  (0, _react.useEffect)(function () {
    setState(parseDateString(value, showTime));
  }, [showTime, value]);

  var handleChange = function handleChange(property, nextValue) {
    var nextState = _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, property, typeof nextValue === "undefined" ? -1 : nextValue));

    if (readyForChange(nextState)) {
      onChange(toDateString(nextState, showTime));
    } else {
      setState(nextState);
    }
  };

  var handleNow = function handleNow(event) {
    event.preventDefault();

    if (disabled || readonly) {
      return;
    }

    var nextState = parseDateString(new Date().toJSON(), showTime);
    onChange(toDateString(nextState, showTime));
  };

  var handleClear = function handleClear(event) {
    event.preventDefault();

    if (disabled || readonly) {
      return;
    }

    onChange(undefined);
  };

  var dateElementProps = function dateElementProps() {
    var year = state.year,
        month = state.month,
        day = state.day,
        hour = state.hour,
        minute = state.minute,
        second = state.second;
    var data = [{
      type: "year",
      range: options.yearsRange,
      value: year
    }, {
      type: "month",
      range: [1, 12],
      value: month
    }, {
      type: "day",
      range: [1, 31],
      value: day
    }];

    if (showTime) {
      data.push({
        type: "hour",
        range: [0, 23],
        value: hour
      }, {
        type: "minute",
        range: [0, 59],
        value: minute
      }, {
        type: "second",
        range: [0, 59],
        value: second
      });
    }

    return data;
  };

  var renderDateElement = function renderDateElement(elemProps) {
    return /*#__PURE__*/_react.default.createElement(SelectWidget, {
      autofocus: elemProps.autofocus,
      className: "form-control",
      disabled: elemProps.disabled,
      id: elemProps.id,
      onBlur: elemProps.onBlur,
      onChange: function onChange(elemValue) {
        return elemProps.select(elemProps.type, elemValue);
      },
      onFocus: elemProps.onFocus,
      options: {
        enumOptions: rangeOptions(elemProps.range[0], elemProps.range[1])
      },
      placeholder: elemProps.type,
      readonly: elemProps.readonly,
      schema: {
        type: "integer"
      },
      value: elemProps.value
    });
  };

  return /*#__PURE__*/_react.default.createElement(_row.default, {
    gutter: [Math.floor(rowGutter / 2), Math.floor(rowGutter / 2)]
  }, dateElementProps().map(function (elemProps, i) {
    var elemId = id + "_" + elemProps.type;
    return /*#__PURE__*/_react.default.createElement(_col.default, {
      flex: "88px",
      key: elemId
    }, renderDateElement(_objectSpread(_objectSpread({}, elemProps), {}, {
      autofocus: autofocus && i === 0,
      disabled: disabled,
      id: elemId,
      onBlur: onBlur,
      onFocus: onFocus,
      readonly: readonly,
      registry: registry,
      select: handleChange,
      // NOTE: antd components accept -1 rather than issue a warning
      // like material-ui, so we need to convert -1 to undefined here.
      value: elemProps.value < 0 ? undefined : elemProps.value
    })));
  }), !options.hideNowButton && /*#__PURE__*/_react.default.createElement(_col.default, {
    flex: "88px"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    block: true,
    className: "btn-now",
    onClick: handleNow,
    type: "primary"
  }, "Now")), !options.hideClearButton && /*#__PURE__*/_react.default.createElement(_col.default, {
    flex: "88px"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    block: true,
    className: "btn-clear",
    danger: true,
    onClick: handleClear,
    type: "primary"
  }, "Clear")));
};

AltDateWidget.defaultProps = {
  autofocus: false,
  disabled: false,
  options: {
    yearsRange: [1900, new Date().getFullYear() + 2]
  },
  readonly: false,
  showTime: false
};
var _default = AltDateWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93aWRnZXRzL0FsdERhdGVXaWRnZXQvaW5kZXguanMiXSwibmFtZXMiOlsicGFkIiwidXRpbHMiLCJwYXJzZURhdGVTdHJpbmciLCJ0b0RhdGVTdHJpbmciLCJyYW5nZU9wdGlvbnMiLCJzdGFydCIsInN0b3AiLCJvcHRpb25zIiwiaSIsInB1c2giLCJ2YWx1ZSIsImxhYmVsIiwicmVhZHlGb3JDaGFuZ2UiLCJzdGF0ZSIsIk9iamVjdCIsImtleXMiLCJldmVyeSIsImtleSIsIkFsdERhdGVXaWRnZXQiLCJhdXRvZm9jdXMiLCJkaXNhYmxlZCIsImZvcm1Db250ZXh0IiwiaWQiLCJvbkJsdXIiLCJvbkNoYW5nZSIsIm9uRm9jdXMiLCJyZWFkb25seSIsInJlZ2lzdHJ5Iiwic2hvd1RpbWUiLCJTZWxlY3RXaWRnZXQiLCJ3aWRnZXRzIiwicm93R3V0dGVyIiwic2V0U3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJwcm9wZXJ0eSIsIm5leHRWYWx1ZSIsIm5leHRTdGF0ZSIsImhhbmRsZU5vdyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJEYXRlIiwidG9KU09OIiwiaGFuZGxlQ2xlYXIiLCJ1bmRlZmluZWQiLCJkYXRlRWxlbWVudFByb3BzIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsImRhdGEiLCJ0eXBlIiwicmFuZ2UiLCJ5ZWFyc1JhbmdlIiwicmVuZGVyRGF0ZUVsZW1lbnQiLCJlbGVtUHJvcHMiLCJlbGVtVmFsdWUiLCJzZWxlY3QiLCJlbnVtT3B0aW9ucyIsIk1hdGgiLCJmbG9vciIsIm1hcCIsImVsZW1JZCIsImhpZGVOb3dCdXR0b24iLCJoaWRlQ2xlYXJCdXR0b24iLCJkZWZhdWx0UHJvcHMiLCJnZXRGdWxsWWVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLEcsR0FBdUND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M0JFLEVBQUFBLFFBQVEsRUFBRTtBQVBpQixDQUE3QjtlQVVlVixhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSAnQHJqc2YvY29yZSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnYW50ZC9saWIvYnV0dG9uJztcclxuaW1wb3J0IENvbCBmcm9tICdhbnRkL2xpYi9jb2wnO1xyXG5pbXBvcnQgUm93IGZyb20gJ2FudGQvbGliL3Jvdyc7XHJcblxyXG5jb25zdCB7IHBhZCwgcGFyc2VEYXRlU3RyaW5nLCB0b0RhdGVTdHJpbmcgfSA9IHV0aWxzO1xyXG5cclxuY29uc3QgcmFuZ2VPcHRpb25zID0gKHN0YXJ0LCBzdG9wKSA9PiB7XHJcbiAgbGV0IG9wdGlvbnMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gc3RvcDsgaSsrKSB7XHJcbiAgICBvcHRpb25zLnB1c2goeyB2YWx1ZTogaSwgbGFiZWw6IHBhZChpLCAyKSB9KTtcclxuICB9XHJcbiAgcmV0dXJuIG9wdGlvbnM7XHJcbn07XHJcblxyXG5jb25zdCByZWFkeUZvckNoYW5nZSA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhzdGF0ZSkuZXZlcnkoXHJcbiAgICBrZXkgPT4gdHlwZW9mIHN0YXRlW2tleV0gIT09IFwidW5kZWZpbmVkXCIgJiYgc3RhdGVba2V5XSAhPT0gLTEsXHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEFsdERhdGVXaWRnZXQgPSAoe1xyXG4gIGF1dG9mb2N1cyxcclxuICBkaXNhYmxlZCxcclxuICBmb3JtQ29udGV4dCxcclxuICBpZCxcclxuICBvbkJsdXIsXHJcbiAgb25DaGFuZ2UsXHJcbiAgb25Gb2N1cyxcclxuICBvcHRpb25zLFxyXG4gIHJlYWRvbmx5LFxyXG4gIHJlZ2lzdHJ5LFxyXG4gIHNob3dUaW1lLFxyXG4gIHZhbHVlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgeyBTZWxlY3RXaWRnZXQgfSA9IHJlZ2lzdHJ5LndpZGdldHM7XHJcbiAgY29uc3QgeyByb3dHdXR0ZXIgPSAyNCB9ID0gZm9ybUNvbnRleHQ7XHJcblxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUocGFyc2VEYXRlU3RyaW5nKHZhbHVlLCBzaG93VGltZSkpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0U3RhdGUocGFyc2VEYXRlU3RyaW5nKHZhbHVlLCBzaG93VGltZSkpO1xyXG4gIH0sIFtzaG93VGltZSwgdmFsdWVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHByb3BlcnR5LCBuZXh0VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IG5leHRTdGF0ZSA9IHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIFtwcm9wZXJ0eV06IHR5cGVvZiBuZXh0VmFsdWUgPT09IFwidW5kZWZpbmVkXCIgPyAtMSA6IG5leHRWYWx1ZSxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHJlYWR5Rm9yQ2hhbmdlKG5leHRTdGF0ZSkpIHtcclxuICAgICAgb25DaGFuZ2UodG9EYXRlU3RyaW5nKG5leHRTdGF0ZSwgc2hvd1RpbWUpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFN0YXRlKG5leHRTdGF0ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTm93ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGRpc2FibGVkIHx8IHJlYWRvbmx5KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5leHRTdGF0ZSA9IHBhcnNlRGF0ZVN0cmluZyhuZXcgRGF0ZSgpLnRvSlNPTigpLCBzaG93VGltZSk7XHJcbiAgICBvbkNoYW5nZSh0b0RhdGVTdHJpbmcobmV4dFN0YXRlLCBzaG93VGltZSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsZWFyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGRpc2FibGVkIHx8IHJlYWRvbmx5KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlKHVuZGVmaW5lZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF0ZUVsZW1lbnRQcm9wcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQgfSA9IHN0YXRlO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBbXHJcbiAgICAgIHsgdHlwZTogXCJ5ZWFyXCIsIHJhbmdlOiBvcHRpb25zLnllYXJzUmFuZ2UsIHZhbHVlOiB5ZWFyIH0sXHJcbiAgICAgIHsgdHlwZTogXCJtb250aFwiLCByYW5nZTogWzEsIDEyXSwgdmFsdWU6IG1vbnRoIH0sXHJcbiAgICAgIHsgdHlwZTogXCJkYXlcIiwgcmFuZ2U6IFsxLCAzMV0sIHZhbHVlOiBkYXkgfSxcclxuICAgIF07XHJcblxyXG4gICAgaWYgKHNob3dUaW1lKSB7XHJcbiAgICAgIGRhdGEucHVzaChcclxuICAgICAgICB7IHR5cGU6IFwiaG91clwiLCByYW5nZTogWzAsIDIzXSwgdmFsdWU6IGhvdXIgfSxcclxuICAgICAgICB7IHR5cGU6IFwibWludXRlXCIsIHJhbmdlOiBbMCwgNTldLCB2YWx1ZTogbWludXRlIH0sXHJcbiAgICAgICAgeyB0eXBlOiBcInNlY29uZFwiLCByYW5nZTogWzAsIDU5XSwgdmFsdWU6IHNlY29uZCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRGF0ZUVsZW1lbnQgPSAoZWxlbVByb3BzKSA9PiAoXHJcbiAgICA8U2VsZWN0V2lkZ2V0XHJcbiAgICAgIGF1dG9mb2N1cz17ZWxlbVByb3BzLmF1dG9mb2N1c31cclxuICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgZGlzYWJsZWQ9e2VsZW1Qcm9wcy5kaXNhYmxlZH1cclxuICAgICAgaWQ9e2VsZW1Qcm9wcy5pZH1cclxuICAgICAgb25CbHVyPXtlbGVtUHJvcHMub25CbHVyfVxyXG4gICAgICBvbkNoYW5nZT17KGVsZW1WYWx1ZSkgPT4gZWxlbVByb3BzLnNlbGVjdChlbGVtUHJvcHMudHlwZSwgZWxlbVZhbHVlKX1cclxuICAgICAgb25Gb2N1cz17ZWxlbVByb3BzLm9uRm9jdXN9XHJcbiAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICBlbnVtT3B0aW9uczogcmFuZ2VPcHRpb25zKGVsZW1Qcm9wcy5yYW5nZVswXSwgZWxlbVByb3BzLnJhbmdlWzFdKSxcclxuICAgICAgfX1cclxuICAgICAgcGxhY2Vob2xkZXI9e2VsZW1Qcm9wcy50eXBlfVxyXG4gICAgICByZWFkb25seT17ZWxlbVByb3BzLnJlYWRvbmx5fVxyXG4gICAgICBzY2hlbWE9e3sgdHlwZTogXCJpbnRlZ2VyXCIgfX1cclxuICAgICAgdmFsdWU9e2VsZW1Qcm9wcy52YWx1ZX1cclxuICAgIC8+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSb3cgZ3V0dGVyPXtbTWF0aC5mbG9vcihyb3dHdXR0ZXIgLyAyKSwgTWF0aC5mbG9vcihyb3dHdXR0ZXIgLyAyKV19PlxyXG4gICAgICB7ZGF0ZUVsZW1lbnRQcm9wcygpLm1hcCgoZWxlbVByb3BzLCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbUlkID0gaWQgKyBcIl9cIiArIGVsZW1Qcm9wcy50eXBlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8Q29sIGZsZXg9XCI4OHB4XCIga2V5PXtlbGVtSWR9PlxyXG4gICAgICAgICAgICB7cmVuZGVyRGF0ZUVsZW1lbnQoe1xyXG4gICAgICAgICAgICAgIC4uLmVsZW1Qcm9wcyxcclxuICAgICAgICAgICAgICBhdXRvZm9jdXM6IGF1dG9mb2N1cyAmJiBpID09PSAwLFxyXG4gICAgICAgICAgICAgIGRpc2FibGVkLFxyXG4gICAgICAgICAgICAgIGlkOiBlbGVtSWQsXHJcbiAgICAgICAgICAgICAgb25CbHVyLFxyXG4gICAgICAgICAgICAgIG9uRm9jdXMsXHJcbiAgICAgICAgICAgICAgcmVhZG9ubHksXHJcbiAgICAgICAgICAgICAgcmVnaXN0cnksXHJcbiAgICAgICAgICAgICAgc2VsZWN0OiBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgLy8gTk9URTogYW50ZCBjb21wb25lbnRzIGFjY2VwdCAtMSByYXRoZXIgdGhhbiBpc3N1ZSBhIHdhcm5pbmdcclxuICAgICAgICAgICAgICAvLyBsaWtlIG1hdGVyaWFsLXVpLCBzbyB3ZSBuZWVkIHRvIGNvbnZlcnQgLTEgdG8gdW5kZWZpbmVkIGhlcmUuXHJcbiAgICAgICAgICAgICAgdmFsdWU6IGVsZW1Qcm9wcy52YWx1ZSA8IDAgPyB1bmRlZmluZWQgOiBlbGVtUHJvcHMudmFsdWUsXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICAgIHshb3B0aW9ucy5oaWRlTm93QnV0dG9uICYmIChcclxuICAgICAgICA8Q29sIGZsZXg9XCI4OHB4XCI+XHJcbiAgICAgICAgICA8QnV0dG9uIGJsb2NrIGNsYXNzTmFtZT1cImJ0bi1ub3dcIiBvbkNsaWNrPXtoYW5kbGVOb3d9IHR5cGU9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIE5vd1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICl9XHJcbiAgICAgIHshb3B0aW9ucy5oaWRlQ2xlYXJCdXR0b24gJiYgKFxyXG4gICAgICAgIDxDb2wgZmxleD1cIjg4cHhcIj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgYmxvY2tcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWNsZWFyXCJcclxuICAgICAgICAgICAgZGFuZ2VyXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsZWFyfVxyXG4gICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENsZWFyXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgKX1cclxuICAgIDwvUm93PlxyXG4gICk7XHJcbn07XHJcblxyXG5BbHREYXRlV2lkZ2V0LmRlZmF1bHRQcm9wcyA9IHtcclxuICBhdXRvZm9jdXM6IGZhbHNlLFxyXG4gIGRpc2FibGVkOiBmYWxzZSxcclxuICBvcHRpb25zOiB7XHJcbiAgICB5ZWFyc1JhbmdlOiBbMTkwMCwgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpICsgMl0sXHJcbiAgfSxcclxuICByZWFkb25seTogZmFsc2UsXHJcbiAgc2hvd1RpbWU6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWx0RGF0ZVdpZGdldDtcclxuIl19