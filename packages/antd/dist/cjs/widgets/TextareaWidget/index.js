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

var TextareaWidget = function TextareaWidget(_ref) {
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

  return /*#__PURE__*/_react.default.createElement(_input.default.TextArea, {
    disabled: disabled || readonlyAsDisabled && readonly,
    id: id,
    name: id,
    onBlur: !readonly ? handleBlur : undefined,
    onChange: !readonly ? handleChange : undefined,
    onFocus: !readonly ? handleFocus : undefined,
    placeholder: placeholder,
    rows: options.rows || 4,
    style: INPUT_STYLE,
    type: "textarea",
    value: value
  });
};

var _default = TextareaWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93aWRnZXRzL1RleHRhcmVhV2lkZ2V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIklOUFVUX1NUWUxFIiwid2lkdGgiLCJUZXh0YXJlYVdpZGdldCIsImRpc2FibGVkIiwiZm9ybUNvbnRleHQiLCJpZCIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwib25Gb2N1cyIsIm9wdGlvbnMiLCJwbGFjZWhvbGRlciIsInJlYWRvbmx5IiwidmFsdWUiLCJyZWFkb25seUFzRGlzYWJsZWQiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJlbXB0eVZhbHVlIiwiaGFuZGxlQmx1ciIsImhhbmRsZUZvY3VzIiwidW5kZWZpbmVkIiwicm93cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHO0FBQ2xCQyxFQUFBQSxLQUFLLEVBQUU7QUFEVyxDQUFwQjs7QUFJQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BZWpCO0FBQUEsTUFiSkMsUUFhSSxRQWJKQSxRQWFJO0FBQUEsTUFaSkMsV0FZSSxRQVpKQSxXQVlJO0FBQUEsTUFYSkMsRUFXSSxRQVhKQSxFQVdJO0FBQUEsTUFUSkMsTUFTSSxRQVRKQSxNQVNJO0FBQUEsTUFSSkMsUUFRSSxRQVJKQSxRQVFJO0FBQUEsTUFQSkMsT0FPSSxRQVBKQSxPQU9JO0FBQUEsTUFOSkMsT0FNSSxRQU5KQSxPQU1JO0FBQUEsTUFMSkMsV0FLSSxRQUxKQSxXQUtJO0FBQUEsTUFKSkMsUUFJSSxRQUpKQSxRQUlJO0FBQUEsTUFESkMsS0FDSSxRQURKQSxLQUNJO0FBQUEsOEJBQ2tDUixXQURsQyxDQUNJUyxrQkFESjtBQUFBLE1BQ0lBLGtCQURKLHNDQUN5QixJQUR6Qjs7QUFHSixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFFBQUdDLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFdBQ25CUixRQUFRLENBQUNRLE1BQU0sQ0FBQ0gsS0FBUCxLQUFpQixFQUFqQixHQUFzQkgsT0FBTyxDQUFDTyxVQUE5QixHQUEyQ0QsTUFBTSxDQUFDSCxLQUFuRCxDQURXO0FBQUEsR0FBckI7O0FBR0EsTUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxRQUFHRixNQUFILFNBQUdBLE1BQUg7QUFBQSxXQUFnQlQsTUFBTSxDQUFDRCxFQUFELEVBQUtVLE1BQU0sQ0FBQ0gsS0FBWixDQUF0QjtBQUFBLEdBQW5COztBQUVBLE1BQU1NLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsUUFBR0gsTUFBSCxTQUFHQSxNQUFIO0FBQUEsV0FBZ0JQLE9BQU8sQ0FBQ0gsRUFBRCxFQUFLVSxNQUFNLENBQUNILEtBQVosQ0FBdkI7QUFBQSxHQUFwQjs7QUFFQSxzQkFDRSw2QkFBQyxjQUFELENBQU8sUUFBUDtBQUNFLElBQUEsUUFBUSxFQUFFVCxRQUFRLElBQUtVLGtCQUFrQixJQUFJRixRQUQvQztBQUVFLElBQUEsRUFBRSxFQUFFTixFQUZOO0FBR0UsSUFBQSxJQUFJLEVBQUVBLEVBSFI7QUFJRSxJQUFBLE1BQU0sRUFBRSxDQUFDTSxRQUFELEdBQVlNLFVBQVosR0FBeUJFLFNBSm5DO0FBS0UsSUFBQSxRQUFRLEVBQUUsQ0FBQ1IsUUFBRCxHQUFZRyxZQUFaLEdBQTJCSyxTQUx2QztBQU1FLElBQUEsT0FBTyxFQUFFLENBQUNSLFFBQUQsR0FBWU8sV0FBWixHQUEwQkMsU0FOckM7QUFPRSxJQUFBLFdBQVcsRUFBRVQsV0FQZjtBQVFFLElBQUEsSUFBSSxFQUFFRCxPQUFPLENBQUNXLElBQVIsSUFBZ0IsQ0FSeEI7QUFTRSxJQUFBLEtBQUssRUFBRXBCLFdBVFQ7QUFVRSxJQUFBLElBQUksRUFBQyxVQVZQO0FBV0UsSUFBQSxLQUFLLEVBQUVZO0FBWFQsSUFERjtBQWVELENBeENEOztlQTBDZVYsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgSW5wdXQgZnJvbSAnYW50ZC9saWIvaW5wdXQnO1xyXG5cclxuY29uc3QgSU5QVVRfU1RZTEUgPSB7XHJcbiAgd2lkdGg6ICcxMDAlJyxcclxufTtcclxuXHJcbmNvbnN0IFRleHRhcmVhV2lkZ2V0ID0gKHtcclxuICAvLyBhdXRvZm9jdXMsXHJcbiAgZGlzYWJsZWQsXHJcbiAgZm9ybUNvbnRleHQsXHJcbiAgaWQsXHJcbiAgLy8gbGFiZWwsXHJcbiAgb25CbHVyLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIG9uRm9jdXMsXHJcbiAgb3B0aW9ucyxcclxuICBwbGFjZWhvbGRlcixcclxuICByZWFkb25seSxcclxuICAvLyByZXF1aXJlZCxcclxuICAvLyBzY2hlbWEsXHJcbiAgdmFsdWUsXHJcbn0pID0+IHtcclxuICBjb25zdCB7IHJlYWRvbmx5QXNEaXNhYmxlZCA9IHRydWUgfSA9IGZvcm1Db250ZXh0O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoeyB0YXJnZXQgfSkgPT5cclxuICAgIG9uQ2hhbmdlKHRhcmdldC52YWx1ZSA9PT0gJycgPyBvcHRpb25zLmVtcHR5VmFsdWUgOiB0YXJnZXQudmFsdWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVCbHVyID0gKHsgdGFyZ2V0IH0pID0+IG9uQmx1cihpZCwgdGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRm9jdXMgPSAoeyB0YXJnZXQgfSkgPT4gb25Gb2N1cyhpZCwgdGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgKHJlYWRvbmx5QXNEaXNhYmxlZCAmJiByZWFkb25seSl9XHJcbiAgICAgIGlkPXtpZH1cclxuICAgICAgbmFtZT17aWR9XHJcbiAgICAgIG9uQmx1cj17IXJlYWRvbmx5ID8gaGFuZGxlQmx1ciA6IHVuZGVmaW5lZH1cclxuICAgICAgb25DaGFuZ2U9eyFyZWFkb25seSA/IGhhbmRsZUNoYW5nZSA6IHVuZGVmaW5lZH1cclxuICAgICAgb25Gb2N1cz17IXJlYWRvbmx5ID8gaGFuZGxlRm9jdXMgOiB1bmRlZmluZWR9XHJcbiAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgcm93cz17b3B0aW9ucy5yb3dzIHx8IDR9XHJcbiAgICAgIHN0eWxlPXtJTlBVVF9TVFlMRX1cclxuICAgICAgdHlwZT1cInRleHRhcmVhXCJcclxuICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWFXaWRnZXQ7XHJcbiJdfQ==