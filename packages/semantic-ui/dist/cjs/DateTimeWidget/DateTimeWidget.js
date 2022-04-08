"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@rjsf/core");

var _util = require("../util");

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var localToUTC = _core.utils.localToUTC,
    utcToLocal = _core.utils.utcToLocal,
    getDisplayLabel = _core.utils.getDisplayLabel;

function DateTimeWidget(props) {
  var id = props.id,
      required = props.required,
      readonly = props.readonly,
      disabled = props.disabled,
      name = props.name,
      label = props.label,
      schema = props.schema,
      uiSchema = props.uiSchema,
      value = props.value,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      autofocus = props.autofocus,
      options = props.options,
      formContext = props.formContext;
  var semanticProps = (0, _util.getSemanticProps)({
    uiSchema: uiSchema,
    schema: schema,
    formContext: formContext,
    options: options
  });

  var _onChange = function _onChange(_ref) {
    var value = _ref.target.value;
    return onChange && onChange(localToUTC(value));
  };

  var _onBlur = function _onBlur() {
    return onBlur && onBlur(id, value);
  };

  var _onFocus = function _onFocus() {
    return onFocus && onFocus(id, value);
  };

  var dateValue = utcToLocal(value);
  var displayLabel = getDisplayLabel(schema, uiSchema
  /* TODO: , rootSchema */
  );
  return _react.default.createElement(_semanticUiReact.Form.Input, _extends({
    key: id,
    id: id,
    type: "datetime-local",
    label: displayLabel ? label || schema.title : false,
    required: required,
    autoFocus: autofocus,
    disabled: disabled || readonly,
    name: name
  }, semanticProps, {
    value: dateValue,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
}

var _default = DateTimeWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9EYXRlVGltZVdpZGdldC9EYXRlVGltZVdpZGdldC5qcyJdLCJuYW1lcyI6WyJsb2NhbFRvVVRDIiwidXRpbHMiLCJ1dGNUb0xvY2FsIiwiZ2V0RGlzcGxheUxhYmVsIiwiRGF0ZVRpbWVXaWRnZXQiLCJwcm9wcyIsImlkIiwicmVxdWlyZWQiLCJyZWFkb25seSIsImRpc2FibGVkIiwibmFtZSIsImxhYmVsIiwic2NoZW1hIiwidWlTY2hlbWEiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwib25CbHVyIiwib25Gb2N1cyIsImF1dG9mb2N1cyIsIm9wdGlvbnMiLCJmb3JtQ29udGV4dCIsInNlbWFudGljUHJvcHMiLCJfb25DaGFuZ2UiLCJ0YXJnZXQiLCJfb25CbHVyIiwiX29uRm9jdXMiLCJkYXRlVmFsdWUiLCJkaXNwbGF5TGFiZWwiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7SUFFUUEsVSxHQUE0Q0MsVyxDQUE1Q0QsVTtJQUFZRSxVLEdBQWdDRCxXLENBQWhDQyxVO0lBQVlDLGUsR0FBb0JGLFcsQ0FBcEJFLGU7O0FBRWhDLFNBQVNDLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUEsTUFFN0JDLEVBRjZCLEdBaUJ6QkQsS0FqQnlCLENBRTdCQyxFQUY2QjtBQUFBLE1BRzdCQyxRQUg2QixHQWlCekJGLEtBakJ5QixDQUc3QkUsUUFINkI7QUFBQSxNQUk3QkMsUUFKNkIsR0FpQnpCSCxLQWpCeUIsQ0FJN0JHLFFBSjZCO0FBQUEsTUFLN0JDLFFBTDZCLEdBaUJ6QkosS0FqQnlCLENBSzdCSSxRQUw2QjtBQUFBLE1BTTdCQyxJQU42QixHQWlCekJMLEtBakJ5QixDQU03QkssSUFONkI7QUFBQSxNQU83QkMsS0FQNkIsR0FpQnpCTixLQWpCeUIsQ0FPN0JNLEtBUDZCO0FBQUEsTUFRN0JDLE1BUjZCLEdBaUJ6QlAsS0FqQnlCLENBUTdCTyxNQVI2QjtBQUFBLE1BUzdCQyxRQVQ2QixHQWlCekJSLEtBakJ5QixDQVM3QlEsUUFUNkI7QUFBQSxNQVU3QkMsS0FWNkIsR0FpQnpCVCxLQWpCeUIsQ0FVN0JTLEtBVjZCO0FBQUEsTUFXN0JDLFFBWDZCLEdBaUJ6QlYsS0FqQnlCLENBVzdCVSxRQVg2QjtBQUFBLE1BWTdCQyxNQVo2QixHQWlCekJYLEtBakJ5QixDQVk3QlcsTUFaNkI7QUFBQSxNQWE3QkMsT0FiNkIsR0FpQnpCWixLQWpCeUIsQ0FhN0JZLE9BYjZCO0FBQUEsTUFjN0JDLFNBZDZCLEdBaUJ6QmIsS0FqQnlCLENBYzdCYSxTQWQ2QjtBQUFBLE1BZTdCQyxPQWY2QixHQWlCekJkLEtBakJ5QixDQWU3QmMsT0FmNkI7QUFBQSxNQWdCN0JDLFdBaEI2QixHQWlCekJmLEtBakJ5QixDQWdCN0JlLFdBaEI2QjtBQWtCN0IsTUFBTUMsYUFBYSxHQUFHLDRCQUFpQjtBQUNyQ1IsSUFBQUEsUUFBUSxFQUFSQSxRQURxQztBQUVyQ0QsSUFBQUEsTUFBTSxFQUFOQSxNQUZxQztBQUdyQ1EsSUFBQUEsV0FBVyxFQUFYQSxXQUhxQztBQUlyQ0QsSUFBQUEsT0FBTyxFQUFQQTtBQUpxQyxHQUFqQixDQUF0Qjs7QUFNQSxNQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFFBQWFSLEtBQWIsUUFBR1MsTUFBSCxDQUFhVCxLQUFiO0FBQUEsV0FBMkJDLFFBQVEsSUFBSUEsUUFBUSxDQUFDZixVQUFVLENBQUNjLEtBQUQsQ0FBWCxDQUEvQztBQUFBLEdBQWxCOztBQUNBLE1BQU1VLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsV0FBTVIsTUFBTSxJQUFJQSxNQUFNLENBQUNWLEVBQUQsRUFBS1EsS0FBTCxDQUF0QjtBQUFBLEdBQWhCOztBQUNBLE1BQU1XLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsV0FBTVIsT0FBTyxJQUFJQSxPQUFPLENBQUNYLEVBQUQsRUFBS1EsS0FBTCxDQUF4QjtBQUFBLEdBQWpCOztBQUNBLE1BQU1ZLFNBQVMsR0FBR3hCLFVBQVUsQ0FBQ1ksS0FBRCxDQUE1QjtBQUNBLE1BQU1hLFlBQVksR0FBR3hCLGVBQWUsQ0FDbENTLE1BRGtDLEVBRWxDQztBQUNBO0FBSGtDLEdBQXBDO0FBS0EsU0FDRSw2QkFBQyxxQkFBRCxDQUFNLEtBQU47QUFDQSxJQUFBLEdBQUcsRUFBRVAsRUFETDtBQUVBLElBQUEsRUFBRSxFQUFFQSxFQUZKO0FBR0EsSUFBQSxJQUFJLEVBQUMsZ0JBSEw7QUFJQSxJQUFBLEtBQUssRUFBRXFCLFlBQVksR0FBR2hCLEtBQUssSUFBSUMsTUFBTSxDQUFDZ0IsS0FBbkIsR0FBMkIsS0FKOUM7QUFLQSxJQUFBLFFBQVEsRUFBRXJCLFFBTFY7QUFNQSxJQUFBLFNBQVMsRUFBRVcsU0FOWDtBQU9BLElBQUEsUUFBUSxFQUFFVCxRQUFRLElBQUlELFFBUHRCO0FBUUEsSUFBQSxJQUFJLEVBQUVFO0FBUk4sS0FTSVcsYUFUSjtBQVVBLElBQUEsS0FBSyxFQUFFSyxTQVZQO0FBV0EsSUFBQSxRQUFRLEVBQUVKLFNBWFY7QUFZQSxJQUFBLE1BQU0sRUFBRUUsT0FaUjtBQWFBLElBQUEsT0FBTyxFQUFFQztBQWJULEtBREY7QUFpQkQ7O2VBQ2NyQixjIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSBcIkByanNmL2NvcmVcIjtcclxuaW1wb3J0IHsgZ2V0U2VtYW50aWNQcm9wcyB9IGZyb20gXCIuLi91dGlsXCI7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcbmNvbnN0IHsgbG9jYWxUb1VUQywgdXRjVG9Mb2NhbCwgZ2V0RGlzcGxheUxhYmVsIH0gPSB1dGlscztcclxuXHJcbmZ1bmN0aW9uIERhdGVUaW1lV2lkZ2V0KHByb3BzKSB7XHJcbiAgY29uc3Qge1xyXG4gIGlkLFxyXG4gIHJlcXVpcmVkLFxyXG4gIHJlYWRvbmx5LFxyXG4gIGRpc2FibGVkLFxyXG4gIG5hbWUsXHJcbiAgbGFiZWwsXHJcbiAgc2NoZW1hLFxyXG4gIHVpU2NoZW1hLFxyXG4gIHZhbHVlLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIG9uQmx1cixcclxuICBvbkZvY3VzLFxyXG4gIGF1dG9mb2N1cyxcclxuICBvcHRpb25zLFxyXG4gIGZvcm1Db250ZXh0LFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBzZW1hbnRpY1Byb3BzID0gZ2V0U2VtYW50aWNQcm9wcyh7XHJcbiAgICB1aVNjaGVtYSxcclxuICAgIHNjaGVtYSxcclxuICAgIGZvcm1Db250ZXh0LFxyXG4gICAgb3B0aW9ucyxcclxuICB9KTtcclxuICBjb25zdCBfb25DaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiBvbkNoYW5nZSAmJiBvbkNoYW5nZShsb2NhbFRvVVRDKHZhbHVlKSk7XHJcbiAgY29uc3QgX29uQmx1ciA9ICgpID0+IG9uQmx1ciAmJiBvbkJsdXIoaWQsIHZhbHVlKTtcclxuICBjb25zdCBfb25Gb2N1cyA9ICgpID0+IG9uRm9jdXMgJiYgb25Gb2N1cyhpZCwgdmFsdWUpO1xyXG4gIGNvbnN0IGRhdGVWYWx1ZSA9IHV0Y1RvTG9jYWwodmFsdWUpO1xyXG4gIGNvbnN0IGRpc3BsYXlMYWJlbCA9IGdldERpc3BsYXlMYWJlbChcclxuICAgIHNjaGVtYSxcclxuICAgIHVpU2NoZW1hXHJcbiAgICAvKiBUT0RPOiAsIHJvb3RTY2hlbWEgKi9cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybS5JbnB1dFxyXG4gICAga2V5PXtpZH1cclxuICAgIGlkPXtpZH1cclxuICAgIHR5cGU9XCJkYXRldGltZS1sb2NhbFwiXHJcbiAgICBsYWJlbD17ZGlzcGxheUxhYmVsID8gbGFiZWwgfHwgc2NoZW1hLnRpdGxlIDogZmFsc2V9XHJcbiAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICBhdXRvRm9jdXM9e2F1dG9mb2N1c31cclxuICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCByZWFkb25seX1cclxuICAgIG5hbWU9e25hbWV9XHJcbiAgICB7Li4uc2VtYW50aWNQcm9wc31cclxuICAgIHZhbHVlPXtkYXRlVmFsdWV9XHJcbiAgICBvbkNoYW5nZT17X29uQ2hhbmdlfVxyXG4gICAgb25CbHVyPXtfb25CbHVyfVxyXG4gICAgb25Gb2N1cz17X29uRm9jdXN9XHJcbiAgLz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERhdGVUaW1lV2lkZ2V0O1xyXG4iXX0=