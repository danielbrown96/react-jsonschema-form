"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _inputNumber = _interopRequireDefault(require("antd/lib/input-number"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INPUT_STYLE = {
  width: '100%'
};

var UpDownWidget = function UpDownWidget(_ref) {
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

  var handleChange = function handleChange(nextValue) {
    return onChange(nextValue);
  };

  var handleBlur = function handleBlur(_ref2) {
    var target = _ref2.target;
    return onBlur(id, target.value);
  };

  var handleFocus = function handleFocus(_ref3) {
    var target = _ref3.target;
    return onFocus(id, target.value);
  };

  return /*#__PURE__*/_react.default.createElement(_inputNumber.default, {
    disabled: disabled || readonlyAsDisabled && readonly,
    id: id,
    name: id,
    onBlur: !readonly ? handleBlur : undefined,
    onChange: !readonly ? handleChange : undefined,
    onFocus: !readonly ? handleFocus : undefined,
    placeholder: placeholder,
    style: INPUT_STYLE,
    type: "number",
    value: value
  });
};

var _default = UpDownWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93aWRnZXRzL1VwRG93bldpZGdldC9pbmRleC5qcyJdLCJuYW1lcyI6WyJJTlBVVF9TVFlMRSIsIndpZHRoIiwiVXBEb3duV2lkZ2V0IiwiZGlzYWJsZWQiLCJmb3JtQ29udGV4dCIsImlkIiwib25CbHVyIiwib25DaGFuZ2UiLCJvbkZvY3VzIiwicGxhY2Vob2xkZXIiLCJyZWFkb25seSIsInZhbHVlIiwicmVhZG9ubHlBc0Rpc2FibGVkIiwiaGFuZGxlQ2hhbmdlIiwibmV4dFZhbHVlIiwiaGFuZGxlQmx1ciIsInRhcmdldCIsImhhbmRsZUZvY3VzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7QUFFQSxJQUFNQSxXQUFXLEdBQUc7QUFDbEJDLEVBQUFBLEtBQUssRUFBRTtBQURXLENBQXBCOztBQUlBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BY2Y7QUFBQSxNQVpKQyxRQVlJLFFBWkpBLFFBWUk7QUFBQSxNQVhKQyxXQVdJLFFBWEpBLFdBV0k7QUFBQSxNQVZKQyxFQVVJLFFBVkpBLEVBVUk7QUFBQSxNQVRKQyxNQVNJLFFBVEpBLE1BU0k7QUFBQSxNQVJKQyxRQVFJLFFBUkpBLFFBUUk7QUFBQSxNQVBKQyxPQU9JLFFBUEpBLE9BT0k7QUFBQSxNQUxKQyxXQUtJLFFBTEpBLFdBS0k7QUFBQSxNQUpKQyxRQUlJLFFBSkpBLFFBSUk7QUFBQSxNQURKQyxLQUNJLFFBREpBLEtBQ0k7QUFBQSw4QkFDa0NQLFdBRGxDLENBQ0lRLGtCQURKO0FBQUEsTUFDSUEsa0JBREosc0NBQ3lCLElBRHpCOztBQUdKLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLFNBQUQ7QUFBQSxXQUFlUCxRQUFRLENBQUNPLFNBQUQsQ0FBdkI7QUFBQSxHQUFyQjs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFFBQUdDLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFdBQWdCVixNQUFNLENBQUNELEVBQUQsRUFBS1csTUFBTSxDQUFDTCxLQUFaLENBQXRCO0FBQUEsR0FBbkI7O0FBRUEsTUFBTU0sV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxRQUFHRCxNQUFILFNBQUdBLE1BQUg7QUFBQSxXQUFnQlIsT0FBTyxDQUFDSCxFQUFELEVBQUtXLE1BQU0sQ0FBQ0wsS0FBWixDQUF2QjtBQUFBLEdBQXBCOztBQUVBLHNCQUNFLDZCQUFDLG9CQUFEO0FBQ0UsSUFBQSxRQUFRLEVBQUVSLFFBQVEsSUFBS1Msa0JBQWtCLElBQUlGLFFBRC9DO0FBRUUsSUFBQSxFQUFFLEVBQUVMLEVBRk47QUFHRSxJQUFBLElBQUksRUFBRUEsRUFIUjtBQUlFLElBQUEsTUFBTSxFQUFFLENBQUNLLFFBQUQsR0FBWUssVUFBWixHQUF5QkcsU0FKbkM7QUFLRSxJQUFBLFFBQVEsRUFBRSxDQUFDUixRQUFELEdBQVlHLFlBQVosR0FBMkJLLFNBTHZDO0FBTUUsSUFBQSxPQUFPLEVBQUUsQ0FBQ1IsUUFBRCxHQUFZTyxXQUFaLEdBQTBCQyxTQU5yQztBQU9FLElBQUEsV0FBVyxFQUFFVCxXQVBmO0FBUUUsSUFBQSxLQUFLLEVBQUVULFdBUlQ7QUFTRSxJQUFBLElBQUksRUFBQyxRQVRQO0FBVUUsSUFBQSxLQUFLLEVBQUVXO0FBVlQsSUFERjtBQWNELENBckNEOztlQXVDZVQsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgSW5wdXROdW1iZXIgZnJvbSAnYW50ZC9saWIvaW5wdXQtbnVtYmVyJztcclxuXHJcbmNvbnN0IElOUFVUX1NUWUxFID0ge1xyXG4gIHdpZHRoOiAnMTAwJScsXHJcbn07XHJcblxyXG5jb25zdCBVcERvd25XaWRnZXQgPSAoe1xyXG4gIC8vIGF1dG9mb2N1cyxcclxuICBkaXNhYmxlZCxcclxuICBmb3JtQ29udGV4dCxcclxuICBpZCxcclxuICBvbkJsdXIsXHJcbiAgb25DaGFuZ2UsXHJcbiAgb25Gb2N1cyxcclxuICAvLyBvcHRpb25zLFxyXG4gIHBsYWNlaG9sZGVyLFxyXG4gIHJlYWRvbmx5LFxyXG4gIC8vIHJlcXVpcmVkLFxyXG4gIC8vIHNjaGVtYSxcclxuICB2YWx1ZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgcmVhZG9ubHlBc0Rpc2FibGVkID0gdHJ1ZSB9ID0gZm9ybUNvbnRleHQ7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChuZXh0VmFsdWUpID0+IG9uQ2hhbmdlKG5leHRWYWx1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoeyB0YXJnZXQgfSkgPT4gb25CbHVyKGlkLCB0YXJnZXQudmFsdWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGb2N1cyA9ICh7IHRhcmdldCB9KSA9PiBvbkZvY3VzKGlkLCB0YXJnZXQudmFsdWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPElucHV0TnVtYmVyXHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCAocmVhZG9ubHlBc0Rpc2FibGVkICYmIHJlYWRvbmx5KX1cclxuICAgICAgaWQ9e2lkfVxyXG4gICAgICBuYW1lPXtpZH1cclxuICAgICAgb25CbHVyPXshcmVhZG9ubHkgPyBoYW5kbGVCbHVyIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkNoYW5nZT17IXJlYWRvbmx5ID8gaGFuZGxlQ2hhbmdlIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkZvY3VzPXshcmVhZG9ubHkgPyBoYW5kbGVGb2N1cyA6IHVuZGVmaW5lZH1cclxuICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICBzdHlsZT17SU5QVVRfU1RZTEV9XHJcbiAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcERvd25XaWRnZXQ7XHJcbiJdfQ==