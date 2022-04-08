"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _radio = _interopRequireDefault(require("antd/lib/radio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-else-return */
var RadioWidget = function RadioWidget(_ref) {
  var autofocus = _ref.autofocus,
      disabled = _ref.disabled,
      formContext = _ref.formContext,
      id = _ref.id,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      options = _ref.options,
      readonly = _ref.readonly,
      schema = _ref.schema,
      value = _ref.value;
  var _formContext$readonly = formContext.readonlyAsDisabled,
      readonlyAsDisabled = _formContext$readonly === void 0 ? true : _formContext$readonly;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;

  var handleChange = function handleChange(_ref2) {
    var nextValue = _ref2.target.value;
    return onChange(schema.type === 'boolean' ? nextValue !== 'false' : nextValue);
  };

  var handleBlur = function handleBlur(_ref3) {
    var target = _ref3.target;
    return onBlur(id, target.value);
  };

  var handleFocus = function handleFocus(_ref4) {
    var target = _ref4.target;
    return onFocus(id, target.value);
  };

  return /*#__PURE__*/_react.default.createElement(_radio.default.Group, {
    disabled: disabled || readonlyAsDisabled && readonly,
    id: id,
    name: id,
    onBlur: !readonly ? handleBlur : undefined,
    onChange: !readonly ? handleChange : undefined,
    onFocus: !readonly ? handleFocus : undefined,
    value: "".concat(value)
  }, enumOptions.map(function (_ref5, i) {
    var optionValue = _ref5.value,
        optionLabel = _ref5.label;
    return /*#__PURE__*/_react.default.createElement(_radio.default, {
      autoFocus: i === 0 ? autofocus : false,
      disabled: enumDisabled && enumDisabled.indexOf(value) !== -1,
      key: "".concat(optionValue),
      value: "".concat(optionValue)
    }, optionLabel);
  }));
};

var _default = RadioWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93aWRnZXRzL1JhZGlvV2lkZ2V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlJhZGlvV2lkZ2V0IiwiYXV0b2ZvY3VzIiwiZGlzYWJsZWQiLCJmb3JtQ29udGV4dCIsImlkIiwib25CbHVyIiwib25DaGFuZ2UiLCJvbkZvY3VzIiwib3B0aW9ucyIsInJlYWRvbmx5Iiwic2NoZW1hIiwidmFsdWUiLCJyZWFkb25seUFzRGlzYWJsZWQiLCJlbnVtT3B0aW9ucyIsImVudW1EaXNhYmxlZCIsImhhbmRsZUNoYW5nZSIsIm5leHRWYWx1ZSIsInRhcmdldCIsInR5cGUiLCJoYW5kbGVCbHVyIiwiaGFuZGxlRm9jdXMiLCJ1bmRlZmluZWQiLCJtYXAiLCJpIiwib3B0aW9uVmFsdWUiLCJvcHRpb25MYWJlbCIsImxhYmVsIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUVBOzs7O0FBSEE7QUFLQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQWVkO0FBQUEsTUFkSkMsU0FjSSxRQWRKQSxTQWNJO0FBQUEsTUFiSkMsUUFhSSxRQWJKQSxRQWFJO0FBQUEsTUFaSkMsV0FZSSxRQVpKQSxXQVlJO0FBQUEsTUFYSkMsRUFXSSxRQVhKQSxFQVdJO0FBQUEsTUFUSkMsTUFTSSxRQVRKQSxNQVNJO0FBQUEsTUFSSkMsUUFRSSxRQVJKQSxRQVFJO0FBQUEsTUFQSkMsT0FPSSxRQVBKQSxPQU9JO0FBQUEsTUFOSkMsT0FNSSxRQU5KQSxPQU1JO0FBQUEsTUFKSkMsUUFJSSxRQUpKQSxRQUlJO0FBQUEsTUFGSkMsTUFFSSxRQUZKQSxNQUVJO0FBQUEsTUFESkMsS0FDSSxRQURKQSxLQUNJO0FBQUEsOEJBQ2tDUixXQURsQyxDQUNJUyxrQkFESjtBQUFBLE1BQ0lBLGtCQURKLHNDQUN5QixJQUR6QjtBQUFBLE1BR0lDLFdBSEosR0FHa0NMLE9BSGxDLENBR0lLLFdBSEo7QUFBQSxNQUdpQkMsWUFIakIsR0FHa0NOLE9BSGxDLENBR2lCTSxZQUhqQjs7QUFLSixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFFBQW9CQyxTQUFwQixTQUFHQyxNQUFILENBQWFOLEtBQWI7QUFBQSxXQUNuQkwsUUFBUSxDQUFDSSxNQUFNLENBQUNRLElBQVAsS0FBZ0IsU0FBaEIsR0FBNEJGLFNBQVMsS0FBSyxPQUExQyxHQUFvREEsU0FBckQsQ0FEVztBQUFBLEdBQXJCOztBQUdBLE1BQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsUUFBR0YsTUFBSCxTQUFHQSxNQUFIO0FBQUEsV0FBZ0JaLE1BQU0sQ0FBQ0QsRUFBRCxFQUFLYSxNQUFNLENBQUNOLEtBQVosQ0FBdEI7QUFBQSxHQUFuQjs7QUFFQSxNQUFNUyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFFBQUdILE1BQUgsU0FBR0EsTUFBSDtBQUFBLFdBQWdCVixPQUFPLENBQUNILEVBQUQsRUFBS2EsTUFBTSxDQUFDTixLQUFaLENBQXZCO0FBQUEsR0FBcEI7O0FBRUEsc0JBQ0UsNkJBQUMsY0FBRCxDQUFPLEtBQVA7QUFDRSxJQUFBLFFBQVEsRUFBRVQsUUFBUSxJQUFLVSxrQkFBa0IsSUFBSUgsUUFEL0M7QUFFRSxJQUFBLEVBQUUsRUFBRUwsRUFGTjtBQUdFLElBQUEsSUFBSSxFQUFFQSxFQUhSO0FBSUUsSUFBQSxNQUFNLEVBQUUsQ0FBQ0ssUUFBRCxHQUFZVSxVQUFaLEdBQXlCRSxTQUpuQztBQUtFLElBQUEsUUFBUSxFQUFFLENBQUNaLFFBQUQsR0FBWU0sWUFBWixHQUEyQk0sU0FMdkM7QUFNRSxJQUFBLE9BQU8sRUFBRSxDQUFDWixRQUFELEdBQVlXLFdBQVosR0FBMEJDLFNBTnJDO0FBT0UsSUFBQSxLQUFLLFlBQUtWLEtBQUw7QUFQUCxLQVNHRSxXQUFXLENBQUNTLEdBQVosQ0FBZ0IsaUJBQTZDQyxDQUE3QztBQUFBLFFBQVVDLFdBQVYsU0FBR2IsS0FBSDtBQUFBLFFBQThCYyxXQUE5QixTQUF1QkMsS0FBdkI7QUFBQSx3QkFDZiw2QkFBQyxjQUFEO0FBQ0UsTUFBQSxTQUFTLEVBQUVILENBQUMsS0FBSyxDQUFOLEdBQVV0QixTQUFWLEdBQXNCLEtBRG5DO0FBRUUsTUFBQSxRQUFRLEVBQUVhLFlBQVksSUFBSUEsWUFBWSxDQUFDYSxPQUFiLENBQXFCaEIsS0FBckIsTUFBZ0MsQ0FBQyxDQUY3RDtBQUdFLE1BQUEsR0FBRyxZQUFLYSxXQUFMLENBSEw7QUFJRSxNQUFBLEtBQUssWUFBS0EsV0FBTDtBQUpQLE9BTUdDLFdBTkgsQ0FEZTtBQUFBLEdBQWhCLENBVEgsQ0FERjtBQXNCRCxDQWpERDs7ZUFtRGV6QixXIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tZWxzZS1yZXR1cm4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBSYWRpbyBmcm9tICdhbnRkL2xpYi9yYWRpbyc7XHJcblxyXG5jb25zdCBSYWRpb1dpZGdldCA9ICh7XHJcbiAgYXV0b2ZvY3VzLFxyXG4gIGRpc2FibGVkLFxyXG4gIGZvcm1Db250ZXh0LFxyXG4gIGlkLFxyXG4gIC8vIGxhYmVsLFxyXG4gIG9uQmx1cixcclxuICBvbkNoYW5nZSxcclxuICBvbkZvY3VzLFxyXG4gIG9wdGlvbnMsXHJcbiAgLy8gcGxhY2Vob2xkZXIsXHJcbiAgcmVhZG9ubHksXHJcbiAgLy8gcmVxdWlyZWQsXHJcbiAgc2NoZW1hLFxyXG4gIHZhbHVlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgeyByZWFkb25seUFzRGlzYWJsZWQgPSB0cnVlIH0gPSBmb3JtQ29udGV4dDtcclxuXHJcbiAgY29uc3QgeyBlbnVtT3B0aW9ucywgZW51bURpc2FibGVkIH0gPSBvcHRpb25zO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgdmFsdWU6IG5leHRWYWx1ZSB9IH0pID0+XHJcbiAgICBvbkNoYW5nZShzY2hlbWEudHlwZSA9PT0gJ2Jvb2xlYW4nID8gbmV4dFZhbHVlICE9PSAnZmFsc2UnIDogbmV4dFZhbHVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmx1ciA9ICh7IHRhcmdldCB9KSA9PiBvbkJsdXIoaWQsIHRhcmdldC52YWx1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvY3VzID0gKHsgdGFyZ2V0IH0pID0+IG9uRm9jdXMoaWQsIHRhcmdldC52YWx1ZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8IChyZWFkb25seUFzRGlzYWJsZWQgJiYgcmVhZG9ubHkpfVxyXG4gICAgICBpZD17aWR9XHJcbiAgICAgIG5hbWU9e2lkfVxyXG4gICAgICBvbkJsdXI9eyFyZWFkb25seSA/IGhhbmRsZUJsdXIgOiB1bmRlZmluZWR9XHJcbiAgICAgIG9uQ2hhbmdlPXshcmVhZG9ubHkgPyBoYW5kbGVDaGFuZ2UgOiB1bmRlZmluZWR9XHJcbiAgICAgIG9uRm9jdXM9eyFyZWFkb25seSA/IGhhbmRsZUZvY3VzIDogdW5kZWZpbmVkfVxyXG4gICAgICB2YWx1ZT17YCR7dmFsdWV9YH1cclxuICAgID5cclxuICAgICAge2VudW1PcHRpb25zLm1hcCgoeyB2YWx1ZTogb3B0aW9uVmFsdWUsIGxhYmVsOiBvcHRpb25MYWJlbCB9LCBpKSA9PiAoXHJcbiAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICBhdXRvRm9jdXM9e2kgPT09IDAgPyBhdXRvZm9jdXMgOiBmYWxzZX1cclxuICAgICAgICAgIGRpc2FibGVkPXtlbnVtRGlzYWJsZWQgJiYgZW51bURpc2FibGVkLmluZGV4T2YodmFsdWUpICE9PSAtMX1cclxuICAgICAgICAgIGtleT17YCR7b3B0aW9uVmFsdWV9YH1cclxuICAgICAgICAgIHZhbHVlPXtgJHtvcHRpb25WYWx1ZX1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtvcHRpb25MYWJlbH1cclxuICAgICAgICA8L1JhZGlvPlxyXG4gICAgICApKX1cclxuICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhZGlvV2lkZ2V0O1xyXG4iXX0=