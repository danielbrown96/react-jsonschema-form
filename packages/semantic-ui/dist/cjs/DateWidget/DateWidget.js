"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _util = require("../util");

var _semanticUiReact = require("semantic-ui-react");

var _core = require("@rjsf/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var getDisplayLabel = _core.utils.getDisplayLabel;

function DateWidget(props) {
  var id = props.id,
      required = props.required,
      readonly = props.readonly,
      disabled = props.disabled,
      name = props.name,
      label = props.label,
      value = props.value,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      autofocus = props.autofocus,
      options = props.options,
      formContext = props.formContext,
      schema = props.schema,
      uiSchema = props.uiSchema;
  var semanticProps = (0, _util.getSemanticProps)({
    uiSchema: uiSchema,
    schema: schema,
    formContext: formContext,
    options: options
  });

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
  return _react.default.createElement(_semanticUiReact.Form.Input, _extends({
    key: id,
    id: id,
    type: "date",
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

var _default = DateWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9EYXRlV2lkZ2V0L0RhdGVXaWRnZXQuanMiXSwibmFtZXMiOlsiZ2V0RGlzcGxheUxhYmVsIiwidXRpbHMiLCJEYXRlV2lkZ2V0IiwicHJvcHMiLCJpZCIsInJlcXVpcmVkIiwicmVhZG9ubHkiLCJkaXNhYmxlZCIsIm5hbWUiLCJsYWJlbCIsInZhbHVlIiwib25DaGFuZ2UiLCJvbkJsdXIiLCJvbkZvY3VzIiwiYXV0b2ZvY3VzIiwib3B0aW9ucyIsImZvcm1Db250ZXh0Iiwic2NoZW1hIiwidWlTY2hlbWEiLCJzZW1hbnRpY1Byb3BzIiwiX29uQ2hhbmdlIiwidGFyZ2V0IiwiX29uQmx1ciIsIl9vbkZvY3VzIiwiZGlzcGxheUxhYmVsIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0lBRVFBLGUsR0FBb0JDLFcsQ0FBcEJELGU7O0FBQ1IsU0FBU0UsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQSxNQUV2QkMsRUFGdUIsR0FpQnJCRCxLQWpCcUIsQ0FFdkJDLEVBRnVCO0FBQUEsTUFHdkJDLFFBSHVCLEdBaUJyQkYsS0FqQnFCLENBR3ZCRSxRQUh1QjtBQUFBLE1BSXZCQyxRQUp1QixHQWlCckJILEtBakJxQixDQUl2QkcsUUFKdUI7QUFBQSxNQUt2QkMsUUFMdUIsR0FpQnJCSixLQWpCcUIsQ0FLdkJJLFFBTHVCO0FBQUEsTUFNdkJDLElBTnVCLEdBaUJyQkwsS0FqQnFCLENBTXZCSyxJQU51QjtBQUFBLE1BT3ZCQyxLQVB1QixHQWlCckJOLEtBakJxQixDQU92Qk0sS0FQdUI7QUFBQSxNQVF2QkMsS0FSdUIsR0FpQnJCUCxLQWpCcUIsQ0FRdkJPLEtBUnVCO0FBQUEsTUFTdkJDLFFBVHVCLEdBaUJyQlIsS0FqQnFCLENBU3ZCUSxRQVR1QjtBQUFBLE1BVXZCQyxNQVZ1QixHQWlCckJULEtBakJxQixDQVV2QlMsTUFWdUI7QUFBQSxNQVd2QkMsT0FYdUIsR0FpQnJCVixLQWpCcUIsQ0FXdkJVLE9BWHVCO0FBQUEsTUFZdkJDLFNBWnVCLEdBaUJyQlgsS0FqQnFCLENBWXZCVyxTQVp1QjtBQUFBLE1BYXZCQyxPQWJ1QixHQWlCckJaLEtBakJxQixDQWF2QlksT0FidUI7QUFBQSxNQWN2QkMsV0FkdUIsR0FpQnJCYixLQWpCcUIsQ0FjdkJhLFdBZHVCO0FBQUEsTUFldkJDLE1BZnVCLEdBaUJyQmQsS0FqQnFCLENBZXZCYyxNQWZ1QjtBQUFBLE1BZ0J2QkMsUUFoQnVCLEdBaUJyQmYsS0FqQnFCLENBZ0J2QmUsUUFoQnVCO0FBa0J6QixNQUFNQyxhQUFhLEdBQUcsNEJBQWlCO0FBQ3JDRCxJQUFBQSxRQUFRLEVBQVJBLFFBRHFDO0FBRXJDRCxJQUFBQSxNQUFNLEVBQU5BLE1BRnFDO0FBR3JDRCxJQUFBQSxXQUFXLEVBQVhBLFdBSHFDO0FBSXJDRCxJQUFBQSxPQUFPLEVBQVBBO0FBSnFDLEdBQWpCLENBQXRCOztBQU1BLE1BQU1LLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsUUFBYVYsS0FBYixRQUFHVyxNQUFILENBQWFYLEtBQWI7QUFBQSxXQUEyQkMsUUFBUSxJQUFJQSxRQUFRLENBQUNELEtBQUQsQ0FBL0M7QUFBQSxHQUFsQjs7QUFDQSxNQUFNWSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFdBQU1WLE1BQU0sSUFBSUEsTUFBTSxDQUFDUixFQUFELEVBQUtNLEtBQUwsQ0FBdEI7QUFBQSxHQUFoQjs7QUFDQSxNQUFNYSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLFdBQU1WLE9BQU8sSUFBSUEsT0FBTyxDQUFDVCxFQUFELEVBQUtNLEtBQUwsQ0FBeEI7QUFBQSxHQUFqQjs7QUFDQSxNQUFNYyxZQUFZLEdBQUd4QixlQUFlLENBQ2xDaUIsTUFEa0MsRUFFbENDO0FBQ0E7QUFIa0MsR0FBcEM7QUFLQSxTQUNFLDZCQUFDLHFCQUFELENBQU0sS0FBTjtBQUNBLElBQUEsR0FBRyxFQUFFZCxFQURMO0FBRUEsSUFBQSxFQUFFLEVBQUVBLEVBRko7QUFHQSxJQUFBLElBQUksRUFBQyxNQUhMO0FBSUEsSUFBQSxLQUFLLEVBQUVvQixZQUFZLEdBQUdmLEtBQUssSUFBSVEsTUFBTSxDQUFDUSxLQUFuQixHQUEyQixLQUo5QztBQUtBLElBQUEsUUFBUSxFQUFFcEIsUUFMVjtBQU1BLElBQUEsU0FBUyxFQUFFUyxTQU5YO0FBT0EsSUFBQSxRQUFRLEVBQUVQLFFBQVEsSUFBSUQsUUFQdEI7QUFRQSxJQUFBLElBQUksRUFBRUU7QUFSTixLQVNJVyxhQVRKO0FBVUEsSUFBQSxLQUFLLEVBQUVULEtBQUssSUFBSUEsS0FBSyxLQUFLLENBQW5CLEdBQXVCQSxLQUF2QixHQUErQixFQVZ0QztBQVdBLElBQUEsUUFBUSxFQUFFVSxTQVhWO0FBWUEsSUFBQSxNQUFNLEVBQUVFLE9BWlI7QUFhQSxJQUFBLE9BQU8sRUFBRUM7QUFiVCxLQURGO0FBaUJEOztlQUNjckIsVSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRTZW1hbnRpY1Byb3BzIH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyAgdXRpbHMgfSBmcm9tIFwiQHJqc2YvY29yZVwiO1xyXG5cclxuY29uc3QgeyBnZXREaXNwbGF5TGFiZWwgfSA9IHV0aWxzO1xyXG5mdW5jdGlvbiBEYXRlV2lkZ2V0KHByb3BzKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgaWQsXHJcbiAgICByZXF1aXJlZCxcclxuICAgIHJlYWRvbmx5LFxyXG4gICAgZGlzYWJsZWQsXHJcbiAgICBuYW1lLFxyXG4gICAgbGFiZWwsXHJcbiAgICB2YWx1ZSxcclxuICAgIG9uQ2hhbmdlLFxyXG4gICAgb25CbHVyLFxyXG4gICAgb25Gb2N1cyxcclxuICAgIGF1dG9mb2N1cyxcclxuICAgIG9wdGlvbnMsXHJcbiAgICBmb3JtQ29udGV4dCxcclxuICAgIHNjaGVtYSxcclxuICAgIHVpU2NoZW1hLFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBzZW1hbnRpY1Byb3BzID0gZ2V0U2VtYW50aWNQcm9wcyh7XHJcbiAgICB1aVNjaGVtYSxcclxuICAgIHNjaGVtYSxcclxuICAgIGZvcm1Db250ZXh0LFxyXG4gICAgb3B0aW9ucyxcclxuICB9KTtcclxuICBjb25zdCBfb25DaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiBvbkNoYW5nZSAmJiBvbkNoYW5nZSh2YWx1ZSk7XHJcbiAgY29uc3QgX29uQmx1ciA9ICgpID0+IG9uQmx1ciAmJiBvbkJsdXIoaWQsIHZhbHVlKTtcclxuICBjb25zdCBfb25Gb2N1cyA9ICgpID0+IG9uRm9jdXMgJiYgb25Gb2N1cyhpZCwgdmFsdWUpO1xyXG4gIGNvbnN0IGRpc3BsYXlMYWJlbCA9IGdldERpc3BsYXlMYWJlbChcclxuICAgIHNjaGVtYSxcclxuICAgIHVpU2NoZW1hXHJcbiAgICAvKiBUT0RPOiAsIHJvb3RTY2hlbWEgKi9cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybS5JbnB1dFxyXG4gICAga2V5PXtpZH1cclxuICAgIGlkPXtpZH1cclxuICAgIHR5cGU9XCJkYXRlXCJcclxuICAgIGxhYmVsPXtkaXNwbGF5TGFiZWwgPyBsYWJlbCB8fCBzY2hlbWEudGl0bGUgOiBmYWxzZX1cclxuICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgIGF1dG9Gb2N1cz17YXV0b2ZvY3VzfVxyXG4gICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8IHJlYWRvbmx5fVxyXG4gICAgbmFtZT17bmFtZX1cclxuICAgIHsuLi5zZW1hbnRpY1Byb3BzfVxyXG4gICAgdmFsdWU9e3ZhbHVlIHx8IHZhbHVlID09PSAwID8gdmFsdWUgOiBcIlwifVxyXG4gICAgb25DaGFuZ2U9e19vbkNoYW5nZX1cclxuICAgIG9uQmx1cj17X29uQmx1cn1cclxuICAgIG9uRm9jdXM9e19vbkZvY3VzfVxyXG4gIC8+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBEYXRlV2lkZ2V0O1xyXG4iXX0=