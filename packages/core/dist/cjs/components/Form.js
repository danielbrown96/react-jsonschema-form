"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _ErrorList = _interopRequireDefault(require("./ErrorList"));

var _utils = require("../utils");

var _validate = _interopRequireWildcard(require("../validate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Form =
/*#__PURE__*/
function (_Component) {
  _inherits(Form, _Component);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getUsedFormData", function (formData, fields) {
      //for the case of a single input form
      if (fields.length === 0 && _typeof(formData) !== "object") {
        return formData;
      }

      var data = (0, _pick2["default"])(formData, fields);

      if (Array.isArray(formData)) {
        return Object.keys(data).map(function (key) {
          return data[key];
        });
      }

      return data;
    });

    _defineProperty(_assertThisInitialized(_this), "getFieldNames", function (pathSchema, formData) {
      var getAllPaths = function getAllPaths(_obj) {
        var acc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var paths = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [""];
        Object.keys(_obj).forEach(function (key) {
          if (_typeof(_obj[key]) === "object") {
            var newPaths = paths.map(function (path) {
              return "".concat(path, ".").concat(key);
            }); // If an object is marked with additionalProperties, all its keys are valid

            if (_obj[key].__rjsf_additionalProperties && _obj[key].$name !== "") {
              acc.push(_obj[key].$name);
            } else {
              getAllPaths(_obj[key], acc, newPaths);
            }
          } else if (key === "$name" && _obj[key] !== "") {
            paths.forEach(function (path) {
              path = path.replace(/^\./, "");
              var formValue = (0, _get2["default"])(formData, path); // adds path to fieldNames if it points to a value
              // or an empty object/array

              if (_typeof(formValue) !== "object" || (0, _isEmpty2["default"])(formValue)) {
                acc.push(path);
              }
            });
          }
        });
        return acc;
      };

      return getAllPaths(pathSchema);
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (formData, newErrorSchema) {
      if ((0, _utils.isObject)(formData) || Array.isArray(formData)) {
        var newState = _this.getStateFromProps(_this.props, formData);

        formData = newState.formData;
      }

      var mustValidate = !_this.props.noValidate && _this.props.liveValidate;
      var state = {
        formData: formData
      };
      var newFormData = formData;

      if (_this.props.omitExtraData === true && _this.props.liveOmit === true) {
        var retrievedSchema = (0, _utils.retrieveSchema)(_this.state.schema, _this.state.schema, formData);
        var pathSchema = (0, _utils.toPathSchema)(retrievedSchema, "", _this.state.schema, formData);

        var fieldNames = _this.getFieldNames(pathSchema, formData);

        newFormData = _this.getUsedFormData(formData, fieldNames);
        state = {
          formData: newFormData
        };
      }

      if (mustValidate) {
        var schemaValidation = _this.validate(newFormData);

        var errors = schemaValidation.errors;
        var errorSchema = schemaValidation.errorSchema;
        var schemaValidationErrors = errors;
        var schemaValidationErrorSchema = errorSchema;

        if (_this.props.extraErrors) {
          errorSchema = (0, _utils.mergeObjects)(errorSchema, _this.props.extraErrors, !!"concat arrays");
          errors = (0, _validate.toErrorList)(errorSchema);
        }

        state = {
          formData: newFormData,
          errors: errors,
          errorSchema: errorSchema,
          schemaValidationErrors: schemaValidationErrors,
          schemaValidationErrorSchema: schemaValidationErrorSchema
        };
      } else if (!_this.props.noValidate && newErrorSchema) {
        var _errorSchema = _this.props.extraErrors ? (0, _utils.mergeObjects)(newErrorSchema, _this.props.extraErrors, !!"concat arrays") : newErrorSchema;

        state = {
          formData: newFormData,
          errorSchema: _errorSchema,
          errors: (0, _validate.toErrorList)(_errorSchema)
        };
      }

      _this.setState(state, function () {
        return _this.props.onChange && _this.props.onChange(_this.state);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
      if (_this.props.onBlur) {
        var _this$props;

        (_this$props = _this.props).onBlur.apply(_this$props, arguments);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function () {
      if (_this.props.onFocus) {
        var _this$props2;

        (_this$props2 = _this.props).onFocus.apply(_this$props2, arguments);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (event) {
      event.preventDefault();

      if (event.target !== event.currentTarget) {
        return;
      }

      event.persist();
      var newFormData = _this.state.formData;

      if (_this.props.omitExtraData === true) {
        var retrievedSchema = (0, _utils.retrieveSchema)(_this.state.schema, _this.state.schema, newFormData);
        var pathSchema = (0, _utils.toPathSchema)(retrievedSchema, "", _this.state.schema, newFormData);

        var fieldNames = _this.getFieldNames(pathSchema, newFormData);

        newFormData = _this.getUsedFormData(newFormData, fieldNames);
      }

      if (!_this.props.noValidate) {
        var schemaValidation = _this.validate(newFormData);

        var _errors = schemaValidation.errors;
        var _errorSchema2 = schemaValidation.errorSchema;
        var schemaValidationErrors = _errors;
        var schemaValidationErrorSchema = _errorSchema2;

        if (Object.keys(_errors).length > 0) {
          if (_this.props.extraErrors) {
            _errorSchema2 = (0, _utils.mergeObjects)(_errorSchema2, _this.props.extraErrors, !!"concat arrays");
            _errors = (0, _validate.toErrorList)(_errorSchema2);
          }

          _this.setState({
            errors: _errors,
            errorSchema: _errorSchema2,
            schemaValidationErrors: schemaValidationErrors,
            schemaValidationErrorSchema: schemaValidationErrorSchema
          }, function () {
            if (_this.props.onError) {
              _this.props.onError(_errors);
            } else {
              console.error("Form validation failed", _errors);
            }
          });

          return;
        }
      } // There are no errors generated through schema validation.
      // Check for user provided errors and update state accordingly.


      var errorSchema;
      var errors;

      if (_this.props.extraErrors) {
        errorSchema = _this.props.extraErrors;
        errors = (0, _validate.toErrorList)(errorSchema);
      } else {
        errorSchema = {};
        errors = [];
      }

      _this.setState({
        formData: newFormData,
        errors: errors,
        errorSchema: errorSchema,
        schemaValidationErrors: [],
        schemaValidationErrorSchema: {}
      }, function () {
        if (_this.props.onSubmit) {
          _this.props.onSubmit(_objectSpread({}, _this.state, {
            formData: newFormData,
            status: "submitted"
          }), event);
        }
      });
    });

    _this.state = _this.getStateFromProps(props, props.formData);

    if (_this.props.onChange && !(0, _utils.deepEquals)(_this.state.formData, _this.props.formData)) {
      _this.props.onChange(_this.state);
    }

    _this.formElement = null;
    return _this;
  }

  _createClass(Form, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var nextState = this.getStateFromProps(nextProps, nextProps.formData);
      this.setState(nextState);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.onChange && !(0, _utils.deepEquals)(this.props.formData, this.state.formData) && !(0, _utils.deepEquals)(prevState.formData, this.state.formData) && !(0, _utils.deepEquals)(this.props.formData, prevProps.formData)) {
        this.props.onChange(this.state);
      }
    }
  }, {
    key: "getStateFromProps",
    value: function getStateFromProps(props, inputFormData) {
      var state = this.state || {};
      var schema = "schema" in props ? props.schema : this.props.schema;
      var uiSchema = "uiSchema" in props ? props.uiSchema : this.props.uiSchema;
      var edit = typeof inputFormData !== "undefined";
      var liveValidate = "liveValidate" in props ? props.liveValidate : this.props.liveValidate;
      var mustValidate = edit && !props.noValidate && liveValidate;
      var rootSchema = schema;
      var formData = (0, _utils.getDefaultFormState)(schema, inputFormData, rootSchema);
      var retrievedSchema = (0, _utils.retrieveSchema)(schema, rootSchema, formData);
      var customFormats = props.customFormats;
      var additionalMetaSchemas = props.additionalMetaSchemas;

      var getCurrentErrors = function getCurrentErrors() {
        if (props.noValidate) {
          return {
            errors: [],
            errorSchema: {}
          };
        } else if (!props.liveValidate) {
          return {
            errors: state.schemaValidationErrors || [],
            errorSchema: state.schemaValidationErrorSchema || {}
          };
        }

        return {
          errors: state.errors || [],
          errorSchema: state.errorSchema || {}
        };
      };

      var errors, errorSchema, schemaValidationErrors, schemaValidationErrorSchema;

      if (mustValidate) {
        var schemaValidation = this.validate(formData, schema, additionalMetaSchemas, customFormats);
        errors = schemaValidation.errors;
        errorSchema = schemaValidation.errorSchema;
        schemaValidationErrors = errors;
        schemaValidationErrorSchema = errorSchema;
      } else {
        var currentErrors = getCurrentErrors();
        errors = currentErrors.errors;
        errorSchema = currentErrors.errorSchema;
        schemaValidationErrors = state.schemaValidationErrors;
        schemaValidationErrorSchema = state.schemaValidationErrorSchema;
      }

      if (props.extraErrors) {
        errorSchema = (0, _utils.mergeObjects)(errorSchema, props.extraErrors, !!"concat arrays");
        errors = (0, _validate.toErrorList)(errorSchema);
      }

      var idSchema = (0, _utils.toIdSchema)(retrievedSchema, uiSchema["ui:rootFieldId"], rootSchema, formData, props.idPrefix, props.idSeparator);
      var nextState = {
        schema: schema,
        uiSchema: uiSchema,
        idSchema: idSchema,
        formData: formData,
        edit: edit,
        errors: errors,
        errorSchema: errorSchema,
        additionalMetaSchemas: additionalMetaSchemas
      };

      if (schemaValidationErrors) {
        nextState.schemaValidationErrors = schemaValidationErrors;
        nextState.schemaValidationErrorSchema = schemaValidationErrorSchema;
      }

      return nextState;
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _utils.shouldRender)(this, nextProps, nextState);
    }
  }, {
    key: "validate",
    value: function validate(formData) {
      var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.schema;
      var additionalMetaSchemas = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props.additionalMetaSchemas;
      var customFormats = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.props.customFormats;
      var _this$props3 = this.props,
          validate = _this$props3.validate,
          transformErrors = _this$props3.transformErrors;

      var _this$getRegistry = this.getRegistry(),
          rootSchema = _this$getRegistry.rootSchema;

      var resolvedSchema = (0, _utils.retrieveSchema)(schema, rootSchema, formData);
      return (0, _validate["default"])(formData, resolvedSchema, validate, transformErrors, additionalMetaSchemas, customFormats);
    }
  }, {
    key: "renderErrors",
    value: function renderErrors() {
      var _this$state = this.state,
          errors = _this$state.errors,
          errorSchema = _this$state.errorSchema,
          schema = _this$state.schema,
          uiSchema = _this$state.uiSchema;
      var _this$props4 = this.props,
          ErrorList = _this$props4.ErrorList,
          showErrorList = _this$props4.showErrorList,
          formContext = _this$props4.formContext;

      if (errors.length && showErrorList != false) {
        return _react["default"].createElement(ErrorList, {
          errors: errors,
          errorSchema: errorSchema,
          schema: schema,
          uiSchema: uiSchema,
          formContext: formContext
        });
      }

      return null;
    }
  }, {
    key: "getRegistry",
    value: function getRegistry() {
      // For BC, accept passed SchemaField and TitleField props and pass them to
      // the "fields" registry one.
      var _getDefaultRegistry = (0, _utils.getDefaultRegistry)(),
          fields = _getDefaultRegistry.fields,
          widgets = _getDefaultRegistry.widgets;

      return {
        fields: _objectSpread({}, fields, this.props.fields),
        widgets: _objectSpread({}, widgets, this.props.widgets),
        ArrayFieldTemplate: this.props.ArrayFieldTemplate,
        ObjectFieldTemplate: this.props.ObjectFieldTemplate,
        FieldTemplate: this.props.FieldTemplate,
        definitions: this.props.schema.definitions || {},
        rootSchema: this.props.schema,
        formContext: this.props.formContext || {}
      };
    }
  }, {
    key: "submit",
    value: function submit() {
      if (this.formElement) {
        this.formElement.dispatchEvent(new CustomEvent("submit", {
          cancelable: true
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          children = _this$props5.children,
          id = _this$props5.id,
          idPrefix = _this$props5.idPrefix,
          idSeparator = _this$props5.idSeparator,
          className = _this$props5.className,
          tagName = _this$props5.tagName,
          name = _this$props5.name,
          method = _this$props5.method,
          target = _this$props5.target,
          action = _this$props5.action,
          deprecatedAutocomplete = _this$props5.autocomplete,
          currentAutoComplete = _this$props5.autoComplete,
          enctype = _this$props5.enctype,
          acceptcharset = _this$props5.acceptcharset,
          noHtml5Validate = _this$props5.noHtml5Validate,
          disabled = _this$props5.disabled,
          readonly = _this$props5.readonly,
          formContext = _this$props5.formContext,
          _internalFormWrapper = _this$props5._internalFormWrapper;
      var _this$state2 = this.state,
          schema = _this$state2.schema,
          uiSchema = _this$state2.uiSchema,
          formData = _this$state2.formData,
          errorSchema = _this$state2.errorSchema,
          idSchema = _this$state2.idSchema;
      var registry = this.getRegistry();
      var _SchemaField = registry.fields.SchemaField; // The `semantic-ui` and `material-ui` themes have `_internalFormWrapper`s that take an `as` prop that is the
      // PropTypes.elementType to use for the inner tag so we'll need to pass `tagName` along if it is provided.
      // NOTE, the `as` prop is native to `semantic-ui` and is emulated in the `material-ui` theme

      var as = _internalFormWrapper ? tagName : undefined;
      var FormTag = _internalFormWrapper || tagName || "form";

      if (deprecatedAutocomplete) {
        console.warn("Using autocomplete property of Form is deprecated, use autoComplete instead.");
      }

      var autoComplete = currentAutoComplete ? currentAutoComplete : deprecatedAutocomplete;
      return _react["default"].createElement(FormTag, {
        className: className ? className : "rjsf",
        id: id,
        name: name,
        method: method,
        target: target,
        action: action,
        autoComplete: autoComplete,
        encType: enctype,
        acceptCharset: acceptcharset,
        noValidate: noHtml5Validate,
        onSubmit: this.onSubmit,
        as: as,
        ref: function ref(form) {
          _this2.formElement = form;
        }
      }, this.renderErrors(), _react["default"].createElement(_SchemaField, {
        schema: schema,
        uiSchema: uiSchema,
        errorSchema: errorSchema,
        idSchema: idSchema,
        idPrefix: idPrefix,
        idSeparator: idSeparator,
        formContext: formContext,
        formData: formData,
        onChange: this.onChange,
        onBlur: this.onBlur,
        onFocus: this.onFocus,
        registry: registry,
        disabled: disabled,
        readonly: readonly
      }), children ? children : _react["default"].createElement("div", null, _react["default"].createElement("button", {
        type: "submit",
        className: "btn btn-info"
      }, "Submit")));
    }
  }]);

  return Form;
}(_react.Component);

exports["default"] = Form;

_defineProperty(Form, "defaultProps", {
  uiSchema: {},
  noValidate: false,
  liveValidate: false,
  disabled: false,
  readonly: false,
  noHtml5Validate: false,
  ErrorList: _ErrorList["default"],
  omitExtraData: false
});

if (process.env.NODE_ENV !== "production") {
  Form.propTypes = {
    schema: _propTypes["default"].object.isRequired,
    uiSchema: _propTypes["default"].object,
    formData: _propTypes["default"].any,
    disabled: _propTypes["default"].bool,
    readonly: _propTypes["default"].bool,
    widgets: _propTypes["default"].objectOf(_propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object])),
    fields: _propTypes["default"].objectOf(_propTypes["default"].elementType),
    ArrayFieldTemplate: _propTypes["default"].elementType,
    ObjectFieldTemplate: _propTypes["default"].elementType,
    FieldTemplate: _propTypes["default"].elementType,
    ErrorList: _propTypes["default"].func,
    onChange: _propTypes["default"].func,
    onError: _propTypes["default"].func,
    showErrorList: _propTypes["default"].bool,
    onSubmit: _propTypes["default"].func,
    id: _propTypes["default"].string,
    className: _propTypes["default"].string,
    tagName: _propTypes["default"].elementType,
    _internalFormWrapper: _propTypes["default"].elementType,
    name: _propTypes["default"].string,
    method: _propTypes["default"].string,
    target: _propTypes["default"].string,
    action: _propTypes["default"].string,
    autocomplete: _propTypes["default"].string,
    autoComplete: _propTypes["default"].string,
    enctype: _propTypes["default"].string,
    acceptcharset: _propTypes["default"].string,
    noValidate: _propTypes["default"].bool,
    noHtml5Validate: _propTypes["default"].bool,
    liveValidate: _propTypes["default"].bool,
    validate: _propTypes["default"].func,
    transformErrors: _propTypes["default"].func,
    formContext: _propTypes["default"].object,
    customFormats: _propTypes["default"].object,
    additionalMetaSchemas: _propTypes["default"].arrayOf(_propTypes["default"].object),
    omitExtraData: _propTypes["default"].bool,
    extraErrors: _propTypes["default"].object
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zvcm0uanMiXSwibmFtZXMiOlsiRm9ybSIsInByb3BzIiwiZm9ybURhdGEiLCJmaWVsZHMiLCJsZW5ndGgiLCJkYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInBhdGhTY2hlbWEiLCJnZXRBbGxQYXRocyIsIl9vYmoiLCJhY2MiLCJwYXRocyIsImZvckVhY2giLCJuZXdQYXRocyIsInBhdGgiLCJfX3Jqc2ZfYWRkaXRpb25hbFByb3BlcnRpZXMiLCIkbmFtZSIsInB1c2giLCJyZXBsYWNlIiwiZm9ybVZhbHVlIiwibmV3RXJyb3JTY2hlbWEiLCJuZXdTdGF0ZSIsImdldFN0YXRlRnJvbVByb3BzIiwibXVzdFZhbGlkYXRlIiwibm9WYWxpZGF0ZSIsImxpdmVWYWxpZGF0ZSIsInN0YXRlIiwibmV3Rm9ybURhdGEiLCJvbWl0RXh0cmFEYXRhIiwibGl2ZU9taXQiLCJyZXRyaWV2ZWRTY2hlbWEiLCJzY2hlbWEiLCJmaWVsZE5hbWVzIiwiZ2V0RmllbGROYW1lcyIsImdldFVzZWRGb3JtRGF0YSIsInNjaGVtYVZhbGlkYXRpb24iLCJ2YWxpZGF0ZSIsImVycm9ycyIsImVycm9yU2NoZW1hIiwic2NoZW1hVmFsaWRhdGlvbkVycm9ycyIsInNjaGVtYVZhbGlkYXRpb25FcnJvclNjaGVtYSIsImV4dHJhRXJyb3JzIiwic2V0U3RhdGUiLCJvbkNoYW5nZSIsIm9uQmx1ciIsIm9uRm9jdXMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInBlcnNpc3QiLCJvbkVycm9yIiwiY29uc29sZSIsImVycm9yIiwib25TdWJtaXQiLCJzdGF0dXMiLCJmb3JtRWxlbWVudCIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImlucHV0Rm9ybURhdGEiLCJ1aVNjaGVtYSIsImVkaXQiLCJyb290U2NoZW1hIiwiY3VzdG9tRm9ybWF0cyIsImFkZGl0aW9uYWxNZXRhU2NoZW1hcyIsImdldEN1cnJlbnRFcnJvcnMiLCJjdXJyZW50RXJyb3JzIiwiaWRTY2hlbWEiLCJpZFByZWZpeCIsImlkU2VwYXJhdG9yIiwidHJhbnNmb3JtRXJyb3JzIiwiZ2V0UmVnaXN0cnkiLCJyZXNvbHZlZFNjaGVtYSIsIkVycm9yTGlzdCIsInNob3dFcnJvckxpc3QiLCJmb3JtQ29udGV4dCIsIndpZGdldHMiLCJBcnJheUZpZWxkVGVtcGxhdGUiLCJPYmplY3RGaWVsZFRlbXBsYXRlIiwiRmllbGRUZW1wbGF0ZSIsImRlZmluaXRpb25zIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiY2FuY2VsYWJsZSIsImNoaWxkcmVuIiwiaWQiLCJjbGFzc05hbWUiLCJ0YWdOYW1lIiwibmFtZSIsIm1ldGhvZCIsImFjdGlvbiIsImRlcHJlY2F0ZWRBdXRvY29tcGxldGUiLCJhdXRvY29tcGxldGUiLCJjdXJyZW50QXV0b0NvbXBsZXRlIiwiYXV0b0NvbXBsZXRlIiwiZW5jdHlwZSIsImFjY2VwdGNoYXJzZXQiLCJub0h0bWw1VmFsaWRhdGUiLCJkaXNhYmxlZCIsInJlYWRvbmx5IiwiX2ludGVybmFsRm9ybVdyYXBwZXIiLCJyZWdpc3RyeSIsIl9TY2hlbWFGaWVsZCIsIlNjaGVtYUZpZWxkIiwiYXMiLCJ1bmRlZmluZWQiLCJGb3JtVGFnIiwid2FybiIsImZvcm0iLCJyZW5kZXJFcnJvcnMiLCJDb21wb25lbnQiLCJEZWZhdWx0RXJyb3JMaXN0IiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImFueSIsImJvb2wiLCJvYmplY3RPZiIsIm9uZU9mVHlwZSIsImZ1bmMiLCJlbGVtZW50VHlwZSIsInN0cmluZyIsImFycmF5T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFV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RXNCLHNCQUFVUyxNQTNCVDtBQTRCZjlCLElBQUFBLE9BQU8sRUFBRXFCLHNCQUFVUyxNQTVCSjtBQTZCZjdCLElBQUFBLGFBQWEsRUFBRW9CLHNCQUFVUyxNQTdCVjtBQThCZnZHLElBQUFBLFVBQVUsRUFBRThGLHNCQUFVSSxJQTlCUDtBQStCZnZCLElBQUFBLGVBQWUsRUFBRW1CLHNCQUFVSSxJQS9CWjtBQWdDZmpHLElBQUFBLFlBQVksRUFBRTZGLHNCQUFVSSxJQWhDVDtBQWlDZnRGLElBQUFBLFFBQVEsRUFBRWtGLHNCQUFVTyxJQWpDTDtBQWtDZnJELElBQUFBLGVBQWUsRUFBRThDLHNCQUFVTyxJQWxDWjtBQW1DZmhELElBQUFBLFdBQVcsRUFBRXlDLHNCQUFVQyxNQW5DUjtBQW9DZnRELElBQUFBLGFBQWEsRUFBRXFELHNCQUFVQyxNQXBDVjtBQXFDZnJELElBQUFBLHFCQUFxQixFQUFFb0Qsc0JBQVVVLE9BQVYsQ0FBa0JWLHNCQUFVQyxNQUE1QixDQXJDUjtBQXNDZjNGLElBQUFBLGFBQWEsRUFBRTBGLHNCQUFVSSxJQXRDVjtBQXVDZmpGLElBQUFBLFdBQVcsRUFBRTZFLHNCQUFVQztBQXZDUixHQUFqQjtBQXlDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBfcGljayBmcm9tIFwibG9kYXNoL3BpY2tcIjtcbmltcG9ydCBfZ2V0IGZyb20gXCJsb2Rhc2gvZ2V0XCI7XG5pbXBvcnQgX2lzRW1wdHkgZnJvbSBcImxvZGFzaC9pc0VtcHR5XCI7XG5cbmltcG9ydCB7IGRlZmF1bHQgYXMgRGVmYXVsdEVycm9yTGlzdCB9IGZyb20gXCIuL0Vycm9yTGlzdFwiO1xuaW1wb3J0IHtcbiAgZ2V0RGVmYXVsdEZvcm1TdGF0ZSxcbiAgcmV0cmlldmVTY2hlbWEsXG4gIHNob3VsZFJlbmRlcixcbiAgdG9JZFNjaGVtYSxcbiAgZ2V0RGVmYXVsdFJlZ2lzdHJ5LFxuICBkZWVwRXF1YWxzLFxuICB0b1BhdGhTY2hlbWEsXG4gIGlzT2JqZWN0LFxufSBmcm9tIFwiLi4vdXRpbHNcIjtcbmltcG9ydCB2YWxpZGF0ZUZvcm1EYXRhLCB7IHRvRXJyb3JMaXN0IH0gZnJvbSBcIi4uL3ZhbGlkYXRlXCI7XG5pbXBvcnQgeyBtZXJnZU9iamVjdHMgfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdWlTY2hlbWE6IHt9LFxuICAgIG5vVmFsaWRhdGU6IGZhbHNlLFxuICAgIGxpdmVWYWxpZGF0ZTogZmFsc2UsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHJlYWRvbmx5OiBmYWxzZSxcbiAgICBub0h0bWw1VmFsaWRhdGU6IGZhbHNlLFxuICAgIEVycm9yTGlzdDogRGVmYXVsdEVycm9yTGlzdCxcbiAgICBvbWl0RXh0cmFEYXRhOiBmYWxzZSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgcHJvcHMuZm9ybURhdGEpO1xuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UgJiZcbiAgICAgICFkZWVwRXF1YWxzKHRoaXMuc3RhdGUuZm9ybURhdGEsIHRoaXMucHJvcHMuZm9ybURhdGEpXG4gICAgKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgICB0aGlzLmZvcm1FbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnN0IG5leHRTdGF0ZSA9IHRoaXMuZ2V0U3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBuZXh0UHJvcHMuZm9ybURhdGEpO1xuICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UgJiZcbiAgICAgICFkZWVwRXF1YWxzKHRoaXMucHJvcHMuZm9ybURhdGEsIHRoaXMuc3RhdGUuZm9ybURhdGEpICYmXG4gICAgICAhZGVlcEVxdWFscyhwcmV2U3RhdGUuZm9ybURhdGEsIHRoaXMuc3RhdGUuZm9ybURhdGEpICYmXG4gICAgICAhZGVlcEVxdWFscyh0aGlzLnByb3BzLmZvcm1EYXRhLCBwcmV2UHJvcHMuZm9ybURhdGEpXG4gICAgKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIGdldFN0YXRlRnJvbVByb3BzKHByb3BzLCBpbnB1dEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlIHx8IHt9O1xuICAgIGNvbnN0IHNjaGVtYSA9IFwic2NoZW1hXCIgaW4gcHJvcHMgPyBwcm9wcy5zY2hlbWEgOiB0aGlzLnByb3BzLnNjaGVtYTtcbiAgICBjb25zdCB1aVNjaGVtYSA9IFwidWlTY2hlbWFcIiBpbiBwcm9wcyA/IHByb3BzLnVpU2NoZW1hIDogdGhpcy5wcm9wcy51aVNjaGVtYTtcbiAgICBjb25zdCBlZGl0ID0gdHlwZW9mIGlucHV0Rm9ybURhdGEgIT09IFwidW5kZWZpbmVkXCI7XG4gICAgY29uc3QgbGl2ZVZhbGlkYXRlID1cbiAgICAgIFwibGl2ZVZhbGlkYXRlXCIgaW4gcHJvcHMgPyBwcm9wcy5saXZlVmFsaWRhdGUgOiB0aGlzLnByb3BzLmxpdmVWYWxpZGF0ZTtcbiAgICBjb25zdCBtdXN0VmFsaWRhdGUgPSBlZGl0ICYmICFwcm9wcy5ub1ZhbGlkYXRlICYmIGxpdmVWYWxpZGF0ZTtcbiAgICBjb25zdCByb290U2NoZW1hID0gc2NoZW1hO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gZ2V0RGVmYXVsdEZvcm1TdGF0ZShzY2hlbWEsIGlucHV0Rm9ybURhdGEsIHJvb3RTY2hlbWEpO1xuICAgIGNvbnN0IHJldHJpZXZlZFNjaGVtYSA9IHJldHJpZXZlU2NoZW1hKHNjaGVtYSwgcm9vdFNjaGVtYSwgZm9ybURhdGEpO1xuICAgIGNvbnN0IGN1c3RvbUZvcm1hdHMgPSBwcm9wcy5jdXN0b21Gb3JtYXRzO1xuICAgIGNvbnN0IGFkZGl0aW9uYWxNZXRhU2NoZW1hcyA9IHByb3BzLmFkZGl0aW9uYWxNZXRhU2NoZW1hcztcblxuICAgIGNvbnN0IGdldEN1cnJlbnRFcnJvcnMgPSAoKSA9PiB7XG4gICAgICBpZiAocHJvcHMubm9WYWxpZGF0ZSkge1xuICAgICAgICByZXR1cm4geyBlcnJvcnM6IFtdLCBlcnJvclNjaGVtYToge30gfTtcbiAgICAgIH0gZWxzZSBpZiAoIXByb3BzLmxpdmVWYWxpZGF0ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVycm9yczogc3RhdGUuc2NoZW1hVmFsaWRhdGlvbkVycm9ycyB8fCBbXSxcbiAgICAgICAgICBlcnJvclNjaGVtYTogc3RhdGUuc2NoZW1hVmFsaWRhdGlvbkVycm9yU2NoZW1hIHx8IHt9LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXJyb3JzOiBzdGF0ZS5lcnJvcnMgfHwgW10sXG4gICAgICAgIGVycm9yU2NoZW1hOiBzdGF0ZS5lcnJvclNjaGVtYSB8fCB7fSxcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGxldCBlcnJvcnMsXG4gICAgICBlcnJvclNjaGVtYSxcbiAgICAgIHNjaGVtYVZhbGlkYXRpb25FcnJvcnMsXG4gICAgICBzY2hlbWFWYWxpZGF0aW9uRXJyb3JTY2hlbWE7XG4gICAgaWYgKG11c3RWYWxpZGF0ZSkge1xuICAgICAgY29uc3Qgc2NoZW1hVmFsaWRhdGlvbiA9IHRoaXMudmFsaWRhdGUoXG4gICAgICAgIGZvcm1EYXRhLFxuICAgICAgICBzY2hlbWEsXG4gICAgICAgIGFkZGl0aW9uYWxNZXRhU2NoZW1hcyxcbiAgICAgICAgY3VzdG9tRm9ybWF0c1xuICAgICAgKTtcbiAgICAgIGVycm9ycyA9IHNjaGVtYVZhbGlkYXRpb24uZXJyb3JzO1xuICAgICAgZXJyb3JTY2hlbWEgPSBzY2hlbWFWYWxpZGF0aW9uLmVycm9yU2NoZW1hO1xuICAgICAgc2NoZW1hVmFsaWRhdGlvbkVycm9ycyA9IGVycm9ycztcbiAgICAgIHNjaGVtYVZhbGlkYXRpb25FcnJvclNjaGVtYSA9IGVycm9yU2NoZW1hO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjdXJyZW50RXJyb3JzID0gZ2V0Q3VycmVudEVycm9ycygpO1xuICAgICAgZXJyb3JzID0gY3VycmVudEVycm9ycy5lcnJvcnM7XG4gICAgICBlcnJvclNjaGVtYSA9IGN1cnJlbnRFcnJvcnMuZXJyb3JTY2hlbWE7XG4gICAgICBzY2hlbWFWYWxpZGF0aW9uRXJyb3JzID0gc3RhdGUuc2NoZW1hVmFsaWRhdGlvbkVycm9ycztcbiAgICAgIHNjaGVtYVZhbGlkYXRpb25FcnJvclNjaGVtYSA9IHN0YXRlLnNjaGVtYVZhbGlkYXRpb25FcnJvclNjaGVtYTtcbiAgICB9XG4gICAgaWYgKHByb3BzLmV4dHJhRXJyb3JzKSB7XG4gICAgICBlcnJvclNjaGVtYSA9IG1lcmdlT2JqZWN0cyhcbiAgICAgICAgZXJyb3JTY2hlbWEsXG4gICAgICAgIHByb3BzLmV4dHJhRXJyb3JzLFxuICAgICAgICAhIVwiY29uY2F0IGFycmF5c1wiXG4gICAgICApO1xuICAgICAgZXJyb3JzID0gdG9FcnJvckxpc3QoZXJyb3JTY2hlbWEpO1xuICAgIH1cbiAgICBjb25zdCBpZFNjaGVtYSA9IHRvSWRTY2hlbWEoXG4gICAgICByZXRyaWV2ZWRTY2hlbWEsXG4gICAgICB1aVNjaGVtYVtcInVpOnJvb3RGaWVsZElkXCJdLFxuICAgICAgcm9vdFNjaGVtYSxcbiAgICAgIGZvcm1EYXRhLFxuICAgICAgcHJvcHMuaWRQcmVmaXgsXG4gICAgICBwcm9wcy5pZFNlcGFyYXRvclxuICAgICk7XG4gICAgY29uc3QgbmV4dFN0YXRlID0ge1xuICAgICAgc2NoZW1hLFxuICAgICAgdWlTY2hlbWEsXG4gICAgICBpZFNjaGVtYSxcbiAgICAgIGZvcm1EYXRhLFxuICAgICAgZWRpdCxcbiAgICAgIGVycm9ycyxcbiAgICAgIGVycm9yU2NoZW1hLFxuICAgICAgYWRkaXRpb25hbE1ldGFTY2hlbWFzLFxuICAgIH07XG4gICAgaWYgKHNjaGVtYVZhbGlkYXRpb25FcnJvcnMpIHtcbiAgICAgIG5leHRTdGF0ZS5zY2hlbWFWYWxpZGF0aW9uRXJyb3JzID0gc2NoZW1hVmFsaWRhdGlvbkVycm9ycztcbiAgICAgIG5leHRTdGF0ZS5zY2hlbWFWYWxpZGF0aW9uRXJyb3JTY2hlbWEgPSBzY2hlbWFWYWxpZGF0aW9uRXJyb3JTY2hlbWE7XG4gICAgfVxuICAgIHJldHVybiBuZXh0U3RhdGU7XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICByZXR1cm4gc2hvdWxkUmVuZGVyKHRoaXMsIG5leHRQcm9wcywgbmV4dFN0YXRlKTtcbiAgfVxuXG4gIHZhbGlkYXRlKFxuICAgIGZvcm1EYXRhLFxuICAgIHNjaGVtYSA9IHRoaXMucHJvcHMuc2NoZW1hLFxuICAgIGFkZGl0aW9uYWxNZXRhU2NoZW1hcyA9IHRoaXMucHJvcHMuYWRkaXRpb25hbE1ldGFTY2hlbWFzLFxuICAgIGN1c3RvbUZvcm1hdHMgPSB0aGlzLnByb3BzLmN1c3RvbUZvcm1hdHNcbiAgKSB7XG4gICAgY29uc3QgeyB2YWxpZGF0ZSwgdHJhbnNmb3JtRXJyb3JzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcm9vdFNjaGVtYSB9ID0gdGhpcy5nZXRSZWdpc3RyeSgpO1xuICAgIGNvbnN0IHJlc29sdmVkU2NoZW1hID0gcmV0cmlldmVTY2hlbWEoc2NoZW1hLCByb290U2NoZW1hLCBmb3JtRGF0YSk7XG4gICAgcmV0dXJuIHZhbGlkYXRlRm9ybURhdGEoXG4gICAgICBmb3JtRGF0YSxcbiAgICAgIHJlc29sdmVkU2NoZW1hLFxuICAgICAgdmFsaWRhdGUsXG4gICAgICB0cmFuc2Zvcm1FcnJvcnMsXG4gICAgICBhZGRpdGlvbmFsTWV0YVNjaGVtYXMsXG4gICAgICBjdXN0b21Gb3JtYXRzXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckVycm9ycygpIHtcbiAgICBjb25zdCB7IGVycm9ycywgZXJyb3JTY2hlbWEsIHNjaGVtYSwgdWlTY2hlbWEgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBFcnJvckxpc3QsIHNob3dFcnJvckxpc3QsIGZvcm1Db250ZXh0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGVycm9ycy5sZW5ndGggJiYgc2hvd0Vycm9yTGlzdCAhPSBmYWxzZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEVycm9yTGlzdFxuICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgIGVycm9yU2NoZW1hPXtlcnJvclNjaGVtYX1cbiAgICAgICAgICBzY2hlbWE9e3NjaGVtYX1cbiAgICAgICAgICB1aVNjaGVtYT17dWlTY2hlbWF9XG4gICAgICAgICAgZm9ybUNvbnRleHQ9e2Zvcm1Db250ZXh0fVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRVc2VkRm9ybURhdGEgPSAoZm9ybURhdGEsIGZpZWxkcykgPT4ge1xuICAgIC8vZm9yIHRoZSBjYXNlIG9mIGEgc2luZ2xlIGlucHV0IGZvcm1cbiAgICBpZiAoZmllbGRzLmxlbmd0aCA9PT0gMCAmJiB0eXBlb2YgZm9ybURhdGEgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHJldHVybiBmb3JtRGF0YTtcbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IF9waWNrKGZvcm1EYXRhLCBmaWVsZHMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGZvcm1EYXRhKSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcChrZXkgPT4gZGF0YVtrZXldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBnZXRGaWVsZE5hbWVzID0gKHBhdGhTY2hlbWEsIGZvcm1EYXRhKSA9PiB7XG4gICAgY29uc3QgZ2V0QWxsUGF0aHMgPSAoX29iaiwgYWNjID0gW10sIHBhdGhzID0gW1wiXCJdKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhfb2JqKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgX29ialtrZXldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgbGV0IG5ld1BhdGhzID0gcGF0aHMubWFwKHBhdGggPT4gYCR7cGF0aH0uJHtrZXl9YCk7XG4gICAgICAgICAgLy8gSWYgYW4gb2JqZWN0IGlzIG1hcmtlZCB3aXRoIGFkZGl0aW9uYWxQcm9wZXJ0aWVzLCBhbGwgaXRzIGtleXMgYXJlIHZhbGlkXG4gICAgICAgICAgaWYgKF9vYmpba2V5XS5fX3Jqc2ZfYWRkaXRpb25hbFByb3BlcnRpZXMgJiYgX29ialtrZXldLiRuYW1lICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBhY2MucHVzaChfb2JqW2tleV0uJG5hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnZXRBbGxQYXRocyhfb2JqW2tleV0sIGFjYywgbmV3UGF0aHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwiJG5hbWVcIiAmJiBfb2JqW2tleV0gIT09IFwiXCIpIHtcbiAgICAgICAgICBwYXRocy5mb3JFYWNoKHBhdGggPT4ge1xuICAgICAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXlxcLi8sIFwiXCIpO1xuICAgICAgICAgICAgY29uc3QgZm9ybVZhbHVlID0gX2dldChmb3JtRGF0YSwgcGF0aCk7XG4gICAgICAgICAgICAvLyBhZGRzIHBhdGggdG8gZmllbGROYW1lcyBpZiBpdCBwb2ludHMgdG8gYSB2YWx1ZVxuICAgICAgICAgICAgLy8gb3IgYW4gZW1wdHkgb2JqZWN0L2FycmF5XG4gICAgICAgICAgICBpZiAodHlwZW9mIGZvcm1WYWx1ZSAhPT0gXCJvYmplY3RcIiB8fCBfaXNFbXB0eShmb3JtVmFsdWUpKSB7XG4gICAgICAgICAgICAgIGFjYy5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfTtcblxuICAgIHJldHVybiBnZXRBbGxQYXRocyhwYXRoU2NoZW1hKTtcbiAgfTtcblxuICBvbkNoYW5nZSA9IChmb3JtRGF0YSwgbmV3RXJyb3JTY2hlbWEpID0+IHtcbiAgICBpZiAoaXNPYmplY3QoZm9ybURhdGEpIHx8IEFycmF5LmlzQXJyYXkoZm9ybURhdGEpKSB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHRoaXMuZ2V0U3RhdGVGcm9tUHJvcHModGhpcy5wcm9wcywgZm9ybURhdGEpO1xuICAgICAgZm9ybURhdGEgPSBuZXdTdGF0ZS5mb3JtRGF0YTtcbiAgICB9XG4gICAgY29uc3QgbXVzdFZhbGlkYXRlID0gIXRoaXMucHJvcHMubm9WYWxpZGF0ZSAmJiB0aGlzLnByb3BzLmxpdmVWYWxpZGF0ZTtcbiAgICBsZXQgc3RhdGUgPSB7IGZvcm1EYXRhIH07XG4gICAgbGV0IG5ld0Zvcm1EYXRhID0gZm9ybURhdGE7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbWl0RXh0cmFEYXRhID09PSB0cnVlICYmIHRoaXMucHJvcHMubGl2ZU9taXQgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IHJldHJpZXZlZFNjaGVtYSA9IHJldHJpZXZlU2NoZW1hKFxuICAgICAgICB0aGlzLnN0YXRlLnNjaGVtYSxcbiAgICAgICAgdGhpcy5zdGF0ZS5zY2hlbWEsXG4gICAgICAgIGZvcm1EYXRhXG4gICAgICApO1xuICAgICAgY29uc3QgcGF0aFNjaGVtYSA9IHRvUGF0aFNjaGVtYShcbiAgICAgICAgcmV0cmlldmVkU2NoZW1hLFxuICAgICAgICBcIlwiLFxuICAgICAgICB0aGlzLnN0YXRlLnNjaGVtYSxcbiAgICAgICAgZm9ybURhdGFcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGZpZWxkTmFtZXMgPSB0aGlzLmdldEZpZWxkTmFtZXMocGF0aFNjaGVtYSwgZm9ybURhdGEpO1xuXG4gICAgICBuZXdGb3JtRGF0YSA9IHRoaXMuZ2V0VXNlZEZvcm1EYXRhKGZvcm1EYXRhLCBmaWVsZE5hbWVzKTtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBmb3JtRGF0YTogbmV3Rm9ybURhdGEsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChtdXN0VmFsaWRhdGUpIHtcbiAgICAgIGxldCBzY2hlbWFWYWxpZGF0aW9uID0gdGhpcy52YWxpZGF0ZShuZXdGb3JtRGF0YSk7XG4gICAgICBsZXQgZXJyb3JzID0gc2NoZW1hVmFsaWRhdGlvbi5lcnJvcnM7XG4gICAgICBsZXQgZXJyb3JTY2hlbWEgPSBzY2hlbWFWYWxpZGF0aW9uLmVycm9yU2NoZW1hO1xuICAgICAgY29uc3Qgc2NoZW1hVmFsaWRhdGlvbkVycm9ycyA9IGVycm9ycztcbiAgICAgIGNvbnN0IHNjaGVtYVZhbGlkYXRpb25FcnJvclNjaGVtYSA9IGVycm9yU2NoZW1hO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZXh0cmFFcnJvcnMpIHtcbiAgICAgICAgZXJyb3JTY2hlbWEgPSBtZXJnZU9iamVjdHMoXG4gICAgICAgICAgZXJyb3JTY2hlbWEsXG4gICAgICAgICAgdGhpcy5wcm9wcy5leHRyYUVycm9ycyxcbiAgICAgICAgICAhIVwiY29uY2F0IGFycmF5c1wiXG4gICAgICAgICk7XG4gICAgICAgIGVycm9ycyA9IHRvRXJyb3JMaXN0KGVycm9yU2NoZW1hKTtcbiAgICAgIH1cbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBmb3JtRGF0YTogbmV3Rm9ybURhdGEsXG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgZXJyb3JTY2hlbWEsXG4gICAgICAgIHNjaGVtYVZhbGlkYXRpb25FcnJvcnMsXG4gICAgICAgIHNjaGVtYVZhbGlkYXRpb25FcnJvclNjaGVtYSxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICghdGhpcy5wcm9wcy5ub1ZhbGlkYXRlICYmIG5ld0Vycm9yU2NoZW1hKSB7XG4gICAgICBjb25zdCBlcnJvclNjaGVtYSA9IHRoaXMucHJvcHMuZXh0cmFFcnJvcnNcbiAgICAgICAgPyBtZXJnZU9iamVjdHMoXG4gICAgICAgICAgICBuZXdFcnJvclNjaGVtYSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZXh0cmFFcnJvcnMsXG4gICAgICAgICAgICAhIVwiY29uY2F0IGFycmF5c1wiXG4gICAgICAgICAgKVxuICAgICAgICA6IG5ld0Vycm9yU2NoZW1hO1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIGZvcm1EYXRhOiBuZXdGb3JtRGF0YSxcbiAgICAgICAgZXJyb3JTY2hlbWE6IGVycm9yU2NoZW1hLFxuICAgICAgICBlcnJvcnM6IHRvRXJyb3JMaXN0KGVycm9yU2NoZW1hKSxcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICBzdGF0ZSxcbiAgICAgICgpID0+IHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnN0YXRlKVxuICAgICk7XG4gIH07XG5cbiAgb25CbHVyID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKC4uLmFyZ3MpO1xuICAgIH1cbiAgfTtcblxuICBvbkZvY3VzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRm9jdXMoLi4uYXJncyk7XG4gICAgfVxuICB9O1xuXG4gIG9uU3VibWl0ID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICBsZXQgbmV3Rm9ybURhdGEgPSB0aGlzLnN0YXRlLmZvcm1EYXRhO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub21pdEV4dHJhRGF0YSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgcmV0cmlldmVkU2NoZW1hID0gcmV0cmlldmVTY2hlbWEoXG4gICAgICAgIHRoaXMuc3RhdGUuc2NoZW1hLFxuICAgICAgICB0aGlzLnN0YXRlLnNjaGVtYSxcbiAgICAgICAgbmV3Rm9ybURhdGFcbiAgICAgICk7XG4gICAgICBjb25zdCBwYXRoU2NoZW1hID0gdG9QYXRoU2NoZW1hKFxuICAgICAgICByZXRyaWV2ZWRTY2hlbWEsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIHRoaXMuc3RhdGUuc2NoZW1hLFxuICAgICAgICBuZXdGb3JtRGF0YVxuICAgICAgKTtcblxuICAgICAgY29uc3QgZmllbGROYW1lcyA9IHRoaXMuZ2V0RmllbGROYW1lcyhwYXRoU2NoZW1hLCBuZXdGb3JtRGF0YSk7XG5cbiAgICAgIG5ld0Zvcm1EYXRhID0gdGhpcy5nZXRVc2VkRm9ybURhdGEobmV3Rm9ybURhdGEsIGZpZWxkTmFtZXMpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5wcm9wcy5ub1ZhbGlkYXRlKSB7XG4gICAgICBsZXQgc2NoZW1hVmFsaWRhdGlvbiA9IHRoaXMudmFsaWRhdGUobmV3Rm9ybURhdGEpO1xuICAgICAgbGV0IGVycm9ycyA9IHNjaGVtYVZhbGlkYXRpb24uZXJyb3JzO1xuICAgICAgbGV0IGVycm9yU2NoZW1hID0gc2NoZW1hVmFsaWRhdGlvbi5lcnJvclNjaGVtYTtcbiAgICAgIGNvbnN0IHNjaGVtYVZhbGlkYXRpb25FcnJvcnMgPSBlcnJvcnM7XG4gICAgICBjb25zdCBzY2hlbWFWYWxpZGF0aW9uRXJyb3JTY2hlbWEgPSBlcnJvclNjaGVtYTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZXh0cmFFcnJvcnMpIHtcbiAgICAgICAgICBlcnJvclNjaGVtYSA9IG1lcmdlT2JqZWN0cyhcbiAgICAgICAgICAgIGVycm9yU2NoZW1hLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5leHRyYUVycm9ycyxcbiAgICAgICAgICAgICEhXCJjb25jYXQgYXJyYXlzXCJcbiAgICAgICAgICApO1xuICAgICAgICAgIGVycm9ycyA9IHRvRXJyb3JMaXN0KGVycm9yU2NoZW1hKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVycm9ycyxcbiAgICAgICAgICAgIGVycm9yU2NoZW1hLFxuICAgICAgICAgICAgc2NoZW1hVmFsaWRhdGlvbkVycm9ycyxcbiAgICAgICAgICAgIHNjaGVtYVZhbGlkYXRpb25FcnJvclNjaGVtYSxcbiAgICAgICAgICB9LFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkVycm9yKGVycm9ycyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRm9ybSB2YWxpZGF0aW9uIGZhaWxlZFwiLCBlcnJvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZXJlIGFyZSBubyBlcnJvcnMgZ2VuZXJhdGVkIHRocm91Z2ggc2NoZW1hIHZhbGlkYXRpb24uXG4gICAgLy8gQ2hlY2sgZm9yIHVzZXIgcHJvdmlkZWQgZXJyb3JzIGFuZCB1cGRhdGUgc3RhdGUgYWNjb3JkaW5nbHkuXG4gICAgbGV0IGVycm9yU2NoZW1hO1xuICAgIGxldCBlcnJvcnM7XG4gICAgaWYgKHRoaXMucHJvcHMuZXh0cmFFcnJvcnMpIHtcbiAgICAgIGVycm9yU2NoZW1hID0gdGhpcy5wcm9wcy5leHRyYUVycm9ycztcbiAgICAgIGVycm9ycyA9IHRvRXJyb3JMaXN0KGVycm9yU2NoZW1hKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3JTY2hlbWEgPSB7fTtcbiAgICAgIGVycm9ycyA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIGZvcm1EYXRhOiBuZXdGb3JtRGF0YSxcbiAgICAgICAgZXJyb3JzOiBlcnJvcnMsXG4gICAgICAgIGVycm9yU2NoZW1hOiBlcnJvclNjaGVtYSxcbiAgICAgICAgc2NoZW1hVmFsaWRhdGlvbkVycm9yczogW10sXG4gICAgICAgIHNjaGVtYVZhbGlkYXRpb25FcnJvclNjaGVtYToge30sXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblN1Ym1pdCkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25TdWJtaXQoXG4gICAgICAgICAgICB7IC4uLnRoaXMuc3RhdGUsIGZvcm1EYXRhOiBuZXdGb3JtRGF0YSwgc3RhdHVzOiBcInN1Ym1pdHRlZFwiIH0sXG4gICAgICAgICAgICBldmVudFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIGdldFJlZ2lzdHJ5KCkge1xuICAgIC8vIEZvciBCQywgYWNjZXB0IHBhc3NlZCBTY2hlbWFGaWVsZCBhbmQgVGl0bGVGaWVsZCBwcm9wcyBhbmQgcGFzcyB0aGVtIHRvXG4gICAgLy8gdGhlIFwiZmllbGRzXCIgcmVnaXN0cnkgb25lLlxuICAgIGNvbnN0IHsgZmllbGRzLCB3aWRnZXRzIH0gPSBnZXREZWZhdWx0UmVnaXN0cnkoKTtcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGRzOiB7IC4uLmZpZWxkcywgLi4udGhpcy5wcm9wcy5maWVsZHMgfSxcbiAgICAgIHdpZGdldHM6IHsgLi4ud2lkZ2V0cywgLi4udGhpcy5wcm9wcy53aWRnZXRzIH0sXG4gICAgICBBcnJheUZpZWxkVGVtcGxhdGU6IHRoaXMucHJvcHMuQXJyYXlGaWVsZFRlbXBsYXRlLFxuICAgICAgT2JqZWN0RmllbGRUZW1wbGF0ZTogdGhpcy5wcm9wcy5PYmplY3RGaWVsZFRlbXBsYXRlLFxuICAgICAgRmllbGRUZW1wbGF0ZTogdGhpcy5wcm9wcy5GaWVsZFRlbXBsYXRlLFxuICAgICAgZGVmaW5pdGlvbnM6IHRoaXMucHJvcHMuc2NoZW1hLmRlZmluaXRpb25zIHx8IHt9LFxuICAgICAgcm9vdFNjaGVtYTogdGhpcy5wcm9wcy5zY2hlbWEsXG4gICAgICBmb3JtQ29udGV4dDogdGhpcy5wcm9wcy5mb3JtQ29udGV4dCB8fCB7fSxcbiAgICB9O1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIGlmICh0aGlzLmZvcm1FbGVtZW50KSB7XG4gICAgICB0aGlzLmZvcm1FbGVtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudChcInN1Ym1pdFwiLCB7XG4gICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaWQsXG4gICAgICBpZFByZWZpeCxcbiAgICAgIGlkU2VwYXJhdG9yLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgdGFnTmFtZSxcbiAgICAgIG5hbWUsXG4gICAgICBtZXRob2QsXG4gICAgICB0YXJnZXQsXG4gICAgICBhY3Rpb24sXG4gICAgICBhdXRvY29tcGxldGU6IGRlcHJlY2F0ZWRBdXRvY29tcGxldGUsXG4gICAgICBhdXRvQ29tcGxldGU6IGN1cnJlbnRBdXRvQ29tcGxldGUsXG4gICAgICBlbmN0eXBlLFxuICAgICAgYWNjZXB0Y2hhcnNldCxcbiAgICAgIG5vSHRtbDVWYWxpZGF0ZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcmVhZG9ubHksXG4gICAgICBmb3JtQ29udGV4dCxcbiAgICAgIC8qKlxuICAgICAgICogX2ludGVybmFsRm9ybVdyYXBwZXIgaXMgY3VycmVudGx5IHVzZWQgYnkgdGhlIG1hdGVyaWFsLXVpIGFuZCBzZW1hbnRpYy11aSB0aGVtZXMgdG8gcHJvdmlkZSBhIGN1c3RvbSB3cmFwcGVyXG4gICAgICAgKiBhcm91bmQgYDxGb3JtIC8+YCB0aGF0IHN1cHBvcnRzIHRoZSBwcm9wZXIgcmVuZGVyaW5nIG9mIHRob3NlIHRoZW1lcy4gVG8gdXNlIHRoaXMgcHJvcCwgb25lIG11c3QgcGFzcyBhXG4gICAgICAgKiBjb21wb25lbnQgdGhhdCB0YWtlcyB0d28gcHJvcHM6IGBjaGlsZHJlbmAgYW5kIGBhc2AuIFRoYXQgY29tcG9uZW50LCBhdCBtaW5pbXVtLCBzaG91bGQgcmVuZGVyIHRoZSBgY2hpbGRyZW5gXG4gICAgICAgKiBpbnNpZGUgb2YgYSA8Zm9ybSAvPiB0YWcgdW5sZXNzIGBhc2AgaXMgcHJvdmlkZWQsIGluIHdoaWNoIGNhc2UsIHVzZSB0aGUgYGFzYCBwcm9wIGluIHBsYWNlIG9mIGA8Zm9ybSAvPmAuXG4gICAgICAgKiBpLmUuOlxuICAgICAgICogYGBgXG4gICAgICAgKiBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRlcm5hbEZvcm0oeyBjaGlsZHJlbiwgYXN9KSB7XG4gICAgICAgKiAgIGNvbnN0IEZvcm1UYWcgPSBhcyB8fCAnZm9ybSc7XG4gICAgICAgKiAgIHJldHVybiA8Rm9ybVRhZz57Y2hpbGRyZW59PC9Gb3JtVGFnPjtcbiAgICAgICAqIH1cbiAgICAgICAqIGBgYFxuICAgICAgICovXG4gICAgICBfaW50ZXJuYWxGb3JtV3JhcHBlcixcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHsgc2NoZW1hLCB1aVNjaGVtYSwgZm9ybURhdGEsIGVycm9yU2NoZW1hLCBpZFNjaGVtYSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCByZWdpc3RyeSA9IHRoaXMuZ2V0UmVnaXN0cnkoKTtcbiAgICBjb25zdCBfU2NoZW1hRmllbGQgPSByZWdpc3RyeS5maWVsZHMuU2NoZW1hRmllbGQ7XG4gICAgLy8gVGhlIGBzZW1hbnRpYy11aWAgYW5kIGBtYXRlcmlhbC11aWAgdGhlbWVzIGhhdmUgYF9pbnRlcm5hbEZvcm1XcmFwcGVyYHMgdGhhdCB0YWtlIGFuIGBhc2AgcHJvcCB0aGF0IGlzIHRoZVxuICAgIC8vIFByb3BUeXBlcy5lbGVtZW50VHlwZSB0byB1c2UgZm9yIHRoZSBpbm5lciB0YWcgc28gd2UnbGwgbmVlZCB0byBwYXNzIGB0YWdOYW1lYCBhbG9uZyBpZiBpdCBpcyBwcm92aWRlZC5cbiAgICAvLyBOT1RFLCB0aGUgYGFzYCBwcm9wIGlzIG5hdGl2ZSB0byBgc2VtYW50aWMtdWlgIGFuZCBpcyBlbXVsYXRlZCBpbiB0aGUgYG1hdGVyaWFsLXVpYCB0aGVtZVxuICAgIGNvbnN0IGFzID0gX2ludGVybmFsRm9ybVdyYXBwZXIgPyB0YWdOYW1lIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IEZvcm1UYWcgPSBfaW50ZXJuYWxGb3JtV3JhcHBlciB8fCB0YWdOYW1lIHx8IFwiZm9ybVwiO1xuICAgIGlmIChkZXByZWNhdGVkQXV0b2NvbXBsZXRlKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIFwiVXNpbmcgYXV0b2NvbXBsZXRlIHByb3BlcnR5IG9mIEZvcm0gaXMgZGVwcmVjYXRlZCwgdXNlIGF1dG9Db21wbGV0ZSBpbnN0ZWFkLlwiXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBhdXRvQ29tcGxldGUgPSBjdXJyZW50QXV0b0NvbXBsZXRlXG4gICAgICA/IGN1cnJlbnRBdXRvQ29tcGxldGVcbiAgICAgIDogZGVwcmVjYXRlZEF1dG9jb21wbGV0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybVRhZ1xuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZSA/IGNsYXNzTmFtZSA6IFwicmpzZlwifVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIG1ldGhvZD17bWV0aG9kfVxuICAgICAgICB0YXJnZXQ9e3RhcmdldH1cbiAgICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICAgIGF1dG9Db21wbGV0ZT17YXV0b0NvbXBsZXRlfVxuICAgICAgICBlbmNUeXBlPXtlbmN0eXBlfVxuICAgICAgICBhY2NlcHRDaGFyc2V0PXthY2NlcHRjaGFyc2V0fVxuICAgICAgICBub1ZhbGlkYXRlPXtub0h0bWw1VmFsaWRhdGV9XG4gICAgICAgIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fVxuICAgICAgICBhcz17YXN9XG4gICAgICAgIHJlZj17Zm9ybSA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JtRWxlbWVudCA9IGZvcm07XG4gICAgICAgIH19PlxuICAgICAgICB7dGhpcy5yZW5kZXJFcnJvcnMoKX1cbiAgICAgICAgPF9TY2hlbWFGaWVsZFxuICAgICAgICAgIHNjaGVtYT17c2NoZW1hfVxuICAgICAgICAgIHVpU2NoZW1hPXt1aVNjaGVtYX1cbiAgICAgICAgICBlcnJvclNjaGVtYT17ZXJyb3JTY2hlbWF9XG4gICAgICAgICAgaWRTY2hlbWE9e2lkU2NoZW1hfVxuICAgICAgICAgIGlkUHJlZml4PXtpZFByZWZpeH1cbiAgICAgICAgICBpZFNlcGFyYXRvcj17aWRTZXBhcmF0b3J9XG4gICAgICAgICAgZm9ybUNvbnRleHQ9e2Zvcm1Db250ZXh0fVxuICAgICAgICAgIGZvcm1EYXRhPXtmb3JtRGF0YX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICBvbkJsdXI9e3RoaXMub25CbHVyfVxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICByZWdpc3RyeT17cmVnaXN0cnl9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHJlYWRvbmx5PXtyZWFkb25seX1cbiAgICAgICAgLz5cbiAgICAgICAge2NoaWxkcmVuID8gKFxuICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPlxuICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtVGFnPlxuICAgICk7XG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBGb3JtLnByb3BUeXBlcyA9IHtcbiAgICBzY2hlbWE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB1aVNjaGVtYTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBmb3JtRGF0YTogUHJvcFR5cGVzLmFueSxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVhZG9ubHk6IFByb3BUeXBlcy5ib29sLFxuICAgIHdpZGdldHM6IFByb3BUeXBlcy5vYmplY3RPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMub2JqZWN0XSlcbiAgICApLFxuICAgIGZpZWxkczogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5lbGVtZW50VHlwZSksXG4gICAgQXJyYXlGaWVsZFRlbXBsYXRlOiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG4gICAgT2JqZWN0RmllbGRUZW1wbGF0ZTogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICAgIEZpZWxkVGVtcGxhdGU6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgICBFcnJvckxpc3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkVycm9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzaG93RXJyb3JMaXN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRhZ05hbWU6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgICBfaW50ZXJuYWxGb3JtV3JhcHBlcjogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbWV0aG9kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRhcmdldDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYXV0b2NvbXBsZXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGF1dG9Db21wbGV0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBlbmN0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjY2VwdGNoYXJzZXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbm9WYWxpZGF0ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgbm9IdG1sNVZhbGlkYXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsaXZlVmFsaWRhdGU6IFByb3BUeXBlcy5ib29sLFxuICAgIHZhbGlkYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0cmFuc2Zvcm1FcnJvcnM6IFByb3BUeXBlcy5mdW5jLFxuICAgIGZvcm1Db250ZXh0OiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGN1c3RvbUZvcm1hdHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgYWRkaXRpb25hbE1ldGFTY2hlbWFzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICBvbWl0RXh0cmFEYXRhOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBleHRyYUVycm9yczogUHJvcFR5cGVzLm9iamVjdCxcbiAgfTtcbn1cbiJdfQ==