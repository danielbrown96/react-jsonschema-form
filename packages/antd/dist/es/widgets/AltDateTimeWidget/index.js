function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import _AltDateWidget from "../AltDateWidget";

var AltDateTimeWidget = function AltDateTimeWidget(props) {
  var AltDateWidget = props.registry.widgets.AltDateWidget;
  return /*#__PURE__*/React.createElement(AltDateWidget, _extends({
    showTime: true
  }, props));
};

AltDateTimeWidget.defaultProps = _objectSpread(_objectSpread({}, _AltDateWidget.defaultProps), {}, {
  showTime: true
});
export default AltDateTimeWidget;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93aWRnZXRzL0FsdERhdGVUaW1lV2lkZ2V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiX0FsdERhdGVXaWRnZXQiLCJBbHREYXRlVGltZVdpZGdldCIsInByb3BzIiwiQWx0RGF0ZVdpZGdldCIsInJlZ2lzdHJ5Iiwid2lkZ2V0cyIsImRlZmF1bHRQcm9wcyIsInNob3dUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFFQSxPQUFPQyxjQUFQLE1BQTJCLGtCQUEzQjs7QUFFQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQzNCQyxhQUQyQixHQUNURCxLQUFLLENBQUNFLFFBQU4sQ0FBZUMsT0FETixDQUMzQkYsYUFEMkI7QUFFbkMsc0JBQU8sb0JBQUMsYUFBRDtBQUFlLElBQUEsUUFBUTtBQUF2QixLQUE0QkQsS0FBNUIsRUFBUDtBQUNELENBSEQ7O0FBS0FELGlCQUFpQixDQUFDSyxZQUFsQixtQ0FDS04sY0FBYyxDQUFDTSxZQURwQjtBQUVFQyxFQUFBQSxRQUFRLEVBQUU7QUFGWjtBQUtBLGVBQWVOLGlCQUFmIiwic291cmNlc0NvbnRlbnQiOlsiICBcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IF9BbHREYXRlV2lkZ2V0IGZyb20gXCIuLi9BbHREYXRlV2lkZ2V0XCI7XHJcblxyXG5jb25zdCBBbHREYXRlVGltZVdpZGdldCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgQWx0RGF0ZVdpZGdldCB9ID0gcHJvcHMucmVnaXN0cnkud2lkZ2V0cztcclxuICByZXR1cm4gPEFsdERhdGVXaWRnZXQgc2hvd1RpbWUgey4uLnByb3BzfSAvPjtcclxufTtcclxuXHJcbkFsdERhdGVUaW1lV2lkZ2V0LmRlZmF1bHRQcm9wcyA9IHtcclxuICAuLi5fQWx0RGF0ZVdpZGdldC5kZWZhdWx0UHJvcHMsXHJcbiAgc2hvd1RpbWU6IHRydWUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbHREYXRlVGltZVdpZGdldDtcclxuIl19