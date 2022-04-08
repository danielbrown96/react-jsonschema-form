"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _IconButton = _interopRequireDefault(require("../IconButton"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var types = _interopRequireWildcard(require("../../types"));

var _utils = require("../../utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

  var componentName = COMPONENT_TYPES[(0, _utils.getSchemaType)(schema)]; // If the type is not defined and the schema uses 'anyOf' or 'oneOf', don't
  // render a field and let the MultiSchemaField component handle the form display

  if (!componentName && (schema.anyOf || schema.oneOf)) {
    return function () {
      return null;
    };
  }

  return componentName in fields ? fields[componentName] : function () {
    var UnsupportedField = fields.UnsupportedField;
    return _react["default"].createElement(UnsupportedField, {
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

  return _react["default"].createElement("label", {
    className: "control-label",
    htmlFor: id
  }, label, required && _react["default"].createElement("span", {
    className: "required"
  }, REQUIRED_FIELD_SYMBOL));
}

function LabelInput(props) {
  var id = props.id,
      label = props.label,
      onChange = props.onChange;
  return _react["default"].createElement("input", {
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
    return _react["default"].createElement("p", {
      id: id,
      className: "help-block"
    }, help);
  }

  return _react["default"].createElement("div", {
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

  return _react["default"].createElement("div", null, _react["default"].createElement("ul", {
    className: "error-detail bs-callout bs-callout-info"
  }, errors.filter(function (elem) {
    return !!elem;
  }).map(function (error, index) {
    return _react["default"].createElement("li", {
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
    return _react["default"].createElement("div", {
      className: "hidden"
    }, children);
  }

  return _react["default"].createElement(WrapIfAdditional, props, displayLabel && _react["default"].createElement(Label, {
    label: label,
    required: required,
    id: id
  }), displayLabel && description ? description : null, children, errors, help);
}

if (process.env.NODE_ENV !== "production") {
  DefaultTemplate.propTypes = {
    id: _propTypes["default"].string,
    classNames: _propTypes["default"].string,
    label: _propTypes["default"].string,
    children: _propTypes["default"].node.isRequired,
    errors: _propTypes["default"].element,
    rawErrors: _propTypes["default"].arrayOf(_propTypes["default"].string),
    help: _propTypes["default"].element,
    rawHelp: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
    description: _propTypes["default"].element,
    rawDescription: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
    hidden: _propTypes["default"].bool,
    required: _propTypes["default"].bool,
    readonly: _propTypes["default"].bool,
    displayLabel: _propTypes["default"].bool,
    fields: _propTypes["default"].object,
    formContext: _propTypes["default"].object
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

  var additional = schema.hasOwnProperty(_utils.ADDITIONAL_PROPERTY_FLAG);

  if (!additional) {
    return _react["default"].createElement("div", {
      className: classNames
    }, props.children);
  }

  return _react["default"].createElement("div", {
    className: classNames
  }, _react["default"].createElement("div", {
    className: "row"
  }, _react["default"].createElement("div", {
    className: "col-xs-5 form-additional"
  }, _react["default"].createElement("div", {
    className: "form-group"
  }, _react["default"].createElement(Label, {
    label: keyLabel,
    required: required,
    id: "".concat(id, "-key")
  }), _react["default"].createElement(LabelInput, {
    label: label,
    required: required,
    id: "".concat(id, "-key"),
    onChange: onKeyChange
  }))), _react["default"].createElement("div", {
    className: "form-additional form-group col-xs-5"
  }, props.children), _react["default"].createElement("div", {
    className: "col-xs-2"
  }, _react["default"].createElement(_IconButton["default"], {
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
      registry = _props$registry === void 0 ? (0, _utils.getDefaultRegistry)() : _props$registry,
      _props$wasPropertyKey = props.wasPropertyKeyModified,
      wasPropertyKeyModified = _props$wasPropertyKey === void 0 ? false : _props$wasPropertyKey;
  var rootSchema = registry.rootSchema,
      fields = registry.fields,
      formContext = registry.formContext;
  var FieldTemplate = uiSchema["ui:FieldTemplate"] || registry.FieldTemplate || DefaultTemplate;
  var idSchema = props.idSchema;
  var schema = (0, _utils.retrieveSchema)(props.schema, rootSchema, formData);
  idSchema = (0, _utils.mergeObjects)((0, _utils.toIdSchema)(schema, null, rootSchema, formData, idPrefix, idSeparator), idSchema);
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

  var displayLabel = (0, _utils.getDisplayLabel)(schema, uiSchema, rootSchema);

  var __errors = errorSchema.__errors,
      fieldErrorSchema = _objectWithoutProperties(errorSchema, ["__errors"]); // See #439: uiSchema: Don't pass consumed class names to child components


  var field = _react["default"].createElement(FieldComponent, _extends({}, props, {
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
    description: _react["default"].createElement(DescriptionField, {
      id: id + "__description",
      description: description,
      formContext: formContext
    }),
    rawDescription: description,
    help: _react["default"].createElement(Help, {
      id: id + "__help",
      help: help
    }),
    rawHelp: typeof help === "string" ? help : undefined,
    errors: hideError ? undefined : _react["default"].createElement(ErrorList, {
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
  return _react["default"].createElement(FieldTemplate, fieldProps, _react["default"].createElement(_react["default"].Fragment, null, field, schema.anyOf && !(0, _utils.isSelect)(schema) && _react["default"].createElement(_AnyOfField, {
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
      return (0, _utils.retrieveSchema)(_schema, rootSchema, formData);
    }),
    baseType: schema.type,
    registry: registry,
    schema: schema,
    uiSchema: uiSchema
  }), schema.oneOf && !(0, _utils.isSelect)(schema) && _react["default"].createElement(_OneOfField, {
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
      return (0, _utils.retrieveSchema)(_schema, rootSchema, formData);
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
      return !(0, _utils.deepEquals)(this.props, nextProps);
    }
  }, {
    key: "render",
    value: function render() {
      return SchemaFieldRender(this.props);
    }
  }]);

  return SchemaField;
}(_react["default"].Component);

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
    schema: _propTypes["default"].object.isRequired,
    uiSchema: _propTypes["default"].object,
    idSchema: _propTypes["default"].object,
    formData: _propTypes["default"].any,
    errorSchema: _propTypes["default"].object,
    registry: types.registry.isRequired
  };
}

var _default = SchemaField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpZWxkcy9TY2hlbWFGaWVsZC5qcyJdLCJuYW1lcyI6WyJSRVFVSVJFRF9GSUVMRF9TWU1CT0wiLCJDT01QT05FTlRfVFlQRVMiLCJhcnJheSIsImludGVnZXIiLCJudW1iZXIiLCJvYmplY3QiLCJzdHJpbmciLCJnZXRGaWVsZENvbXBvbmVudCIsInNjaGVtYSIsInVpU2NoZW1hIiwiaWRTY2hlbWEiLCJmaWVsZHMiLCJmaWVsZCIsImNvbXBvbmVudE5hbWUiLCJhbnlPZiIsIm9uZU9mIiwiVW5zdXBwb3J0ZWRGaWVsZCIsInR5cGUiLCJMYWJlbCIsInByb3BzIiwibGFiZWwiLCJyZXF1aXJlZCIsImlkIiwiTGFiZWxJbnB1dCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkhlbHAiLCJoZWxwIiwiRXJyb3JMaXN0IiwiZXJyb3JzIiwibGVuZ3RoIiwiZmlsdGVyIiwiZWxlbSIsIm1hcCIsImVycm9yIiwiaW5kZXgiLCJEZWZhdWx0VGVtcGxhdGUiLCJjaGlsZHJlbiIsImRlc2NyaXB0aW9uIiwiaGlkZGVuIiwiZGlzcGxheUxhYmVsIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwiZWxlbWVudCIsInJhd0Vycm9ycyIsImFycmF5T2YiLCJyYXdIZWxwIiwib25lT2ZUeXBlIiwicmF3RGVzY3JpcHRpb24iLCJib29sIiwicmVhZG9ubHkiLCJmb3JtQ29udGV4dCIsImRlZmF1bHRQcm9wcyIsIldyYXBJZkFkZGl0aW9uYWwiLCJkaXNhYmxlZCIsIm9uS2V5Q2hhbmdlIiwib25Ecm9wUHJvcGVydHlDbGljayIsImtleUxhYmVsIiwiYWRkaXRpb25hbCIsImhhc093blByb3BlcnR5IiwiQURESVRJT05BTF9QUk9QRVJUWV9GTEFHIiwiYm9yZGVyIiwiU2NoZW1hRmllbGRSZW5kZXIiLCJmb3JtRGF0YSIsImVycm9yU2NoZW1hIiwiaWRQcmVmaXgiLCJpZFNlcGFyYXRvciIsIm5hbWUiLCJyZWdpc3RyeSIsIndhc1Byb3BlcnR5S2V5TW9kaWZpZWQiLCJyb290U2NoZW1hIiwiRmllbGRUZW1wbGF0ZSIsIkZpZWxkQ29tcG9uZW50IiwiRGVzY3JpcHRpb25GaWVsZCIsIkJvb2xlYW4iLCJyZWFkT25seSIsInVpU2NoZW1hSGlkZUVycm9yIiwiaGlkZUVycm9yIiwidW5kZWZpbmVkIiwiYXV0b2ZvY3VzIiwiT2JqZWN0Iiwia2V5cyIsIl9fZXJyb3JzIiwiZmllbGRFcnJvclNjaGVtYSIsIiRpZCIsInRpdGxlIiwicHVzaCIsImpvaW4iLCJ0cmltIiwiZmllbGRQcm9wcyIsIl9BbnlPZkZpZWxkIiwiQW55T2ZGaWVsZCIsIl9PbmVPZkZpZWxkIiwiT25lT2ZGaWVsZCIsIm9uQmx1ciIsIm9uRm9jdXMiLCJfc2NoZW1hIiwiU2NoZW1hRmllbGQiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImFueSIsInR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQSxJQUFNQSxxQkFBcUIsR0FBRyxHQUE5QjtBQUNBLElBQU1DLGVBQWUsR0FBRztBQUN0QkMsRUFBQUEsS0FBSyxFQUFFLFlBRGU7QUFFdEIsYUFBUyxjQUZhO0FBR3RCQyxFQUFBQSxPQUFPLEVBQUUsYUFIYTtBQUl0QkMsRUFBQUEsTUFBTSxFQUFFLGFBSmM7QUFLdEJDLEVBQUFBLE1BQU0sRUFBRSxhQUxjO0FBTXRCQyxFQUFBQSxNQUFNLEVBQUUsYUFOYztBQU90QixVQUFNO0FBUGdCLENBQXhCOztBQVVBLFNBQVNDLGlCQUFULENBQTJCQyxNQUEzQixFQUFtQ0MsUUFBbkMsRUFBNkNDLFFBQTdDLEVBQXVEQyxNQUF2RCxFQUErRDtBQUM3RCxNQUFNQyxLQUFLLEdBQUdILFFBQVEs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QVUxQyxNQUZFO0FBR3RCSyxJQUFBQSxRQUFRLEVBQUVxQyxzQkFBVTFDLE1BSEU7QUFJdEJrRSxJQUFBQSxRQUFRLEVBQUV4QixzQkFBVStELEdBSkU7QUFLdEJ0QyxJQUFBQSxXQUFXLEVBQUV6QixzQkFBVTFDLE1BTEQ7QUFNdEJ1RSxJQUFBQSxRQUFRLEVBQUVtQyxLQUFLLENBQUNuQyxRQUFOLENBQWUxQjtBQU5ILEdBQXhCO0FBUUQ7O2VBRWN1RCxXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIi4uL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBBRERJVElPTkFMX1BST1BFUlRZX0ZMQUcsXHJcbiAgaXNTZWxlY3QsXHJcbiAgcmV0cmlldmVTY2hlbWEsXHJcbiAgdG9JZFNjaGVtYSxcclxuICBnZXREZWZhdWx0UmVnaXN0cnksXHJcbiAgbWVyZ2VPYmplY3RzLFxyXG4gIGRlZXBFcXVhbHMsXHJcbiAgZ2V0U2NoZW1hVHlwZSxcclxuICBnZXREaXNwbGF5TGFiZWwsXHJcbn0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XHJcblxyXG5jb25zdCBSRVFVSVJFRF9GSUVMRF9TWU1CT0wgPSBcIipcIjtcclxuY29uc3QgQ09NUE9ORU5UX1RZUEVTID0ge1xyXG4gIGFycmF5OiBcIkFycmF5RmllbGRcIixcclxuICBib29sZWFuOiBcIkJvb2xlYW5GaWVsZFwiLFxyXG4gIGludGVnZXI6IFwiTnVtYmVyRmllbGRcIixcclxuICBudW1iZXI6IFwiTnVtYmVyRmllbGRcIixcclxuICBvYmplY3Q6IFwiT2JqZWN0RmllbGRcIixcclxuICBzdHJpbmc6IFwiU3RyaW5nRmllbGRcIixcclxuICBudWxsOiBcIk51bGxGaWVsZFwiLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0RmllbGRDb21wb25lbnQoc2NoZW1hLCB1aVNjaGVtYSwgaWRTY2hlbWEsIGZpZWxkcykge1xyXG4gIGNvbnN0IGZpZWxkID0gdWlTY2hlbWFbXCJ1aTpmaWVsZFwiXTtcclxuICBpZiAodHlwZW9mIGZpZWxkID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHJldHVybiBmaWVsZDtcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBmaWVsZCA9PT0gXCJzdHJpbmdcIiAmJiBmaWVsZCBpbiBmaWVsZHMpIHtcclxuICAgIHJldHVybiBmaWVsZHNbZmllbGRdO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tcG9uZW50TmFtZSA9IENPTVBPTkVOVF9UWVBFU1tnZXRTY2hlbWFUeXBlKHNjaGVtYSldO1xyXG5cclxuICAvLyBJZiB0aGUgdHlwZSBpcyBub3QgZGVmaW5lZCBhbmQgdGhlIHNjaGVtYSB1c2VzICdhbnlPZicgb3IgJ29uZU9mJywgZG9uJ3RcclxuICAvLyByZW5kZXIgYSBmaWVsZCBhbmQgbGV0IHRoZSBNdWx0aVNjaGVtYUZpZWxkIGNvbXBvbmVudCBoYW5kbGUgdGhlIGZvcm0gZGlzcGxheVxyXG4gIGlmICghY29tcG9uZW50TmFtZSAmJiAoc2NoZW1hLmFueU9mIHx8IHNjaGVtYS5vbmVPZikpIHtcclxuICAgIHJldHVybiAoKSA9PiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudE5hbWUgaW4gZmllbGRzXHJcbiAgICA/IGZpZWxkc1tjb21wb25lbnROYW1lXVxyXG4gICAgOiAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBVbnN1cHBvcnRlZEZpZWxkIH0gPSBmaWVsZHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8VW5zdXBwb3J0ZWRGaWVsZFxyXG4gICAgICAgICAgICBzY2hlbWE9e3NjaGVtYX1cclxuICAgICAgICAgICAgaWRTY2hlbWE9e2lkU2NoZW1hfVxyXG4gICAgICAgICAgICByZWFzb249e2BVbmtub3duIGZpZWxkIHR5cGUgJHtzY2hlbWEudHlwZX1gfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBMYWJlbChwcm9wcykge1xyXG4gIGNvbnN0IHsgbGFiZWwsIHJlcXVpcmVkLCBpZCB9ID0gcHJvcHM7XHJcbiAgaWYgKCFsYWJlbCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9e2lkfT5cclxuICAgICAge2xhYmVsfVxyXG4gICAgICB7cmVxdWlyZWQgJiYgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj57UkVRVUlSRURfRklFTERfU1lNQk9MfTwvc3Bhbj59XHJcbiAgICA8L2xhYmVsPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExhYmVsSW5wdXQocHJvcHMpIHtcclxuICBjb25zdCB7IGlkLCBsYWJlbCwgb25DaGFuZ2UgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8aW5wdXRcclxuICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICBpZD17aWR9XHJcbiAgICAgIG9uQmx1cj17ZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgZGVmYXVsdFZhbHVlPXtsYWJlbH1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSGVscChwcm9wcykge1xyXG4gIGNvbnN0IHsgaWQsIGhlbHAgfSA9IHByb3BzO1xyXG4gIGlmICghaGVscCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgaGVscCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHAgaWQ9e2lkfSBjbGFzc05hbWU9XCJoZWxwLWJsb2NrXCI+XHJcbiAgICAgICAge2hlbHB9XHJcbiAgICAgIDwvcD5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPVwiaGVscC1ibG9ja1wiPlxyXG4gICAgICB7aGVscH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEVycm9yTGlzdChwcm9wcykge1xyXG4gIGNvbnN0IHsgZXJyb3JzID0gW10gfSA9IHByb3BzO1xyXG4gIGlmIChlcnJvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZXJyb3ItZGV0YWlsIGJzLWNhbGxvdXQgYnMtY2FsbG91dC1pbmZvXCI+XHJcbiAgICAgICAge2Vycm9yc1xyXG4gICAgICAgICAgLmZpbHRlcihlbGVtID0+ICEhZWxlbSlcclxuICAgICAgICAgIC5tYXAoKGVycm9yLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuZnVuY3Rpb24gRGVmYXVsdFRlbXBsYXRlKHByb3BzKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgaWQsXHJcbiAgICBsYWJlbCxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgZXJyb3JzLFxyXG4gICAgaGVscCxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgaGlkZGVuLFxyXG4gICAgcmVxdWlyZWQsXHJcbiAgICBkaXNwbGF5TGFiZWwsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGlmIChoaWRkZW4pIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlblwiPntjaGlsZHJlbn08L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBJZkFkZGl0aW9uYWwgey4uLnByb3BzfT5cclxuICAgICAge2Rpc3BsYXlMYWJlbCAmJiA8TGFiZWwgbGFiZWw9e2xhYmVsfSByZXF1aXJlZD17cmVxdWlyZWR9IGlkPXtpZH0gLz59XHJcbiAgICAgIHtkaXNwbGF5TGFiZWwgJiYgZGVzY3JpcHRpb24gPyBkZXNjcmlwdGlvbiA6IG51bGx9XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAge2Vycm9yc31cclxuICAgICAge2hlbHB9XHJcbiAgICA8L1dyYXBJZkFkZGl0aW9uYWw+XHJcbiAgKTtcclxufVxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgRGVmYXVsdFRlbXBsYXRlLnByb3BUeXBlcyA9IHtcclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY2xhc3NOYW1lczogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgICBlcnJvcnM6IFByb3BUeXBlcy5lbGVtZW50LFxyXG4gICAgcmF3RXJyb3JzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcclxuICAgIGhlbHA6IFByb3BUeXBlcy5lbGVtZW50LFxyXG4gICAgcmF3SGVscDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcclxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuZWxlbWVudCxcclxuICAgIHJhd0Rlc2NyaXB0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxyXG4gICAgaGlkZGVuOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHJlYWRvbmx5OiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGRpc3BsYXlMYWJlbDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBmaWVsZHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBmb3JtQ29udGV4dDogUHJvcFR5cGVzLm9iamVjdCxcclxuICB9O1xyXG59XHJcblxyXG5EZWZhdWx0VGVtcGxhdGUuZGVmYXVsdFByb3BzID0ge1xyXG4gIGhpZGRlbjogZmFsc2UsXHJcbiAgcmVhZG9ubHk6IGZhbHNlLFxyXG4gIHJlcXVpcmVkOiBmYWxzZSxcclxuICBkaXNwbGF5TGFiZWw6IHRydWUsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBXcmFwSWZBZGRpdGlvbmFsKHByb3BzKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgaWQsXHJcbiAgICBjbGFzc05hbWVzLFxyXG4gICAgZGlzYWJsZWQsXHJcbiAgICBsYWJlbCxcclxuICAgIG9uS2V5Q2hhbmdlLFxyXG4gICAgb25Ecm9wUHJvcGVydHlDbGljayxcclxuICAgIHJlYWRvbmx5LFxyXG4gICAgcmVxdWlyZWQsXHJcbiAgICBzY2hlbWEsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGtleUxhYmVsID0gYCR7bGFiZWx9IEtleWA7IC8vIGkxOG4gP1xyXG4gIGNvbnN0IGFkZGl0aW9uYWwgPSBzY2hlbWEuaGFzT3duUHJvcGVydHkoQURESVRJT05BTF9QUk9QRVJUWV9GTEFHKTtcclxuXHJcbiAgaWYgKCFhZGRpdGlvbmFsKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTUgZm9ybS1hZGRpdGlvbmFsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPExhYmVsIGxhYmVsPXtrZXlMYWJlbH0gcmVxdWlyZWQ9e3JlcXVpcmVkfSBpZD17YCR7aWR9LWtleWB9IC8+XHJcbiAgICAgICAgICAgIDxMYWJlbElucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICBpZD17YCR7aWR9LWtleWB9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uS2V5Q2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWFkZGl0aW9uYWwgZm9ybS1ncm91cCBjb2wteHMtNVwiPlxyXG4gICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTJcIj5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJkYW5nZXJcIlxyXG4gICAgICAgICAgICBpY29uPVwicmVtb3ZlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJyYXktaXRlbS1yZW1vdmUgYnRuLWJsb2NrXCJcclxuICAgICAgICAgICAgdGFiSW5kZXg9XCItMVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIwXCIgfX1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8IHJlYWRvbmx5fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkRyb3BQcm9wZXJ0eUNsaWNrKGxhYmVsKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU2NoZW1hRmllbGRSZW5kZXIocHJvcHMpIHtcclxuICBjb25zdCB7XHJcbiAgICB1aVNjaGVtYSxcclxuICAgIGZvcm1EYXRhLFxyXG4gICAgZXJyb3JTY2hlbWEsXHJcbiAgICBpZFByZWZpeCxcclxuICAgIGlkU2VwYXJhdG9yLFxyXG4gICAgbmFtZSxcclxuICAgIG9uQ2hhbmdlLFxyXG4gICAgb25LZXlDaGFuZ2UsXHJcbiAgICBvbkRyb3BQcm9wZXJ0eUNsaWNrLFxyXG4gICAgcmVxdWlyZWQsXHJcbiAgICByZWdpc3RyeSA9IGdldERlZmF1bHRSZWdpc3RyeSgpLFxyXG4gICAgd2FzUHJvcGVydHlLZXlNb2RpZmllZCA9IGZhbHNlLFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCB7IHJvb3RTY2hlbWEsIGZpZWxkcywgZm9ybUNvbnRleHQgfSA9IHJlZ2lzdHJ5O1xyXG4gIGNvbnN0IEZpZWxkVGVtcGxhdGUgPVxyXG4gICAgdWlTY2hlbWFbXCJ1aTpGaWVsZFRlbXBsYXRlXCJdIHx8IHJlZ2lzdHJ5LkZpZWxkVGVtcGxhdGUgfHwgRGVmYXVsdFRlbXBsYXRlO1xyXG4gIGxldCBpZFNjaGVtYSA9IHByb3BzLmlkU2NoZW1hO1xyXG4gIGNvbnN0IHNjaGVtYSA9IHJldHJpZXZlU2NoZW1hKHByb3BzLnNjaGVtYSwgcm9vdFNjaGVtYSwgZm9ybURhdGEpO1xyXG4gIGlkU2NoZW1hID0gbWVyZ2VPYmplY3RzKFxyXG4gICAgdG9JZFNjaGVtYShzY2hlbWEsIG51bGwsIHJvb3RTY2hlbWEsIGZvcm1EYXRhLCBpZFByZWZpeCwgaWRTZXBhcmF0b3IpLFxyXG4gICAgaWRTY2hlbWFcclxuICApO1xyXG4gIGNvbnN0IEZpZWxkQ29tcG9uZW50ID0gZ2V0RmllbGRDb21wb25lbnQoc2NoZW1hLCB1aVNjaGVtYSwgaWRTY2hlbWEsIGZpZWxkcyk7XHJcbiAgY29uc3QgeyBEZXNjcmlwdGlvbkZpZWxkIH0gPSBmaWVsZHM7XHJcbiAgY29uc3QgZGlzYWJsZWQgPSBCb29sZWFuKHByb3BzLmRpc2FibGVkIHx8IHVpU2NoZW1hW1widWk6ZGlzYWJsZWRcIl0pO1xyXG4gIGNvbnN0IHJlYWRvbmx5ID0gQm9vbGVhbihcclxuICAgIHByb3BzLnJlYWRvbmx5IHx8XHJcbiAgICAgIHVpU2NoZW1hW1widWk6cmVhZG9ubHlcIl0gfHxcclxuICAgICAgcHJvcHMuc2NoZW1hLnJlYWRPbmx5IHx8XHJcbiAgICAgIHNjaGVtYS5yZWFkT25seVxyXG4gICk7XHJcbiAgY29uc3QgdWlTY2hlbWFIaWRlRXJyb3IgPSB1aVNjaGVtYVtcInVpOmhpZGVFcnJvclwiXTtcclxuICAvLyBTZXQgaGlkZUVycm9yIHRvIHRoZSB2YWx1ZSBwcm92aWRlZCBpbiB0aGUgdWlTY2hlbWEsIG90aGVyd2lzZSBzdGljayB3aXRoIHRoZSBwcm9wIHRvIHByb3BhZ2F0ZSB0byBjaGlsZHJlblxyXG4gIGNvbnN0IGhpZGVFcnJvciA9XHJcbiAgICB1aVNjaGVtYUhpZGVFcnJvciA9PT0gdW5kZWZpbmVkXHJcbiAgICAgID8gcHJvcHMuaGlkZUVycm9yXHJcbiAgICAgIDogQm9vbGVhbih1aVNjaGVtYUhpZGVFcnJvcik7XHJcbiAgY29uc3QgYXV0b2ZvY3VzID0gQm9vbGVhbihwcm9wcy5hdXRvZm9jdXMgfHwgdWlTY2hlbWFbXCJ1aTphdXRvZm9jdXNcIl0pO1xyXG4gIGlmIChPYmplY3Qua2V5cyhzY2hlbWEpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkaXNwbGF5TGFiZWwgPSBnZXREaXNwbGF5TGFiZWwoc2NoZW1hLCB1aVNjaGVtYSwgcm9vdFNjaGVtYSk7XHJcblxyXG4gIGNvbnN0IHsgX19lcnJvcnMsIC4uLmZpZWxkRXJyb3JTY2hlbWEgfSA9IGVycm9yU2NoZW1hO1xyXG5cclxuICAvLyBTZWUgIzQzOTogdWlTY2hlbWE6IERvbid0IHBhc3MgY29uc3VtZWQgY2xhc3MgbmFtZXMgdG8gY2hpbGQgY29tcG9uZW50c1xyXG4gIGNvbnN0IGZpZWxkID0gKFxyXG4gICAgPEZpZWxkQ29tcG9uZW50XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgICAgaWRTY2hlbWE9e2lkU2NoZW1hfVxyXG4gICAgICBzY2hlbWE9e3NjaGVtYX1cclxuICAgICAgdWlTY2hlbWE9e3sgLi4udWlTY2hlbWEsIGNsYXNzTmFtZXM6IHVuZGVmaW5lZCB9fVxyXG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgIHJlYWRvbmx5PXtyZWFkb25seX1cclxuICAgICAgaGlkZUVycm9yPXtoaWRlRXJyb3J9XHJcbiAgICAgIGF1dG9mb2N1cz17YXV0b2ZvY3VzfVxyXG4gICAgICBlcnJvclNjaGVtYT17ZmllbGRFcnJvclNjaGVtYX1cclxuICAgICAgZm9ybUNvbnRleHQ9e2Zvcm1Db250ZXh0fVxyXG4gICAgICByYXdFcnJvcnM9e19fZXJyb3JzfVxyXG4gICAgLz5cclxuICApO1xyXG5cclxuICBjb25zdCBpZCA9IGlkU2NoZW1hLiRpZDtcclxuXHJcbiAgLy8gSWYgdGhpcyBzY2hlbWEgaGFzIGEgdGl0bGUgZGVmaW5lZCwgYnV0IHRoZSB1c2VyIGhhcyBzZXQgYSBuZXcga2V5L2xhYmVsLCByZXRhaW4gdGhlaXIgaW5wdXQuXHJcbiAgbGV0IGxhYmVsO1xyXG4gIGlmICh3YXNQcm9wZXJ0eUtleU1vZGlmaWVkKSB7XHJcbiAgICBsYWJlbCA9IG5hbWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxhYmVsID0gdWlTY2hlbWFbXCJ1aTp0aXRsZVwiXSB8fCBwcm9wcy5zY2hlbWEudGl0bGUgfHwgc2NoZW1hLnRpdGxlIHx8IG5hbWU7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZXNjcmlwdGlvbiA9XHJcbiAgICB1aVNjaGVtYVtcInVpOmRlc2NyaXB0aW9uXCJdIHx8XHJcbiAgICBwcm9wcy5zY2hlbWEuZGVzY3JpcHRpb24gfHxcclxuICAgIHNjaGVtYS5kZXNjcmlwdGlvbjtcclxuICBjb25zdCBlcnJvcnMgPSBfX2Vycm9ycztcclxuICBjb25zdCBoZWxwID0gdWlTY2hlbWFbXCJ1aTpoZWxwXCJdO1xyXG4gIGNvbnN0IGhpZGRlbiA9IHVpU2NoZW1hW1widWk6d2lkZ2V0XCJdID09PSBcImhpZGRlblwiO1xyXG5cclxuICBsZXQgY2xhc3NOYW1lcyA9IFtcImZvcm0tZ3JvdXBcIiwgXCJmaWVsZFwiLCBgZmllbGQtJHtzY2hlbWEudHlwZX1gXTtcclxuICBpZiAoIWhpZGVFcnJvciAmJiBlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgIGNsYXNzTmFtZXMucHVzaChcImZpZWxkLWVycm9yIGhhcy1lcnJvciBoYXMtZGFuZ2VyXCIpO1xyXG4gIH1cclxuICBjbGFzc05hbWVzLnB1c2godWlTY2hlbWEuY2xhc3NOYW1lcyk7XHJcbiAgY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXMuam9pbihcIiBcIikudHJpbSgpO1xyXG5cclxuICBjb25zdCBmaWVsZFByb3BzID0ge1xyXG4gICAgZGVzY3JpcHRpb246IChcclxuICAgICAgPERlc2NyaXB0aW9uRmllbGRcclxuICAgICAgICBpZD17aWQgKyBcIl9fZGVzY3JpcHRpb25cIn1cclxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgZm9ybUNvbnRleHQ9e2Zvcm1Db250ZXh0fVxyXG4gICAgICAvPlxyXG4gICAgKSxcclxuICAgIHJhd0Rlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgIGhlbHA6IDxIZWxwIGlkPXtpZCArIFwiX19oZWxwXCJ9IGhlbHA9e2hlbHB9IC8+LFxyXG4gICAgcmF3SGVscDogdHlwZW9mIGhlbHAgPT09IFwic3RyaW5nXCIgPyBoZWxwIDogdW5kZWZpbmVkLFxyXG4gICAgZXJyb3JzOiBoaWRlRXJyb3IgPyB1bmRlZmluZWQgOiA8RXJyb3JMaXN0IGVycm9ycz17ZXJyb3JzfSAvPixcclxuICAgIHJhd0Vycm9yczogaGlkZUVycm9yID8gdW5kZWZpbmVkIDogZXJyb3JzLFxyXG4gICAgaWQsXHJcbiAgICBsYWJlbCxcclxuICAgIGhpZGRlbixcclxuICAgIG9uQ2hhbmdlLFxyXG4gICAgb25LZXlDaGFuZ2UsXHJcbiAgICBvbkRyb3BQcm9wZXJ0eUNsaWNrLFxyXG4gICAgcmVxdWlyZWQsXHJcbiAgICBkaXNhYmxlZCxcclxuICAgIHJlYWRvbmx5LFxyXG4gICAgaGlkZUVycm9yLFxyXG4gICAgZGlzcGxheUxhYmVsLFxyXG4gICAgY2xhc3NOYW1lcyxcclxuICAgIGZvcm1Db250ZXh0LFxyXG4gICAgZm9ybURhdGEsXHJcbiAgICBmaWVsZHMsXHJcbiAgICBzY2hlbWEsXHJcbiAgICB1aVNjaGVtYSxcclxuICAgIHJlZ2lzdHJ5LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IF9BbnlPZkZpZWxkID0gcmVnaXN0cnkuZmllbGRzLkFueU9mRmllbGQ7XHJcbiAgY29uc3QgX09uZU9mRmllbGQgPSByZWdpc3RyeS5maWVsZHMuT25lT2ZGaWVsZDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGaWVsZFRlbXBsYXRlIHsuLi5maWVsZFByb3BzfT5cclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIHtmaWVsZH1cclxuXHJcbiAgICAgICAgey8qXHJcbiAgICAgICAgSWYgdGhlIHNjaGVtYSBgYW55T2ZgIG9yICdvbmVPZicgY2FuIGJlIHJlbmRlcmVkIGFzIGEgc2VsZWN0IGNvbnRyb2wsIGRvbid0XHJcbiAgICAgICAgcmVuZGVyIHRoZSBzZWxlY3Rpb24gYW5kIGxldCBgU3RyaW5nRmllbGRgIGNvbXBvbmVudCBoYW5kbGVcclxuICAgICAgICByZW5kZXJpbmdcclxuICAgICAgKi99XHJcbiAgICAgICAge3NjaGVtYS5hbnlPZiAmJiAhaXNTZWxlY3Qoc2NoZW1hKSAmJiAoXHJcbiAgICAgICAgICA8X0FueU9mRmllbGRcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICByZWFkb25seT17cmVhZG9ubHl9XHJcbiAgICAgICAgICAgIGhpZGVFcnJvcj17aGlkZUVycm9yfVxyXG4gICAgICAgICAgICBlcnJvclNjaGVtYT17ZXJyb3JTY2hlbWF9XHJcbiAgICAgICAgICAgIGZvcm1EYXRhPXtmb3JtRGF0YX1cclxuICAgICAgICAgICAgaWRQcmVmaXg9e2lkUHJlZml4fVxyXG4gICAgICAgICAgICBpZFNjaGVtYT17aWRTY2hlbWF9XHJcbiAgICAgICAgICAgIGlkU2VwYXJhdG9yPXtpZFNlcGFyYXRvcn1cclxuICAgICAgICAgICAgb25CbHVyPXtwcm9wcy5vbkJsdXJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgb25Gb2N1cz17cHJvcHMub25Gb2N1c31cclxuICAgICAgICAgICAgb3B0aW9ucz17c2NoZW1hLmFueU9mLm1hcChfc2NoZW1hID0+XHJcbiAgICAgICAgICAgICAgcmV0cmlldmVTY2hlbWEoX3NjaGVtYSwgcm9vdFNjaGVtYSwgZm9ybURhdGEpXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIGJhc2VUeXBlPXtzY2hlbWEudHlwZX1cclxuICAgICAgICAgICAgcmVnaXN0cnk9e3JlZ2lzdHJ5fVxyXG4gICAgICAgICAgICBzY2hlbWE9e3NjaGVtYX1cclxuICAgICAgICAgICAgdWlTY2hlbWE9e3VpU2NoZW1hfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7c2NoZW1hLm9uZU9mICYmICFpc1NlbGVjdChzY2hlbWEpICYmIChcclxuICAgICAgICAgIDxfT25lT2ZGaWVsZFxyXG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgIHJlYWRvbmx5PXtyZWFkb25seX1cclxuICAgICAgICAgICAgaGlkZUVycm9yPXtoaWRlRXJyb3J9XHJcbiAgICAgICAgICAgIGVycm9yU2NoZW1hPXtlcnJvclNjaGVtYX1cclxuICAgICAgICAgICAgZm9ybURhdGE9e2Zvcm1EYXRhfVxyXG4gICAgICAgICAgICBpZFByZWZpeD17aWRQcmVmaXh9XHJcbiAgICAgICAgICAgIGlkU2NoZW1hPXtpZFNjaGVtYX1cclxuICAgICAgICAgICAgaWRTZXBhcmF0b3I9e2lkU2VwYXJhdG9yfVxyXG4gICAgICAgICAgICBvbkJsdXI9e3Byb3BzLm9uQmx1cn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICBvbkZvY3VzPXtwcm9wcy5vbkZvY3VzfVxyXG4gICAgICAgICAgICBvcHRpb25zPXtzY2hlbWEub25lT2YubWFwKF9zY2hlbWEgPT5cclxuICAgICAgICAgICAgICByZXRyaWV2ZVNjaGVtYShfc2NoZW1hLCByb290U2NoZW1hLCBmb3JtRGF0YSlcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgYmFzZVR5cGU9e3NjaGVtYS50eXBlfVxyXG4gICAgICAgICAgICByZWdpc3RyeT17cmVnaXN0cnl9XHJcbiAgICAgICAgICAgIHNjaGVtYT17c2NoZW1hfVxyXG4gICAgICAgICAgICB1aVNjaGVtYT17dWlTY2hlbWF9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICA8L0ZpZWxkVGVtcGxhdGU+XHJcbiAgKTtcclxufVxyXG5cclxuY2xhc3MgU2NoZW1hRmllbGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xyXG4gICAgcmV0dXJuICFkZWVwRXF1YWxzKHRoaXMucHJvcHMsIG5leHRQcm9wcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gU2NoZW1hRmllbGRSZW5kZXIodGhpcy5wcm9wcyk7XHJcbiAgfVxyXG59XHJcblxyXG5TY2hlbWFGaWVsZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdWlTY2hlbWE6IHt9LFxyXG4gIGVycm9yU2NoZW1hOiB7fSxcclxuICBpZFNjaGVtYToge30sXHJcbiAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gIHJlYWRvbmx5OiBmYWxzZSxcclxuICBhdXRvZm9jdXM6IGZhbHNlLFxyXG4gIGhpZGVFcnJvcjogZmFsc2UsXHJcbn07XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgU2NoZW1hRmllbGQucHJvcFR5cGVzID0ge1xyXG4gICAgc2NoZW1hOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICB1aVNjaGVtYTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGlkU2NoZW1hOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgZm9ybURhdGE6IFByb3BUeXBlcy5hbnksXHJcbiAgICBlcnJvclNjaGVtYTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHJlZ2lzdHJ5OiB0eXBlcy5yZWdpc3RyeS5pc1JlcXVpcmVkLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjaGVtYUZpZWxkO1xyXG4iXX0=