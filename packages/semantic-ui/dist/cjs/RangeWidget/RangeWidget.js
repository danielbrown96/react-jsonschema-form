"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _core = require("@rjsf/core");

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var rangeSpec = _core.utils.rangeSpec;

function RangeWidget(props) {
  var id = props.id,
      name = props.name,
      value = props.value,
      required = props.required,
      readonly = props.readonly,
      disabled = props.disabled,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      options = props.options,
      schema = props.schema,
      uiSchema = props.uiSchema,
      formContext = props.formContext;
  var semanticProps = (0, _util.getSemanticProps)({
    formContext: formContext,
    options: options,
    uiSchema: uiSchema,
    defaultSchemaProps: {
      fluid: true
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

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_semanticUiReact.Input, _extends({
    id: id,
    key: id,
    name: name,
    type: "range",
    required: required,
    disabled: disabled || readonly
  }, rangeSpec(schema), semanticProps, {
    value: value || "",
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  })), _react.default.createElement("span", null, value));
}

var _default = RangeWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SYW5nZVdpZGdldC9SYW5nZVdpZGdldC5qcyJdLCJuYW1lcyI6WyJyYW5nZVNwZWMiLCJ1dGlscyIsIlJhbmdlV2lkZ2V0IiwicHJvcHMiLCJpZCIsIm5hbWUiLCJ2YWx1ZSIsInJlcXVpcmVkIiwicmVhZG9ubHkiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwib25CbHVyIiwib25Gb2N1cyIsIm9wdGlvbnMiLCJzY2hlbWEiLCJ1aVNjaGVtYSIsImZvcm1Db250ZXh0Iiwic2VtYW50aWNQcm9wcyIsImRlZmF1bHRTY2hlbWFQcm9wcyIsImZsdWlkIiwiX29uQ2hhbmdlIiwidGFyZ2V0IiwiZW1wdHlWYWx1ZSIsIl9vbkJsdXIiLCJfb25Gb2N1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7SUFFUUEsUyxHQUFjQyxXLENBQWRELFM7O0FBQ1IsU0FBU0UsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQSxNQUV4QkMsRUFGd0IsR0FldEJELEtBZnNCLENBRXhCQyxFQUZ3QjtBQUFBLE1BR3hCQyxJQUh3QixHQWV0QkYsS0Fmc0IsQ0FHeEJFLElBSHdCO0FBQUEsTUFJeEJDLEtBSndCLEdBZXRCSCxLQWZzQixDQUl4QkcsS0FKd0I7QUFBQSxNQUt4QkMsUUFMd0IsR0FldEJKLEtBZnNCLENBS3hCSSxRQUx3QjtBQUFBLE1BTXhCQyxRQU53QixHQWV0QkwsS0Fmc0IsQ0FNeEJLLFFBTndCO0FBQUEsTUFPeEJDLFFBUHdCLEdBZXRCTixLQWZzQixDQU94Qk0sUUFQd0I7QUFBQSxNQVF4QkMsUUFSd0IsR0FldEJQLEtBZnNCLENBUXhCTyxRQVJ3QjtBQUFBLE1BU3hCQyxNQVR3QixHQWV0QlIsS0Fmc0IsQ0FTeEJRLE1BVHdCO0FBQUEsTUFVeEJDLE9BVndCLEdBZXRCVCxLQWZzQixDQVV4QlMsT0FWd0I7QUFBQSxNQVd4QkMsT0FYd0IsR0FldEJWLEtBZnNCLENBV3hCVSxPQVh3QjtBQUFBLE1BWXhCQyxNQVp3QixHQWV0QlgsS0Fmc0IsQ0FZeEJXLE1BWndCO0FBQUEsTUFheEJDLFFBYndCLEdBZXRCWixLQWZzQixDQWF4QlksUUFid0I7QUFBQSxNQWN4QkMsV0Fkd0IsR0FldEJiLEtBZnNCLENBY3hCYSxXQWR3QjtBQWdCMUIsTUFBTUMsYUFBYSxHQUFHLDRCQUNwQjtBQUFFRCxJQUFBQSxXQUFXLEVBQVhBLFdBQUY7QUFDRUgsSUFBQUEsT0FBTyxFQUFQQSxPQURGO0FBRUVFLElBQUFBLFFBQVEsRUFBUkEsUUFGRjtBQUdFRyxJQUFBQSxrQkFBa0IsRUFBRTtBQUNsQkMsTUFBQUEsS0FBSyxFQUFFO0FBRFc7QUFIdEIsR0FEb0IsQ0FBdEIsQ0FoQjBCLENBeUIxQjs7QUFDQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFFBQWFkLEtBQWIsUUFBR2UsTUFBSCxDQUFhZixLQUFiO0FBQUEsV0FDaEJJLFFBQVEsSUFBSUEsUUFBUSxDQUFDSixLQUFLLEtBQUssRUFBVixHQUFlTyxPQUFPLENBQUNTLFVBQXZCLEdBQW9DaEIsS0FBckMsQ0FESjtBQUFBLEdBQWxCOztBQUVBLE1BQU1pQixPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFdBQU1aLE1BQU0sSUFBSUEsTUFBTSxDQUFDUCxFQUFELEVBQUtFLEtBQUwsQ0FBdEI7QUFBQSxHQUFoQjs7QUFDQSxNQUFNa0IsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxXQUFNWixPQUFPLElBQUlBLE9BQU8sQ0FBQ1IsRUFBRCxFQUFLRSxLQUFMLENBQXhCO0FBQUEsR0FBakI7O0FBRUEsU0FDRSw2QkFBQyxjQUFELENBQU8sUUFBUCxRQUNFLDZCQUFDLHNCQUFEO0FBQ0UsSUFBQSxFQUFFLEVBQUVGLEVBRE47QUFFRSxJQUFBLEdBQUcsRUFBRUEsRUFGUDtBQUdFLElBQUEsSUFBSSxFQUFFQyxJQUhSO0FBSUUsSUFBQSxJQUFJLEVBQUMsT0FKUDtBQUtFLElBQUEsUUFBUSxFQUFFRSxRQUxaO0FBTUUsSUFBQSxRQUFRLEVBQUVFLFFBQVEsSUFBSUQ7QUFOeEIsS0FPTVIsU0FBUyxDQUFDYyxNQUFELENBUGYsRUFRTUcsYUFSTjtBQVNFLElBQUEsS0FBSyxFQUFFWCxLQUFLLElBQUksRUFUbEI7QUFVRSxJQUFBLFFBQVEsRUFBRWMsU0FWWjtBQVdFLElBQUEsTUFBTSxFQUFFRyxPQVhWO0FBWUUsSUFBQSxPQUFPLEVBQUVDO0FBWlgsS0FERixFQWVFLDJDQUFPbEIsS0FBUCxDQWZGLENBREY7QUFtQkQ7O2VBQ2NKLFciLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgdXRpbHMgfSBmcm9tICdAcmpzZi9jb3JlJztcclxuaW1wb3J0IHsgZ2V0U2VtYW50aWNQcm9wcyB9IGZyb20gXCIuLi91dGlsXCI7XHJcblxyXG5jb25zdCB7IHJhbmdlU3BlYyB9ID0gdXRpbHM7XHJcbmZ1bmN0aW9uIFJhbmdlV2lkZ2V0KHByb3BzKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgaWQsXHJcbiAgICBuYW1lLFxyXG4gICAgdmFsdWUsXHJcbiAgICByZXF1aXJlZCxcclxuICAgIHJlYWRvbmx5LFxyXG4gICAgZGlzYWJsZWQsXHJcbiAgICBvbkNoYW5nZSxcclxuICAgIG9uQmx1cixcclxuICAgIG9uRm9jdXMsXHJcbiAgICBvcHRpb25zLFxyXG4gICAgc2NoZW1hLFxyXG4gICAgdWlTY2hlbWEsXHJcbiAgICBmb3JtQ29udGV4dCxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3Qgc2VtYW50aWNQcm9wcyA9IGdldFNlbWFudGljUHJvcHMoXHJcbiAgICB7IGZvcm1Db250ZXh0LFxyXG4gICAgICBvcHRpb25zLFxyXG4gICAgICB1aVNjaGVtYSxcclxuICAgICAgZGVmYXVsdFNjaGVtYVByb3BzOiB7XHJcbiAgICAgICAgZmx1aWQ6IHRydWUsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XHJcbiAgY29uc3QgX29uQ2hhbmdlID0gKHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT5cclxuICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKHZhbHVlID09PSBcIlwiID8gb3B0aW9ucy5lbXB0eVZhbHVlIDogdmFsdWUpO1xyXG4gIGNvbnN0IF9vbkJsdXIgPSAoKSA9PiBvbkJsdXIgJiYgb25CbHVyKGlkLCB2YWx1ZSk7XHJcbiAgY29uc3QgX29uRm9jdXMgPSAoKSA9PiBvbkZvY3VzICYmIG9uRm9jdXMoaWQsIHZhbHVlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgcmVhZG9ubHl9XHJcbiAgICAgICAgey4uLnJhbmdlU3BlYyhzY2hlbWEpfVxyXG4gICAgICAgIHsuLi5zZW1hbnRpY1Byb3BzfVxyXG4gICAgICAgIHZhbHVlPXt2YWx1ZSB8fCBcIlwifVxyXG4gICAgICAgIG9uQ2hhbmdlPXtfb25DaGFuZ2V9XHJcbiAgICAgICAgb25CbHVyPXtfb25CbHVyfVxyXG4gICAgICAgIG9uRm9jdXM9e19vbkZvY3VzfVxyXG4gICAgICAvPlxyXG4gICAgICA8c3Bhbj57dmFsdWV9PC9zcGFuPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJhbmdlV2lkZ2V0O1xyXG4iXX0=