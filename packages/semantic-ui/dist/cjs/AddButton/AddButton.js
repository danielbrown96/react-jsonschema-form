"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function AddButton(props) {
  return _react.default.createElement(_semanticUiReact.Button, _extends({}, props, {
    icon: true,
    size: "tiny",
    labelPosition: "left"
  }), _react.default.createElement(_semanticUiReact.Icon, {
    name: "plus"
  }), "Add Item");
}

var _default = AddButton;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9BZGRCdXR0b24vQWRkQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkFkZEJ1dHRvbiIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ3hCLFNBQ0UsNkJBQUMsdUJBQUQsZUFBWUEsS0FBWjtBQUFtQixJQUFBLElBQUksTUFBdkI7QUFBd0IsSUFBQSxJQUFJLEVBQUMsTUFBN0I7QUFBb0MsSUFBQSxhQUFhLEVBQUM7QUFBbEQsTUFDRSw2QkFBQyxxQkFBRDtBQUFNLElBQUEsSUFBSSxFQUFDO0FBQVgsSUFERixhQURGO0FBTUQ7O2VBRWNELFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gQWRkQnV0dG9uKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b24gey4uLnByb3BzfSBpY29uIHNpemU9XCJ0aW55XCIgbGFiZWxQb3NpdGlvbj1cImxlZnRcIj5cclxuICAgICAgPEljb24gbmFtZT1cInBsdXNcIiAvPlxyXG4gICAgICBBZGQgSXRlbVxyXG4gICAgPC9CdXR0b24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkQnV0dG9uO1xyXG4iXX0=