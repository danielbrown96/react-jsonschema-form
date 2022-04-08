"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _checkbox = _interopRequireDefault(require("antd/lib/checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INPUT_STYLE = {
  width: '100%'
};

var ColorWidget = function ColorWidget(_ref) {
  var disabled = _ref.disabled,
      formContext = _ref.formContext,
      id = _ref.id,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      placeholder = _ref.placeholder,
      readonly = _ref.readonly,
      value = _ref.value;
  var _formContext$readonly = formContext.readonlyAsDisabled,
      readonlyAsDisabled = _formContext$readonly === void 0 ? true : _formContext$readonly;

  var handleChange = function handleChange(_ref2) {
    var target = _ref2.target;
    return onChange(target.value);
  };

  var handleBlur = function handleBlur(_ref3) {
    var target = _ref3.target;
    return onBlur(id, target.value);
  };

  var handleFocus = function handleFocus(_ref4) {
    var target = _ref4.target;
    return onFocus(id, target.value);
  };

  return /*#__PURE__*/_react.default.createElement(_checkbox.default, {
    disabled: disabled || readonlyAsDisabled && readonly,
    id: id,
    name: id,
    onBlur: !readonly ? handleBlur : undefined,
    onChange: !readonly ? handleChange : undefined,
    onFocus: !readonly ? handleFocus : undefined,
    placeholder: placeholder,
    style: INPUT_STYLE,
    type: "color",
    value: value
  });
};

var _default = ColorWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93aWRnZXRzL0NvbG9yV2lkZ2V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIklOUFVUX1NUWUxFIiwid2lkdGgiLCJDb2xvcldpZGdldCIsImRpc2FibGVkIiwiZm9ybUNvbnRleHQiLCJpZCIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwib25Gb2N1cyIsInBsYWNlaG9sZGVyIiwicmVhZG9ubHkiLCJ2YWx1ZSIsInJlYWRvbmx5QXNEaXNhYmxlZCIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImhhbmRsZUJsdXIiLCJoYW5kbGVGb2N1cyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHO0FBQ2xCQyxFQUFBQSxLQUFLLEVBQUU7QUFEVyxDQUFwQjs7QUFJQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQWVkO0FBQUEsTUFiSkMsUUFhSSxRQWJKQSxRQWFJO0FBQUEsTUFaSkMsV0FZSSxRQVpKQSxXQVlJO0FBQUEsTUFYSkMsRUFXSSxRQVhKQSxFQVdJO0FBQUEsTUFUSkMsTUFTSSxRQVRKQSxNQVNJO0FBQUEsTUFSSkMsUUFRSSxRQVJKQSxRQVFJO0FBQUEsTUFQSkMsT0FPSSxRQVBKQSxPQU9JO0FBQUEsTUFMSkMsV0FLSSxRQUxKQSxXQUtJO0FBQUEsTUFKSkMsUUFJSSxRQUpKQSxRQUlJO0FBQUEsTUFESkMsS0FDSSxRQURKQSxLQUNJO0FBQUEsOEJBQ2tDUCxXQURsQyxDQUNJUSxrQkFESjtBQUFBLE1BQ0lBLGtCQURKLHNDQUN5QixJQUR6Qjs7QUFHSixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFFBQUdDLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFdBQWdCUCxRQUFRLENBQUNPLE1BQU0sQ0FBQ0gsS0FBUixDQUF4QjtBQUFBLEdBQXJCOztBQUVBLE1BQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsUUFBR0QsTUFBSCxTQUFHQSxNQUFIO0FBQUEsV0FBZ0JSLE1BQU0sQ0FBQ0QsRUFBRCxFQUFLUyxNQUFNLENBQUNILEtBQVosQ0FBdEI7QUFBQSxHQUFuQjs7QUFFQSxNQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFFBQUdGLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFdBQWdCTixPQUFPLENBQUNILEVBQUQsRUFBS1MsTUFBTSxDQUFDSCxLQUFaLENBQXZCO0FBQUEsR0FBcEI7O0FBRUEsc0JBQ0UsNkJBQUMsaUJBQUQ7QUFDRSxJQUFBLFFBQVEsRUFBRVIsUUFBUSxJQUFLUyxrQkFBa0IsSUFBSUYsUUFEL0M7QUFFRSxJQUFBLEVBQUUsRUFBRUwsRUFGTjtBQUdFLElBQUEsSUFBSSxFQUFFQSxFQUhSO0FBSUUsSUFBQSxNQUFNLEVBQUUsQ0FBQ0ssUUFBRCxHQUFZSyxVQUFaLEdBQXlCRSxTQUpuQztBQUtFLElBQUEsUUFBUSxFQUFFLENBQUNQLFFBQUQsR0FBWUcsWUFBWixHQUEyQkksU0FMdkM7QUFNRSxJQUFBLE9BQU8sRUFBRSxDQUFDUCxRQUFELEdBQVlNLFdBQVosR0FBMEJDLFNBTnJDO0FBT0UsSUFBQSxXQUFXLEVBQUVSLFdBUGY7QUFRRSxJQUFBLEtBQUssRUFBRVQsV0FSVDtBQVNFLElBQUEsSUFBSSxFQUFDLE9BVFA7QUFVRSxJQUFBLEtBQUssRUFBRVc7QUFWVCxJQURGO0FBY0QsQ0F0Q0Q7O2VBd0NlVCxXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBJbnB1dCBmcm9tICdhbnRkL2xpYi9jaGVja2JveCc7XHJcblxyXG5jb25zdCBJTlBVVF9TVFlMRSA9IHtcclxuICB3aWR0aDogJzEwMCUnLFxyXG59O1xyXG5cclxuY29uc3QgQ29sb3JXaWRnZXQgPSAoe1xyXG4gIC8vIGF1dG9mb2N1cyxcclxuICBkaXNhYmxlZCxcclxuICBmb3JtQ29udGV4dCxcclxuICBpZCxcclxuICAvLyBsYWJlbCxcclxuICBvbkJsdXIsXHJcbiAgb25DaGFuZ2UsXHJcbiAgb25Gb2N1cyxcclxuICAvLyBvcHRpb25zLFxyXG4gIHBsYWNlaG9sZGVyLFxyXG4gIHJlYWRvbmx5LFxyXG4gIC8vIHJlcXVpcmVkLFxyXG4gIC8vIHNjaGVtYSxcclxuICB2YWx1ZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgcmVhZG9ubHlBc0Rpc2FibGVkID0gdHJ1ZSB9ID0gZm9ybUNvbnRleHQ7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh7IHRhcmdldCB9KSA9PiBvbkNoYW5nZSh0YXJnZXQudmFsdWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVCbHVyID0gKHsgdGFyZ2V0IH0pID0+IG9uQmx1cihpZCwgdGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRm9jdXMgPSAoeyB0YXJnZXQgfSkgPT4gb25Gb2N1cyhpZCwgdGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbnB1dFxyXG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgKHJlYWRvbmx5QXNEaXNhYmxlZCAmJiByZWFkb25seSl9XHJcbiAgICAgIGlkPXtpZH1cclxuICAgICAgbmFtZT17aWR9XHJcbiAgICAgIG9uQmx1cj17IXJlYWRvbmx5ID8gaGFuZGxlQmx1ciA6IHVuZGVmaW5lZH1cclxuICAgICAgb25DaGFuZ2U9eyFyZWFkb25seSA/IGhhbmRsZUNoYW5nZSA6IHVuZGVmaW5lZH1cclxuICAgICAgb25Gb2N1cz17IXJlYWRvbmx5ID8gaGFuZGxlRm9jdXMgOiB1bmRlZmluZWR9XHJcbiAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgc3R5bGU9e0lOUFVUX1NUWUxFfVxyXG4gICAgICB0eXBlPVwiY29sb3JcIlxyXG4gICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2xvcldpZGdldDtcclxuIl19