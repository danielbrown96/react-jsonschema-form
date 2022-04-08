"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _input = _interopRequireDefault(require("antd/lib/input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INPUT_STYLE = {
  width: '100%'
};

var EmailWidget = function EmailWidget(_ref) {
  var disabled = _ref.disabled,
      formContext = _ref.formContext,
      id = _ref.id,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      options = _ref.options,
      placeholder = _ref.placeholder,
      readonly = _ref.readonly,
      value = _ref.value;
  var _formContext$readonly = formContext.readonlyAsDisabled,
      readonlyAsDisabled = _formContext$readonly === void 0 ? true : _formContext$readonly;

  var handleChange = function handleChange(_ref2) {
    var target = _ref2.target;
    return onChange(target.value === '' ? options.emptyValue : target.value);
  };

  var handleBlur = function handleBlur(_ref3) {
    var target = _ref3.target;
    return onBlur(id, target.value);
  };

  var handleFocus = function handleFocus(_ref4) {
    var target = _ref4.target;
    return onFocus(id, target.value);
  };

  return /*#__PURE__*/_react.default.createElement(_input.default, {
    disabled: disabled || readonlyAsDisabled && readonly,
    id: id,
    name: id,
    onBlur: !readonly ? handleBlur : undefined,
    onChange: !readonly ? handleChange : undefined,
    onFocus: !readonly ? handleFocus : undefined,
    placeholder: placeholder,
    style: INPUT_STYLE,
    type: "email",
    value: value
  });
};

var _default = EmailWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93aWRnZXRzL0VtYWlsV2lkZ2V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIklOUFVUX1NUWUxFIiwid2lkdGgiLCJFbWFpbFdpZGdldCIsImRpc2FibGVkIiwiZm9ybUNvbnRleHQiLCJpZCIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwib25Gb2N1cyIsIm9wdGlvbnMiLCJwbGFjZWhvbGRlciIsInJlYWRvbmx5IiwidmFsdWUiLCJyZWFkb25seUFzRGlzYWJsZWQiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJlbXB0eVZhbHVlIiwiaGFuZGxlQmx1ciIsImhhbmRsZUZvY3VzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7QUFFQSxJQUFNQSxXQUFXLEdBQUc7QUFDbEJDLEVBQUFBLEtBQUssRUFBRTtBQURXLENBQXBCOztBQUlBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BZWQ7QUFBQSxNQWJKQyxRQWFJLFFBYkpBLFFBYUk7QUFBQSxNQVpKQyxXQVlJLFFBWkpBLFdBWUk7QUFBQSxNQVhKQyxFQVdJLFFBWEpBLEVBV0k7QUFBQSxNQVRKQyxNQVNJLFFBVEpBLE1BU0k7QUFBQSxNQVJKQyxRQVFJLFFBUkpBLFFBUUk7QUFBQSxNQVBKQyxPQU9JLFFBUEpBLE9BT0k7QUFBQSxNQU5KQyxPQU1JLFFBTkpBLE9BTUk7QUFBQSxNQUxKQyxXQUtJLFFBTEpBLFdBS0k7QUFBQSxNQUpKQyxRQUlJLFFBSkpBLFFBSUk7QUFBQSxNQURKQyxLQUNJLFFBREpBLEtBQ0k7QUFBQSw4QkFDa0NSLFdBRGxDLENBQ0lTLGtCQURKO0FBQUEsTUFDSUEsa0JBREosc0NBQ3lCLElBRHpCOztBQUdKLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsUUFBR0MsTUFBSCxTQUFHQSxNQUFIO0FBQUEsV0FDbkJSLFFBQVEsQ0FBQ1EsTUFBTSxDQUFDSCxLQUFQLEtBQWlCLEVBQWpCLEdBQXNCSCxPQUFPLENBQUNPLFVBQTlCLEdBQTJDRCxNQUFNLENBQUNILEtBQW5ELENBRFc7QUFBQSxHQUFyQjs7QUFHQSxNQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFFBQUdGLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFdBQWdCVCxNQUFNLENBQUNELEVBQUQsRUFBS1UsTUFBTSxDQUFDSCxLQUFaLENBQXRCO0FBQUEsR0FBbkI7O0FBRUEsTUFBTU0sV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxRQUFHSCxNQUFILFNBQUdBLE1BQUg7QUFBQSxXQUFnQlAsT0FBTyxDQUFDSCxFQUFELEVBQUtVLE1BQU0sQ0FBQ0gsS0FBWixDQUF2QjtBQUFBLEdBQXBCOztBQUVBLHNCQUNFLDZCQUFDLGNBQUQ7QUFDRSxJQUFBLFFBQVEsRUFBRVQsUUFBUSxJQUFLVSxrQkFBa0IsSUFBSUYsUUFEL0M7QUFFRSxJQUFBLEVBQUUsRUFBRU4sRUFGTjtBQUdFLElBQUEsSUFBSSxFQUFFQSxFQUhSO0FBSUUsSUFBQSxNQUFNLEVBQUUsQ0FBQ00sUUFBRCxHQUFZTSxVQUFaLEdBQXlCRSxTQUpuQztBQUtFLElBQUEsUUFBUSxFQUFFLENBQUNSLFFBQUQsR0FBWUcsWUFBWixHQUEyQkssU0FMdkM7QUFNRSxJQUFBLE9BQU8sRUFBRSxDQUFDUixRQUFELEdBQVlPLFdBQVosR0FBMEJDLFNBTnJDO0FBT0UsSUFBQSxXQUFXLEVBQUVULFdBUGY7QUFRRSxJQUFBLEtBQUssRUFBRVYsV0FSVDtBQVNFLElBQUEsSUFBSSxFQUFDLE9BVFA7QUFVRSxJQUFBLEtBQUssRUFBRVk7QUFWVCxJQURGO0FBY0QsQ0F2Q0Q7O2VBeUNlVixXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBJbnB1dCBmcm9tICdhbnRkL2xpYi9pbnB1dCc7XHJcblxyXG5jb25zdCBJTlBVVF9TVFlMRSA9IHtcclxuICB3aWR0aDogJzEwMCUnLFxyXG59O1xyXG5cclxuY29uc3QgRW1haWxXaWRnZXQgPSAoe1xyXG4gIC8vIGF1dG9mb2N1cyxcclxuICBkaXNhYmxlZCxcclxuICBmb3JtQ29udGV4dCxcclxuICBpZCxcclxuICAvLyBsYWJlbCxcclxuICBvbkJsdXIsXHJcbiAgb25DaGFuZ2UsXHJcbiAgb25Gb2N1cyxcclxuICBvcHRpb25zLFxyXG4gIHBsYWNlaG9sZGVyLFxyXG4gIHJlYWRvbmx5LFxyXG4gIC8vIHJlcXVpcmVkLFxyXG4gIC8vIHNjaGVtYSxcclxuICB2YWx1ZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgcmVhZG9ubHlBc0Rpc2FibGVkID0gdHJ1ZSB9ID0gZm9ybUNvbnRleHQ7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh7IHRhcmdldCB9KSA9PlxyXG4gICAgb25DaGFuZ2UodGFyZ2V0LnZhbHVlID09PSAnJyA/IG9wdGlvbnMuZW1wdHlWYWx1ZSA6IHRhcmdldC52YWx1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoeyB0YXJnZXQgfSkgPT4gb25CbHVyKGlkLCB0YXJnZXQudmFsdWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGb2N1cyA9ICh7IHRhcmdldCB9KSA9PiBvbkZvY3VzKGlkLCB0YXJnZXQudmFsdWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPElucHV0XHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCAocmVhZG9ubHlBc0Rpc2FibGVkICYmIHJlYWRvbmx5KX1cclxuICAgICAgaWQ9e2lkfVxyXG4gICAgICBuYW1lPXtpZH1cclxuICAgICAgb25CbHVyPXshcmVhZG9ubHkgPyBoYW5kbGVCbHVyIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkNoYW5nZT17IXJlYWRvbmx5ID8gaGFuZGxlQ2hhbmdlIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkZvY3VzPXshcmVhZG9ubHkgPyBoYW5kbGVGb2N1cyA6IHVuZGVmaW5lZH1cclxuICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICBzdHlsZT17SU5QVVRfU1RZTEV9XHJcbiAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtYWlsV2lkZ2V0O1xyXG4iXX0=