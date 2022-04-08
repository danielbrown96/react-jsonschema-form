"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AddButton = _interopRequireDefault(require("../AddButton"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

var _react = _interopRequireWildcard(require("react"));

var _includes = _interopRequireDefault(require("core-js-pure/es/array/includes"));

var types = _interopRequireWildcard(require("../../types"));

var _utils = require("../../utils");

var _nanoid = require("nanoid");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ArrayFieldTitle(_ref) {
  var TitleField = _ref.TitleField,
      idSchema = _ref.idSchema,
      title = _ref.title,
      required = _ref.required;

  if (!title) {
    return null;
  }

  var id = "".concat(idSchema.$id, "__title");
  return _react["default"].createElement(TitleField, {
    id: id,
    title: title,
    required: required
  });
}

function ArrayFieldDescription(_ref2) {
  var DescriptionField = _ref2.DescriptionField,
      idSchema = _ref2.idSchema,
      description = _ref2.description;

  if (!description) {
    return null;
  }

  var id = "".concat(idSchema.$id, "__description");
  return _react["default"].createElement(DescriptionField, {
    id: id,
    description: description
  });
} // Used in the two templates


function DefaultArrayItem(props) {
  var btnStyle = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: "bold"
  };
  return _react["default"].createElement("div", {
    key: props.key,
    className: props.className
  }, _react["default"].createElement("div", {
    className: props.hasToolbar ? "col-xs-9" : "col-xs-12"
  }, props.children), props.hasToolbar && _react["default"].createElement("div", {
    className: "col-xs-3 array-item-toolbox"
  }, _react["default"].createElement("div", {
    className: "btn-group",
    style: {
      display: "flex",
      justifyContent: "space-around"
    }
  }, (props.hasMoveUp || props.hasMoveDown) && _react["default"].createElement(_IconButton["default"], {
    icon: "arrow-up",
    "aria-label": "Move up",
    className: "array-item-move-up",
    tabIndex: "-1",
    style: btnStyle,
    disabled: props.disabled || props.readonly || !props.hasMoveUp,
    onClick: props.onReorderClick(props.index, props.index - 1)
  }), (props.hasMoveUp || props.hasMoveDown) && _react["default"].createElement(_IconButton["default"], {
    icon: "arrow-down",
    className: "array-item-move-down",
    "aria-label": "Move down",
    tabIndex: "-1",
    style: btnStyle,
    disabled: props.disabled || props.readonly || !props.hasMoveDown,
    onClick: props.onReorderClick(props.index, props.index + 1)
  }), props.hasRemove && _react["default"].createElement(_IconButton["default"], {
    type: "danger",
    icon: "remove",
    "aria-label": "Remove",
    className: "array-item-remove",
    tabIndex: "-1",
    style: btnStyle,
    disabled: props.disabled || props.readonly,
    onClick: props.onDropIndexClick(props.index)
  }))));
}

function DefaultFixedArrayFieldTemplate(props) {
  return _react["default"].createElement("fieldset", {
    className: props.className,
    id: props.idSchema.$id
  }, _react["default"].createElement(ArrayFieldTitle, {
    key: "array-field-title-".concat(props.idSchema.$id),
    TitleField: props.TitleField,
    idSchema: props.idSchema,
    title: props.uiSchema["ui:title"] || props.title,
    required: props.required
  }), (props.uiSchema["ui:description"] || props.schema.description) && _react["default"].createElement("div", {
    className: "field-description",
    key: "field-description-".concat(props.idSchema.$id)
  }, props.uiSchema["ui:description"] || props.schema.description), _react["default"].createElement("div", {
    className: "row array-item-list",
    key: "array-item-list-".concat(props.idSchema.$id)
  }, props.items && props.items.map(DefaultArrayItem)), props.canAdd && _react["default"].createElement(_AddButton["default"], {
    className: "array-item-add",
    onClick: props.onAddClick,
    disabled: props.disabled || props.readonly
  }));
}

function DefaultNormalArrayFieldTemplate(props) {
  return _react["default"].createElement("fieldset", {
    className: props.className,
    id: props.idSchema.$id
  }, _react["default"].createElement(ArrayFieldTitle, {
    key: "array-field-title-".concat(props.idSchema.$id),
    TitleField: props.TitleField,
    idSchema: props.idSchema,
    title: props.uiSchema["ui:title"] || props.title,
    required: props.required
  }), (props.uiSchema["ui:description"] || props.schema.description) && _react["default"].createElement(ArrayFieldDescription, {
    key: "array-field-description-".concat(props.idSchema.$id),
    DescriptionField: props.DescriptionField,
    idSchema: props.idSchema,
    description: props.uiSchema["ui:description"] || props.schema.description
  }), _react["default"].createElement("div", {
    className: "row array-item-list",
    key: "array-item-list-".concat(props.idSchema.$id)
  }, props.items && props.items.map(function (p) {
    return DefaultArrayItem(p);
  })), props.canAdd && _react["default"].createElement(_AddButton["default"], {
    className: "array-item-add",
    onClick: props.onAddClick,
    disabled: props.disabled || props.readonly
  }));
}

function generateRowId() {
  return (0, _nanoid.nanoid)();
}

function generateKeyedFormData(formData) {
  return !Array.isArray(formData) ? [] : formData.map(function (item) {
    return {
      key: generateRowId(),
      item: item
    };
  });
}

function keyedToPlainFormData(keyedFormData) {
  return keyedFormData.map(function (keyedItem) {
    return keyedItem.item;
  });
}

var ArrayField =
/*#__PURE__*/
function (_Component) {
  _inherits(ArrayField, _Component);

  function ArrayField(props) {
    var _this;

    _classCallCheck(this, ArrayField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ArrayField).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "_getNewFormDataRow", function () {
      var _this$props = _this.props,
          schema = _this$props.schema,
          _this$props$registry = _this$props.registry,
          registry = _this$props$registry === void 0 ? (0, _utils.getDefaultRegistry)() : _this$props$registry;
      var rootSchema = registry.rootSchema;
      var itemSchema = schema.items;

      if ((0, _utils.isFixedItems)(schema) && (0, _utils.allowAdditionalItems)(schema)) {
        itemSchema = schema.additionalItems;
      }

      return (0, _utils.getDefaultFormState)(itemSchema, undefined, rootSchema);
    });

    _defineProperty(_assertThisInitialized(_this), "onAddClick", function (event) {
      if (event) {
        event.preventDefault();
      }

      var onChange = _this.props.onChange;
      var newKeyedFormDataRow = {
        key: generateRowId(),
        item: _this._getNewFormDataRow()
      };
      var newKeyedFormData = [].concat(_toConsumableArray(_this.state.keyedFormData), [newKeyedFormDataRow]);

      _this.setState({
        keyedFormData: newKeyedFormData,
        updatedKeyedFormData: true
      }, function () {
        return onChange(keyedToPlainFormData(newKeyedFormData));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAddIndexClick", function (index) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        var onChange = _this.props.onChange;
        var newKeyedFormDataRow = {
          key: generateRowId(),
          item: _this._getNewFormDataRow()
        };

        var newKeyedFormData = _toConsumableArray(_this.state.keyedFormData);

        newKeyedFormData.splice(index, 0, newKeyedFormDataRow);

        _this.setState({
          keyedFormData: newKeyedFormData,
          updatedKeyedFormData: true
        }, function () {
          return onChange(keyedToPlainFormData(newKeyedFormData));
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onDropIndexClick", function (index) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        var onChange = _this.props.onChange;
        var keyedFormData = _this.state.keyedFormData; // refs #195: revalidate to ensure properly reindexing errors

        var newErrorSchema;

        if (_this.props.errorSchema) {
          newErrorSchema = {};
          var errorSchema = _this.props.errorSchema;

          for (var i in errorSchema) {
            i = parseInt(i);

            if (i < index) {
              newErrorSchema[i] = errorSchema[i];
            } else if (i > index) {
              newErrorSchema[i - 1] = errorSchema[i];
            }
          }
        }

        var newKeyedFormData = keyedFormData.filter(function (_, i) {
          return i !== index;
        });

        _this.setState({
          keyedFormData: newKeyedFormData,
          updatedKeyedFormData: true
        }, function () {
          return onChange(keyedToPlainFormData(newKeyedFormData), newErrorSchema);
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onReorderClick", function (index, newIndex) {
      return function (event) {
        if (event) {
          event.preventDefault();
          event.target.blur();
        }

        var onChange = _this.props.onChange;
        var newErrorSchema;

        if (_this.props.errorSchema) {
          newErrorSchema = {};
          var errorSchema = _this.props.errorSchema;

          for (var i in errorSchema) {
            if (i == index) {
              newErrorSchema[newIndex] = errorSchema[index];
            } else if (i == newIndex) {
              newErrorSchema[index] = errorSchema[newIndex];
            } else {
              newErrorSchema[i] = errorSchema[i];
            }
          }
        }

        var keyedFormData = _this.state.keyedFormData;

        function reOrderArray() {
          // Copy item
          var _newKeyedFormData = keyedFormData.slice(); // Moves item from index to newIndex


          _newKeyedFormData.splice(index, 1);

          _newKeyedFormData.splice(newIndex, 0, keyedFormData[index]);

          return _newKeyedFormData;
        }

        var newKeyedFormData = reOrderArray();

        _this.setState({
          keyedFormData: newKeyedFormData
        }, function () {
          return onChange(keyedToPlainFormData(newKeyedFormData), newErrorSchema);
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeForIndex", function (index) {
      return function (value, errorSchema) {
        var _this$props2 = _this.props,
            formData = _this$props2.formData,
            onChange = _this$props2.onChange;
        var newFormData = formData.map(function (item, i) {
          // We need to treat undefined items as nulls to have validation.
          // See https://github.com/tdegrunt/jsonschema/issues/206
          var jsonValue = typeof value === "undefined" ? null : value;
          return index === i ? jsonValue : item;
        });
        onChange(newFormData, errorSchema && _this.props.errorSchema && _objectSpread({}, _this.props.errorSchema, _defineProperty({}, index, errorSchema)));
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectChange", function (value) {
      _this.props.onChange(value);
    });

    var _formData = props.formData;

    var _keyedFormData = generateKeyedFormData(_formData);

    _this.state = {
      keyedFormData: _keyedFormData,
      updatedKeyedFormData: false
    };
    return _this;
  }

  _createClass(ArrayField, [{
    key: "isItemRequired",
    value: function isItemRequired(itemSchema) {
      if (Array.isArray(itemSchema.type)) {
        // While we don't yet support composite/nullable jsonschema types, it's
        // future-proof to check for requirement against these.
        return !(0, _includes["default"])(itemSchema.type, "null");
      } // All non-null array item types are inherently required by design


      return itemSchema.type !== "null";
    }
  }, {
    key: "canAddItem",
    value: function canAddItem(formItems) {
      var _this$props3 = this.props,
          schema = _this$props3.schema,
          uiSchema = _this$props3.uiSchema;

      var _getUiOptions = (0, _utils.getUiOptions)(uiSchema),
          addable = _getUiOptions.addable;

      if (addable !== false) {
        // if ui:options.addable was not explicitly set to false, we can add
        // another item if we have not exceeded maxItems yet
        if (schema.maxItems !== undefined) {
          addable = formItems.length < schema.maxItems;
        } else {
          addable = true;
        }
      }

      return addable;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          schema = _this$props4.schema,
          uiSchema = _this$props4.uiSchema,
          idSchema = _this$props4.idSchema,
          _this$props4$registry = _this$props4.registry,
          registry = _this$props4$registry === void 0 ? (0, _utils.getDefaultRegistry)() : _this$props4$registry;
      var rootSchema = registry.rootSchema;

      if (!schema.hasOwnProperty("items")) {
        var fields = registry.fields;
        var UnsupportedField = fields.UnsupportedField;
        return _react["default"].createElement(UnsupportedField, {
          schema: schema,
          idSchema: idSchema,
          reason: "Missing items definition"
        });
      }

      if ((0, _utils.isMultiSelect)(schema, rootSchema)) {
        // If array has enum or uniqueItems set to true, call renderMultiSelect() to render the default multiselect widget or a custom widget, if specified.
        return this.renderMultiSelect();
      }

      if ((0, _utils.isCustomWidget)(uiSchema)) {
        return this.renderCustomWidget();
      }

      if ((0, _utils.isFixedItems)(schema)) {
        return this.renderFixedArray();
      }

      if ((0, _utils.isFilesArray)(schema, uiSchema, rootSchema)) {
        return this.renderFiles();
      }

      return this.renderNormalArray();
    }
  }, {
    key: "renderNormalArray",
    value: function renderNormalArray() {
      var _this2 = this;

      var _this$props5 = this.props,
          schema = _this$props5.schema,
          uiSchema = _this$props5.uiSchema,
          errorSchema = _this$props5.errorSchema,
          idSchema = _this$props5.idSchema,
          name = _this$props5.name,
          required = _this$props5.required,
          disabled = _this$props5.disabled,
          readonly = _this$props5.readonly,
          hideError = _this$props5.hideError,
          autofocus = _this$props5.autofocus,
          _this$props5$registry = _this$props5.registry,
          registry = _this$props5$registry === void 0 ? (0, _utils.getDefaultRegistry)() : _this$props5$registry,
          onBlur = _this$props5.onBlur,
          onFocus = _this$props5.onFocus,
          idPrefix = _this$props5.idPrefix,
          idSeparator = _this$props5.idSeparator,
          rawErrors = _this$props5.rawErrors;
      var title = schema.title === undefined ? name : schema.title;
      var ArrayFieldTemplate = registry.ArrayFieldTemplate,
          rootSchema = registry.rootSchema,
          fields = registry.fields,
          formContext = registry.formContext;
      var TitleField = fields.TitleField,
          DescriptionField = fields.DescriptionField;
      var itemsSchema = (0, _utils.retrieveSchema)(schema.items, rootSchema);
      var formData = keyedToPlainFormData(this.state.keyedFormData);
      var arrayProps = {
        canAdd: this.canAddItem(formData),
        items: this.state.keyedFormData.map(function (keyedItem, index) {
          var key = keyedItem.key,
              item = keyedItem.item;
          var itemSchema = (0, _utils.retrieveSchema)(schema.items, rootSchema, item);
          var itemErrorSchema = errorSchema ? errorSchema[index] : undefined;
          var itemIdPrefix = idSchema.$id + "_" + index;
          var itemIdSchema = (0, _utils.toIdSchema)(itemSchema, itemIdPrefix, rootSchema, item, idPrefix, idSeparator);
          return _this2.renderArrayFieldItem({
            key: key,
            index: index,
            canMoveUp: index > 0,
            canMoveDown: index < formData.length - 1,
            itemSchema: itemSchema,
            itemIdSchema: itemIdSchema,
            itemErrorSchema: itemErrorSchema,
            itemData: item,
            itemUiSchema: uiSchema.items,
            autofocus: autofocus && index === 0,
            onBlur: onBlur,
            onFocus: onFocus
          });
        }),
        className: "field field-array field-array-of-".concat(itemsSchema.type),
        DescriptionField: DescriptionField,
        disabled: disabled,
        idSchema: idSchema,
        uiSchema: uiSchema,
        onAddClick: this.onAddClick,
        readonly: readonly,
        hideError: hideError,
        required: required,
        schema: schema,
        title: title,
        TitleField: TitleField,
        formContext: formContext,
        formData: formData,
        rawErrors: rawErrors,
        registry: registry
      }; // Check if a custom render function was passed in

      var Component = uiSchema["ui:ArrayFieldTemplate"] || ArrayFieldTemplate || DefaultNormalArrayFieldTemplate;
      return _react["default"].createElement(Component, arrayProps);
    }
  }, {
    key: "renderCustomWidget",
    value: function renderCustomWidget() {
      var _this$props6 = this.props,
          schema = _this$props6.schema,
          idSchema = _this$props6.idSchema,
          uiSchema = _this$props6.uiSchema,
          disabled = _this$props6.disabled,
          readonly = _this$props6.readonly,
          hideError = _this$props6.hideError,
          required = _this$props6.required,
          placeholder = _this$props6.placeholder,
          autofocus = _this$props6.autofocus,
          onBlur = _this$props6.onBlur,
          onFocus = _this$props6.onFocus,
          items = _this$props6.formData,
          _this$props6$registry = _this$props6.registry,
          registry = _this$props6$registry === void 0 ? (0, _utils.getDefaultRegistry)() : _this$props6$registry,
          rawErrors = _this$props6.rawErrors,
          name = _this$props6.name;
      var widgets = registry.widgets,
          formContext = registry.formContext;
      var title = schema.title || name;

      var _getUiOptions2 = _objectSpread({}, (0, _utils.getUiOptions)(uiSchema)),
          widget = _getUiOptions2.widget,
          options = _objectWithoutProperties(_getUiOptions2, ["widget"]);

      var Widget = (0, _utils.getWidget)(schema, widget, widgets);
      return _react["default"].createElement(Widget, {
        id: idSchema && idSchema.$id,
        multiple: true,
        onChange: this.onSelectChange,
        onBlur: onBlur,
        onFocus: onFocus,
        options: options,
        schema: schema,
        registry: registry,
        value: items,
        disabled: disabled,
        readonly: readonly,
        hideError: hideError,
        required: required,
        label: title,
        placeholder: placeholder,
        formContext: formContext,
        autofocus: autofocus,
        rawErrors: rawErrors
      });
    }
  }, {
    key: "renderMultiSelect",
    value: function renderMultiSelect() {
      var _this$props7 = this.props,
          schema = _this$props7.schema,
          idSchema = _this$props7.idSchema,
          uiSchema = _this$props7.uiSchema,
          formData = _this$props7.formData,
          disabled = _this$props7.disabled,
          readonly = _this$props7.readonly,
          required = _this$props7.required,
          placeholder = _this$props7.placeholder,
          autofocus = _this$props7.autofocus,
          onBlur = _this$props7.onBlur,
          onFocus = _this$props7.onFocus,
          _this$props7$registry = _this$props7.registry,
          registry = _this$props7$registry === void 0 ? (0, _utils.getDefaultRegistry)() : _this$props7$registry,
          rawErrors = _this$props7.rawErrors,
          name = _this$props7.name;
      var items = this.props.formData;
      var widgets = registry.widgets,
          rootSchema = registry.rootSchema,
          formContext = registry.formContext;
      var itemsSchema = (0, _utils.retrieveSchema)(schema.items, rootSchema, formData);
      var title = schema.title || name;
      var enumOptions = (0, _utils.optionsList)(itemsSchema);

      var _getUiOptions$enumOpt = _objectSpread({}, (0, _utils.getUiOptions)(uiSchema), {
        enumOptions: enumOptions
      }),
          _getUiOptions$enumOpt2 = _getUiOptions$enumOpt.widget,
          widget = _getUiOptions$enumOpt2 === void 0 ? "select" : _getUiOptions$enumOpt2,
          options = _objectWithoutProperties(_getUiOptions$enumOpt, ["widget"]);

      var Widget = (0, _utils.getWidget)(schema, widget, widgets);
      return _react["default"].createElement(Widget, {
        id: idSchema && idSchema.$id,
        multiple: true,
        onChange: this.onSelectChange,
        onBlur: onBlur,
        onFocus: onFocus,
        options: options,
        schema: schema,
        registry: registry,
        value: items,
        disabled: disabled,
        readonly: readonly,
        required: required,
        label: title,
        placeholder: placeholder,
        formContext: formContext,
        autofocus: autofocus,
        rawErrors: rawErrors
      });
    }
  }, {
    key: "renderFiles",
    value: function renderFiles() {
      var _this$props8 = this.props,
          schema = _this$props8.schema,
          uiSchema = _this$props8.uiSchema,
          idSchema = _this$props8.idSchema,
          name = _this$props8.name,
          disabled = _this$props8.disabled,
          readonly = _this$props8.readonly,
          autofocus = _this$props8.autofocus,
          onBlur = _this$props8.onBlur,
          onFocus = _this$props8.onFocus,
          _this$props8$registry = _this$props8.registry,
          registry = _this$props8$registry === void 0 ? (0, _utils.getDefaultRegistry)() : _this$props8$registry,
          rawErrors = _this$props8.rawErrors;
      var title = schema.title || name;
      var items = this.props.formData;
      var widgets = registry.widgets,
          formContext = registry.formContext;

      var _getUiOptions3 = (0, _utils.getUiOptions)(uiSchema),
          _getUiOptions3$widget = _getUiOptions3.widget,
          widget = _getUiOptions3$widget === void 0 ? "files" : _getUiOptions3$widget,
          options = _objectWithoutProperties(_getUiOptions3, ["widget"]);

      var Widget = (0, _utils.getWidget)(schema, widget, widgets);
      return _react["default"].createElement(Widget, {
        options: options,
        id: idSchema && idSchema.$id,
        multiple: true,
        onChange: this.onSelectChange,
        onBlur: onBlur,
        onFocus: onFocus,
        schema: schema,
        title: title,
        value: items,
        disabled: disabled,
        readonly: readonly,
        formContext: formContext,
        autofocus: autofocus,
        rawErrors: rawErrors
      });
    }
  }, {
    key: "renderFixedArray",
    value: function renderFixedArray() {
      var _this3 = this;

      var _this$props9 = this.props,
          schema = _this$props9.schema,
          uiSchema = _this$props9.uiSchema,
          formData = _this$props9.formData,
          errorSchema = _this$props9.errorSchema,
          idPrefix = _this$props9.idPrefix,
          idSeparator = _this$props9.idSeparator,
          idSchema = _this$props9.idSchema,
          name = _this$props9.name,
          required = _this$props9.required,
          disabled = _this$props9.disabled,
          readonly = _this$props9.readonly,
          autofocus = _this$props9.autofocus,
          _this$props9$registry = _this$props9.registry,
          registry = _this$props9$registry === void 0 ? (0, _utils.getDefaultRegistry)() : _this$props9$registry,
          onBlur = _this$props9.onBlur,
          onFocus = _this$props9.onFocus,
          rawErrors = _this$props9.rawErrors;
      var title = schema.title || name;
      var items = this.props.formData;
      var ArrayFieldTemplate = registry.ArrayFieldTemplate,
          rootSchema = registry.rootSchema,
          fields = registry.fields,
          formContext = registry.formContext;
      var TitleField = fields.TitleField;
      var itemSchemas = schema.items.map(function (item, index) {
        return (0, _utils.retrieveSchema)(item, rootSchema, formData[index]);
      });
      var additionalSchema = (0, _utils.allowAdditionalItems)(schema) ? (0, _utils.retrieveSchema)(schema.additionalItems, rootSchema, formData) : null;

      if (!items || items.length < itemSchemas.length) {
        // to make sure at least all fixed items are generated
        items = items || [];
        items = items.concat(new Array(itemSchemas.length - items.length));
      } // These are the props passed into the render function


      var arrayProps = {
        canAdd: this.canAddItem(items) && additionalSchema,
        className: "field field-array field-array-fixed-items",
        disabled: disabled,
        idSchema: idSchema,
        formData: formData,
        items: this.state.keyedFormData.map(function (keyedItem, index) {
          var key = keyedItem.key,
              item = keyedItem.item;
          var additional = index >= itemSchemas.length;
          var itemSchema = additional ? (0, _utils.retrieveSchema)(schema.additionalItems, rootSchema, item) : itemSchemas[index];
          var itemIdPrefix = idSchema.$id + "_" + index;
          var itemIdSchema = (0, _utils.toIdSchema)(itemSchema, itemIdPrefix, rootSchema, item, idPrefix, idSeparator);
          var itemUiSchema = additional ? uiSchema.additionalItems || {} : Array.isArray(uiSchema.items) ? uiSchema.items[index] : uiSchema.items || {};
          var itemErrorSchema = errorSchema ? errorSchema[index] : undefined;
          return _this3.renderArrayFieldItem({
            key: key,
            index: index,
            canRemove: additional,
            canMoveUp: index >= itemSchemas.length + 1,
            canMoveDown: additional && index < items.length - 1,
            itemSchema: itemSchema,
            itemData: item,
            itemUiSchema: itemUiSchema,
            itemIdSchema: itemIdSchema,
            itemErrorSchema: itemErrorSchema,
            autofocus: autofocus && index === 0,
            onBlur: onBlur,
            onFocus: onFocus
          });
        }),
        onAddClick: this.onAddClick,
        readonly: readonly,
        required: required,
        schema: schema,
        uiSchema: uiSchema,
        title: title,
        TitleField: TitleField,
        formContext: formContext,
        rawErrors: rawErrors
      }; // Check if a custom template template was passed in

      var Template = uiSchema["ui:ArrayFieldTemplate"] || ArrayFieldTemplate || DefaultFixedArrayFieldTemplate;
      return _react["default"].createElement(Template, arrayProps);
    }
  }, {
    key: "renderArrayFieldItem",
    value: function renderArrayFieldItem(props) {
      var key = props.key,
          index = props.index,
          _props$canRemove = props.canRemove,
          canRemove = _props$canRemove === void 0 ? true : _props$canRemove,
          _props$canMoveUp = props.canMoveUp,
          canMoveUp = _props$canMoveUp === void 0 ? true : _props$canMoveUp,
          _props$canMoveDown = props.canMoveDown,
          canMoveDown = _props$canMoveDown === void 0 ? true : _props$canMoveDown,
          itemSchema = props.itemSchema,
          itemData = props.itemData,
          itemUiSchema = props.itemUiSchema,
          itemIdSchema = props.itemIdSchema,
          itemErrorSchema = props.itemErrorSchema,
          autofocus = props.autofocus,
          onBlur = props.onBlur,
          onFocus = props.onFocus,
          rawErrors = props.rawErrors;
      var _this$props10 = this.props,
          disabled = _this$props10.disabled,
          readonly = _this$props10.readonly,
          uiSchema = _this$props10.uiSchema,
          _this$props10$registr = _this$props10.registry,
          registry = _this$props10$registr === void 0 ? (0, _utils.getDefaultRegistry)() : _this$props10$registr;
      var SchemaField = registry.fields.SchemaField;

      var _orderable$removable$ = _objectSpread({
        orderable: true,
        removable: true
      }, uiSchema["ui:options"]),
          orderable = _orderable$removable$.orderable,
          removable = _orderable$removable$.removable;

      var has = {
        moveUp: orderable && canMoveUp,
        moveDown: orderable && canMoveDown,
        remove: removable && canRemove
      };
      has.toolbar = Object.keys(has).some(function (key) {
        return has[key];
      });
      return {
        children: _react["default"].createElement(SchemaField, {
          index: index,
          schema: itemSchema,
          uiSchema: itemUiSchema,
          formData: itemData,
          errorSchema: itemErrorSchema,
          idPrefix: this.props.idPrefix,
          idSeparator: this.props.idSeparator,
          idSchema: itemIdSchema,
          required: this.isItemRequired(itemSchema),
          onChange: this.onChangeForIndex(index),
          onBlur: onBlur,
          onFocus: onFocus,
          registry: this.props.registry,
          disabled: this.props.disabled,
          readonly: this.props.readonly,
          hideError: this.props.hideError,
          autofocus: autofocus,
          rawErrors: rawErrors
        }),
        className: "array-item",
        disabled: disabled,
        hasToolbar: has.toolbar,
        hasMoveUp: has.moveUp,
        hasMoveDown: has.moveDown,
        hasRemove: has.remove,
        index: index,
        key: key,
        onAddIndexClick: this.onAddIndexClick,
        onDropIndexClick: this.onDropIndexClick,
        onReorderClick: this.onReorderClick,
        readonly: readonly
      };
    }
  }, {
    key: "itemTitle",
    get: function get() {
      var schema = this.props.schema;
      return schema.items.title || schema.items.description || "Item";
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      // Don't call getDerivedStateFromProps if keyed formdata was just updated.
      if (prevState.updatedKeyedFormData) {
        return {
          updatedKeyedFormData: false
        };
      }

      var nextFormData = nextProps.formData || [];
      var previousKeyedFormData = prevState.keyedFormData || [];
      var newKeyedFormData = nextFormData.length === previousKeyedFormData.length ? previousKeyedFormData.map(function (previousKeyedFormDatum, index) {
        return {
          key: previousKeyedFormDatum.key,
          item: nextFormData[index]
        };
      }) : generateKeyedFormData(nextFormData);
      return {
        keyedFormData: newKeyedFormData
      };
    }
  }]);

  return ArrayField;
}(_react.Component);

_defineProperty(ArrayField, "defaultProps", {
  uiSchema: {},
  formData: [],
  idSchema: {},
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false
});

if (process.env.NODE_ENV !== "production") {
  ArrayField.propTypes = types.fieldProps;
}

var _default = ArrayField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpZWxkcy9BcnJheUZpZWxkLmpzIl0sIm5hbWVzIjpbIkFycmF5RmllbGRUaXRsZSIsIlRpdGxlRmllbGQiLCJpZFNjaGVtYSIsInRpdGxlIiwicmVxdWlyZWQiLCJpZCIsIiRpZCIsIkFycmF5RmllbGREZXNjcmlwdGlvbiIsIkRlc2NyaXB0aW9uRmllbGQiLCJkZXNjcmlwdGlvbiIsIkRlZmF1bHRBcnJheUl0ZW0iLCJwcm9wcyIsImJ0blN0eWxlIiwiZmxleCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiZm9udFdlaWdodCIsImtleSIsImNsYXNzTmFtZSIsImhhc1Rvb2xiYXIiLCJjaGlsZHJlbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImhhc01vdmVVcCIsImhhc01vdmVEb3duIiwiZGlzYWJsZWQiLCJyZWFkb25seSIsIm9uUmVvcmRlckNsaWNrIiwiaW5kZXgiLCJoYXNSZW1vdmUiLCJvbkRyb3BJbmRleENsaWNrIiwiRGVmYXVsdEZpeGVkQXJyYXlGaWVsZFRlbXBsYXRlIiwidWlTY2hlbWEiLCJzY2hlbWEiLCJpdGVtcyIsIm1hcCIsImNhbkFkZCIsIm9uQWRkQ2xpY2siLCJEZWZhdWx0Tm9ybWFsQXJyYXlGaWVsZFRlbXBsYXRlIiwicCIsImdlbmVyYXRlUm93SWQiLCJnZW5lcmF0ZUtleWVkRm9ybURhdGEiLCJmb3JtRGF0YSIsIkFycmF5IiwiaXNBcnJheSIsIml0ZW0iLCJrZXllZFRvUGxhaW5Gb3JtRGF0YSIsImtleWVkRm9ybURhdGEiLCJrZXllZEl0ZW0iLCJBcnJheUZpZWxkIiwicmVnaXN0cnkiLCJyb290U2NoZW1hIiwiaXRlbVNjaGVtYSIsImFkZGl0aW9uYWxJdGVtcyIsInVuZGVmaW5lZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJvbkNoYW5nZSIsIm5ld0tleWVkRm9ybURhdGFSb3ciLCJfZ2V0TmV3Rm9ybURhdGFSb3ciLCJuZXdLZXllZEZvcm1EYXRhIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVwZGF0ZWRLZXllZEZvcm1EYXRhIiwic3BsaWNlIiwibmV3RXJyb3JTY2hlbWEiLCJlcnJvclNjaGVtYSIsImkiLCJwYXJzZUludCIsImZpbHRlciIsIl8iLCJuZXdJbmRleCIsInRhcmdldCIsImJsdXIiLCJyZU9yZGVyQXJyYXkiLCJfbmV3S2V5ZWRGb3JtRGF0YSIsInNsaWNlIiwidmFsdWUiLCJuZXdGb3JtRGF0YSIsImpzb25WYWx1ZSIsInR5cGUiLCJmb3JtSXRlbXMiLCJhZGRhYmxlIiwibWF4SXRlbXMiLCJsZW5ndGgiLCJoYXNPd25Qcm9wZXJ0eSIsImZpZWxkcyIsIlVuc3VwcG9ydGVkRmllbGQiLCJyZW5kZXJNdWx0aVNlbGVjdCIsInJlbmRlckN1c3RvbVdpZGdldCIsInJlbmRlckZpeGVkQXJyYXkiLCJyZW5kZXJGaWxlcyIsInJlbmRlck5vcm1hbEFycmF5IiwibmFtZSIsImhpZGVFcnJvciIsImF1dG9mb2N1cyIsIm9uQmx1ciIsIm9uRm9jdXMiLCJpZFByZWZpeCIsImlkU2VwYXJhdG9yIiwicmF3RXJyb3JzIiwiQXJyYXlGaWVsZFRlbXBsYXRlIiwiZm9ybUNvbnRleHQiLCJpdGVtc1NjaGVtYSIsImFycmF5UHJvcHMiLCJjYW5BZGRJdGVtIiwiaXRlbUVycm9yU2NoZW1hIiwiaXRlbUlkUHJlZml4IiwiaXRlbUlkU2NoZW1hIiwicmVuZGVyQXJyYXlGaWVsZEl0ZW0iLCJjYW5Nb3ZlVXAiLCJjYW5Nb3ZlRG93biIsIml0ZW1EYXRhIiwiaXRlbVVpU2NoZW1hIiwiQ29tcG9uZW50IiwicGxhY2Vob2xkZXIiLCJ3aWRnZXRzIiwid2lkZ2V0Iiwib3B0aW9ucyIsIldpZGdldCIsIm9uU2VsZWN0Q2hhbmdlIiwiZW51bU9wdGlvbnMiLCJpdGVtU2NoZW1hcyIsImFkZGl0aW9uYWxTY2hlbWEiLCJjb25jYXQiLCJhZGRpdGlvbmFsIiwiY2FuUmVtb3ZlIiwiVGVtcGxhdGUiLCJTY2hlbWFGaWVsZCIsIm9yZGVyYWJsZSIsInJlbW92YWJsZSIsImhhcyIsIm1vdmVVcCIsIm1vdmVEb3duIiwicmVtb3ZlIiwidG9vbGJhciIsIk9iamVjdCIsImtleXMiLCJzb21lIiwiaXNJdGVtUmVxdWlyZWQiLCJvbkNoYW5nZUZvckluZGV4Iiwib25BZGRJbmRleENsaWNrIiwibmV4dFByb3BzIiwicHJldlN0YXRlIiwibmV4dEZvcm1EYXRhIiwicHJldmlvdXNLZXllZEZvcm1EYXRhIiwicHJldmlvdXNLZXllZEZvcm1EYXR1bSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInByb3BUeXBlcyIsInR5cGVzIiwiZmllbGRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsZUFBVCxPQUFvRTtBQUFBLE1BQXpDQyxVQUF5QyxRQUF6Q0EsVUFBeUM7QUFBQSxNQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFDbEUsTUFBSSxDQUFDRCxLQUFMLEVBQVk7QUFDVixXQUFPLElBQVA7QUFDRDs7QUFDRCxNQUFNRSxFQUFFLGFBQU1ILFFBQVEsQ0FBQ0ksR0FBZixZQUFSO0FBQ0EsU0FBTyxnQ0FBQyxVQUFEO0FBQVksSUFBQSxFQUFFLEVBQUVELEVBQWhCO0FBQW9CLElBQUEsS0FBSyxFQUFFRixLQUEzQjtBQUFrQyxJQUFBLFFBQVEsRUFBRUM7QUFBNUMsSUFBUDtBQUNEOztBQUVELFNBQVNHLHFCQUFULFFBQTRFO0FBQUEsTUFBM0NDLGdCQUEyQyxTQUEzQ0EsZ0JBQTJDO0FBQUEsTUFBekJOLFFBQXlCLFNBQXpCQSxRQUF5QjtBQUFBLE1BQWZPLFdBQWUsU0FBZkEsV0FBZTs7QUFDMUUsTUFBSSxDQUFDQSxXQUFMLEVBQWtCO0FBQ2hCLFdBQU8sSUFBUDtBQUNEOztBQUNELE1BQU1KLEVB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Q0Q7O2VBRWN2RyxVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkZEJ1dHRvbiBmcm9tIFwiLi4vQWRkQnV0dG9uXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCIuLi9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGluY2x1ZGVzIGZyb20gXCJjb3JlLWpzLXB1cmUvZXMvYXJyYXkvaW5jbHVkZXNcIjtcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldFdpZGdldCxcclxuICBnZXREZWZhdWx0Rm9ybVN0YXRlLFxyXG4gIGdldFVpT3B0aW9ucyxcclxuICBpc011bHRpU2VsZWN0LFxyXG4gIGlzRmlsZXNBcnJheSxcclxuICBpc0ZpeGVkSXRlbXMsXHJcbiAgYWxsb3dBZGRpdGlvbmFsSXRlbXMsXHJcbiAgaXNDdXN0b21XaWRnZXQsXHJcbiAgb3B0aW9uc0xpc3QsXHJcbiAgcmV0cmlldmVTY2hlbWEsXHJcbiAgdG9JZFNjaGVtYSxcclxuICBnZXREZWZhdWx0UmVnaXN0cnksXHJcbn0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gXCJuYW5vaWRcIjtcclxuXHJcbmZ1bmN0aW9uIEFycmF5RmllbGRUaXRsZSh7IFRpdGxlRmllbGQsIGlkU2NoZW1hLCB0aXRsZSwgcmVxdWlyZWQgfSkge1xyXG4gIGlmICghdGl0bGUpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICBjb25zdCBpZCA9IGAke2lkU2NoZW1hLiRpZH1fX3RpdGxlYDtcclxuICByZXR1cm4gPFRpdGxlRmllbGQgaWQ9e2lkfSB0aXRsZT17dGl0bGV9IHJlcXVpcmVkPXtyZXF1aXJlZH0gLz47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFycmF5RmllbGREZXNjcmlwdGlvbih7IERlc2NyaXB0aW9uRmllbGQsIGlkU2NoZW1hLCBkZXNjcmlwdGlvbiB9KSB7XHJcbiAgaWYgKCFkZXNjcmlwdGlvbikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIGNvbnN0IGlkID0gYCR7aWRTY2hlbWEuJGlkfV9fZGVzY3JpcHRpb25gO1xyXG4gIHJldHVybiA8RGVzY3JpcHRpb25GaWVsZCBpZD17aWR9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gLz47XHJcbn1cclxuXHJcbi8vIFVzZWQgaW4gdGhlIHR3byB0ZW1wbGF0ZXNcclxuZnVuY3Rpb24gRGVmYXVsdEFycmF5SXRlbShwcm9wcykge1xyXG4gIGNvbnN0IGJ0blN0eWxlID0ge1xyXG4gICAgZmxleDogMSxcclxuICAgIHBhZGRpbmdMZWZ0OiA2LFxyXG4gICAgcGFkZGluZ1JpZ2h0OiA2LFxyXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBrZXk9e3Byb3BzLmtleX0gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuaGFzVG9vbGJhciA/IFwiY29sLXhzLTlcIiA6IFwiY29sLXhzLTEyXCJ9PlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7cHJvcHMuaGFzVG9vbGJhciAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMyBhcnJheS1pdGVtLXRvb2xib3hcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIixcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHsocHJvcHMuaGFzTW92ZVVwIHx8IHByb3BzLmhhc01vdmVEb3duKSAmJiAoXHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgIGljb249XCJhcnJvdy11cFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTW92ZSB1cFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnJheS1pdGVtLW1vdmUtdXBcIlxyXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9XCItMVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17YnRuU3R5bGV9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWQgfHwgcHJvcHMucmVhZG9ubHkgfHwgIXByb3BzLmhhc01vdmVVcH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uUmVvcmRlckNsaWNrKHByb3BzLmluZGV4LCBwcm9wcy5pbmRleCAtIDEpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7KHByb3BzLmhhc01vdmVVcCB8fCBwcm9wcy5oYXNNb3ZlRG93bikgJiYgKFxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBpY29uPVwiYXJyb3ctZG93blwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnJheS1pdGVtLW1vdmUtZG93blwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTW92ZSBkb3duXCJcclxuICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiLTFcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e2J0blN0eWxlfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgICBwcm9wcy5kaXNhYmxlZCB8fCBwcm9wcy5yZWFkb25seSB8fCAhcHJvcHMuaGFzTW92ZURvd25cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uUmVvcmRlckNsaWNrKHByb3BzLmluZGV4LCBwcm9wcy5pbmRleCArIDEpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7cHJvcHMuaGFzUmVtb3ZlICYmIChcclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICBpY29uPVwicmVtb3ZlXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSZW1vdmVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJyYXktaXRlbS1yZW1vdmVcIlxyXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9XCItMVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17YnRuU3R5bGV9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWQgfHwgcHJvcHMucmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkRyb3BJbmRleENsaWNrKHByb3BzLmluZGV4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZWZhdWx0Rml4ZWRBcnJheUZpZWxkVGVtcGxhdGUocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZpZWxkc2V0IGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfSBpZD17cHJvcHMuaWRTY2hlbWEuJGlkfT5cclxuICAgICAgPEFycmF5RmllbGRUaXRsZVxyXG4gICAgICAgIGtleT17YGFycmF5LWZpZWxkLXRpdGxlLSR7cHJvcHMuaWRTY2hlbWEuJGlkfWB9XHJcbiAgICAgICAgVGl0bGVGaWVsZD17cHJvcHMuVGl0bGVGaWVsZH1cclxuICAgICAgICBpZFNjaGVtYT17cHJvcHMuaWRTY2hlbWF9XHJcbiAgICAgICAgdGl0bGU9e3Byb3BzLnVpU2NoZW1hW1widWk6dGl0bGVcIl0gfHwgcHJvcHMudGl0bGV9XHJcbiAgICAgICAgcmVxdWlyZWQ9e3Byb3BzLnJlcXVpcmVkfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgeyhwcm9wcy51aVNjaGVtYVtcInVpOmRlc2NyaXB0aW9uXCJdIHx8IHByb3BzLnNjaGVtYS5kZXNjcmlwdGlvbikgJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZpZWxkLWRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGtleT17YGZpZWxkLWRlc2NyaXB0aW9uLSR7cHJvcHMuaWRTY2hlbWEuJGlkfWB9PlxyXG4gICAgICAgICAge3Byb3BzLnVpU2NoZW1hW1widWk6ZGVzY3JpcHRpb25cIl0gfHwgcHJvcHMuc2NoZW1hLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInJvdyBhcnJheS1pdGVtLWxpc3RcIlxyXG4gICAgICAgIGtleT17YGFycmF5LWl0ZW0tbGlzdC0ke3Byb3BzLmlkU2NoZW1hLiRpZH1gfT5cclxuICAgICAgICB7cHJvcHMuaXRlbXMgJiYgcHJvcHMuaXRlbXMubWFwKERlZmF1bHRBcnJheUl0ZW0pfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtwcm9wcy5jYW5BZGQgJiYgKFxyXG4gICAgICAgIDxBZGRCdXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFycmF5LWl0ZW0tYWRkXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQWRkQ2xpY2t9XHJcbiAgICAgICAgICBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWQgfHwgcHJvcHMucmVhZG9ubHl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvZmllbGRzZXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRGVmYXVsdE5vcm1hbEFycmF5RmllbGRUZW1wbGF0ZShwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9IGlkPXtwcm9wcy5pZFNjaGVtYS4kaWR9PlxyXG4gICAgICA8QXJyYXlGaWVsZFRpdGxlXHJcbiAgICAgICAga2V5PXtgYXJyYXktZmllbGQtdGl0bGUtJHtwcm9wcy5pZFNjaGVtYS4kaWR9YH1cclxuICAgICAgICBUaXRsZUZpZWxkPXtwcm9wcy5UaXRsZUZpZWxkfVxyXG4gICAgICAgIGlkU2NoZW1hPXtwcm9wcy5pZFNjaGVtYX1cclxuICAgICAgICB0aXRsZT17cHJvcHMudWlTY2hlbWFbXCJ1aTp0aXRsZVwiXSB8fCBwcm9wcy50aXRsZX1cclxuICAgICAgICByZXF1aXJlZD17cHJvcHMucmVxdWlyZWR9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7KHByb3BzLnVpU2NoZW1hW1widWk6ZGVzY3JpcHRpb25cIl0gfHwgcHJvcHMuc2NoZW1hLmRlc2NyaXB0aW9uKSAmJiAoXHJcbiAgICAgICAgPEFycmF5RmllbGREZXNjcmlwdGlvblxyXG4gICAgICAgICAga2V5PXtgYXJyYXktZmllbGQtZGVzY3JpcHRpb24tJHtwcm9wcy5pZFNjaGVtYS4kaWR9YH1cclxuICAgICAgICAgIERlc2NyaXB0aW9uRmllbGQ9e3Byb3BzLkRlc2NyaXB0aW9uRmllbGR9XHJcbiAgICAgICAgICBpZFNjaGVtYT17cHJvcHMuaWRTY2hlbWF9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17XHJcbiAgICAgICAgICAgIHByb3BzLnVpU2NoZW1hW1widWk6ZGVzY3JpcHRpb25cIl0gfHwgcHJvcHMuc2NoZW1hLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJyb3cgYXJyYXktaXRlbS1saXN0XCJcclxuICAgICAgICBrZXk9e2BhcnJheS1pdGVtLWxpc3QtJHtwcm9wcy5pZFNjaGVtYS4kaWR9YH0+XHJcbiAgICAgICAge3Byb3BzLml0ZW1zICYmIHByb3BzLml0ZW1zLm1hcChwID0+IERlZmF1bHRBcnJheUl0ZW0ocCkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtwcm9wcy5jYW5BZGQgJiYgKFxyXG4gICAgICAgIDxBZGRCdXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFycmF5LWl0ZW0tYWRkXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQWRkQ2xpY2t9XHJcbiAgICAgICAgICBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWQgfHwgcHJvcHMucmVhZG9ubHl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvZmllbGRzZXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVSb3dJZCgpIHtcclxuICByZXR1cm4gbmFub2lkKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlS2V5ZWRGb3JtRGF0YShmb3JtRGF0YSkge1xyXG4gIHJldHVybiAhQXJyYXkuaXNBcnJheShmb3JtRGF0YSlcclxuICAgID8gW11cclxuICAgIDogZm9ybURhdGEubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBrZXk6IGdlbmVyYXRlUm93SWQoKSxcclxuICAgICAgICAgIGl0ZW0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtleWVkVG9QbGFpbkZvcm1EYXRhKGtleWVkRm9ybURhdGEpIHtcclxuICByZXR1cm4ga2V5ZWRGb3JtRGF0YS5tYXAoa2V5ZWRJdGVtID0+IGtleWVkSXRlbS5pdGVtKTtcclxufVxyXG5cclxuY2xhc3MgQXJyYXlGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHVpU2NoZW1hOiB7fSxcclxuICAgIGZvcm1EYXRhOiBbXSxcclxuICAgIGlkU2NoZW1hOiB7fSxcclxuICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIHJlYWRvbmx5OiBmYWxzZSxcclxuICAgIGF1dG9mb2N1czogZmFsc2UsXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIGNvbnN0IHsgZm9ybURhdGEgfSA9IHByb3BzO1xyXG4gICAgY29uc3Qga2V5ZWRGb3JtRGF0YSA9IGdlbmVyYXRlS2V5ZWRGb3JtRGF0YShmb3JtRGF0YSk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBrZXllZEZvcm1EYXRhLFxyXG4gICAgICB1cGRhdGVkS2V5ZWRGb3JtRGF0YTogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xyXG4gICAgLy8gRG9uJ3QgY2FsbCBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgaWYga2V5ZWQgZm9ybWRhdGEgd2FzIGp1c3QgdXBkYXRlZC5cclxuICAgIGlmIChwcmV2U3RhdGUudXBkYXRlZEtleWVkRm9ybURhdGEpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB1cGRhdGVkS2V5ZWRGb3JtRGF0YTogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXh0Rm9ybURhdGEgPSBuZXh0UHJvcHMuZm9ybURhdGEgfHwgW107XHJcbiAgICBjb25zdCBwcmV2aW91c0tleWVkRm9ybURhdGEgPSBwcmV2U3RhdGUua2V5ZWRGb3JtRGF0YSB8fCBbXTtcclxuICAgIGNvbnN0IG5ld0tleWVkRm9ybURhdGEgPVxyXG4gICAgICBuZXh0Rm9ybURhdGEubGVuZ3RoID09PSBwcmV2aW91c0tleWVkRm9ybURhdGEubGVuZ3RoXHJcbiAgICAgICAgPyBwcmV2aW91c0tleWVkRm9ybURhdGEubWFwKChwcmV2aW91c0tleWVkRm9ybURhdHVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGtleTogcHJldmlvdXNLZXllZEZvcm1EYXR1bS5rZXksXHJcbiAgICAgICAgICAgICAgaXRlbTogbmV4dEZvcm1EYXRhW2luZGV4XSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgOiBnZW5lcmF0ZUtleWVkRm9ybURhdGEobmV4dEZvcm1EYXRhKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGtleWVkRm9ybURhdGE6IG5ld0tleWVkRm9ybURhdGEsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGl0ZW1UaXRsZSgpIHtcclxuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIHNjaGVtYS5pdGVtcy50aXRsZSB8fCBzY2hlbWEuaXRlbXMuZGVzY3JpcHRpb24gfHwgXCJJdGVtXCI7XHJcbiAgfVxyXG5cclxuICBpc0l0ZW1SZXF1aXJlZChpdGVtU2NoZW1hKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtU2NoZW1hLnR5cGUpKSB7XHJcbiAgICAgIC8vIFdoaWxlIHdlIGRvbid0IHlldCBzdXBwb3J0IGNvbXBvc2l0ZS9udWxsYWJsZSBqc29uc2NoZW1hIHR5cGVzLCBpdCdzXHJcbiAgICAgIC8vIGZ1dHVyZS1wcm9vZiB0byBjaGVjayBmb3IgcmVxdWlyZW1lbnQgYWdhaW5zdCB0aGVzZS5cclxuICAgICAgcmV0dXJuICFpbmNsdWRlcyhpdGVtU2NoZW1hLnR5cGUsIFwibnVsbFwiKTtcclxuICAgIH1cclxuICAgIC8vIEFsbCBub24tbnVsbCBhcnJheSBpdGVtIHR5cGVzIGFyZSBpbmhlcmVudGx5IHJlcXVpcmVkIGJ5IGRlc2lnblxyXG4gICAgcmV0dXJuIGl0ZW1TY2hlbWEudHlwZSAhPT0gXCJudWxsXCI7XHJcbiAgfVxyXG5cclxuICBjYW5BZGRJdGVtKGZvcm1JdGVtcykge1xyXG4gICAgY29uc3QgeyBzY2hlbWEsIHVpU2NoZW1hIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgbGV0IHsgYWRkYWJsZSB9ID0gZ2V0VWlPcHRpb25zKHVpU2NoZW1hKTtcclxuICAgIGlmIChhZGRhYmxlICE9PSBmYWxzZSkge1xyXG4gICAgICAvLyBpZiB1aTpvcHRpb25zLmFkZGFibGUgd2FzIG5vdCBleHBsaWNpdGx5IHNldCB0byBmYWxzZSwgd2UgY2FuIGFkZFxyXG4gICAgICAvLyBhbm90aGVyIGl0ZW0gaWYgd2UgaGF2ZSBub3QgZXhjZWVkZWQgbWF4SXRlbXMgeWV0XHJcbiAgICAgIGlmIChzY2hlbWEubWF4SXRlbXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGFkZGFibGUgPSBmb3JtSXRlbXMubGVuZ3RoIDwgc2NoZW1hLm1heEl0ZW1zO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFkZGFibGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWRkYWJsZTtcclxuICB9XHJcblxyXG4gIF9nZXROZXdGb3JtRGF0YVJvdyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgc2NoZW1hLCByZWdpc3RyeSA9IGdldERlZmF1bHRSZWdpc3RyeSgpIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgeyByb290U2NoZW1hIH0gPSByZWdpc3RyeTtcclxuICAgIGxldCBpdGVtU2NoZW1hID0gc2NoZW1hLml0ZW1zO1xyXG4gICAgaWYgKGlzRml4ZWRJdGVtcyhzY2hlbWEpICYmIGFsbG93QWRkaXRpb25hbEl0ZW1zKHNjaGVtYSkpIHtcclxuICAgICAgaXRlbVNjaGVtYSA9IHNjaGVtYS5hZGRpdGlvbmFsSXRlbXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ2V0RGVmYXVsdEZvcm1TdGF0ZShpdGVtU2NoZW1hLCB1bmRlZmluZWQsIHJvb3RTY2hlbWEpO1xyXG4gIH07XHJcblxyXG4gIG9uQWRkQ2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgbmV3S2V5ZWRGb3JtRGF0YVJvdyA9IHtcclxuICAgICAga2V5OiBnZW5lcmF0ZVJvd0lkKCksXHJcbiAgICAgIGl0ZW06IHRoaXMuX2dldE5ld0Zvcm1EYXRhUm93KCksXHJcbiAgICB9O1xyXG4gICAgY29uc3QgbmV3S2V5ZWRGb3JtRGF0YSA9IFsuLi50aGlzLnN0YXRlLmtleWVkRm9ybURhdGEsIG5ld0tleWVkRm9ybURhdGFSb3ddO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIGtleWVkRm9ybURhdGE6IG5ld0tleWVkRm9ybURhdGEsXHJcbiAgICAgICAgdXBkYXRlZEtleWVkRm9ybURhdGE6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IG9uQ2hhbmdlKGtleWVkVG9QbGFpbkZvcm1EYXRhKG5ld0tleWVkRm9ybURhdGEpKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBvbkFkZEluZGV4Q2xpY2sgPSBpbmRleCA9PiB7XHJcbiAgICByZXR1cm4gZXZlbnQgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IG5ld0tleWVkRm9ybURhdGFSb3cgPSB7XHJcbiAgICAgICAga2V5OiBnZW5lcmF0ZVJvd0lkKCksXHJcbiAgICAgICAgaXRlbTogdGhpcy5fZ2V0TmV3Rm9ybURhdGFSb3coKSxcclxuICAgICAgfTtcclxuICAgICAgbGV0IG5ld0tleWVkRm9ybURhdGEgPSBbLi4udGhpcy5zdGF0ZS5rZXllZEZvcm1EYXRhXTtcclxuICAgICAgbmV3S2V5ZWRGb3JtRGF0YS5zcGxpY2UoaW5kZXgsIDAsIG5ld0tleWVkRm9ybURhdGFSb3cpO1xyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICBrZXllZEZvcm1EYXRhOiBuZXdLZXllZEZvcm1EYXRhLFxyXG4gICAgICAgICAgdXBkYXRlZEtleWVkRm9ybURhdGE6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiBvbkNoYW5nZShrZXllZFRvUGxhaW5Gb3JtRGF0YShuZXdLZXllZEZvcm1EYXRhKSlcclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgb25Ecm9wSW5kZXhDbGljayA9IGluZGV4ID0+IHtcclxuICAgIHJldHVybiBldmVudCA9PiB7XHJcbiAgICAgIGlmIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgeyBrZXllZEZvcm1EYXRhIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAvLyByZWZzICMxOTU6IHJldmFsaWRhdGUgdG8gZW5zdXJlIHByb3Blcmx5IHJlaW5kZXhpbmcgZXJyb3JzXHJcbiAgICAgIGxldCBuZXdFcnJvclNjaGVtYTtcclxuICAgICAgaWYgKHRoaXMucHJvcHMuZXJyb3JTY2hlbWEpIHtcclxuICAgICAgICBuZXdFcnJvclNjaGVtYSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGVycm9yU2NoZW1hID0gdGhpcy5wcm9wcy5lcnJvclNjaGVtYTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIGVycm9yU2NoZW1hKSB7XHJcbiAgICAgICAgICBpID0gcGFyc2VJbnQoaSk7XHJcbiAgICAgICAgICBpZiAoaSA8IGluZGV4KSB7XHJcbiAgICAgICAgICAgIG5ld0Vycm9yU2NoZW1hW2ldID0gZXJyb3JTY2hlbWFbaV07XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGkgPiBpbmRleCkge1xyXG4gICAgICAgICAgICBuZXdFcnJvclNjaGVtYVtpIC0gMV0gPSBlcnJvclNjaGVtYVtpXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbmV3S2V5ZWRGb3JtRGF0YSA9IGtleWVkRm9ybURhdGEuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpbmRleCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAga2V5ZWRGb3JtRGF0YTogbmV3S2V5ZWRGb3JtRGF0YSxcclxuICAgICAgICAgIHVwZGF0ZWRLZXllZEZvcm1EYXRhOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4gb25DaGFuZ2Uoa2V5ZWRUb1BsYWluRm9ybURhdGEobmV3S2V5ZWRGb3JtRGF0YSksIG5ld0Vycm9yU2NoZW1hKVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBvblJlb3JkZXJDbGljayA9IChpbmRleCwgbmV3SW5kZXgpID0+IHtcclxuICAgIHJldHVybiBldmVudCA9PiB7XHJcbiAgICAgIGlmIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LmJsdXIoKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBsZXQgbmV3RXJyb3JTY2hlbWE7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLmVycm9yU2NoZW1hKSB7XHJcbiAgICAgICAgbmV3RXJyb3JTY2hlbWEgPSB7fTtcclxuICAgICAgICBjb25zdCBlcnJvclNjaGVtYSA9IHRoaXMucHJvcHMuZXJyb3JTY2hlbWE7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBlcnJvclNjaGVtYSkge1xyXG4gICAgICAgICAgaWYgKGkgPT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgbmV3RXJyb3JTY2hlbWFbbmV3SW5kZXhdID0gZXJyb3JTY2hlbWFbaW5kZXhdO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpID09IG5ld0luZGV4KSB7XHJcbiAgICAgICAgICAgIG5ld0Vycm9yU2NoZW1hW2luZGV4XSA9IGVycm9yU2NoZW1hW25ld0luZGV4XTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld0Vycm9yU2NoZW1hW2ldID0gZXJyb3JTY2hlbWFbaV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB7IGtleWVkRm9ybURhdGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgIGZ1bmN0aW9uIHJlT3JkZXJBcnJheSgpIHtcclxuICAgICAgICAvLyBDb3B5IGl0ZW1cclxuICAgICAgICBsZXQgX25ld0tleWVkRm9ybURhdGEgPSBrZXllZEZvcm1EYXRhLnNsaWNlKCk7XHJcblxyXG4gICAgICAgIC8vIE1vdmVzIGl0ZW0gZnJvbSBpbmRleCB0byBuZXdJbmRleFxyXG4gICAgICAgIF9uZXdLZXllZEZvcm1EYXRhLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgX25ld0tleWVkRm9ybURhdGEuc3BsaWNlKG5ld0luZGV4LCAwLCBrZXllZEZvcm1EYXRhW2luZGV4XSk7XHJcblxyXG4gICAgICAgIHJldHVybiBfbmV3S2V5ZWRGb3JtRGF0YTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBuZXdLZXllZEZvcm1EYXRhID0gcmVPcmRlckFycmF5KCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAga2V5ZWRGb3JtRGF0YTogbmV3S2V5ZWRGb3JtRGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IG9uQ2hhbmdlKGtleWVkVG9QbGFpbkZvcm1EYXRhKG5ld0tleWVkRm9ybURhdGEpLCBuZXdFcnJvclNjaGVtYSlcclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgb25DaGFuZ2VGb3JJbmRleCA9IGluZGV4ID0+IHtcclxuICAgIHJldHVybiAodmFsdWUsIGVycm9yU2NoZW1hKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZm9ybURhdGEsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCBuZXdGb3JtRGF0YSA9IGZvcm1EYXRhLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gdHJlYXQgdW5kZWZpbmVkIGl0ZW1zIGFzIG51bGxzIHRvIGhhdmUgdmFsaWRhdGlvbi5cclxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3RkZWdydW50L2pzb25zY2hlbWEvaXNzdWVzLzIwNlxyXG4gICAgICAgIGNvbnN0IGpzb25WYWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiA/IG51bGwgOiB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gaW5kZXggPT09IGkgPyBqc29uVmFsdWUgOiBpdGVtO1xyXG4gICAgICB9KTtcclxuICAgICAgb25DaGFuZ2UoXHJcbiAgICAgICAgbmV3Rm9ybURhdGEsXHJcbiAgICAgICAgZXJyb3JTY2hlbWEgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMuZXJyb3JTY2hlbWEgJiYge1xyXG4gICAgICAgICAgICAuLi50aGlzLnByb3BzLmVycm9yU2NoZW1hLFxyXG4gICAgICAgICAgICBbaW5kZXhdOiBlcnJvclNjaGVtYSxcclxuICAgICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgb25TZWxlY3RDaGFuZ2UgPSB2YWx1ZSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHNjaGVtYSxcclxuICAgICAgdWlTY2hlbWEsXHJcbiAgICAgIGlkU2NoZW1hLFxyXG4gICAgICByZWdpc3RyeSA9IGdldERlZmF1bHRSZWdpc3RyeSgpLFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IHJvb3RTY2hlbWEgfSA9IHJlZ2lzdHJ5O1xyXG4gICAgaWYgKCFzY2hlbWEuaGFzT3duUHJvcGVydHkoXCJpdGVtc1wiKSkge1xyXG4gICAgICBjb25zdCB7IGZpZWxkcyB9ID0gcmVnaXN0cnk7XHJcbiAgICAgIGNvbnN0IHsgVW5zdXBwb3J0ZWRGaWVsZCB9ID0gZmllbGRzO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8VW5zdXBwb3J0ZWRGaWVsZFxyXG4gICAgICAgICAgc2NoZW1hPXtzY2hlbWF9XHJcbiAgICAgICAgICBpZFNjaGVtYT17aWRTY2hlbWF9XHJcbiAgICAgICAgICByZWFzb249XCJNaXNzaW5nIGl0ZW1zIGRlZmluaXRpb25cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNNdWx0aVNlbGVjdChzY2hlbWEsIHJvb3RTY2hlbWEpKSB7XHJcbiAgICAgIC8vIElmIGFycmF5IGhhcyBlbnVtIG9yIHVuaXF1ZUl0ZW1zIHNldCB0byB0cnVlLCBjYWxsIHJlbmRlck11bHRpU2VsZWN0KCkgdG8gcmVuZGVyIHRoZSBkZWZhdWx0IG11bHRpc2VsZWN0IHdpZGdldCBvciBhIGN1c3RvbSB3aWRnZXQsIGlmIHNwZWNpZmllZC5cclxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyTXVsdGlTZWxlY3QoKTtcclxuICAgIH1cclxuICAgIGlmIChpc0N1c3RvbVdpZGdldCh1aVNjaGVtYSkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ3VzdG9tV2lkZ2V0KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNGaXhlZEl0ZW1zKHNjaGVtYSkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRml4ZWRBcnJheSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzRmlsZXNBcnJheShzY2hlbWEsIHVpU2NoZW1hLCByb290U2NoZW1hKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJGaWxlcygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyTm9ybWFsQXJyYXkoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlck5vcm1hbEFycmF5KCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBzY2hlbWEsXHJcbiAgICAgIHVpU2NoZW1hLFxyXG4gICAgICBlcnJvclNjaGVtYSxcclxuICAgICAgaWRTY2hlbWEsXHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHJlcXVpcmVkLFxyXG4gICAgICBkaXNhYmxlZCxcclxuICAgICAgcmVhZG9ubHksXHJcbiAgICAgIGhpZGVFcnJvcixcclxuICAgICAgYXV0b2ZvY3VzLFxyXG4gICAgICByZWdpc3RyeSA9IGdldERlZmF1bHRSZWdpc3RyeSgpLFxyXG4gICAgICBvbkJsdXIsXHJcbiAgICAgIG9uRm9jdXMsXHJcbiAgICAgIGlkUHJlZml4LFxyXG4gICAgICBpZFNlcGFyYXRvcixcclxuICAgICAgcmF3RXJyb3JzLFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB0aXRsZSA9IHNjaGVtYS50aXRsZSA9PT0gdW5kZWZpbmVkID8gbmFtZSA6IHNjaGVtYS50aXRsZTtcclxuICAgIGNvbnN0IHsgQXJyYXlGaWVsZFRlbXBsYXRlLCByb290U2NoZW1hLCBmaWVsZHMsIGZvcm1Db250ZXh0IH0gPSByZWdpc3RyeTtcclxuICAgIGNvbnN0IHsgVGl0bGVGaWVsZCwgRGVzY3JpcHRpb25GaWVsZCB9ID0gZmllbGRzO1xyXG4gICAgY29uc3QgaXRlbXNTY2hlbWEgPSByZXRyaWV2ZVNjaGVtYShzY2hlbWEuaXRlbXMsIHJvb3RTY2hlbWEpO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBrZXllZFRvUGxhaW5Gb3JtRGF0YSh0aGlzLnN0YXRlLmtleWVkRm9ybURhdGEpO1xyXG4gICAgY29uc3QgYXJyYXlQcm9wcyA9IHtcclxuICAgICAgY2FuQWRkOiB0aGlzLmNhbkFkZEl0ZW0oZm9ybURhdGEpLFxyXG4gICAgICBpdGVtczogdGhpcy5zdGF0ZS5rZXllZEZvcm1EYXRhLm1hcCgoa2V5ZWRJdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsga2V5LCBpdGVtIH0gPSBrZXllZEl0ZW07XHJcbiAgICAgICAgY29uc3QgaXRlbVNjaGVtYSA9IHJldHJpZXZlU2NoZW1hKHNjaGVtYS5pdGVtcywgcm9vdFNjaGVtYSwgaXRlbSk7XHJcbiAgICAgICAgY29uc3QgaXRlbUVycm9yU2NoZW1hID0gZXJyb3JTY2hlbWEgPyBlcnJvclNjaGVtYVtpbmRleF0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgY29uc3QgaXRlbUlkUHJlZml4ID0gaWRTY2hlbWEuJGlkICsgXCJfXCIgKyBpbmRleDtcclxuICAgICAgICBjb25zdCBpdGVtSWRTY2hlbWEgPSB0b0lkU2NoZW1hKFxyXG4gICAgICAgICAgaXRlbVNjaGVtYSxcclxuICAgICAgICAgIGl0ZW1JZFByZWZpeCxcclxuICAgICAgICAgIHJvb3RTY2hlbWEsXHJcbiAgICAgICAgICBpdGVtLFxyXG4gICAgICAgICAgaWRQcmVmaXgsXHJcbiAgICAgICAgICBpZFNlcGFyYXRvclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQXJyYXlGaWVsZEl0ZW0oe1xyXG4gICAgICAgICAga2V5LFxyXG4gICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICBjYW5Nb3ZlVXA6IGluZGV4ID4gMCxcclxuICAgICAgICAgIGNhbk1vdmVEb3duOiBpbmRleCA8IGZvcm1EYXRhLmxlbmd0aCAtIDEsXHJcbiAgICAgICAgICBpdGVtU2NoZW1hOiBpdGVtU2NoZW1hLFxyXG4gICAgICAgICAgaXRlbUlkU2NoZW1hLFxyXG4gICAgICAgICAgaXRlbUVycm9yU2NoZW1hLFxyXG4gICAgICAgICAgaXRlbURhdGE6IGl0ZW0sXHJcbiAgICAgICAgICBpdGVtVWlTY2hlbWE6IHVpU2NoZW1hLml0ZW1zLFxyXG4gICAgICAgICAgYXV0b2ZvY3VzOiBhdXRvZm9jdXMgJiYgaW5kZXggPT09IDAsXHJcbiAgICAgICAgICBvbkJsdXIsXHJcbiAgICAgICAgICBvbkZvY3VzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KSxcclxuICAgICAgY2xhc3NOYW1lOiBgZmllbGQgZmllbGQtYXJyYXkgZmllbGQtYXJyYXktb2YtJHtpdGVtc1NjaGVtYS50eXBlfWAsXHJcbiAgICAgIERlc2NyaXB0aW9uRmllbGQsXHJcbiAgICAgIGRpc2FibGVkLFxyXG4gICAgICBpZFNjaGVtYSxcclxuICAgICAgdWlTY2hlbWEsXHJcbiAgICAgIG9uQWRkQ2xpY2s6IHRoaXMub25BZGRDbGljayxcclxuICAgICAgcmVhZG9ubHksXHJcbiAgICAgIGhpZGVFcnJvcixcclxuICAgICAgcmVxdWlyZWQsXHJcbiAgICAgIHNjaGVtYSxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIFRpdGxlRmllbGQsXHJcbiAgICAgIGZvcm1Db250ZXh0LFxyXG4gICAgICBmb3JtRGF0YSxcclxuICAgICAgcmF3RXJyb3JzLFxyXG4gICAgICByZWdpc3RyeSxcclxuICAgIH07XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYSBjdXN0b20gcmVuZGVyIGZ1bmN0aW9uIHdhcyBwYXNzZWQgaW5cclxuICAgIGNvbnN0IENvbXBvbmVudCA9XHJcbiAgICAgIHVpU2NoZW1hW1widWk6QXJyYXlGaWVsZFRlbXBsYXRlXCJdIHx8XHJcbiAgICAgIEFycmF5RmllbGRUZW1wbGF0ZSB8fFxyXG4gICAgICBEZWZhdWx0Tm9ybWFsQXJyYXlGaWVsZFRlbXBsYXRlO1xyXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLmFycmF5UHJvcHN9IC8+O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ3VzdG9tV2lkZ2V0KCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBzY2hlbWEsXHJcbiAgICAgIGlkU2NoZW1hLFxyXG4gICAgICB1aVNjaGVtYSxcclxuICAgICAgZGlzYWJsZWQsXHJcbiAgICAgIHJlYWRvbmx5LFxyXG4gICAgICBoaWRlRXJyb3IsXHJcbiAgICAgIHJlcXVpcmVkLFxyXG4gICAgICBwbGFjZWhvbGRlcixcclxuICAgICAgYXV0b2ZvY3VzLFxyXG4gICAgICBvbkJsdXIsXHJcbiAgICAgIG9uRm9jdXMsXHJcbiAgICAgIGZvcm1EYXRhOiBpdGVtcyxcclxuICAgICAgcmVnaXN0cnkgPSBnZXREZWZhdWx0UmVnaXN0cnkoKSxcclxuICAgICAgcmF3RXJyb3JzLFxyXG4gICAgICBuYW1lLFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IHdpZGdldHMsIGZvcm1Db250ZXh0IH0gPSByZWdpc3RyeTtcclxuICAgIGNvbnN0IHRpdGxlID0gc2NoZW1hLnRpdGxlIHx8IG5hbWU7XHJcblxyXG4gICAgY29uc3QgeyB3aWRnZXQsIC4uLm9wdGlvbnMgfSA9IHtcclxuICAgICAgLi4uZ2V0VWlPcHRpb25zKHVpU2NoZW1hKSxcclxuICAgIH07XHJcbiAgICBjb25zdCBXaWRnZXQgPSBnZXRXaWRnZXQoc2NoZW1hLCB3aWRnZXQsIHdpZGdldHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFdpZGdldFxyXG4gICAgICAgIGlkPXtpZFNjaGVtYSAmJiBpZFNjaGVtYS4kaWR9XHJcbiAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdENoYW5nZX1cclxuICAgICAgICBvbkJsdXI9e29uQmx1cn1cclxuICAgICAgICBvbkZvY3VzPXtvbkZvY3VzfVxyXG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgc2NoZW1hPXtzY2hlbWF9XHJcbiAgICAgICAgcmVnaXN0cnk9e3JlZ2lzdHJ5fVxyXG4gICAgICAgIHZhbHVlPXtpdGVtc31cclxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgcmVhZG9ubHk9e3JlYWRvbmx5fVxyXG4gICAgICAgIGhpZGVFcnJvcj17aGlkZUVycm9yfVxyXG4gICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICBsYWJlbD17dGl0bGV9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgIGZvcm1Db250ZXh0PXtmb3JtQ29udGV4dH1cclxuICAgICAgICBhdXRvZm9jdXM9e2F1dG9mb2N1c31cclxuICAgICAgICByYXdFcnJvcnM9e3Jhd0Vycm9yc31cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJNdWx0aVNlbGVjdCgpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgc2NoZW1hLFxyXG4gICAgICBpZFNjaGVtYSxcclxuICAgICAgdWlTY2hlbWEsXHJcbiAgICAgIGZvcm1EYXRhLFxyXG4gICAgICBkaXNhYmxlZCxcclxuICAgICAgcmVhZG9ubHksXHJcbiAgICAgIHJlcXVpcmVkLFxyXG4gICAgICBwbGFjZWhvbGRlcixcclxuICAgICAgYXV0b2ZvY3VzLFxyXG4gICAgICBvbkJsdXIsXHJcbiAgICAgIG9uRm9jdXMsXHJcbiAgICAgIHJlZ2lzdHJ5ID0gZ2V0RGVmYXVsdFJlZ2lzdHJ5KCksXHJcbiAgICAgIHJhd0Vycm9ycyxcclxuICAgICAgbmFtZSxcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmZvcm1EYXRhO1xyXG4gICAgY29uc3QgeyB3aWRnZXRzLCByb290U2NoZW1hLCBmb3JtQ29udGV4dCB9ID0gcmVnaXN0cnk7XHJcbiAgICBjb25zdCBpdGVtc1NjaGVtYSA9IHJldHJpZXZlU2NoZW1hKHNjaGVtYS5pdGVtcywgcm9vdFNjaGVtYSwgZm9ybURhdGEpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBzY2hlbWEudGl0bGUgfHwgbmFtZTtcclxuICAgIGNvbnN0IGVudW1PcHRpb25zID0gb3B0aW9uc0xpc3QoaXRlbXNTY2hlbWEpO1xyXG4gICAgY29uc3QgeyB3aWRnZXQgPSBcInNlbGVjdFwiLCAuLi5vcHRpb25zIH0gPSB7XHJcbiAgICAgIC4uLmdldFVpT3B0aW9ucyh1aVNjaGVtYSksXHJcbiAgICAgIGVudW1PcHRpb25zLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IFdpZGdldCA9IGdldFdpZGdldChzY2hlbWEsIHdpZGdldCwgd2lkZ2V0cyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8V2lkZ2V0XHJcbiAgICAgICAgaWQ9e2lkU2NoZW1hICYmIGlkU2NoZW1hLiRpZH1cclxuICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0Q2hhbmdlfVxyXG4gICAgICAgIG9uQmx1cj17b25CbHVyfVxyXG4gICAgICAgIG9uRm9jdXM9e29uRm9jdXN9XHJcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICBzY2hlbWE9e3NjaGVtYX1cclxuICAgICAgICByZWdpc3RyeT17cmVnaXN0cnl9XHJcbiAgICAgICAgdmFsdWU9e2l0ZW1zfVxyXG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICByZWFkb25seT17cmVhZG9ubHl9XHJcbiAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgIGxhYmVsPXt0aXRsZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgZm9ybUNvbnRleHQ9e2Zvcm1Db250ZXh0fVxyXG4gICAgICAgIGF1dG9mb2N1cz17YXV0b2ZvY3VzfVxyXG4gICAgICAgIHJhd0Vycm9ycz17cmF3RXJyb3JzfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckZpbGVzKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBzY2hlbWEsXHJcbiAgICAgIHVpU2NoZW1hLFxyXG4gICAgICBpZFNjaGVtYSxcclxuICAgICAgbmFtZSxcclxuICAgICAgZGlzYWJsZWQsXHJcbiAgICAgIHJlYWRvbmx5LFxyXG4gICAgICBhdXRvZm9jdXMsXHJcbiAgICAgIG9uQmx1cixcclxuICAgICAgb25Gb2N1cyxcclxuICAgICAgcmVnaXN0cnkgPSBnZXREZWZhdWx0UmVnaXN0cnkoKSxcclxuICAgICAgcmF3RXJyb3JzLFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB0aXRsZSA9IHNjaGVtYS50aXRsZSB8fCBuYW1lO1xyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmZvcm1EYXRhO1xyXG4gICAgY29uc3QgeyB3aWRnZXRzLCBmb3JtQ29udGV4dCB9ID0gcmVnaXN0cnk7XHJcbiAgICBjb25zdCB7IHdpZGdldCA9IFwiZmlsZXNcIiwgLi4ub3B0aW9ucyB9ID0gZ2V0VWlPcHRpb25zKHVpU2NoZW1hKTtcclxuICAgIGNvbnN0IFdpZGdldCA9IGdldFdpZGdldChzY2hlbWEsIHdpZGdldCwgd2lkZ2V0cyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8V2lkZ2V0XHJcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICBpZD17aWRTY2hlbWEgJiYgaWRTY2hlbWEuJGlkfVxyXG4gICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZWxlY3RDaGFuZ2V9XHJcbiAgICAgICAgb25CbHVyPXtvbkJsdXJ9XHJcbiAgICAgICAgb25Gb2N1cz17b25Gb2N1c31cclxuICAgICAgICBzY2hlbWE9e3NjaGVtYX1cclxuICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgdmFsdWU9e2l0ZW1zfVxyXG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICByZWFkb25seT17cmVhZG9ubHl9XHJcbiAgICAgICAgZm9ybUNvbnRleHQ9e2Zvcm1Db250ZXh0fVxyXG4gICAgICAgIGF1dG9mb2N1cz17YXV0b2ZvY3VzfVxyXG4gICAgICAgIHJhd0Vycm9ycz17cmF3RXJyb3JzfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckZpeGVkQXJyYXkoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHNjaGVtYSxcclxuICAgICAgdWlTY2hlbWEsXHJcbiAgICAgIGZvcm1EYXRhLFxyXG4gICAgICBlcnJvclNjaGVtYSxcclxuICAgICAgaWRQcmVmaXgsXHJcbiAgICAgIGlkU2VwYXJhdG9yLFxyXG4gICAgICBpZFNjaGVtYSxcclxuICAgICAgbmFtZSxcclxuICAgICAgcmVxdWlyZWQsXHJcbiAgICAgIGRpc2FibGVkLFxyXG4gICAgICByZWFkb25seSxcclxuICAgICAgYXV0b2ZvY3VzLFxyXG4gICAgICByZWdpc3RyeSA9IGdldERlZmF1bHRSZWdpc3RyeSgpLFxyXG4gICAgICBvbkJsdXIsXHJcbiAgICAgIG9uRm9jdXMsXHJcbiAgICAgIHJhd0Vycm9ycyxcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgdGl0bGUgPSBzY2hlbWEudGl0bGUgfHwgbmFtZTtcclxuICAgIGxldCBpdGVtcyA9IHRoaXMucHJvcHMuZm9ybURhdGE7XHJcbiAgICBjb25zdCB7IEFycmF5RmllbGRUZW1wbGF0ZSwgcm9vdFNjaGVtYSwgZmllbGRzLCBmb3JtQ29udGV4dCB9ID0gcmVnaXN0cnk7XHJcbiAgICBjb25zdCB7IFRpdGxlRmllbGQgfSA9IGZpZWxkcztcclxuICAgIGNvbnN0IGl0ZW1TY2hlbWFzID0gc2NoZW1hLml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgIHJldHJpZXZlU2NoZW1hKGl0ZW0sIHJvb3RTY2hlbWEsIGZvcm1EYXRhW2luZGV4XSlcclxuICAgICk7XHJcbiAgICBjb25zdCBhZGRpdGlvbmFsU2NoZW1hID0gYWxsb3dBZGRpdGlvbmFsSXRlbXMoc2NoZW1hKVxyXG4gICAgICA/IHJldHJpZXZlU2NoZW1hKHNjaGVtYS5hZGRpdGlvbmFsSXRlbXMsIHJvb3RTY2hlbWEsIGZvcm1EYXRhKVxyXG4gICAgICA6IG51bGw7XHJcblxyXG4gICAgaWYgKCFpdGVtcyB8fCBpdGVtcy5sZW5ndGggPCBpdGVtU2NoZW1hcy5sZW5ndGgpIHtcclxuICAgICAgLy8gdG8gbWFrZSBzdXJlIGF0IGxlYXN0IGFsbCBmaXhlZCBpdGVtcyBhcmUgZ2VuZXJhdGVkXHJcbiAgICAgIGl0ZW1zID0gaXRlbXMgfHwgW107XHJcbiAgICAgIGl0ZW1zID0gaXRlbXMuY29uY2F0KG5ldyBBcnJheShpdGVtU2NoZW1hcy5sZW5ndGggLSBpdGVtcy5sZW5ndGgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGVzZSBhcmUgdGhlIHByb3BzIHBhc3NlZCBpbnRvIHRoZSByZW5kZXIgZnVuY3Rpb25cclxuICAgIGNvbnN0IGFycmF5UHJvcHMgPSB7XHJcbiAgICAgIGNhbkFkZDogdGhpcy5jYW5BZGRJdGVtKGl0ZW1zKSAmJiBhZGRpdGlvbmFsU2NoZW1hLFxyXG4gICAgICBjbGFzc05hbWU6IFwiZmllbGQgZmllbGQtYXJyYXkgZmllbGQtYXJyYXktZml4ZWQtaXRlbXNcIixcclxuICAgICAgZGlzYWJsZWQsXHJcbiAgICAgIGlkU2NoZW1hLFxyXG4gICAgICBmb3JtRGF0YSxcclxuICAgICAgaXRlbXM6IHRoaXMuc3RhdGUua2V5ZWRGb3JtRGF0YS5tYXAoKGtleWVkSXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGtleSwgaXRlbSB9ID0ga2V5ZWRJdGVtO1xyXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWwgPSBpbmRleCA+PSBpdGVtU2NoZW1hcy5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgaXRlbVNjaGVtYSA9IGFkZGl0aW9uYWxcclxuICAgICAgICAgID8gcmV0cmlldmVTY2hlbWEoc2NoZW1hLmFkZGl0aW9uYWxJdGVtcywgcm9vdFNjaGVtYSwgaXRlbSlcclxuICAgICAgICAgIDogaXRlbVNjaGVtYXNbaW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1JZFByZWZpeCA9IGlkU2NoZW1hLiRpZCArIFwiX1wiICsgaW5kZXg7XHJcbiAgICAgICAgY29uc3QgaXRlbUlkU2NoZW1hID0gdG9JZFNjaGVtYShcclxuICAgICAgICAgIGl0ZW1TY2hlbWEsXHJcbiAgICAgICAgICBpdGVtSWRQcmVmaXgsXHJcbiAgICAgICAgICByb290U2NoZW1hLFxyXG4gICAgICAgICAgaXRlbSxcclxuICAgICAgICAgIGlkUHJlZml4LFxyXG4gICAgICAgICAgaWRTZXBhcmF0b3JcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1VaVNjaGVtYSA9IGFkZGl0aW9uYWxcclxuICAgICAgICAgID8gdWlTY2hlbWEuYWRkaXRpb25hbEl0ZW1zIHx8IHt9XHJcbiAgICAgICAgICA6IEFycmF5LmlzQXJyYXkodWlTY2hlbWEuaXRlbXMpXHJcbiAgICAgICAgICA/IHVpU2NoZW1hLml0ZW1zW2luZGV4XVxyXG4gICAgICAgICAgOiB1aVNjaGVtYS5pdGVtcyB8fCB7fTtcclxuICAgICAgICBjb25zdCBpdGVtRXJyb3JTY2hlbWEgPSBlcnJvclNjaGVtYSA/IGVycm9yU2NoZW1hW2luZGV4XSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQXJyYXlGaWVsZEl0ZW0oe1xyXG4gICAgICAgICAga2V5LFxyXG4gICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICBjYW5SZW1vdmU6IGFkZGl0aW9uYWwsXHJcbiAgICAgICAgICBjYW5Nb3ZlVXA6IGluZGV4ID49IGl0ZW1TY2hlbWFzLmxlbmd0aCArIDEsXHJcbiAgICAgICAgICBjYW5Nb3ZlRG93bjogYWRkaXRpb25hbCAmJiBpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEsXHJcbiAgICAgICAgICBpdGVtU2NoZW1hLFxyXG4gICAgICAgICAgaXRlbURhdGE6IGl0ZW0sXHJcbiAgICAgICAgICBpdGVtVWlTY2hlbWEsXHJcbiAgICAgICAgICBpdGVtSWRTY2hlbWEsXHJcbiAgICAgICAgICBpdGVtRXJyb3JTY2hlbWEsXHJcbiAgICAgICAgICBhdXRvZm9jdXM6IGF1dG9mb2N1cyAmJiBpbmRleCA9PT0gMCxcclxuICAgICAgICAgIG9uQmx1cixcclxuICAgICAgICAgIG9uRm9jdXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pLFxyXG4gICAgICBvbkFkZENsaWNrOiB0aGlzLm9uQWRkQ2xpY2ssXHJcbiAgICAgIHJlYWRvbmx5LFxyXG4gICAgICByZXF1aXJlZCxcclxuICAgICAgc2NoZW1hLFxyXG4gICAgICB1aVNjaGVtYSxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIFRpdGxlRmllbGQsXHJcbiAgICAgIGZvcm1Db250ZXh0LFxyXG4gICAgICByYXdFcnJvcnMsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENoZWNrIGlmIGEgY3VzdG9tIHRlbXBsYXRlIHRlbXBsYXRlIHdhcyBwYXNzZWQgaW5cclxuICAgIGNvbnN0IFRlbXBsYXRlID1cclxuICAgICAgdWlTY2hlbWFbXCJ1aTpBcnJheUZpZWxkVGVtcGxhdGVcIl0gfHxcclxuICAgICAgQXJyYXlGaWVsZFRlbXBsYXRlIHx8XHJcbiAgICAgIERlZmF1bHRGaXhlZEFycmF5RmllbGRUZW1wbGF0ZTtcclxuICAgIHJldHVybiA8VGVtcGxhdGUgey4uLmFycmF5UHJvcHN9IC8+O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQXJyYXlGaWVsZEl0ZW0ocHJvcHMpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAga2V5LFxyXG4gICAgICBpbmRleCxcclxuICAgICAgY2FuUmVtb3ZlID0gdHJ1ZSxcclxuICAgICAgY2FuTW92ZVVwID0gdHJ1ZSxcclxuICAgICAgY2FuTW92ZURvd24gPSB0cnVlLFxyXG4gICAgICBpdGVtU2NoZW1hLFxyXG4gICAgICBpdGVtRGF0YSxcclxuICAgICAgaXRlbVVpU2NoZW1hLFxyXG4gICAgICBpdGVtSWRTY2hlbWEsXHJcbiAgICAgIGl0ZW1FcnJvclNjaGVtYSxcclxuICAgICAgYXV0b2ZvY3VzLFxyXG4gICAgICBvbkJsdXIsXHJcbiAgICAgIG9uRm9jdXMsXHJcbiAgICAgIHJhd0Vycm9ycyxcclxuICAgIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHtcclxuICAgICAgZGlzYWJsZWQsXHJcbiAgICAgIHJlYWRvbmx5LFxyXG4gICAgICB1aVNjaGVtYSxcclxuICAgICAgcmVnaXN0cnkgPSBnZXREZWZhdWx0UmVnaXN0cnkoKSxcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBmaWVsZHM6IHsgU2NoZW1hRmllbGQgfSxcclxuICAgIH0gPSByZWdpc3RyeTtcclxuICAgIGNvbnN0IHsgb3JkZXJhYmxlLCByZW1vdmFibGUgfSA9IHtcclxuICAgICAgb3JkZXJhYmxlOiB0cnVlLFxyXG4gICAgICByZW1vdmFibGU6IHRydWUsXHJcbiAgICAgIC4uLnVpU2NoZW1hW1widWk6b3B0aW9uc1wiXSxcclxuICAgIH07XHJcbiAgICBjb25zdCBoYXMgPSB7XHJcbiAgICAgIG1vdmVVcDogb3JkZXJhYmxlICYmIGNhbk1vdmVVcCxcclxuICAgICAgbW92ZURvd246IG9yZGVyYWJsZSAmJiBjYW5Nb3ZlRG93bixcclxuICAgICAgcmVtb3ZlOiByZW1vdmFibGUgJiYgY2FuUmVtb3ZlLFxyXG4gICAgfTtcclxuICAgIGhhcy50b29sYmFyID0gT2JqZWN0LmtleXMoaGFzKS5zb21lKGtleSA9PiBoYXNba2V5XSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2hpbGRyZW46IChcclxuICAgICAgICA8U2NoZW1hRmllbGRcclxuICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgIHNjaGVtYT17aXRlbVNjaGVtYX1cclxuICAgICAgICAgIHVpU2NoZW1hPXtpdGVtVWlTY2hlbWF9XHJcbiAgICAgICAgICBmb3JtRGF0YT17aXRlbURhdGF9XHJcbiAgICAgICAgICBlcnJvclNjaGVtYT17aXRlbUVycm9yU2NoZW1hfVxyXG4gICAgICAgICAgaWRQcmVmaXg9e3RoaXMucHJvcHMuaWRQcmVmaXh9XHJcbiAgICAgICAgICBpZFNlcGFyYXRvcj17dGhpcy5wcm9wcy5pZFNlcGFyYXRvcn1cclxuICAgICAgICAgIGlkU2NoZW1hPXtpdGVtSWRTY2hlbWF9XHJcbiAgICAgICAgICByZXF1aXJlZD17dGhpcy5pc0l0ZW1SZXF1aXJlZChpdGVtU2NoZW1hKX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlRm9ySW5kZXgoaW5kZXgpfVxyXG4gICAgICAgICAgb25CbHVyPXtvbkJsdXJ9XHJcbiAgICAgICAgICBvbkZvY3VzPXtvbkZvY3VzfVxyXG4gICAgICAgICAgcmVnaXN0cnk9e3RoaXMucHJvcHMucmVnaXN0cnl9XHJcbiAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgIHJlYWRvbmx5PXt0aGlzLnByb3BzLnJlYWRvbmx5fVxyXG4gICAgICAgICAgaGlkZUVycm9yPXt0aGlzLnByb3BzLmhpZGVFcnJvcn1cclxuICAgICAgICAgIGF1dG9mb2N1cz17YXV0b2ZvY3VzfVxyXG4gICAgICAgICAgcmF3RXJyb3JzPXtyYXdFcnJvcnN9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSxcclxuICAgICAgY2xhc3NOYW1lOiBcImFycmF5LWl0ZW1cIixcclxuICAgICAgZGlzYWJsZWQsXHJcbiAgICAgIGhhc1Rvb2xiYXI6IGhhcy50b29sYmFyLFxyXG4gICAgICBoYXNNb3ZlVXA6IGhhcy5tb3ZlVXAsXHJcbiAgICAgIGhhc01vdmVEb3duOiBoYXMubW92ZURvd24sXHJcbiAgICAgIGhhc1JlbW92ZTogaGFzLnJlbW92ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIGtleSxcclxuICAgICAgb25BZGRJbmRleENsaWNrOiB0aGlzLm9uQWRkSW5kZXhDbGljayxcclxuICAgICAgb25Ecm9wSW5kZXhDbGljazogdGhpcy5vbkRyb3BJbmRleENsaWNrLFxyXG4gICAgICBvblJlb3JkZXJDbGljazogdGhpcy5vblJlb3JkZXJDbGljayxcclxuICAgICAgcmVhZG9ubHksXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gIEFycmF5RmllbGQucHJvcFR5cGVzID0gdHlwZXMuZmllbGRQcm9wcztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJyYXlGaWVsZDtcclxuIl19