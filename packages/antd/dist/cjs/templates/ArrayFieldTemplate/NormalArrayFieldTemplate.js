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

var NormalArrayFieldTemplate = function NormalArrayFieldTemplate(_ref) {
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
    id: "".concat(idSchema.$id, "__description"),
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
})(NormalArrayFieldTemplate);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZW1wbGF0ZXMvQXJyYXlGaWVsZFRlbXBsYXRlL05vcm1hbEFycmF5RmllbGRUZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJERVNDUklQVElPTl9DT0xfU1RZTEUiLCJwYWRkaW5nQm90dG9tIiwiTm9ybWFsQXJyYXlGaWVsZFRlbXBsYXRlIiwiY2FuQWRkIiwiY2xhc3NOYW1lIiwiRGVzY3JpcHRpb25GaWVsZCIsImRpc2FibGVkIiwiZm9ybUNvbnRleHQiLCJpZFNjaGVtYSIsIml0ZW1zIiwib25BZGRDbGljayIsInByZWZpeENscyIsInJlYWRvbmx5IiwicmVxdWlyZWQiLCJzY2hlbWEiLCJ0aXRsZSIsIlRpdGxlRmllbGQiLCJ1aVNjaGVtYSIsImxhYmVsQWxpZ24iLCJyb3dHdXR0ZXIiLCJsYWJlbENsc0Jhc2ljIiwibGFiZWxDb2xDbGFzc05hbWUiLCIkaWQiLCJkZXNjcmlwdGlvbiIsIm1hcCIsIml0ZW1Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7QUFFQSxJQUFNQSxxQkFBcUIsR0FBRztBQUM1QkMsRUFBQUEsYUFBYSxFQUFFO0FBRGEsQ0FBOUI7O0FBSUEsSUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixPQWtCM0I7QUFBQSxNQWpCSkMsTUFpQkksUUFqQkpBLE1BaUJJO0FBQUEsTUFoQkpDLFNBZ0JJLFFBaEJKQSxTQWdCSTtBQUFBLE1BZkpDLGdCQWVJLFFBZkpBLGdCQWVJO0FBQUEsTUFkSkMsUUFjSSxRQWRKQSxRQWNJO0FBQUEsTUFiSkMsV0FhSSxRQWJKQSxXQWFJO0FBQUEsTUFYSkMsUUFXSSxRQVhKQSxRQVdJO0FBQUEsTUFWSkMsS0FVSSxRQVZKQSxLQVVJO0FBQUEsTUFUSkMsVUFTSSxRQVRKQSxVQVNJO0FBQUEsTUFSSkMsU0FRSSxRQVJKQSxTQVFJO0FBQUEsTUFQSkMsUUFPSSxRQVBKQSxRQU9J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clxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ2FudGQvbGliL2J1dHRvbic7XHJcbmltcG9ydCBDb2wgZnJvbSAnYW50ZC9saWIvY29sJztcclxuaW1wb3J0IFJvdyBmcm9tICdhbnRkL2xpYi9yb3cnO1xyXG5pbXBvcnQgeyB3aXRoQ29uZmlnQ29uc3VtZXIgfSBmcm9tICdhbnRkL2xpYi9jb25maWctcHJvdmlkZXIvY29udGV4dCc7XHJcbmltcG9ydCBQbHVzQ2lyY2xlT3V0bGluZWQgZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMvUGx1c0NpcmNsZU91dGxpbmVkJztcclxuXHJcbmltcG9ydCBBcnJheUZpZWxkVGVtcGxhdGVJdGVtIGZyb20gJy4vQXJyYXlGaWVsZFRlbXBsYXRlSXRlbSc7XHJcblxyXG5jb25zdCBERVNDUklQVElPTl9DT0xfU1RZTEUgPSB7XHJcbiAgcGFkZGluZ0JvdHRvbTogJzhweCcsXHJcbn07XHJcblxyXG5jb25zdCBOb3JtYWxBcnJheUZpZWxkVGVtcGxhdGUgPSAoe1xyXG4gIGNhbkFkZCxcclxuICBjbGFzc05hbWUsXHJcbiAgRGVzY3JpcHRpb25GaWVsZCxcclxuICBkaXNhYmxlZCxcclxuICBmb3JtQ29udGV4dCxcclxuICAvLyBmb3JtRGF0YSxcclxuICBpZFNjaGVtYSxcclxuICBpdGVtcyxcclxuICBvbkFkZENsaWNrLFxyXG4gIHByZWZpeENscyxcclxuICByZWFkb25seSxcclxuICAvLyByZWdpc3RyeSxcclxuICByZXF1aXJlZCxcclxuICBzY2hlbWEsXHJcbiAgdGl0bGUsXHJcbiAgVGl0bGVGaWVsZCxcclxuICB1aVNjaGVtYSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgbGFiZWxBbGlnbiA9ICdyaWdodCcsIHJvd0d1dHRlciA9IDI0IH0gPSBmb3JtQ29udGV4dDtcclxuXHJcbiAgY29uc3QgbGFiZWxDbHNCYXNpYyA9IGAke3ByZWZpeENsc30taXRlbS1sYWJlbGA7XHJcbiAgY29uc3QgbGFiZWxDb2xDbGFzc05hbWUgPSBjbGFzc05hbWVzKFxyXG4gICAgbGFiZWxDbHNCYXNpYyxcclxuICAgIGxhYmVsQWxpZ24gPT09ICdsZWZ0JyAmJiBgJHtsYWJlbENsc0Jhc2ljfS1sZWZ0YCxcclxuICAgIC8vIGxhYmVsQ29sLmNsYXNzTmFtZSxcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZpZWxkc2V0IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD17aWRTY2hlbWEuJGlkfT5cclxuICAgICAgPFJvdyBndXR0ZXI9e3Jvd0d1dHRlcn0+XHJcbiAgICAgICAge3RpdGxlICYmIChcclxuICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPXtsYWJlbENvbENsYXNzTmFtZX0gc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICA8VGl0bGVGaWVsZFxyXG4gICAgICAgICAgICAgIGlkPXtgJHtpZFNjaGVtYS4kaWR9X190aXRsZWB9XHJcbiAgICAgICAgICAgICAga2V5PXtgYXJyYXktZmllbGQtdGl0bGUtJHtpZFNjaGVtYS4kaWR9YH1cclxuICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e3VpU2NoZW1hWyd1aTp0aXRsZSddIHx8IHRpdGxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgeyh1aVNjaGVtYVsndWk6ZGVzY3JpcHRpb24nXSB8fCBzY2hlbWEuZGVzY3JpcHRpb24pICYmIChcclxuICAgICAgICAgIDxDb2wgc3Bhbj17MjR9IHN0eWxlPXtERVNDUklQVElPTl9DT0xfU1RZTEV9PlxyXG4gICAgICAgICAgICA8RGVzY3JpcHRpb25GaWVsZFxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt1aVNjaGVtYVsndWk6ZGVzY3JpcHRpb24nXSB8fCBzY2hlbWEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgaWQ9e2Ake2lkU2NoZW1hLiRpZH1fX2Rlc2NyaXB0aW9uYH1cclxuICAgICAgICAgICAgICBrZXk9e2BhcnJheS1maWVsZC1kZXNjcmlwdGlvbi0ke2lkU2NoZW1hLiRpZH1gfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPENvbCBjbGFzc05hbWU9XCJyb3cgYXJyYXktaXRlbS1saXN0XCIgc3Bhbj17MjR9PlxyXG4gICAgICAgICAge2l0ZW1zICYmIGl0ZW1zLm1hcCgoaXRlbVByb3BzKSA9PiAoXHJcbiAgICAgICAgICAgIDxBcnJheUZpZWxkVGVtcGxhdGVJdGVtIHsuLi5pdGVtUHJvcHN9IGZvcm1Db250ZXh0PXtmb3JtQ29udGV4dH0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICB7Y2FuQWRkICYmIChcclxuICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICA8Um93IGd1dHRlcj17cm93R3V0dGVyfSBqdXN0aWZ5PVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgPENvbCBmbGV4PVwiMTkycHhcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgYmxvY2tcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJyYXktaXRlbS1hZGRcIlxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgcmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQWRkQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFBsdXNDaXJjbGVPdXRsaW5lZCAvPiBBZGQgSXRlbVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L2ZpZWxkc2V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZmlnQ29uc3VtZXIoeyBwcmVmaXhDbHM6ICdmb3JtJyB9KShcclxuICBOb3JtYWxBcnJheUZpZWxkVGVtcGxhdGUsXHJcbik7XHJcbiJdfQ==