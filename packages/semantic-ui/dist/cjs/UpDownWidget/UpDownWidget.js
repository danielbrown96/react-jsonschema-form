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

function UpDownWidget(props) {
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
    return onChange && onChange(value);
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
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_semanticUiReact.Form.Input, _extends({
    id: id,
    key: id,
    autoFocus: autofocus,
    required: required,
    type: "number",
    label: displayLabel ? label || schema.title : false,
    disabled: disabled || readonly,
    name: name
  }, semanticProps, {
    value: value || value === 0 ? value : "",
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  })));
}

var _default = UpDownWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9VcERvd25XaWRnZXQvVXBEb3duV2lkZ2V0LmpzIl0sIm5hbWVzIjpbImdldERpc3BsYXlMYWJlbCIsInV0aWxzIiwiVXBEb3duV2lkZ2V0IiwicHJvcHMiLCJpZCIsIm5hbWUiLCJsYWJlbCIsInZhbHVlIiwicmVxdWlyZWQiLCJyZWFkb25seSIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJvbkJsdXIiLCJvbkZvY3VzIiwiYXV0b2ZvY3VzIiwib3B0aW9ucyIsInNjaGVtYSIsInVpU2NoZW1hIiwiZm9ybUNvbnRleHQiLCJzZW1hbnRpY1Byb3BzIiwiX29uQ2hhbmdlIiwidGFyZ2V0IiwiX29uQmx1ciIsIl9vbkZvY3VzIiwiZGlzcGxheUxhYmVsIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7O0lBQ1FBLGUsR0FBb0JDLFcsQ0FBcEJELGU7O0FBQ1IsU0FBU0UsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFBQSxNQUV6QkMsRUFGeUIsR0FpQnZCRCxLQWpCdUIsQ0FFekJDLEVBRnlCO0FBQUEsTUFHekJDLElBSHlCLEdBaUJ2QkYsS0FqQnVCLENBR3pCRSxJQUh5QjtBQUFBLE1BSXpCQyxLQUp5QixHQWlCdkJILEtBakJ1QixDQUl6QkcsS0FKeUI7QUFBQSxNQUt6QkMsS0FMeUIsR0FpQnZCSixLQWpCdUIsQ0FLekJJLEtBTHlCO0FBQUEsTUFNekJDLFFBTnlCLEdBaUJ2QkwsS0FqQnVCLENBTXpCSyxRQU55QjtBQUFBLE1BT3pCQyxRQVB5QixHQWlCdkJOLEtBakJ1QixDQU96Qk0sUUFQeUI7QUFBQSxNQVF6QkMsUUFSeUIsR0FpQnZCUCxLQWpCdUIsQ0FRekJPLFFBUnlCO0FBQUEsTUFTekJDLFFBVHlCLEdBaUJ2QlIsS0FqQnVCLENBU3pCUSxRQVR5QjtBQUFBLE1BVXpCQyxNQVZ5QixHQWlCdkJULEtBakJ1QixDQVV6QlMsTUFWeUI7QUFBQSxNQVd6QkMsT0FYeUIsR0FpQnZCVixLQWpCdUIsQ0FXekJVLE9BWHlCO0FBQUEsTUFZekJDLFNBWnlCLEdBaUJ2QlgsS0FqQnVCLENBWXpCVyxTQVp5QjtBQUFBLE1BYXpCQyxPQWJ5QixHQWlCdkJaLEtBakJ1QixDQWF6QlksT0FieUI7QUFBQSxNQWN6QkMsTUFkeUIsR0FpQnZCYixLQWpCdUIsQ0FjekJhLE1BZHlCO0FBQUEsTUFlekJDLFFBZnlCLEdBaUJ2QmQsS0FqQnVCLENBZXpCYyxRQWZ5QjtBQUFBLE1BZ0J6QkMsV0FoQnlCLEdBaUJ2QmYsS0FqQnVCLENBZ0J6QmUsV0FoQnlCO0FBa0IzQixNQUFNQyxhQUFhLEdBQUcsNEJBQ3BCO0FBQUVELElBQUFBLFdBQVcsRUFBWEEsV0FBRjtBQUNFSCxJQUFBQSxPQUFPLEVBQVBBLE9BREY7QUFFRUUsSUFBQUEsUUFBUSxFQUFSQTtBQUZGLEdBRG9CLENBQXRCLENBbEIyQixDQXVCM0I7O0FBQ0EsTUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxRQUFhYixLQUFiLFFBQUdjLE1BQUgsQ0FBYWQsS0FBYjtBQUFBLFdBQTJCSSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0osS0FBRCxDQUEvQztBQUFBLEdBQWxCOztBQUNBLE1BQU1lLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsV0FBTVYsTUFBTSxJQUFJQSxNQUFNLENBQUNSLEVBQUQsRUFBS0csS0FBTCxDQUF0QjtBQUFBLEdBQWhCOztBQUNBLE1BQU1nQixRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLFdBQU1WLE9BQU8sSUFBSUEsT0FBTyxDQUFDVCxFQUFELEVBQUtHLEtBQUwsQ0FBeEI7QUFBQSxHQUFqQjs7QUFDQSxNQUFNaUIsWUFBWSxHQUFHeEIsZUFBZSxDQUNsQ2dCLE1BRGtDLEVBRWxDQztBQUNBO0FBSGtDLEdBQXBDO0FBS0EsU0FDRSw2QkFBQyxjQUFELENBQU8sUUFBUCxRQUNFLDZCQUFDLHFCQUFELENBQU0sS0FBTjtBQUNFLElBQUEsRUFBRSxFQUFFYixFQUROO0FBRUUsSUFBQSxHQUFHLEVBQUVBLEVBRlA7QUFHRSxJQUFBLFNBQVMsRUFBRVUsU0FIYjtBQUlFLElBQUEsUUFBUSxFQUFFTixRQUpaO0FBS0UsSUFBQSxJQUFJLEVBQUMsUUFMUDtBQU1FLElBQUEsS0FBSyxFQUFFZ0IsWUFBWSxHQUFHbEIsS0FBSyxJQUFJVSxNQUFNLENBQUNTLEtBQW5CLEdBQTJCLEtBTmhEO0FBT0UsSUFBQSxRQUFRLEVBQUVmLFFBQVEsSUFBSUQsUUFQeEI7QUFRRSxJQUFBLElBQUksRUFBRUo7QUFSUixLQVNNYyxhQVROO0FBVUUsSUFBQSxLQUFLLEVBQUVaLEtBQUssSUFBSUEsS0FBSyxLQUFLLENBQW5CLEdBQXVCQSxLQUF2QixHQUErQixFQVZ4QztBQVdFLElBQUEsUUFBUSxFQUFFYSxTQVhaO0FBWUUsSUFBQSxNQUFNLEVBQUVFLE9BWlY7QUFhRSxJQUFBLE9BQU8sRUFBRUM7QUFiWCxLQURGLENBREY7QUFtQkQ7O2VBQ2NyQixZIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0U2VtYW50aWNQcm9wcyB9IGZyb21cclxuJy4uL3V0aWwnO1xyXG5pbXBvcnQgeyAgdXRpbHMgfSBmcm9tIFwiQHJqc2YvY29yZVwiO1xyXG5jb25zdCB7IGdldERpc3BsYXlMYWJlbCB9ID0gdXRpbHM7XHJcbmZ1bmN0aW9uIFVwRG93bldpZGdldChwcm9wcykge1xyXG4gIGNvbnN0IHtcclxuICAgIGlkLFxyXG4gICAgbmFtZSxcclxuICAgIGxhYmVsLFxyXG4gICAgdmFsdWUsXHJcbiAgICByZXF1aXJlZCxcclxuICAgIHJlYWRvbmx5LFxyXG4gICAgZGlzYWJsZWQsXHJcbiAgICBvbkNoYW5nZSxcclxuICAgIG9uQmx1cixcclxuICAgIG9uRm9jdXMsXHJcbiAgICBhdXRvZm9jdXMsXHJcbiAgICBvcHRpb25zLFxyXG4gICAgc2NoZW1hLFxyXG4gICAgdWlTY2hlbWEsXHJcbiAgICBmb3JtQ29udGV4dCxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3Qgc2VtYW50aWNQcm9wcyA9IGdldFNlbWFudGljUHJvcHMoXHJcbiAgICB7IGZvcm1Db250ZXh0LFxyXG4gICAgICBvcHRpb25zLFxyXG4gICAgICB1aVNjaGVtYSxcclxuICB9KTtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XHJcbiAgY29uc3QgX29uQ2hhbmdlID0gKHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gb25DaGFuZ2UgJiYgb25DaGFuZ2UodmFsdWUpO1xyXG4gIGNvbnN0IF9vbkJsdXIgPSAoKSA9PiBvbkJsdXIgJiYgb25CbHVyKGlkLCB2YWx1ZSk7XHJcbiAgY29uc3QgX29uRm9jdXMgPSAoKSA9PiBvbkZvY3VzICYmIG9uRm9jdXMoaWQsIHZhbHVlKTtcclxuICBjb25zdCBkaXNwbGF5TGFiZWwgPSBnZXREaXNwbGF5TGFiZWwoXHJcbiAgICBzY2hlbWEsXHJcbiAgICB1aVNjaGVtYVxyXG4gICAgLyogVE9ETzogLCByb290U2NoZW1hICovXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgIGlkPXtpZH1cclxuICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgIGF1dG9Gb2N1cz17YXV0b2ZvY3VzfVxyXG4gICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICBsYWJlbD17ZGlzcGxheUxhYmVsID8gbGFiZWwgfHwgc2NoZW1hLnRpdGxlIDogZmFsc2V9XHJcbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8IHJlYWRvbmx5fVxyXG4gICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgey4uLnNlbWFudGljUHJvcHN9XHJcbiAgICAgICAgdmFsdWU9e3ZhbHVlIHx8IHZhbHVlID09PSAwID8gdmFsdWUgOiBcIlwifVxyXG4gICAgICAgIG9uQ2hhbmdlPXtfb25DaGFuZ2V9XHJcbiAgICAgICAgb25CbHVyPXtfb25CbHVyfVxyXG4gICAgICAgIG9uRm9jdXM9e19vbkZvY3VzfVxyXG4gICAgICAvPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFVwRG93bldpZGdldDtcclxuIl19