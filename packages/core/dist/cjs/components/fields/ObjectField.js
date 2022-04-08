"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AddButton = _interopRequireDefault(require("../AddButton"));

var _react = _interopRequireWildcard(require("react"));

var types = _interopRequireWildcard(require("../../types"));

var _utils = require("../../utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function DefaultObjectFieldTemplate(props) {
  var TitleField = props.TitleField,
      DescriptionField = props.DescriptionField;
  return _react["default"].createElement("fieldset", {
    id: props.idSchema.$id
  }, (props.uiSchema["ui:title"] || props.title) && _react["default"].createElement(TitleField, {
    id: "".concat(props.idSchema.$id, "__title"),
    title: props.title || props.uiSchema["ui:title"],
    required: props.required,
    formContext: props.formContext
  }), props.description && _react["default"].createElement(DescriptionField, {
    id: "".concat(props.idSchema.$id, "__description"),
    description: props.description,
    formContext: props.formContext
  }), props.properties.map(function (prop) {
    return prop.content;
  }), (0, _utils.canExpand)(props.schema, props.uiSchema, props.formData) && _react["default"].createElement(_AddButton["default"], {
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
              registry = _this$props$registry === void 0 ? (0, _utils.getDefaultRegistry)() : _this$props$registry;
          var refSchema = (0, _utils.retrieveSchema)({
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
          registry = _this$props2$registry === void 0 ? (0, _utils.getDefaultRegistry)() : _this$props2$registry;
      var rootSchema = registry.rootSchema,
          fields = registry.fields,
          formContext = registry.formContext;
      var SchemaField = fields.SchemaField,
          TitleField = fields.TitleField,
          DescriptionField = fields.DescriptionField;
      var schema = (0, _utils.retrieveSchema)(this.props.schema, rootSchema, formData);
      var title = schema.title === undefined ? name : schema.title;
      var description = uiSchema["ui:description"] || schema.description;
      var orderedProperties;

      try {
        var properties = Object.keys(schema.properties || {});
        orderedProperties = (0, _utils.orderProperties)(properties, uiSchema["ui:order"]);
      } catch (err) {
        return _react["default"].createElement("div", null, _react["default"].createElement("p", {
          className: "config-error",
          style: {
            color: "red"
          }
        }, "Invalid ", name || "root", " object field configuration:", _react["default"].createElement("em", null, err.message), "."), _react["default"].createElement("pre", null, JSON.stringify(schema)));
      }

      var Template = uiSchema["ui:ObjectFieldTemplate"] || registry.ObjectFieldTemplate || DefaultObjectFieldTemplate;
      var templateProps = {
        title: uiSchema["ui:title"] || title,
        description: description,
        TitleField: TitleField,
        DescriptionField: DescriptionField,
        properties: orderedProperties.map(function (name) {
          var addedByAdditionalProperties = schema.properties[name].hasOwnProperty(_utils.ADDITIONAL_PROPERTY_FLAG);
          var fieldUiSchema = addedByAdditionalProperties ? uiSchema.additionalProperties : uiSchema[name];
          var hidden = fieldUiSchema && fieldUiSchema["ui:widget"] === "hidden";
          return {
            content: _react["default"].createElement(SchemaField, {
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
      return _react["default"].createElement(Template, _extends({}, templateProps, {
        onAddClick: this.handleAddClick
      }));
    }
  }]);

  return ObjectField;
}(_react.Component);

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

var _default = ObjectField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpZWxkcy9PYmplY3RGaWVsZC5qcyJdLCJuYW1lcyI6WyJEZWZhdWx0T2JqZWN0RmllbGRUZW1wbGF0ZSIsInByb3BzIiwiVGl0bGVGaWVsZCIsIkRlc2NyaXB0aW9uRmllbGQiLCJpZFNjaGVtYSIsIiRpZCIsInVpU2NoZW1hIiwidGl0bGUiLCJyZXF1aXJlZCIsImZvcm1Db250ZXh0IiwiZGVzY3JpcHRpb24iLCJwcm9wZXJ0aWVzIiwibWFwIiwicHJvcCIsImNvbnRlbnQiLCJzY2hlbWEiLCJmb3JtRGF0YSIsIm9uQWRkQ2xpY2siLCJkaXNhYmxlZCIsInJlYWRvbmx5IiwiT2JqZWN0RmllbGQiLCJ3YXNQcm9wZXJ0eUtleU1vZGlmaWVkIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJuYW1lIiwiYWRkZWRCeUFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwidmFsdWUiLCJlcnJvclNjaGVtYSIsInVuZGVmaW5lZCIsIm5ld0Zvcm1EYXRhIiwib25DaGFuZ2UiLCJrZXkiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29waWVkRm9ybURhdGEiLCJwcmVmZXJyZWRLZXkiLCJpbmRleCIsIm5ld0tleSIsImhhc093blByb3BlcnR5Iiwib2xkVmFsdWUiLCJnZXRBdmFpbGFibGVLZXkiLCJuZXdLZXlzIiwia2V5VmFsdWVzIiwiT2JqZWN0Iiwia2V5cyIsInJlbmFtZWRPYmoiLCJhc3NpZ24iLCJzZXRTdGF0ZSIsInR5cGUiLCJyZWdpc3RyeSIsInJlZlNjaGVtYSIsIiRyZWYiLCJyb290U2NoZW1hIiwiZ2V0RGVmYXVsdFZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiaW5kZXhPZiIsImhpZGVFcnJvciIsImlkUHJlZml4IiwiaWRTZXBhcmF0b3IiLCJvbkJsdXIiLCJvbkZvY3VzIiwiZmllbGRzIiwiU2NoZW1hRmllbGQiLCJvcmRlcmVkUHJvcGVydGllcyIsImVyciIsImNvbG9yIiwibWVzc2FnZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJUZW1wbGF0ZSIsIk9iamVjdEZpZWxkVGVtcGxhdGUiLCJ0ZW1wbGF0ZVByb3BzIiwiQURESVRJT05BTF9QUk9QRVJUWV9GTEFHIiwiZmllbGRVaVNjaGVtYSIsImhpZGRlbiIsImlzUmVxdWlyZWQiLCJzdGF0ZSIsIm9uS2V5Q2hhbmdlIiwib25Qcm9wZXJ0eUNoYW5nZSIsIm9uRHJvcFByb3BlcnR5Q2xpY2siLCJoYW5kbGVBZGRDbGljayIsIkNvbXBvbmVudCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInByb3BUeXBlcyIsInR5cGVzIiwiZmllbGRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLFNBQVNBLDBCQUFULENBQW9DQyxLQUFwQyxFQUEyQztBQUFBLE1BQ2pDQyxVQURpQyxHQUNBRCxLQURBLENBQ2pDQyxVQURpQztBQUFBLE1BQ3JCQyxnQkFEcUIsR0FDQUYsS0FEQSxDQUNyQkUsZ0JBRHFCO0FBRXpDLFNBQ0U7QUFBVSxJQUFBLEVBQUUsRUFBRUYsS0FBSyxDQUFDRyxRQUFOLENBQWVDO0FBQTdCLEtBQ0csQ0FBQ0osS0FBSyxDQUFDSyxRQUFOLENBQWUsVUFBZixLQUE4QkwsS0FBSyxDQUFDTSxLQUFyQyxLQUNDLGdDQUFDLFVBQUQ7QUFDRSxJQUFBLEVBQUUsWUFBS04sS0FBSyxDQUFDRyxRQUFOLENBQWVDLEdBQXBCLFlBREo7QUFFRSxJQUFBLEtBQUssRUFBRUosS0FBSyxDQUFDTSxLQUFOLElBQWVOLEtBQUssQ0FBQ0ssUUFBTixDQUFlLFVBQWYsQ0FGeEI7QUFHRSxJQUFBLFFBQVEsRUFBRUwsS0FBSyxDQUFDTyxRQUhsQjtBQUlFLElBQUEsV0FBVyxFQUFFUCxLQUFLLENBQUNRO0FBSnJCLElBRkosRUFTR1IsS0FBSyxDQUFDUyxXQUFOLElBQ0MsZ0NBQUMsZ0JBQUQ7QUFDRSxJQUFBLEVBQUUsWUFBS1QsS0FBSyxDQUFDRyxR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XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBvcmRlclByb3BlcnRpZXMsXHJcbiAgcmV0cmlldmVTY2hlbWEsXHJcbiAgZ2V0RGVmYXVsdFJlZ2lzdHJ5LFxyXG4gIGNhbkV4cGFuZCxcclxuICBBRERJVElPTkFMX1BST1BFUlRZX0ZMQUcsXHJcbn0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XHJcblxyXG5mdW5jdGlvbiBEZWZhdWx0T2JqZWN0RmllbGRUZW1wbGF0ZShwcm9wcykge1xyXG4gIGNvbnN0IHsgVGl0bGVGaWVsZCwgRGVzY3JpcHRpb25GaWVsZCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmaWVsZHNldCBpZD17cHJvcHMuaWRTY2hlbWEuJGlkfT5cclxuICAgICAgeyhwcm9wcy51aVNjaGVtYVtcInVpOnRpdGxlXCJdIHx8IHByb3BzLnRpdGxlKSAmJiAoXHJcbiAgICAgICAgPFRpdGxlRmllbGRcclxuICAgICAgICAgIGlkPXtgJHtwcm9wcy5pZFNjaGVtYS4kaWR9X190aXRsZWB9XHJcbiAgICAgICAgICB0aXRsZT17cHJvcHMudGl0bGUgfHwgcHJvcHMudWlTY2hlbWFbXCJ1aTp0aXRsZVwiXX1cclxuICAgICAgICAgIHJlcXVpcmVkPXtwcm9wcy5yZXF1aXJlZH1cclxuICAgICAgICAgIGZvcm1Db250ZXh0PXtwcm9wcy5mb3JtQ29udGV4dH1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7cHJvcHMuZGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgIDxEZXNjcmlwdGlvbkZpZWxkXHJcbiAgICAgICAgICBpZD17YCR7cHJvcHMuaWRTY2hlbWEuJGlkfV9fZGVzY3JpcHRpb25gfVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e3Byb3BzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgZm9ybUNvbnRleHQ9e3Byb3BzLmZvcm1Db250ZXh0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtwcm9wcy5wcm9wZXJ0aWVzLm1hcChwcm9wID0+IHByb3AuY29udGVudCl9XHJcbiAgICAgIHtjYW5FeHBhbmQocHJvcHMuc2NoZW1hLCBwcm9wcy51aVNjaGVtYSwgcHJvcHMuZm9ybURhdGEpICYmIChcclxuICAgICAgICA8QWRkQnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtcHJvcGVydHktZXhwYW5kXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQWRkQ2xpY2socHJvcHMuc2NoZW1hKX1cclxuICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZCB8fCBwcm9wcy5yZWFkb25seX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC9maWVsZHNldD5cclxuICApO1xyXG59XHJcblxyXG5jbGFzcyBPYmplY3RGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHVpU2NoZW1hOiB7fSxcclxuICAgIGZvcm1EYXRhOiB7fSxcclxuICAgIGVycm9yU2NoZW1hOiB7fSxcclxuICAgIGlkU2NoZW1hOiB7fSxcclxuICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIHJlYWRvbmx5OiBmYWxzZSxcclxuICB9O1xyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIHdhc1Byb3BlcnR5S2V5TW9kaWZpZWQ6IGZhbHNlLFxyXG4gICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IHt9LFxyXG4gIH07XHJcblxyXG4gIGlzUmVxdWlyZWQobmFtZSkge1xyXG4gICAgY29uc3Qgc2NoZW1hID0gdGhpcy5wcm9wcy5zY2hlbWE7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBBcnJheS5pc0FycmF5KHNjaGVtYS5yZXF1aXJlZCkgJiYgc2NoZW1hLnJlcXVpcmVkLmluZGV4T2YobmFtZSkgIT09IC0xXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgb25Qcm9wZXJ0eUNoYW5nZSA9IChuYW1lLCBhZGRlZEJ5QWRkaXRpb25hbFByb3BlcnRpZXMgPSBmYWxzZSkgPT4ge1xyXG4gICAgcmV0dXJuICh2YWx1ZSwgZXJyb3JTY2hlbWEpID0+IHtcclxuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgYWRkZWRCeUFkZGl0aW9uYWxQcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgLy8gRG9uJ3Qgc2V0IHZhbHVlID0gdW5kZWZpbmVkIGZvciBmaWVsZHMgYWRkZWQgYnlcclxuICAgICAgICAvLyBhZGRpdGlvbmFsUHJvcGVydGllcy4gRG9pbmcgc28gcmVtb3ZlcyB0aGVtIGZyb20gdGhlXHJcbiAgICAgICAgLy8gZm9ybURhdGEsIHdoaWNoIGNhdXNlcyB0aGVtIHRvIGNvbXBsZXRlbHkgZGlzYXBwZWFyXHJcbiAgICAgICAgLy8gKGluY2x1ZGluZyB0aGUgaW5wdXQgZmllbGQgZm9yIHRoZSBwcm9wZXJ0eSBuYW1lKS4gVW5saWtlXHJcbiAgICAgICAgLy8gZmllbGRzIHdoaWNoIGFyZSBcIm1hbmRhdGVkXCIgYnkgdGhlIHNjaGVtYSwgdGhlc2UgZmllbGRzIGNhblxyXG4gICAgICAgIC8vIGJlIHNldCB0byB1bmRlZmluZWQgYnkgY2xpY2tpbmcgYSBcImRlbGV0ZSBmaWVsZFwiIGJ1dHRvbiwgc29cclxuICAgICAgICAvLyBzZXQgZW1wdHkgdmFsdWVzIHRvIHRoZSBlbXB0eSBzdHJpbmcuXHJcbiAgICAgICAgdmFsdWUgPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG5ld0Zvcm1EYXRhID0geyAuLi50aGlzLnByb3BzLmZvcm1EYXRhLCBbbmFtZV06IHZhbHVlIH07XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoXHJcbiAgICAgICAgbmV3Rm9ybURhdGEsXHJcbiAgICAgICAgZXJyb3JTY2hlbWEgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMuZXJyb3JTY2hlbWEgJiYge1xyXG4gICAgICAgICAgICAuLi50aGlzLnByb3BzLmVycm9yU2NoZW1hLFxyXG4gICAgICAgICAgICBbbmFtZV06IGVycm9yU2NoZW1hLFxyXG4gICAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBvbkRyb3BQcm9wZXJ0eUNsaWNrID0ga2V5ID0+IHtcclxuICAgIHJldHVybiBldmVudCA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHsgb25DaGFuZ2UsIGZvcm1EYXRhIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCBjb3BpZWRGb3JtRGF0YSA9IHsgLi4uZm9ybURhdGEgfTtcclxuICAgICAgZGVsZXRlIGNvcGllZEZvcm1EYXRhW2tleV07XHJcbiAgICAgIG9uQ2hhbmdlKGNvcGllZEZvcm1EYXRhKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgZ2V0QXZhaWxhYmxlS2V5ID0gKHByZWZlcnJlZEtleSwgZm9ybURhdGEpID0+IHtcclxuICAgIHZhciBpbmRleCA9IDA7XHJcbiAgICB2YXIgbmV3S2V5ID0gcHJlZmVycmVkS2V5O1xyXG4gICAgd2hpbGUgKGZvcm1EYXRhLmhhc093blByb3BlcnR5KG5ld0tleSkpIHtcclxuICAgICAgbmV3S2V5ID0gYCR7cHJlZmVycmVkS2V5fS0keysraW5kZXh9YDtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdLZXk7XHJcbiAgfTtcclxuXHJcbiAgb25LZXlDaGFuZ2UgPSBvbGRWYWx1ZSA9PiB7XHJcbiAgICByZXR1cm4gKHZhbHVlLCBlcnJvclNjaGVtYSkgPT4ge1xyXG4gICAgICBpZiAob2xkVmFsdWUgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YWx1ZSA9IHRoaXMuZ2V0QXZhaWxhYmxlS2V5KHZhbHVlLCB0aGlzLnByb3BzLmZvcm1EYXRhKTtcclxuICAgICAgY29uc3QgbmV3Rm9ybURhdGEgPSB7IC4uLnRoaXMucHJvcHMuZm9ybURhdGEgfTtcclxuICAgICAgY29uc3QgbmV3S2V5cyA9IHsgW29sZFZhbHVlXTogdmFsdWUgfTtcclxuICAgICAgY29uc3Qga2V5VmFsdWVzID0gT2JqZWN0LmtleXMobmV3Rm9ybURhdGEpLm1hcChrZXkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0tleSA9IG5ld0tleXNba2V5XSB8fCBrZXk7XHJcbiAgICAgICAgcmV0dXJuIHsgW25ld0tleV06IG5ld0Zvcm1EYXRhW2tleV0gfTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHJlbmFtZWRPYmogPSBPYmplY3QuYXNzaWduKHt9LCAuLi5rZXlWYWx1ZXMpO1xyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdhc1Byb3BlcnR5S2V5TW9kaWZpZWQ6IHRydWUgfSk7XHJcblxyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKFxyXG4gICAgICAgIHJlbmFtZWRPYmosXHJcbiAgICAgICAgZXJyb3JTY2hlbWEgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMuZXJyb3JTY2hlbWEgJiYge1xyXG4gICAgICAgICAgICAuLi50aGlzLnByb3BzLmVycm9yU2NoZW1hLFxyXG4gICAgICAgICAgICBbdmFsdWVdOiBlcnJvclNjaGVtYSxcclxuICAgICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgZ2V0RGVmYXVsdFZhbHVlKHR5cGUpIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIFwic3RyaW5nXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiTmV3IFZhbHVlXCI7XHJcbiAgICAgIGNhc2UgXCJhcnJheVwiOlxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgY2FzZSBcImJvb2xlYW5cIjpcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGNhc2UgXCJudWxsXCI6XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIGNhc2UgXCJudW1iZXJcIjpcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgY2FzZSBcIm9iamVjdFwiOlxyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyBXZSBkb24ndCBoYXZlIGEgZGF0YXR5cGUgZm9yIHNvbWUgcmVhc29uIChwZXJoYXBzIGFkZGl0aW9uYWxQcm9wZXJ0aWVzIHdhcyB0cnVlKVxyXG4gICAgICAgIHJldHVybiBcIk5ldyBWYWx1ZVwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkQ2xpY2sgPSBzY2hlbWEgPT4gKCkgPT4ge1xyXG4gICAgbGV0IHR5cGUgPSBzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMudHlwZTtcclxuICAgIGNvbnN0IG5ld0Zvcm1EYXRhID0geyAuLi50aGlzLnByb3BzLmZvcm1EYXRhIH07XHJcblxyXG4gICAgaWYgKHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShcIiRyZWZcIikpIHtcclxuICAgICAgY29uc3QgeyByZWdpc3RyeSA9IGdldERlZmF1bHRSZWdpc3RyeSgpIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCByZWZTY2hlbWEgPSByZXRyaWV2ZVNjaGVtYShcclxuICAgICAgICB7ICRyZWY6IHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllc1tcIiRyZWZcIl0gfSxcclxuICAgICAgICByZWdpc3RyeS5yb290U2NoZW1hLFxyXG4gICAgICAgIHRoaXMucHJvcHMuZm9ybURhdGFcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHR5cGUgPSByZWZTY2hlbWEudHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBuZXdGb3JtRGF0YVtcclxuICAgICAgdGhpcy5nZXRBdmFpbGFibGVLZXkoXCJuZXdLZXlcIiwgbmV3Rm9ybURhdGEpXHJcbiAgICBdID0gdGhpcy5nZXREZWZhdWx0VmFsdWUodHlwZSk7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuZXdGb3JtRGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB1aVNjaGVtYSxcclxuICAgICAgZm9ybURhdGEsXHJcbiAgICAgIGVycm9yU2NoZW1hLFxyXG4gICAgICBpZFNjaGVtYSxcclxuICAgICAgbmFtZSxcclxuICAgICAgcmVxdWlyZWQsXHJcbiAgICAgIGRpc2FibGVkLFxyXG4gICAgICByZWFkb25seSxcclxuICAgICAgaGlkZUVycm9yLFxyXG4gICAgICBpZFByZWZpeCxcclxuICAgICAgaWRTZXBhcmF0b3IsXHJcbiAgICAgIG9uQmx1cixcclxuICAgICAgb25Gb2N1cyxcclxuICAgICAgcmVnaXN0cnkgPSBnZXREZWZhdWx0UmVnaXN0cnkoKSxcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIGNvbnN0IHsgcm9vdFNjaGVtYSwgZmllbGRzLCBmb3JtQ29udGV4dCB9ID0gcmVnaXN0cnk7XHJcbiAgICBjb25zdCB7IFNjaGVtYUZpZWxkLCBUaXRsZUZpZWxkLCBEZXNjcmlwdGlvbkZpZWxkIH0gPSBmaWVsZHM7XHJcbiAgICBjb25zdCBzY2hlbWEgPSByZXRyaWV2ZVNjaGVtYSh0aGlzLnByb3BzLnNjaGVtYSwgcm9vdFNjaGVtYSwgZm9ybURhdGEpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gc2NoZW1hLnRpdGxlID09PSB1bmRlZmluZWQgPyBuYW1lIDogc2NoZW1hLnRpdGxlO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB1aVNjaGVtYVtcInVpOmRlc2NyaXB0aW9uXCJdIHx8IHNjaGVtYS5kZXNjcmlwdGlvbjtcclxuICAgIGxldCBvcmRlcmVkUHJvcGVydGllcztcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcyB8fCB7fSk7XHJcbiAgICAgIG9yZGVyZWRQcm9wZXJ0aWVzID0gb3JkZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIHVpU2NoZW1hW1widWk6b3JkZXJcIl0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbmZpZy1lcnJvclwiIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PlxyXG4gICAgICAgICAgICBJbnZhbGlkIHtuYW1lIHx8IFwicm9vdFwifSBvYmplY3QgZmllbGQgY29uZmlndXJhdGlvbjpcclxuICAgICAgICAgICAgPGVtPntlcnIubWVzc2FnZX08L2VtPi5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHNjaGVtYSl9PC9wcmU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgVGVtcGxhdGUgPVxyXG4gICAgICB1aVNjaGVtYVtcInVpOk9iamVjdEZpZWxkVGVtcGxhdGVcIl0gfHxcclxuICAgICAgcmVnaXN0cnkuT2JqZWN0RmllbGRUZW1wbGF0ZSB8fFxyXG4gICAgICBEZWZhdWx0T2JqZWN0RmllbGRUZW1wbGF0ZTtcclxuXHJcbiAgICBjb25zdCB0ZW1wbGF0ZVByb3BzID0ge1xyXG4gICAgICB0aXRsZTogdWlTY2hlbWFbXCJ1aTp0aXRsZVwiXSB8fCB0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIFRpdGxlRmllbGQsXHJcbiAgICAgIERlc2NyaXB0aW9uRmllbGQsXHJcbiAgICAgIHByb3BlcnRpZXM6IG9yZGVyZWRQcm9wZXJ0aWVzLm1hcChuYW1lID0+IHtcclxuICAgICAgICBjb25zdCBhZGRlZEJ5QWRkaXRpb25hbFByb3BlcnRpZXMgPSBzY2hlbWEucHJvcGVydGllc1tcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICBdLmhhc093blByb3BlcnR5KEFERElUSU9OQUxfUFJPUEVSVFlfRkxBRyk7XHJcbiAgICAgICAgY29uc3QgZmllbGRVaVNjaGVtYSA9IGFkZGVkQnlBZGRpdGlvbmFsUHJvcGVydGllc1xyXG4gICAgICAgICAgPyB1aVNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllc1xyXG4gICAgICAgICAgOiB1aVNjaGVtYVtuYW1lXTtcclxuICAgICAgICBjb25zdCBoaWRkZW4gPSBmaWVsZFVpU2NoZW1hICYmIGZpZWxkVWlTY2hlbWFbXCJ1aTp3aWRnZXRcIl0gPT09IFwiaGlkZGVuXCI7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBjb250ZW50OiAoXHJcbiAgICAgICAgICAgIDxTY2hlbWFGaWVsZFxyXG4gICAgICAgICAgICAgIGtleT17bmFtZX1cclxuICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkPXt0aGlzLmlzUmVxdWlyZWQobmFtZSl9XHJcbiAgICAgICAgICAgICAgc2NoZW1hPXtzY2hlbWEucHJvcGVydGllc1tuYW1lXX1cclxuICAgICAgICAgICAgICB1aVNjaGVtYT17ZmllbGRVaVNjaGVtYX1cclxuICAgICAgICAgICAgICBlcnJvclNjaGVtYT17ZXJyb3JTY2hlbWFbbmFtZV19XHJcbiAgICAgICAgICAgICAgaWRTY2hlbWE9e2lkU2NoZW1hW25hbWVdfVxyXG4gICAgICAgICAgICAgIGlkUHJlZml4PXtpZFByZWZpeH1cclxuICAgICAgICAgICAgICBpZFNlcGFyYXRvcj17aWRTZXBhcmF0b3J9XHJcbiAgICAgICAgICAgICAgZm9ybURhdGE9eyhmb3JtRGF0YSB8fCB7fSlbbmFtZV19XHJcbiAgICAgICAgICAgICAgd2FzUHJvcGVydHlLZXlNb2RpZmllZD17dGhpcy5zdGF0ZS53YXNQcm9wZXJ0eUtleU1vZGlmaWVkfVxyXG4gICAgICAgICAgICAgIG9uS2V5Q2hhbmdlPXt0aGlzLm9uS2V5Q2hhbmdlKG5hbWUpfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uUHJvcGVydHlDaGFuZ2UoXHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRCeUFkZGl0aW9uYWxQcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICBvbkJsdXI9e29uQmx1cn1cclxuICAgICAgICAgICAgICBvbkZvY3VzPXtvbkZvY3VzfVxyXG4gICAgICAgICAgICAgIHJlZ2lzdHJ5PXtyZWdpc3RyeX1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgcmVhZG9ubHk9e3JlYWRvbmx5fVxyXG4gICAgICAgICAgICAgIGhpZGVFcnJvcj17aGlkZUVycm9yfVxyXG4gICAgICAgICAgICAgIG9uRHJvcFByb3BlcnR5Q2xpY2s9e3RoaXMub25Ecm9wUHJvcGVydHlDbGlja31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgcmVhZG9ubHksXHJcbiAgICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICAgIHJlcXVpcmVkLFxyXG4gICAgICAgICAgaGlkZGVuLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pLFxyXG4gICAgICByZWFkb25seSxcclxuICAgICAgZGlzYWJsZWQsXHJcbiAgICAgIHJlcXVpcmVkLFxyXG4gICAgICBpZFNjaGVtYSxcclxuICAgICAgdWlTY2hlbWEsXHJcbiAgICAgIHNjaGVtYSxcclxuICAgICAgZm9ybURhdGEsXHJcbiAgICAgIGZvcm1Db250ZXh0LFxyXG4gICAgICByZWdpc3RyeSxcclxuICAgIH07XHJcbiAgICByZXR1cm4gPFRlbXBsYXRlIHsuLi50ZW1wbGF0ZVByb3BzfSBvbkFkZENsaWNrPXt0aGlzLmhhbmRsZUFkZENsaWNrfSAvPjtcclxuICB9XHJcbn1cclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICBPYmplY3RGaWVsZC5wcm9wVHlwZXMgPSB0eXBlcy5maWVsZFByb3BzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPYmplY3RGaWVsZDtcclxuIl19