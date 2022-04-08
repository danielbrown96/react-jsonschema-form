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

var URLWidget = function URLWidget(_ref) {
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
    type: "url",
    value: value
  });
};

var _default = URLWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93aWRnZXRzL1VSTFdpZGdldC9pbmRleC5qcyJdLCJuYW1lcyI6WyJJTlBVVF9TVFlMRSIsIndpZHRoIiwiVVJMV2lkZ2V0IiwiZGlzYWJsZWQiLCJmb3JtQ29udGV4dCIsImlkIiwib25CbHVyIiwib25DaGFuZ2UiLCJvbkZvY3VzIiwib3B0aW9ucyIsInBsYWNlaG9sZGVyIiwicmVhZG9ubHkiLCJ2YWx1ZSIsInJlYWRvbmx5QXNEaXNhYmxlZCIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImVtcHR5VmFsdWUiLCJoYW5kbGVCbHVyIiwiaGFuZGxlRm9jdXMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7OztBQUVBLElBQU1BLFdBQVcsR0FBRztBQUNsQkMsRUFBQUEsS0FBSyxFQUFFO0FBRFcsQ0FBcEI7O0FBSUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FlWjtBQUFBLE1BYkpDLFFBYUksUUFiSkEsUUFhSTtBQUFBLE1BWkpDLFdBWUksUUFaSkEsV0FZSTtBQUFBLE1BWEpDLEVBV0ksUUFYSkEsRUFXSTtBQUFBLE1BVEpDLE1BU0ksUUFUSkEsTUFTSTtBQUFBLE1BUkpDLFFBUUksUUFSSkEsUUFRSTtBQUFBLE1BUEpDLE9BT0ksUUFQSkEsT0FPSTtBQUFBLE1BTkpDLE9BTUksUUFOSkEsT0FNSTtBQUFBLE1BTEpDLFdBS0ksUUFMSkEsV0FLSTtBQUFBLE1BSkpDLFFBSUksUUFKSkEsUUFJSTtBQUFBLE1BREpDLEtBQ0ksUUFESkEsS0FDSTtBQUFBLDhCQUNrQ1IsV0FEbEMsQ0FDSVMsa0JBREo7QUFBQSxNQUNJQSxrQkFESixzQ0FDeUIsSUFEekI7O0FBR0osTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxRQUFHQyxNQUFILFNBQUdBLE1BQUg7QUFBQSxXQUNuQlIsUUFBUSxDQUFDUSxNQUFNLENBQUNILEtBQVAsS0FBaUIsRUFBakIsR0FBc0JILE9BQU8sQ0FBQ08sVUFBOUIsR0FBMkNELE1BQU0sQ0FBQ0gsS0FBbkQsQ0FEVztBQUFBLEdBQXJCOztBQUdBLE1BQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsUUFBR0YsTUFBSCxTQUFHQSxNQUFIO0FBQUEsV0FBZ0JULE1BQU0sQ0FBQ0QsRUFBRCxFQUFLVSxNQUFNLENBQUNILEtBQVosQ0FBdEI7QUFBQSxHQUFuQjs7QUFFQSxNQUFNTSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFFBQUdILE1BQUgsU0FBR0EsTUFBSDtBQUFBLFdBQWdCUCxPQUFPLENBQUNILEVBQUQsRUFBS1UsTUFBTSxDQUFDSCxLQUFaLENBQXZCO0FBQUEsR0FBcEI7O0FBRUEsc0JBQ0UsNkJBQUMsY0FBRDtBQUNFLElBQUEsUUFBUSxFQUFFVCxRQUFRLElBQUtVLGtCQUFrQixJQUFJRixRQUQvQztBQUVFLElBQUEsRUFBRSxFQUFFTixFQUZOO0FBR0UsSUFBQSxJQUFJLEVBQUVBLEVBSFI7QUFJRSxJQUFBLE1BQU0sRUFBRSxDQUFDTSxRQUFELEdBQVlNLFVBQVosR0FBeUJFLFNBSm5DO0FBS0UsSUFBQSxRQUFRLEVBQUUsQ0FBQ1IsUUFBRCxHQUFZRyxZQUFaLEdBQTJCSyxTQUx2QztBQU1FLElBQUEsT0FBTyxFQUFFLENBQUNSLFFBQUQsR0FBWU8sV0FBWixHQUEwQkMsU0FOckM7QUFPRSxJQUFBLFdBQVcsRUFBRVQsV0FQZjtBQVFFLElBQUEsS0FBSyxFQUFFVixXQVJUO0FBU0UsSUFBQSxJQUFJLEVBQUMsS0FUUDtBQVVFLElBQUEsS0FBSyxFQUFFWTtBQVZULElBREY7QUFjRCxDQXZDRDs7ZUF5Q2VWLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IElucHV0IGZyb20gJ2FudGQvbGliL2lucHV0JztcclxuXHJcbmNvbnN0IElOUFVUX1NUWUxFID0ge1xyXG4gIHdpZHRoOiAnMTAwJScsXHJcbn07XHJcblxyXG5jb25zdCBVUkxXaWRnZXQgPSAoe1xyXG4gIC8vIGF1dG9mb2N1cyxcclxuICBkaXNhYmxlZCxcclxuICBmb3JtQ29udGV4dCxcclxuICBpZCxcclxuICAvLyBsYWJlbCxcclxuICBvbkJsdXIsXHJcbiAgb25DaGFuZ2UsXHJcbiAgb25Gb2N1cyxcclxuICBvcHRpb25zLFxyXG4gIHBsYWNlaG9sZGVyLFxyXG4gIHJlYWRvbmx5LFxyXG4gIC8vIHJlcXVpcmVkLFxyXG4gIC8vIHNjaGVtYSxcclxuICB2YWx1ZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgcmVhZG9ubHlBc0Rpc2FibGVkID0gdHJ1ZSB9ID0gZm9ybUNvbnRleHQ7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh7IHRhcmdldCB9KSA9PlxyXG4gICAgb25DaGFuZ2UodGFyZ2V0LnZhbHVlID09PSAnJyA/IG9wdGlvbnMuZW1wdHlWYWx1ZSA6IHRhcmdldC52YWx1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoeyB0YXJnZXQgfSkgPT4gb25CbHVyKGlkLCB0YXJnZXQudmFsdWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGb2N1cyA9ICh7IHRhcmdldCB9KSA9PiBvbkZvY3VzKGlkLCB0YXJnZXQudmFsdWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPElucHV0XHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCAocmVhZG9ubHlBc0Rpc2FibGVkICYmIHJlYWRvbmx5KX1cclxuICAgICAgaWQ9e2lkfVxyXG4gICAgICBuYW1lPXtpZH1cclxuICAgICAgb25CbHVyPXshcmVhZG9ubHkgPyBoYW5kbGVCbHVyIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkNoYW5nZT17IXJlYWRvbmx5ID8gaGFuZGxlQ2hhbmdlIDogdW5kZWZpbmVkfVxyXG4gICAgICBvbkZvY3VzPXshcmVhZG9ubHkgPyBoYW5kbGVGb2N1cyA6IHVuZGVmaW5lZH1cclxuICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICBzdHlsZT17SU5QVVRfU1RZTEV9XHJcbiAgICAgIHR5cGU9XCJ1cmxcIlxyXG4gICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVUkxXaWRnZXQ7XHJcbiJdfQ==