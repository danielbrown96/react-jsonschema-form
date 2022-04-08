"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function IconButton(props) {
  var icon = props.icon,
      className = props.className,
      otherProps = _objectWithoutProperties(props, ["icon", "className"]);

  return _react.default.createElement(_semanticUiReact.Button, _extends({
    icon: icon,
    className: className
  }, otherProps));
}

IconButton.propTypes = {
  icon: _propTypes.default.string.isRequired,
  className: _propTypes.default.string
};
var _default = IconButton;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9JY29uQnV0dG9uL0ljb25CdXR0b24uanMiXSwibmFtZXMiOlsiSWNvbkJ1dHRvbiIsInByb3BzIiwiaWNvbiIsImNsYXNzTmFtZSIsIm90aGVyUHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUFBLE1BQ2pCQyxJQURpQixHQUNrQkQsS0FEbEIsQ0FDakJDLElBRGlCO0FBQUEsTUFDWEMsU0FEVyxHQUNrQkYsS0FEbEIsQ0FDWEUsU0FEVztBQUFBLE1BQ0dDLFVBREgsNEJBQ2tCSCxLQURsQjs7QUFFekIsU0FBUSw2QkFBQyx1QkFBRDtBQUFRLElBQUEsSUFBSSxFQUFFQyxJQUFkO0FBQW9CLElBQUEsU0FBUyxFQUFFQztBQUEvQixLQUE4Q0MsVUFBOUMsRUFBUjtBQUNEOztBQUVESixVQUFVLENBQUNLLFNBQVgsR0FBdUI7QUFDckJILEVBQUFBLElBQUksRUFBRUksbUJBQVVDLE1BQVYsQ0FBaUJDLFVBREY7QUFFckJMLEVBQUFBLFNBQVMsRUFBRUcsbUJBQVVDO0FBRkEsQ0FBdkI7ZUFLZVAsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuXHJcbmZ1bmN0aW9uIEljb25CdXR0b24ocHJvcHMpIHtcclxuICBjb25zdCB7IGljb24sIGNsYXNzTmFtZSwgLi4ub3RoZXJQcm9wcyB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuICg8QnV0dG9uIGljb249e2ljb259IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ub3RoZXJQcm9wc30gLz4pO1xyXG59XHJcblxyXG5JY29uQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbkJ1dHRvbjtcclxuIl19