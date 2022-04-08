function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import PropTypes from "prop-types";
import { Header } from "semantic-ui-react";

function TitleField(_ref) {
  var title = _ref.title,
      options = _ref.options;
  var semantic = options.semantic;

  if (title) {
    return React.createElement(Header, _extends({}, semantic, {
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
  options: PropTypes.object
};
export default TitleField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9UaXRsZUZpZWxkL1RpdGxlRmllbGQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJIZWFkZXIiLCJUaXRsZUZpZWxkIiwidGl0bGUiLCJvcHRpb25zIiwic2VtYW50aWMiLCJkZWZhdWx0UHJvcHMiLCJpbnZlcnRlZCIsImRpdmlkaW5nIiwicHJvcFR5cGVzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsTUFBVCxRQUF1QixtQkFBdkI7O0FBRUEsU0FBU0MsVUFBVCxPQUF3QztBQUFBLE1BQWxCQyxLQUFrQixRQUFsQkEsS0FBa0I7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7QUFBQSxNQUM5QkMsUUFEOEIsR0FDakJELE9BRGlCLENBQzlCQyxRQUQ4Qjs7QUFFdEMsTUFBSUYsS0FBSixFQUFXO0FBQ1QsV0FDRSxvQkFBQyxNQUFELGVBQVlFLFFBQVo7QUFBc0IsTUFBQSxFQUFFLEVBQUM7QUFBekIsUUFDR0YsS0FESCxDQURGO0FBS0Q7QUFDRjs7QUFFREQsVUFBVSxDQUFDSSxZQUFYLEdBQTBCO0FBQ3hCRixFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsUUFBUSxFQUFFO0FBQ1JFLE1BQUFBLFFBQVEsRUFBRSxLQURGO0FBRVJDLE1BQUFBLFFBQVEsRUFBRTtBQUZGO0FBREg7QUFEZSxDQUExQjtBQVNBTixVQUFVLENBQUNPLFNBQVgsR0FBdUI7QUFDckJMLEVBQUFBLE9BQU8sRUFBRUosU0FBUyxDQUFDVTtBQURFLENBQXZCO0FBSUEsZUFBZVIsVUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFRpdGxlRmllbGQoeyB0aXRsZSwgb3B0aW9ucyB9KSB7XHJcbiAgY29uc3QgeyBzZW1hbnRpYyB9ID0gb3B0aW9ucztcclxuICBpZiAodGl0bGUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxIZWFkZXIgey4uLnNlbWFudGljfSBhcz1cImg1XCI+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5UaXRsZUZpZWxkLmRlZmF1bHRQcm9wcyA9IHtcclxuICBvcHRpb25zOiB7XHJcbiAgICBzZW1hbnRpYzoge1xyXG4gICAgICBpbnZlcnRlZDogZmFsc2UsXHJcbiAgICAgIGRpdmlkaW5nOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuVGl0bGVGaWVsZC5wcm9wVHlwZXMgPSB7XHJcbiAgb3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpdGxlRmllbGQ7XHJcbiJdfQ==