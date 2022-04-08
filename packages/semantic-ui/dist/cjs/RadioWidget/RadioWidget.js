"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function RadioWidget(props) {
  var id = props.id,
      value = props.value,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      schema = props.schema,
      options = props.options,
      formContext = props.formContext,
      uiSchema = props.uiSchema; // Generating a unique field name to identify this set of radio buttons

  var name = Math.random().toString();
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;
  var semanticProps = (0, _util.getSemanticProps)({
    formContext: formContext,
    options: options,
    uiSchema: uiSchema
  }); // eslint-disable-next-line no-shadow

  var _onChange = function _onChange(event, _ref) {
    var eventValue = _ref.value;
    return onChange && onChange(schema.type === "boolean" ? eventValue !== "false" : eventValue);
  };

  var _onBlur = function _onBlur() {
    return onBlur && onBlur(id, value);
  };

  var _onFocus = function _onFocus() {
    return onFocus && onFocus(id, value);
  };

  var inlineOption = options.inline ? {
    inline: true
  } : {
    grouped: true
  };
  return _react.default.createElement(_semanticUiReact.Form.Group, inlineOption, enumOptions.map(function (option, i) {
    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) !== -1;
    return _react.default.createElement(_semanticUiReact.Form.Field, _extends({
      required: required,
      control: _semanticUiReact.Radio,
      name: name
    }, semanticProps, {
      onFocus: _onFocus,
      onBlur: _onBlur,
      label: "".concat(option.label),
      value: "".concat(option.value),
      key: "".concat(option.value, "-").concat(i),
      checked: value == option.value,
      onChange: _onChange,
      disabled: disabled || itemDisabled || readonly
    }));
  }));
}

var _default = RadioWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SYWRpb1dpZGdldC9SYWRpb1dpZGdldC5qcyJdLCJuYW1lcyI6WyJSYWRpb1dpZGdldCIsInByb3BzIiwiaWQiLCJ2YWx1ZSIsInJlcXVpcmVkIiwiZGlzYWJsZWQiLCJyZWFkb25seSIsIm9uQ2hhbmdlIiwib25CbHVyIiwib25Gb2N1cyIsInNjaGVtYSIsIm9wdGlvbnMiLCJmb3JtQ29udGV4dCIsInVpU2NoZW1hIiwibmFtZSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsImVudW1PcHRpb25zIiwiZW51bURpc2FibGVkIiwic2VtYW50aWNQcm9wcyIsIl9vbkNoYW5nZSIsImV2ZW50IiwiZXZlbnRWYWx1ZSIsInR5cGUiLCJfb25CbHVyIiwiX29uRm9jdXMiLCJpbmxpbmVPcHRpb24iLCJpbmxpbmUiLCJncm91cGVkIiwibWFwIiwib3B0aW9uIiwiaSIsIml0ZW1EaXNhYmxlZCIsImluZGV4T2YiLCJSYWRpbyIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUEsTUFFeEJDLEVBRndCLEdBY3RCRCxLQWRzQixDQUV4QkMsRUFGd0I7QUFBQSxNQUd4QkMsS0FId0IsR0FjdEJGLEtBZHNCLENBR3hCRSxLQUh3QjtBQUFBLE1BSXhCQyxRQUp3QixHQWN0QkgsS0Fkc0IsQ0FJeEJHLFFBSndCO0FBQUEsTUFLeEJDLFFBTHdCLEdBY3RCSixLQWRzQixDQUt4QkksUUFMd0I7QUFBQSxNQU14QkMsUUFOd0IsR0FjdEJMLEtBZHNCLENBTXhCSyxRQU53QjtBQUFBLE1BT3hCQyxRQVB3QixHQWN0Qk4sS0Fkc0IsQ0FPeEJNLFFBUHdCO0FBQUEsTUFReEJDLE1BUndCLEdBY3RCUCxLQWRzQixDQVF4Qk8sTUFSd0I7QUFBQSxNQVN4QkMsT0FUd0IsR0FjdEJSLEtBZHNCLENBU3hCUSxPQVR3QjtBQUFBLE1BVXhCQyxNQVZ3QixHQWN0QlQsS0Fkc0IsQ0FVeEJTLE1BVndCO0FBQUEsTUFXeEJDLE9BWHdCLEdBY3RCVixLQWRzQixDQVd4QlUsT0FYd0I7QUFBQSxNQVl4QkMsV0Fad0IsR0FjdEJYLEtBZHNCLENBWXhCVyxXQVp3QjtBQUFBLE1BYXhCQyxRQWJ3QixHQWN0QlosS0Fkc0IsQ0FheEJZLFFBYndCLEVBZTFCOztBQUNBLE1BQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxNQUFMLEdBQWNDLFFBQWQsRUFBYjtBQWhCMEIsTUFpQmxCQyxXQWpCa0IsR0FpQllQLE9BakJaLENBaUJsQk8sV0FqQmtCO0FBQUEsTUFpQkxDLFlBakJLLEdBaUJZUixPQWpCWixDQWlCTFEsWUFqQks7QUFrQjFCLE1BQU1DLGFBQWEsR0FBRyw0QkFDcEI7QUFBRVIsSUFBQUEsV0FBVyxFQUFYQSxXQUFGO0FBQ0VELElBQUFBLE9BQU8sRUFBUEEsT0FERjtBQUVFRSxJQUFBQSxRQUFRLEVBQVJBO0FBRkYsR0FEb0IsQ0FBdEIsQ0FsQjBCLENBdUIxQjs7QUFDQSxNQUFNUSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELFFBQW1DO0FBQUEsUUFBakJDLFVBQWlCLFFBQXpCcEIsS0FBeUI7QUFDbkQsV0FBT0ksUUFBUSxJQUFLQSxRQUFRLENBQUNHLE1BQU0sQ0FBQ2MsSUFBUCxLQUFnQixTQUFoQixHQUE0QkQsVUFBVSxLQUFLLE9BQTNDLEdBQXFEQSxVQUF0RCxDQUE1QjtBQUErRixHQURqRzs7QUFFQSxNQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFdBQU1qQixNQUFNLElBQUlBLE1BQU0sQ0FBQ04sRUFBRCxFQUFLQyxLQUFMLENBQXRCO0FBQUEsR0FBaEI7O0FBQ0EsTUFBTXVCLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsV0FBTWpCLE9BQU8sSUFBSUEsT0FBTyxDQUFDUCxFQUFELEVBQUtDLEtBQUwsQ0FBeEI7QUFBQSxHQUFqQjs7QUFDQSxNQUFNd0IsWUFBWSxHQUFHaEIsT0FBTyxDQUFDaUIsTUFBUixHQUFpQjtBQUFFQSxJQUFBQSxNQUFNLEVBQUU7QUFBVixHQUFqQixHQUFvQztBQUFFQyxJQUFBQSxPQUFPLEVBQUU7QUFBWCxHQUF6RDtBQUNBLFNBQ0UsNkJBQUMscUJBQUQsQ0FBTSxLQUFOLEVBQWdCRixZQUFoQixFQUNHVCxXQUFXLENBQUNZLEdBQVosQ0FBZ0IsVUFBQ0MsTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFDOUIsUUFBTUMsWUFBWSxHQUNoQmQsWUFBWSxJQUFJQSxZQUFZLENBQUNlLE9BQWIsQ0FBcUJILE1BQU0sQ0FBQzVCLEtBQTVCLE1BQXVDLENBQUMsQ0FEMUQ7QUFFQSxXQUNFLDZCQUFDLHFCQUFELENBQU0sS0FBTjtBQUNFLE1BQUEsUUFBUSxFQUFFQyxRQURaO0FBRUUsTUFBQSxPQUFPLEVBQUUrQixzQkFGWDtBQUdFLE1BQUEsSUFBSSxFQUFFckI7QUFIUixPQUlNTSxhQUpOO0FBS0UsTUFBQSxPQUFPLEVBQUVNLFFBTFg7QUFNRSxNQUFBLE1BQU0sRUFBRUQsT0FOVjtBQU9FLE1BQUEsS0FBSyxZQUFLTSxNQUFNLENBQUNLLEtBQVosQ0FQUDtBQVFFLE1BQUEsS0FBSyxZQUFLTCxNQUFNLENBQUM1QixLQUFaLENBUlA7QUFTRSxNQUFBLEdBQUcsWUFBSzRCLE1BQU0sQ0FBQzVCLEtBQVosY0FBcUI2QixDQUFyQixDQVRMO0FBVUUsTUFBQSxPQUFPLEVBQUU3QixLQUFLLElBQUk0QixNQUFNLENBQUM1QixLQVYzQjtBQVdFLE1BQUEsUUFBUSxFQUFFa0IsU0FYWjtBQVlFLE1BQUEsUUFBUSxFQUFFaEIsUUFBUSxJQUFJNEIsWUFBWixJQUE0QjNCO0FBWnhDLE9BREY7QUFnQkQsR0FuQkEsQ0FESCxDQURGO0FBd0JEOztlQUNjTixXIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LW5vLXVuZGVmLHJlYWN0L25vLWFycmF5LWluZGV4LWtleSxyZWFjdC9wcm9wLXR5cGVzICovXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgUmFkaW8gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0U2VtYW50aWNQcm9wcyB9IGZyb20gXCIuLi91dGlsXCI7XHJcblxyXG5mdW5jdGlvbiBSYWRpb1dpZGdldChwcm9wcykge1xyXG4gIGNvbnN0IHtcclxuICAgIGlkLFxyXG4gICAgdmFsdWUsXHJcbiAgICByZXF1aXJlZCxcclxuICAgIGRpc2FibGVkLFxyXG4gICAgcmVhZG9ubHksXHJcbiAgICBvbkNoYW5nZSxcclxuICAgIG9uQmx1cixcclxuICAgIG9uRm9jdXMsXHJcbiAgICBzY2hlbWEsXHJcbiAgICBvcHRpb25zLFxyXG4gICAgZm9ybUNvbnRleHQsXHJcbiAgICB1aVNjaGVtYSxcclxuICB9ID0gcHJvcHM7XHJcbiAgLy8gR2VuZXJhdGluZyBhIHVuaXF1ZSBmaWVsZCBuYW1lIHRvIGlkZW50aWZ5IHRoaXMgc2V0IG9mIHJhZGlvIGJ1dHRvbnNcclxuICBjb25zdCBuYW1lID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygpO1xyXG4gIGNvbnN0IHsgZW51bU9wdGlvbnMsIGVudW1EaXNhYmxlZCB9ID0gb3B0aW9ucztcclxuICBjb25zdCBzZW1hbnRpY1Byb3BzID0gZ2V0U2VtYW50aWNQcm9wcyhcclxuICAgIHsgZm9ybUNvbnRleHQsXHJcbiAgICAgIG9wdGlvbnMsXHJcbiAgICAgIHVpU2NoZW1hLFxyXG4gICAgfSk7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xyXG4gIGNvbnN0IF9vbkNoYW5nZSA9IChldmVudCwgeyB2YWx1ZSA6IGV2ZW50VmFsdWUgfSkgPT4ge1xyXG4gICAgcmV0dXJuIG9uQ2hhbmdlICYmICBvbkNoYW5nZShzY2hlbWEudHlwZSA9PT0gXCJib29sZWFuXCIgPyBldmVudFZhbHVlICE9PSBcImZhbHNlXCIgOiBldmVudFZhbHVlKTt9O1xyXG4gIGNvbnN0IF9vbkJsdXIgPSAoKSA9PiBvbkJsdXIgJiYgb25CbHVyKGlkLCB2YWx1ZSk7XHJcbiAgY29uc3QgX29uRm9jdXMgPSAoKSA9PiBvbkZvY3VzICYmIG9uRm9jdXMoaWQsIHZhbHVlKTtcclxuICBjb25zdCBpbmxpbmVPcHRpb24gPSBvcHRpb25zLmlubGluZSA/IHsgaW5saW5lOiB0cnVlIH0gOiB7IGdyb3VwZWQ6IHRydWUgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0uR3JvdXAgey4uLmlubGluZU9wdGlvbn0+XHJcbiAgICAgIHtlbnVtT3B0aW9ucy5tYXAoKG9wdGlvbiwgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1EaXNhYmxlZCA9XHJcbiAgICAgICAgICBlbnVtRGlzYWJsZWQgJiYgZW51bURpc2FibGVkLmluZGV4T2Yob3B0aW9uLnZhbHVlKSAhPT0gLTE7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxGb3JtLkZpZWxkXHJcbiAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgY29udHJvbD17UmFkaW99XHJcbiAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgIHsuLi5zZW1hbnRpY1Byb3BzfVxyXG4gICAgICAgICAgICBvbkZvY3VzPXtfb25Gb2N1c31cclxuICAgICAgICAgICAgb25CbHVyPXtfb25CbHVyfVxyXG4gICAgICAgICAgICBsYWJlbD17YCR7b3B0aW9uLmxhYmVsfWB9XHJcbiAgICAgICAgICAgIHZhbHVlPXtgJHtvcHRpb24udmFsdWV9YH1cclxuICAgICAgICAgICAga2V5PXtgJHtvcHRpb24udmFsdWV9LSR7aX1gfVxyXG4gICAgICAgICAgICBjaGVja2VkPXt2YWx1ZSA9PSBvcHRpb24udmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtfb25DaGFuZ2V9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCBpdGVtRGlzYWJsZWQgfHwgcmVhZG9ubHl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9Gb3JtLkdyb3VwPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUmFkaW9XaWRnZXQ7XHJcbiJdfQ==