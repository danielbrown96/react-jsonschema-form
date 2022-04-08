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

function EmailWidget(props) {
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
    schema: schema,
    uiSchema: uiSchema,
    formContext: formContext,
    options: options
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
    type: "email",
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

var _default = EmailWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9FbWFpbFdpZGdldC9FbWFpbFdpZGdldC5qcyJdLCJuYW1lcyI6WyJnZXREaXNwbGF5TGFiZWwiLCJ1dGlscyIsIkVtYWlsV2lkZ2V0IiwicHJvcHMiLCJpZCIsInJlcXVpcmVkIiwicmVhZG9ubHkiLCJkaXNhYmxlZCIsIm5hbWUiLCJsYWJlbCIsInNjaGVtYSIsInVpU2NoZW1hIiwidmFsdWUiLCJvbkNoYW5nZSIsIm9uQmx1ciIsIm9uRm9jdXMiLCJhdXRvZm9jdXMiLCJvcHRpb25zIiwiZm9ybUNvbnRleHQiLCJzZW1hbnRpY1Byb3BzIiwiX29uQ2hhbmdlIiwidGFyZ2V0IiwiZW1wdHlWYWx1ZSIsIl9vbkJsdXIiLCJfb25Gb2N1cyIsImRpc3BsYXlMYWJlbCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVRQSxlLEdBQW9CQyxXLENBQXBCRCxlOztBQUNSLFNBQVNFLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUEsTUFFeEJDLEVBRndCLEdBaUJ0QkQsS0FqQnNCLENBRXhCQyxFQUZ3QjtBQUFBLE1BR3hCQyxRQUh3QixHQWlCdEJGLEtBakJzQixDQUd4QkUsUUFId0I7QUFBQSxNQUl4QkMsUUFKd0IsR0FpQnRCSCxLQWpCc0IsQ0FJeEJHLFFBSndCO0FBQUEsTUFLeEJDLFFBTHdCLEdBaUJ0QkosS0FqQnNCLENBS3hCSSxRQUx3QjtBQUFBLE1BTXhCQyxJQU53QixHQWlCdEJMLEtBakJzQixDQU14QkssSUFOd0I7QUFBQSxNQU94QkMsS0FQd0IsR0FpQnRCTixLQWpCc0IsQ0FPeEJNLEtBUHdCO0FBQUEsTUFReEJDLE1BUndCLEdBaUJ0QlAsS0FqQnNCLENBUXhCTyxNQVJ3QjtBQUFBLE1BU3hCQyxRQVR3QixHQWlCdEJSLEtBakJzQixDQVN4QlEsUUFUd0I7QUFBQSxNQVV4QkMsS0FWd0IsR0FpQnRCVCxLQWpCc0IsQ0FVeEJTLEtBVndCO0FBQUEsTUFXeEJDLFFBWHdCLEdBaUJ0QlYsS0FqQnNCLENBV3hCVSxRQVh3QjtBQUFBLE1BWXhCQyxNQVp3QixHQWlCdEJYLEtBakJzQixDQVl4QlcsTUFad0I7QUFBQSxNQWF4QkMsT0Fid0IsR0FpQnRCWixLQWpCc0IsQ0FheEJZLE9BYndCO0FBQUEsTUFjeEJDLFNBZHdCLEdBaUJ0QmIsS0FqQnNCLENBY3hCYSxTQWR3QjtBQUFBLE1BZXhCQyxPQWZ3QixHQWlCdEJkLEtBakJzQixDQWV4QmMsT0Fmd0I7QUFBQSxNQWdCeEJDLFdBaEJ3QixHQWlCdEJmLEtBakJzQixDQWdCeEJlLFdBaEJ3QjtBQWtCMUIsTUFBTUMsYUFBYSxHQUFHLDRCQUFpQjtBQUNyQ1QsSUFBQUEsTUFBTSxFQUFOQSxNQURxQztBQUVyQ0MsSUFBQUEsUUFBUSxFQUFSQSxRQUZxQztBQUdyQ08sSUFBQUEsV0FBVyxFQUFYQSxXQUhxQztBQUlyQ0QsSUFBQUEsT0FBTyxFQUFQQTtBQUpxQyxHQUFqQixDQUF0QixDQWxCMEIsQ0F3QjFCOztBQUNBLE1BQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsUUFBYVIsS0FBYixRQUFHUyxNQUFILENBQWFULEtBQWI7QUFBQSxXQUNoQkMsUUFBUSxDQUFDRCxLQUFLLEtBQUssRUFBVixHQUFlSyxPQUFPLENBQUNLLFVBQXZCLEdBQW9DVixLQUFyQyxDQURRO0FBQUEsR0FBbEI7O0FBRUEsTUFBTVcsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxXQUFNVCxNQUFNLElBQUlBLE1BQU0sQ0FBQ1YsRUFBRCxFQUFLUSxLQUFMLENBQXRCO0FBQUEsR0FBaEI7O0FBQ0EsTUFBTVksUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxXQUFNVCxPQUFPLElBQUlBLE9BQU8sQ0FBQ1gsRUFBRCxFQUFLUSxLQUFMLENBQXhCO0FBQUEsR0FBakI7O0FBQ0EsTUFBTWEsWUFBWSxHQUFHekIsZUFBZSxDQUNsQ1UsTUFEa0MsRUFFbENDO0FBQ0E7QUFIa0MsR0FBcEM7QUFLQSxTQUNFLDZCQUFDLHFCQUFELENBQU0sS0FBTjtBQUNFLElBQUEsR0FBRyxFQUFFUCxFQURQO0FBRUUsSUFBQSxFQUFFLEVBQUVBLEVBRk47QUFHRSxJQUFBLElBQUksRUFBQyxPQUhQO0FBSUUsSUFBQSxLQUFLLEVBQUVxQixZQUFZLEdBQUdoQixLQUFLLElBQUlDLE1BQU0sQ0FBQ2dCLEtBQW5CLEdBQTJCLEtBSmhEO0FBS0UsSUFBQSxRQUFRLEVBQUVyQixRQUxaO0FBTUUsSUFBQSxTQUFTLEVBQUVXLFNBTmI7QUFPRSxJQUFBLFFBQVEsRUFBRVQsUUFBUSxJQUFJRCxRQVB4QjtBQVFFLElBQUEsSUFBSSxFQUFFRTtBQVJSLEtBU01XLGFBVE47QUFVRSxJQUFBLEtBQUssRUFBRVAsS0FBSyxJQUFJQSxLQUFLLEtBQUssQ0FBbkIsR0FBdUJBLEtBQXZCLEdBQStCLEVBVnhDO0FBV0UsSUFBQSxRQUFRLEVBQUVRLFNBWFo7QUFZRSxJQUFBLE1BQU0sRUFBRUcsT0FaVjtBQWFFLElBQUEsT0FBTyxFQUFFQztBQWJYLEtBREY7QUFpQkQ7O2VBQ2N0QixXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IGdldFNlbWFudGljUHJvcHMgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5pbXBvcnQgeyAgdXRpbHMgfSBmcm9tIFwiQHJqc2YvY29yZVwiO1xyXG5cclxuY29uc3QgeyBnZXREaXNwbGF5TGFiZWwgfSA9IHV0aWxzO1xyXG5mdW5jdGlvbiBFbWFpbFdpZGdldChwcm9wcykge1xyXG4gIGNvbnN0IHtcclxuICAgIGlkLFxyXG4gICAgcmVxdWlyZWQsXHJcbiAgICByZWFkb25seSxcclxuICAgIGRpc2FibGVkLFxyXG4gICAgbmFtZSxcclxuICAgIGxhYmVsLFxyXG4gICAgc2NoZW1hLFxyXG4gICAgdWlTY2hlbWEsXHJcbiAgICB2YWx1ZSxcclxuICAgIG9uQ2hhbmdlLFxyXG4gICAgb25CbHVyLFxyXG4gICAgb25Gb2N1cyxcclxuICAgIGF1dG9mb2N1cyxcclxuICAgIG9wdGlvbnMsXHJcbiAgICBmb3JtQ29udGV4dCxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3Qgc2VtYW50aWNQcm9wcyA9IGdldFNlbWFudGljUHJvcHMoe1xyXG4gICAgc2NoZW1hLFxyXG4gICAgdWlTY2hlbWEsXHJcbiAgICBmb3JtQ29udGV4dCxcclxuICAgIG9wdGlvbnMsXHJcbiB9KTtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XHJcbiAgY29uc3QgX29uQ2hhbmdlID0gKHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT5cclxuICAgIG9uQ2hhbmdlKHZhbHVlID09PSBcIlwiID8gb3B0aW9ucy5lbXB0eVZhbHVlIDogdmFsdWUpO1xyXG4gIGNvbnN0IF9vbkJsdXIgPSAoKSA9PiBvbkJsdXIgJiYgb25CbHVyKGlkLCB2YWx1ZSk7XHJcbiAgY29uc3QgX29uRm9jdXMgPSAoKSA9PiBvbkZvY3VzICYmIG9uRm9jdXMoaWQsIHZhbHVlKTtcclxuICBjb25zdCBkaXNwbGF5TGFiZWwgPSBnZXREaXNwbGF5TGFiZWwoXHJcbiAgICBzY2hlbWEsXHJcbiAgICB1aVNjaGVtYVxyXG4gICAgLyogVE9ETzogLCByb290U2NoZW1hICovXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0uSW5wdXRcclxuICAgICAga2V5PXtpZH1cclxuICAgICAgaWQ9e2lkfVxyXG4gICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICBsYWJlbD17ZGlzcGxheUxhYmVsID8gbGFiZWwgfHwgc2NoZW1hLnRpdGxlIDogZmFsc2V9XHJcbiAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgYXV0b0ZvY3VzPXthdXRvZm9jdXN9XHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCByZWFkb25seX1cclxuICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgey4uLnNlbWFudGljUHJvcHN9XHJcbiAgICAgIHZhbHVlPXt2YWx1ZSB8fCB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogXCJcIn1cclxuICAgICAgb25DaGFuZ2U9e19vbkNoYW5nZX1cclxuICAgICAgb25CbHVyPXtfb25CbHVyfVxyXG4gICAgICBvbkZvY3VzPXtfb25Gb2N1c31cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBFbWFpbFdpZGdldDtcclxuIl19