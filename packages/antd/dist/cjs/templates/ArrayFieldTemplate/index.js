"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@rjsf/core");

var _FixedArrayFieldTemplate = _interopRequireDefault(require("./FixedArrayFieldTemplate"));

var _NormalArrayFieldTemplate = _interopRequireDefault(require("./NormalArrayFieldTemplate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getDefaultRegistry = _core.utils.getDefaultRegistry,
    getUiOptions = _core.utils.getUiOptions,
    getWidget = _core.utils.getWidget,
    isFilesArray = _core.utils.isFilesArray,
    isFixedItems = _core.utils.isFixedItems,
    isMultiSelect = _core.utils.isMultiSelect,
    optionsList = _core.utils.optionsList,
    retrieveSchema = _core.utils.retrieveSchema;

var ArrayFieldTemplate = function ArrayFieldTemplate(_ref) {
  var DescriptionField = _ref.DescriptionField,
      TitleField = _ref.TitleField,
      autofocus = _ref.autofocus,
      canAdd = _ref.canAdd,
      className = _ref.className,
      disabled = _ref.disabled,
      formContext = _ref.formContext,
      formData = _ref.formData,
      idSchema = _ref.idSchema,
      items = _ref.items,
      label = _ref.label,
      name = _ref.name,
      onAddClick = _ref.onAddClick,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      placeholder = _ref.placeholder,
      rawErrors = _ref.rawErrors,
      readonly = _ref.readonly,
      _ref$registry = _ref.registry,
      registry = _ref$registry === void 0 ? getDefaultRegistry() : _ref$registry,
      required = _ref.required,
      schema = _ref.schema,
      title = _ref.title,
      uiSchema = _ref.uiSchema;
  var fields = registry.fields,
      rootSchema = registry.rootSchema,
      widgets = registry.widgets;
  var UnsupportedField = fields.UnsupportedField;

  var renderFiles = function renderFiles() {
    var _getUiOptions = getUiOptions(uiSchema),
        _getUiOptions$widget = _getUiOptions.widget,
        widget = _getUiOptions$widget === void 0 ? 'files' : _getUiOptions$widget,
        options = _objectWithoutProperties(_getUiOptions, ["widget"]);

    var Widget = getWidget(schema, widget, widgets);
    return /*#__PURE__*/_react.default.createElement(Widget, {
      autofocus: autofocus,
      disabled: disabled,
      formContext: formContext,
      id: idSchema && idSchema.$id,
      multiple: true,
      onBlur: onBlur,
      onChange: onChange,
      onFocus: onFocus,
      options: options,
      rawErrors: rawErrors,
      readonly: readonly,
      schema: schema,
      title: schema.title || name // Why not props.title?
      ,
      value: formData
    });
  };

  var renderMultiSelect = function renderMultiSelect() {
    var itemsSchema = retrieveSchema(schema.items, rootSchema, formData);
    var enumOptions = optionsList(itemsSchema);

    var _getUiOptions$enumOpt = _objectSpread(_objectSpread({}, getUiOptions(uiSchema)), {}, {
      enumOptions: enumOptions
    }),
        _getUiOptions$enumOpt2 = _getUiOptions$enumOpt.widget,
        widget = _getUiOptions$enumOpt2 === void 0 ? 'select' : _getUiOptions$enumOpt2,
        options = _objectWithoutProperties(_getUiOptions$enumOpt, ["widget"]);

    var Widget = getWidget(schema, widget, widgets);
    return /*#__PURE__*/_react.default.createElement(Widget, {
      autofocus: autofocus,
      disabled: disabled,
      formContext: formContext,
      id: idSchema && idSchema.$id,
      label: label,
      multiple: true,
      onBlur: onBlur,
      onChange: onChange,
      onFocus: onFocus,
      options: options,
      placeholder: placeholder,
      rawErrors: rawErrors,
      readonly: readonly,
      registry: registry,
      required: required,
      schema: schema,
      value: formData
    });
  };

  if (!Object.prototype.hasOwnProperty.call(schema, 'items')) {
    return /*#__PURE__*/_react.default.createElement(UnsupportedField, {
      idSchema: idSchema,
      reason: "Missing items definition",
      schema: schema
    });
  }

  if (isFixedItems(schema)) {
    return /*#__PURE__*/_react.default.createElement(_FixedArrayFieldTemplate.default, {
      canAdd: canAdd,
      className: className,
      DescriptionField: DescriptionField,
      disabled: disabled,
      formContext: formContext,
      formData: formData,
      idSchema: idSchema,
      items: items,
      onAddClick: onAddClick,
      readonly: readonly,
      registry: registry,
      required: required,
      schema: schema,
      title: title,
      TitleField: TitleField,
      uiSchema: uiSchema
    });
  }

  if (isFilesArray(schema, uiSchema, rootSchema)) {
    return renderFiles();
  }

  if (isMultiSelect(schema, rootSchema)) {
    return renderMultiSelect();
  }

  return /*#__PURE__*/_react.default.createElement(_NormalArrayFieldTemplate.default, {
    canAdd: canAdd,
    className: className,
    DescriptionField: DescriptionField,
    disabled: disabled,
    formContext: formContext,
    formData: formData,
    idSchema: idSchema,
    items: items,
    onAddClick: onAddClick,
    readonly: readonly,
    registry: registry,
    required: required,
    schema: schema,
    title: title,
    TitleField: TitleField,
    uiSchema: uiSchema
  });
};

var _default = ArrayFieldTemplate;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZW1wbGF0ZXMvQXJyYXlGaWVsZFRlbXBsYXRlL2luZGV4LmpzIl0sIm5hbWVzIjpbImdldERlZmF1bHRSZWdpc3RyeSIsInV0aWxzIiwiZ2V0VWlPcHRpb25zIiwiZ2V0V2lkZ2V0IiwiaXNGaWxlc0FycmF5IiwiaXNGaXhlZEl0ZW1zIiwiaXNNdWx0aVNlbGVjdCIsIm9wdGlvbnNMaXN0IiwicmV0cmlldmVTY2hlbWEiLCJBcnJheUZpZWxkVGVtcGxhdGUiLCJEZXNjcmlwdGlvbkZpZWxkIiwiVGl0bGVGaWVsZCIsImF1dG9mb2N1cyIsImNhbkFkZCIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwiZm9ybUNvbnRleHQiLCJmb3JtRGF0YSIsImlkU2NoZW1hIiwiaXRlbXMiLCJsYWJlbCIsIm5hbWUiLCJvbkFkZENsaWNrIiwib25CbHVyIiwib25DaGFuZ2UiLCJvbkZvY3VzIiwicGxhY2Vob2xkZXIiLCJyYXdFcnJvcnMiLCJyZWFkb25seSIsInJlZ2lzdHJ5IiwicmVxdWlyZWQiLCJzY2hlbWEiLCJ0aXRsZSIsInVpU2NoZW1hIiwiZmllbGRzIiwicm9vdFNjaGVtYSIsIndpZGdldHMiLCJVbnN1cHBvcnRlZEZpZWxkIiwicmVuZGVyRmlsZXMiLCJ3aWRnZXQiLCJvcHRpb25zIiwiV2lkZ2V0IiwiJGlkIiwicmVuZGVyTXVsdGlTZWxlY3QiLCJpdGVtc1NjaGVtYSIsImVudW1PcHRpb25zIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBR0VBLGtCLEdBUUVDLFcsQ0FSRkQsa0I7SUFDQUUsWSxHQU9FRCxXLENBUEZDLFk7SUFDQUMsUyxHQU1FRixXLENBTkZFLFM7SUFDQUMsWSxHQUtFSCxXLENBTEZHLFk7SUFDQUMsWSxHQUlFSixXLENBSkZJLFk7SUFDQUMsYSxHQUdFTCxXLENBSEZL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UUFOWjtBQU9FLElBQUEsUUFBUSxFQUFFQyxRQVBaO0FBUUUsSUFBQSxLQUFLLEVBQUVDLEtBUlQ7QUFTRSxJQUFBLFVBQVUsRUFBRUcsVUFUZDtBQVVFLElBQUEsUUFBUSxFQUFFTSxRQVZaO0FBV0UsSUFBQSxRQUFRLEVBQUVDLFFBWFo7QUFZRSxJQUFBLFFBQVEsRUFBRUMsUUFaWjtBQWFFLElBQUEsTUFBTSxFQUFFQyxNQWJWO0FBY0UsSUFBQSxLQUFLLEVBQUVDLEtBZFQ7QUFlRSxJQUFBLFVBQVUsRUFBRXJCLFVBZmQ7QUFnQkUsSUFBQSxRQUFRLEVBQUVzQjtBQWhCWixJQURGO0FBb0JELENBbEpEOztlQW9KZXhCLGtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSAnQHJqc2YvY29yZSc7XHJcblxyXG5pbXBvcnQgRml4ZWRBcnJheUZpZWxkVGVtcGxhdGUgZnJvbSAnLi9GaXhlZEFycmF5RmllbGRUZW1wbGF0ZSc7XHJcbmltcG9ydCBOb3JtYWxBcnJheUZpZWxkVGVtcGxhdGUgZnJvbSAnLi9Ob3JtYWxBcnJheUZpZWxkVGVtcGxhdGUnO1xyXG5cclxuY29uc3Qge1xyXG4gIGdldERlZmF1bHRSZWdpc3RyeSxcclxuICBnZXRVaU9wdGlvbnMsXHJcbiAgZ2V0V2lkZ2V0LFxyXG4gIGlzRmlsZXNBcnJheSxcclxuICBpc0ZpeGVkSXRlbXMsXHJcbiAgaXNNdWx0aVNlbGVjdCxcclxuICBvcHRpb25zTGlzdCxcclxuICByZXRyaWV2ZVNjaGVtYSxcclxufSA9IHV0aWxzO1xyXG5cclxuY29uc3QgQXJyYXlGaWVsZFRlbXBsYXRlID0gKHtcclxuICBEZXNjcmlwdGlvbkZpZWxkLFxyXG4gIFRpdGxlRmllbGQsXHJcbiAgYXV0b2ZvY3VzLFxyXG4gIGNhbkFkZCxcclxuICBjbGFzc05hbWUsXHJcbiAgZGlzYWJsZWQsXHJcbiAgZm9ybUNvbnRleHQsXHJcbiAgZm9ybURhdGEsXHJcbiAgaWRTY2hlbWEsXHJcbiAgaXRlbXMsXHJcbiAgbGFiZWwsXHJcbiAgbmFtZSxcclxuICBvbkFkZENsaWNrLFxyXG4gIG9uQmx1cixcclxuICBvbkNoYW5nZSxcclxuICBvbkZvY3VzLFxyXG4gIHBsYWNlaG9sZGVyLFxyXG4gIHJhd0Vycm9ycyxcclxuICByZWFkb25seSxcclxuICByZWdpc3RyeSA9IGdldERlZmF1bHRSZWdpc3RyeSgpLFxyXG4gIHJlcXVpcmVkLFxyXG4gIHNjaGVtYSxcclxuICB0aXRsZSxcclxuICB1aVNjaGVtYSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgZmllbGRzLCByb290U2NoZW1hLCB3aWRnZXRzIH0gPSByZWdpc3RyeTtcclxuICBjb25zdCB7IFVuc3VwcG9ydGVkRmllbGQgfSA9IGZpZWxkcztcclxuXHJcbiAgY29uc3QgcmVuZGVyRmlsZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHdpZGdldCA9ICdmaWxlcycsIC4uLm9wdGlvbnMgfSA9IGdldFVpT3B0aW9ucyh1aVNjaGVtYSk7XHJcblxyXG4gICAgY29uc3QgV2lkZ2V0ID0gZ2V0V2lkZ2V0KHNjaGVtYSwgd2lkZ2V0LCB3aWRnZXRzKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8V2lkZ2V0XHJcbiAgICAgICAgYXV0b2ZvY3VzPXthdXRvZm9jdXN9XHJcbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgIGZvcm1Db250ZXh0PXtmb3JtQ29udGV4dH1cclxuICAgICAgICBpZD17aWRTY2hlbWEgJiYgaWRTY2hlbWEuJGlkfVxyXG4gICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgb25CbHVyPXtvbkJsdXJ9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgIG9uRm9jdXM9e29uRm9jdXN9XHJcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICByYXdFcnJvcnM9e3Jhd0Vycm9yc31cclxuICAgICAgICByZWFkb25seT17cmVhZG9ubHl9XHJcbiAgICAgICAgc2NoZW1hPXtzY2hlbWF9XHJcbiAgICAgICAgdGl0bGU9e3NjaGVtYS50aXRsZSB8fCBuYW1lfSAvLyBXaHkgbm90IHByb3BzLnRpdGxlP1xyXG4gICAgICAgIHZhbHVlPXtmb3JtRGF0YX1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTXVsdGlTZWxlY3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtc1NjaGVtYSA9IHJldHJpZXZlU2NoZW1hKHNjaGVtYS5pdGVtcywgcm9vdFNjaGVtYSwgZm9ybURhdGEpO1xyXG4gICAgY29uc3QgZW51bU9wdGlvbnMgPSBvcHRpb25zTGlzdChpdGVtc1NjaGVtYSk7XHJcbiAgICBjb25zdCB7IHdpZGdldCA9ICdzZWxlY3QnLCAuLi5vcHRpb25zIH0gPSB7XHJcbiAgICAgIC4uLmdldFVpT3B0aW9ucyh1aVNjaGVtYSksXHJcbiAgICAgIGVudW1PcHRpb25zLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBXaWRnZXQgPSBnZXRXaWRnZXQoc2NoZW1hLCB3aWRnZXQsIHdpZGdldHMpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxXaWRnZXRcclxuICAgICAgICBhdXRvZm9jdXM9e2F1dG9mb2N1c31cclxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgZm9ybUNvbnRleHQ9e2Zvcm1Db250ZXh0fVxyXG4gICAgICAgIGlkPXtpZFNjaGVtYSAmJiBpZFNjaGVtYS4kaWR9XHJcbiAgICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgb25CbHVyPXtvbkJsdXJ9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgIG9uRm9jdXM9e29uRm9jdXN9XHJcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgcmF3RXJyb3JzPXtyYXdFcnJvcnN9XHJcbiAgICAgICAgcmVhZG9ubHk9e3JlYWRvbmx5fVxyXG4gICAgICAgIHJlZ2lzdHJ5PXtyZWdpc3RyeX1cclxuICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgc2NoZW1hPXtzY2hlbWF9XHJcbiAgICAgICAgdmFsdWU9e2Zvcm1EYXRhfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzY2hlbWEsICdpdGVtcycpKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VW5zdXBwb3J0ZWRGaWVsZFxyXG4gICAgICAgIGlkU2NoZW1hPXtpZFNjaGVtYX1cclxuICAgICAgICByZWFzb249XCJNaXNzaW5nIGl0ZW1zIGRlZmluaXRpb25cIlxyXG4gICAgICAgIHNjaGVtYT17c2NoZW1hfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlmIChpc0ZpeGVkSXRlbXMoc2NoZW1hKSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZpeGVkQXJyYXlGaWVsZFRlbXBsYXRlXHJcbiAgICAgICAgY2FuQWRkPXtjYW5BZGR9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgRGVzY3JpcHRpb25GaWVsZD17RGVzY3JpcHRpb25GaWVsZH1cclxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgZm9ybUNvbnRleHQ9e2Zvcm1Db250ZXh0fVxyXG4gICAgICAgIGZvcm1EYXRhPXtmb3JtRGF0YX1cclxuICAgICAgICBpZFNjaGVtYT17aWRTY2hlbWF9XHJcbiAgICAgICAgaXRlbXM9e2l0ZW1zfVxyXG4gICAgICAgIG9uQWRkQ2xpY2s9e29uQWRkQ2xpY2t9XHJcbiAgICAgICAgcmVhZG9ubHk9e3JlYWRvbmx5fVxyXG4gICAgICAgIHJlZ2lzdHJ5PXtyZWdpc3RyeX1cclxuICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgc2NoZW1hPXtzY2hlbWF9XHJcbiAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgIFRpdGxlRmllbGQ9e1RpdGxlRmllbGR9XHJcbiAgICAgICAgdWlTY2hlbWE9e3VpU2NoZW1hfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcbiAgaWYgKGlzRmlsZXNBcnJheShzY2hlbWEsIHVpU2NoZW1hLCByb290U2NoZW1hKSkge1xyXG4gICAgcmV0dXJuIHJlbmRlckZpbGVzKCk7XHJcbiAgfVxyXG4gIGlmIChpc011bHRpU2VsZWN0KHNjaGVtYSwgcm9vdFNjaGVtYSkpIHtcclxuICAgIHJldHVybiByZW5kZXJNdWx0aVNlbGVjdCgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxOb3JtYWxBcnJheUZpZWxkVGVtcGxhdGVcclxuICAgICAgY2FuQWRkPXtjYW5BZGR9XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICBEZXNjcmlwdGlvbkZpZWxkPXtEZXNjcmlwdGlvbkZpZWxkfVxyXG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgIGZvcm1Db250ZXh0PXtmb3JtQ29udGV4dH1cclxuICAgICAgZm9ybURhdGE9e2Zvcm1EYXRhfVxyXG4gICAgICBpZFNjaGVtYT17aWRTY2hlbWF9XHJcbiAgICAgIGl0ZW1zPXtpdGVtc31cclxuICAgICAgb25BZGRDbGljaz17b25BZGRDbGlja31cclxuICAgICAgcmVhZG9ubHk9e3JlYWRvbmx5fVxyXG4gICAgICByZWdpc3RyeT17cmVnaXN0cnl9XHJcbiAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgc2NoZW1hPXtzY2hlbWF9XHJcbiAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgVGl0bGVGaWVsZD17VGl0bGVGaWVsZH1cclxuICAgICAgdWlTY2hlbWE9e3VpU2NoZW1hfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJyYXlGaWVsZFRlbXBsYXRlO1xyXG4iXX0=