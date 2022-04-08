"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function TextareaWidget(props) {
  var id = props.id,
      options = props.options,
      placeholder = props.placeholder,
      value = props.value,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      autofocus = props.autofocus,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus;

  var _onChange = function _onChange(_ref) {
    var value = _ref.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  return _react["default"].createElement("textarea", {
    id: id,
    className: "form-control",
    value: value ? value : "",
    placeholder: placeholder,
    required: required,
    disabled: disabled,
    readOnly: readonly,
    autoFocus: autofocus,
    rows: options.rows,
    onBlur: onBlur && function (event) {
      return onBlur(id, event.target.value);
    },
    onFocus: onFocus && function (event) {
      return onFocus(id, event.target.value);
    },
    onChange: _onChange
  });
}

TextareaWidget.defaultProps = {
  autofocus: false,
  options: {}
};

if (process.env.NODE_ENV !== "production") {
  TextareaWidget.propTypes = {
    schema: _propTypes["default"].object.isRequired,
    id: _propTypes["default"].string.isRequired,
    placeholder: _propTypes["default"].string,
    options: _propTypes["default"].shape({
      rows: _propTypes["default"].number
    }),
    value: _propTypes["default"].string,
    required: _propTypes["default"].bool,
    disabled: _propTypes["default"].bool,
    readonly: _propTypes["default"].bool,
    autofocus: _propTypes["default"].bool,
    onChange: _propTypes["default"].func,
    onBlur: _propTypes["default"].func,
    onFocus: _propTypes["default"].func
  };
}

var _default = TextareaWidget;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvVGV4dGFyZWFXaWRnZXQuanMiXSwibmFtZXMiOlsiVGV4dGFyZWFXaWRnZXQiLCJwcm9wcyIsImlkIiwib3B0aW9ucyIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJyZXF1aXJlZCIsImRpc2FibGVkIiwicmVhZG9ubHkiLCJhdXRvZm9jdXMiLCJvbkNoYW5nZSIsIm9uQmx1ciIsIm9uRm9jdXMiLCJfb25DaGFuZ2UiLCJ0YXJnZXQiLCJlbXB0eVZhbHVlIiwicm93cyIsImV2ZW50IiwiZGVmYXVsdFByb3BzIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwicHJvcFR5cGVzIiwic2NoZW1hIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsInNoYXBlIiwibnVtYmVyIiwiYm9vbCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUEsTUFFM0JDLEVBRjJCLEdBYXpCRCxLQWJ5QixDQUUzQkMsRUFGMkI7QUFBQSxNQUczQkMsT0FIMkIsR0FhekJGLEtBYnlCLENBRzNCRSxPQUgyQjtBQUFBLE1BSTNCQyxXQUoyQixHQWF6QkgsS0FieUIsQ0FJM0JHLFdBSjJCO0FBQUEsTUFLM0JDLEtBTDJCLEdBYXpCSixLQWJ5QixDQUszQkksS0FMMkI7QUFBQSxNQU0zQkMsUUFOMkIsR0FhekJMLEtBYnlCLENBTTNCSyxRQU4yQjtBQUFBLE1BTzNCQyxRQVAyQixHQWF6Qk4sS0FieUIsQ0FPM0JNLFFBUDJCO0FBQUEsTUFRM0JDLFFBUjJCLEdBYXpCUCxLQWJ5QixDQVEzQk8sUUFSMkI7QUFBQSxNQVMzQkMsU0FUMkIsR0FhekJSLEtBYnlCLENBUzNCUSxTQVQyQjtBQUFBLE1BVTNCQyxRQVYyQixHQWF6QlQsS0FieUIsQ0FVM0JTLFFBVjJCO0FBQUEsTUFXM0JDLE1BWDJCLEdBYXpCVixLQWJ5QixDQVczQlUsTUFYMkI7QUFBQSxNQVkzQkMsT0FaMkIsR0FhekJYLEtBYnlCLENBWTNCVyxPQVoyQjs7QUFjN0IsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBMkI7QUFBQSxRQUFkUixLQUFjLFFBQXhCUyxNQUF3QixDQUFkVCxLQUFjO0FBQzNDLFdBQU9LLFFBQVEsQ0FBQ0wsS0FBSyxLQUFLLEVBQVYsR0FBZUYsT0FBTyxDQUFDWSxVQUF2QixHQUFvQ1YsS0FBckMsQ0FBZjtBQUNELEdBRkQ7O0FBR0EsU0FDRTtBQUNFLElBQUEsRUFBRSxFQUFFSCxFQUROO0FBRUUsSUFBQSxTQUFTLEVBQUMsY0FGWjtBQUdFLElBQUEsS0FBSyxFQUFFRyxLQUFLLEdBQUdBLEtBQUgsR0FBVyxFQUh6QjtBQUlFLElBQUEsV0FBVyxFQUFFRCxXQUpmO0FBS0UsSUFBQSxRQUFRLEVBQUVFLFFBTFo7QUFNRSxJQUFBLFFBQVEsRUFBRUMsUUFOWjtBQU9FLElBQUEsUUFBUSxFQUFFQyxRQVBaO0FBUUUsSUFBQSxTQUFTLEVBQUVDLFNBUmI7QUFTRSxJQUFBLElBQUksRUFBRU4sT0FBTyxDQUFDYSxJQVRoQjtBQVVFLElBQUEsTUFBTSxFQUFFTCxNQUFNLElBQUssVUFBQU0sS0FBSztBQUFBLGFBQUlOLE1BQU0sQ0FBQ1QsRUFBRCxFQUFLZSxLQUFLLENBQUNILE1BQU4sQ0FBYVQsS0FBbEIsQ0FBVjtBQUFBLEtBVjFCO0FBV0UsSUFBQSxPQUFPLEVBQUVPLE9BQU8sSUFBSyxVQUFBSyxLQUFLO0FBQUEsYUFBSUwsT0FBTyxDQUFDVixFQUFELEVBQUtlLEtBQUssQ0FBQ0gsTUFBTixDQUFhVCxLQUFsQixDQUFYO0FBQUEsS0FYNUI7QUFZRSxJQUFBLFFBQVEsRUFBRVE7QUFaWixJQURGO0FBZ0JEOztBQUVEYixjQUFjLENBQUNrQixZQUFmLEdBQThCO0FBQzVCVCxFQUFBQSxTQUFTLEVBQUUsS0FEaUI7QUFFNUJOLEVBQUFBLE9BQU8sRUFBRTtBQUZtQixDQUE5Qjs7QUFLQSxJQUFJZ0IsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDekNyQixFQUFBQSxjQUFjLENBQUNzQixTQUFmLEdBQTJCO0FBQ3pCQyxJQUFBQSxNQUFNLEVBQUVDLHNCQUFVQyxNQUFWLENBQWlCQyxVQURBO0FBRXpCeEIsSUFBQUEsRUFBRSxFQUFFc0Isc0JBQVVHLE1BQVYsQ0FBaUJELFVBRkk7QUFHekJ0QixJQUFBQSxXQUFXLEVBQUVvQixzQkFBVUcsTUFIRTtBQUl6QnhCLElBQUFBLE9BQU8sRUFBRXFCLHNCQUFVSSxLQUFWLENBQWdCO0FBQ3ZCWixNQUFBQSxJQUFJLEVBQUVRLHNCQUFVSztBQURPLEtBQWhCLENBSmdCO0FBT3pCeEIsSUFBQUEsS0FBSyxFQUFFbUIsc0JBQVVHLE1BUFE7QUFRekJyQixJQUFBQSxRQUFRLEVBQUVrQixzQkFBVU0sSUFSSztBQVN6QnZCLElBQUFBLFFBQVEsRUFBRWlCLHNCQUFVTSxJQVRLO0FBVXpCdEIsSUFBQUEsUUFBUSxFQUFFZ0Isc0JBQVVNLElBVks7QUFXekJyQixJQUFBQSxTQUFTLEVBQUVlLHNCQUFVTSxJQVhJO0FBWXpCcEIsSUFBQUEsUUFBUSxFQUFFYyxzQkFBVU8sSUFaSztBQWF6QnBCLElBQUFBLE1BQU0sRUFBRWEsc0JBQVVPLElBYk87QUFjekJuQixJQUFBQSxPQUFPLEVBQUVZLHNCQUFVTztBQWRNLEdBQTNCO0FBZ0JEOztlQUVjL0IsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuZnVuY3Rpb24gVGV4dGFyZWFXaWRnZXQocHJvcHMpIHtcclxuICBjb25zdCB7XHJcbiAgICBpZCxcclxuICAgIG9wdGlvbnMsXHJcbiAgICBwbGFjZWhvbGRlcixcclxuICAgIHZhbHVlLFxyXG4gICAgcmVxdWlyZWQsXHJcbiAgICBkaXNhYmxlZCxcclxuICAgIHJlYWRvbmx5LFxyXG4gICAgYXV0b2ZvY3VzLFxyXG4gICAgb25DaGFuZ2UsXHJcbiAgICBvbkJsdXIsXHJcbiAgICBvbkZvY3VzLFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBfb25DaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XHJcbiAgICByZXR1cm4gb25DaGFuZ2UodmFsdWUgPT09IFwiXCIgPyBvcHRpb25zLmVtcHR5VmFsdWUgOiB2YWx1ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPHRleHRhcmVhXHJcbiAgICAgIGlkPXtpZH1cclxuICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgdmFsdWU9e3ZhbHVlID8gdmFsdWUgOiBcIlwifVxyXG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICByZWFkT25seT17cmVhZG9ubHl9XHJcbiAgICAgIGF1dG9Gb2N1cz17YXV0b2ZvY3VzfVxyXG4gICAgICByb3dzPXtvcHRpb25zLnJvd3N9XHJcbiAgICAgIG9uQmx1cj17b25CbHVyICYmIChldmVudCA9PiBvbkJsdXIoaWQsIGV2ZW50LnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICBvbkZvY3VzPXtvbkZvY3VzICYmIChldmVudCA9PiBvbkZvY3VzKGlkLCBldmVudC50YXJnZXQudmFsdWUpKX1cclxuICAgICAgb25DaGFuZ2U9e19vbkNoYW5nZX1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuVGV4dGFyZWFXaWRnZXQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGF1dG9mb2N1czogZmFsc2UsXHJcbiAgb3B0aW9uczoge30sXHJcbn07XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgVGV4dGFyZWFXaWRnZXQucHJvcFR5cGVzID0ge1xyXG4gICAgc2NoZW1hOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICByb3dzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgfSksXHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHJlYWRvbmx5OiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGF1dG9mb2N1czogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWFXaWRnZXQ7XHJcbiJdfQ==