"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _util = require("../util");

var _core = require("@rjsf/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var getDisplayLabel = _core.utils.getDisplayLabel;

function TextWidget(props) {
  var id = props.id,
      placeholder = props.placeholder,
      name = props.name,
      label = props.label,
      value = props.value,
      required = props.required,
      readonly = props.readonly,
      disabled = props.disabled,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      autofocus = props.autofocus,
      options = props.options,
      schema = props.schema,
      uiSchema = props.uiSchema,
      formContext = props.formContext;
  var semanticProps = (0, _util.getSemanticProps)({
    formContext: formContext,
    options: options,
    uiSchema: uiSchema
  }); // eslint-disable-next-line no-shadow

  var _onChange = function _onChange(_ref) {
    var value = _ref.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur() {
    return onBlur && onBlur(id, value);
  };

  var _onFocus = function _onFocus() {
    return onFocus && onFocus(id, value);
  };

  var displayLabel = getDisplayLabel(schema, uiSchema
  /* TODO: , rootSchema */
  );
  return _react.default.createElement(_semanticUiReact.Form.Input, _extends({
    key: id,
    id: id,
    placeholder: placeholder,
    type: schema.type === 'string' ? 'text' : "".concat(schema.type),
    label: displayLabel ? label || schema.title : false,
    required: required,
    autoFocus: autofocus,
    disabled: disabled || readonly,
    name: name
  }, semanticProps, {
    value: value || value === 0 ? value : "",
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
}

var _default = TextWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9UZXh0V2lkZ2V0L1RleHRXaWRnZXQuanMiXSwibmFtZXMiOlsiZ2V0RGlzcGxheUxhYmVsIiwidXRpbHMiLCJUZXh0V2lkZ2V0IiwicHJvcHMiLCJpZCIsInBsYWNlaG9sZGVyIiwibmFtZSIsImxhYmVsIiwidmFsdWUiLCJyZXF1aXJlZCIsInJlYWRvbmx5IiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsIm9uQmx1ciIsIm9uRm9jdXMiLCJhdXRvZm9jdXMiLCJvcHRpb25zIiwic2NoZW1hIiwidWlTY2hlbWEiLCJmb3JtQ29udGV4dCIsInNlbWFudGljUHJvcHMiLCJfb25DaGFuZ2UiLCJ0YXJnZXQiLCJlbXB0eVZhbHVlIiwiX29uQmx1ciIsIl9vbkZvY3VzIiwiZGlzcGxheUxhYmVsIiwidHlwZSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztJQUNRQSxlLEdBQW9CQyxXLENBQXBCRCxlOztBQUNSLFNBQVNFLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQUEsTUFFdkJDLEVBRnVCLEdBa0JyQkQsS0FsQnFCLENBRXZCQyxFQUZ1QjtBQUFBLE1BR3ZCQyxXQUh1QixHQWtCckJGLEtBbEJxQixDQUd2QkUsV0FIdUI7QUFBQSxNQUl2QkMsSUFKdUIsR0FrQnJCSCxLQWxCcUIsQ0FJdkJHLElBSnVCO0FBQUEsTUFLdkJDLEtBTHVCLEdBa0JyQkosS0FsQnFCLENBS3ZCSSxLQUx1QjtBQUFBLE1BTXZCQyxLQU51QixHQWtCckJMLEtBbEJxQixDQU12QkssS0FOdUI7QUFBQSxNQU92QkMsUUFQdUIsR0FrQnJCTixLQWxCcUIsQ0FPdkJNLFFBUHVCO0FBQUEsTUFRdkJDLFFBUnVCLEdBa0JyQlAsS0FsQnFCLENBUXZCTyxRQVJ1QjtBQUFBLE1BU3ZCQyxRQVR1QixHQWtCckJSLEtBbEJxQixDQVN2QlEsUUFUdUI7QUFBQSxNQVV2QkMsUUFWdUIsR0FrQnJCVCxLQWxCcUIsQ0FVdkJTLFFBVnVCO0FBQUEsTUFXdkJDLE1BWHVCLEdBa0JyQlYsS0FsQnFCLENBV3ZCVSxNQVh1QjtBQUFBLE1BWXZCQyxPQVp1QixHQWtCckJYLEtBbEJxQixDQVl2QlcsT0FadUI7QUFBQSxNQWF2QkMsU0FidUIsR0FrQnJCWixLQWxCcUIsQ0FhdkJZLFNBYnVCO0FBQUEsTUFjdkJDLE9BZHVCLEdBa0JyQmIsS0FsQnFCLENBY3ZCYSxPQWR1QjtBQUFBLE1BZXZCQyxNQWZ1QixHQWtCckJkLEtBbEJxQixDQWV2QmMsTUFmdUI7QUFBQSxNQWdCdkJDLFFBaEJ1QixHQWtCckJmLEtBbEJxQixDQWdCdkJlLFFBaEJ1QjtBQUFBLE1BaUJ2QkMsV0FqQnVCLEdBa0JyQmhCLEtBbEJxQixDQWlCdkJnQixXQWpCdUI7QUFtQnpCLE1BQU1DLGFBQWEsR0FBRyw0QkFDcEI7QUFBRUQsSUFBQUEsV0FBVyxFQUFYQSxXQUFGO0FBQ0VILElBQUFBLE9BQU8sRUFBUEEsT0FERjtBQUVFRSxJQUFBQSxRQUFRLEVBQVJBO0FBRkYsR0FEb0IsQ0FBdEIsQ0FuQnlCLENBd0J6Qjs7QUFDQSxNQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFFBQWFiLEtBQWIsUUFBR2MsTUFBSCxDQUFhZCxLQUFiO0FBQUEsV0FDaEJJLFFBQVEsQ0FBQ0osS0FBSyxLQUFLLEVBQVYsR0FBZVEsT0FBTyxDQUFDTyxVQUF2QixHQUFvQ2YsS0FBckMsQ0FEUTtBQUFBLEdBQWxCOztBQUVBLE1BQU1nQixPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFdBQU1YLE1BQU0sSUFBSUEsTUFBTSxDQUFDVCxFQUFELEVBQUtJLEtBQUwsQ0FBdEI7QUFBQSxHQUFoQjs7QUFDQSxNQUFNaUIsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxXQUFNWCxPQUFPLElBQUlBLE9BQU8sQ0FBQ1YsRUFBRCxFQUFLSSxLQUFMLENBQXhCO0FBQUEsR0FBakI7O0FBQ0EsTUFBTWtCLFlBQVksR0FBRzFCLGVBQWUsQ0FDbENpQixNQURrQyxFQUVsQ0M7QUFDQTtBQUhrQyxHQUFwQztBQU1BLFNBQ0UsNkJBQUMscUJBQUQsQ0FBTSxLQUFOO0FBQ0UsSUFBQSxHQUFHLEVBQUVkLEVBRFA7QUFFRSxJQUFBLEVBQUUsRUFBRUEsRUFGTjtBQUdFLElBQUEsV0FBVyxFQUFFQyxXQUhmO0FBSUUsSUFBQSxJQUFJLEVBQUVZLE1BQU0sQ0FBQ1UsSUFBUCxLQUFnQixRQUFoQixHQUE0QixNQUE1QixhQUF3Q1YsTUFBTSxDQUFDVSxJQUEvQyxDQUpSO0FBS0UsSUFBQSxLQUFLLEVBQUVELFlBQVksR0FBR25CLEtBQUssSUFBSVUsTUFBTSxDQUFDVyxLQUFuQixHQUEyQixLQUxoRDtBQU1FLElBQUEsUUFBUSxFQUFFbkIsUUFOWjtBQU9FLElBQUEsU0FBUyxFQUFFTSxTQVBiO0FBUUUsSUFBQSxRQUFRLEVBQUVKLFFBQVEsSUFBSUQsUUFSeEI7QUFTRSxJQUFBLElBQUksRUFBRUo7QUFUUixLQVVNYyxhQVZOO0FBV0UsSUFBQSxLQUFLLEVBQUVaLEtBQUssSUFBSUEsS0FBSyxLQUFLLENBQW5CLEdBQXVCQSxLQUF2QixHQUErQixFQVh4QztBQVlFLElBQUEsUUFBUSxFQUFFYSxTQVpaO0FBYUUsSUFBQSxNQUFNLEVBQUVHLE9BYlY7QUFjRSxJQUFBLE9BQU8sRUFBRUM7QUFkWCxLQURGO0FBa0JEOztlQUNjdkIsVSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IGdldFNlbWFudGljUHJvcHMgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5pbXBvcnQgeyB1dGlscyB9IGZyb20gXCJAcmpzZi9jb3JlXCI7XHJcbmNvbnN0IHsgZ2V0RGlzcGxheUxhYmVsIH0gPSB1dGlscztcclxuZnVuY3Rpb24gVGV4dFdpZGdldChwcm9wcykge1xyXG4gIGNvbnN0IHtcclxuICAgIGlkLFxyXG4gICAgcGxhY2Vob2xkZXIsXHJcbiAgICBuYW1lLFxyXG4gICAgbGFiZWwsXHJcbiAgICB2YWx1ZSxcclxuICAgIHJlcXVpcmVkLFxyXG4gICAgcmVhZG9ubHksXHJcbiAgICBkaXNhYmxlZCxcclxuICAgIG9uQ2hhbmdlLFxyXG4gICAgb25CbHVyLFxyXG4gICAgb25Gb2N1cyxcclxuICAgIGF1dG9mb2N1cyxcclxuICAgIG9wdGlvbnMsXHJcbiAgICBzY2hlbWEsXHJcbiAgICB1aVNjaGVtYSxcclxuICAgIGZvcm1Db250ZXh0LFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBzZW1hbnRpY1Byb3BzID0gZ2V0U2VtYW50aWNQcm9wcyhcclxuICAgIHsgZm9ybUNvbnRleHQsXHJcbiAgICAgIG9wdGlvbnMsXHJcbiAgICAgIHVpU2NoZW1hLFxyXG4gIH0pO1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcclxuICBjb25zdCBfb25DaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PlxyXG4gICAgb25DaGFuZ2UodmFsdWUgPT09IFwiXCIgPyBvcHRpb25zLmVtcHR5VmFsdWUgOiB2YWx1ZSk7XHJcbiAgY29uc3QgX29uQmx1ciA9ICgpID0+IG9uQmx1ciAmJiBvbkJsdXIoaWQsIHZhbHVlKTtcclxuICBjb25zdCBfb25Gb2N1cyA9ICgpID0+IG9uRm9jdXMgJiYgb25Gb2N1cyhpZCwgdmFsdWUpO1xyXG4gIGNvbnN0IGRpc3BsYXlMYWJlbCA9IGdldERpc3BsYXlMYWJlbChcclxuICAgIHNjaGVtYSxcclxuICAgIHVpU2NoZW1hXHJcbiAgICAvKiBUT0RPOiAsIHJvb3RTY2hlbWEgKi9cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0uSW5wdXRcclxuICAgICAga2V5PXtpZH1cclxuICAgICAgaWQ9e2lkfVxyXG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgIHR5cGU9e3NjaGVtYS50eXBlID09PSAnc3RyaW5nJyA/ICAndGV4dCcgOiBgJHtzY2hlbWEudHlwZX1gfVxyXG4gICAgICBsYWJlbD17ZGlzcGxheUxhYmVsID8gbGFiZWwgfHwgc2NoZW1hLnRpdGxlIDogZmFsc2V9XHJcbiAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgYXV0b0ZvY3VzPXthdXRvZm9jdXN9XHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCByZWFkb25seX1cclxuICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgey4uLnNlbWFudGljUHJvcHN9XHJcbiAgICAgIHZhbHVlPXt2YWx1ZSB8fCB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogXCJcIn1cclxuICAgICAgb25DaGFuZ2U9e19vbkNoYW5nZX1cclxuICAgICAgb25CbHVyPXtfb25CbHVyfVxyXG4gICAgICBvbkZvY3VzPXtfb25Gb2N1c31cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBUZXh0V2lkZ2V0O1xyXG4iXX0=