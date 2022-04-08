"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _checkbox = _interopRequireDefault(require("antd/lib/checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxWidget = function CheckboxWidget(_ref) {
  var autofocus = _ref.autofocus,
      disabled = _ref.disabled,
      formContext = _ref.formContext,
      id = _ref.id,
      label = _ref.label,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      readonly = _ref.readonly,
      value = _ref.value;
  var _formContext$readonly = formContext.readonlyAsDisabled,
      readonlyAsDisabled = _formContext$readonly === void 0 ? true : _formContext$readonly;

  var handleChange = function handleChange(_ref2) {
    var target = _ref2.target;
    return onChange(target.checked);
  };

  var handleBlur = function handleBlur(_ref3) {
    var target = _ref3.target;
    return onBlur(id, target.checked);
  };

  var handleFocus = function handleFocus(_ref4) {
    var target = _ref4.target;
    return onFocus(id, target.checked);
  };

  return /*#__PURE__*/_react.default.createElement(_checkbox.default, {
    autoFocus: autofocus,
    checked: typeof value === 'undefined' ? false : value,
    disabled: disabled || readonlyAsDisabled && readonly,
    id: id,
    name: id,
    onBlur: !readonly ? handleBlur : undefined,
    onChange: !readonly ? handleChange : undefined,
    onFocus: !readonly ? handleFocus : undefined
  }, label);
};

var _default = CheckboxWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93aWRnZXRzL0NoZWNrYm94V2lkZ2V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIkNoZWNrYm94V2lkZ2V0IiwiYXV0b2ZvY3VzIiwiZGlzYWJsZWQiLCJmb3JtQ29udGV4dCIsImlkIiwibGFiZWwiLCJvbkJsdXIiLCJvbkNoYW5nZSIsIm9uRm9jdXMiLCJyZWFkb25seSIsInZhbHVlIiwicmVhZG9ubHlBc0Rpc2FibGVkIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiY2hlY2tlZCIsImhhbmRsZUJsdXIiLCJoYW5kbGVGb2N1cyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQWVqQjtBQUFBLE1BZEpDLFNBY0ksUUFkSkEsU0FjSTtBQUFBLE1BYkpDLFFBYUksUUFiSkEsUUFhSTtBQUFBLE1BWkpDLFdBWUksUUFaSkEsV0FZSTtBQUFBLE1BWEpDLEVBV0ksUUFYSkEsRUFXSTtBQUFBLE1BVkpDLEtBVUksUUFWSkEsS0FVSTtBQUFBLE1BVEpDLE1BU0ksUUFUSkEsTUFTSTtBQUFBLE1BUkpDLFFBUUksUUFSSkEsUUFRSTtBQUFBLE1BUEpDLE9BT0ksUUFQSkEsT0FPSTtBQUFBLE1BSkpDLFFBSUksUUFKSkEsUUFJSTtBQUFBLE1BREpDLEtBQ0ksUUFESkEsS0FDSTtBQUFBLDhCQUNrQ1AsV0FEbEMsQ0FDSVEsa0JBREo7QUFBQSxNQUNJQSxrQkFESixzQ0FDeUIsSUFEekI7O0FBR0osTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxRQUFHQyxNQUFILFNBQUdBLE1BQUg7QUFBQSxXQUFnQk4sUUFBUSxDQUFDTSxNQUFNLENBQUNDLE9BQVIsQ0FBeEI7QUFBQSxHQUFyQjs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFFBQUdGLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFdBQWdCUCxNQUFNLENBQUNGLEVBQUQsRUFBS1MsTUFBTSxDQUFDQyxPQUFaLENBQXRCO0FBQUEsR0FBbkI7O0FBRUEsTUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxRQUFHSCxNQUFILFNBQUdBLE1BQUg7QUFBQSxXQUFnQkwsT0FBTyxDQUFDSixFQUFELEVBQUtTLE1BQU0sQ0FBQ0MsT0FBWixDQUF2QjtBQUFBLEdBQXBCOztBQUVBLHNCQUNFLDZCQUFDLGlCQUFEO0FBQ0UsSUFBQSxTQUFTLEVBQUViLFNBRGI7QUFFRSxJQUFBLE9BQU8sRUFBRSxPQUFPUyxLQUFQLEtBQWlCLFdBQWpCLEdBQStCLEtBQS9CLEdBQXVDQSxLQUZsRDtBQUdFLElBQUEsUUFBUSxFQUFFUixRQUFRLElBQUtTLGtCQUFrQixJQUFJRixRQUgvQztBQUlFLElBQUEsRUFBRSxFQUFFTCxFQUpOO0FBS0UsSUFBQSxJQUFJLEVBQUVBLEVBTFI7QUFNRSxJQUFBLE1BQU0sRUFBRSxDQUFDSyxRQUFELEdBQVlNLFVBQVosR0FBeUJFLFNBTm5DO0FBT0UsSUFBQSxRQUFRLEVBQUUsQ0FBQ1IsUUFBRCxHQUFZRyxZQUFaLEdBQTJCSyxTQVB2QztBQVFFLElBQUEsT0FBTyxFQUFFLENBQUNSLFFBQUQsR0FBWU8sV0FBWixHQUEwQkM7QUFSckMsS0FVR1osS0FWSCxDQURGO0FBY0QsQ0F0Q0Q7O2VBd0NlTCxjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBDaGVja2JveCBmcm9tICdhbnRkL2xpYi9jaGVja2JveCc7XHJcblxyXG5jb25zdCBDaGVja2JveFdpZGdldCA9ICh7XHJcbiAgYXV0b2ZvY3VzLFxyXG4gIGRpc2FibGVkLFxyXG4gIGZvcm1Db250ZXh0LFxyXG4gIGlkLFxyXG4gIGxhYmVsLFxyXG4gIG9uQmx1cixcclxuICBvbkNoYW5nZSxcclxuICBvbkZvY3VzLFxyXG4gIC8vIG9wdGlvbnMsXHJcbiAgLy8gcGxhY2Vob2xkZXIsXHJcbiAgcmVhZG9ubHksXHJcbiAgLy8gcmVxdWlyZWQsXHJcbiAgLy8gc2NoZW1hLFxyXG4gIHZhbHVlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgeyByZWFkb25seUFzRGlzYWJsZWQgPSB0cnVlIH0gPSBmb3JtQ29udGV4dDtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHsgdGFyZ2V0IH0pID0+IG9uQ2hhbmdlKHRhcmdldC5jaGVja2VkKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmx1ciA9ICh7IHRhcmdldCB9KSA9PiBvbkJsdXIoaWQsIHRhcmdldC5jaGVja2VkKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRm9jdXMgPSAoeyB0YXJnZXQgfSkgPT4gb25Gb2N1cyhpZCwgdGFyZ2V0LmNoZWNrZWQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENoZWNrYm94XHJcbiAgICAgIGF1dG9Gb2N1cz17YXV0b2ZvY3VzfVxyXG4gICAgICBjaGVja2VkPXt0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiB2YWx1ZX1cclxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8IChyZWFkb25seUFzRGlzYWJsZWQgJiYgcmVhZG9ubHkpfVxyXG4gICAgICBpZD17aWR9XHJcbiAgICAgIG5hbWU9e2lkfVxyXG4gICAgICBvbkJsdXI9eyFyZWFkb25seSA/IGhhbmRsZUJsdXIgOiB1bmRlZmluZWR9XHJcbiAgICAgIG9uQ2hhbmdlPXshcmVhZG9ubHkgPyBoYW5kbGVDaGFuZ2UgOiB1bmRlZmluZWR9XHJcbiAgICAgIG9uRm9jdXM9eyFyZWFkb25seSA/IGhhbmRsZUZvY3VzIDogdW5kZWZpbmVkfVxyXG4gICAgPlxyXG4gICAgICB7bGFiZWx9XHJcbiAgICA8L0NoZWNrYm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveFdpZGdldDtcclxuIl19