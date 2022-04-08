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

function TextareaWidget(props) {
  var id = props.id,
      placeholder = props.placeholder,
      value = props.value,
      required = props.required,
      disabled = props.disabled,
      autofocus = props.autofocus,
      label = props.label,
      name = props.name,
      readonly = props.readonly,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      onChange = props.onChange,
      options = props.options,
      schema = props.schema,
      uiSchema = props.uiSchema,
      formContext = props.formContext;
  var semanticProps = (0, _util.getSemanticProps)({
    formContext: formContext,
    options: options,
    defaultSchemaProps: {
      inverted: false
    }
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
  return _react.default.createElement(_semanticUiReact.Form.TextArea, _extends({
    id: id,
    key: id,
    label: displayLabel ? label || schema.title : false,
    placeholder: placeholder,
    autoFocus: autofocus,
    required: required,
    disabled: disabled || readonly,
    name: name
  }, semanticProps, {
    value: value || "",
    rows: options.rows || 5,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
}

var _default = TextareaWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9UZXh0YXJlYVdpZGdldC9UZXh0YXJlYVdpZGdldC5qcyJdLCJuYW1lcyI6WyJnZXREaXNwbGF5TGFiZWwiLCJ1dGlscyIsIlRleHRhcmVhV2lkZ2V0IiwicHJvcHMiLCJpZCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJyZXF1aXJlZCIsImRpc2FibGVkIiwiYXV0b2ZvY3VzIiwibGFiZWwiLCJuYW1lIiwicmVhZG9ubHkiLCJvbkJsdXIiLCJvbkZvY3VzIiwib25DaGFuZ2UiLCJvcHRpb25zIiwic2NoZW1hIiwidWlTY2hlbWEiLCJmb3JtQ29udGV4dCIsInNlbWFudGljUHJvcHMiLCJkZWZhdWx0U2NoZW1hUHJvcHMiLCJpbnZlcnRlZCIsIl9vbkNoYW5nZSIsInRhcmdldCIsImVtcHR5VmFsdWUiLCJfb25CbHVyIiwiX29uRm9jdXMiLCJkaXNwbGF5TGFiZWwiLCJ0aXRsZSIsInJvd3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0lBQ1FBLGUsR0FBb0JDLFcsQ0FBcEJELGU7O0FBQ1IsU0FBU0UsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFBQSxNQUUzQkMsRUFGMkIsR0FrQnpCRCxLQWxCeUIsQ0FFM0JDLEVBRjJCO0FBQUEsTUFHM0JDLFdBSDJCLEdBa0J6QkYsS0FsQnlCLENBRzNCRSxXQUgyQjtBQUFBLE1BSTNCQyxLQUoyQixHQWtCekJILEtBbEJ5QixDQUkzQkcsS0FKMkI7QUFBQSxNQUszQkMsUUFMMkIsR0FrQnpCSixLQWxCeUIsQ0FLM0JJLFFBTDJCO0FBQUEsTUFNM0JDLFFBTjJCLEdBa0J6QkwsS0FsQnlCLENBTTNCSyxRQU4yQjtBQUFBLE1BTzNCQyxTQVAyQixHQWtCekJOLEtBbEJ5QixDQU8zQk0sU0FQMkI7QUFBQSxNQVEzQkMsS0FSMkIsR0FrQnpCUCxLQWxCeUIsQ0FRM0JPLEtBUjJCO0FBQUEsTUFTM0JDLElBVDJCLEdBa0J6QlIsS0FsQnlCLENBUzNCUSxJQVQyQjtBQUFBLE1BVTNCQyxRQVYyQixHQWtCekJULEtBbEJ5QixDQVUzQlMsUUFWMkI7QUFBQSxNQVczQkMsTUFYMkIsR0FrQnpCVixLQWxCeUIsQ0FXM0JVLE1BWDJCO0FBQUEsTUFZM0JDLE9BWjJCLEdBa0J6QlgsS0FsQnlCLENBWTNCVyxPQVoyQjtBQUFBLE1BYTNCQyxRQWIyQixHQWtCekJaLEtBbEJ5QixDQWEzQlksUUFiMkI7QUFBQSxNQWMzQkMsT0FkMkIsR0FrQnpCYixLQWxCeUIsQ0FjM0JhLE9BZDJCO0FBQUEsTUFlM0JDLE1BZjJCLEdBa0J6QmQsS0FsQnlCLENBZTNCYyxNQWYyQjtBQUFBLE1BZ0IzQkMsUUFoQjJCLEdBa0J6QmYsS0FsQnlCLENBZ0IzQmUsUUFoQjJCO0FBQUEsTUFpQjNCQyxXQWpCMkIsR0FrQnpCaEIsS0FsQnlCLENBaUIzQmdCLFdBakIyQjtBQW1CN0IsTUFBTUMsYUFBYSxHQUFHLDRCQUFpQjtBQUNyQ0QsSUFBQUEsV0FBVyxFQUFYQSxXQURxQztBQUVyQ0gsSUFBQUEsT0FBTyxFQUFQQSxPQUZxQztBQUdyQ0ssSUFBQUEsa0JBQWtCLEVBQUU7QUFBRUMsTUFBQUEsUUFBUSxFQUFFO0FBQVo7QUFIaUIsR0FBakIsQ0FBdEIsQ0FuQjZCLENBd0I3Qjs7QUFDQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFFBQWFqQixLQUFiLFFBQUdrQixNQUFILENBQWFsQixLQUFiO0FBQUEsV0FDaEJTLFFBQVEsSUFBSUEsUUFBUSxDQUFDVCxLQUFLLEtBQUssRUFBVixHQUFlVSxPQUFPLENBQUNTLFVBQXZCLEdBQW9DbkIsS0FBckMsQ0FESjtBQUFBLEdBQWxCOztBQUVBLE1BQU1vQixPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFdBQU1iLE1BQU0sSUFBSUEsTUFBTSxDQUFDVCxFQUFELEVBQUtFLEtBQUwsQ0FBdEI7QUFBQSxHQUFoQjs7QUFDQSxNQUFNcUIsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxXQUFNYixPQUFPLElBQUlBLE9BQU8sQ0FBQ1YsRUFBRCxFQUFLRSxLQUFMLENBQXhCO0FBQUEsR0FBakI7O0FBQ0EsTUFBTXNCLFlBQVksR0FBRzVCLGVBQWUsQ0FDbENpQixNQURrQyxFQUVsQ0M7QUFDQTtBQUhrQyxHQUFwQztBQUtBLFNBQ0UsNkJBQUMscUJBQUQsQ0FBTSxRQUFOO0FBQ0UsSUFBQSxFQUFFLEVBQUVkLEVBRE47QUFFRSxJQUFBLEdBQUcsRUFBRUEsRUFGUDtBQUdFLElBQUEsS0FBSyxFQUFFd0IsWUFBWSxHQUFHbEIsS0FBSyxJQUFJTyxNQUFNLENBQUNZLEtBQW5CLEdBQTJCLEtBSGhEO0FBSUUsSUFBQSxXQUFXLEVBQUV4QixXQUpmO0FBS0UsSUFBQSxTQUFTLEVBQUVJLFNBTGI7QUFNRSxJQUFBLFFBQVEsRUFBRUYsUUFOWjtBQU9FLElBQUEsUUFBUSxFQUFFQyxRQUFRLElBQUlJLFFBUHhCO0FBUUUsSUFBQSxJQUFJLEVBQUVEO0FBUlIsS0FTTVMsYUFUTjtBQVVFLElBQUEsS0FBSyxFQUFFZCxLQUFLLElBQUksRUFWbEI7QUFXRSxJQUFBLElBQUksRUFBRVUsT0FBTyxDQUFDYyxJQUFSLElBQWdCLENBWHhCO0FBWUUsSUFBQSxRQUFRLEVBQUVQLFNBWlo7QUFhRSxJQUFBLE1BQU0sRUFBRUcsT0FiVjtBQWNFLElBQUEsT0FBTyxFQUFFQztBQWRYLEtBREY7QUFrQkQ7O2VBQ2N6QixjIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0U2VtYW50aWNQcm9wcyB9IGZyb20gXCIuLi91dGlsXCI7XHJcbmltcG9ydCB7ICB1dGlscyB9IGZyb20gXCJAcmpzZi9jb3JlXCI7XHJcbmNvbnN0IHsgZ2V0RGlzcGxheUxhYmVsIH0gPSB1dGlscztcclxuZnVuY3Rpb24gVGV4dGFyZWFXaWRnZXQocHJvcHMpIHtcclxuICBjb25zdCB7XHJcbiAgICBpZCxcclxuICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgdmFsdWUsXHJcbiAgICByZXF1aXJlZCxcclxuICAgIGRpc2FibGVkLFxyXG4gICAgYXV0b2ZvY3VzLFxyXG4gICAgbGFiZWwsXHJcbiAgICBuYW1lLFxyXG4gICAgcmVhZG9ubHksXHJcbiAgICBvbkJsdXIsXHJcbiAgICBvbkZvY3VzLFxyXG4gICAgb25DaGFuZ2UsXHJcbiAgICBvcHRpb25zLFxyXG4gICAgc2NoZW1hLFxyXG4gICAgdWlTY2hlbWEsXHJcbiAgICBmb3JtQ29udGV4dCxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3Qgc2VtYW50aWNQcm9wcyA9IGdldFNlbWFudGljUHJvcHMoe1xyXG4gICAgZm9ybUNvbnRleHQsXHJcbiAgICBvcHRpb25zLFxyXG4gICAgZGVmYXVsdFNjaGVtYVByb3BzOiB7IGludmVydGVkOiBmYWxzZSB9XHJcbiAgfSk7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xyXG4gIGNvbnN0IF9vbkNoYW5nZSA9ICh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+XHJcbiAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZSh2YWx1ZSA9PT0gXCJcIiA/IG9wdGlvbnMuZW1wdHlWYWx1ZSA6IHZhbHVlKTtcclxuICBjb25zdCBfb25CbHVyID0gKCkgPT4gb25CbHVyICYmIG9uQmx1cihpZCwgdmFsdWUpO1xyXG4gIGNvbnN0IF9vbkZvY3VzID0gKCkgPT4gb25Gb2N1cyAmJiBvbkZvY3VzKGlkLCB2YWx1ZSk7XHJcbiAgY29uc3QgZGlzcGxheUxhYmVsID0gZ2V0RGlzcGxheUxhYmVsKFxyXG4gICAgc2NoZW1hLFxyXG4gICAgdWlTY2hlbWFcclxuICAgIC8qIFRPRE86ICwgcm9vdFNjaGVtYSAqL1xyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtLlRleHRBcmVhXHJcbiAgICAgIGlkPXtpZH1cclxuICAgICAga2V5PXtpZH1cclxuICAgICAgbGFiZWw9e2Rpc3BsYXlMYWJlbCA/IGxhYmVsIHx8IHNjaGVtYS50aXRsZSA6IGZhbHNlfVxyXG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgIGF1dG9Gb2N1cz17YXV0b2ZvY3VzfVxyXG4gICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCByZWFkb25seX1cclxuICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgey4uLnNlbWFudGljUHJvcHN9XHJcbiAgICAgIHZhbHVlPXt2YWx1ZSB8fCBcIlwifVxyXG4gICAgICByb3dzPXtvcHRpb25zLnJvd3MgfHwgNX1cclxuICAgICAgb25DaGFuZ2U9e19vbkNoYW5nZX1cclxuICAgICAgb25CbHVyPXtfb25CbHVyfVxyXG4gICAgICBvbkZvY3VzPXtfb25Gb2N1c31cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYVdpZGdldDtcclxuIl19