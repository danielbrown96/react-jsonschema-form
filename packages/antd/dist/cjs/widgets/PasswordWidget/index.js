"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _input = _interopRequireDefault(require("antd/lib/input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PasswordWidget = function PasswordWidget(_ref) {
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
  var emptyValue = options.emptyValue || '';

  var handleChange = function handleChange(_ref2) {
    var target = _ref2.target;
    return onChange(target.value === '' ? emptyValue : target.value);
  };

  var handleBlur = function handleBlur(_ref3) {
    var target = _ref3.target;
    return onBlur(id, target.value);
  };

  var handleFocus = function handleFocus(_ref4) {
    var target = _ref4.target;
    return onFocus(id, target.value);
  };

  return /*#__PURE__*/_react.default.createElement(_input.default.Password, {
    disabled: disabled || readonlyAsDisabled && readonly,
    id: id,
    name: id,
    onBlur: !readonly ? handleBlur : undefined,
    onChange: !readonly ? handleChange : undefined,
    onFocus: !readonly ? handleFocus : undefined,
    placeholder: placeholder,
    value: value || ''
  });
};

var _default = PasswordWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93aWRnZXRzL1Bhc3N3b3JkV2lkZ2V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlBhc3N3b3JkV2lkZ2V0IiwiZGlzYWJsZWQiLCJmb3JtQ29udGV4dCIsImlkIiwib25CbHVyIiwib25DaGFuZ2UiLCJvbkZvY3VzIiwib3B0aW9ucyIsInBsYWNlaG9sZGVyIiwicmVhZG9ubHkiLCJ2YWx1ZSIsInJlYWRvbmx5QXNEaXNhYmxlZCIsImVtcHR5VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJoYW5kbGVCbHVyIiwiaGFuZGxlRm9jdXMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7OztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FlakI7QUFBQSxNQWJKQyxRQWFJLFFBYkpBLFFBYUk7QUFBQSxNQVpKQyxXQVlJLFFBWkpBLFdBWUk7QUFBQSxNQVhKQyxFQVdJLFFBWEpBLEVBV0k7QUFBQSxNQVRKQyxNQVNJLFFBVEpBLE1BU0k7QUFBQSxNQVJKQyxRQVFJLFFBUkpBLFFBUUk7QUFBQSxNQVBKQyxPQU9JLFFBUEpBLE9BT0k7QUFBQSxNQU5KQyxPQU1JLFFBTkpBLE9BTUk7QUFBQSxNQUxKQyxXQUtJLFFBTEpBLFdBS0k7QUFBQSxNQUpKQyxRQUlJLFFBSkpBLFFBSUk7QUFBQSxNQURKQyxLQUNJLFFBREpBLEtBQ0k7QUFBQSw4QkFDa0NSLFdBRGxDLENBQ0lTLGtCQURKO0FBQUEsTUFDSUEsa0JBREosc0NBQ3lCLElBRHpCO0FBR0osTUFBTUMsVUFBVSxHQUFHTCxPQUFPLENBQUNLLFVBQVIsSUFBc0IsRUFBekM7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxRQUFHQyxNQUFILFNBQUdBLE1BQUg7QUFBQSxXQUNuQlQsUUFBUSxDQUFDUyxNQUFNLENBQUNKLEtBQVAsS0FBaUIsRUFBakIsR0FBc0JFLFVBQXRCLEdBQW1DRSxNQUFNLENBQUNKLEtBQTNDLENBRFc7QUFBQSxHQUFyQjs7QUFHQSxNQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFFBQUdELE1BQUgsU0FBR0EsTUFBSDtBQUFBLFdBQWdCVixNQUFNLENBQUNELEVBQUQsRUFBS1csTUFBTSxDQUFDSixLQUFaLENBQXRCO0FBQUEsR0FBbkI7O0FBRUEsTUFBTU0sV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxRQUFHRixNQUFILFNBQUdBLE1BQUg7QUFBQSxXQUFnQlIsT0FBTyxDQUFDSCxFQUFELEVBQUtXLE1BQU0sQ0FBQ0osS0FBWixDQUF2QjtBQUFBLEdBQXBCOztBQUVBLHNCQUNFLDZCQUFDLGNBQUQsQ0FBTyxRQUFQO0FBQ0UsSUFBQSxRQUFRLEVBQUVULFFBQVEsSUFBS1Usa0JBQWtCLElBQUlGLFFBRC9DO0FBRUUsSUFBQSxFQUFFLEVBQUVOLEVBRk47QUFHRSxJQUFBLElBQUksRUFBRUEsRUFIUjtBQUlFLElBQUEsTUFBTSxFQUFFLENBQUNNLFFBQUQsR0FBWU0sVUFBWixHQUF5QkUsU0FKbkM7QUFLRSxJQUFBLFFBQVEsRUFBRSxDQUFDUixRQUFELEdBQVlJLFlBQVosR0FBMkJJLFNBTHZDO0FBTUUsSUFBQSxPQUFPLEVBQUUsQ0FBQ1IsUUFBRCxHQUFZTyxXQUFaLEdBQTBCQyxTQU5yQztBQU9FLElBQUEsV0FBVyxFQUFFVCxXQVBmO0FBUUUsSUFBQSxLQUFLLEVBQUVFLEtBQUssSUFBSTtBQVJsQixJQURGO0FBWUQsQ0F2Q0Q7O2VBeUNlVixjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBJbnB1dCBmcm9tICdhbnRkL2xpYi9pbnB1dCc7XHJcblxyXG5jb25zdCBQYXNzd29yZFdpZGdldCA9ICh7XHJcbiAgLy8gYXV0b2ZvY3VzLFxyXG4gIGRpc2FibGVkLFxyXG4gIGZvcm1Db250ZXh0LFxyXG4gIGlkLFxyXG4gIC8vIGxhYmVsLFxyXG4gIG9uQmx1cixcclxuICBvbkNoYW5nZSxcclxuICBvbkZvY3VzLFxyXG4gIG9wdGlvbnMsXHJcbiAgcGxhY2Vob2xkZXIsXHJcbiAgcmVhZG9ubHksXHJcbiAgLy8gcmVxdWlyZWQsXHJcbiAgLy8gc2NoZW1hLFxyXG4gIHZhbHVlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgeyByZWFkb25seUFzRGlzYWJsZWQgPSB0cnVlIH0gPSBmb3JtQ29udGV4dDtcclxuXHJcbiAgY29uc3QgZW1wdHlWYWx1ZSA9IG9wdGlvbnMuZW1wdHlWYWx1ZSB8fCAnJztcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHsgdGFyZ2V0IH0pID0+XHJcbiAgICBvbkNoYW5nZSh0YXJnZXQudmFsdWUgPT09ICcnID8gZW1wdHlWYWx1ZSA6IHRhcmdldC52YWx1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoeyB0YXJnZXQgfSkgPT4gb25CbHVyKGlkLCB0YXJnZXQudmFsdWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGb2N1cyA9ICh7IHRhcmdldCB9KSA9PiBvbkZvY3VzKGlkLCB0YXJnZXQudmFsdWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCAocmVhZG9ubHlBc0Rpc2FibGVkICYmIHJlYWRvbmx5KX1cclxuICAgICAgaWQ9e2lkfVxyXG4gICAgICBuYW1lPXtpZH1cclxuICAgICAgb25CbHVyPXshcmVhZG9ubHkgPyBoYW5kbGVCbHVyIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkNoYW5nZT17IXJlYWRvbmx5ID8gaGFuZGxlQ2hhbmdlIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkZvY3VzPXshcmVhZG9ubHkgPyBoYW5kbGVGb2N1cyA6IHVuZGVmaW5lZH1cclxuICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICB2YWx1ZT17dmFsdWUgfHwgJyd9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZFdpZGdldDtcclxuIl19