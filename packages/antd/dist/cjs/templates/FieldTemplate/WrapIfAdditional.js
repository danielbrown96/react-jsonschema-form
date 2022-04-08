"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@rjsf/core");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _col = _interopRequireDefault(require("antd/lib/col"));

var _form = _interopRequireDefault(require("antd/lib/form"));

var _input = _interopRequireDefault(require("antd/lib/input"));

var _row = _interopRequireDefault(require("antd/lib/row"));

var _DeleteOutlined = _interopRequireDefault(require("@ant-design/icons/DeleteOutlined"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ADDITIONAL_PROPERTY_FLAG = _core.utils.ADDITIONAL_PROPERTY_FLAG;
var VERTICAL_LABEL_COL = {
  span: 24
};
var VERTICAL_WRAPPER_COL = {
  span: 24
};
var INPUT_STYLE = {
  width: '100%'
};

var WrapIfAdditional = function WrapIfAdditional(_ref) {
  var children = _ref.children,
      classNames = _ref.classNames,
      disabled = _ref.disabled,
      formContext = _ref.formContext,
      id = _ref.id,
      label = _ref.label,
      onDropPropertyClick = _ref.onDropPropertyClick,
      onKeyChange = _ref.onKeyChange,
      readonly = _ref.readonly,
      required = _ref.required,
      schema = _ref.schema;
  var colon = formContext.colon,
      _formContext$labelCol = formContext.labelCol,
      labelCol = _formContext$labelCol === void 0 ? VERTICAL_LABEL_COL : _formContext$labelCol,
      _formContext$readonly = formContext.readonlyAsDisabled,
      readonlyAsDisabled = _formContext$readonly === void 0 ? true : _formContext$readonly,
      _formContext$rowGutte = formContext.rowGutter,
      rowGutter = _formContext$rowGutte === void 0 ? 24 : _formContext$rowGutte,
      _formContext$toolbarA = formContext.toolbarAlign,
      toolbarAlign = _formContext$toolbarA === void 0 ? 'top' : _formContext$toolbarA,
      _formContext$wrapperC = formContext.wrapperCol,
      wrapperCol = _formContext$wrapperC === void 0 ? VERTICAL_WRAPPER_COL : _formContext$wrapperC,
      wrapperStyle = formContext.wrapperStyle;
  var keyLabel = "".concat(label, " Key"); // i18n ?

  var additional = schema.hasOwnProperty(ADDITIONAL_PROPERTY_FLAG);

  if (!additional) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: classNames
    }, children);
  }

  var handleBlur = function handleBlur(_ref2) {
    var target = _ref2.target;
    return onKeyChange(target.value);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classNames
  }, /*#__PURE__*/_react.default.createElement(_row.default, {
    align: toolbarAlign,
    gutter: rowGutter
  }, /*#__PURE__*/_react.default.createElement(_col.default, {
    className: "form-additional",
    flex: "1"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement(_form.default.Item, {
    colon: colon,
    className: "form-group",
    hasFeedback: true,
    htmlFor: "".concat(id, "-key"),
    label: keyLabel,
    labelCol: labelCol,
    required: required,
    style: wrapperStyle,
    wrapperCol: wrapperCol
  }, /*#__PURE__*/_react.default.createElement(_input.default, {
    className: "form-control",
    defaultValue: label,
    disabled: disabled || readonlyAsDisabled && readonly,
    id: "".concat(id, "-key"),
    name: "".concat(id, "-key"),
    onBlur: !readonly ? handleBlur : undefined,
    style: INPUT_STYLE,
    type: "text"
  })))), /*#__PURE__*/_react.default.createElement(_col.default, {
    className: "form-additional",
    flex: "1"
  }, children), /*#__PURE__*/_react.default.createElement(_col.default, {
    flex: "192px"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    block: true,
    className: "array-item-remove",
    danger: true,
    disabled: disabled || readonly,
    icon: /*#__PURE__*/_react.default.createElement(_DeleteOutlined.default, null),
    onClick: onDropPropertyClick(label),
    type: "primary"
  }))));
};

var _default = WrapIfAdditional;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZW1wbGF0ZXMvRmllbGRUZW1wbGF0ZS9XcmFwSWZBZGRpdGlvbmFsLmpzIl0sIm5hbWVzIjpbIkFERElUSU9OQUxfUFJPUEVSVFlfRkxBRyIsInV0aWxzIiwiVkVSVElDQUxfTEFCRUxfQ09MIiwic3BhbiIsIlZFUlRJQ0FMX1dSQVBQRVJfQ09MIiwiSU5QVVRfU1RZTEUiLCJ3aWR0aCIsIldyYXBJZkFkZGl0aW9uYWwiLCJjaGlsZHJlbiIsImNsYXNzTmFtZXMiLCJkaXNhYmxlZCIsImZvcm1Db250ZXh0IiwiaWQiLCJsYWJlbCIsIm9uRHJvcFByb3BlcnR5Q2xpY2siLCJvbktleUNoYW5nZSIsInJlYWRvbmx5IiwicmVxdWlyZWQiLCJzY2hlbWEiLCJjb2xvbiIsImxhYmVsQ29sIiwicmVhZG9ubHlBc0Rpc2FibGVkIiwicm93R3V0dGVyIiwidG9vbGJhckFsaWduIiwid3JhcHBlckNvbCIsIndyYXBwZXJTdHlsZSIsImtleUxhYmVsIiwiYWRkaXRpb25hbCIsImhhc093blByb3BlcnR5IiwiaGFuZGxlQmx1ciIsInRhcmdldCIsInZhbHVlIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7SUFFUUEsd0IsR0FBNkJDLFcsQ0FBN0JELHdCO0FBRVIsSUFBTUUsa0JBQWtCLEdBQUc7QUFBRUMsRUFBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBM0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRztBQUFFRCxFQUFBQSxJQUFJLEVBQUU7QUFBUixDQUE3QjtBQUVBLElBQU1FLFdBQVcsR0FBRztBQUNsQkMsRUFBQUEsS0FBSyxFQUFFO0FBRFcsQ0FBcEI7O0FBSUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQVluQjtBQUFBLE1BWEpDLFFBV0ksUUFYSkEsUUFXSTtBQUFBLE1BVkpDLFVBVUksUUFWSkEsVUFVSTtBQUFBLE1B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LElBQUEsSUFBSSxFQUFDO0FBQVYsa0JBQ0UsNkJBQUMsZUFBRDtBQUNFLElBQUEsS0FBSyxNQURQO0FBRUUsSUFBQSxTQUFTLEVBQUMsbUJBRlo7QUFHRSxJQUFBLE1BQU0sTUFIUjtBQUlFLElBQUEsUUFBUSxFQUFFRSxRQUFRLElBQUlNLFFBSnhCO0FBS0UsSUFBQSxJQUFJLGVBQUUsNkJBQUMsdUJBQUQsT0FMUjtBQU1FLElBQUEsT0FBTyxFQUFFRixtQkFBbUIsQ0FBQ0QsS0FBRCxDQU45QjtBQU9FLElBQUEsSUFBSSxFQUFDO0FBUFAsSUFERixDQTlCRixDQURGLENBREY7QUE4Q0QsQ0E5RUQ7O2VBZ0ZlTixnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyB1dGlscyB9IGZyb20gJ0ByanNmL2NvcmUnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ2FudGQvbGliL2J1dHRvbic7XHJcbmltcG9ydCBDb2wgZnJvbSAnYW50ZC9saWIvY29sJztcclxuaW1wb3J0IEZvcm0gZnJvbSAnYW50ZC9saWIvZm9ybSc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICdhbnRkL2xpYi9pbnB1dCc7XHJcbmltcG9ydCBSb3cgZnJvbSAnYW50ZC9saWIvcm93JztcclxuaW1wb3J0IERlbGV0ZU91dGxpbmVkIGZyb20gJ0BhbnQtZGVzaWduL2ljb25zL0RlbGV0ZU91dGxpbmVkJztcclxuXHJcbmNvbnN0IHsgQURESVRJT05BTF9QUk9QRVJUWV9GTEFHIH0gPSB1dGlscztcclxuXHJcbmNvbnN0IFZFUlRJQ0FMX0xBQkVMX0NPTCA9IHsgc3BhbjogMjQgfTtcclxuY29uc3QgVkVSVElDQUxfV1JBUFBFUl9DT0wgPSB7IHNwYW46IDI0IH07XHJcblxyXG5jb25zdCBJTlBVVF9TVFlMRSA9IHtcclxuICB3aWR0aDogJzEwMCUnLFxyXG59O1xyXG5cclxuY29uc3QgV3JhcElmQWRkaXRpb25hbCA9ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xhc3NOYW1lcyxcclxuICBkaXNhYmxlZCxcclxuICBmb3JtQ29udGV4dCxcclxuICBpZCxcclxuICBsYWJlbCxcclxuICBvbkRyb3BQcm9wZXJ0eUNsaWNrLFxyXG4gIG9uS2V5Q2hhbmdlLFxyXG4gIHJlYWRvbmx5LFxyXG4gIHJlcXVpcmVkLFxyXG4gIHNjaGVtYSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGNvbG9uLFxyXG4gICAgbGFiZWxDb2wgPSBWRVJUSUNBTF9MQUJFTF9DT0wsXHJcbiAgICByZWFkb25seUFzRGlzYWJsZWQgPSB0cnVlLFxyXG4gICAgcm93R3V0dGVyID0gMjQsXHJcbiAgICB0b29sYmFyQWxpZ24gPSAndG9wJyxcclxuICAgIHdyYXBwZXJDb2wgPSBWRVJUSUNBTF9XUkFQUEVSX0NPTCxcclxuICAgIHdyYXBwZXJTdHlsZSxcclxuICB9ID0gZm9ybUNvbnRleHQ7XHJcblxyXG4gIGNvbnN0IGtleUxhYmVsID0gYCR7bGFiZWx9IEtleWA7IC8vIGkxOG4gP1xyXG4gIGNvbnN0IGFkZGl0aW9uYWwgPSBzY2hlbWEuaGFzT3duUHJvcGVydHkoQURESVRJT05BTF9QUk9QRVJUWV9GTEFHKTtcclxuXHJcbiAgaWYgKCFhZGRpdGlvbmFsKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9PntjaGlsZHJlbn08L2Rpdj47XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVCbHVyID0gKHsgdGFyZ2V0IH0pID0+IG9uS2V5Q2hhbmdlKHRhcmdldC52YWx1ZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+XHJcbiAgICAgIDxSb3cgYWxpZ249e3Rvb2xiYXJBbGlnbn0gZ3V0dGVyPXtyb3dHdXR0ZXJ9PlxyXG4gICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZm9ybS1hZGRpdGlvbmFsXCIgZmxleD1cIjFcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgY29sb249e2NvbG9ufVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIlxyXG4gICAgICAgICAgICAgIGhhc0ZlZWRiYWNrXHJcbiAgICAgICAgICAgICAgaHRtbEZvcj17YCR7aWR9LWtleWB9XHJcbiAgICAgICAgICAgICAgbGFiZWw9e2tleUxhYmVsfVxyXG4gICAgICAgICAgICAgIGxhYmVsQ29sPXtsYWJlbENvbH1cclxuICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3dyYXBwZXJTdHlsZX1cclxuICAgICAgICAgICAgICB3cmFwcGVyQ29sPXt3cmFwcGVyQ29sfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtsYWJlbH1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCAocmVhZG9ubHlBc0Rpc2FibGVkICYmIHJlYWRvbmx5KX1cclxuICAgICAgICAgICAgICAgIGlkPXtgJHtpZH0ta2V5YH1cclxuICAgICAgICAgICAgICAgIG5hbWU9e2Ake2lkfS1rZXlgfVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXshcmVhZG9ubHkgPyBoYW5kbGVCbHVyIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e0lOUFVUX1NUWUxFfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBjbGFzc05hbWU9XCJmb3JtLWFkZGl0aW9uYWxcIiBmbGV4PVwiMVwiPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgZmxleD1cIjE5MnB4XCI+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGJsb2NrXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFycmF5LWl0ZW0tcmVtb3ZlXCJcclxuICAgICAgICAgICAgZGFuZ2VyXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCByZWFkb25seX1cclxuICAgICAgICAgICAgaWNvbj17PERlbGV0ZU91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkRyb3BQcm9wZXJ0eUNsaWNrKGxhYmVsKX1cclxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3JhcElmQWRkaXRpb25hbDtcclxuIl19