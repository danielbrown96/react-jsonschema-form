"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@rjsf/core");

var _slider = _interopRequireDefault(require("antd/lib/slider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-else-return */
var rangeSpec = _core.utils.rangeSpec;

var RangeWidget = function RangeWidget(_ref) {
  var autofocus = _ref.autofocus,
      disabled = _ref.disabled,
      formContext = _ref.formContext,
      id = _ref.id,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      options = _ref.options,
      placeholder = _ref.placeholder,
      readonly = _ref.readonly,
      schema = _ref.schema,
      value = _ref.value;
  var _formContext$readonly = formContext.readonlyAsDisabled,
      readonlyAsDisabled = _formContext$readonly === void 0 ? true : _formContext$readonly;

  var _rangeSpec = rangeSpec(schema),
      min = _rangeSpec.min,
      max = _rangeSpec.max,
      step = _rangeSpec.step;

  var emptyValue = options.emptyValue || '';

  var handleChange = function handleChange(nextValue) {
    return onChange(nextValue === '' ? emptyValue : nextValue);
  };

  var handleBlur = function handleBlur() {
    return onBlur(id, value);
  };

  var handleFocus = function handleFocus() {
    return onFocus(id, value);
  };

  return /*#__PURE__*/_react.default.createElement(_slider.default, {
    autoFocus: autofocus,
    disabled: disabled || readonlyAsDisabled && readonly,
    id: id,
    max: max,
    min: min,
    onBlur: !readonly ? handleBlur : undefined,
    onChange: !readonly ? handleChange : undefined,
    onFocus: !readonly ? handleFocus : undefined,
    placeholder: placeholder,
    range: false,
    step: step,
    value: value
  });
};

var _default = RangeWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93aWRnZXRzL1JhbmdlV2lkZ2V0L2luZGV4LmpzIl0sIm5hbWVzIjpbInJhbmdlU3BlYyIsInV0aWxzIiwiUmFuZ2VXaWRnZXQiLCJhdXRvZm9jdXMiLCJkaXNhYmxlZCIsImZvcm1Db250ZXh0IiwiaWQiLCJvbkJsdXIiLCJvbkNoYW5nZSIsIm9uRm9jdXMiLCJvcHRpb25zIiwicGxhY2Vob2xkZXIiLCJyZWFkb25seSIsInNjaGVtYSIsInZhbHVlIiwicmVhZG9ubHlBc0Rpc2FibGVkIiwibWluIiwibWF4Iiwic3RlcCIsImVtcHR5VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJuZXh0VmFsdWUiLCJoYW5kbGVCbHVyIiwiaGFuZGxlRm9jdXMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQUpBO0lBTVFBLFMsR0FBY0MsVyxDQUFkRCxTOztBQUVSLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BZWQ7QUFBQSxNQWRKQyxTQWNJLFFBZEpBLFNBY0k7QUFBQSxNQWJKQyxRQWFJLFFBYkpBLFFBYUk7QUFBQSxNQVpKQyxXQVlJLFFBWkpBLFdBWUk7QUFBQSxNQVhKQyxFQVdJLFFBWEpBLEVBV0k7QUFBQSxNQVRKQyxNQVNJLFFBVEpBLE1BU0k7QUFBQSxNQVJKQyxRQVFJLFFBUkpBLFFBUUk7QUFBQSxNQVBKQyxPQU9JLFFBUEpBLE9BT0k7QUFBQSxNQU5KQyxPQU1JLFFBTkpBLE9BTUk7QUFBQSxNQUxKQyxXQUtJLFFBTEpBLFdBS0k7QUFBQSxNQUpKQyxRQUlJLFFBSkpBLFFBSUk7QUFBQSxNQUZKQyxNQUVJLFFBRkpBLE1BRUk7QUFBQSxNQURKQyxLQUNJLFFBREpBLEtBQ0k7QUFBQSw4QkFDa0NULFdBRGxDLENBQ0lVLGtCQURKO0FBQUEsTUFDSUEsa0JBREosc0NBQ3lCLElBRHpCOztBQUFBLG1CQUd1QmYsU0FBUyxDQUFDYSxNQUFELENBSGhDO0FBQUEsTUFHSUcsR0FISixjQUdJQSxHQUhKO0FBQUEsTUFHU0MsR0FIVCxjQUdTQSxHQUhUO0FBQUEsTUFHY0MsSUFIZCxjQUdjQSxJQUhkOztBQUtKLE1BQU1DLFVBQVUsR0FBR1QsT0FBTyxDQUFDUyxVQUFSLElBQXNCLEVBQXpDOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLFNBQUQ7QUFBQSxXQUNuQmIsUUFBUSxDQUFDYSxTQUFTLEtBQUssRUFBZCxHQUFtQkYsVUFBbkIsR0FBZ0NFLFNBQWpDLENBRFc7QUFBQSxHQUFyQjs7QUFHQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQU1mLE1BQU0sQ0FBQ0QsRUFBRCxFQUFLUSxLQUFMLENBQVo7QUFBQSxHQUFuQjs7QUFFQSxNQUFNUyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFdBQU1kLE9BQU8sQ0FBQ0gsRUFBRCxFQUFLUSxLQUFMLENBQWI7QUFBQSxHQUFwQjs7QUFFQSxzQkFDRSw2QkFBQyxlQUFEO0FBQ0UsSUFBQSxTQUFTLEVBQUVYLFNBRGI7QUFFRSxJQUFBLFFBQVEsRUFBRUMsUUFBUSxJQUFLVyxrQkFBa0IsSUFBSUgsUUFGL0M7QUFHRSxJQUFBLEVBQUUsRUFBRU4sRUFITjtBQUlFLElBQUEsR0FBRyxFQUFFVyxHQUpQO0FBS0UsSUFBQSxHQUFHLEVBQUVELEdBTFA7QUFNRSxJQUFBLE1BQU0sRUFBRSxDQUFDSixRQUFELEdBQVlVLFVBQVosR0FBeUJFLFNBTm5DO0FBT0UsSUFBQSxRQUFRLEVBQUUsQ0FBQ1osUUFBRCxHQUFZUSxZQUFaLEdBQTJCSSxTQVB2QztBQVFFLElBQUEsT0FBTyxFQUFFLENBQUNaLFFBQUQsR0FBWVcsV0FBWixHQUEwQkMsU0FSckM7QUFTRSxJQUFBLFdBQVcsRUFBRWIsV0FUZjtBQVVFLElBQUEsS0FBSyxFQUFFLEtBVlQ7QUFXRSxJQUFBLElBQUksRUFBRU8sSUFYUjtBQVlFLElBQUEsS0FBSyxFQUFFSjtBQVpULElBREY7QUFnQkQsQ0E3Q0Q7O2VBK0NlWixXIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tZWxzZS1yZXR1cm4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSAnQHJqc2YvY29yZSc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAnYW50ZC9saWIvc2xpZGVyJztcclxuXHJcbmNvbnN0IHsgcmFuZ2VTcGVjIH0gPSB1dGlscztcclxuXHJcbmNvbnN0IFJhbmdlV2lkZ2V0ID0gKHtcclxuICBhdXRvZm9jdXMsXHJcbiAgZGlzYWJsZWQsXHJcbiAgZm9ybUNvbnRleHQsXHJcbiAgaWQsXHJcbiAgLy8gbGFiZWwsXHJcbiAgb25CbHVyLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIG9uRm9jdXMsXHJcbiAgb3B0aW9ucyxcclxuICBwbGFjZWhvbGRlcixcclxuICByZWFkb25seSxcclxuICAvLyByZXF1aXJlZCxcclxuICBzY2hlbWEsXHJcbiAgdmFsdWUsXHJcbn0pID0+IHtcclxuICBjb25zdCB7IHJlYWRvbmx5QXNEaXNhYmxlZCA9IHRydWUgfSA9IGZvcm1Db250ZXh0O1xyXG5cclxuICBjb25zdCB7IG1pbiwgbWF4LCBzdGVwIH0gPSByYW5nZVNwZWMoc2NoZW1hKTtcclxuXHJcbiAgY29uc3QgZW1wdHlWYWx1ZSA9IG9wdGlvbnMuZW1wdHlWYWx1ZSB8fCAnJztcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKG5leHRWYWx1ZSkgPT5cclxuICAgIG9uQ2hhbmdlKG5leHRWYWx1ZSA9PT0gJycgPyBlbXB0eVZhbHVlIDogbmV4dFZhbHVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmx1ciA9ICgpID0+IG9uQmx1cihpZCwgdmFsdWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGb2N1cyA9ICgpID0+IG9uRm9jdXMoaWQsIHZhbHVlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTbGlkZXJcclxuICAgICAgYXV0b0ZvY3VzPXthdXRvZm9jdXN9XHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCAocmVhZG9ubHlBc0Rpc2FibGVkICYmIHJlYWRvbmx5KX1cclxuICAgICAgaWQ9e2lkfVxyXG4gICAgICBtYXg9e21heH1cclxuICAgICAgbWluPXttaW59XHJcbiAgICAgIG9uQmx1cj17IXJlYWRvbmx5ID8gaGFuZGxlQmx1ciA6IHVuZGVmaW5lZH1cclxuICAgICAgb25DaGFuZ2U9eyFyZWFkb25seSA/IGhhbmRsZUNoYW5nZSA6IHVuZGVmaW5lZH1cclxuICAgICAgb25Gb2N1cz17IXJlYWRvbmx5ID8gaGFuZGxlRm9jdXMgOiB1bmRlZmluZWR9XHJcbiAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgcmFuZ2U9e2ZhbHNlfVxyXG4gICAgICBzdGVwPXtzdGVwfVxyXG4gICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYW5nZVdpZGdldDtcclxuIl19