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

function TitleField(_ref) {
  var title = _ref.title,
      options = _ref.options;
  var semantic = options.semantic;

  if (title) {
    return _react.default.createElement(_semanticUiReact.Header, _extends({}, semantic, {
      as: "h5"
    }), title);
  }
}

TitleField.defaultProps = {
  options: {
    semantic: {
      inverted: false,
      dividing: true
    }
  }
};
TitleField.propTypes = {
  options: _propTypes.default.object
};
var _default = TitleField;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9UaXRsZUZpZWxkL1RpdGxlRmllbGQuanMiXSwibmFtZXMiOlsiVGl0bGVGaWVsZCIsInRpdGxlIiwib3B0aW9ucyIsInNlbWFudGljIiwiZGVmYXVsdFByb3BzIiwiaW52ZXJ0ZWQiLCJkaXZpZGluZyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxTQUFTQSxVQUFULE9BQXdDO0FBQUEsTUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUFBLE1BQzlCQyxRQUQ4QixHQUNqQkQsT0FEaUIsQ0FDOUJDLFFBRDhCOztBQUV0QyxNQUFJRixLQUFKLEVBQVc7QUFDVCxXQUNFLDZCQUFDLHVCQUFELGVBQVlFLFFBQVo7QUFBc0IsTUFBQSxFQUFFLEVBQUM7QUFBekIsUUFDR0YsS0FESCxDQURGO0FBS0Q7QUFDRjs7QUFFREQsVUFBVSxDQUFDSSxZQUFYLEdBQTBCO0FBQ3hCRixFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsUUFBUSxFQUFFO0FBQ1JFLE1BQUFBLFFBQVEsRUFBRSxLQURGO0FBRVJDLE1BQUFBLFFBQVEsRUFBRTtBQUZGO0FBREg7QUFEZSxDQUExQjtBQVNBTixVQUFVLENBQUNPLFNBQVgsR0FBdUI7QUFDckJMLEVBQUFBLE9BQU8sRUFBRU0sbUJBQVVDO0FBREUsQ0FBdkI7ZUFJZVQsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFRpdGxlRmllbGQoeyB0aXRsZSwgb3B0aW9ucyB9KSB7XHJcbiAgY29uc3QgeyBzZW1hbnRpYyB9ID0gb3B0aW9ucztcclxuICBpZiAodGl0bGUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxIZWFkZXIgey4uLnNlbWFudGljfSBhcz1cImg1XCI+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5UaXRsZUZpZWxkLmRlZmF1bHRQcm9wcyA9IHtcclxuICBvcHRpb25zOiB7XHJcbiAgICBzZW1hbnRpYzoge1xyXG4gICAgICBpbnZlcnRlZDogZmFsc2UsXHJcbiAgICAgIGRpdmlkaW5nOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuVGl0bGVGaWVsZC5wcm9wVHlwZXMgPSB7XHJcbiAgb3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpdGxlRmllbGQ7XHJcbiJdfQ==