"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _button = _interopRequireDefault(require("antd/lib/button"));

var _col = _interopRequireDefault(require("antd/lib/col"));

var _row = _interopRequireDefault(require("antd/lib/row"));

var _context = require("antd/lib/config-provider/context");

var _PlusCircleOutlined = _interopRequireDefault(require("@ant-design/icons/PlusCircleOutlined"));

var _ArrayFieldTemplateItem = _interopRequireDefault(require("./ArrayFieldTemplateItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DESCRIPTION_COL_STYLE = {
  paddingBottom: '8px'
};

var FixedArrayFieldTemplate = function FixedArrayFieldTemplate(_ref) {
  var canAdd = _ref.canAdd,
      className = _ref.className,
      DescriptionField = _ref.DescriptionField,
      disabled = _ref.disabled,
      formContext = _ref.formContext,
      idSchema = _ref.idSchema,
      items = _ref.items,
      onAddClick = _ref.onAddClick,
      prefixCls = _ref.prefixCls,
      readonly = _ref.readonly,
      required = _ref.required,
      schema = _ref.schema,
      title = _ref.title,
      TitleField = _ref.TitleField,
      uiSchema = _ref.uiSchema;
  var _formContext$labelAli = formContext.labelAlign,
      labelAlign = _formContext$labelAli === void 0 ? 'right' : _formContext$labelAli,
      _formContext$rowGutte = formContext.rowGutter,
      rowGutter = _formContext$rowGutte === void 0 ? 24 : _formContext$rowGutte;
  var labelClsBasic = "".concat(prefixCls, "-item-label");
  var labelColClassName = (0, _classnames.default)(labelClsBasic, labelAlign === 'left' && "".concat(labelClsBasic, "-left") // labelCol.className,
  );
  return /*#__PURE__*/_react.default.createElement("fieldset", {
    className: className,
    id: idSchema.$id
  }, /*#__PURE__*/_react.default.createElement(_row.default, {
    gutter: rowGutter
  }, title && /*#__PURE__*/_react.default.createElement(_col.default, {
    className: labelColClassName,
    span: 24
  }, /*#__PURE__*/_react.default.createElement(TitleField, {
    id: "".concat(idSchema.$id, "__title"),
    key: "array-field-title-".concat(idSchema.$id),
    required: required,
    title: uiSchema['ui:title'] || title
  })), (uiSchema['ui:description'] || schema.description) && /*#__PURE__*/_react.default.createElement(_col.default, {
    span: 24,
    style: DESCRIPTION_COL_STYLE
  }, /*#__PURE__*/_react.default.createElement(DescriptionField, {
    description: uiSchema['ui:description'] || schema.description,
    id: "".concat(idSchema.$id, "-description"),
    key: "array-field-description-".concat(idSchema.$id)
  })), /*#__PURE__*/_react.default.createElement(_col.default, {
    className: "row array-item-list",
    span: 24
  }, items && items.map(function (itemProps) {
    return /*#__PURE__*/_react.default.createElement(_ArrayFieldTemplateItem.default, _extends({}, itemProps, {
      formContext: formContext
    }));
  })), canAdd && /*#__PURE__*/_react.default.createElement(_col.default, {
    span: 24
  }, /*#__PURE__*/_react.default.createElement(_row.default, {
    gutter: rowGutter,
    justify: "end"
  }, /*#__PURE__*/_react.default.createElement(_col.default, {
    flex: "192px"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    block: true,
    className: "array-item-add",
    disabled: disabled || readonly,
    onClick: onAddClick,
    type: "primary"
  }, /*#__PURE__*/_react.default.createElement(_PlusCircleOutlined.default, null), " Add Item"))))));
};

var _default = (0, _context.withConfigConsumer)({
  prefixCls: 'form'
})(FixedArrayFieldTemplate);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZW1wbGF0ZXMvQXJyYXlGaWVsZFRlbXBsYXRlL0ZpeGVkQXJyYXlGaWVsZFRlbXBsYXRlLmpzIl0sIm5hbWVzIjpbIkRFU0NSSVBUSU9OX0NPTF9TVFlMRSIsInBhZGRpbmdCb3R0b20iLCJGaXhlZEFycmF5RmllbGRUZW1wbGF0ZSIsImNhbkFkZCIsImNsYXNzTmFtZSIsIkRlc2NyaXB0aW9uRmllbGQiLCJkaXNhYmxlZCIsImZvcm1Db250ZXh0IiwiaWRTY2hlbWEiLCJpdGVtcyIsIm9uQWRkQ2xpY2siLCJwcmVmaXhDbHMiLCJyZWFkb25seSIsInJlcXVpcmVkIiwic2NoZW1hIiwidGl0bGUiLCJUaXRsZUZpZWxkIiwidWlTY2hlbWEiLCJsYWJlbEFsaWduIiwicm93R3V0dGVyIiwibGFiZWxDbHNCYXNpYyIsImxhYmVsQ29sQ2xhc3NOYW1lIiwiJGlkIiwiZGVzY3JpcHRpb24iLCJtYXAiLCJpdGVtUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUc7QUFDNUJDLEVBQUFBLGFBQWEsRUFBRTtBQURhLENBQTlCOztBQUlBLElBQU1DLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsT0FrQjFCO0FBQUEsTUFqQkpDLE1BaUJJLFFBakJKQSxNQWlCSTtBQUFBLE1BaEJKQyxTQWdCSSxRQWhCSkEsU0FnQkk7QUFBQSxNQWZKQyxnQkFlSSxRQWZKQSxnQkFlSTtBQUFBLE1BZEpDLFFBY0ksUUFkSkEsUUFjSTtBQUFBLE1BYkpDLFdBYUksUUFiSkEsV0FhSTtBQUFBLE1BWEpDLFFBV0ksUUFYSkEsUUFXSTtBQUFBLE1BVkpDLEtBVUksUUFWSkEsS0FVSTtBQUFBLE1BVEpDLFVBU0ksUUFUSkEsVUFTSTtBQUFBLE1BUkpDLFNBUUksUUFSSkEsU0FRSTtBQUFBLE1BUEpDLFFBT0ksUUFQSkEsUUFPSTtB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bmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdhbnRkL2xpYi9idXR0b24nO1xyXG5pbXBvcnQgQ29sIGZyb20gJ2FudGQvbGliL2NvbCc7XHJcbmltcG9ydCBSb3cgZnJvbSAnYW50ZC9saWIvcm93JztcclxuaW1wb3J0IHsgd2l0aENvbmZpZ0NvbnN1bWVyIH0gZnJvbSAnYW50ZC9saWIvY29uZmlnLXByb3ZpZGVyL2NvbnRleHQnO1xyXG5pbXBvcnQgUGx1c0NpcmNsZU91dGxpbmVkIGZyb20gJ0BhbnQtZGVzaWduL2ljb25zL1BsdXNDaXJjbGVPdXRsaW5lZCc7XHJcblxyXG5pbXBvcnQgQXJyYXlGaWVsZFRlbXBsYXRlSXRlbSBmcm9tICcuL0FycmF5RmllbGRUZW1wbGF0ZUl0ZW0nO1xyXG5cclxuY29uc3QgREVTQ1JJUFRJT05fQ09MX1NUWUxFID0ge1xyXG4gIHBhZGRpbmdCb3R0b206ICc4cHgnLFxyXG59O1xyXG5cclxuY29uc3QgRml4ZWRBcnJheUZpZWxkVGVtcGxhdGUgPSAoe1xyXG4gIGNhbkFkZCxcclxuICBjbGFzc05hbWUsXHJcbiAgRGVzY3JpcHRpb25GaWVsZCxcclxuICBkaXNhYmxlZCxcclxuICBmb3JtQ29udGV4dCxcclxuICAvLyBmb3JtRGF0YSxcclxuICBpZFNjaGVtYSxcclxuICBpdGVtcyxcclxuICBvbkFkZENsaWNrLFxyXG4gIHByZWZpeENscyxcclxuICByZWFkb25seSxcclxuICAvLyByZWdpc3RyeSxcclxuICByZXF1aXJlZCxcclxuICBzY2hlbWEsXHJcbiAgdGl0bGUsXHJcbiAgVGl0bGVGaWVsZCxcclxuICB1aVNjaGVtYSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgbGFiZWxBbGlnbiA9ICdyaWdodCcsIHJvd0d1dHRlciA9IDI0IH0gPSBmb3JtQ29udGV4dDtcclxuXHJcbiAgY29uc3QgbGFiZWxDbHNCYXNpYyA9IGAke3ByZWZpeENsc30taXRlbS1sYWJlbGA7XHJcbiAgY29uc3QgbGFiZWxDb2xDbGFzc05hbWUgPSBjbGFzc05hbWVzKFxyXG4gICAgbGFiZWxDbHNCYXNpYyxcclxuICAgIGxhYmVsQWxpZ24gPT09ICdsZWZ0JyAmJiBgJHtsYWJlbENsc0Jhc2ljfS1sZWZ0YCxcclxuICAgIC8vIGxhYmVsQ29sLmNsYXNzTmFtZSxcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZpZWxkc2V0IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD17aWRTY2hlbWEuJGlkfT5cclxuICAgICAgPFJvdyBndXR0ZXI9e3Jvd0d1dHRlcn0+XHJcbiAgICAgICAge3RpdGxlICYmIChcclxuICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPXtsYWJlbENvbENsYXNzTmFtZX0gc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICA8VGl0bGVGaWVsZFxyXG4gICAgICAgICAgICAgIGlkPXtgJHtpZFNjaGVtYS4kaWR9X190aXRsZWB9XHJcbiAgICAgICAgICAgICAga2V5PXtgYXJyYXktZmllbGQtdGl0bGUtJHtpZFNjaGVtYS4kaWR9YH1cclxuICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e3VpU2NoZW1hWyd1aTp0aXRsZSddIHx8IHRpdGxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgeyh1aVNjaGVtYVsndWk6ZGVzY3JpcHRpb24nXSB8fCBzY2hlbWEuZGVzY3JpcHRpb24pICYmIChcclxuICAgICAgICAgIDxDb2wgc3Bhbj17MjR9IHN0eWxlPXtERVNDUklQVElPTl9DT0xfU1RZTEV9PlxyXG4gICAgICAgICAgICA8RGVzY3JpcHRpb25GaWVsZFxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt1aVNjaGVtYVsndWk6ZGVzY3JpcHRpb24nXSB8fCBzY2hlbWEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgaWQ9e2Ake2lkU2NoZW1hLiRpZH0tZGVzY3JpcHRpb25gfVxyXG4gICAgICAgICAgICAgIGtleT17YGFycmF5LWZpZWxkLWRlc2NyaXB0aW9uLSR7aWRTY2hlbWEuJGlkfWB9ICAgICAgXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInJvdyBhcnJheS1pdGVtLWxpc3RcIiBzcGFuPXsyNH0+XHJcbiAgICAgICAgICB7aXRlbXMgJiYgaXRlbXMubWFwKChpdGVtUHJvcHMpID0+IChcclxuICAgICAgICAgICAgPEFycmF5RmllbGRUZW1wbGF0ZUl0ZW0gey4uLml0ZW1Qcm9wc30gZm9ybUNvbnRleHQ9e2Zvcm1Db250ZXh0fSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgIHtjYW5BZGQgJiYgKFxyXG4gICAgICAgICAgPENvbCBzcGFuPXsyNH0+XHJcbiAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXtyb3dHdXR0ZXJ9IGp1c3RpZnk9XCJlbmRcIj5cclxuICAgICAgICAgICAgICA8Q29sIGZsZXg9XCIxOTJweFwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBibG9ja1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnJheS1pdGVtLWFkZFwiXHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCByZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b25BZGRDbGlja31cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8UGx1c0NpcmNsZU91dGxpbmVkIC8+IEFkZCBJdGVtXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICApfVxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvZmllbGRzZXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhDb25maWdDb25zdW1lcih7IHByZWZpeENsczogJ2Zvcm0nIH0pKFxyXG4gIEZpeGVkQXJyYXlGaWVsZFRlbXBsYXRlLFxyXG4pO1xyXG4iXX0=