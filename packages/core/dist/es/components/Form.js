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

import React, { Component } from "react";
import PropTypes from "prop-types";
import _pick from "lodash/pick";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import { default as DefaultErrorList } from "./ErrorList";
import { getDefaultFormState, retrieveSchema, shouldRender, toIdSchema, getDefaultRegistry, deepEquals, toPathSchema, isObject } from "../utils";
import validateFormData, { toErrorList } from "../validate";
import { mergeObjects } from "../utils";

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

      var data = _pick(formData, fields);

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

              var formValue = _get(formData, path); // adds path to fieldNames if it points to a value
              // or an empty object/array


              if (_typeof(formValue) !== "object" || _isEmpty(formValue)) {
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
      if (isObject(formData) || Array.isArray(formData)) {
        var newState = _this.getStateFromProps(_this.props, formData);

        formData = newState.formData;
      }

      var mustValidate = !_this.props.noValidate && _this.props.liveValidate;
      var state = {
        formData: formData
      };
      var newFormData = formData;

      if (_this.props.omitExtraData === true && _this.props.liveOmit === true) {
        var retrievedSchema = retrieveSchema(_this.state.schema, _this.state.schema, formData);
        var pathSchema = toPathSchema(retrievedSchema, "", _this.state.schema, formData);

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
          errorSchema = mergeObjects(errorSchema, _this.props.extraErrors, !!"concat arrays");
          errors = toErrorList(errorSchema);
        }

        state = {
          formData: newFormData,
          errors: errors,
          errorSchema: errorSchema,
          schemaValidationErrors: schemaValidationErrors,
          schemaValidationErrorSchema: schemaValidationErrorSchema
        };
      } else if (!_this.props.noValidate && newErrorSchema) {
        var _errorSchema = _this.props.extraErrors ? mergeObjects(newErrorSchema, _this.props.extraErrors, !!"concat arrays") : newErrorSchema;

        state = {
          formData: newFormData,
          errorSchema: _errorSchema,
          errors: toErrorList(_errorSchema)
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
        var retrievedSchema = retrieveSchema(_this.state.schema, _this.state.schema, newFormData);
        var pathSchema = toPathSchema(retrievedSchema, "", _this.state.schema, newFormData);

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
            _errorSchema2 = mergeObjects(_errorSchema2, _this.props.extraErrors, !!"concat arrays");
            _errors = toErrorList(_errorSchema2);
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
        errors = toErrorList(errorSchema);
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

    if (_this.props.onChange && !deepEquals(_this.state.formData, _this.props.formData)) {
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
      if (this.props.onChange && !deepEquals(this.props.formData, this.state.formData) && !deepEquals(prevState.formData, this.state.formData) && !deepEquals(this.props.formData, prevProps.formData)) {
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
      var formData = getDefaultFormState(schema, inputFormData, rootSchema);
      var retrievedSchema = retrieveSchema(schema, rootSchema, formData);
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
        errorSchema = mergeObjects(errorSchema, props.extraErrors, !!"concat arrays");
        errors = toErrorList(errorSchema);
      }

      var idSchema = toIdSchema(retrievedSchema, uiSchema["ui:rootFieldId"], rootSchema, formData, props.idPrefix, props.idSeparator);
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
      return shouldRender(this, nextProps, nextState);
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

      var resolvedSchema = retrieveSchema(schema, rootSchema, formData);
      return validateFormData(formData, resolvedSchema, validate, transformErrors, additionalMetaSchemas, customFormats);
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
        return React.createElement(ErrorList, {
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
      var _getDefaultRegistry = getDefaultRegistry(),
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
      return React.createElement(FormTag, {
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
      }, this.renderErrors(), React.createElement(_SchemaField, {
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
      }), children ? children : React.createElement("div", null, React.createElement("button", {
        type: "submit",
        className: "btn btn-info"
      }, "Submit")));
    }
  }]);

  return Form;
}(Component);

_defineProperty(Form, "defaultProps", {
  uiSchema: {},
  noValidate: false,
  liveValidate: false,
  disabled: false,
  readonly: false,
  noHtml5Validate: false,
  ErrorList: DefaultErrorList,
  omitExtraData: false
});

export { Form as default };

if (process.env.NODE_ENV !== "production") {
  Form.propTypes = {
    schema: PropTypes.object.isRequired,
    uiSchema: PropTypes.object,
    formData: PropTypes.any,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    widgets: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])),
    fields: PropTypes.objectOf(PropTypes.elementType),
    ArrayFieldTemplate: PropTypes.elementType,
    ObjectFieldTemplate: PropTypes.elementType,
    FieldTemplate: PropTypes.elementType,
    ErrorList: PropTypes.func,
    onChange: PropTypes.func,
    onError: PropTypes.func,
    showErrorList: PropTypes.bool,
    onSubmit: PropTypes.func,
    id: PropTypes.string,
    className: PropTypes.string,
    tagName: PropTypes.elementType,
    _internalFormWrapper: PropTypes.elementType,
    name: PropTypes.string,
    method: PropTypes.string,
    target: PropTypes.string,
    action: PropTypes.string,
    autocomplete: PropTypes.string,
    autoComplete: PropTypes.string,
    enctype: PropTypes.string,
    acceptcharset: PropTypes.string,
    noValidate: PropTypes.bool,
    noHtml5Validate: PropTypes.bool,
    liveValidate: PropTypes.bool,
    validate: PropTypes.func,
    transformErrors: PropTypes.func,
    formContext: PropTypes.object,
    customFormats: PropTypes.object,
    additionalMetaSchemas: PropTypes.arrayOf(PropTypes.object),
    omitExtraData: PropTypes.bool,
    extraErrors: PropTypes.object
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJfcGljayIsIl9nZXQiLCJfaXNFbXB0eSIsImRlZmF1bHQiLCJEZWZhdWx0RXJyb3JMaXN0IiwiZ2V0RGVmYXVsdEZvcm1TdGF0ZSIsInJldHJpZXZlU2NoZW1hIiwic2hvdWxkUmVuZGVyIiwidG9JZFNjaGVtYSIsImdldERlZmF1bHRSZWdpc3RyeSIsImRlZXBFcXVhbHMiLCJ0b1BhdGhTY2hlbWEiLCJpc09iamVjdCIsInZhbGlkYXRlRm9ybURhdGEiLCJ0b0Vycm9yTGlzdCIsIm1lcmdlT2JqZWN0cyIsIkZvcm0iLCJwcm9wcyIsImZvcm1EYXRhIiwiZmllbGRzIiwibGVuZ3RoIiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJwYXRoU2NoZW1hIiwiZ2V0QWxsUGF0aHMiLCJfb2JqIiwiYWNjIiwicGF0aHMiLCJmb3JFYWNoIiwibmV3UGF0aHMiLCJwYXRoIiwiX19yanNmX2FkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiJG5hbWUiLCJwdXNoIiwicmVwbGFjZSIsImZvcm1WYWx1ZSIsIm5ld0Vycm9yU2NoZW1hIiwibmV3U3RhdGUiLCJnZXRTdGF0ZUZyb21Qcm9wcyIsIm11c3RWYWxpZGF0ZSIsIm5vVmFsaWRhdGUiLCJsaXZlVmFsaWRhdGUiLCJzdGF0ZSIsIm5ld0Zvcm1EYXRhIiwib21pdEV4dHJhRGF0YSIsImxpdmVPbWl0IiwicmV0cmlldmVkU2NoZW1hIiwic2NoZW1hIiwiZmllbGROYW1lcyIsImdldEZpZWxkTmFtZXMiLCJnZXRVc2VkRm9ybURhdGEiLCJzY2hlbWFWYWxpZGF0aW9uIiwidmFsaWRhdGUiLCJlcnJvcnMiLCJlcnJvclNjaGVtYSIsInNjaGVtYVZhbGlkYXRpb25FcnJvcnMiLCJzY2hlbWFWYWxpZGF0aW9uRXJyb3JTY2hlbWEiLCJleHRyYUVycm9ycyIsInNldFN0YXRlIiwib25DaGFuZ2UiLCJvbkJsdXIiLCJvbkZvY3VzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJwZXJzaXN0Iiwib25FcnJvciIsImNvbnNvbGUiLCJlcnJvciIsIm9uU3VibWl0Iiwic3RhdHVzIiwiZm9ybUVsZW1lbnQiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJpbnB1dEZvcm1EYXRhIiwidWlTY2hlbWEiLCJlZGl0Iiwicm9vdFNjaGVtYSIsImN1c3RvbUZvcm1hdHMiLCJhZGRpdGlvbmFsTWV0YVNjaGVtYXMiLCJnZXRDdXJyZW50RXJyb3JzIiwiY3VycmVudEVycm9ycyIsImlkU2NoZW1hIiwiaWRQcmVmaXgiLCJpZFNlcGFyYXRvciIsInRyYW5zZm9ybUVycm9ycyIsImdldFJlZ2lzdHJ5IiwicmVzb2x2ZWRTY2hlbWEiLCJFcnJvckxpc3QiLCJzaG93RXJyb3JMaXN0IiwiZm9ybUNvbnRleHQiLCJ3aWRnZXRzIiwiQXJyYXlGaWVsZFRlbXBsYXRlIiwiT2JqZWN0RmllbGRUZW1wbGF0ZSIsIkZpZWxkVGVtcGxhdGUiLCJkZWZpbml0aW9ucyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImNhbmNlbGFibGUiLCJjaGlsZHJlbiIsImlkIiwiY2xhc3NOYW1lIiwidGFnTmFtZSIsIm5hbWUiLCJtZXRob2QiLCJhY3Rpb24iLCJkZXByZWNhdGVkQXV0b2NvbXBsZXRlIiwiYXV0b2NvbXBsZXRlIiwiY3VycmVudEF1dG9Db21wbGV0ZSIsImF1dG9Db21wbGV0ZSIsImVuY3R5cGUiLCJhY2NlcHRjaGFyc2V0Iiwibm9IdG1sNVZhbGlkYXRlIiwiZGlzYWJsZWQiLCJyZWFkb25seSIsIl9pbnRlcm5hbEZvcm1XcmFwcGVyIiwicmVnaXN0cnkiLCJfU2NoZW1hRmllbGQiLCJTY2hlbWFGaWVsZCIsImFzIiwidW5kZWZpbmVkIiwiRm9ybVRhZyIsIndhcm4iLCJmb3JtIiwicmVuZGVyRXJyb3JzIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImFueSIsImJvb2wiLCJvYmplY3RPZiIsIm9uZU9mVHlwZSIsImZ1bmMiLCJlbGVtZW50VHlwZSIsInN0cmluZyIsImFycmF5T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLGFBQWxCO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixZQUFqQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsZ0JBQXJCO0FBRUEsU0FBU0MsT0FBTyxJQUFJQyxnQkFBcEIsUUFBNEMsYUFBNUM7QUFDQSxTQUNFQyxtQkFERixFQUVFQyxjQUZGLEVBR0VDLFlBSEYsRUFJRUMsVUFKRixFQUtFQyxrQkFMRixFQU1FQyxVQU5GLEVBT0VDLFlBUEYsRUFRRUMsUUFSRixRQVNPLFVBVFA7QUFVQSxPQUFPQyxnQkFBUCxJQUEyQkMsV0FBM0IsUUFBOEMsYUFBOUM7QUFDQSxTQUFTQyxZQUFULFFBQTZCLFVBQTdCOztJQUVxQkMsSTs7Ozs7QUFZbkIsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEVBQU1BLEtBQU47O0FBRGlCLHNFQXlKRCxVQUFDQyxRQUFELEVBQVdDLE1BQVgsRUFBc0I7QUFDdEM7QUFDQSxVQUFJQSxNQUFNLENBQUNDLE1BQVAsS0FBa0IsQ0FBbEIsSUFBdUIsUUFBT0YsUUFBUCxNQUFvQixRQUEvQyxFQUF5RDtBQUN2RCxlQUFPQSxRQUFQO0FBQ0Q7O0FBRUQsVUFBSUcsSUFBSSxHQUFHckIsS0FBSyxDQUFDa0IsUUFBRCxFQUFXQyxNQUFYLENBQWhCOztBQUNBLFVBQUlHLEtBQUssQ0FBQ0MsT0FBTixDQUFjTCxRQUFkLENBQUosRUFBNkI7QUFDM0IsZUFBT00sTUFBTSxDQUFD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LFlBQVksRUFBRXRILFNBQVMsQ0FBQ2tKLE1BM0JUO0FBNEJmM0IsSUFBQUEsT0FBTyxFQUFFdkgsU0FBUyxDQUFDa0osTUE1Qko7QUE2QmYxQixJQUFBQSxhQUFhLEVBQUV4SCxTQUFTLENBQUNrSixNQTdCVjtBQThCZnBHLElBQUFBLFVBQVUsRUFBRTlDLFNBQVMsQ0FBQzZJLElBOUJQO0FBK0JmcEIsSUFBQUEsZUFBZSxFQUFFekgsU0FBUyxDQUFDNkksSUEvQlo7QUFnQ2Y5RixJQUFBQSxZQUFZLEVBQUUvQyxTQUFTLENBQUM2SSxJQWhDVDtBQWlDZm5GLElBQUFBLFFBQVEsRUFBRTFELFNBQVMsQ0FBQ2dKLElBakNMO0FBa0NmbEQsSUFBQUEsZUFBZSxFQUFFOUYsU0FBUyxDQUFDZ0osSUFsQ1o7QUFtQ2Y3QyxJQUFBQSxXQUFXLEVBQUVuRyxTQUFTLENBQUMwSSxNQW5DUjtBQW9DZm5ELElBQUFBLGFBQWEsRUFBRXZGLFNBQVMsQ0FBQzBJLE1BcENWO0FBcUNmbEQsSUFBQUEscUJBQXFCLEVBQUV4RixTQUFTLENBQUNtSixPQUFWLENBQWtCbkosU0FBUyxDQUFDMEksTUFBNUIsQ0FyQ1I7QUFzQ2Z4RixJQUFBQSxhQUFhLEVBQUVsRCxTQUFTLENBQUM2SSxJQXRDVjtBQXVDZjlFLElBQUFBLFdBQVcsRUFBRS9ELFNBQVMsQ0FBQzBJO0FBdkNSLEdBQWpCO0FBeUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IF9waWNrIGZyb20gXCJsb2Rhc2gvcGlja1wiO1xuaW1wb3J0IF9nZXQgZnJvbSBcImxvZGFzaC9nZXRcIjtcbmltcG9ydCBfaXNFbXB0eSBmcm9tIFwibG9kYXNoL2lzRW1wdHlcIjtcblxuaW1wb3J0IHsgZGVmYXVsdCBhcyBEZWZhdWx0RXJyb3JMaXN0IH0gZnJvbSBcIi4vRXJyb3JMaXN0XCI7XG5pbXBvcnQge1xuICBnZXREZWZhdWx0Rm9ybVN0YXRlLFxuICByZXRyaWV2ZVNjaGVtYSxcbiAgc2hvdWxkUmVuZGVyLFxuICB0b0lkU2NoZW1hLFxuICBnZXREZWZhdWx0UmVnaXN0cnksXG4gIGRlZXBFcXVhbHMsXG4gIHRvUGF0aFNjaGVtYSxcbiAgaXNPYmplY3QsXG59IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IHZhbGlkYXRlRm9ybURhdGEsIHsgdG9FcnJvckxpc3QgfSBmcm9tIFwiLi4vdmFsaWRhdGVcIjtcbmltcG9ydCB7IG1lcmdlT2JqZWN0cyB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB1aVNjaGVtYToge30sXG4gICAgbm9WYWxpZGF0ZTogZmFsc2UsXG4gICAgbGl2ZVZhbGlkYXRlOiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgcmVhZG9ubHk6IGZhbHNlLFxuICAgIG5vSHRtbDVWYWxpZGF0ZTogZmFsc2UsXG4gICAgRXJyb3JMaXN0OiBEZWZhdWx0RXJyb3JMaXN0LFxuICAgIG9taXRFeHRyYURhdGE6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldFN0YXRlRnJvbVByb3BzKHByb3BzLCBwcm9wcy5mb3JtRGF0YSk7XG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSAmJlxuICAgICAgIWRlZXBFcXVhbHModGhpcy5zdGF0ZS5mb3JtRGF0YSwgdGhpcy5wcm9wcy5mb3JtRGF0YSlcbiAgICApIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5zdGF0ZSk7XG4gICAgfVxuICAgIHRoaXMuZm9ybUVsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc3QgbmV4dFN0YXRlID0gdGhpcy5nZXRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIG5leHRQcm9wcy5mb3JtRGF0YSk7XG4gICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSAmJlxuICAgICAgIWRlZXBFcXVhbHModGhpcy5wcm9wcy5mb3JtRGF0YSwgdGhpcy5zdGF0ZS5mb3JtRGF0YSkgJiZcbiAgICAgICFkZWVwRXF1YWxzKHByZXZTdGF0ZS5mb3JtRGF0YSwgdGhpcy5zdGF0ZS5mb3JtRGF0YSkgJiZcbiAgICAgICFkZWVwRXF1YWxzKHRoaXMucHJvcHMuZm9ybURhdGEsIHByZXZQcm9wcy5mb3JtRGF0YSlcbiAgICApIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5zdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3RhdGVGcm9tUHJvcHMocHJvcHMsIGlucHV0Rm9ybURhdGEpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGUgfHwge307XG4gICAgY29uc3Qgc2NoZW1hID0gXCJzY2hlbWFcIiBpbiBwcm9wcyA/IHByb3BzLnNjaGVtYSA6IHRoaXMucHJvcHMuc2NoZW1hO1xuICAgIGNvbnN0IHVpU2NoZW1hID0gXCJ1aVNjaGVtYVwiIGluIHByb3BzID8gcHJvcHMudWlTY2hlbWEgOiB0aGlzLnByb3BzLnVpU2NoZW1hO1xuICAgIGNvbnN0IGVkaXQgPSB0eXBlb2YgaW5wdXRGb3JtRGF0YSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICBjb25zdCBsaXZlVmFsaWRhdGUgPVxuICAgICAgXCJsaXZlVmFsaWRhdGVcIiBpbiBwcm9wcyA/IHByb3BzLmxpdmVWYWxpZGF0ZSA6IHRoaXMucHJvcHMubGl2ZVZhbGlkYXRlO1xuICAgIGNvbnN0IG11c3RWYWxpZGF0ZSA9IGVkaXQgJiYgIXByb3BzLm5vVmFsaWRhdGUgJiYgbGl2ZVZhbGlkYXRlO1xuICAgIGNvbnN0IHJvb3RTY2hlbWEgPSBzY2hlbWE7XG4gICAgY29uc3QgZm9ybURhdGEgPSBnZXREZWZhdWx0Rm9ybVN0YXRlKHNjaGVtYSwgaW5wdXRGb3JtRGF0YSwgcm9vdFNjaGVtYSk7XG4gICAgY29uc3QgcmV0cmlldmVkU2NoZW1hID0gcmV0cmlldmVTY2hlbWEoc2NoZW1hLCByb290U2NoZW1hLCBmb3JtRGF0YSk7XG4gICAgY29uc3QgY3VzdG9tRm9ybWF0cyA9IHByb3BzLmN1c3RvbUZvcm1hdHM7XG4gICAgY29uc3QgYWRkaXRpb25hbE1ldGFTY2hlbWFzID0gcHJvcHMuYWRkaXRpb25hbE1ldGFTY2hlbWFzO1xuXG4gICAgY29uc3QgZ2V0Q3VycmVudEVycm9ycyA9ICgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5ub1ZhbGlkYXRlKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yczogW10sIGVycm9yU2NoZW1hOiB7fSB9O1xuICAgICAgfSBlbHNlIGlmICghcHJvcHMubGl2ZVZhbGlkYXRlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXJyb3JzOiBzdGF0ZS5zY2hlbWFWYWxpZGF0aW9uRXJyb3JzIHx8IFtdLFxuICAgICAgICAgIGVycm9yU2NoZW1hOiBzdGF0ZS5zY2hlbWFWYWxpZGF0aW9uRXJyb3JTY2hlbWEgfHwge30sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcnM6IHN0YXRlLmVycm9ycyB8fCBbXSxcbiAgICAgICAgZXJyb3JTY2hlbWE6IHN0YXRlLmVycm9yU2NoZW1hIHx8IHt9LFxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgbGV0IGVycm9ycyxcbiAgICAgIGVycm9yU2NoZW1hLFxuICAgICAgc2NoZW1hVmFsaWRhdGlvbkVycm9ycyxcbiAgICAgIHNjaGVtYVZhbGlkYXRpb25FcnJvclNjaGVtYTtcbiAgICBpZiAobXVzdFZhbGlkYXRlKSB7XG4gICAgICBjb25zdCBzY2hlbWFWYWxpZGF0aW9uID0gdGhpcy52YWxpZGF0ZShcbiAgICAgICAgZm9ybURhdGEsXG4gICAgICAgIHNjaGVtYSxcbiAgICAgICAgYWRkaXRpb25hbE1ldGFTY2hlbWFzLFxuICAgICAgICBjdXN0b21Gb3JtYXRzXG4gICAgICApO1xuICAgICAgZXJyb3JzID0gc2NoZW1hVmFsaWRhdGlvbi5lcnJvcnM7XG4gICAgICBlcnJvclNjaGVtYSA9IHNjaGVtYVZhbGlkYXRpb24uZXJyb3JTY2hlbWE7XG4gICAgICBzY2hlbWFWYWxpZGF0aW9uRXJyb3JzID0gZXJyb3JzO1xuICAgICAgc2NoZW1hVmFsaWRhdGlvbkVycm9yU2NoZW1hID0gZXJyb3JTY2hlbWE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRFcnJvcnMgPSBnZXRDdXJyZW50RXJyb3JzKCk7XG4gICAgICBlcnJvcnMgPSBjdXJyZW50RXJyb3JzLmVycm9ycztcbiAgICAgIGVycm9yU2NoZW1hID0gY3VycmVudEVycm9ycy5lcnJvclNjaGVtYTtcbiAgICAgIHNjaGVtYVZhbGlkYXRpb25FcnJvcnMgPSBzdGF0ZS5zY2hlbWFWYWxpZGF0aW9uRXJyb3JzO1xuICAgICAgc2NoZW1hVmFsaWRhdGlvbkVycm9yU2NoZW1hID0gc3RhdGUuc2NoZW1hVmFsaWRhdGlvbkVycm9yU2NoZW1hO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXh0cmFFcnJvcnMpIHtcbiAgICAgIGVycm9yU2NoZW1hID0gbWVyZ2VPYmplY3RzKFxuICAgICAgICBlcnJvclNjaGVtYSxcbiAgICAgICAgcHJvcHMuZXh0cmFFcnJvcnMsXG4gICAgICAgICEhXCJjb25jYXQgYXJyYXlzXCJcbiAgICAgICk7XG4gICAgICBlcnJvcnMgPSB0b0Vycm9yTGlzdChlcnJvclNjaGVtYSk7XG4gICAgfVxuICAgIGNvbnN0IGlkU2NoZW1hID0gdG9JZFNjaGVtYShcbiAgICAgIHJldHJpZXZlZFNjaGVtYSxcbiAgICAgIHVpU2NoZW1hW1widWk6cm9vdEZpZWxkSWRcIl0sXG4gICAgICByb290U2NoZW1hLFxuICAgICAgZm9ybURhdGEsXG4gICAgICBwcm9wcy5pZFByZWZpeCxcbiAgICAgIHByb3BzLmlkU2VwYXJhdG9yXG4gICAgKTtcbiAgICBjb25zdCBuZXh0U3RhdGUgPSB7XG4gICAgICBzY2hlbWEsXG4gICAgICB1aVNjaGVtYSxcbiAgICAgIGlkU2NoZW1hLFxuICAgICAgZm9ybURhdGEsXG4gICAgICBlZGl0LFxuICAgICAgZXJyb3JzLFxuICAgICAgZXJyb3JTY2hlbWEsXG4gICAgICBhZGRpdGlvbmFsTWV0YVNjaGVtYXMsXG4gICAgfTtcbiAgICBpZiAoc2NoZW1hVmFsaWRhdGlvbkVycm9ycykge1xuICAgICAgbmV4dFN0YXRlLnNjaGVtYVZhbGlkYXRpb25FcnJvcnMgPSBzY2hlbWFWYWxpZGF0aW9uRXJyb3JzO1xuICAgICAgbmV4dFN0YXRlLnNjaGVtYVZhbGlkYXRpb25FcnJvclNjaGVtYSA9IHNjaGVtYVZhbGlkYXRpb25FcnJvclNjaGVtYTtcbiAgICB9XG4gICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIHJldHVybiBzaG91bGRSZW5kZXIodGhpcywgbmV4dFByb3BzLCBuZXh0U3RhdGUpO1xuICB9XG5cbiAgdmFsaWRhdGUoXG4gICAgZm9ybURhdGEsXG4gICAgc2NoZW1hID0gdGhpcy5wcm9wcy5zY2hlbWEsXG4gICAgYWRkaXRpb25hbE1ldGFTY2hlbWFzID0gdGhpcy5wcm9wcy5hZGRpdGlvbmFsTWV0YVNjaGVtYXMsXG4gICAgY3VzdG9tRm9ybWF0cyA9IHRoaXMucHJvcHMuY3VzdG9tRm9ybWF0c1xuICApIHtcbiAgICBjb25zdCB7IHZhbGlkYXRlLCB0cmFuc2Zvcm1FcnJvcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyByb290U2NoZW1hIH0gPSB0aGlzLmdldFJlZ2lzdHJ5KCk7XG4gICAgY29uc3QgcmVzb2x2ZWRTY2hlbWEgPSByZXRyaWV2ZVNjaGVtYShzY2hlbWEsIHJvb3RTY2hlbWEsIGZvcm1EYXRhKTtcbiAgICByZXR1cm4gdmFsaWRhdGVGb3JtRGF0YShcbiAgICAgIGZvcm1EYXRhLFxuICAgICAgcmVzb2x2ZWRTY2hlbWEsXG4gICAgICB2YWxpZGF0ZSxcbiAgICAgIHRyYW5zZm9ybUVycm9ycyxcbiAgICAgIGFkZGl0aW9uYWxNZXRhU2NoZW1hcyxcbiAgICAgIGN1c3RvbUZvcm1hdHNcbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRXJyb3JzKCkge1xuICAgIGNvbnN0IHsgZXJyb3JzLCBlcnJvclNjaGVtYSwgc2NoZW1hLCB1aVNjaGVtYSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IEVycm9yTGlzdCwgc2hvd0Vycm9yTGlzdCwgZm9ybUNvbnRleHQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoZXJyb3JzLmxlbmd0aCAmJiBzaG93RXJyb3JMaXN0ICE9IGZhbHNlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RXJyb3JMaXN0XG4gICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgICAgZXJyb3JTY2hlbWE9e2Vycm9yU2NoZW1hfVxuICAgICAgICAgIHNjaGVtYT17c2NoZW1hfVxuICAgICAgICAgIHVpU2NoZW1hPXt1aVNjaGVtYX1cbiAgICAgICAgICBmb3JtQ29udGV4dD17Zm9ybUNvbnRleHR9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldFVzZWRGb3JtRGF0YSA9IChmb3JtRGF0YSwgZmllbGRzKSA9PiB7XG4gICAgLy9mb3IgdGhlIGNhc2Ugb2YgYSBzaW5nbGUgaW5wdXQgZm9ybVxuICAgIGlmIChmaWVsZHMubGVuZ3RoID09PSAwICYmIHR5cGVvZiBmb3JtRGF0YSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgIH1cblxuICAgIGxldCBkYXRhID0gX3BpY2soZm9ybURhdGEsIGZpZWxkcyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZm9ybURhdGEpKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkubWFwKGtleSA9PiBkYXRhW2tleV0pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIGdldEZpZWxkTmFtZXMgPSAocGF0aFNjaGVtYSwgZm9ybURhdGEpID0+IHtcbiAgICBjb25zdCBnZXRBbGxQYXRocyA9IChfb2JqLCBhY2MgPSBbXSwgcGF0aHMgPSBbXCJcIl0pID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKF9vYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBfb2JqW2tleV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBsZXQgbmV3UGF0aHMgPSBwYXRocy5tYXAocGF0aCA9PiBgJHtwYXRofS4ke2tleX1gKTtcbiAgICAgICAgICAvLyBJZiBhbiBvYmplY3QgaXMgbWFya2VkIHdpdGggYWRkaXRpb25hbFByb3BlcnRpZXMsIGFsbCBpdHMga2V5cyBhcmUgdmFsaWRcbiAgICAgICAgICBpZiAoX29ialtrZXldLl9fcmpzZl9hZGRpdGlvbmFsUHJvcGVydGllcyAmJiBfb2JqW2tleV0uJG5hbWUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGFjYy5wdXNoKF9vYmpba2V5XS4kbmFtZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdldEFsbFBhdGhzKF9vYmpba2V5XSwgYWNjLCBuZXdQYXRocyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCIkbmFtZVwiICYmIF9vYmpba2V5XSAhPT0gXCJcIikge1xuICAgICAgICAgIHBhdGhzLmZvckVhY2gocGF0aCA9PiB7XG4gICAgICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9eXFwuLywgXCJcIik7XG4gICAgICAgICAgICBjb25zdCBmb3JtVmFsdWUgPSBfZ2V0KGZvcm1EYXRhLCBwYXRoKTtcbiAgICAgICAgICAgIC8vIGFkZHMgcGF0aCB0byBmaWVsZE5hbWVzIGlmIGl0IHBvaW50cyB0byBhIHZhbHVlXG4gICAgICAgICAgICAvLyBvciBhbiBlbXB0eSBvYmplY3QvYXJyYXlcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZm9ybVZhbHVlICE9PSBcIm9iamVjdFwiIHx8IF9pc0VtcHR5KGZvcm1WYWx1ZSkpIHtcbiAgICAgICAgICAgICAgYWNjLnB1c2gocGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9O1xuXG4gICAgcmV0dXJuIGdldEFsbFBhdGhzKHBhdGhTY2hlbWEpO1xuICB9O1xuXG4gIG9uQ2hhbmdlID0gKGZvcm1EYXRhLCBuZXdFcnJvclNjaGVtYSkgPT4ge1xuICAgIGlmIChpc09iamVjdChmb3JtRGF0YSkgfHwgQXJyYXkuaXNBcnJheShmb3JtRGF0YSkpIHtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0gdGhpcy5nZXRTdGF0ZUZyb21Qcm9wcyh0aGlzLnByb3BzLCBmb3JtRGF0YSk7XG4gICAgICBmb3JtRGF0YSA9IG5ld1N0YXRlLmZvcm1EYXRhO1xuICAgIH1cbiAgICBjb25zdCBtdXN0VmFsaWRhdGUgPSAhdGhpcy5wcm9wcy5ub1ZhbGlkYXRlICYmIHRoaXMucHJvcHMubGl2ZVZhbGlkYXRlO1xuICAgIGxldCBzdGF0ZSA9IHsgZm9ybURhdGEgfTtcbiAgICBsZXQgbmV3Rm9ybURhdGEgPSBmb3JtRGF0YTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9taXRFeHRyYURhdGEgPT09IHRydWUgJiYgdGhpcy5wcm9wcy5saXZlT21pdCA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgcmV0cmlldmVkU2NoZW1hID0gcmV0cmlldmVTY2hlbWEoXG4gICAgICAgIHRoaXMuc3RhdGUuc2NoZW1hLFxuICAgICAgICB0aGlzLnN0YXRlLnNjaGVtYSxcbiAgICAgICAgZm9ybURhdGFcbiAgICAgICk7XG4gICAgICBjb25zdCBwYXRoU2NoZW1hID0gdG9QYXRoU2NoZW1hKFxuICAgICAgICByZXRyaWV2ZWRTY2hlbWEsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIHRoaXMuc3RhdGUuc2NoZW1hLFxuICAgICAgICBmb3JtRGF0YVxuICAgICAgKTtcblxuICAgICAgY29uc3QgZmllbGROYW1lcyA9IHRoaXMuZ2V0RmllbGROYW1lcyhwYXRoU2NoZW1hLCBmb3JtRGF0YSk7XG5cbiAgICAgIG5ld0Zvcm1EYXRhID0gdGhpcy5nZXRVc2VkRm9ybURhdGEoZm9ybURhdGEsIGZpZWxkTmFtZXMpO1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIGZvcm1EYXRhOiBuZXdGb3JtRGF0YSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKG11c3RWYWxpZGF0ZSkge1xuICAgICAgbGV0IHNjaGVtYVZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRlKG5ld0Zvcm1EYXRhKTtcbiAgICAgIGxldCBlcnJvcnMgPSBzY2hlbWFWYWxpZGF0aW9uLmVycm9ycztcbiAgICAgIGxldCBlcnJvclNjaGVtYSA9IHNjaGVtYVZhbGlkYXRpb24uZXJyb3JTY2hlbWE7XG4gICAgICBjb25zdCBzY2hlbWFWYWxpZGF0aW9uRXJyb3JzID0gZXJyb3JzO1xuICAgICAgY29uc3Qgc2NoZW1hVmFsaWRhdGlvbkVycm9yU2NoZW1hID0gZXJyb3JTY2hlbWE7XG4gICAgICBpZiAodGhpcy5wcm9wcy5leHRyYUVycm9ycykge1xuICAgICAgICBlcnJvclNjaGVtYSA9IG1lcmdlT2JqZWN0cyhcbiAgICAgICAgICBlcnJvclNjaGVtYSxcbiAgICAgICAgICB0aGlzLnByb3BzLmV4dHJhRXJyb3JzLFxuICAgICAgICAgICEhXCJjb25jYXQgYXJyYXlzXCJcbiAgICAgICAgKTtcbiAgICAgICAgZXJyb3JzID0gdG9FcnJvckxpc3QoZXJyb3JTY2hlbWEpO1xuICAgICAgfVxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIGZvcm1EYXRhOiBuZXdGb3JtRGF0YSxcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBlcnJvclNjaGVtYSxcbiAgICAgICAgc2NoZW1hVmFsaWRhdGlvbkVycm9ycyxcbiAgICAgICAgc2NoZW1hVmFsaWRhdGlvbkVycm9yU2NoZW1hLFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnByb3BzLm5vVmFsaWRhdGUgJiYgbmV3RXJyb3JTY2hlbWEpIHtcbiAgICAgIGNvbnN0IGVycm9yU2NoZW1hID0gdGhpcy5wcm9wcy5leHRyYUVycm9yc1xuICAgICAgICA/IG1lcmdlT2JqZWN0cyhcbiAgICAgICAgICAgIG5ld0Vycm9yU2NoZW1hLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5leHRyYUVycm9ycyxcbiAgICAgICAgICAgICEhXCJjb25jYXQgYXJyYXlzXCJcbiAgICAgICAgICApXG4gICAgICAgIDogbmV3RXJyb3JTY2hlbWE7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgZm9ybURhdGE6IG5ld0Zvcm1EYXRhLFxuICAgICAgICBlcnJvclNjaGVtYTogZXJyb3JTY2hlbWEsXG4gICAgICAgIGVycm9yczogdG9FcnJvckxpc3QoZXJyb3JTY2hlbWEpLFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHN0YXRlLFxuICAgICAgKCkgPT4gdGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuc3RhdGUpXG4gICAgKTtcbiAgfTtcblxuICBvbkJsdXIgPSAoLi4uYXJncykgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoLi4uYXJncyk7XG4gICAgfVxuICB9O1xuXG4gIG9uRm9jdXMgPSAoLi4uYXJncykgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHRoaXMucHJvcHMub25Gb2N1cyguLi5hcmdzKTtcbiAgICB9XG4gIH07XG5cbiAgb25TdWJtaXQgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZlbnQucGVyc2lzdCgpO1xuICAgIGxldCBuZXdGb3JtRGF0YSA9IHRoaXMuc3RhdGUuZm9ybURhdGE7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbWl0RXh0cmFEYXRhID09PSB0cnVlKSB7XG4gICAgICBjb25zdCByZXRyaWV2ZWRTY2hlbWEgPSByZXRyaWV2ZVNjaGVtYShcbiAgICAgICAgdGhpcy5zdGF0ZS5zY2hlbWEsXG4gICAgICAgIHRoaXMuc3RhdGUuc2NoZW1hLFxuICAgICAgICBuZXdGb3JtRGF0YVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHBhdGhTY2hlbWEgPSB0b1BhdGhTY2hlbWEoXG4gICAgICAgIHJldHJpZXZlZFNjaGVtYSxcbiAgICAgICAgXCJcIixcbiAgICAgICAgdGhpcy5zdGF0ZS5zY2hlbWEsXG4gICAgICAgIG5ld0Zvcm1EYXRhXG4gICAgICApO1xuXG4gICAgICBjb25zdCBmaWVsZE5hbWVzID0gdGhpcy5nZXRGaWVsZE5hbWVzKHBhdGhTY2hlbWEsIG5ld0Zvcm1EYXRhKTtcblxuICAgICAgbmV3Rm9ybURhdGEgPSB0aGlzLmdldFVzZWRGb3JtRGF0YShuZXdGb3JtRGF0YSwgZmllbGROYW1lcyk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnByb3BzLm5vVmFsaWRhdGUpIHtcbiAgICAgIGxldCBzY2hlbWFWYWxpZGF0aW9uID0gdGhpcy52YWxpZGF0ZShuZXdGb3JtRGF0YSk7XG4gICAgICBsZXQgZXJyb3JzID0gc2NoZW1hVmFsaWRhdGlvbi5lcnJvcnM7XG4gICAgICBsZXQgZXJyb3JTY2hlbWEgPSBzY2hlbWFWYWxpZGF0aW9uLmVycm9yU2NoZW1hO1xuICAgICAgY29uc3Qgc2NoZW1hVmFsaWRhdGlvbkVycm9ycyA9IGVycm9ycztcbiAgICAgIGNvbnN0IHNjaGVtYVZhbGlkYXRpb25FcnJvclNjaGVtYSA9IGVycm9yU2NoZW1hO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5leHRyYUVycm9ycykge1xuICAgICAgICAgIGVycm9yU2NoZW1hID0gbWVyZ2VPYmplY3RzKFxuICAgICAgICAgICAgZXJyb3JTY2hlbWEsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmV4dHJhRXJyb3JzLFxuICAgICAgICAgICAgISFcImNvbmNhdCBhcnJheXNcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyb3JzID0gdG9FcnJvckxpc3QoZXJyb3JTY2hlbWEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgZXJyb3JzLFxuICAgICAgICAgICAgZXJyb3JTY2hlbWEsXG4gICAgICAgICAgICBzY2hlbWFWYWxpZGF0aW9uRXJyb3JzLFxuICAgICAgICAgICAgc2NoZW1hVmFsaWRhdGlvbkVycm9yU2NoZW1hLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25FcnJvcikge1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uRXJyb3IoZXJyb3JzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGb3JtIHZhbGlkYXRpb24gZmFpbGVkXCIsIGVycm9ycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhlcmUgYXJlIG5vIGVycm9ycyBnZW5lcmF0ZWQgdGhyb3VnaCBzY2hlbWEgdmFsaWRhdGlvbi5cbiAgICAvLyBDaGVjayBmb3IgdXNlciBwcm92aWRlZCBlcnJvcnMgYW5kIHVwZGF0ZSBzdGF0ZSBhY2NvcmRpbmdseS5cbiAgICBsZXQgZXJyb3JTY2hlbWE7XG4gICAgbGV0IGVycm9ycztcbiAgICBpZiAodGhpcy5wcm9wcy5leHRyYUVycm9ycykge1xuICAgICAgZXJyb3JTY2hlbWEgPSB0aGlzLnByb3BzLmV4dHJhRXJyb3JzO1xuICAgICAgZXJyb3JzID0gdG9FcnJvckxpc3QoZXJyb3JTY2hlbWEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvclNjaGVtYSA9IHt9O1xuICAgICAgZXJyb3JzID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgZm9ybURhdGE6IG5ld0Zvcm1EYXRhLFxuICAgICAgICBlcnJvcnM6IGVycm9ycyxcbiAgICAgICAgZXJyb3JTY2hlbWE6IGVycm9yU2NoZW1hLFxuICAgICAgICBzY2hlbWFWYWxpZGF0aW9uRXJyb3JzOiBbXSxcbiAgICAgICAgc2NoZW1hVmFsaWRhdGlvbkVycm9yU2NoZW1hOiB7fSxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uU3VibWl0KSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vblN1Ym1pdChcbiAgICAgICAgICAgIHsgLi4udGhpcy5zdGF0ZSwgZm9ybURhdGE6IG5ld0Zvcm1EYXRhLCBzdGF0dXM6IFwic3VibWl0dGVkXCIgfSxcbiAgICAgICAgICAgIGV2ZW50XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgZ2V0UmVnaXN0cnkoKSB7XG4gICAgLy8gRm9yIEJDLCBhY2NlcHQgcGFzc2VkIFNjaGVtYUZpZWxkIGFuZCBUaXRsZUZpZWxkIHByb3BzIGFuZCBwYXNzIHRoZW0gdG9cbiAgICAvLyB0aGUgXCJmaWVsZHNcIiByZWdpc3RyeSBvbmUuXG4gICAgY29uc3QgeyBmaWVsZHMsIHdpZGdldHMgfSA9IGdldERlZmF1bHRSZWdpc3RyeSgpO1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZHM6IHsgLi4uZmllbGRzLCAuLi50aGlzLnByb3BzLmZpZWxkcyB9LFxuICAgICAgd2lkZ2V0czogeyAuLi53aWRnZXRzLCAuLi50aGlzLnByb3BzLndpZGdldHMgfSxcbiAgICAgIEFycmF5RmllbGRUZW1wbGF0ZTogdGhpcy5wcm9wcy5BcnJheUZpZWxkVGVtcGxhdGUsXG4gICAgICBPYmplY3RGaWVsZFRlbXBsYXRlOiB0aGlzLnByb3BzLk9iamVjdEZpZWxkVGVtcGxhdGUsXG4gICAgICBGaWVsZFRlbXBsYXRlOiB0aGlzLnByb3BzLkZpZWxkVGVtcGxhdGUsXG4gICAgICBkZWZpbml0aW9uczogdGhpcy5wcm9wcy5zY2hlbWEuZGVmaW5pdGlvbnMgfHwge30sXG4gICAgICByb290U2NoZW1hOiB0aGlzLnByb3BzLnNjaGVtYSxcbiAgICAgIGZvcm1Db250ZXh0OiB0aGlzLnByb3BzLmZvcm1Db250ZXh0IHx8IHt9LFxuICAgIH07XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuZm9ybUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZm9ybUVsZW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFwic3VibWl0XCIsIHtcbiAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBpZCxcbiAgICAgIGlkUHJlZml4LFxuICAgICAgaWRTZXBhcmF0b3IsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB0YWdOYW1lLFxuICAgICAgbmFtZSxcbiAgICAgIG1ldGhvZCxcbiAgICAgIHRhcmdldCxcbiAgICAgIGFjdGlvbixcbiAgICAgIGF1dG9jb21wbGV0ZTogZGVwcmVjYXRlZEF1dG9jb21wbGV0ZSxcbiAgICAgIGF1dG9Db21wbGV0ZTogY3VycmVudEF1dG9Db21wbGV0ZSxcbiAgICAgIGVuY3R5cGUsXG4gICAgICBhY2NlcHRjaGFyc2V0LFxuICAgICAgbm9IdG1sNVZhbGlkYXRlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByZWFkb25seSxcbiAgICAgIGZvcm1Db250ZXh0LFxuICAgICAgLyoqXG4gICAgICAgKiBfaW50ZXJuYWxGb3JtV3JhcHBlciBpcyBjdXJyZW50bHkgdXNlZCBieSB0aGUgbWF0ZXJpYWwtdWkgYW5kIHNlbWFudGljLXVpIHRoZW1lcyB0byBwcm92aWRlIGEgY3VzdG9tIHdyYXBwZXJcbiAgICAgICAqIGFyb3VuZCBgPEZvcm0gLz5gIHRoYXQgc3VwcG9ydHMgdGhlIHByb3BlciByZW5kZXJpbmcgb2YgdGhvc2UgdGhlbWVzLiBUbyB1c2UgdGhpcyBwcm9wLCBvbmUgbXVzdCBwYXNzIGFcbiAgICAgICAqIGNvbXBvbmVudCB0aGF0IHRha2VzIHR3byBwcm9wczogYGNoaWxkcmVuYCBhbmQgYGFzYC4gVGhhdCBjb21wb25lbnQsIGF0IG1pbmltdW0sIHNob3VsZCByZW5kZXIgdGhlIGBjaGlsZHJlbmBcbiAgICAgICAqIGluc2lkZSBvZiBhIDxmb3JtIC8+IHRhZyB1bmxlc3MgYGFzYCBpcyBwcm92aWRlZCwgaW4gd2hpY2ggY2FzZSwgdXNlIHRoZSBgYXNgIHByb3AgaW4gcGxhY2Ugb2YgYDxmb3JtIC8+YC5cbiAgICAgICAqIGkuZS46XG4gICAgICAgKiBgYGBcbiAgICAgICAqIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludGVybmFsRm9ybSh7IGNoaWxkcmVuLCBhc30pIHtcbiAgICAgICAqICAgY29uc3QgRm9ybVRhZyA9IGFzIHx8ICdmb3JtJztcbiAgICAgICAqICAgcmV0dXJuIDxGb3JtVGFnPntjaGlsZHJlbn08L0Zvcm1UYWc+O1xuICAgICAgICogfVxuICAgICAgICogYGBgXG4gICAgICAgKi9cbiAgICAgIF9pbnRlcm5hbEZvcm1XcmFwcGVyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgeyBzY2hlbWEsIHVpU2NoZW1hLCBmb3JtRGF0YSwgZXJyb3JTY2hlbWEsIGlkU2NoZW1hIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHJlZ2lzdHJ5ID0gdGhpcy5nZXRSZWdpc3RyeSgpO1xuICAgIGNvbnN0IF9TY2hlbWFGaWVsZCA9IHJlZ2lzdHJ5LmZpZWxkcy5TY2hlbWFGaWVsZDtcbiAgICAvLyBUaGUgYHNlbWFudGljLXVpYCBhbmQgYG1hdGVyaWFsLXVpYCB0aGVtZXMgaGF2ZSBgX2ludGVybmFsRm9ybVdyYXBwZXJgcyB0aGF0IHRha2UgYW4gYGFzYCBwcm9wIHRoYXQgaXMgdGhlXG4gICAgLy8gUHJvcFR5cGVzLmVsZW1lbnRUeXBlIHRvIHVzZSBmb3IgdGhlIGlubmVyIHRhZyBzbyB3ZSdsbCBuZWVkIHRvIHBhc3MgYHRhZ05hbWVgIGFsb25nIGlmIGl0IGlzIHByb3ZpZGVkLlxuICAgIC8vIE5PVEUsIHRoZSBgYXNgIHByb3AgaXMgbmF0aXZlIHRvIGBzZW1hbnRpYy11aWAgYW5kIGlzIGVtdWxhdGVkIGluIHRoZSBgbWF0ZXJpYWwtdWlgIHRoZW1lXG4gICAgY29uc3QgYXMgPSBfaW50ZXJuYWxGb3JtV3JhcHBlciA/IHRhZ05hbWUgOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgRm9ybVRhZyA9IF9pbnRlcm5hbEZvcm1XcmFwcGVyIHx8IHRhZ05hbWUgfHwgXCJmb3JtXCI7XG4gICAgaWYgKGRlcHJlY2F0ZWRBdXRvY29tcGxldGUpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgXCJVc2luZyBhdXRvY29tcGxldGUgcHJvcGVydHkgb2YgRm9ybSBpcyBkZXByZWNhdGVkLCB1c2UgYXV0b0NvbXBsZXRlIGluc3RlYWQuXCJcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IGF1dG9Db21wbGV0ZSA9IGN1cnJlbnRBdXRvQ29tcGxldGVcbiAgICAgID8gY3VycmVudEF1dG9Db21wbGV0ZVxuICAgICAgOiBkZXByZWNhdGVkQXV0b2NvbXBsZXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtVGFnXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lID8gY2xhc3NOYW1lIDogXCJyanNmXCJ9XG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgbWV0aG9kPXttZXRob2R9XG4gICAgICAgIHRhcmdldD17dGFyZ2V0fVxuICAgICAgICBhY3Rpb249e2FjdGlvbn1cbiAgICAgICAgYXV0b0NvbXBsZXRlPXthdXRvQ29tcGxldGV9XG4gICAgICAgIGVuY1R5cGU9e2VuY3R5cGV9XG4gICAgICAgIGFjY2VwdENoYXJzZXQ9e2FjY2VwdGNoYXJzZXR9XG4gICAgICAgIG5vVmFsaWRhdGU9e25vSHRtbDVWYWxpZGF0ZX1cbiAgICAgICAgb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9XG4gICAgICAgIGFzPXthc31cbiAgICAgICAgcmVmPXtmb3JtID0+IHtcbiAgICAgICAgICB0aGlzLmZvcm1FbGVtZW50ID0gZm9ybTtcbiAgICAgICAgfX0+XG4gICAgICAgIHt0aGlzLnJlbmRlckVycm9ycygpfVxuICAgICAgICA8X1NjaGVtYUZpZWxkXG4gICAgICAgICAgc2NoZW1hPXtzY2hlbWF9XG4gICAgICAgICAgdWlTY2hlbWE9e3VpU2NoZW1hfVxuICAgICAgICAgIGVycm9yU2NoZW1hPXtlcnJvclNjaGVtYX1cbiAgICAgICAgICBpZFNjaGVtYT17aWRTY2hlbWF9XG4gICAgICAgICAgaWRQcmVmaXg9e2lkUHJlZml4fVxuICAgICAgICAgIGlkU2VwYXJhdG9yPXtpZFNlcGFyYXRvcn1cbiAgICAgICAgICBmb3JtQ29udGV4dD17Zm9ybUNvbnRleHR9XG4gICAgICAgICAgZm9ybURhdGE9e2Zvcm1EYXRhfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5vbkJsdXJ9XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxuICAgICAgICAgIHJlZ2lzdHJ5PXtyZWdpc3RyeX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgcmVhZG9ubHk9e3JlYWRvbmx5fVxuICAgICAgICAvPlxuICAgICAgICB7Y2hpbGRyZW4gPyAoXG4gICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+XG4gICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0Zvcm1UYWc+XG4gICAgKTtcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEZvcm0ucHJvcFR5cGVzID0ge1xuICAgIHNjaGVtYTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHVpU2NoZW1hOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGZvcm1EYXRhOiBQcm9wVHlwZXMuYW55LFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZWFkb25seTogUHJvcFR5cGVzLmJvb2wsXG4gICAgd2lkZ2V0czogUHJvcFR5cGVzLm9iamVjdE9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3RdKVxuICAgICksXG4gICAgZmllbGRzOiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLmVsZW1lbnRUeXBlKSxcbiAgICBBcnJheUZpZWxkVGVtcGxhdGU6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgICBPYmplY3RGaWVsZFRlbXBsYXRlOiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG4gICAgRmllbGRUZW1wbGF0ZTogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICAgIEVycm9yTGlzdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRXJyb3I6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNob3dFcnJvckxpc3Q6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFnTmFtZTogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuICAgIF9pbnRlcm5hbEZvcm1XcmFwcGVyOiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtZXRob2Q6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFyZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhdXRvY29tcGxldGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYXV0b0NvbXBsZXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGVuY3R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWNjZXB0Y2hhcnNldDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBub1ZhbGlkYXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBub0h0bWw1VmFsaWRhdGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGxpdmVWYWxpZGF0ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgdmFsaWRhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRyYW5zZm9ybUVycm9yczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZm9ybUNvbnRleHQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY3VzdG9tRm9ybWF0czogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBhZGRpdGlvbmFsTWV0YVNjaGVtYXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgIG9taXRFeHRyYURhdGE6IFByb3BUeXBlcy5ib29sLFxuICAgIGV4dHJhRXJyb3JzOiBQcm9wVHlwZXMub2JqZWN0LFxuICB9O1xufVxuIl19