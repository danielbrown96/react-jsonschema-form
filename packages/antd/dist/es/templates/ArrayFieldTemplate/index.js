function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { utils } from '@rjsf/core';
import FixedArrayFieldTemplate from './FixedArrayFieldTemplate';
import NormalArrayFieldTemplate from './NormalArrayFieldTemplate';
var getDefaultRegistry = utils.getDefaultRegistry,
    getUiOptions = utils.getUiOptions,
    getWidget = utils.getWidget,
    isFilesArray = utils.isFilesArray,
    isFixedItems = utils.isFixedItems,
    isMultiSelect = utils.isMultiSelect,
    optionsList = utils.optionsList,
    retrieveSchema = utils.retrieveSchema;

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
    return /*#__PURE__*/React.createElement(Widget, {
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
    return /*#__PURE__*/React.createElement(Widget, {
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
    return /*#__PURE__*/React.createElement(UnsupportedField, {
      idSchema: idSchema,
      reason: "Missing items definition",
      schema: schema
    });
  }

  if (isFixedItems(schema)) {
    return /*#__PURE__*/React.createElement(FixedArrayFieldTemplate, {
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

  return /*#__PURE__*/React.createElement(NormalArrayFieldTemplate, {
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

export default ArrayFieldTemplate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZW1wbGF0ZXMvQXJyYXlGaWVsZFRlbXBsYXRlL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXRpbHMiLCJGaXhlZEFycmF5RmllbGRUZW1wbGF0ZSIsIk5vcm1hbEFycmF5RmllbGRUZW1wbGF0ZSIsImdldERlZmF1bHRSZWdpc3RyeSIsImdldFVpT3B0aW9ucyIsImdldFdpZGdldCIsImlzRmlsZXNBcnJheSIsImlzRml4ZWRJdGVtcyIsImlzTXVsdGlTZWxlY3QiLCJvcHRpb25zTGlzdCIsInJldHJpZXZlU2NoZW1hIiwiQXJyYXlGaWVsZFRlbXBsYXRlIiwiRGVzY3JpcHRpb25GaWVsZCIsIlRpdGxlRmllbGQiLCJhdXRvZm9jdXMiLCJjYW5BZGQiLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsImZvcm1Db250ZXh0IiwiZm9ybURhdGEiLCJpZFNjaGVtYSIsIml0ZW1zIiwibGFiZWwiLCJuYW1lIiwib25BZGRDbGljayIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwib25Gb2N1cyIsInBsYWNlaG9sZGVyIiwicmF3RXJyb3JzIiwicmVhZG9ubHkiLCJyZWdpc3RyeSIsInJlcXVpcmVkIiwic2NoZW1hIiwidGl0bGUiLCJ1aVNjaGVtYSIsImZpZWxkcyIsInJvb3RTY2hlbWEiLCJ3aWRnZXRzIiwiVW5zdXBwb3J0ZWRGaWVsZCIsInJlbmRlckZpbGVzIiwid2lkZ2V0Iiwib3B0aW9ucyIsIldpZGdldCIsIiRpZCIsInJlbmRlck11bHRpU2VsZWN0IiwiaXRlbXNTY2hlbWEiLCJlbnVtT3B0aW9ucyIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFFQSxTQUFTQyxLQUFULFFBQXNCLFlBQXRCO0FBRUEsT0FBT0MsdUJBQVAsTUFBb0MsMkJBQXBDO0FBQ0EsT0FBT0Msd0JBQVAsTUFBcUMsNEJBQXJD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QU0sRUFBRTlCLE1BRFY7QUFFRSxJQUFBLFNBQVMsRUFBRUMsU0FGYjtBQUdFLElBQUEsZ0JBQWdCLEVBQUVKLGdCQUhwQjtBQUlFLElBQUEsUUFBUSxFQUFFSyxRQUpaO0FBS0UsSUFBQSxXQUFXLEVBQUVDLFdBTGY7QUFNRSxJQUFBLFFBQVEsRUFBRUMsUUFOWjtBQU9FLElBQUEsUUFBUSxFQUFFQyxRQVBaO0FBUUUsSUFBQSxLQUFLLEVBQUVDLEtBUlQ7QUFTRSxJQUFBLFVBQVUsRUFBRUcsVUFUZDtBQVVFLElBQUEsUUFBUSxFQUFFTSxRQVZaO0FBV0UsSUFBQSxRQUFRLEVBQUVDLFFBWFo7QUFZRSxJQUFBLFFBQVEsRUFBRUMsUUFaWjtBQWFFLElBQUEsTUFBTSxFQUFFQyxNQWJWO0FBY0UsSUFBQSxLQUFLLEVBQUVDLEtBZFQ7QUFlRSxJQUFBLFVBQVUsRUFBRXJCLFVBZmQ7QUFnQkUsSUFBQSxRQUFRLEVBQUVzQjtBQWhCWixJQURGO0FBb0JELENBbEpEOztBQW9KQSxlQUFleEIsa0JBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgdXRpbHMgfSBmcm9tICdAcmpzZi9jb3JlJztcclxuXHJcbmltcG9ydCBGaXhlZEFycmF5RmllbGRUZW1wbGF0ZSBmcm9tICcuL0ZpeGVkQXJyYXlGaWVsZFRlbXBsYXRlJztcclxuaW1wb3J0IE5vcm1hbEFycmF5RmllbGRUZW1wbGF0ZSBmcm9tICcuL05vcm1hbEFycmF5RmllbGRUZW1wbGF0ZSc7XHJcblxyXG5jb25zdCB7XHJcbiAgZ2V0RGVmYXVsdFJlZ2lzdHJ5LFxyXG4gIGdldFVpT3B0aW9ucyxcclxuICBnZXRXaWRnZXQsXHJcbiAgaXNGaWxlc0FycmF5LFxyXG4gIGlzRml4ZWRJdGVtcyxcclxuICBpc011bHRpU2VsZWN0LFxyXG4gIG9wdGlvbnNMaXN0LFxyXG4gIHJldHJpZXZlU2NoZW1hLFxyXG59ID0gdXRpbHM7XHJcblxyXG5jb25zdCBBcnJheUZpZWxkVGVtcGxhdGUgPSAoe1xyXG4gIERlc2NyaXB0aW9uRmllbGQsXHJcbiAgVGl0bGVGaWVsZCxcclxuICBhdXRvZm9jdXMsXHJcbiAgY2FuQWRkLFxyXG4gIGNsYXNzTmFtZSxcclxuICBkaXNhYmxlZCxcclxuICBmb3JtQ29udGV4dCxcclxuICBmb3JtRGF0YSxcclxuICBpZFNjaGVtYSxcclxuICBpdGVtcyxcclxuICBsYWJlbCxcclxuICBuYW1lLFxyXG4gIG9uQWRkQ2xpY2ssXHJcbiAgb25CbHVyLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIG9uRm9jdXMsXHJcbiAgcGxhY2Vob2xkZXIsXHJcbiAgcmF3RXJyb3JzLFxyXG4gIHJlYWRvbmx5LFxyXG4gIHJlZ2lzdHJ5ID0gZ2V0RGVmYXVsdFJlZ2lzdHJ5KCksXHJcbiAgcmVxdWlyZWQsXHJcbiAgc2NoZW1hLFxyXG4gIHRpdGxlLFxyXG4gIHVpU2NoZW1hLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgeyBmaWVsZHMsIHJvb3RTY2hlbWEsIHdpZGdldHMgfSA9IHJlZ2lzdHJ5O1xyXG4gIGNvbnN0IHsgVW5zdXBwb3J0ZWRGaWVsZCB9ID0gZmllbGRzO1xyXG5cclxuICBjb25zdCByZW5kZXJGaWxlcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgd2lkZ2V0ID0gJ2ZpbGVzJywgLi4ub3B0aW9ucyB9ID0gZ2V0VWlPcHRpb25zKHVpU2NoZW1hKTtcclxuXHJcbiAgICBjb25zdCBXaWRnZXQgPSBnZXRXaWRnZXQoc2NoZW1hLCB3aWRnZXQsIHdpZGdldHMpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxXaWRnZXRcclxuICAgICAgICBhdXRvZm9jdXM9e2F1dG9mb2N1c31cclxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgZm9ybUNvbnRleHQ9e2Zvcm1Db250ZXh0fVxyXG4gICAgICAgIGlkPXtpZFNjaGVtYSAmJiBpZFNjaGVtYS4kaWR9XHJcbiAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICBvbkJsdXI9e29uQmx1cn1cclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgb25Gb2N1cz17b25Gb2N1c31cclxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgIHJhd0Vycm9ycz17cmF3RXJyb3JzfVxyXG4gICAgICAgIHJlYWRvbmx5PXtyZWFkb25seX1cclxuICAgICAgICBzY2hlbWE9e3NjaGVtYX1cclxuICAgICAgICB0aXRsZT17c2NoZW1hLnRpdGxlIHx8IG5hbWV9IC8vIFdoeSBub3QgcHJvcHMudGl0bGU/XHJcbiAgICAgICAgdmFsdWU9e2Zvcm1EYXRhfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJNdWx0aVNlbGVjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGl0ZW1zU2NoZW1hID0gcmV0cmlldmVTY2hlbWEoc2NoZW1hLml0ZW1zLCByb290U2NoZW1hLCBmb3JtRGF0YSk7XHJcbiAgICBjb25zdCBlbnVtT3B0aW9ucyA9IG9wdGlvbnNMaXN0KGl0ZW1zU2NoZW1hKTtcclxuICAgIGNvbnN0IHsgd2lkZ2V0ID0gJ3NlbGVjdCcsIC4uLm9wdGlvbnMgfSA9IHtcclxuICAgICAgLi4uZ2V0VWlPcHRpb25zKHVpU2NoZW1hKSxcclxuICAgICAgZW51bU9wdGlvbnMsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFdpZGdldCA9IGdldFdpZGdldChzY2hlbWEsIHdpZGdldCwgd2lkZ2V0cyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFdpZGdldFxyXG4gICAgICAgIGF1dG9mb2N1cz17YXV0b2ZvY3VzfVxyXG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICBmb3JtQ29udGV4dD17Zm9ybUNvbnRleHR9XHJcbiAgICAgICAgaWQ9e2lkU2NoZW1hICYmIGlkU2NoZW1hLiRpZH1cclxuICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICBvbkJsdXI9e29uQmx1cn1cclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgb25Gb2N1cz17b25Gb2N1c31cclxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICByYXdFcnJvcnM9e3Jhd0Vycm9yc31cclxuICAgICAgICByZWFkb25seT17cmVhZG9ubHl9XHJcbiAgICAgICAgcmVnaXN0cnk9e3JlZ2lzdHJ5fVxyXG4gICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICBzY2hlbWE9e3NjaGVtYX1cclxuICAgICAgICB2YWx1ZT17Zm9ybURhdGF9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNjaGVtYSwgJ2l0ZW1zJykpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxVbnN1cHBvcnRlZEZpZWxkXHJcbiAgICAgICAgaWRTY2hlbWE9e2lkU2NoZW1hfVxyXG4gICAgICAgIHJlYXNvbj1cIk1pc3NpbmcgaXRlbXMgZGVmaW5pdGlvblwiXHJcbiAgICAgICAgc2NoZW1hPXtzY2hlbWF9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzRml4ZWRJdGVtcyhzY2hlbWEpKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Rml4ZWRBcnJheUZpZWxkVGVtcGxhdGVcclxuICAgICAgICBjYW5BZGQ9e2NhbkFkZH1cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICBEZXNjcmlwdGlvbkZpZWxkPXtEZXNjcmlwdGlvbkZpZWxkfVxyXG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICBmb3JtQ29udGV4dD17Zm9ybUNvbnRleHR9XHJcbiAgICAgICAgZm9ybURhdGE9e2Zvcm1EYXRhfVxyXG4gICAgICAgIGlkU2NoZW1hPXtpZFNjaGVtYX1cclxuICAgICAgICBpdGVtcz17aXRlbXN9XHJcbiAgICAgICAgb25BZGRDbGljaz17b25BZGRDbGlja31cclxuICAgICAgICByZWFkb25seT17cmVhZG9ubHl9XHJcbiAgICAgICAgcmVnaXN0cnk9e3JlZ2lzdHJ5fVxyXG4gICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICBzY2hlbWE9e3NjaGVtYX1cclxuICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgVGl0bGVGaWVsZD17VGl0bGVGaWVsZH1cclxuICAgICAgICB1aVNjaGVtYT17dWlTY2hlbWF9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAoaXNGaWxlc0FycmF5KHNjaGVtYSwgdWlTY2hlbWEsIHJvb3RTY2hlbWEpKSB7XHJcbiAgICByZXR1cm4gcmVuZGVyRmlsZXMoKTtcclxuICB9XHJcbiAgaWYgKGlzTXVsdGlTZWxlY3Qoc2NoZW1hLCByb290U2NoZW1hKSkge1xyXG4gICAgcmV0dXJuIHJlbmRlck11bHRpU2VsZWN0KCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE5vcm1hbEFycmF5RmllbGRUZW1wbGF0ZVxyXG4gICAgICBjYW5BZGQ9e2NhbkFkZH1cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgIERlc2NyaXB0aW9uRmllbGQ9e0Rlc2NyaXB0aW9uRmllbGR9XHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgZm9ybUNvbnRleHQ9e2Zvcm1Db250ZXh0fVxyXG4gICAgICBmb3JtRGF0YT17Zm9ybURhdGF9XHJcbiAgICAgIGlkU2NoZW1hPXtpZFNjaGVtYX1cclxuICAgICAgaXRlbXM9e2l0ZW1zfVxyXG4gICAgICBvbkFkZENsaWNrPXtvbkFkZENsaWNrfVxyXG4gICAgICByZWFkb25seT17cmVhZG9ubHl9XHJcbiAgICAgIHJlZ2lzdHJ5PXtyZWdpc3RyeX1cclxuICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICBzY2hlbWE9e3NjaGVtYX1cclxuICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICBUaXRsZUZpZWxkPXtUaXRsZUZpZWxkfVxyXG4gICAgICB1aVNjaGVtYT17dWlTY2hlbWF9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnJheUZpZWxkVGVtcGxhdGU7XHJcbiJdfQ==