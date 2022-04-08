"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prop-types */

/**
 * @return {null}
 */
function HelpField(_ref) {
  var helpText = _ref.helpText,
      id = _ref.id;

  if (helpText) {
    return _react.default.createElement(_semanticUiReact.Message, {
      size: "mini",
      info: true,
      id: id,
      content: helpText
    });
  }

  return null;
}

HelpField.propTypes = {
  helpText: _propTypes.default.string,
  id: _propTypes.default.string
};
var _default = HelpField;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9IZWxwRmllbGQvSGVscEZpZWxkLmpzIl0sIm5hbWVzIjpbIkhlbHBGaWVsZCIsImhlbHBUZXh0IiwiaWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUhBOztBQUtBOzs7QUFHQSxTQUFTQSxTQUFULE9BQXFDO0FBQUEsTUFBaEJDLFFBQWdCLFFBQWhCQSxRQUFnQjtBQUFBLE1BQU5DLEVBQU0sUUFBTkEsRUFBTTs7QUFDbkMsTUFBSUQsUUFBSixFQUFjO0FBQ1osV0FBTyw2QkFBQyx3QkFBRDtBQUFTLE1BQUEsSUFBSSxFQUFDLE1BQWQ7QUFBcUIsTUFBQSxJQUFJLE1BQXpCO0FBQTBCLE1BQUEsRUFBRSxFQUFFQyxFQUE5QjtBQUFrQyxNQUFBLE9BQU8sRUFBRUQ7QUFBM0MsTUFBUDtBQUNEOztBQUNELFNBQU8sSUFBUDtBQUNEOztBQUVERCxTQUFTLENBQUNHLFNBQVYsR0FBc0I7QUFDcEJGLEVBQUFBLFFBQVEsRUFBRUcsbUJBQVVDLE1BREE7QUFFcEJILEVBQUFBLEVBQUUsRUFBRUUsbUJBQVVDO0FBRk0sQ0FBdEI7ZUFLZUwsUyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJuIHtudWxsfVxyXG4gKi9cclxuZnVuY3Rpb24gSGVscEZpZWxkKHsgaGVscFRleHQsIGlkIH0pIHtcclxuICBpZiAoaGVscFRleHQpIHtcclxuICAgIHJldHVybiA8TWVzc2FnZSBzaXplPVwibWluaVwiIGluZm8gaWQ9e2lkfSBjb250ZW50PXtoZWxwVGV4dH0gLz47XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5IZWxwRmllbGQucHJvcFR5cGVzID0ge1xyXG4gIGhlbHBUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVscEZpZWxkO1xyXG4iXX0=