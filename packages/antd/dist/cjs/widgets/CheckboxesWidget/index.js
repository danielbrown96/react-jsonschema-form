"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _checkbox = _interopRequireDefault(require("antd/lib/checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxesWidget = function CheckboxesWidget(_ref) {
  var autofocus = _ref.autofocus,
      disabled = _ref.disabled,
      formContext = _ref.formContext,
      id = _ref.id,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      options = _ref.options,
      readonly = _ref.readonly,
      value = _ref.value;
  var _formContext$readonly = formContext.readonlyAsDisabled,
      readonlyAsDisabled = _formContext$readonly === void 0 ? true : _formContext$readonly;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled,
      inline = options.inline;

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

  return !_lodash.default.isEmpty(enumOptions) ? /*#__PURE__*/_react.default.createElement(_checkbox.default.Group, {
    disabled: disabled || readonlyAsDisabled && readonly,
    id: id,
    name: id,
    onBlur: !readonly ? handleBlur : undefined,
    onChange: !readonly ? handleChange : undefined,
    onFocus: !readonly ? handleFocus : undefined,
    value: value
  }, enumOptions.map(function (_ref4, i) {
    var optionValue = _ref4.value,
        optionLabel = _ref4.label;
    return /*#__PURE__*/_react.default.createElement("span", {
      key: optionValue
    }, /*#__PURE__*/_react.default.createElement(_checkbox.default, {
      autoFocus: i === 0 ? autofocus : false,
      disabled: enumDisabled && enumDisabled.indexOf(value) !== -1,
      value: optionValue
    }, optionLabel), !inline && /*#__PURE__*/_react.default.createElement("br", null));
  })) : null;
};

var _default = CheckboxesWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93aWRnZXRzL0NoZWNrYm94ZXNXaWRnZXQvaW5kZXguanMiXSwibmFtZXMiOlsiQ2hlY2tib3hlc1dpZGdldCIsImF1dG9mb2N1cyIsImRpc2FibGVkIiwiZm9ybUNvbnRleHQiLCJpZCIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwib25Gb2N1cyIsIm9wdGlvbnMiLCJyZWFkb25seSIsInZhbHVlIiwicmVhZG9ubHlBc0Rpc2FibGVkIiwiZW51bU9wdGlvbnMiLCJlbnVtRGlzYWJsZWQiLCJpbmxpbmUiLCJoYW5kbGVDaGFuZ2UiLCJuZXh0VmFsdWUiLCJoYW5kbGVCbHVyIiwidGFyZ2V0IiwiaGFuZGxlRm9jdXMiLCJfIiwiaXNFbXB0eSIsInVuZGVmaW5lZCIsIm1hcCIsImkiLCJvcHRpb25WYWx1ZSIsIm9wdGlvbkxhYmVsIiwibGFiZWwiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BZW5CO0FBQUEsTUFkSkMsU0FjSSxRQWRKQSxTQWNJO0FBQUEsTUFiSkMsUUFhSSxRQWJKQSxRQWFJO0FBQUEsTUFaSkMsV0FZSSxRQVpKQSxXQVlJO0FBQUEsTUFYSkMsRUFXSSxRQVhKQSxFQVdJO0FBQUEsTUFUSkMsTUFTSSxRQVRKQSxNQVNJO0FBQUEsTUFSSkMsUUFRSSxRQVJKQSxRQVFJO0FBQUEsTUFQSkMsT0FPSSxRQVBKQSxPQU9JO0FBQUEsTUFOSkMsT0FNSSxRQU5KQSxPQU1JO0FBQUEsTUFKSkMsUUFJSSxRQUpKQSxRQUlJO0FBQUEsTUFESkMsS0FDSSxRQURKQSxLQUNJO0FBQUEsOEJBQ2tDUCxXQURsQyxDQUNJUSxrQkFESjtBQUFBLE1BQ0lBLGtCQURKLHNDQUN5QixJQUR6QjtBQUFBLE1BR0lDLFdBSEosR0FHMENKLE9BSDFDLENBR0lJLFdBSEo7QUFBQSxNQUdpQkMsWUFIakIsR0FHMENMLE9BSDFDLENBR2lCSyxZQUhqQjtBQUFBLE1BRytCQyxNQUgvQixHQUcwQ04sT0FIMUMsQ0FHK0JNLE1BSC9COztBQUtKLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLFNBQUQ7QUFBQSxXQUFlVixRQUFRLENBQUNVLFNBQUQsQ0FBdkI7QUFBQSxHQUFyQjs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFFBQUdDLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFdBQWdCYixNQUFNLENBQUNELEVBQUQsRUFBS2MsTUFBTSxDQUFDUixLQUFaLENBQXRCO0FBQUEsR0FBbkI7O0FBRUEsTUFBTVMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxRQUFHRCxNQUFILFNBQUdBLE1BQUg7QUFBQSxXQUFnQlgsT0FBTyxDQUFDSCxFQUFELEVBQUtjLE1BQU0sQ0FBQ1IsS0FBWixDQUF2QjtBQUFBLEdBQXBCOztBQUVBLFNBQU8sQ0FBQ1UsZ0JBQUVDLE9BQUYsQ0FBVVQsV0FBVixDQUFELGdCQUNMLDZCQUFDLGlCQUFELENBQVUsS0FBVjtBQUNFLElBQUEsUUFBUSxFQUFFVixRQUFRLElBQUtTLGtCQUFrQixJQUFJRixRQUQvQztBQUVFLElBQUEsRUFBRSxFQUFFTCxFQUZOO0FBR0UsSUFBQSxJQUFJLEVBQUVBLEVBSFI7QUFJRSxJQUFBLE1BQU0sRUFBRSxDQUFDSyxRQUFELEdBQVlRLFVBQVosR0FBeUJLLFNBSm5DO0FBS0UsSUFBQSxRQUFRLEVBQUUsQ0FBQ2IsUUFBRCxHQUFZTSxZQUFaLEdBQTJCTyxTQUx2QztBQU1FLElBQUEsT0FBTyxFQUFFLENBQUNiLFFBQUQsR0FBWVUsV0FBWixHQUEwQkcsU0FOckM7QUFPRSxJQUFBLEtBQUssRUFBRVo7QUFQVCxLQVNHRSxXQUFXLENBQUNXLEdBQVosQ0FBZ0IsaUJBQTZDQyxDQUE3QztBQUFBLFFBQVVDLFdBQVYsU0FBR2YsS0FBSDtBQUFBLFFBQThCZ0IsV0FBOUIsU0FBdUJDLEtBQXZCO0FBQUEsd0JBQ2Y7QUFBTSxNQUFBLEdBQUcsRUFBRUY7QUFBWCxvQkFDRSw2QkFBQyxpQkFBRDtBQUNFLE1BQUEsU0FBUyxFQUFFRCxDQUFDLEtBQUssQ0FBTixHQUFVdkIsU0FBVixHQUFzQixLQURuQztBQUVFLE1BQUEsUUFBUSxFQUFFWSxZQUFZLElBQUlBLFlBQVksQ0FBQ2UsT0FBYixDQUFxQmxCLEtBQXJCLE1BQWdDLENBQUMsQ0FGN0Q7QUFHRSxNQUFBLEtBQUssRUFBRWU7QUFIVCxPQUtHQyxXQUxILENBREYsRUFRRyxDQUFDWixNQUFELGlCQUFXLHdDQVJkLENBRGU7QUFBQSxHQUFoQixDQVRILENBREssR0F1QkgsSUF2Qko7QUF3QkQsQ0FsREQ7O2VBb0RlZCxnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnYW50ZC9saWIvY2hlY2tib3gnO1xyXG5cclxuY29uc3QgQ2hlY2tib3hlc1dpZGdldCA9ICh7XHJcbiAgYXV0b2ZvY3VzLFxyXG4gIGRpc2FibGVkLFxyXG4gIGZvcm1Db250ZXh0LFxyXG4gIGlkLFxyXG4gIC8vIGxhYmVsLFxyXG4gIG9uQmx1cixcclxuICBvbkNoYW5nZSxcclxuICBvbkZvY3VzLFxyXG4gIG9wdGlvbnMsXHJcbiAgLy8gcGxhY2Vob2xkZXIsXHJcbiAgcmVhZG9ubHksXHJcbiAgLy8gcmVxdWlyZWQsXHJcbiAgLy8gc2NoZW1hLFxyXG4gIHZhbHVlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgeyByZWFkb25seUFzRGlzYWJsZWQgPSB0cnVlIH0gPSBmb3JtQ29udGV4dDtcclxuXHJcbiAgY29uc3QgeyBlbnVtT3B0aW9ucywgZW51bURpc2FibGVkLCBpbmxpbmUgfSA9IG9wdGlvbnM7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChuZXh0VmFsdWUpID0+IG9uQ2hhbmdlKG5leHRWYWx1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoeyB0YXJnZXQgfSkgPT4gb25CbHVyKGlkLCB0YXJnZXQudmFsdWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGb2N1cyA9ICh7IHRhcmdldCB9KSA9PiBvbkZvY3VzKGlkLCB0YXJnZXQudmFsdWUpO1xyXG5cclxuICByZXR1cm4gIV8uaXNFbXB0eShlbnVtT3B0aW9ucykgPyAoXHJcbiAgICA8Q2hlY2tib3guR3JvdXBcclxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8IChyZWFkb25seUFzRGlzYWJsZWQgJiYgcmVhZG9ubHkpfVxyXG4gICAgICBpZD17aWR9XHJcbiAgICAgIG5hbWU9e2lkfVxyXG4gICAgICBvbkJsdXI9eyFyZWFkb25seSA/IGhhbmRsZUJsdXIgOiB1bmRlZmluZWR9XHJcbiAgICAgIG9uQ2hhbmdlPXshcmVhZG9ubHkgPyBoYW5kbGVDaGFuZ2UgOiB1bmRlZmluZWR9XHJcbiAgICAgIG9uRm9jdXM9eyFyZWFkb25seSA/IGhhbmRsZUZvY3VzIDogdW5kZWZpbmVkfVxyXG4gICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICA+XHJcbiAgICAgIHtlbnVtT3B0aW9ucy5tYXAoKHsgdmFsdWU6IG9wdGlvblZhbHVlLCBsYWJlbDogb3B0aW9uTGFiZWwgfSwgaSkgPT4gKFxyXG4gICAgICAgIDxzcGFuIGtleT17b3B0aW9uVmFsdWV9PlxyXG4gICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgIGF1dG9Gb2N1cz17aSA9PT0gMCA/IGF1dG9mb2N1cyA6IGZhbHNlfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17ZW51bURpc2FibGVkICYmIGVudW1EaXNhYmxlZC5pbmRleE9mKHZhbHVlKSAhPT0gLTF9XHJcbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb25WYWx1ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge29wdGlvbkxhYmVsfVxyXG4gICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgIHshaW5saW5lICYmIDxiciAvPn1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICkpfVxyXG4gICAgPC9DaGVja2JveC5Hcm91cD5cclxuICApIDogbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94ZXNXaWRnZXQ7XHJcbiJdfQ==