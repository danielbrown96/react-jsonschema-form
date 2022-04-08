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

function PasswordWidget(props) {
  var id = props.id,
      required = props.required,
      readonly = props.readonly,
      disabled = props.disabled,
      label = props.label,
      name = props.name,
      value = props.value,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      autofocus = props.autofocus,
      options = props.options,
      schema = props.schema,
      uiSchema = props.uiSchema,
      formContext = props.formContext;
  var semanticProps = (0, _util.getSemanticProps)({
    schema: schema,
    uiSchema: uiSchema,
    formContext: formContext,
    options: options
  }); // eslint-disable-next-line no-shadow

  var _onChange = function _onChange(_ref) {
    var value = _ref.target.value;
    return onChange && onChange(value === "" ? options.emptyValue : value);
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
    id: id,
    key: id,
    label: displayLabel ? label || schema.title : false,
    autoFocus: autofocus,
    required: required,
    disabled: disabled || readonly,
    name: name
  }, semanticProps, {
    type: "password",
    value: value || "",
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
}

var _default = PasswordWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9QYXNzd29yZFdpZGdldC9QYXNzd29yZFdpZGdldC5qcyJdLCJuYW1lcyI6WyJnZXREaXNwbGF5TGFiZWwiLCJ1dGlscyIsIlBhc3N3b3JkV2lkZ2V0IiwicHJvcHMiLCJpZCIsInJlcXVpcmVkIiwicmVhZG9ubHkiLCJkaXNhYmxlZCIsImxhYmVsIiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJvbkJsdXIiLCJvbkZvY3VzIiwiYXV0b2ZvY3VzIiwib3B0aW9ucyIsInNjaGVtYSIsInVpU2NoZW1hIiwiZm9ybUNvbnRleHQiLCJzZW1hbnRpY1Byb3BzIiwiX29uQ2hhbmdlIiwidGFyZ2V0IiwiZW1wdHlWYWx1ZSIsIl9vbkJsdXIiLCJfb25Gb2N1cyIsImRpc3BsYXlMYWJlbCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztJQUNRQSxlLEdBQW9CQyxXLENBQXBCRCxlOztBQUNSLFNBQVNFLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUEsTUFFM0JDLEVBRjJCLEdBaUJ6QkQsS0FqQnlCLENBRTNCQyxFQUYyQjtBQUFBLE1BRzNCQyxRQUgyQixHQWlCekJGLEtBakJ5QixDQUczQkUsUUFIMkI7QUFBQSxNQUkzQkMsUUFKMkIsR0FpQnpCSCxLQWpCeUIsQ0FJM0JHLFFBSjJCO0FBQUEsTUFLM0JDLFFBTDJCLEdBaUJ6QkosS0FqQnlCLENBSzNCSSxRQUwyQjtBQUFBLE1BTTNCQyxLQU4yQixHQWlCekJMLEtBakJ5QixDQU0zQkssS0FOMkI7QUFBQSxNQU8zQkMsSUFQMkIsR0FpQnpCTixLQWpCeUIsQ0FPM0JNLElBUDJCO0FBQUEsTUFRM0JDLEtBUjJCLEdBaUJ6QlAsS0FqQnlCLENBUTNCTyxLQVIyQjtBQUFBLE1BUzNCQyxRQVQyQixHQWlCekJSLEtBakJ5QixDQVMzQlEsUUFUMkI7QUFBQSxNQVUzQkMsTUFWMkIsR0FpQnpCVCxLQWpCeUIsQ0FVM0JTLE1BVjJCO0FBQUEsTUFXM0JDLE9BWDJCLEdBaUJ6QlYsS0FqQnlCLENBVzNCVSxPQVgyQjtBQUFBLE1BWTNCQyxTQVoyQixHQWlCekJYLEtBakJ5QixDQVkzQlcsU0FaMkI7QUFBQSxNQWEzQkMsT0FiMkIsR0FpQnpCWixLQWpCeUIsQ0FhM0JZLE9BYjJCO0FBQUEsTUFjM0JDLE1BZDJCLEdBaUJ6QmIsS0FqQnlCLENBYzNCYSxNQWQyQjtBQUFBLE1BZTNCQyxRQWYyQixHQWlCekJkLEtBakJ5QixDQWUzQmMsUUFmMkI7QUFBQSxNQWdCM0JDLFdBaEIyQixHQWlCekJmLEtBakJ5QixDQWdCM0JlLFdBaEIyQjtBQWtCN0IsTUFBTUMsYUFBYSxHQUFHLDRCQUFpQjtBQUNyQ0gsSUFBQUEsTUFBTSxFQUFOQSxNQURxQztBQUVyQ0MsSUFBQUEsUUFBUSxFQUFSQSxRQUZxQztBQUdyQ0MsSUFBQUEsV0FBVyxFQUFYQSxXQUhxQztBQUlyQ0gsSUFBQUEsT0FBTyxFQUFQQTtBQUpxQyxHQUFqQixDQUF0QixDQWxCNkIsQ0F3QjdCOztBQUNBLE1BQU1LLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsUUFBYVYsS0FBYixRQUFHVyxNQUFILENBQWFYLEtBQWI7QUFBQSxXQUNoQkMsUUFBUSxJQUFJQSxRQUFRLENBQUNELEtBQUssS0FBSyxFQUFWLEdBQWVLLE9BQU8sQ0FBQ08sVUFBdkIsR0FBb0NaLEtBQXJDLENBREo7QUFBQSxHQUFsQjs7QUFFQSxNQUFNYSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFdBQU1YLE1BQU0sSUFBSUEsTUFBTSxDQUFDUixFQUFELEVBQUtNLEtBQUwsQ0FBdEI7QUFBQSxHQUFoQjs7QUFDQSxNQUFNYyxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLFdBQU1YLE9BQU8sSUFBSUEsT0FBTyxDQUFDVCxFQUFELEVBQUtNLEtBQUwsQ0FBeEI7QUFBQSxHQUFqQjs7QUFDQSxNQUFNZSxZQUFZLEdBQUd6QixlQUFlLENBQ2xDZ0IsTUFEa0MsRUFFbENDO0FBQ0E7QUFIa0MsR0FBcEM7QUFLQSxTQUNFLDZCQUFDLHFCQUFELENBQU0sS0FBTjtBQUNFLElBQUEsRUFBRSxFQUFFYixFQUROO0FBRUUsSUFBQSxHQUFHLEVBQUVBLEVBRlA7QUFHRSxJQUFBLEtBQUssRUFBRXFCLFlBQVksR0FBR2pCLEtBQUssSUFBSVEsTUFBTSxDQUFDVSxLQUFuQixHQUEyQixLQUhoRDtBQUlFLElBQUEsU0FBUyxFQUFFWixTQUpiO0FBS0UsSUFBQSxRQUFRLEVBQUVULFFBTFo7QUFNRSxJQUFBLFFBQVEsRUFBRUUsUUFBUSxJQUFJRCxRQU54QjtBQU9FLElBQUEsSUFBSSxFQUFFRztBQVBSLEtBUU1VLGFBUk47QUFTRSxJQUFBLElBQUksRUFBQyxVQVRQO0FBVUUsSUFBQSxLQUFLLEVBQUVULEtBQUssSUFBSSxFQVZsQjtBQVdFLElBQUEsUUFBUSxFQUFFVSxTQVhaO0FBWUUsSUFBQSxNQUFNLEVBQUVHLE9BWlY7QUFhRSxJQUFBLE9BQU8sRUFBRUM7QUFiWCxLQURGO0FBaUJEOztlQUVjdEIsYyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IGdldFNlbWFudGljUHJvcHMgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5pbXBvcnQgeyAgdXRpbHMgfSBmcm9tIFwiQHJqc2YvY29yZVwiO1xyXG5jb25zdCB7IGdldERpc3BsYXlMYWJlbCB9ID0gdXRpbHM7XHJcbmZ1bmN0aW9uIFBhc3N3b3JkV2lkZ2V0KHByb3BzKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgaWQsXHJcbiAgICByZXF1aXJlZCxcclxuICAgIHJlYWRvbmx5LFxyXG4gICAgZGlzYWJsZWQsXHJcbiAgICBsYWJlbCxcclxuICAgIG5hbWUsXHJcbiAgICB2YWx1ZSxcclxuICAgIG9uQ2hhbmdlLFxyXG4gICAgb25CbHVyLFxyXG4gICAgb25Gb2N1cyxcclxuICAgIGF1dG9mb2N1cyxcclxuICAgIG9wdGlvbnMsXHJcbiAgICBzY2hlbWEsXHJcbiAgICB1aVNjaGVtYSxcclxuICAgIGZvcm1Db250ZXh0LFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBzZW1hbnRpY1Byb3BzID0gZ2V0U2VtYW50aWNQcm9wcyh7XHJcbiAgICBzY2hlbWEsXHJcbiAgICB1aVNjaGVtYSxcclxuICAgIGZvcm1Db250ZXh0LFxyXG4gICAgb3B0aW9ucyxcclxuIH0pO1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcclxuICBjb25zdCBfb25DaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PlxyXG4gICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UodmFsdWUgPT09IFwiXCIgPyBvcHRpb25zLmVtcHR5VmFsdWUgOiB2YWx1ZSk7XHJcbiAgY29uc3QgX29uQmx1ciA9ICgpID0+IG9uQmx1ciAmJiBvbkJsdXIoaWQsIHZhbHVlKTtcclxuICBjb25zdCBfb25Gb2N1cyA9ICgpID0+IG9uRm9jdXMgJiYgb25Gb2N1cyhpZCwgdmFsdWUpO1xyXG4gIGNvbnN0IGRpc3BsYXlMYWJlbCA9IGdldERpc3BsYXlMYWJlbChcclxuICAgIHNjaGVtYSxcclxuICAgIHVpU2NoZW1hXHJcbiAgICAvKiBUT0RPOiAsIHJvb3RTY2hlbWEgKi9cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICBpZD17aWR9XHJcbiAgICAgIGtleT17aWR9XHJcbiAgICAgIGxhYmVsPXtkaXNwbGF5TGFiZWwgPyBsYWJlbCB8fCBzY2hlbWEudGl0bGUgOiBmYWxzZX1cclxuICAgICAgYXV0b0ZvY3VzPXthdXRvZm9jdXN9XHJcbiAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8IHJlYWRvbmx5fVxyXG4gICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICB7Li4uc2VtYW50aWNQcm9wc31cclxuICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgdmFsdWU9e3ZhbHVlIHx8IFwiXCJ9XHJcbiAgICAgIG9uQ2hhbmdlPXtfb25DaGFuZ2V9XHJcbiAgICAgIG9uQmx1cj17X29uQmx1cn1cclxuICAgICAgb25Gb2N1cz17X29uRm9jdXN9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhc3N3b3JkV2lkZ2V0O1xyXG4iXX0=