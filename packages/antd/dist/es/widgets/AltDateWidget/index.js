function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useEffect, useState } from "react";
import { utils } from '@rjsf/core';
import Button from 'antd/lib/button';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
var pad = utils.pad,
    parseDateString = utils.parseDateString,
    toDateString = utils.toDateString;

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

  var _useState = useState(parseDateString(value, showTime)),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  useEffect(function () {
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
    return /*#__PURE__*/React.createElement(SelectWidget, {
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

  return /*#__PURE__*/React.createElement(Row, {
    gutter: [Math.floor(rowGutter / 2), Math.floor(rowGutter / 2)]
  }, dateElementProps().map(function (elemProps, i) {
    var elemId = id + "_" + elemProps.type;
    return /*#__PURE__*/React.createElement(Col, {
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
  }), !options.hideNowButton && /*#__PURE__*/React.createElement(Col, {
    flex: "88px"
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    className: "btn-now",
    onClick: handleNow,
    type: "primary"
  }, "Now")), !options.hideClearButton && /*#__PURE__*/React.createElement(Col, {
    flex: "88px"
  }, /*#__PURE__*/React.createElement(Button, {
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
export default AltDateWidget;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93aWRnZXRzL0FsdERhdGVXaWRnZXQvaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInV0aWxzIiwiQnV0dG9uIiwiQ29sIiwiUm93IiwicGFkIiwicGFyc2VEYXRlU3RyaW5nIiwidG9EYXRlU3RyaW5nIiwicmFuZ2VPcHRpb25zIiwic3RhcnQiLCJzdG9wIiwib3B0aW9ucyIsImkiLCJwdXNoIiwidmFsdWUiLCJsYWJlbCIsInJlYWR5Rm9yQ2hhbmdlIiwic3RhdGUiLCJPYmplY3QiLCJrZXlzIiwiZXZlcnkiLCJrZXkiLCJBbHREYXRlV2lkZ2V0IiwiYXV0b2ZvY3VzIiwiZGlzYWJsZWQiLCJmb3JtQ29udGV4dCIsImlkIiwib25CbHVyIiwib25DaGFuZ2UiLCJvbkZvY3VzIiwicmVhZG9ubHkiLCJyZWdpc3RyeSIsInNob3dUaW1lIiwiU2VsZWN0V2lkZ2V0Iiwid2lkZ2V0cyIsInJvd0d1dHRlciIsInNldFN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwicHJvcGVydHkiLCJuZXh0VmFsdWUiLCJuZXh0U3RhdGUiLCJoYW5kbGVOb3ciLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiRGF0ZSIsInRvSlNPTiIsImhhbmRsZUNsZWFyIiwidW5kZWZpbmVkIiwiZGF0ZUVsZW1lbnRQcm9wcyIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJkYXRhIiwidHlwZSIsInJhbmdlIiwieWVhcnNSYW5nZSIsInJlbmRlckRhdGVFbGVtZW50IiwiZWxlbVByb3BzIiwiZWxlbVZhbHVlIiwic2VsZWN0IiwiZW51bU9wdGlvbnMiLCJNYXRoIiwiZmxvb3IiLCJtYXAiLCJlbGVtSWQiLCJoaWRlTm93QnV0dG9uIiwiaGlkZUNsZWFyQnV0dG9uIiwiZGVmYXVsdFByb3BzIiwiZ2V0RnVsbFllYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9B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QzNCL0MsRUFBQUEsU0FBUyxFQUFFLEtBRGdCO0FBRTNCQyxFQUFBQSxRQUFRLEVBQUUsS0FGaUI7QUFHM0JiLEVBQUFBLE9BQU8sRUFBRTtBQUNQK0MsSUFBQUEsVUFBVSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQUlkLElBQUosR0FBVzJCLFdBQVgsS0FBMkIsQ0FBbEM7QUFETCxHQUhrQjtBQU0zQnpDLEVBQUFBLFFBQVEsRUFBRSxLQU5pQjtBQU8zQkUsRUFBQUEsUUFBUSxFQUFFO0FBUGlCLENBQTdCO0FBVUEsZUFBZVYsYUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyB1dGlscyB9IGZyb20gJ0ByanNmL2NvcmUnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ2FudGQvbGliL2J1dHRvbic7XHJcbmltcG9ydCBDb2wgZnJvbSAnYW50ZC9saWIvY29sJztcclxuaW1wb3J0IFJvdyBmcm9tICdhbnRkL2xpYi9yb3cnO1xyXG5cclxuY29uc3QgeyBwYWQsIHBhcnNlRGF0ZVN0cmluZywgdG9EYXRlU3RyaW5nIH0gPSB1dGlscztcclxuXHJcbmNvbnN0IHJhbmdlT3B0aW9ucyA9IChzdGFydCwgc3RvcCkgPT4ge1xyXG4gIGxldCBvcHRpb25zID0gW107XHJcbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IHN0b3A7IGkrKykge1xyXG4gICAgb3B0aW9ucy5wdXNoKHsgdmFsdWU6IGksIGxhYmVsOiBwYWQoaSwgMikgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBvcHRpb25zO1xyXG59O1xyXG5cclxuY29uc3QgcmVhZHlGb3JDaGFuZ2UgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4gT2JqZWN0LmtleXMoc3RhdGUpLmV2ZXJ5KFxyXG4gICAga2V5ID0+IHR5cGVvZiBzdGF0ZVtrZXldICE9PSBcInVuZGVmaW5lZFwiICYmIHN0YXRlW2tleV0gIT09IC0xLFxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBBbHREYXRlV2lkZ2V0ID0gKHtcclxuICBhdXRvZm9jdXMsXHJcbiAgZGlzYWJsZWQsXHJcbiAgZm9ybUNvbnRleHQsXHJcbiAgaWQsXHJcbiAgb25CbHVyLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIG9uRm9jdXMsXHJcbiAgb3B0aW9ucyxcclxuICByZWFkb25seSxcclxuICByZWdpc3RyeSxcclxuICBzaG93VGltZSxcclxuICB2YWx1ZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgU2VsZWN0V2lkZ2V0IH0gPSByZWdpc3RyeS53aWRnZXRzO1xyXG4gIGNvbnN0IHsgcm93R3V0dGVyID0gMjQgfSA9IGZvcm1Db250ZXh0O1xyXG5cclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHBhcnNlRGF0ZVN0cmluZyh2YWx1ZSwgc2hvd1RpbWUpKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFN0YXRlKHBhcnNlRGF0ZVN0cmluZyh2YWx1ZSwgc2hvd1RpbWUpKTtcclxuICB9LCBbc2hvd1RpbWUsIHZhbHVlXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChwcm9wZXJ0eSwgbmV4dFZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBuZXh0U3RhdGUgPSB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBbcHJvcGVydHldOiB0eXBlb2YgbmV4dFZhbHVlID09PSBcInVuZGVmaW5lZFwiID8gLTEgOiBuZXh0VmFsdWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChyZWFkeUZvckNoYW5nZShuZXh0U3RhdGUpKSB7XHJcbiAgICAgIG9uQ2hhbmdlKHRvRGF0ZVN0cmluZyhuZXh0U3RhdGUsIHNob3dUaW1lKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTdGF0ZShuZXh0U3RhdGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5vdyA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChkaXNhYmxlZCB8fCByZWFkb25seSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXh0U3RhdGUgPSBwYXJzZURhdGVTdHJpbmcobmV3IERhdGUoKS50b0pTT04oKSwgc2hvd1RpbWUpO1xyXG4gICAgb25DaGFuZ2UodG9EYXRlU3RyaW5nKG5leHRTdGF0ZSwgc2hvd1RpbWUpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGVhciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChkaXNhYmxlZCB8fCByZWFkb25seSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZSh1bmRlZmluZWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRhdGVFbGVtZW50UHJvcHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kIH0gPSBzdGF0ZTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICB7IHR5cGU6IFwieWVhclwiLCByYW5nZTogb3B0aW9ucy55ZWFyc1JhbmdlLCB2YWx1ZTogeWVhciB9LFxyXG4gICAgICB7IHR5cGU6IFwibW9udGhcIiwgcmFuZ2U6IFsxLCAxMl0sIHZhbHVlOiBtb250aCB9LFxyXG4gICAgICB7IHR5cGU6IFwiZGF5XCIsIHJhbmdlOiBbMSwgMzFdLCB2YWx1ZTogZGF5IH0sXHJcbiAgICBdO1xyXG5cclxuICAgIGlmIChzaG93VGltZSkge1xyXG4gICAgICBkYXRhLnB1c2goXHJcbiAgICAgICAgeyB0eXBlOiBcImhvdXJcIiwgcmFuZ2U6IFswLCAyM10sIHZhbHVlOiBob3VyIH0sXHJcbiAgICAgICAgeyB0eXBlOiBcIm1pbnV0ZVwiLCByYW5nZTogWzAsIDU5XSwgdmFsdWU6IG1pbnV0ZSB9LFxyXG4gICAgICAgIHsgdHlwZTogXCJzZWNvbmRcIiwgcmFuZ2U6IFswLCA1OV0sIHZhbHVlOiBzZWNvbmQgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckRhdGVFbGVtZW50ID0gKGVsZW1Qcm9wcykgPT4gKFxyXG4gICAgPFNlbGVjdFdpZGdldFxyXG4gICAgICBhdXRvZm9jdXM9e2VsZW1Qcm9wcy5hdXRvZm9jdXN9XHJcbiAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgIGRpc2FibGVkPXtlbGVtUHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgIGlkPXtlbGVtUHJvcHMuaWR9XHJcbiAgICAgIG9uQmx1cj17ZWxlbVByb3BzLm9uQmx1cn1cclxuICAgICAgb25DaGFuZ2U9eyhlbGVtVmFsdWUpID0+IGVsZW1Qcm9wcy5zZWxlY3QoZWxlbVByb3BzLnR5cGUsIGVsZW1WYWx1ZSl9XHJcbiAgICAgIG9uRm9jdXM9e2VsZW1Qcm9wcy5vbkZvY3VzfVxyXG4gICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgZW51bU9wdGlvbnM6IHJhbmdlT3B0aW9ucyhlbGVtUHJvcHMucmFuZ2VbMF0sIGVsZW1Qcm9wcy5yYW5nZVsxXSksXHJcbiAgICAgIH19XHJcbiAgICAgIHBsYWNlaG9sZGVyPXtlbGVtUHJvcHMudHlwZX1cclxuICAgICAgcmVhZG9ubHk9e2VsZW1Qcm9wcy5yZWFkb25seX1cclxuICAgICAgc2NoZW1hPXt7IHR5cGU6IFwiaW50ZWdlclwiIH19XHJcbiAgICAgIHZhbHVlPXtlbGVtUHJvcHMudmFsdWV9XHJcbiAgICAvPlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Um93IGd1dHRlcj17W01hdGguZmxvb3Iocm93R3V0dGVyIC8gMiksIE1hdGguZmxvb3Iocm93R3V0dGVyIC8gMildfT5cclxuICAgICAge2RhdGVFbGVtZW50UHJvcHMoKS5tYXAoKGVsZW1Qcm9wcywgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsZW1JZCA9IGlkICsgXCJfXCIgKyBlbGVtUHJvcHMudHlwZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPENvbCBmbGV4PVwiODhweFwiIGtleT17ZWxlbUlkfT5cclxuICAgICAgICAgICAge3JlbmRlckRhdGVFbGVtZW50KHtcclxuICAgICAgICAgICAgICAuLi5lbGVtUHJvcHMsXHJcbiAgICAgICAgICAgICAgYXV0b2ZvY3VzOiBhdXRvZm9jdXMgJiYgaSA9PT0gMCxcclxuICAgICAgICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICAgICAgICBpZDogZWxlbUlkLFxyXG4gICAgICAgICAgICAgIG9uQmx1cixcclxuICAgICAgICAgICAgICBvbkZvY3VzLFxyXG4gICAgICAgICAgICAgIHJlYWRvbmx5LFxyXG4gICAgICAgICAgICAgIHJlZ2lzdHJ5LFxyXG4gICAgICAgICAgICAgIHNlbGVjdDogaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgICAgIC8vIE5PVEU6IGFudGQgY29tcG9uZW50cyBhY2NlcHQgLTEgcmF0aGVyIHRoYW4gaXNzdWUgYSB3YXJuaW5nXHJcbiAgICAgICAgICAgICAgLy8gbGlrZSBtYXRlcmlhbC11aSwgc28gd2UgbmVlZCB0byBjb252ZXJ0IC0xIHRvIHVuZGVmaW5lZCBoZXJlLlxyXG4gICAgICAgICAgICAgIHZhbHVlOiBlbGVtUHJvcHMudmFsdWUgPCAwID8gdW5kZWZpbmVkIDogZWxlbVByb3BzLnZhbHVlLFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgICB7IW9wdGlvbnMuaGlkZU5vd0J1dHRvbiAmJiAoXHJcbiAgICAgICAgPENvbCBmbGV4PVwiODhweFwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBibG9jayBjbGFzc05hbWU9XCJidG4tbm93XCIgb25DbGljaz17aGFuZGxlTm93fSB0eXBlPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBOb3dcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICApfVxyXG4gICAgICB7IW9wdGlvbnMuaGlkZUNsZWFyQnV0dG9uICYmIChcclxuICAgICAgICA8Q29sIGZsZXg9XCI4OHB4XCI+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGJsb2NrXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1jbGVhclwiXHJcbiAgICAgICAgICAgIGRhbmdlclxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGVhcn1cclxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDbGVhclxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICl9XHJcbiAgICA8L1Jvdz5cclxuICApO1xyXG59O1xyXG5cclxuQWx0RGF0ZVdpZGdldC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYXV0b2ZvY3VzOiBmYWxzZSxcclxuICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgb3B0aW9uczoge1xyXG4gICAgeWVhcnNSYW5nZTogWzE5MDAsIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSArIDJdLFxyXG4gIH0sXHJcbiAgcmVhZG9ubHk6IGZhbHNlLFxyXG4gIHNob3dUaW1lOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsdERhdGVXaWRnZXQ7XHJcbiJdfQ==