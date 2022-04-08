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

function URLWidget(props) {
  var id = props.id,
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
    type: "url",
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

var _default = URLWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9VUkxXaWRnZXQvVVJMV2lkZ2V0LmpzIl0sIm5hbWVzIjpbImdldERpc3BsYXlMYWJlbCIsInV0aWxzIiwiVVJMV2lkZ2V0IiwicHJvcHMiLCJpZCIsIm5hbWUiLCJsYWJlbCIsInZhbHVlIiwicmVxdWlyZWQiLCJyZWFkb25seSIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJvbkJsdXIiLCJvbkZvY3VzIiwiYXV0b2ZvY3VzIiwib3B0aW9ucyIsInNjaGVtYSIsInVpU2NoZW1hIiwiZm9ybUNvbnRleHQiLCJzZW1hbnRpY1Byb3BzIiwiX29uQ2hhbmdlIiwidGFyZ2V0IiwiZW1wdHlWYWx1ZSIsIl9vbkJsdXIiLCJfb25Gb2N1cyIsImRpc3BsYXlMYWJlbCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVRQSxlLEdBQW9CQyxXLENBQXBCRCxlOztBQUNSLFNBQVNFLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUEsTUFFdEJDLEVBRnNCLEdBaUJwQkQsS0FqQm9CLENBRXRCQyxFQUZzQjtBQUFBLE1BR3RCQyxJQUhzQixHQWlCcEJGLEtBakJvQixDQUd0QkUsSUFIc0I7QUFBQSxNQUl0QkMsS0FKc0IsR0FpQnBCSCxLQWpCb0IsQ0FJdEJHLEtBSnNCO0FBQUEsTUFLdEJDLEtBTHNCLEdBaUJwQkosS0FqQm9CLENBS3RCSSxLQUxzQjtBQUFBLE1BTXRCQyxRQU5zQixHQWlCcEJMLEtBakJvQixDQU10QkssUUFOc0I7QUFBQSxNQU90QkMsUUFQc0IsR0FpQnBCTixLQWpCb0IsQ0FPdEJNLFFBUHNCO0FBQUEsTUFRdEJDLFFBUnNCLEdBaUJwQlAsS0FqQm9CLENBUXRCTyxRQVJzQjtBQUFBLE1BU3RCQyxRQVRzQixHQWlCcEJSLEtBakJvQixDQVN0QlEsUUFUc0I7QUFBQSxNQVV0QkMsTUFWc0IsR0FpQnBCVCxLQWpCb0IsQ0FVdEJTLE1BVnNCO0FBQUEsTUFXdEJDLE9BWHNCLEdBaUJwQlYsS0FqQm9CLENBV3RCVSxPQVhzQjtBQUFBLE1BWXRCQyxTQVpzQixHQWlCcEJYLEtBakJvQixDQVl0QlcsU0Fac0I7QUFBQSxNQWF0QkMsT0Fic0IsR0FpQnBCWixLQWpCb0IsQ0FhdEJZLE9BYnNCO0FBQUEsTUFjdEJDLE1BZHNCLEdBaUJwQmIsS0FqQm9CLENBY3RCYSxNQWRzQjtBQUFBLE1BZXRCQyxRQWZzQixHQWlCcEJkLEtBakJvQixDQWV0QmMsUUFmc0I7QUFBQSxNQWdCdEJDLFdBaEJzQixHQWlCcEJmLEtBakJvQixDQWdCdEJlLFdBaEJzQjtBQWtCeEIsTUFBTUMsYUFBYSxHQUFHLDRCQUNwQjtBQUFFRCxJQUFBQSxXQUFXLEVBQVhBLFdBQUY7QUFDRUgsSUFBQUEsT0FBTyxFQUFQQSxPQURGO0FBRUVFLElBQUFBLFFBQVEsRUFBUkE7QUFGRixHQURvQixDQUF0QixDQWxCd0IsQ0F1QnhCOztBQUNBLE1BQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsUUFBYWIsS0FBYixRQUFHYyxNQUFILENBQWFkLEtBQWI7QUFBQSxXQUNoQkksUUFBUSxDQUFDSixLQUFLLEtBQUssRUFBVixHQUFlUSxPQUFPLENBQUNPLFVBQXZCLEdBQW9DZixLQUFyQyxDQURRO0FBQUEsR0FBbEI7O0FBRUEsTUFBTWdCLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsV0FBTVgsTUFBTSxJQUFJQSxNQUFNLENBQUNSLEVBQUQsRUFBS0csS0FBTCxDQUF0QjtBQUFBLEdBQWhCOztBQUNBLE1BQU1pQixRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLFdBQU1YLE9BQU8sSUFBSUEsT0FBTyxDQUFDVCxFQUFELEVBQUtHLEtBQUwsQ0FBeEI7QUFBQSxHQUFqQjs7QUFDQSxNQUFNa0IsWUFBWSxHQUFHekIsZUFBZSxDQUNsQ2dCLE1BRGtDLEVBRWxDQztBQUNBO0FBSGtDLEdBQXBDO0FBS0EsU0FDRSw2QkFBQyxxQkFBRCxDQUFNLEtBQU47QUFDRSxJQUFBLEdBQUcsRUFBRWIsRUFEUDtBQUVFLElBQUEsRUFBRSxFQUFFQSxFQUZOO0FBR0UsSUFBQSxJQUFJLEVBQUMsS0FIUDtBQUlFLElBQUEsS0FBSyxFQUFFcUIsWUFBWSxHQUFHbkIsS0FBSyxJQUFJVSxNQUFNLENBQUNVLEtBQW5CLEdBQTJCLEtBSmhEO0FBS0UsSUFBQSxRQUFRLEVBQUVsQixRQUxaO0FBTUUsSUFBQSxTQUFTLEVBQUVNLFNBTmI7QUFPRSxJQUFBLFFBQVEsRUFBRUosUUFBUSxJQUFJRCxRQVB4QjtBQVFFLElBQUEsSUFBSSxFQUFFSjtBQVJSLEtBU01jLGFBVE47QUFVRSxJQUFBLEtBQUssRUFBRVosS0FBSyxJQUFJQSxLQUFLLEtBQUssQ0FBbkIsR0FBdUJBLEtBQXZCLEdBQStCLEVBVnhDO0FBV0UsSUFBQSxRQUFRLEVBQUVhLFNBWFo7QUFZRSxJQUFBLE1BQU0sRUFBRUcsT0FaVjtBQWFFLElBQUEsT0FBTyxFQUFFQztBQWJYLEtBREY7QUFpQkQ7O2VBQ2N0QixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IGdldFNlbWFudGljUHJvcHMgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5pbXBvcnQgeyAgdXRpbHMgfSBmcm9tIFwiQHJqc2YvY29yZVwiO1xyXG5cclxuY29uc3QgeyBnZXREaXNwbGF5TGFiZWwgfSA9IHV0aWxzO1xyXG5mdW5jdGlvbiBVUkxXaWRnZXQocHJvcHMpIHtcclxuICBjb25zdCB7XHJcbiAgICBpZCxcclxuICAgIG5hbWUsXHJcbiAgICBsYWJlbCxcclxuICAgIHZhbHVlLFxyXG4gICAgcmVxdWlyZWQsXHJcbiAgICByZWFkb25seSxcclxuICAgIGRpc2FibGVkLFxyXG4gICAgb25DaGFuZ2UsXHJcbiAgICBvbkJsdXIsXHJcbiAgICBvbkZvY3VzLFxyXG4gICAgYXV0b2ZvY3VzLFxyXG4gICAgb3B0aW9ucyxcclxuICAgIHNjaGVtYSxcclxuICAgIHVpU2NoZW1hLFxyXG4gICAgZm9ybUNvbnRleHQsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHNlbWFudGljUHJvcHMgPSBnZXRTZW1hbnRpY1Byb3BzKFxyXG4gICAgeyBmb3JtQ29udGV4dCxcclxuICAgICAgb3B0aW9ucyxcclxuICAgICAgdWlTY2hlbWEsXHJcbiAgfSk7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xyXG4gIGNvbnN0IF9vbkNoYW5nZSA9ICh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+XHJcbiAgICBvbkNoYW5nZSh2YWx1ZSA9PT0gXCJcIiA/IG9wdGlvbnMuZW1wdHlWYWx1ZSA6IHZhbHVlKTtcclxuICBjb25zdCBfb25CbHVyID0gKCkgPT4gb25CbHVyICYmIG9uQmx1cihpZCwgdmFsdWUpO1xyXG4gIGNvbnN0IF9vbkZvY3VzID0gKCkgPT4gb25Gb2N1cyAmJiBvbkZvY3VzKGlkLCB2YWx1ZSk7XHJcbiAgY29uc3QgZGlzcGxheUxhYmVsID0gZ2V0RGlzcGxheUxhYmVsKFxyXG4gICAgc2NoZW1hLFxyXG4gICAgdWlTY2hlbWFcclxuICAgIC8qIFRPRE86ICwgcm9vdFNjaGVtYSAqL1xyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtLklucHV0XHJcbiAgICAgIGtleT17aWR9XHJcbiAgICAgIGlkPXtpZH1cclxuICAgICAgdHlwZT1cInVybFwiXHJcbiAgICAgIGxhYmVsPXtkaXNwbGF5TGFiZWwgPyBsYWJlbCB8fCBzY2hlbWEudGl0bGUgOiBmYWxzZX1cclxuICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICBhdXRvRm9jdXM9e2F1dG9mb2N1c31cclxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8IHJlYWRvbmx5fVxyXG4gICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICB7Li4uc2VtYW50aWNQcm9wc31cclxuICAgICAgdmFsdWU9e3ZhbHVlIHx8IHZhbHVlID09PSAwID8gdmFsdWUgOiBcIlwifVxyXG4gICAgICBvbkNoYW5nZT17X29uQ2hhbmdlfVxyXG4gICAgICBvbkJsdXI9e19vbkJsdXJ9XHJcbiAgICAgIG9uRm9jdXM9e19vbkZvY3VzfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFVSTFdpZGdldDtcclxuIl19