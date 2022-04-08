function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import IconButton from "../IconButton";
import React from "react";
import PropTypes from "prop-types";
import * as types from "../../types";
import { ADDITIONAL_PROPERTY_FLAG, isSelect, retrieveSchema, toIdSchema, getDefaultRegistry, mergeObjects, deepEquals, getSchemaType, getDisplayLabel } from "../../utils";
var REQUIRED_FIELD_SYMBOL = "*";
var COMPONENT_TYPES = {
  array: "ArrayField",
  "boolean": "BooleanField",
  integer: "NumberField",
  number: "NumberField",
  object: "ObjectField",
  string: "StringField",
  "null": "NullField"
};

function getFieldComponent(schema, uiSchema, idSchema, fields) {
  var field = uiSchema["ui:field"];

  if (typeof field === "function") {
    return field;
  }

  if (typeof field === "string" && field in fields) {
    return fields[field];
  }

  var componentName = COMPONENT_TYPES[getSchemaType(schema)]; // If the type is not defined and the schema uses 'anyOf' or 'oneOf', don't
  // render a field and let the MultiSchemaField component handle the form display

  if (!componentName && (schema.anyOf || schema.oneOf)) {
    return function () {
      return null;
    };
  }

  return componentName in fields ? fields[componentName] : function () {
    var UnsupportedField = fields.UnsupportedField;
    return React.createElement(UnsupportedField, {
      schema: schema,
      idSchema: idSchema,
      reason: "Unknown field type ".concat(schema.type)
    });
  };
}

function Label(props) {
  var label = props.label,
      required = props.required,
      id = props.id;

  if (!label) {
    return null;
  }

  return React.createElement("label", {
    className: "control-label",
    htmlFor: id
  }, label, required && React.createElement("span", {
    className: "required"
  }, REQUIRED_FIELD_SYMBOL));
}

function LabelInput(props) {
  var id = props.id,
      label = props.label,
      onChange = props.onChange;
  return React.createElement("input", {
    className: "form-control",
    type: "text",
    id: id,
    onBlur: function onBlur(event) {
      return onChange(event.target.value);
    },
    defaultValue: label
  });
}

function Help(props) {
  var id = props.id,
      help = props.help;

  if (!help) {
    return null;
  }

  if (typeof help === "string") {
    return React.createElement("p", {
      id: id,
      className: "help-block"
    }, help);
  }

  return React.createElement("div", {
    id: id,
    className: "help-block"
  }, help);
}

function ErrorList(props) {
  var _props$errors = props.errors,
      errors = _props$errors === void 0 ? [] : _props$errors;

  if (errors.length === 0) {
    return null;
  }

  return React.createElement("div", null, React.createElement("ul", {
    className: "error-detail bs-callout bs-callout-info"
  }, errors.filter(function (elem) {
    return !!elem;
  }).map(function (error, index) {
    return React.createElement("li", {
      className: "text-danger",
      key: index
    }, error);
  })));
}

function DefaultTemplate(props) {
  var id = props.id,
      label = props.label,
      children = props.children,
      errors = props.errors,
      help = props.help,
      description = props.description,
      hidden = props.hidden,
      required = props.required,
      displayLabel = props.displayLabel;

  if (hidden) {
    return React.createElement("div", {
      className: "hidden"
    }, children);
  }

  return React.createElement(WrapIfAdditional, props, displayLabel && React.createElement(Label, {
    label: label,
    required: required,
    id: id
  }), displayLabel && description ? description : null, children, errors, help);
}

if (process.env.NODE_ENV !== "production") {
  DefaultTemplate.propTypes = {
    id: PropTypes.string,
    classNames: PropTypes.string,
    label: PropTypes.string,
    children: PropTypes.node.isRequired,
    errors: PropTypes.element,
    rawErrors: PropTypes.arrayOf(PropTypes.string),
    help: PropTypes.element,
    rawHelp: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    description: PropTypes.element,
    rawDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    hidden: PropTypes.bool,
    required: PropTypes.bool,
    readonly: PropTypes.bool,
    displayLabel: PropTypes.bool,
    fields: PropTypes.object,
    formContext: PropTypes.object
  };
}

DefaultTemplate.defaultProps = {
  hidden: false,
  readonly: false,
  required: false,
  displayLabel: true
};

function WrapIfAdditional(props) {
  var id = props.id,
      classNames = props.classNames,
      disabled = props.disabled,
      label = props.label,
      onKeyChange = props.onKeyChange,
      onDropPropertyClick = props.onDropPropertyClick,
      readonly = props.readonly,
      required = props.required,
      schema = props.schema;
  var keyLabel = "".concat(label, " Key"); // i18n ?

  var additional = schema.hasOwnProperty(ADDITIONAL_PROPERTY_FLAG);

  if (!additional) {
    return React.createElement("div", {
      className: classNames
    }, props.children);
  }

  return React.createElement("div", {
    className: classNames
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-xs-5 form-additional"
  }, React.createElement("div", {
    className: "form-group"
  }, React.createElement(Label, {
    label: keyLabel,
    required: required,
    id: "".concat(id, "-key")
  }), React.createElement(LabelInput, {
    label: label,
    required: required,
    id: "".concat(id, "-key"),
    onChange: onKeyChange
  }))), React.createElement("div", {
    className: "form-additional form-group col-xs-5"
  }, props.children), React.createElement("div", {
    className: "col-xs-2"
  }, React.createElement(IconButton, {
    type: "danger",
    icon: "remove",
    className: "array-item-remove btn-block",
    tabIndex: "-1",
    style: {
      border: "0"
    },
    disabled: disabled || readonly,
    onClick: onDropPropertyClick(label)
  }))));
}

function SchemaFieldRender(props) {
  var uiSchema = props.uiSchema,
      formData = props.formData,
      errorSchema = props.errorSchema,
      idPrefix = props.idPrefix,
      idSeparator = props.idSeparator,
      name = props.name,
      onChange = props.onChange,
      onKeyChange = props.onKeyChange,
      onDropPropertyClick = props.onDropPropertyClick,
      required = props.required,
      _props$registry = props.registry,
      registry = _props$registry === void 0 ? getDefaultRegistry() : _props$registry,
      _props$wasPropertyKey = props.wasPropertyKeyModified,
      wasPropertyKeyModified = _props$wasPropertyKey === void 0 ? false : _props$wasPropertyKey;
  var rootSchema = registry.rootSchema,
      fields = registry.fields,
      formContext = registry.formContext;
  var FieldTemplate = uiSchema["ui:FieldTemplate"] || registry.FieldTemplate || DefaultTemplate;
  var idSchema = props.idSchema;
  var schema = retrieveSchema(props.schema, rootSchema, formData);
  idSchema = mergeObjects(toIdSchema(schema, null, rootSchema, formData, idPrefix, idSeparator), idSchema);
  var FieldComponent = getFieldComponent(schema, uiSchema, idSchema, fields);
  var DescriptionField = fields.DescriptionField;
  var disabled = Boolean(props.disabled || uiSchema["ui:disabled"]);
  var readonly = Boolean(props.readonly || uiSchema["ui:readonly"] || props.schema.readOnly || schema.readOnly);
  var uiSchemaHideError = uiSchema["ui:hideError"]; // Set hideError to the value provided in the uiSchema, otherwise stick with the prop to propagate to children

  var hideError = uiSchemaHideError === undefined ? props.hideError : Boolean(uiSchemaHideError);
  var autofocus = Boolean(props.autofocus || uiSchema["ui:autofocus"]);

  if (Object.keys(schema).length === 0) {
    return null;
  }

  var displayLabel = getDisplayLabel(schema, uiSchema, rootSchema);

  var __errors = errorSchema.__errors,
      fieldErrorSchema = _objectWithoutProperties(errorSchema, ["__errors"]); // See #439: uiSchema: Don't pass consumed class names to child components


  var field = React.createElement(FieldComponent, _extends({}, props, {
    idSchema: idSchema,
    schema: schema,
    uiSchema: _objectSpread({}, uiSchema, {
      classNames: undefined
    }),
    disabled: disabled,
    readonly: readonly,
    hideError: hideError,
    autofocus: autofocus,
    errorSchema: fieldErrorSchema,
    formContext: formContext,
    rawErrors: __errors
  }));
  var id = idSchema.$id; // If this schema has a title defined, but the user has set a new key/label, retain their input.

  var label;

  if (wasPropertyKeyModified) {
    label = name;
  } else {
    label = uiSchema["ui:title"] || props.schema.title || schema.title || name;
  }

  var description = uiSchema["ui:description"] || props.schema.description || schema.description;
  var errors = __errors;
  var help = uiSchema["ui:help"];
  var hidden = uiSchema["ui:widget"] === "hidden";
  var classNames = ["form-group", "field", "field-".concat(schema.type)];

  if (!hideError && errors && errors.length > 0) {
    classNames.push("field-error has-error has-danger");
  }

  classNames.push(uiSchema.classNames);
  classNames = classNames.join(" ").trim();
  var fieldProps = {
    description: React.createElement(DescriptionField, {
      id: id + "__description",
      description: description,
      formContext: formContext
    }),
    rawDescription: description,
    help: React.createElement(Help, {
      id: id + "__help",
      help: help
    }),
    rawHelp: typeof help === "string" ? help : undefined,
    errors: hideError ? undefined : React.createElement(ErrorList, {
      errors: errors
    }),
    rawErrors: hideError ? undefined : errors,
    id: id,
    label: label,
    hidden: hidden,
    onChange: onChange,
    onKeyChange: onKeyChange,
    onDropPropertyClick: onDropPropertyClick,
    required: required,
    disabled: disabled,
    readonly: readonly,
    hideError: hideError,
    displayLabel: displayLabel,
    classNames: classNames,
    formContext: formContext,
    formData: formData,
    fields: fields,
    schema: schema,
    uiSchema: uiSchema,
    registry: registry
  };
  var _AnyOfField = registry.fields.AnyOfField;
  var _OneOfField = registry.fields.OneOfField;
  return React.createElement(FieldTemplate, fieldProps, React.createElement(React.Fragment, null, field, schema.anyOf && !isSelect(schema) && React.createElement(_AnyOfField, {
    disabled: disabled,
    readonly: readonly,
    hideError: hideError,
    errorSchema: errorSchema,
    formData: formData,
    idPrefix: idPrefix,
    idSchema: idSchema,
    idSeparator: idSeparator,
    onBlur: props.onBlur,
    onChange: props.onChange,
    onFocus: props.onFocus,
    options: schema.anyOf.map(function (_schema) {
      return retrieveSchema(_schema, rootSchema, formData);
    }),
    baseType: schema.type,
    registry: registry,
    schema: schema,
    uiSchema: uiSchema
  }), schema.oneOf && !isSelect(schema) && React.createElement(_OneOfField, {
    disabled: disabled,
    readonly: readonly,
    hideError: hideError,
    errorSchema: errorSchema,
    formData: formData,
    idPrefix: idPrefix,
    idSchema: idSchema,
    idSeparator: idSeparator,
    onBlur: props.onBlur,
    onChange: props.onChange,
    onFocus: props.onFocus,
    options: schema.oneOf.map(function (_schema) {
      return retrieveSchema(_schema, rootSchema, formData);
    }),
    baseType: schema.type,
    registry: registry,
    schema: schema,
    uiSchema: uiSchema
  })));
}

var SchemaField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SchemaField, _React$Component);

  function SchemaField() {
    _classCallCheck(this, SchemaField);

    return _possibleConstructorReturn(this, _getPrototypeOf(SchemaField).apply(this, arguments));
  }

  _createClass(SchemaField, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !deepEquals(this.props, nextProps);
    }
  }, {
    key: "render",
    value: function render() {
      return SchemaFieldRender(this.props);
    }
  }]);

  return SchemaField;
}(React.Component);

SchemaField.defaultProps = {
  uiSchema: {},
  errorSchema: {},
  idSchema: {},
  disabled: false,
  readonly: false,
  autofocus: false,
  hideError: false
};

if (process.env.NODE_ENV !== "production") {
  SchemaField.propTypes = {
    schema: PropTypes.object.isRequired,
    uiSchema: PropTypes.object,
    idSchema: PropTypes.object,
    formData: PropTypes.any,
    errorSchema: PropTypes.object,
    registry: types.registry.isRequired
  };
}

export default SchemaField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpZWxkcy9TY2hlbWFGaWVsZC5qcyJdLCJuYW1lcyI6WyJJY29uQnV0dG9uIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJ0eXBlcyIsIkFERElUSU9OQUxfUFJPUEVSVFlfRkxBRyIsImlzU2VsZWN0IiwicmV0cmlldmVTY2hlbWEiLCJ0b0lkU2NoZW1hIiwiZ2V0RGVmYXVsdFJlZ2lzdHJ5IiwibWVyZ2VPYmplY3RzIiwiZGVlcEVxdWFscyIsImdldFNjaGVtYVR5cGUiLCJnZXREaXNwbGF5TGFiZWwiLCJSRVFVSVJFRF9GSUVMRF9TWU1CT0wiLCJDT01QT05FTlRfVFlQRVMiLCJhcnJheSIsImludGVnZXIiLCJudW1iZXIiLCJvYmplY3QiLCJzdHJpbmciLCJnZXRGaWVsZENvbXBvbmVudCIsInNjaGVtYSIsInVpU2NoZW1hIiwiaWRTY2hlbWEiLCJmaWVsZHMiLCJmaWVsZCIsImNvbXBvbmVudE5hbWUiLCJhbnlPZiIsIm9uZU9mIiwiVW5zdXBwb3J0ZWRGaWVsZCIsInR5cGUiLCJMYWJlbCIsInByb3BzIiwibGFiZWwiLCJyZXF1aXJlZCIsImlkIiwiTGFiZWxJbnB1dCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkhlbHAiLCJoZWxwIiwiRXJyb3JMaXN0IiwiZXJyb3JzIiwibGVuZ3RoIiwiZmlsdGVyIiwiZWxlbSIsIm1hcCIsImVycm9yIiwiaW5kZXgiLCJEZWZhdWx0VGVtcGxhdGUiLCJjaGlsZHJlbiIsImRlc2NyaXB0aW9uIiwiaGlkZGVuIiwiZGlzcGxheUxhYmVsIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwicHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwiZWxlbWVudCIsInJhd0Vycm9ycyIsImFycmF5T2YiLCJyYXdIZWxwIiwib25lT2ZUeXBlIiwicmF3RGVzY3JpcHRpb24iLCJib29sIiwicmVhZG9ubHkiLCJmb3JtQ29udGV4dCIsImRlZmF1bHRQcm9wcyIsIldyYXBJZkFkZGl0aW9uYWwiLCJkaXNhYmxlZCIsIm9uS2V5Q2hhbmdlIiwib25Ecm9wUHJvcGVydHlDbGljayIsImtleUxhYmVsIiwiYWRkaXRpb25hbCIsImhhc093blByb3BlcnR5IiwiYm9yZGVyIiwiU2NoZW1hRmllbGRSZW5kZXIiLCJmb3JtRGF0YSIsImVycm9yU2NoZW1hIiwiaWRQcmVmaXgiLCJpZFNlcGFyYXRvciIsIm5hbWUiLCJyZWdpc3RyeSIsIndhc1Byb3BlcnR5S2V5TW9kaWZpZWQiLCJyb290U2NoZW1hIiwiRmllbGRUZW1wbGF0ZSIsIkZpZWxkQ29tcG9uZW50IiwiRGVzY3JpcHRpb25GaWVsZCIsIkJvb2xlYW4iLCJyZWFkT25seSIsInVpU2NoZW1hSGlkZUVycm9yIiwiaGlkZUVycm9yIiwidW5kZWZpbmVkIiwiYXV0b2ZvY3VzIiwiT2JqZWN0Iiwia2V5cyIsIl9fZXJyb3JzIiwiZmllbGRFcnJvclNjaGVtYSIsIiRpZCIsInRpdGxlIiwicHVzaCIsImpvaW4iLCJ0cmltIiwiZmllbGRQcm9wcyIsIl9BbnlPZkZpZWxkIiwiQW55T2ZGaWVsZCIsIl9PbmVPZkZpZWxkIiwiT25lT2ZGaWVsZCIsIm9uQmx1ciIsIm9uRm9jdXMiLCJfc2NoZW1hIiwiU2NoZW1hRmllbGQiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJDb21wb25lbnQiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxVQUFQLE1BQXVCLGVBQXZCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPLEtBQUtDLEtBQVosTUFBdUIsYUFBdkI7QUFFQSxTQUNFQyx3QkFERixFQUVFQyxRQUZGLEVBR0VDLGNBSEYsRUFJRUMsVUFKRixFQUtFQyxrQkFMRixFQU1FQyxZQU5GLEVBT0VDLFVBUEYsRUFRRUMsYUFSRixFQVNFQyxlQVRGLFFBVU8sYUFWUDtBQVlB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RDs7OzZCQUVRO0FBQ1AsYUFBT3BDLGlCQUFpQixDQUFDLEtBQUtqRCxLQUFOLENBQXhCO0FBQ0Q7Ozs7RUFQdUIvQixLQUFLLENBQUNzSCxTOztBQVVoQ0gsV0FBVyxDQUFDNUMsWUFBWixHQUEyQjtBQUN6QmxELEVBQUFBLFFBQVEsRUFBRSxFQURlO0FBRXpCNkQsRUFBQUEsV0FBVyxFQUFFLEVBRlk7QUFHekI1RCxFQUFBQSxRQUFRLEVBQUUsRUFIZTtBQUl6Qm1ELEVBQUFBLFFBQVEsRUFBRSxLQUplO0FBS3pCSixFQUFBQSxRQUFRLEVBQUUsS0FMZTtBQU16QjRCLEVBQUFBLFNBQVMsRUFBRSxLQU5jO0FBT3pCRixFQUFBQSxTQUFTLEVBQUU7QUFQYyxDQUEzQjs7QUFVQSxJQUFJeEMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDekMwRCxFQUFBQSxXQUFXLENBQUN6RCxTQUFaLEdBQXdCO0FBQ3RCdEMsSUFBQUEsTUFBTSxFQUFFbkIsU0FBUyxDQUFDZ0IsTUFBVixDQUFpQjRDLFVBREg7QUFFdEJ4QyxJQUFBQSxRQUFRLEVBQUVwQixTQUFTLENBQUNnQixNQUZFO0FBR3RCSyxJQUFBQSxRQUFRLEVBQUVyQixTQUFTLENBQUNnQixNQUhFO0FBSXRCZ0UsSUFBQUEsUUFBUSxFQUFFaEYsU0FBUyxDQUFDc0gsR0FKRTtBQUt0QnJDLElBQUFBLFdBQVcsRUFBRWpGLFNBQVMsQ0FBQ2dCLE1BTEQ7QUFNdEJxRSxJQUFBQSxRQUFRLEVBQUVwRixLQUFLLENBQUNvRixRQUFOLENBQWV6QjtBQU5ILEdBQXhCO0FBUUQ7O0FBRUQsZUFBZXNELFdBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiLi4vSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFERElUSU9OQUxfUFJPUEVSVFlfRkxBRyxcclxuICBpc1NlbGVjdCxcclxuICByZXRyaWV2ZVNjaGVtYSxcclxuICB0b0lkU2NoZW1hLFxyXG4gIGdldERlZmF1bHRSZWdpc3RyeSxcclxuICBtZXJnZU9iamVjdHMsXHJcbiAgZGVlcEVxdWFscyxcclxuICBnZXRTY2hlbWFUeXBlLFxyXG4gIGdldERpc3BsYXlMYWJlbCxcclxufSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcclxuXHJcbmNvbnN0IFJFUVVJUkVEX0ZJRUxEX1NZTUJPTCA9IFwiKlwiO1xyXG5jb25zdCBDT01QT05FTlRfVFlQRVMgPSB7XHJcbiAgYXJyYXk6IFwiQXJyYXlGaWVsZFwiLFxyXG4gIGJvb2xlYW46IFwiQm9vbGVhbkZpZWxkXCIsXHJcbiAgaW50ZWdlcjogXCJOdW1iZXJGaWVsZFwiLFxyXG4gIG51bWJlcjogXCJOdW1iZXJGaWVsZFwiLFxyXG4gIG9iamVjdDogXCJPYmplY3RGaWVsZFwiLFxyXG4gIHN0cmluZzogXCJTdHJpbmdGaWVsZFwiLFxyXG4gIG51bGw6IFwiTnVsbEZpZWxkXCIsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRGaWVsZENvbXBvbmVudChzY2hlbWEsIHVpU2NoZW1hLCBpZFNjaGVtYSwgZmllbGRzKSB7XHJcbiAgY29uc3QgZmllbGQgPSB1aVNjaGVtYVtcInVpOmZpZWxkXCJdO1xyXG4gIGlmICh0eXBlb2YgZmllbGQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgcmV0dXJuIGZpZWxkO1xyXG4gIH1cclxuICBpZiAodHlwZW9mIGZpZWxkID09PSBcInN0cmluZ1wiICYmIGZpZWxkIGluIGZpZWxkcykge1xyXG4gICAgcmV0dXJuIGZpZWxkc1tmaWVsZF07XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb21wb25lbnROYW1lID0gQ09NUE9ORU5UX1RZUEVTW2dldFNjaGVtYVR5cGUoc2NoZW1hKV07XHJcblxyXG4gIC8vIElmIHRoZSB0eXBlIGlzIG5vdCBkZWZpbmVkIGFuZCB0aGUgc2NoZW1hIHVzZXMgJ2FueU9mJyBvciAnb25lT2YnLCBkb24ndFxyXG4gIC8vIHJlbmRlciBhIGZpZWxkIGFuZCBsZXQgdGhlIE11bHRpU2NoZW1hRmllbGQgY29tcG9uZW50IGhhbmRsZSB0aGUgZm9ybSBkaXNwbGF5XHJcbiAgaWYgKCFjb21wb25lbnROYW1lICYmIChzY2hlbWEuYW55T2YgfHwgc2NoZW1hLm9uZU9mKSkge1xyXG4gICAgcmV0dXJuICgpID0+IG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29tcG9uZW50TmFtZSBpbiBmaWVsZHNcclxuICAgID8gZmllbGRzW2NvbXBvbmVudE5hbWVdXHJcbiAgICA6ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IFVuc3VwcG9ydGVkRmllbGQgfSA9IGZpZWxkcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxVbnN1cHBvcnRlZEZpZWxkXHJcbiAgICAgICAgICAgIHNjaGVtYT17c2NoZW1hfVxyXG4gICAgICAgICAgICBpZFNjaGVtYT17aWRTY2hlbWF9XHJcbiAgICAgICAgICAgIHJlYXNvbj17YFVua25vd24gZmllbGQgdHlwZSAke3NjaGVtYS50eXBlfWB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExhYmVsKHByb3BzKSB7XHJcbiAgY29uc3QgeyBsYWJlbCwgcmVxdWlyZWQsIGlkIH0gPSBwcm9wcztcclxuICBpZiAoIWxhYmVsKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCIgaHRtbEZvcj17aWR9PlxyXG4gICAgICB7bGFiZWx9XHJcbiAgICAgIHtyZXF1aXJlZCAmJiA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPntSRVFVSVJFRF9GSUVMRF9TWU1CT0x9PC9zcGFuPn1cclxuICAgIDwvbGFiZWw+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTGFiZWxJbnB1dChwcm9wcykge1xyXG4gIGNvbnN0IHsgaWQsIGxhYmVsLCBvbkNoYW5nZSB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxpbnB1dFxyXG4gICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgIGlkPXtpZH1cclxuICAgICAgb25CbHVyPXtldmVudCA9PiBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICBkZWZhdWx0VmFsdWU9e2xhYmVsfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBIZWxwKHByb3BzKSB7XHJcbiAgY29uc3QgeyBpZCwgaGVscCB9ID0gcHJvcHM7XHJcbiAgaWYgKCFoZWxwKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBoZWxwID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8cCBpZD17aWR9IGNsYXNzTmFtZT1cImhlbHAtYmxvY2tcIj5cclxuICAgICAgICB7aGVscH1cclxuICAgICAgPC9wPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9XCJoZWxwLWJsb2NrXCI+XHJcbiAgICAgIHtoZWxwfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRXJyb3JMaXN0KHByb3BzKSB7XHJcbiAgY29uc3QgeyBlcnJvcnMgPSBbXSB9ID0gcHJvcHM7XHJcbiAgaWYgKGVycm9ycy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJlcnJvci1kZXRhaWwgYnMtY2FsbG91dCBicy1jYWxsb3V0LWluZm9cIj5cclxuICAgICAgICB7ZXJyb3JzXHJcbiAgICAgICAgICAuZmlsdGVyKGVsZW0gPT4gISFlbGVtKVxyXG4gICAgICAgICAgLm1hcCgoZXJyb3IsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3J9XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5mdW5jdGlvbiBEZWZhdWx0VGVtcGxhdGUocHJvcHMpIHtcclxuICBjb25zdCB7XHJcbiAgICBpZCxcclxuICAgIGxhYmVsLFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBlcnJvcnMsXHJcbiAgICBoZWxwLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBoaWRkZW4sXHJcbiAgICByZXF1aXJlZCxcclxuICAgIGRpc3BsYXlMYWJlbCxcclxuICB9ID0gcHJvcHM7XHJcbiAgaWYgKGhpZGRlbikge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuXCI+e2NoaWxkcmVufTwvZGl2PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcElmQWRkaXRpb25hbCB7Li4ucHJvcHN9PlxyXG4gICAgICB7ZGlzcGxheUxhYmVsICYmIDxMYWJlbCBsYWJlbD17bGFiZWx9IHJlcXVpcmVkPXtyZXF1aXJlZH0gaWQ9e2lkfSAvPn1cclxuICAgICAge2Rpc3BsYXlMYWJlbCAmJiBkZXNjcmlwdGlvbiA/IGRlc2NyaXB0aW9uIDogbnVsbH1cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICB7ZXJyb3JzfVxyXG4gICAgICB7aGVscH1cclxuICAgIDwvV3JhcElmQWRkaXRpb25hbD5cclxuICApO1xyXG59XHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICBEZWZhdWx0VGVtcGxhdGUucHJvcFR5cGVzID0ge1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjbGFzc05hbWVzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICAgIGVycm9yczogUHJvcFR5cGVzLmVsZW1lbnQsXHJcbiAgICByYXdFcnJvcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxyXG4gICAgaGVscDogUHJvcFR5cGVzLmVsZW1lbnQsXHJcbiAgICByYXdIZWxwOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxyXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5lbGVtZW50LFxyXG4gICAgcmF3RGVzY3JpcHRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXHJcbiAgICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxyXG4gICAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgcmVhZG9ubHk6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgZGlzcGxheUxhYmVsOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGZpZWxkczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGZvcm1Db250ZXh0OiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIH07XHJcbn1cclxuXHJcbkRlZmF1bHRUZW1wbGF0ZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaGlkZGVuOiBmYWxzZSxcclxuICByZWFkb25seTogZmFsc2UsXHJcbiAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gIGRpc3BsYXlMYWJlbDogdHJ1ZSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIFdyYXBJZkFkZGl0aW9uYWwocHJvcHMpIHtcclxuICBjb25zdCB7XHJcbiAgICBpZCxcclxuICAgIGNsYXNzTmFtZXMsXHJcbiAgICBkaXNhYmxlZCxcclxuICAgIGxhYmVsLFxyXG4gICAgb25LZXlDaGFuZ2UsXHJcbiAgICBvbkRyb3BQcm9wZXJ0eUNsaWNrLFxyXG4gICAgcmVhZG9ubHksXHJcbiAgICByZXF1aXJlZCxcclxuICAgIHNjaGVtYSxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3Qga2V5TGFiZWwgPSBgJHtsYWJlbH0gS2V5YDsgLy8gaTE4biA/XHJcbiAgY29uc3QgYWRkaXRpb25hbCA9IHNjaGVtYS5oYXNPd25Qcm9wZXJ0eShBRERJVElPTkFMX1BST1BFUlRZX0ZMQUcpO1xyXG5cclxuICBpZiAoIWFkZGl0aW9uYWwpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e3Byb3BzLmNoaWxkcmVufTwvZGl2PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNSBmb3JtLWFkZGl0aW9uYWxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8TGFiZWwgbGFiZWw9e2tleUxhYmVsfSByZXF1aXJlZD17cmVxdWlyZWR9IGlkPXtgJHtpZH0ta2V5YH0gLz5cclxuICAgICAgICAgICAgPExhYmVsSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgIGlkPXtgJHtpZH0ta2V5YH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25LZXlDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tYWRkaXRpb25hbCBmb3JtLWdyb3VwIGNvbC14cy01XCI+XHJcbiAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMlwiPlxyXG4gICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImRhbmdlclwiXHJcbiAgICAgICAgICAgIGljb249XCJyZW1vdmVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhcnJheS1pdGVtLXJlbW92ZSBidG4tYmxvY2tcIlxyXG4gICAgICAgICAgICB0YWJJbmRleD1cIi0xXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjBcIiB9fVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgcmVhZG9ubHl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uRHJvcFByb3BlcnR5Q2xpY2sobGFiZWwpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTY2hlbWFGaWVsZFJlbmRlcihwcm9wcykge1xyXG4gIGNvbnN0IHtcclxuICAgIHVpU2NoZW1hLFxyXG4gICAgZm9ybURhdGEsXHJcbiAgICBlcnJvclNjaGVtYSxcclxuICAgIGlkUHJlZml4LFxyXG4gICAgaWRTZXBhcmF0b3IsXHJcbiAgICBuYW1lLFxyXG4gICAgb25DaGFuZ2UsXHJcbiAgICBvbktleUNoYW5nZSxcclxuICAgIG9uRHJvcFByb3BlcnR5Q2xpY2ssXHJcbiAgICByZXF1aXJlZCxcclxuICAgIHJlZ2lzdHJ5ID0gZ2V0RGVmYXVsdFJlZ2lzdHJ5KCksXHJcbiAgICB3YXNQcm9wZXJ0eUtleU1vZGlmaWVkID0gZmFsc2UsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHsgcm9vdFNjaGVtYSwgZmllbGRzLCBmb3JtQ29udGV4dCB9ID0gcmVnaXN0cnk7XHJcbiAgY29uc3QgRmllbGRUZW1wbGF0ZSA9XHJcbiAgICB1aVNjaGVtYVtcInVpOkZpZWxkVGVtcGxhdGVcIl0gfHwgcmVnaXN0cnkuRmllbGRUZW1wbGF0ZSB8fCBEZWZhdWx0VGVtcGxhdGU7XHJcbiAgbGV0IGlkU2NoZW1hID0gcHJvcHMuaWRTY2hlbWE7XHJcbiAgY29uc3Qgc2NoZW1hID0gcmV0cmlldmVTY2hlbWEocHJvcHMuc2NoZW1hLCByb290U2NoZW1hLCBmb3JtRGF0YSk7XHJcbiAgaWRTY2hlbWEgPSBtZXJnZU9iamVjdHMoXHJcbiAgICB0b0lkU2NoZW1hKHNjaGVtYSwgbnVsbCwgcm9vdFNjaGVtYSwgZm9ybURhdGEsIGlkUHJlZml4LCBpZFNlcGFyYXRvciksXHJcbiAgICBpZFNjaGVtYVxyXG4gICk7XHJcbiAgY29uc3QgRmllbGRDb21wb25lbnQgPSBnZXRGaWVsZENvbXBvbmVudChzY2hlbWEsIHVpU2NoZW1hLCBpZFNjaGVtYSwgZmllbGRzKTtcclxuICBjb25zdCB7IERlc2NyaXB0aW9uRmllbGQgfSA9IGZpZWxkcztcclxuICBjb25zdCBkaXNhYmxlZCA9IEJvb2xlYW4ocHJvcHMuZGlzYWJsZWQgfHwgdWlTY2hlbWFbXCJ1aTpkaXNhYmxlZFwiXSk7XHJcbiAgY29uc3QgcmVhZG9ubHkgPSBCb29sZWFuKFxyXG4gICAgcHJvcHMucmVhZG9ubHkgfHxcclxuICAgICAgdWlTY2hlbWFbXCJ1aTpyZWFkb25seVwiXSB8fFxyXG4gICAgICBwcm9wcy5zY2hlbWEucmVhZE9ubHkgfHxcclxuICAgICAgc2NoZW1hLnJlYWRPbmx5XHJcbiAgKTtcclxuICBjb25zdCB1aVNjaGVtYUhpZGVFcnJvciA9IHVpU2NoZW1hW1widWk6aGlkZUVycm9yXCJdO1xyXG4gIC8vIFNldCBoaWRlRXJyb3IgdG8gdGhlIHZhbHVlIHByb3ZpZGVkIGluIHRoZSB1aVNjaGVtYSwgb3RoZXJ3aXNlIHN0aWNrIHdpdGggdGhlIHByb3AgdG8gcHJvcGFnYXRlIHRvIGNoaWxkcmVuXHJcbiAgY29uc3QgaGlkZUVycm9yID1cclxuICAgIHVpU2NoZW1hSGlkZUVycm9yID09PSB1bmRlZmluZWRcclxuICAgICAgPyBwcm9wcy5oaWRlRXJyb3JcclxuICAgICAgOiBCb29sZWFuKHVpU2NoZW1hSGlkZUVycm9yKTtcclxuICBjb25zdCBhdXRvZm9jdXMgPSBCb29sZWFuKHByb3BzLmF1dG9mb2N1cyB8fCB1aVNjaGVtYVtcInVpOmF1dG9mb2N1c1wiXSk7XHJcbiAgaWYgKE9iamVjdC5rZXlzKHNjaGVtYSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlMYWJlbCA9IGdldERpc3BsYXlMYWJlbChzY2hlbWEsIHVpU2NoZW1hLCByb290U2NoZW1hKTtcclxuXHJcbiAgY29uc3QgeyBfX2Vycm9ycywgLi4uZmllbGRFcnJvclNjaGVtYSB9ID0gZXJyb3JTY2hlbWE7XHJcblxyXG4gIC8vIFNlZSAjNDM5OiB1aVNjaGVtYTogRG9uJ3QgcGFzcyBjb25zdW1lZCBjbGFzcyBuYW1lcyB0byBjaGlsZCBjb21wb25lbnRzXHJcbiAgY29uc3QgZmllbGQgPSAoXHJcbiAgICA8RmllbGRDb21wb25lbnRcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICBpZFNjaGVtYT17aWRTY2hlbWF9XHJcbiAgICAgIHNjaGVtYT17c2NoZW1hfVxyXG4gICAgICB1aVNjaGVtYT17eyAuLi51aVNjaGVtYSwgY2xhc3NOYW1lczogdW5kZWZpbmVkIH19XHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgcmVhZG9ubHk9e3JlYWRvbmx5fVxyXG4gICAgICBoaWRlRXJyb3I9e2hpZGVFcnJvcn1cclxuICAgICAgYXV0b2ZvY3VzPXthdXRvZm9jdXN9XHJcbiAgICAgIGVycm9yU2NoZW1hPXtmaWVsZEVycm9yU2NoZW1hfVxyXG4gICAgICBmb3JtQ29udGV4dD17Zm9ybUNvbnRleHR9XHJcbiAgICAgIHJhd0Vycm9ycz17X19lcnJvcnN9XHJcbiAgICAvPlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGlkID0gaWRTY2hlbWEuJGlkO1xyXG5cclxuICAvLyBJZiB0aGlzIHNjaGVtYSBoYXMgYSB0aXRsZSBkZWZpbmVkLCBidXQgdGhlIHVzZXIgaGFzIHNldCBhIG5ldyBrZXkvbGFiZWwsIHJldGFpbiB0aGVpciBpbnB1dC5cclxuICBsZXQgbGFiZWw7XHJcbiAgaWYgKHdhc1Byb3BlcnR5S2V5TW9kaWZpZWQpIHtcclxuICAgIGxhYmVsID0gbmFtZTtcclxuICB9IGVsc2Uge1xyXG4gICAgbGFiZWwgPSB1aVNjaGVtYVtcInVpOnRpdGxlXCJdIHx8IHByb3BzLnNjaGVtYS50aXRsZSB8fCBzY2hlbWEudGl0bGUgfHwgbmFtZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID1cclxuICAgIHVpU2NoZW1hW1widWk6ZGVzY3JpcHRpb25cIl0gfHxcclxuICAgIHByb3BzLnNjaGVtYS5kZXNjcmlwdGlvbiB8fFxyXG4gICAgc2NoZW1hLmRlc2NyaXB0aW9uO1xyXG4gIGNvbnN0IGVycm9ycyA9IF9fZXJyb3JzO1xyXG4gIGNvbnN0IGhlbHAgPSB1aVNjaGVtYVtcInVpOmhlbHBcIl07XHJcbiAgY29uc3QgaGlkZGVuID0gdWlTY2hlbWFbXCJ1aTp3aWRnZXRcIl0gPT09IFwiaGlkZGVuXCI7XHJcblxyXG4gIGxldCBjbGFzc05hbWVzID0gW1wiZm9ybS1ncm91cFwiLCBcImZpZWxkXCIsIGBmaWVsZC0ke3NjaGVtYS50eXBlfWBdO1xyXG4gIGlmICghaGlkZUVycm9yICYmIGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgY2xhc3NOYW1lcy5wdXNoKFwiZmllbGQtZXJyb3IgaGFzLWVycm9yIGhhcy1kYW5nZXJcIik7XHJcbiAgfVxyXG4gIGNsYXNzTmFtZXMucHVzaCh1aVNjaGVtYS5jbGFzc05hbWVzKTtcclxuICBjbGFzc05hbWVzID0gY2xhc3NOYW1lcy5qb2luKFwiIFwiKS50cmltKCk7XHJcblxyXG4gIGNvbnN0IGZpZWxkUHJvcHMgPSB7XHJcbiAgICBkZXNjcmlwdGlvbjogKFxyXG4gICAgICA8RGVzY3JpcHRpb25GaWVsZFxyXG4gICAgICAgIGlkPXtpZCArIFwiX19kZXNjcmlwdGlvblwifVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICBmb3JtQ29udGV4dD17Zm9ybUNvbnRleHR9XHJcbiAgICAgIC8+XHJcbiAgICApLFxyXG4gICAgcmF3RGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgaGVscDogPEhlbHAgaWQ9e2lkICsgXCJfX2hlbHBcIn0gaGVscD17aGVscH0gLz4sXHJcbiAgICByYXdIZWxwOiB0eXBlb2YgaGVscCA9PT0gXCJzdHJpbmdcIiA/IGhlbHAgOiB1bmRlZmluZWQsXHJcbiAgICBlcnJvcnM6IGhpZGVFcnJvciA/IHVuZGVmaW5lZCA6IDxFcnJvckxpc3QgZXJyb3JzPXtlcnJvcnN9IC8+LFxyXG4gICAgcmF3RXJyb3JzOiBoaWRlRXJyb3IgPyB1bmRlZmluZWQgOiBlcnJvcnMsXHJcbiAgICBpZCxcclxuICAgIGxhYmVsLFxyXG4gICAgaGlkZGVuLFxyXG4gICAgb25DaGFuZ2UsXHJcbiAgICBvbktleUNoYW5nZSxcclxuICAgIG9uRHJvcFByb3BlcnR5Q2xpY2ssXHJcbiAgICByZXF1aXJlZCxcclxuICAgIGRpc2FibGVkLFxyXG4gICAgcmVhZG9ubHksXHJcbiAgICBoaWRlRXJyb3IsXHJcbiAgICBkaXNwbGF5TGFiZWwsXHJcbiAgICBjbGFzc05hbWVzLFxyXG4gICAgZm9ybUNvbnRleHQsXHJcbiAgICBmb3JtRGF0YSxcclxuICAgIGZpZWxkcyxcclxuICAgIHNjaGVtYSxcclxuICAgIHVpU2NoZW1hLFxyXG4gICAgcmVnaXN0cnksXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgX0FueU9mRmllbGQgPSByZWdpc3RyeS5maWVsZHMuQW55T2ZGaWVsZDtcclxuICBjb25zdCBfT25lT2ZGaWVsZCA9IHJlZ2lzdHJ5LmZpZWxkcy5PbmVPZkZpZWxkO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZpZWxkVGVtcGxhdGUgey4uLmZpZWxkUHJvcHN9PlxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAge2ZpZWxkfVxyXG5cclxuICAgICAgICB7LypcclxuICAgICAgICBJZiB0aGUgc2NoZW1hIGBhbnlPZmAgb3IgJ29uZU9mJyBjYW4gYmUgcmVuZGVyZWQgYXMgYSBzZWxlY3QgY29udHJvbCwgZG9uJ3RcclxuICAgICAgICByZW5kZXIgdGhlIHNlbGVjdGlvbiBhbmQgbGV0IGBTdHJpbmdGaWVsZGAgY29tcG9uZW50IGhhbmRsZVxyXG4gICAgICAgIHJlbmRlcmluZ1xyXG4gICAgICAqL31cclxuICAgICAgICB7c2NoZW1hLmFueU9mICYmICFpc1NlbGVjdChzY2hlbWEpICYmIChcclxuICAgICAgICAgIDxfQW55T2ZGaWVsZFxyXG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgIHJlYWRvbmx5PXtyZWFkb25seX1cclxuICAgICAgICAgICAgaGlkZUVycm9yPXtoaWRlRXJyb3J9XHJcbiAgICAgICAgICAgIGVycm9yU2NoZW1hPXtlcnJvclNjaGVtYX1cclxuICAgICAgICAgICAgZm9ybURhdGE9e2Zvcm1EYXRhfVxyXG4gICAgICAgICAgICBpZFByZWZpeD17aWRQcmVmaXh9XHJcbiAgICAgICAgICAgIGlkU2NoZW1hPXtpZFNjaGVtYX1cclxuICAgICAgICAgICAgaWRTZXBhcmF0b3I9e2lkU2VwYXJhdG9yfVxyXG4gICAgICAgICAgICBvbkJsdXI9e3Byb3BzLm9uQmx1cn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICBvbkZvY3VzPXtwcm9wcy5vbkZvY3VzfVxyXG4gICAgICAgICAgICBvcHRpb25zPXtzY2hlbWEuYW55T2YubWFwKF9zY2hlbWEgPT5cclxuICAgICAgICAgICAgICByZXRyaWV2ZVNjaGVtYShfc2NoZW1hLCByb290U2NoZW1hLCBmb3JtRGF0YSlcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgYmFzZVR5cGU9e3NjaGVtYS50eXBlfVxyXG4gICAgICAgICAgICByZWdpc3RyeT17cmVnaXN0cnl9XHJcbiAgICAgICAgICAgIHNjaGVtYT17c2NoZW1hfVxyXG4gICAgICAgICAgICB1aVNjaGVtYT17dWlTY2hlbWF9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtzY2hlbWEub25lT2YgJiYgIWlzU2VsZWN0KHNjaGVtYSkgJiYgKFxyXG4gICAgICAgICAgPF9PbmVPZkZpZWxkXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgcmVhZG9ubHk9e3JlYWRvbmx5fVxyXG4gICAgICAgICAgICBoaWRlRXJyb3I9e2hpZGVFcnJvcn1cclxuICAgICAgICAgICAgZXJyb3JTY2hlbWE9e2Vycm9yU2NoZW1hfVxyXG4gICAgICAgICAgICBmb3JtRGF0YT17Zm9ybURhdGF9XHJcbiAgICAgICAgICAgIGlkUHJlZml4PXtpZFByZWZpeH1cclxuICAgICAgICAgICAgaWRTY2hlbWE9e2lkU2NoZW1hfVxyXG4gICAgICAgICAgICBpZFNlcGFyYXRvcj17aWRTZXBhcmF0b3J9XHJcbiAgICAgICAgICAgIG9uQmx1cj17cHJvcHMub25CbHVyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uRm9jdXM9e3Byb3BzLm9uRm9jdXN9XHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3NjaGVtYS5vbmVPZi5tYXAoX3NjaGVtYSA9PlxyXG4gICAgICAgICAgICAgIHJldHJpZXZlU2NoZW1hKF9zY2hlbWEsIHJvb3RTY2hlbWEsIGZvcm1EYXRhKVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICBiYXNlVHlwZT17c2NoZW1hLnR5cGV9XHJcbiAgICAgICAgICAgIHJlZ2lzdHJ5PXtyZWdpc3RyeX1cclxuICAgICAgICAgICAgc2NoZW1hPXtzY2hlbWF9XHJcbiAgICAgICAgICAgIHVpU2NoZW1hPXt1aVNjaGVtYX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIDwvRmllbGRUZW1wbGF0ZT5cclxuICApO1xyXG59XHJcblxyXG5jbGFzcyBTY2hlbWFGaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XHJcbiAgICByZXR1cm4gIWRlZXBFcXVhbHModGhpcy5wcm9wcywgbmV4dFByb3BzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBTY2hlbWFGaWVsZFJlbmRlcih0aGlzLnByb3BzKTtcclxuICB9XHJcbn1cclxuXHJcblNjaGVtYUZpZWxkLmRlZmF1bHRQcm9wcyA9IHtcclxuICB1aVNjaGVtYToge30sXHJcbiAgZXJyb3JTY2hlbWE6IHt9LFxyXG4gIGlkU2NoZW1hOiB7fSxcclxuICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgcmVhZG9ubHk6IGZhbHNlLFxyXG4gIGF1dG9mb2N1czogZmFsc2UsXHJcbiAgaGlkZUVycm9yOiBmYWxzZSxcclxufTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICBTY2hlbWFGaWVsZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBzY2hlbWE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgIHVpU2NoZW1hOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaWRTY2hlbWE6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBmb3JtRGF0YTogUHJvcFR5cGVzLmFueSxcclxuICAgIGVycm9yU2NoZW1hOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgcmVnaXN0cnk6IHR5cGVzLnJlZ2lzdHJ5LmlzUmVxdWlyZWQsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2NoZW1hRmllbGQ7XHJcbiJdfQ==