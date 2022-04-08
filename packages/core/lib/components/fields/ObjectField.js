function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import AddButton from "../AddButton";
import React, { Component } from "react";
import * as types from "../../types";
import { orderProperties, retrieveSchema, getDefaultRegistry, canExpand, ADDITIONAL_PROPERTY_FLAG } from "../../utils";

function DefaultObjectFieldTemplate(props) {
  var TitleField = props.TitleField,
      DescriptionField = props.DescriptionField;
  return React.createElement("fieldset", {
    id: props.idSchema.$id
  }, (props.uiSchema["ui:title"] || props.title) && React.createElement(TitleField, {
    id: "".concat(props.idSchema.$id, "__title"),
    title: props.title || props.uiSchema["ui:title"],
    required: props.required,
    formContext: props.formContext
  }), props.description && React.createElement(DescriptionField, {
    id: "".concat(props.idSchema.$id, "__description"),
    description: props.description,
    formContext: props.formContext
  }), props.properties.map(function (prop) {
    return prop.content;
  }), canExpand(props.schema, props.uiSchema, props.formData) && React.createElement(AddButton, {
    className: "object-property-expand",
    onClick: props.onAddClick(props.schema),
    disabled: props.disabled || props.readonly
  }));
}

var ObjectField =
/*#__PURE__*/
function (_Component) {
  _inherits(ObjectField, _Component);

  function ObjectField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ObjectField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ObjectField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      wasPropertyKeyModified: false,
      additionalProperties: {}
    });

    _defineProperty(_assertThisInitialized(_this), "onPropertyChange", function (name) {
      var addedByAdditionalProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return function (value, errorSchema) {
        if (value === undefined && addedByAdditionalProperties) {
          // Don't set value = undefined for fields added by
          // additionalProperties. Doing so removes them from the
          // formData, which causes them to completely disappear
          // (including the input field for the property name). Unlike
          // fields which are "mandated" by the schema, these fields can
          // be set to undefined by clicking a "delete field" button, so
          // set empty values to the empty string.
          value = "";
        }

        var newFormData = _objectSpread({}, _this.props.formData, _defineProperty({}, name, value));

        _this.props.onChange(newFormData, errorSchema && _this.props.errorSchema && _objectSpread({}, _this.props.errorSchema, _defineProperty({}, name, errorSchema)));
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onDropPropertyClick", function (key) {
      return function (event) {
        event.preventDefault();
        var _this$props = _this.props,
            onChange = _this$props.onChange,
            formData = _this$props.formData;

        var copiedFormData = _objectSpread({}, formData);

        delete copiedFormData[key];
        onChange(copiedFormData);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getAvailableKey", function (preferredKey, formData) {
      var index = 0;
      var newKey = preferredKey;

      while (formData.hasOwnProperty(newKey)) {
        newKey = "".concat(preferredKey, "-").concat(++index);
      }

      return newKey;
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyChange", function (oldValue) {
      return function (value, errorSchema) {
        if (oldValue === value) {
          return;
        }

        value = _this.getAvailableKey(value, _this.props.formData);

        var newFormData = _objectSpread({}, _this.props.formData);

        var newKeys = _defineProperty({}, oldValue, value);

        var keyValues = Object.keys(newFormData).map(function (key) {
          var newKey = newKeys[key] || key;
          return _defineProperty({}, newKey, newFormData[key]);
        });
        var renamedObj = Object.assign.apply(Object, [{}].concat(_toConsumableArray(keyValues)));

        _this.setState({
          wasPropertyKeyModified: true
        });

        _this.props.onChange(renamedObj, errorSchema && _this.props.errorSchema && _objectSpread({}, _this.props.errorSchema, _defineProperty({}, value, errorSchema)));
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleAddClick", function (schema) {
      return function () {
        var type = schema.additionalProperties.type;

        var newFormData = _objectSpread({}, _this.props.formData);

        if (schema.additionalProperties.hasOwnProperty("$ref")) {
          var _this$props$registry = _this.props.registry,
              registry = _this$props$registry === void 0 ? getDefaultRegistry() : _this$props$registry;
          var refSchema = retrieveSchema({
            $ref: schema.additionalProperties["$ref"]
          }, registry.rootSchema, _this.props.formData);
          type = refSchema.type;
        }

        newFormData[_this.getAvailableKey("newKey", newFormData)] = _this.getDefaultValue(type);

        _this.props.onChange(newFormData);
      };
    });

    return _this;
  }

  _createClass(ObjectField, [{
    key: "isRequired",
    value: function isRequired(name) {
      var schema = this.props.schema;
      return Array.isArray(schema.required) && schema.required.indexOf(name) !== -1;
    }
  }, {
    key: "getDefaultValue",
    value: function getDefaultValue(type) {
      switch (type) {
        case "string":
          return "New Value";

        case "array":
          return [];

        case "boolean":
          return false;

        case "null":
          return null;

        case "number":
          return 0;

        case "object":
          return {};

        default:
          // We don't have a datatype for some reason (perhaps additionalProperties was true)
          return "New Value";
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          uiSchema = _this$props2.uiSchema,
          formData = _this$props2.formData,
          errorSchema = _this$props2.errorSchema,
          idSchema = _this$props2.idSchema,
          name = _this$props2.name,
          required = _this$props2.required,
          disabled = _this$props2.disabled,
          readonly = _this$props2.readonly,
          hideError = _this$props2.hideError,
          idPrefix = _this$props2.idPrefix,
          idSeparator = _this$props2.idSeparator,
          onBlur = _this$props2.onBlur,
          onFocus = _this$props2.onFocus,
          _this$props2$registry = _this$props2.registry,
          registry = _this$props2$registry === void 0 ? getDefaultRegistry() : _this$props2$registry;
      var rootSchema = registry.rootSchema,
          fields = registry.fields,
          formContext = registry.formContext;
      var SchemaField = fields.SchemaField,
          TitleField = fields.TitleField,
          DescriptionField = fields.DescriptionField;
      var schema = retrieveSchema(this.props.schema, rootSchema, formData);
      var title = schema.title === undefined ? name : schema.title;
      var description = uiSchema["ui:description"] || schema.description;
      var orderedProperties;

      try {
        var properties = Object.keys(schema.properties || {});
        orderedProperties = orderProperties(properties, uiSchema["ui:order"]);
      } catch (err) {
        return React.createElement("div", null, React.createElement("p", {
          className: "config-error",
          style: {
            color: "red"
          }
        }, "Invalid ", name || "root", " object field configuration:", React.createElement("em", null, err.message), "."), React.createElement("pre", null, JSON.stringify(schema)));
      }

      var Template = uiSchema["ui:ObjectFieldTemplate"] || registry.ObjectFieldTemplate || DefaultObjectFieldTemplate;
      var templateProps = {
        title: uiSchema["ui:title"] || title,
        description: description,
        TitleField: TitleField,
        DescriptionField: DescriptionField,
        properties: orderedProperties.map(function (name) {
          var addedByAdditionalProperties = schema.properties[name].hasOwnProperty(ADDITIONAL_PROPERTY_FLAG);
          var fieldUiSchema = addedByAdditionalProperties ? uiSchema.additionalProperties : uiSchema[name];
          var hidden = fieldUiSchema && fieldUiSchema["ui:widget"] === "hidden";
          return {
            content: React.createElement(SchemaField, {
              key: name,
              name: name,
              required: _this2.isRequired(name),
              schema: schema.properties[name],
              uiSchema: fieldUiSchema,
              errorSchema: errorSchema[name],
              idSchema: idSchema[name],
              idPrefix: idPrefix,
              idSeparator: idSeparator,
              formData: (formData || {})[name],
              wasPropertyKeyModified: _this2.state.wasPropertyKeyModified,
              onKeyChange: _this2.onKeyChange(name),
              onChange: _this2.onPropertyChange(name, addedByAdditionalProperties),
              onBlur: onBlur,
              onFocus: onFocus,
              registry: registry,
              disabled: disabled,
              readonly: readonly,
              hideError: hideError,
              onDropPropertyClick: _this2.onDropPropertyClick
            }),
            name: name,
            readonly: readonly,
            disabled: disabled,
            required: required,
            hidden: hidden
          };
        }),
        readonly: readonly,
        disabled: disabled,
        required: required,
        idSchema: idSchema,
        uiSchema: uiSchema,
        schema: schema,
        formData: formData,
        formContext: formContext,
        registry: registry
      };
      return React.createElement(Template, _extends({}, templateProps, {
        onAddClick: this.handleAddClick
      }));
    }
  }]);

  return ObjectField;
}(Component);

_defineProperty(ObjectField, "defaultProps", {
  uiSchema: {},
  formData: {},
  errorSchema: {},
  idSchema: {},
  required: false,
  disabled: false,
  readonly: false
});

if (process.env.NODE_ENV !== "production") {
  ObjectField.propTypes = types.fieldProps;
}

export default ObjectField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpZWxkcy9PYmplY3RGaWVsZC5qcyJdLCJuYW1lcyI6WyJBZGRCdXR0b24iLCJSZWFjdCIsIkNvbXBvbmVudCIsInR5cGVzIiwib3JkZXJQcm9wZXJ0aWVzIiwicmV0cmlldmVTY2hlbWEiLCJnZXREZWZhdWx0UmVnaXN0cnkiLCJjYW5FeHBhbmQiLCJBRERJVElPTkFMX1BST1BFUlRZX0ZMQUciLCJEZWZhdWx0T2JqZWN0RmllbGRUZW1wbGF0ZSIsInByb3BzIiwiVGl0bGVGaWVsZCIsIkRlc2NyaXB0aW9uRmllbGQiLCJpZFNjaGVtYSIsIiRpZCIsInVpU2NoZW1hIiwidGl0bGUiLCJyZXF1aXJlZCIsImZvcm1Db250ZXh0IiwiZGVzY3JpcHRpb24iLCJwcm9wZXJ0aWVzIiwibWFwIiwicHJvcCIsImNvbnRlbnQiLCJzY2hlbWEiLCJmb3JtRGF0YSIsIm9uQWRkQ2xpY2siLCJkaXNhYmxlZCIsInJlYWRvbmx5IiwiT2JqZWN0RmllbGQiLCJ3YXNQcm9wZXJ0eUtleU1vZGlmaWVkIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJuYW1lIiwiYWRkZWRCeUFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwidmFsdWUiLCJlcnJvclNjaGVtYSIsInVuZGVmaW5lZCIsIm5ld0Zvcm1EYXRhIiwib25DaGFuZ2UiLCJrZXkiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29waWVkRm9ybURhdGEiLCJwcmVmZXJyZWRLZXkiLCJpbmRleCIsIm5ld0tleSIsImhhc093blByb3BlcnR5Iiwib2xkVmFsdWUiLCJnZXRBdmFpbGFibGVLZXkiLCJuZXdLZXlzIiwia2V5VmFsdWVzIiwiT2JqZWN0Iiwia2V5cyIsInJlbmFtZWRPYmoiLCJhc3NpZ24iLCJzZXRTdGF0ZSIsInR5cGUiLCJyZWdpc3RyeSIsInJlZlNjaGVtYSIsIiRyZWYiLCJyb290U2NoZW1hIiwiZ2V0RGVmYXVsdFZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiaW5kZXhPZiIsImhpZGVFcnJvciIsImlkUHJlZml4IiwiaWRTZXBhcmF0b3IiLCJvbkJsdXIiLCJvbkZvY3VzIiwiZmllbGRzIiwiU2NoZW1hRmllbGQiLCJvcmRlcmVkUHJvcGVydGllcyIsImVyciIsImNvbG9yIiwibWVzc2FnZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJUZW1wbGF0ZSIsIk9iamVjdEZpZWxkVGVtcGxhdGUiLCJ0ZW1wbGF0ZVByb3BzIiwiZmllbGRVaVNjaGVtYSIsImhpZGRlbiIsImlzUmVxdWlyZWQiLCJzdGF0ZSIsIm9uS2V5Q2hhbmdlIiwib25Qcm9wZXJ0eUNoYW5nZSIsIm9uRHJvcFByb3BlcnR5Q2xpY2siLCJoYW5kbGVBZGRDbGljayIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInByb3BUeXBlcyIsImZpZWxkUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBUCxNQUFzQixjQUF0QjtBQUNBLE9BQU9DLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsT0FBTyxLQUFLQyxLQUFaLE1BQXVCLGFBQXZCO0FBRUEsU0FDRUMsZUFERixFQUVFQyxjQUZGLEVBR0VDLGtCQUhGLEVBSUVDLFNBSkYsRUFLRUMsd0JBTEYsUUFNTyxhQU5QOztBQVFBLFNBQVNDLDBCQUFULENBQW9DQyxLQUFwQyxFQUEyQztBQUFBLE1BQ2pDQyxVQURpQyxHQUNBRCxLQURBLENBQ2pDQyxVQURpQztBQUFBLE1BQ3JCQyxnQkFEcUIsR0FDQUYsS0FEQSxDQUNyQkUsZ0JBRHFCO0FBRXpDLFNBQ0U7QUFBVSxJQUFBLEVBQUUsRUFBRUYsS0FBSyxDQUFDRyxRQUFOLENBQWVDO0FBQTdCLEtBQ0csQ0FBQ0osS0FBSyxDQUFDSyxRQUFOLENBQWUsVUFBZixLQUE4QkwsS0FBSyxDQUFDTSxLQUFyQyxLQUNDLG9CQUFDLFVBQUQ7QUFDRSxJQUFBLEVBQUUsWUFBS04sS0FBSyxDQUFDRyxRQUFOLENBQWVDLEdBQXBCLFlBREo7QUFF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LEVBQUFBLFFBQVEsRUFBRSxLQUxVO0FBTXBCVSxFQUFBQSxRQUFRLEVBQUUsS0FOVTtBQU9wQkMsRUFBQUEsUUFBUSxFQUFFO0FBUFUsQzs7QUFtUHhCLElBQUk2RCxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztBQUN6QzlELEVBQUFBLFdBQVcsQ0FBQytELFNBQVosR0FBd0J6RixLQUFLLENBQUMwRixVQUE5QjtBQUNEOztBQUVELGVBQWVoRSxXQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkZEJ1dHRvbiBmcm9tIFwiLi4vQWRkQnV0dG9uXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIG9yZGVyUHJvcGVydGllcyxcclxuICByZXRyaWV2ZVNjaGVtYSxcclxuICBnZXREZWZhdWx0UmVnaXN0cnksXHJcbiAgY2FuRXhwYW5kLFxyXG4gIEFERElUSU9OQUxfUFJPUEVSVFlfRkxBRyxcclxufSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcclxuXHJcbmZ1bmN0aW9uIERlZmF1bHRPYmplY3RGaWVsZFRlbXBsYXRlKHByb3BzKSB7XHJcbiAgY29uc3QgeyBUaXRsZUZpZWxkLCBEZXNjcmlwdGlvbkZpZWxkIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGZpZWxkc2V0IGlkPXtwcm9wcy5pZFNjaGVtYS4kaWR9PlxyXG4gICAgICB7KHByb3BzLnVpU2NoZW1hW1widWk6dGl0bGVcIl0gfHwgcHJvcHMudGl0bGUpICYmIChcclxuICAgICAgICA8VGl0bGVGaWVsZFxyXG4gICAgICAgICAgaWQ9e2Ake3Byb3BzLmlkU2NoZW1hLiRpZH1fX3RpdGxlYH1cclxuICAgICAgICAgIHRpdGxlPXtwcm9wcy50aXRsZSB8fCBwcm9wcy51aVNjaGVtYVtcInVpOnRpdGxlXCJdfVxyXG4gICAgICAgICAgcmVxdWlyZWQ9e3Byb3BzLnJlcXVpcmVkfVxyXG4gICAgICAgICAgZm9ybUNvbnRleHQ9e3Byb3BzLmZvcm1Db250ZXh0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtwcm9wcy5kZXNjcmlwdGlvbiAmJiAoXHJcbiAgICAgICAgPERlc2NyaXB0aW9uRmllbGRcclxuICAgICAgICAgIGlkPXtgJHtwcm9wcy5pZFNjaGVtYS4kaWR9X19kZXNjcmlwdGlvbmB9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvcHMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICBmb3JtQ29udGV4dD17cHJvcHMuZm9ybUNvbnRleHR9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAge3Byb3BzLnByb3BlcnRpZXMubWFwKHByb3AgPT4gcHJvcC5jb250ZW50KX1cclxuICAgICAge2NhbkV4cGFuZChwcm9wcy5zY2hlbWEsIHByb3BzLnVpU2NoZW1hLCBwcm9wcy5mb3JtRGF0YSkgJiYgKFxyXG4gICAgICAgIDxBZGRCdXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1wcm9wZXJ0eS1leHBhbmRcIlxyXG4gICAgICAgICAgb25DbGljaz17cHJvcHMub25BZGRDbGljayhwcm9wcy5zY2hlbWEpfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkIHx8IHByb3BzLnJlYWRvbmx5fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2ZpZWxkc2V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmNsYXNzIE9iamVjdEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgdWlTY2hlbWE6IHt9LFxyXG4gICAgZm9ybURhdGE6IHt9LFxyXG4gICAgZXJyb3JTY2hlbWE6IHt9LFxyXG4gICAgaWRTY2hlbWE6IHt9LFxyXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgcmVhZG9ubHk6IGZhbHNlLFxyXG4gIH07XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgd2FzUHJvcGVydHlLZXlNb2RpZmllZDogZmFsc2UsXHJcbiAgICBhZGRpdGlvbmFsUHJvcGVydGllczoge30sXHJcbiAgfTtcclxuXHJcbiAgaXNSZXF1aXJlZChuYW1lKSB7XHJcbiAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnByb3BzLnNjaGVtYTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIEFycmF5LmlzQXJyYXkoc2NoZW1hLnJlcXVpcmVkKSAmJiBzY2hlbWEucmVxdWlyZWQuaW5kZXhPZihuYW1lKSAhPT0gLTFcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBvblByb3BlcnR5Q2hhbmdlID0gKG5hbWUsIGFkZGVkQnlBZGRpdGlvbmFsUHJvcGVydGllcyA9IGZhbHNlKSA9PiB7XHJcbiAgICByZXR1cm4gKHZhbHVlLCBlcnJvclNjaGVtYSkgPT4ge1xyXG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiBhZGRlZEJ5QWRkaXRpb25hbFByb3BlcnRpZXMpIHtcclxuICAgICAgICAvLyBEb24ndCBzZXQgdmFsdWUgPSB1bmRlZmluZWQgZm9yIGZpZWxkcyBhZGRlZCBieVxyXG4gICAgICAgIC8vIGFkZGl0aW9uYWxQcm9wZXJ0aWVzLiBEb2luZyBzbyByZW1vdmVzIHRoZW0gZnJvbSB0aGVcclxuICAgICAgICAvLyBmb3JtRGF0YSwgd2hpY2ggY2F1c2VzIHRoZW0gdG8gY29tcGxldGVseSBkaXNhcHBlYXJcclxuICAgICAgICAvLyAoaW5jbHVkaW5nIHRoZSBpbnB1dCBmaWVsZCBmb3IgdGhlIHByb3BlcnR5IG5hbWUpLiBVbmxpa2VcclxuICAgICAgICAvLyBmaWVsZHMgd2hpY2ggYXJlIFwibWFuZGF0ZWRcIiBieSB0aGUgc2NoZW1hLCB0aGVzZSBmaWVsZHMgY2FuXHJcbiAgICAgICAgLy8gYmUgc2V0IHRvIHVuZGVmaW5lZCBieSBjbGlja2luZyBhIFwiZGVsZXRlIGZpZWxkXCIgYnV0dG9uLCBzb1xyXG4gICAgICAgIC8vIHNldCBlbXB0eSB2YWx1ZXMgdG8gdGhlIGVtcHR5IHN0cmluZy5cclxuICAgICAgICB2YWx1ZSA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbmV3Rm9ybURhdGEgPSB7IC4uLnRoaXMucHJvcHMuZm9ybURhdGEsIFtuYW1lXTogdmFsdWUgfTtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShcclxuICAgICAgICBuZXdGb3JtRGF0YSxcclxuICAgICAgICBlcnJvclNjaGVtYSAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5lcnJvclNjaGVtYSAmJiB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuZXJyb3JTY2hlbWEsXHJcbiAgICAgICAgICAgIFtuYW1lXTogZXJyb3JTY2hlbWEsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIG9uRHJvcFByb3BlcnR5Q2xpY2sgPSBrZXkgPT4ge1xyXG4gICAgcmV0dXJuIGV2ZW50ID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgeyBvbkNoYW5nZSwgZm9ybURhdGEgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IGNvcGllZEZvcm1EYXRhID0geyAuLi5mb3JtRGF0YSB9O1xyXG4gICAgICBkZWxldGUgY29waWVkRm9ybURhdGFba2V5XTtcclxuICAgICAgb25DaGFuZ2UoY29waWVkRm9ybURhdGEpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBnZXRBdmFpbGFibGVLZXkgPSAocHJlZmVycmVkS2V5LCBmb3JtRGF0YSkgPT4ge1xyXG4gICAgdmFyIGluZGV4ID0gMDtcclxuICAgIHZhciBuZXdLZXkgPSBwcmVmZXJyZWRLZXk7XHJcbiAgICB3aGlsZSAoZm9ybURhdGEuaGFzT3duUHJvcGVydHkobmV3S2V5KSkge1xyXG4gICAgICBuZXdLZXkgPSBgJHtwcmVmZXJyZWRLZXl9LSR7KytpbmRleH1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld0tleTtcclxuICB9O1xyXG5cclxuICBvbktleUNoYW5nZSA9IG9sZFZhbHVlID0+IHtcclxuICAgIHJldHVybiAodmFsdWUsIGVycm9yU2NoZW1hKSA9PiB7XHJcbiAgICAgIGlmIChvbGRWYWx1ZSA9PT0gdmFsdWUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhbHVlID0gdGhpcy5nZXRBdmFpbGFibGVLZXkodmFsdWUsIHRoaXMucHJvcHMuZm9ybURhdGEpO1xyXG4gICAgICBjb25zdCBuZXdGb3JtRGF0YSA9IHsgLi4udGhpcy5wcm9wcy5mb3JtRGF0YSB9O1xyXG4gICAgICBjb25zdCBuZXdLZXlzID0geyBbb2xkVmFsdWVdOiB2YWx1ZSB9O1xyXG4gICAgICBjb25zdCBrZXlWYWx1ZXMgPSBPYmplY3Qua2V5cyhuZXdGb3JtRGF0YSkubWFwKGtleSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3S2V5ID0gbmV3S2V5c1trZXldIHx8IGtleTtcclxuICAgICAgICByZXR1cm4geyBbbmV3S2V5XTogbmV3Rm9ybURhdGFba2V5XSB9O1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmVuYW1lZE9iaiA9IE9iamVjdC5hc3NpZ24oe30sIC4uLmtleVZhbHVlcyk7XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgd2FzUHJvcGVydHlLZXlNb2RpZmllZDogdHJ1ZSB9KTtcclxuXHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoXHJcbiAgICAgICAgcmVuYW1lZE9iaixcclxuICAgICAgICBlcnJvclNjaGVtYSAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5lcnJvclNjaGVtYSAmJiB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuZXJyb3JTY2hlbWEsXHJcbiAgICAgICAgICAgIFt2YWx1ZV06IGVycm9yU2NoZW1hLFxyXG4gICAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBnZXREZWZhdWx0VmFsdWUodHlwZSkge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJzdHJpbmdcIjpcclxuICAgICAgICByZXR1cm4gXCJOZXcgVmFsdWVcIjtcclxuICAgICAgY2FzZSBcImFycmF5XCI6XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICBjYXNlIFwiYm9vbGVhblwiOlxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgY2FzZSBcIm51bGxcIjpcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgY2FzZSBcIm51bWJlclwiOlxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICBjYXNlIFwib2JqZWN0XCI6XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vIFdlIGRvbid0IGhhdmUgYSBkYXRhdHlwZSBmb3Igc29tZSByZWFzb24gKHBlcmhhcHMgYWRkaXRpb25hbFByb3BlcnRpZXMgd2FzIHRydWUpXHJcbiAgICAgICAgcmV0dXJuIFwiTmV3IFZhbHVlXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGRDbGljayA9IHNjaGVtYSA9PiAoKSA9PiB7XHJcbiAgICBsZXQgdHlwZSA9IHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcy50eXBlO1xyXG4gICAgY29uc3QgbmV3Rm9ybURhdGEgPSB7IC4uLnRoaXMucHJvcHMuZm9ybURhdGEgfTtcclxuXHJcbiAgICBpZiAoc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KFwiJHJlZlwiKSkge1xyXG4gICAgICBjb25zdCB7IHJlZ2lzdHJ5ID0gZ2V0RGVmYXVsdFJlZ2lzdHJ5KCkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IHJlZlNjaGVtYSA9IHJldHJpZXZlU2NoZW1hKFxyXG4gICAgICAgIHsgJHJlZjogc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzW1wiJHJlZlwiXSB9LFxyXG4gICAgICAgIHJlZ2lzdHJ5LnJvb3RTY2hlbWEsXHJcbiAgICAgICAgdGhpcy5wcm9wcy5mb3JtRGF0YVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdHlwZSA9IHJlZlNjaGVtYS50eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0Zvcm1EYXRhW1xyXG4gICAgICB0aGlzLmdldEF2YWlsYWJsZUtleShcIm5ld0tleVwiLCBuZXdGb3JtRGF0YSlcclxuICAgIF0gPSB0aGlzLmdldERlZmF1bHRWYWx1ZSh0eXBlKTtcclxuXHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ld0Zvcm1EYXRhKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHVpU2NoZW1hLFxyXG4gICAgICBmb3JtRGF0YSxcclxuICAgICAgZXJyb3JTY2hlbWEsXHJcbiAgICAgIGlkU2NoZW1hLFxyXG4gICAgICBuYW1lLFxyXG4gICAgICByZXF1aXJlZCxcclxuICAgICAgZGlzYWJsZWQsXHJcbiAgICAgIHJlYWRvbmx5LFxyXG4gICAgICBoaWRlRXJyb3IsXHJcbiAgICAgIGlkUHJlZml4LFxyXG4gICAgICBpZFNlcGFyYXRvcixcclxuICAgICAgb25CbHVyLFxyXG4gICAgICBvbkZvY3VzLFxyXG4gICAgICByZWdpc3RyeSA9IGdldERlZmF1bHRSZWdpc3RyeSgpLFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgY29uc3QgeyByb290U2NoZW1hLCBmaWVsZHMsIGZvcm1Db250ZXh0IH0gPSByZWdpc3RyeTtcclxuICAgIGNvbnN0IHsgU2NoZW1hRmllbGQsIFRpdGxlRmllbGQsIERlc2NyaXB0aW9uRmllbGQgfSA9IGZpZWxkcztcclxuICAgIGNvbnN0IHNjaGVtYSA9IHJldHJpZXZlU2NoZW1hKHRoaXMucHJvcHMuc2NoZW1hLCByb290U2NoZW1hLCBmb3JtRGF0YSk7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBzY2hlbWEudGl0bGUgPT09IHVuZGVmaW5lZCA/IG5hbWUgOiBzY2hlbWEudGl0bGU7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHVpU2NoZW1hW1widWk6ZGVzY3JpcHRpb25cIl0gfHwgc2NoZW1hLmRlc2NyaXB0aW9uO1xyXG4gICAgbGV0IG9yZGVyZWRQcm9wZXJ0aWVzO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzIHx8IHt9KTtcclxuICAgICAgb3JkZXJlZFByb3BlcnRpZXMgPSBvcmRlclByb3BlcnRpZXMocHJvcGVydGllcywgdWlTY2hlbWFbXCJ1aTpvcmRlclwiXSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29uZmlnLWVycm9yXCIgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+XHJcbiAgICAgICAgICAgIEludmFsaWQge25hbWUgfHwgXCJyb290XCJ9IG9iamVjdCBmaWVsZCBjb25maWd1cmF0aW9uOlxyXG4gICAgICAgICAgICA8ZW0+e2Vyci5tZXNzYWdlfTwvZW0+LlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoc2NoZW1hKX08L3ByZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBUZW1wbGF0ZSA9XHJcbiAgICAgIHVpU2NoZW1hW1widWk6T2JqZWN0RmllbGRUZW1wbGF0ZVwiXSB8fFxyXG4gICAgICByZWdpc3RyeS5PYmplY3RGaWVsZFRlbXBsYXRlIHx8XHJcbiAgICAgIERlZmF1bHRPYmplY3RGaWVsZFRlbXBsYXRlO1xyXG5cclxuICAgIGNvbnN0IHRlbXBsYXRlUHJvcHMgPSB7XHJcbiAgICAgIHRpdGxlOiB1aVNjaGVtYVtcInVpOnRpdGxlXCJdIHx8IHRpdGxlLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgVGl0bGVGaWVsZCxcclxuICAgICAgRGVzY3JpcHRpb25GaWVsZCxcclxuICAgICAgcHJvcGVydGllczogb3JkZXJlZFByb3BlcnRpZXMubWFwKG5hbWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFkZGVkQnlBZGRpdGlvbmFsUHJvcGVydGllcyA9IHNjaGVtYS5wcm9wZXJ0aWVzW1xyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgIF0uaGFzT3duUHJvcGVydHkoQURESVRJT05BTF9QUk9QRVJUWV9GTEFHKTtcclxuICAgICAgICBjb25zdCBmaWVsZFVpU2NoZW1hID0gYWRkZWRCeUFkZGl0aW9uYWxQcm9wZXJ0aWVzXHJcbiAgICAgICAgICA/IHVpU2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzXHJcbiAgICAgICAgICA6IHVpU2NoZW1hW25hbWVdO1xyXG4gICAgICAgIGNvbnN0IGhpZGRlbiA9IGZpZWxkVWlTY2hlbWEgJiYgZmllbGRVaVNjaGVtYVtcInVpOndpZGdldFwiXSA9PT0gXCJoaWRkZW5cIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IChcclxuICAgICAgICAgICAgPFNjaGVtYUZpZWxkXHJcbiAgICAgICAgICAgICAga2V5PXtuYW1lfVxyXG4gICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RoaXMuaXNSZXF1aXJlZChuYW1lKX1cclxuICAgICAgICAgICAgICBzY2hlbWE9e3NjaGVtYS5wcm9wZXJ0aWVzW25hbWVdfVxyXG4gICAgICAgICAgICAgIHVpU2NoZW1hPXtmaWVsZFVpU2NoZW1hfVxyXG4gICAgICAgICAgICAgIGVycm9yU2NoZW1hPXtlcnJvclNjaGVtYVtuYW1lXX1cclxuICAgICAgICAgICAgICBpZFNjaGVtYT17aWRTY2hlbWFbbmFtZV19XHJcbiAgICAgICAgICAgICAgaWRQcmVmaXg9e2lkUHJlZml4fVxyXG4gICAgICAgICAgICAgIGlkU2VwYXJhdG9yPXtpZFNlcGFyYXRvcn1cclxuICAgICAgICAgICAgICBmb3JtRGF0YT17KGZvcm1EYXRhIHx8IHt9KVtuYW1lXX1cclxuICAgICAgICAgICAgICB3YXNQcm9wZXJ0eUtleU1vZGlmaWVkPXt0aGlzLnN0YXRlLndhc1Byb3BlcnR5S2V5TW9kaWZpZWR9XHJcbiAgICAgICAgICAgICAgb25LZXlDaGFuZ2U9e3RoaXMub25LZXlDaGFuZ2UobmFtZSl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Qcm9wZXJ0eUNoYW5nZShcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBhZGRlZEJ5QWRkaXRpb25hbFByb3BlcnRpZXNcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17b25CbHVyfVxyXG4gICAgICAgICAgICAgIG9uRm9jdXM9e29uRm9jdXN9XHJcbiAgICAgICAgICAgICAgcmVnaXN0cnk9e3JlZ2lzdHJ5fVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgICByZWFkb25seT17cmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgaGlkZUVycm9yPXtoaWRlRXJyb3J9XHJcbiAgICAgICAgICAgICAgb25Ecm9wUHJvcGVydHlDbGljaz17dGhpcy5vbkRyb3BQcm9wZXJ0eUNsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICByZWFkb25seSxcclxuICAgICAgICAgIGRpc2FibGVkLFxyXG4gICAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgICBoaWRkZW4sXHJcbiAgICAgICAgfTtcclxuICAgICAgfSksXHJcbiAgICAgIHJlYWRvbmx5LFxyXG4gICAgICBkaXNhYmxlZCxcclxuICAgICAgcmVxdWlyZWQsXHJcbiAgICAgIGlkU2NoZW1hLFxyXG4gICAgICB1aVNjaGVtYSxcclxuICAgICAgc2NoZW1hLFxyXG4gICAgICBmb3JtRGF0YSxcclxuICAgICAgZm9ybUNvbnRleHQsXHJcbiAgICAgIHJlZ2lzdHJ5LFxyXG4gICAgfTtcclxuICAgIHJldHVybiA8VGVtcGxhdGUgey4uLnRlbXBsYXRlUHJvcHN9IG9uQWRkQ2xpY2s9e3RoaXMuaGFuZGxlQWRkQ2xpY2t9IC8+O1xyXG4gIH1cclxufVxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gIE9iamVjdEZpZWxkLnByb3BUeXBlcyA9IHR5cGVzLmZpZWxkUHJvcHM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9iamVjdEZpZWxkO1xyXG4iXX0=