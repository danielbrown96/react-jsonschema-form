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

import AddButton from "../AddButton";
import IconButton from "../IconButton";
import React, { Component } from "react";
import includes from "core-js-pure/es/array/includes";
import * as types from "../../types";
import { getWidget, getDefaultFormState, getUiOptions, isMultiSelect, isFilesArray, isFixedItems, allowAdditionalItems, isCustomWidget, optionsList, retrieveSchema, toIdSchema, getDefaultRegistry } from "../../utils";
import { nanoid } from "nanoid";

function ArrayFieldTitle(_ref) {
  var TitleField = _ref.TitleField,
      idSchema = _ref.idSchema,
      title = _ref.title,
      required = _ref.required;

  if (!title) {
    return null;
  }

  var id = "".concat(idSchema.$id, "__title");
  return React.createElement(TitleField, {
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
  return React.createElement(DescriptionField, {
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
  return React.createElement("div", {
    key: props.key,
    className: props.className
  }, React.createElement("div", {
    className: props.hasToolbar ? "col-xs-9" : "col-xs-12"
  }, props.children), props.hasToolbar && React.createElement("div", {
    className: "col-xs-3 array-item-toolbox"
  }, React.createElement("div", {
    className: "btn-group",
    style: {
      display: "flex",
      justifyContent: "space-around"
    }
  }, (props.hasMoveUp || props.hasMoveDown) && React.createElement(IconButton, {
    icon: "arrow-up",
    "aria-label": "Move up",
    className: "array-item-move-up",
    tabIndex: "-1",
    style: btnStyle,
    disabled: props.disabled || props.readonly || !props.hasMoveUp,
    onClick: props.onReorderClick(props.index, props.index - 1)
  }), (props.hasMoveUp || props.hasMoveDown) && React.createElement(IconButton, {
    icon: "arrow-down",
    className: "array-item-move-down",
    "aria-label": "Move down",
    tabIndex: "-1",
    style: btnStyle,
    disabled: props.disabled || props.readonly || !props.hasMoveDown,
    onClick: props.onReorderClick(props.index, props.index + 1)
  }), props.hasRemove && React.createElement(IconButton, {
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
  return React.createElement("fieldset", {
    className: props.className,
    id: props.idSchema.$id
  }, React.createElement(ArrayFieldTitle, {
    key: "array-field-title-".concat(props.idSchema.$id),
    TitleField: props.TitleField,
    idSchema: props.idSchema,
    title: props.uiSchema["ui:title"] || props.title,
    required: props.required
  }), (props.uiSchema["ui:description"] || props.schema.description) && React.createElement("div", {
    className: "field-description",
    key: "field-description-".concat(props.idSchema.$id)
  }, props.uiSchema["ui:description"] || props.schema.description), React.createElement("div", {
    className: "row array-item-list",
    key: "array-item-list-".concat(props.idSchema.$id)
  }, props.items && props.items.map(DefaultArrayItem)), props.canAdd && React.createElement(AddButton, {
    className: "array-item-add",
    onClick: props.onAddClick,
    disabled: props.disabled || props.readonly
  }));
}

function DefaultNormalArrayFieldTemplate(props) {
  return React.createElement("fieldset", {
    className: props.className,
    id: props.idSchema.$id
  }, React.createElement(ArrayFieldTitle, {
    key: "array-field-title-".concat(props.idSchema.$id),
    TitleField: props.TitleField,
    idSchema: props.idSchema,
    title: props.uiSchema["ui:title"] || props.title,
    required: props.required
  }), (props.uiSchema["ui:description"] || props.schema.description) && React.createElement(ArrayFieldDescription, {
    key: "array-field-description-".concat(props.idSchema.$id),
    DescriptionField: props.DescriptionField,
    idSchema: props.idSchema,
    description: props.uiSchema["ui:description"] || props.schema.description
  }), React.createElement("div", {
    className: "row array-item-list",
    key: "array-item-list-".concat(props.idSchema.$id)
  }, props.items && props.items.map(function (p) {
    return DefaultArrayItem(p);
  })), props.canAdd && React.createElement(AddButton, {
    className: "array-item-add",
    onClick: props.onAddClick,
    disabled: props.disabled || props.readonly
  }));
}

function generateRowId() {
  return nanoid();
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
          registry = _this$props$registry === void 0 ? getDefaultRegistry() : _this$props$registry;
      var rootSchema = registry.rootSchema;
      var itemSchema = schema.items;

      if (isFixedItems(schema) && allowAdditionalItems(schema)) {
        itemSchema = schema.additionalItems;
      }

      return getDefaultFormState(itemSchema, undefined, rootSchema);
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
        return !includes(itemSchema.type, "null");
      } // All non-null array item types are inherently required by design


      return itemSchema.type !== "null";
    }
  }, {
    key: "canAddItem",
    value: function canAddItem(formItems) {
      var _this$props3 = this.props,
          schema = _this$props3.schema,
          uiSchema = _this$props3.uiSchema;

      var _getUiOptions = getUiOptions(uiSchema),
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
          registry = _this$props4$registry === void 0 ? getDefaultRegistry() : _this$props4$registry;
      var rootSchema = registry.rootSchema;

      if (!schema.hasOwnProperty("items")) {
        var fields = registry.fields;
        var UnsupportedField = fields.UnsupportedField;
        return React.createElement(UnsupportedField, {
          schema: schema,
          idSchema: idSchema,
          reason: "Missing items definition"
        });
      }

      if (isMultiSelect(schema, rootSchema)) {
        // If array has enum or uniqueItems set to true, call renderMultiSelect() to render the default multiselect widget or a custom widget, if specified.
        return this.renderMultiSelect();
      }

      if (isCustomWidget(uiSchema)) {
        return this.renderCustomWidget();
      }

      if (isFixedItems(schema)) {
        return this.renderFixedArray();
      }

      if (isFilesArray(schema, uiSchema, rootSchema)) {
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
          registry = _this$props5$registry === void 0 ? getDefaultRegistry() : _this$props5$registry,
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
      var itemsSchema = retrieveSchema(schema.items, rootSchema);
      var formData = keyedToPlainFormData(this.state.keyedFormData);
      var arrayProps = {
        canAdd: this.canAddItem(formData),
        items: this.state.keyedFormData.map(function (keyedItem, index) {
          var key = keyedItem.key,
              item = keyedItem.item;
          var itemSchema = retrieveSchema(schema.items, rootSchema, item);
          var itemErrorSchema = errorSchema ? errorSchema[index] : undefined;
          var itemIdPrefix = idSchema.$id + "_" + index;
          var itemIdSchema = toIdSchema(itemSchema, itemIdPrefix, rootSchema, item, idPrefix, idSeparator);
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
      return React.createElement(Component, arrayProps);
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
          registry = _this$props6$registry === void 0 ? getDefaultRegistry() : _this$props6$registry,
          rawErrors = _this$props6.rawErrors,
          name = _this$props6.name;
      var widgets = registry.widgets,
          formContext = registry.formContext;
      var title = schema.title || name;

      var _getUiOptions2 = _objectSpread({}, getUiOptions(uiSchema)),
          widget = _getUiOptions2.widget,
          options = _objectWithoutProperties(_getUiOptions2, ["widget"]);

      var Widget = getWidget(schema, widget, widgets);
      return React.createElement(Widget, {
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
          registry = _this$props7$registry === void 0 ? getDefaultRegistry() : _this$props7$registry,
          rawErrors = _this$props7.rawErrors,
          name = _this$props7.name;
      var items = this.props.formData;
      var widgets = registry.widgets,
          rootSchema = registry.rootSchema,
          formContext = registry.formContext;
      var itemsSchema = retrieveSchema(schema.items, rootSchema, formData);
      var title = schema.title || name;
      var enumOptions = optionsList(itemsSchema);

      var _getUiOptions$enumOpt = _objectSpread({}, getUiOptions(uiSchema), {
        enumOptions: enumOptions
      }),
          _getUiOptions$enumOpt2 = _getUiOptions$enumOpt.widget,
          widget = _getUiOptions$enumOpt2 === void 0 ? "select" : _getUiOptions$enumOpt2,
          options = _objectWithoutProperties(_getUiOptions$enumOpt, ["widget"]);

      var Widget = getWidget(schema, widget, widgets);
      return React.createElement(Widget, {
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
          registry = _this$props8$registry === void 0 ? getDefaultRegistry() : _this$props8$registry,
          rawErrors = _this$props8.rawErrors;
      var title = schema.title || name;
      var items = this.props.formData;
      var widgets = registry.widgets,
          formContext = registry.formContext;

      var _getUiOptions3 = getUiOptions(uiSchema),
          _getUiOptions3$widget = _getUiOptions3.widget,
          widget = _getUiOptions3$widget === void 0 ? "files" : _getUiOptions3$widget,
          options = _objectWithoutProperties(_getUiOptions3, ["widget"]);

      var Widget = getWidget(schema, widget, widgets);
      return React.createElement(Widget, {
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
          registry = _this$props9$registry === void 0 ? getDefaultRegistry() : _this$props9$registry,
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
        return retrieveSchema(item, rootSchema, formData[index]);
      });
      var additionalSchema = allowAdditionalItems(schema) ? retrieveSchema(schema.additionalItems, rootSchema, formData) : null;

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
          var itemSchema = additional ? retrieveSchema(schema.additionalItems, rootSchema, item) : itemSchemas[index];
          var itemIdPrefix = idSchema.$id + "_" + index;
          var itemIdSchema = toIdSchema(itemSchema, itemIdPrefix, rootSchema, item, idPrefix, idSeparator);
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
      return React.createElement(Template, arrayProps);
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
          registry = _this$props10$registr === void 0 ? getDefaultRegistry() : _this$props10$registr;
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
        children: React.createElement(SchemaField, {
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
}(Component);

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

export default ArrayField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpZWxkcy9BcnJheUZpZWxkLmpzIl0sIm5hbWVzIjpbIkFkZEJ1dHRvbiIsIkljb25CdXR0b24iLCJSZWFjdCIsIkNvbXBvbmVudCIsImluY2x1ZGVzIiwidHlwZXMiLCJnZXRXaWRnZXQiLCJnZXREZWZhdWx0Rm9ybVN0YXRlIiwiZ2V0VWlPcHRpb25zIiwiaXNNdWx0aVNlbGVjdCIsImlzRmlsZXNBcnJheSIsImlzRml4ZWRJdGVtcyIsImFsbG93QWRkaXRpb25hbEl0ZW1zIiwiaXNDdXN0b21XaWRnZXQiLCJvcHRpb25zTGlzdCIsInJldHJpZXZlU2NoZW1hIiwidG9JZFNjaGVtYSIsImdldERlZmF1bHRSZWdpc3RyeSIsIm5hbm9pZCIsIkFycmF5RmllbGRUaXRsZSIsIlRpdGxlRmllbGQiLCJpZFNjaGVtYSIsInRpdGxlIiwicmVxdWlyZWQiLCJpZCIsIiRpZCIsIkFycmF5RmllbGREZXNjcmlwdGlvbiIsIkRlc2NyaXB0aW9uRmllbGQiLCJkZXNjcmlwdGlvbiIsIkRlZmF1bHRBcnJheUl0ZW0iLCJwcm9wcyIsImJ0blN0eWxlIiwiZmxleCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiZm9udFdlaWdodCIsImtleSIsImNsYXNzTmFtZSIsImhhc1Rvb2xiYXIiLCJjaGlsZHJlbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImhhc01vdmVVcCIsImhhc01vdmVEb3duIiwiZGlzYWJsZWQiLCJyZWFkb25seSIsIm9uUmVvcmRlckNsaWNrIiwiaW5kZXgiLCJoYXNSZW1vdmUiLCJvbkRyb3BJbmRleENsaWNrIiwiRGVmYXVsdEZpeGVkQXJyYXlGaWVsZFRlbXBsYXRlIiwidWlTY2hlbWEiLCJzY2hlbWEiLCJpdGVtcyIsIm1hcCIsImNhbkFkZCIsIm9uQWRkQ2xpY2siLCJEZWZhdWx0Tm9ybWFsQXJyYXlGaWVsZFRlbXBsYXRlIiwicCIsImdlbmVyYXRlUm93SWQiLCJnZW5lcmF0ZUtleWVkRm9ybURhdGEiLCJmb3JtRGF0YSIsIkFycmF5IiwiaXNBcnJheSIsIml0ZW0iLCJrZXllZFRvUGxhaW5Gb3JtRGF0YSIsImtleWVkRm9ybURhdGEiLCJrZXllZEl0ZW0iLCJBcnJheUZpZWxkIiwicmVnaXN0cnkiLCJyb290U2NoZW1hIiwiaXRlbVNjaGVtYSIsImFkZGl0aW9uYWxJdGVtcyIsInVuZGVmaW5lZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJvbkNoYW5nZSIsIm5ld0tleWVkRm9ybURhdGFSb3ciLCJfZ2V0TmV3Rm9ybURhdGFSb3ciLCJuZXdLZXllZEZvcm1EYXRhIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVwZGF0ZWRLZXllZEZvcm1EYXRhIiwic3BsaWNlIiwibmV3RXJyb3JTY2hlbWEiLCJlcnJvclNjaGVtYSIsImkiLCJwYXJzZUludCIsImZpbHRlciIsIl8iLCJuZXdJbmRleCIsInRhcmdldCIsImJsdXIiLCJyZU9yZGVyQXJyYXkiLCJfbmV3S2V5ZWRGb3JtRGF0YSIsInNsaWNlIiwidmFsdWUiLCJuZXdGb3JtRGF0YSIsImpzb25WYWx1ZSIsInR5cGUiLCJmb3JtSXRlbXMiLCJhZGRhYmxlIiwibWF4SXRlbXMiLCJsZW5ndGgiLCJoYXNPd25Qcm9wZXJ0eSIsImZpZWxkcyIsIlVuc3VwcG9ydGVkRmllbGQiLCJyZW5kZXJNdWx0aVNlbGVjdCIsInJlbmRlckN1c3RvbVdpZGdldCIsInJlbmRlckZpeGVkQXJyYXkiLCJyZW5kZXJGaWxlcyIsInJlbmRlck5vcm1hbEFycmF5IiwibmFtZSIsImhpZGVFcnJvciIsImF1dG9mb2N1cyIsIm9uQmx1ciIsIm9uRm9jdXMiLCJpZFByZWZpeCIsImlkU2VwYXJhdG9yIiwicmF3RXJyb3JzIiwiQXJyYXlGaWVsZFRlbXBsYXRlIiwiZm9ybUNvbnRleHQiLCJpdGVtc1NjaGVtYSIsImFycmF5UHJvcHMiLCJjYW5BZGRJdGVtIiwiaXRlbUVycm9yU2NoZW1hIiwiaXRlbUlkUHJlZml4IiwiaXRlbUlkU2NoZW1hIiwicmVuZGVyQXJyYXlGaWVsZEl0ZW0iLCJjYW5Nb3ZlVXAiLCJjYW5Nb3ZlRG93biIsIml0ZW1EYXRhIiwiaXRlbVVpU2NoZW1hIiwicGxhY2Vob2xkZXIiLCJ3aWRnZXRzIiwid2lkZ2V0Iiwib3B0aW9ucyIsIldpZGdldCIsIm9uU2VsZWN0Q2hhbmdlIiwiZW51bU9wdGlvbnMiLCJpdGVtU2NoZW1hcyIsImFkZGl0aW9uYWxTY2hlbWEiLCJjb25jYXQiLCJhZGRpdGlvbmFsIiwiY2FuUmVtb3ZlIiwiVGVtcGxhdGUiLCJTY2hlbWFGaWVsZCIsIm9yZGVyYWJsZSIsInJlbW92YWJsZSIsImhhcyIsIm1vdmVVcCIsIm1vdmVEb3duIiwicmVtb3ZlIiwidG9vbGJhciIsIk9iamVjdCIsImtleXMiLCJzb21lIiwiaXNJdGVtUmVxdWlyZWQiLCJvbkNoYW5nZUZvckluZGV4Iiwib25BZGRJbmRleENsaWNrIiwibmV4dFByb3BzIiwicHJldlN0YXRlIiwibmV4dEZvcm1EYXRhIiwicHJldmlvdXNLZXllZEZvcm1EYXRhIiwicHJldmlvdXNLZXllZEZvcm1EYXR1bSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInByb3BUeXBlcyIsImZpZWxkUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFQLE1BQXNCLGNBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixlQUF2QjtBQUNBLE9BQU9DLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixnQ0FBckI7QUFDQSxPQUFPLEtBQUtDLEtBQVosTUFBdUIsYUFBdkI7QUFFQSxTQUNFQyxTQURGLEVBRUVDLG1CQUZGLEVBR0VDLFlBSEYsRUFJRUMsYUFKRixFQUtFQyxZQUxGLEVBTUVDLFlBTkYsRUFPRUMsb0JBUEYsRUFRRUMsY0FSRixFQVNFQyxXQVRGLEVBVUVDLGNBVkYsRUFXRUMsVUFYRixFQVlFQyxrQkFaRixRQWFPLGFBYlA7QUFjQSxTQUFTQyxNQUFULFFBQXVCLFFBQXZCOztBQUVBLFNBQVNDLGVBQVQsT0FBb0U7QUFBQSxNQUF6Q0MsVUFBeUMsUUFBekNBLFVBQXlDO0FBQUEsTUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQ2xFLE1BQUksQ0FBQ0QsS0FBTCxFQUFZO0FBQ1YsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsTUFBTUUsRUFBRSxhQUFNSCxRQUFRLENBQUNJLEdBQWYsWUFBUjtBQUNBLFNBQU8sb0JBQUMsVUFBRDtBQUFZLElBQUEsRUFBRSxFQUFFRCxFQUFoQjtBQUFvQixJQUFBLEtBQUssRUFBRUYsS0FBM0I7QUFBa0MsSUFBQSxRQUFRLEVBQUVDO0FBQTVDLElBQVA7QUFDRDs7QUFFRCxTQUFTRyxxQkFBVCxRQUE0RTtBQUFBLE1BQTNDQyxnQkFBMkMsU0FBM0NBLGdCQUEyQztBQUFBLE1BQXpCTixRQUF5QixTQUF6QkEsUUFBeUI7QUFBQSxNQUFmTyxXQUFlLFNBQWZBLFdBQWU7O0FBQzFFLE1BQUksQ0FBQ0EsV0FBTCxFQUFrQjtBQUNoQixXQUFPLElBQVA7QUFDRDs7QUFDRCxNQUFNSixFQUFFLGFBQU1ILFFBQVEsQ0FBQ0ksR0FBZixrQkFBUjtBQUNBLFNBQU8sb0JBQUMsZ0JBQUQ7QUFBa0IsSUFBQSxFQUFFLEVBQUVELEVBQXRCO0FBQTBCLElBQUEsV0FBVyxFQUFFSTtBQUF2QyxJQUFQO0FBQ0QsQyxDQUVEOzs7QUFDQSxTQUFTQyxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7QUFDL0IsTUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLElBQUFBLElBQUksRUFBRSxDQURTO0FBRWZDLElBQUFBLFdBQVcsRUFBRSxDQUZFO0FBR2ZDLElBQUFBLFlBQVksRUFBRSxDQUhDO0FBSWZDLElBQUFBLFVBQVUsRUFBRTtBQUpHLEdBQWpCO0FBTUEsU0FDRTtBQUFLLElBQUEsR0FBRyxFQUFFTCxLQUFLLENBQUNNLEdBQWhCO0FBQXFCLElBQUEsU0FBUyxFQUFFTixLQUFLLENBQUNPO0FBQXRDLEtBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRVAsS0FBSyxDQUFDUSxVQUFOLEdBQW1CLFVBQW5CLEdBQWdDO0FBQWhELEtBQ0dSLEtBQUssQ0FBQ1MsUUFEVCxDQURGLEVBS0dULEtBQUssQ0FBQ1EsVUFBTixJQUNDO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFO0FBQ0UsSUFBQSxTQUFTLEVBQUMsV0FEWjtBQUVFLElBQUEsS0FBSyxFQUFFO0FBQ0xFLE1BQUFBLE9BQU8sRUFBRSxNQURKO0FBRUxDLE1BQUFBLGNBQWMsRUFBRTtBQUZYO0FBRlQsS0FNRyxDQUFDWCxLQUFLLENBQUNZLFNBQU4sSUFBbUJaLEtBQUssQ0FBQ2EsV0FBMUIsS0FDQyxvQkFBQyxVQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUMsVUFEUDtBQUVFLGtCQUFXLFNBRmI7QUFHRSxJQUFBLFNBQVMsRUFBQyxvQkFIWjtBQUlFLElBQUEsUUFBUSxFQUFDLElBSlg7QUFLRSxJQUFBLEtBQUssRUFBRVosUUFMVDtBQU1FLElBQUEsUUFBUSxFQUFFRCxLQUFLLENBQUNjLFFBQU4sSUFBa0JkLEtBQUssQ0FBQ2UsUUFBeEIsSUFBb0MsQ0FBQ2YsS0FBSyxDQUFDWSxTQU52RDtBQU9FLElBQUEsT0FBTyxFQUFFWixLQUFLLENBQUNnQixjQUFOLENBQXFCaEIsS0FBSyxDQUFDaUIsS0FBM0IsRUFBa0NqQixLQUFLLENBQUNpQixLQUFOLEdBQWMsQ0FBaEQ7QUFQWCxJQVBKLEVBa0JHLENBQUNqQixLQUFLLENBQUNZLFNBQU4sSUFBbUJaLEtBQUssQ0FBQ2EsV0FBMUIsS0FDQyxvQkFBQyxVQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUMsWUFEUDtBQUVFLElBQUEsU0FBUyxFQUFDLHNCQUZaO0FBR0Usa0JBQVcsV0FIYjtBQUlFLElBQUEsUUFBUSxFQUFDLElBSlg7QUFLRSxJQUFBLEtBQUssRUFBRVosUUFMVDtBQU1FLElBQUEsUUFBUSxFQUNORCxLQUFLLENBQUNjLFFBQU4sSUFBa0JkLEtBQUssQ0FBQ2UsUUFBeEIsSUFBb0MsQ0FBQ2YsS0FBSyxDQUFDYSxXQVAvQztBQVNFLElBQUEsT0FBTyxFQUFFYixLQUFLLENBQUNnQixjQUFOLENBQXFCaEIsS0FBSyxDQUFDaUIsS0FBM0IsRUFBa0NqQixLQUFLLENBQUNpQixLQUFOLEdBQWMsQ0FBaEQ7QUFUWCxJQW5CSixFQWdDR2pCLEtBQUssQ0FBQ2tCLFNBQU4sSUFDQyxvQkFBQyxVQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUMsUUFEUDtBQUVFLElBQUEsSUFBSSxFQUFDLFFBRlA7QUFHRSxrQkFBVyxRQUhiO0FBSUUsSUFBQSxTQUFTLEVBQUMsbUJBSlo7QUFLRSxJQUFBLFFBQVEsRUFBQyxJQUxYO0FBTUUsSUFBQSxLQUFLLEVBQUVqQixRQU5UO0FBT0UsSUFBQSxRQUFRLEVBQUVELEtBQUssQ0FBQ2MsUUFBTixJQUFrQmQsS0FBSyxDQUFDZSxRQVBwQztBQVFFLElBQUEsT0FBTyxFQUFFZixLQUFLLENBQUNtQixnQkFBTixDQUF1Qm5CLEtBQUssQ0FBQ2lCLEtBQTdCO0FBUlgsSUFqQ0osQ0FERixDQU5KLENBREY7QUF5REQ7O0FBRUQsU0FBU0csOEJBQVQsQ0FBd0NwQixLQUF4QyxFQUErQztBQUM3QyxTQUNFO0FBQVUsSUFBQSxTQUFTLEVBQUVBLEtBQUssQ0FBQ08sU0FBM0I7QUFBc0MsSUFBQSxFQUFFLEVBQUVQLEtBQUssQ0FBQ1QsUUFBTixDQUFlSTtBQUF6RCxLQUNFLG9CQUFDLGVBQUQ7QUFDRSxJQUFBLEdBQUcsOEJBQXVCSyxLQUFLLENBQUNULFFBQU4sQ0FBZUksR0FBdEMsQ0FETDtBQUVFLElBQUEsVUFBVSxFQUFFSyxLQUFLLENBQUNWLFVBRnBCO0FBR0UsSUFBQSxRQUFRLEVBQUVVLEtBQUssQ0FBQ1QsUUFIbEI7QUFJRSxJQUFBLEtBQUssRUFBRVMsS0FBSyxDQUFDcUIsUUFBTixDQUFlLFVBQWYsS0FBOEJyQixLQUFLLENBQUNSLEtBSjdDO0FBS0UsSUFBQSxRQUFRLEVBQUVRLEtBQUssQ0FBQ1A7QUFMbEIsSUFERixFQVNHLENBQUNPLEtBQUssQ0FBQ3FCLFFBQU4sQ0FBZSxnQkFBZixLQUFvQ3JCLEtBQUssQ0FBQ3NCLE1BQU4sQ0FBYXhCLFdBQWxELEtBQ0M7QUFDRSxJQUFBLFNBQVMsRUFBQyxtQkFEWjtBQUVFLElBQUEsR0FBRyw4QkFBdUJFLEtBQUssQ0FBQ1QsUUFBTixDQUFlSSxHQUF0QztBQUZMLEtBR0dLLEtBQUssQ0FBQ3FCLFFBQU4sQ0FBZSxnQkFBZixLQUFvQ3JCLEtBQUssQ0FBQ3NCLE1BQU4sQ0FBYXhCLFdBSHBELENBVkosRUFpQkU7QUFDRSxJQUFBLFNBQVMsRUFBQyxxQkFEWjtBQUVFLElBQUEsR0FBRyw0QkFBcUJFLEtBQUssQ0FBQ1QsUUFBTixDQUFlSSxHQUFwQztBQUZMLEtBR0dLLEtBQUssQ0FBQ3VCLEtBQU4sSUFBZXZCLEtBQUssQ0FBQ3VCLEtBQU4sQ0FBWUMsR0FBWixDQUFnQnpCLGdCQUFoQixDQUhsQixDQWpCRixFQXVCR0MsS0FBSyxDQUFDeUIsTUFBTixJQUNDLG9CQUFDLFNBQUQ7QUFDRSxJQUFBLFNBQVMsRUFBQyxnQkFEWjtBQUVFLElBQUEsT0FBTyxFQUFFekIsS0FBSyxDQUFDMEIsVUFGakI7QUFHRSxJQUFBLFFBQVEsRUFBRTFCLEtBQUssQ0FBQ2MsUUFBTixJQUFrQmQsS0FBSyxDQUFDZTtBQUhwQyxJQXhCSixDQURGO0FBaUNEOztBQUVELFNBQVNZLCtCQUFULENBQXlDM0IsS0FBekMsRUFBZ0Q7QUFDOUMsU0FDRTtBQUFVLElBQUEsU0FBUyxFQUFFQSxLQUFLLENBQUNPLFNBQTNCO0FBQXNDLElBQUEsRUFBRSxFQUFFUCxLQUFLLENBQUNULFFBQU4sQ0FBZUk7QUFBekQsS0FDRSxvQkFBQyxlQUFEO0FBQ0UsSUFBQSxHQUFHLDhCQUF1QkssS0FBSyxDQUFDVCxRQUFOLENBQWVJLEdBQXRDLENBREw7QUFFRSxJQUFBLFVBQVUsRUFBRUssS0FBSyxDQUFDVixVQUZwQjtBQUdFLElBQUEsUUFBUSxFQUFFVSxLQUFLLENBQUNULFFBSGxCO0FBSUUsSUFBQSxLQUFLLEVBQUVTLEtBQUssQ0FBQ3FCLFFBQU4sQ0FBZSxVQUFmLEtBQThCckIsS0FBSyxDQUFDUixLQUo3QztBQUtFLElBQUEsUUFBUSxFQUFFUSxLQUFLLENBQUNQO0FBTGxCLElBREYsRUFTRyxDQUFDTyxLQUFLLENBQUNxQixRQUFOLENBQWUsZ0JBQWYsS0FBb0NyQixLQUFLLENBQUNzQixNQUFOLENBQWF4QixXQUFsRCxLQUNDLG9CQUFDLHFCQUFEO0FBQ0UsSUFBQSxHQUFHLG9DQUE2QkUsS0FBSyxDQUFDVCxRQUFOLENBQWVJLEdBQTVDLENBREw7QUFFRSxJQUFBLGdCQUFnQixFQUFFSyxLQUFLLENBQUNILGdCQUYxQjtBQUdFLElBQUEsUUFBUSxFQUFFRyxLQUFLLENBQUNULFFBSGxCO0FBSUUsSUFBQSxXQUFXLEVBQ1RTLEtBQUssQ0FBQ3FCLFFBQU4sQ0FBZSxnQkFBZixLQUFvQ3JCLEtBQUssQ0FBQ3NCLE1BQU4sQ0FBYXhCO0FBTHJELElBVkosRUFvQkU7QUFDRSxJQUFBLFNBQVMsRUFBQyxxQkFEWjtBQUVFLElBQUEsR0FBRyw0QkFBcUJFLEtBQUssQ0FBQ1QsUUFBTixDQUFlSSxHQUFwQztBQUZMLEtBR0dLLEtBQUssQ0FBQ3VCLEtBQU4sSUFBZXZCLEtBQUssQ0FBQ3VCLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFBSSxDQUFDO0FBQUEsV0FBSTdCLGdCQUFnQixDQUFDNkIsQ0FBRCxDQUFwQjtBQUFBLEdBQWpCLENBSGxCLENBcEJGLEVBMEJHNUIsS0FBSyxDQUFDeUIsTUFBTixJQUNDLG9CQUFDLFNBQUQ7QUFDRSxJQUFBLFNBQVMsRUFBQyxnQkFEWjtBQUVFLElBQUEsT0FBTyxFQUFFekIsS0FBSyxDQUFDMEIsVUFGakI7QUFHRSxJQUFBLFFBQVEsRUFBRTFCLEtBQUssQ0FBQ2MsUUFBTixJQUFrQmQsS0FBSyxDQUFDZTtBQUhwQyxJQTNCSixDQURGO0FBb0NEOztBQUVELFNBQVNjLGFBQVQsR0FBeUI7QUFDdkIsU0FBT3pDLE1BQU0sRUFBYjtBQUNEOztBQUVELFNBQVMwQyxxQkFBVCxDQUErQkMsUUFBL0IsRUFBeUM7QUFDdkMsU0FBTyxDQUFDQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsUUFBZCxDQUFELEdBQ0gsRUFERyxHQUVIQSxRQUFRLENBQUNQLEdBQVQsQ0FBYSxVQUFBVSxJQUFJLEVBQUk7QUFDbkIsV0FBTztBQUNMNUIsTUFBQUEsR0FBRyxFQUFFdUIsYUFBYSxFQURiO0FBRUxLLE1BQUFBLElBQUksRUFBSkE7QUFGSyxLQUFQO0FBSUQsR0FMRCxDQUZKO0FBUUQ7O0FBRUQsU0FBU0Msb0JBQVQsQ0FBOEJDLGFBQTlCLEVBQTZDO0FBQzNDLFNBQU9BLGFBQWEsQ0FBQ1osR0FBZCxDQUFrQixVQUFBYSxTQUFTO0FBQUEsV0FBSUEsU0FBUyxDQUFDSCxJQUFkO0FBQUEsR0FBM0IsQ0FBUDtBQUNEOztJQUVLSSxVOzs7OztBQVdKLHNCQUFZdEMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixvRkFBTUEsS0FBTjs7QUFEaUIseUVBK0RFLFlBQU07QUFBQSx3QkFDMkIsTUFBS0EsS0FEaEM7QUFBQSxVQUNqQnNCLE1BRGlCLGVBQ2pCQSxNQURpQjtBQUFBLDZDQUNUaUIsUUFEUztBQUFBLFVBQ1RBLFFBRFMscUNBQ0VwRCxrQkFBa0IsRUFEcEI7QUFBQSxVQUVqQnFELFVBRmlCLEdBRUZELFFBRkUsQ0FFakJDLFVBRmlCO0FBR3pCLFVBQUlDLFVBQVUsR0FBR25CLE1BQU0sQ0FBQ0MsS0FBeEI7O0FBQ0EsVUFBSTFDLFlBQVksQ0FBQ3lDLE1BQUQsQ0FBWixJQUF3QnhDLG9CQUFvQixDQUFDd0MsTUFBRCxDQUFoRCxFQUEwRDtBQUN4RG1CLFFBQUFBLFVBQVUsR0FBR25CLE1BQU0sQ0FBQ29CLGVBQXBCO0FBQ0Q7O0FBQ0QsYUFBT2pFLG1CQUFtQixDQUFDZ0UsVUFBRCxFQUFhRSxTQUFiLEVBQXdCSCxVQUF4QixDQUExQjtBQUNELEtBdkVrQjs7QUFBQSxpRUF5RU4sVUFBQUksS0FBSyxFQUFJO0FBQ3BCLFVBQUlBLEtBQUosRUFBVztBQUNUQSxRQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDRDs7QUFIbUIsVUFLWkMsUUFMWSxHQUtDLE1BQUs5QyxLQUxOLENBS1o4QyxRQUxZO0FBTXBCLFVBQU1DLG1CQUFtQixHQUFHO0FBQzFCekMsUUFBQUEsR0FBRyxFQUFFdUIsYUFBYSxFQURRO0FBRTFCSyxRQUFBQSxJQUFJLEVBQUUsTUFBS2Msa0JBQUw7QUFGb0IsT0FBNUI7QUFJQSxVQUFNQyxnQkFBZ0IsZ0NBQU8sTUFBS0MsS0FBTCxDQUFXZCxhQUFsQixJQUFpQ1csbUJBQWpDLEVBQXRCOztBQUNBLFlBQUtJLFFBQUwsQ0FDRTtBQUNFZixRQUFBQSxhQUFhLEVBQUVhLGdCQURqQjtBQUVFRyxRQUFBQSxvQkFBb0IsRUFBRTtBQUZ4QixPQURGLEVBS0U7QUFBQSxlQUFNTixRQUFRLENBQUNYLG9CQUFvQixDQUFDYyxnQkFBRCxDQUFyQixDQUFkO0FBQUEsT0FMRjtBQU9ELEtBM0ZrQjs7QUFBQSxzRUE2RkQsVUFBQWhDLEtBQUssRUFBSTtBQUN6QixhQUFPLFVBQUEyQixLQUFLLEVBQUk7QUFDZCxZQUFJQSxLQUFKLEVBQVc7QUFDVEEsVUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0Q7O0FBSGEsWUFJTkMsUUFKTSxHQUlPLE1BQUs5QyxLQUpaLENBSU44QyxRQUpNO0FBS2QsWUFBTUMsbUJBQW1CLEdBQUc7QUFDMUJ6QyxVQUFBQSxHQUFHLEVBQUV1QixhQUFhLEVBRFE7QUFFMUJLLFVBQUFBLElBQUksRUFBRSxNQUFLYyxrQkFBTDtBQUZvQixTQUE1Qjs7QUFJQSxZQUFJQyxnQkFBZ0Isc0JBQU8sTUFBS0MsS0FBTCxDQUFXZCxhQUFsQixDQUFwQjs7QUFDQWEsUUFBQUEsZ0JBQWdCLENBQUNJLE1BQWpCLENBQXdCcEMsS0FBeEIsRUFBK0IsQ0FBL0IsRUFBa0M4QixtQkFBbEM7O0FBRUEsY0FBS0ksUUFBTCxDQUNFO0FBQ0VmLFVBQUFBLGFBQWEsRUFBRWEsZ0JBRGpCO0FBRUVHLFVBQUFBLG9CQUFvQixFQUFFO0FBRnhCLFNBREYsRUFLRTtBQUFBLGlCQUFNTixRQUFRLENBQUNYLG9CQUFvQixDQUFDYyxnQkFBRCxDQUFyQixDQUFkO0FBQUEsU0FMRjtBQU9ELE9BbkJEO0FBb0JELEtBbEhrQjs7QUFBQSx1RUFvSEEsVUFBQWhDLEtBQUssRUFBSTtBQUMxQixhQUFPLFVBQUEyQixLQUFLLEVBQUk7QUFDZCxZQUFJQSxLQUFKLEVBQVc7QUFDVEEsVUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0Q7O0FBSGEsWUFJTkMsUUFKTSxHQUlPLE1BQUs5QyxLQUpaLENBSU44QyxRQUpNO0FBQUEsWUFLTlYsYUFMTSxHQUtZLE1BQUtjLEtBTGpCLENBS05kLGFBTE0sRUFNZDs7QUFDQSxZQUFJa0IsY0FBSjs7QUFDQSxZQUFJLE1BQUt0RCxLQUFMLENBQVd1RCxXQUFmLEVBQTRCO0FBQzFCRCxVQUFBQSxjQUFjLEdBQUcsRUFBakI7QUFDQSxjQUFNQyxXQUFXLEdBQUcsTUFBS3ZELEtBQUwsQ0FBV3VELFdBQS9COztBQUNBLGVBQUssSUFBSUMsQ0FBVCxJQUFjRCxXQUFkLEVBQTJCO0FBQ3pCQyxZQUFBQSxDQUFDLEdBQUdDLFFBQVEsQ0FBQ0QsQ0FBRCxDQUFaOztBQUNBLGdCQUFJQSxDQUFDLEdBQUd2QyxLQUFSLEVBQWU7QUFDYnFDLGNBQUFBLGNBQWMsQ0FBQ0UsQ0FBRCxDQUFkLEdBQW9CRCxXQUFXLENBQUNDLENBQUQsQ0FBL0I7QUFDRCxhQUZELE1BRU8sSUFBSUEsQ0FBQyxHQUFHdkMsS0FBUixFQUFlO0FBQ3BCcUMsY0FBQUEsY0FBYyxDQUFDRSxDQUFDLEdBQUcsQ0FBTCxDQUFkLEdBQXdCRCxXQUFXLENBQUNDLENBQUQsQ0FBbkM7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0QsWUFBTVAsZ0JBQWdCLEdBQUdiLGFBQWEsQ0FBQ3NCLE1BQWQsQ0FBcUIsVUFBQ0MsQ0FBRCxFQUFJSCxDQUFKO0FBQUEsaUJBQVVBLENBQUMsS0FBS3ZDLEtBQWhCO0FBQUEsU0FBckIsQ0FBekI7O0FBQ0EsY0FBS2tDLFFBQUwsQ0FDRTtBQUNFZixVQUFBQSxhQUFhLEVBQUVhLGdCQURqQjtBQUVFRyxVQUFBQSxvQkFBb0IsRUFBRTtBQUZ4QixTQURGLEVBS0U7QUFBQSxpQkFBTU4sUUFBUSxDQUFDWCxvQkFBb0IsQ0FBQ2MsZ0JBQUQsQ0FBckIsRUFBeUNLLGNBQXpDLENBQWQ7QUFBQSxTQUxGO0FBT0QsT0E1QkQ7QUE2QkQsS0FsSmtCOztBQUFBLHFFQW9KRixVQUFDckMsS0FBRCxFQUFRMkMsUUFBUixFQUFxQjtBQUNwQyxhQUFPLFVBQUFoQixLQUFLLEVBQUk7QUFDZCxZQUFJQSxLQUFKLEVBQVc7QUFDVEEsVUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0FELFVBQUFBLEtBQUssQ0FBQ2lCLE1BQU4sQ0FBYUMsSUFBYjtBQUNEOztBQUphLFlBS05oQixRQUxNLEdBS08sTUFBSzlDLEtBTFosQ0FLTjhDLFFBTE07QUFNZCxZQUFJUSxjQUFKOztBQUNBLFlBQUksTUFBS3RELEtBQUwsQ0FBV3VELFdBQWYsRUFBNEI7QUFDMUJELFVBQUFBLGNBQWMsR0FBRyxFQUFqQjtBQUNBLGNBQU1DLFdBQVcsR0FBRyxNQUFLdkQsS0FBTCxDQUFXdUQsV0FBL0I7O0FBQ0EsZUFBSyxJQUFJQyxDQUFULElBQWNELFdBQWQsRUFBMkI7QUFDekIsZ0JBQUlDLENBQUMsSUFBSXZDLEtBQVQsRUFBZ0I7QUFDZHFDLGNBQUFBLGNBQWMsQ0FBQ00sUUFBRCxDQUFkLEdBQTJCTCxXQUFXLENBQUN0QyxLQUFELENBQXRDO0FBQ0QsYUFGRCxNQUVPLElBQUl1QyxDQUFDLElBQUlJLFFBQVQsRUFBbUI7QUFDeEJOLGNBQUFBLGNBQWMsQ0FBQ3JDLEtBQUQsQ0FBZCxHQUF3QnNDLFdBQVcsQ0FBQ0ssUUFBRCxDQUFuQztBQUNELGFBRk0sTUFFQTtBQUNMTixjQUFBQSxjQUFjLENBQUNFLENBQUQsQ0FBZCxHQUFvQkQsV0FBVyxDQUFDQyxDQUFELENBQS9CO0FBQ0Q7QUFDRjtBQUNGOztBQW5CYSxZQXFCTnBCLGFBckJNLEdBcUJZLE1BQUtjLEtBckJqQixDQXFCTmQsYUFyQk07O0FBc0JkLGlCQUFTMkIsWUFBVCxHQUF3QjtBQUN0QjtBQUNBLGNBQUlDLGlCQUFpQixHQUFHNUIsYUFBYSxDQUFDNkIsS0FBZCxFQUF4QixDQUZzQixDQUl0Qjs7O0FBQ0FELFVBQUFBLGlCQUFpQixDQUFDWCxNQUFsQixDQUF5QnBDLEtBQXpCLEVBQWdDLENBQWhDOztBQUNBK0MsVUFBQUEsaUJBQWlCLENBQUNYLE1BQWxCLENBQXlCTyxRQUF6QixFQUFtQyxDQUFuQyxFQUFzQ3hCLGFBQWEsQ0FBQ25CLEtBQUQsQ0FBbkQ7O0FBRUEsaUJBQU8rQyxpQkFBUDtBQUNEOztBQUNELFlBQU1mLGdCQUFnQixHQUFHYyxZQUFZLEVBQXJDOztBQUNBLGNBQUtaLFFBQUwsQ0FDRTtBQUNFZixVQUFBQSxhQUFhLEVBQUVhO0FBRGpCLFNBREYsRUFJRTtBQUFBLGlCQUFNSCxRQUFRLENBQUNYLG9CQUFvQixDQUFDYyxnQkFBRCxDQUFyQixFQUF5Q0ssY0FBekMsQ0FBZDtBQUFBLFNBSkY7QUFNRCxPQXZDRDtBQXdDRCxLQTdMa0I7O0FBQUEsdUVBK0xBLFVBQUFyQyxLQUFLLEVBQUk7QUFDMUIsYUFBTyxVQUFDaUQsS0FBRCxFQUFRWCxXQUFSLEVBQXdCO0FBQUEsMkJBQ0UsTUFBS3ZELEtBRFA7QUFBQSxZQUNyQitCLFFBRHFCLGdCQUNyQkEsUUFEcUI7QUFBQSxZQUNYZSxRQURXLGdCQUNYQSxRQURXO0FBRTdCLFlBQU1xQixXQUFXLEdBQUdwQyxRQUFRLENBQUNQLEdBQVQsQ0FBYSxVQUFDVSxJQUFELEVBQU9zQixDQUFQLEVBQWE7QUFDNUM7QUFDQTtBQUNBLGNBQU1ZLFNBQVMsR0FBRyxPQUFPRixLQUFQLEtBQWlCLFdBQWpCLEdBQStCLElBQS9CLEdBQXNDQSxLQUF4RDtBQUNBLGlCQUFPakQsS0FBSyxLQUFLdUMsQ0FBVixHQUFjWSxTQUFkLEdBQTBCbEMsSUFBakM7QUFDRCxTQUxtQixDQUFwQjtBQU1BWSxRQUFBQSxRQUFRLENBQ05xQixXQURNLEVBRU5aLFdBQVcsSUFDVCxNQUFLdkQsS0FBTCxDQUFXdUQsV0FEYixzQkFFTyxNQUFLdkQsS0FBTCxDQUFXdUQsV0FGbEIsc0JBR0t0QyxLQUhMLEVBR2FzQyxXQUhiLEVBRk0sQ0FBUjtBQVFELE9BaEJEO0FBaUJELEtBak5rQjs7QUFBQSxxRUFtTkYsVUFBQVcsS0FBSyxFQUFJO0FBQ3hCLFlBQUtsRSxLQUFMLENBQVc4QyxRQUFYLENBQW9Cb0IsS0FBcEI7QUFDRCxLQXJOa0I7O0FBQUEsUUFFVG5DLFNBRlMsR0FFSS9CLEtBRkosQ0FFVCtCLFFBRlM7O0FBR2pCLFFBQU1LLGNBQWEsR0FBR04scUJBQXFCLENBQUNDLFNBQUQsQ0FBM0M7O0FBQ0EsVUFBS21CLEtBQUwsR0FBYTtBQUNYZCxNQUFBQSxhQUFhLEVBQWJBLGNBRFc7QUFFWGdCLE1BQUFBLG9CQUFvQixFQUFFO0FBRlgsS0FBYjtBQUppQjtBQVFsQjs7OzttQ0E4QmNYLFUsRUFBWTtBQUN6QixVQUFJVCxLQUFLLENBQUNDLE9BQU4sQ0FBY1EsVUFBVSxDQUFDNEIsSUFBekIsQ0FBSixFQUFvQztBQUNsQztBQUNBO0FBQ0EsZUFBTyxDQUFDL0YsUUFBUSxDQUFDbUUsVUFBVSxDQUFDNEIsSUFBWixFQUFrQixNQUFsQixDQUFoQjtBQUNELE9BTHdCLENBTXpCOzs7QUFDQSxhQUFPNUIsVUFBVSxDQUFDNEIsSUFBWCxLQUFvQixNQUEzQjtBQUNEOzs7K0JBRVVDLFMsRUFBVztBQUFBLHlCQUNTLEtBQUt0RSxLQURkO0FBQUEsVUFDWnNCLE1BRFksZ0JBQ1pBLE1BRFk7QUFBQSxVQUNKRCxRQURJLGdCQUNKQSxRQURJOztBQUFBLDBCQUVGM0MsWUFBWSxDQUFDMkMsUUFBRCxDQUZWO0FBQUEsVUFFZGtELE9BRmMsaUJBRWRBLE9BRmM7O0FBR3BCLFVBQUlBLE9BQU8sS0FBSyxLQUFoQixFQUF1QjtBQUNyQjtBQUNBO0FBQ0EsWUFBSWpELE1BQU0sQ0FBQ2tELFFBQVAsS0FBb0I3QixTQUF4QixFQUFtQztBQUNqQzRCLFVBQUFBLE9BQU8sR0FBR0QsU0FBUyxDQUFDRyxNQUFWLEdBQW1CbkQsTUFBTSxDQUFDa0QsUUFBcEM7QUFDRCxTQUZELE1BRU87QUFDTEQsVUFBQUEsT0FBTyxHQUFHLElBQVY7QUFDRDtBQUNGOztBQUNELGFBQU9BLE9BQVA7QUFDRDs7OzZCQTBKUTtBQUFBLHlCQU1ILEtBQUt2RSxLQU5GO0FBQUEsVUFFTHNCLE1BRkssZ0JBRUxBLE1BRks7QUFBQSxVQUdMRCxRQUhLLGdCQUdMQSxRQUhLO0FBQUEsVUFJTDlCLFFBSkssZ0JBSUxBLFFBSks7QUFBQSwrQ0FLTGdELFFBTEs7QUFBQSxVQUtMQSxRQUxLLHNDQUtNcEQsa0JBQWtCLEVBTHhCO0FBQUEsVUFPQ3FELFVBUEQsR0FPZ0JELFFBUGhCLENBT0NDLFVBUEQ7O0FBUVAsVUFBSSxDQUFDbEIsTUFBTSxDQUFDb0QsY0FBUCxDQUFzQixPQUF0QixDQUFMLEVBQXFDO0FBQUEsWUFDM0JDLE1BRDJCLEdBQ2hCcEMsUUFEZ0IsQ0FDM0JvQyxNQUQyQjtBQUFBLFlBRTNCQyxnQkFGMkIsR0FFTkQsTUFGTSxDQUUzQkMsZ0JBRjJCO0FBSW5DLGVBQ0Usb0JBQUMsZ0JBQUQ7QUFDRSxVQUFBLE1BQU0sRUFBRXRELE1BRFY7QUFFRSxVQUFBLFFBQVEsRUFBRS9CLFFBRlo7QUFHRSxVQUFBLE1BQU0sRUFBQztBQUhULFVBREY7QUFPRDs7QUFDRCxVQUFJWixhQUFhLENBQUMyQyxNQUFELEVBQVNrQixVQUFULENBQWpCLEVBQXVDO0FBQ3JDO0FBQ0EsZUFBTyxLQUFLcUMsaUJBQUwsRUFBUDtBQUNEOztBQUNELFVBQUk5RixjQUFjLENBQUNzQyxRQUFELENBQWxCLEVBQThCO0FBQzVCLGVBQU8sS0FBS3lELGtCQUFMLEVBQVA7QUFDRDs7QUFDRCxVQUFJakcsWUFBWSxDQUFDeUMsTUFBRCxDQUFoQixFQUEwQjtBQUN4QixlQUFPLEtBQUt5RCxnQkFBTCxFQUFQO0FBQ0Q7O0FBQ0QsVUFBSW5HLFlBQVksQ0FBQzBDLE1BQUQsRUFBU0QsUUFBVCxFQUFtQm1CLFVBQW5CLENBQWhCLEVBQWdEO0FBQzlDLGVBQU8sS0FBS3dDLFdBQUwsRUFBUDtBQUNEOztBQUNELGFBQU8sS0FBS0MsaUJBQUwsRUFBUDtBQUNEOzs7d0NBRW1CO0FBQUE7O0FBQUEseUJBa0JkLEtBQUtqRixLQWxCUztBQUFBLFVBRWhCc0IsTUFGZ0IsZ0JBRWhCQSxNQUZnQjtBQUFBLFVBR2hCRCxRQUhnQixnQkFHaEJBLFFBSGdCO0FBQUEsVUFJaEJrQyxXQUpnQixnQkFJaEJBLFdBSmdCO0FBQUEsVUFLaEJoRSxRQUxnQixnQkFLaEJBLFFBTGdCO0FBQUEsVUFNaEIyRixJQU5nQixnQkFNaEJBLElBTmdCO0FBQUEsVUFPaEJ6RixRQVBnQixnQkFPaEJBLFFBUGdCO0FBQUEsVUFRaEJxQixRQVJnQixnQkFRaEJBLFFBUmdCO0FBQUEsVUFTaEJDLFFBVGdCLGdCQVNoQkEsUUFUZ0I7QUFBQSxVQVVoQm9FLFNBVmdCLGdCQVVoQkEsU0FWZ0I7QUFBQSxVQVdoQkMsU0FYZ0IsZ0JBV2hCQSxTQVhnQjtBQUFBLCtDQVloQjdDLFFBWmdCO0FBQUEsVUFZaEJBLFFBWmdCLHNDQVlMcEQsa0JBQWtCLEVBWmI7QUFBQSxVQWFoQmtHLE1BYmdCLGdCQWFoQkEsTUFiZ0I7QUFBQSxVQWNoQkMsT0FkZ0IsZ0JBY2hCQSxPQWRnQjtBQUFBLFVBZWhCQyxRQWZnQixnQkFlaEJBLFFBZmdCO0FBQUEsVUFnQmhCQyxXQWhCZ0IsZ0JBZ0JoQkEsV0FoQmdCO0FBQUEsVUFpQmhCQyxTQWpCZ0IsZ0JBaUJoQkEsU0FqQmdCO0FBbUJsQixVQUFNakcsS0FBSyxHQUFHOEIsTUFBTSxDQUFDOUIsS0FBUCxLQUFpQm1ELFNBQWpCLEdBQTZCdUMsSUFBN0IsR0FBb0M1RCxNQUFNLENBQUM5QixLQUF6RDtBQW5Ca0IsVUFvQlZrRyxrQkFwQlUsR0FvQjhDbkQsUUFwQjlDLENBb0JWbUQsa0JBcEJVO0FBQUEsVUFvQlVsRCxVQXBCVixHQW9COENELFFBcEI5QyxDQW9CVUMsVUFwQlY7QUFBQSxVQW9Cc0JtQyxNQXBCdEIsR0FvQjhDcEMsUUFwQjlDLENBb0JzQm9DLE1BcEJ0QjtBQUFBLFVBb0I4QmdCLFdBcEI5QixHQW9COENwRCxRQXBCOUMsQ0FvQjhCb0QsV0FwQjlCO0FBQUEsVUFxQlZyRyxVQXJCVSxHQXFCdUJxRixNQXJCdkIsQ0FxQlZyRixVQXJCVTtBQUFBLFVBcUJFTyxnQkFyQkYsR0FxQnVCOEUsTUFyQnZCLENBcUJFOUUsZ0JBckJGO0FBc0JsQixVQUFNK0YsV0FBVyxHQUFHM0csY0FBYyxDQUFDcUMsTUFBTSxDQUFDQyxLQUFSLEVBQWVpQixVQUFmLENBQWxDO0FBQ0EsVUFBTVQsUUFBUSxHQUFHSSxvQkFBb0IsQ0FBQyxLQUFLZSxLQUFMLENBQVdkLGFBQVosQ0FBckM7QUFDQSxVQUFNeUQsVUFBVSxHQUFHO0FBQ2pCcEUsUUFBQUEsTUFBTSxFQUFFLEtBQUtxRSxVQUFMLENBQWdCL0QsUUFBaEIsQ0FEUztBQUVqQlIsUUFBQUEsS0FBSyxFQUFFLEtBQUsyQixLQUFMLENBQVdkLGFBQVgsQ0FBeUJaLEdBQXpCLENBQTZCLFVBQUNhLFNBQUQsRUFBWXBCLEtBQVosRUFBc0I7QUFBQSxjQUNoRFgsR0FEZ0QsR0FDbEMrQixTQURrQyxDQUNoRC9CLEdBRGdEO0FBQUEsY0FDM0M0QixJQUQyQyxHQUNsQ0csU0FEa0MsQ0FDM0NILElBRDJDO0FBRXhELGNBQU1PLFVBQVUsR0FBR3hELGNBQWMsQ0FBQ3FDLE1BQU0sQ0FBQ0MsS0FBUixFQUFlaUIsVUFBZixFQUEyQk4sSUFBM0IsQ0FBakM7QUFDQSxjQUFNNkQsZUFBZSxHQUFHeEMsV0FBVyxHQUFHQSxXQUFXLENBQUN0QyxLQUFELENBQWQsR0FBd0IwQixTQUEzRDtBQUNBLGNBQU1xRCxZQUFZLEdBQUd6RyxRQUFRLENBQUNJLEdBQVQsR0FBZSxHQUFmLEdBQXFCc0IsS0FBMUM7QUFDQSxjQUFNZ0YsWUFBWSxHQUFHL0csVUFBVSxDQUM3QnVELFVBRDZCLEVBRTdCdUQsWUFGNkIsRUFHN0J4RCxVQUg2QixFQUk3Qk4sSUFKNkIsRUFLN0JxRCxRQUw2QixFQU03QkMsV0FONkIsQ0FBL0I7QUFRQSxpQkFBTyxNQUFJLENBQUNVLG9CQUFMLENBQTBCO0FBQy9CNUYsWUFBQUEsR0FBRyxFQUFIQSxHQUQrQjtBQUUvQlcsWUFBQUEsS0FBSyxFQUFMQSxLQUYrQjtBQUcvQmtGLFlBQUFBLFNBQVMsRUFBRWxGLEtBQUssR0FBRyxDQUhZO0FBSS9CbUYsWUFBQUEsV0FBVyxFQUFFbkYsS0FBSyxHQUFHYyxRQUFRLENBQUMwQyxNQUFULEdBQWtCLENBSlI7QUFLL0JoQyxZQUFBQSxVQUFVLEVBQUVBLFVBTG1CO0FBTS9Cd0QsWUFBQUEsWUFBWSxFQUFaQSxZQU4rQjtBQU8vQkYsWUFBQUEsZUFBZSxFQUFmQSxlQVArQjtBQVEvQk0sWUFBQUEsUUFBUSxFQUFFbkUsSUFScUI7QUFTL0JvRSxZQUFBQSxZQUFZLEVBQUVqRixRQUFRLENBQUNFLEtBVFE7QUFVL0I2RCxZQUFBQSxTQUFTLEVBQUVBLFNBQVMsSUFBSW5FLEtBQUssS0FBSyxDQVZIO0FBVy9Cb0UsWUFBQUEsTUFBTSxFQUFOQSxNQVgrQjtBQVkvQkMsWUFBQUEsT0FBTyxFQUFQQTtBQVorQixXQUExQixDQUFQO0FBY0QsU0EzQk0sQ0FGVTtBQThCakIvRSxRQUFBQSxTQUFTLDZDQUFzQ3FGLFdBQVcsQ0FBQ3ZCLElBQWxELENBOUJRO0FBK0JqQnhFLFFBQUFBLGdCQUFnQixFQUFoQkEsZ0JBL0JpQjtBQWdDakJpQixRQUFBQSxRQUFRLEVBQVJBLFFBaENpQjtBQWlDakJ2QixRQUFBQSxRQUFRLEVBQVJBLFFBakNpQjtBQWtDakI4QixRQUFBQSxRQUFRLEVBQVJBLFFBbENpQjtBQW1DakJLLFFBQUFBLFVBQVUsRUFBRSxLQUFLQSxVQW5DQTtBQW9DakJYLFFBQUFBLFFBQVEsRUFBUkEsUUFwQ2lCO0FBcUNqQm9FLFFBQUFBLFNBQVMsRUFBVEEsU0FyQ2lCO0FBc0NqQjFGLFFBQUFBLFFBQVEsRUFBUkEsUUF0Q2lCO0FBdUNqQjZCLFFBQUFBLE1BQU0sRUFBTkEsTUF2Q2lCO0FBd0NqQjlCLFFBQUFBLEtBQUssRUFBTEEsS0F4Q2lCO0FBeUNqQkYsUUFBQUEsVUFBVSxFQUFWQSxVQXpDaUI7QUEwQ2pCcUcsUUFBQUEsV0FBVyxFQUFYQSxXQTFDaUI7QUEyQ2pCNUQsUUFBQUEsUUFBUSxFQUFSQSxRQTNDaUI7QUE0Q2pCMEQsUUFBQUEsU0FBUyxFQUFUQSxTQTVDaUI7QUE2Q2pCbEQsUUFBQUEsUUFBUSxFQUFSQTtBQTdDaUIsT0FBbkIsQ0F4QmtCLENBd0VsQjs7QUFDQSxVQUFNbEUsU0FBUyxHQUNiZ0QsUUFBUSxDQUFDLHVCQUFELENBQVIsSUFDQXFFLGtCQURBLElBRUEvRCwrQkFIRjtBQUlBLGFBQU8sb0JBQUMsU0FBRCxFQUFla0UsVUFBZixDQUFQO0FBQ0Q7Ozt5Q0FFb0I7QUFBQSx5QkFpQmYsS0FBSzdGLEtBakJVO0FBQUEsVUFFakJzQixNQUZpQixnQkFFakJBLE1BRmlCO0FBQUEsVUFHakIvQixRQUhpQixnQkFHakJBLFFBSGlCO0FBQUEsVUFJakI4QixRQUppQixnQkFJakJBLFFBSmlCO0FBQUEsVUFLakJQLFFBTGlCLGdCQUtqQkEsUUFMaUI7QUFBQSxVQU1qQkMsUUFOaUIsZ0JBTWpCQSxRQU5pQjtBQUFBLFVBT2pCb0UsU0FQaUIsZ0JBT2pCQSxTQVBpQjtBQUFBLFVBUWpCMUYsUUFSaUIsZ0JBUWpCQSxRQVJpQjtBQUFBLFVBU2pCOEcsV0FUaUIsZ0JBU2pCQSxXQVRpQjtBQUFBLFVBVWpCbkIsU0FWaUIsZ0JBVWpCQSxTQVZpQjtBQUFBLFVBV2pCQyxNQVhpQixnQkFXakJBLE1BWGlCO0FBQUEsVUFZakJDLE9BWmlCLGdCQVlqQkEsT0FaaUI7QUFBQSxVQWFQL0QsS0FiTyxnQkFhakJRLFFBYmlCO0FBQUEsK0NBY2pCUSxRQWRpQjtBQUFBLFVBY2pCQSxRQWRpQixzQ0FjTnBELGtCQUFrQixFQWRaO0FBQUEsVUFlakJzRyxTQWZpQixnQkFlakJBLFNBZmlCO0FBQUEsVUFnQmpCUCxJQWhCaUIsZ0JBZ0JqQkEsSUFoQmlCO0FBQUEsVUFrQlhzQixPQWxCVyxHQWtCY2pFLFFBbEJkLENBa0JYaUUsT0FsQlc7QUFBQSxVQWtCRmIsV0FsQkUsR0FrQmNwRCxRQWxCZCxDQWtCRm9ELFdBbEJFO0FBbUJuQixVQUFNbkcsS0FBSyxHQUFHOEIsTUFBTSxDQUFDOUIsS0FBUCxJQUFnQjBGLElBQTlCOztBQW5CbUIsNkNBc0JkeEcsWUFBWSxDQUFDMkMsUUFBRCxDQXRCRTtBQUFBLFVBcUJYb0YsTUFyQlcsa0JBcUJYQSxNQXJCVztBQUFBLFVBcUJBQyxPQXJCQTs7QUF3Qm5CLFVBQU1DLE1BQU0sR0FBR25JLFNBQVMsQ0FBQzhDLE1BQUQsRUFBU21GLE1BQVQsRUFBaUJELE9BQWpCLENBQXhCO0FBQ0EsYUFDRSxvQkFBQyxNQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUVqSCxRQUFRLElBQUlBLFFBQVEsQ0FBQ0ksR0FEM0I7QUFFRSxRQUFBLFFBQVEsTUFGVjtBQUdFLFFBQUEsUUFBUSxFQUFFLEtBQUtpSCxjQUhqQjtBQUlFLFFBQUEsTUFBTSxFQUFFdkIsTUFKVjtBQUtFLFFBQUEsT0FBTyxFQUFFQyxPQUxYO0FBTUUsUUFBQSxPQUFPLEVBQUVvQixPQU5YO0FBT0UsUUFBQSxNQUFNLEVBQUVwRixNQVBWO0FBUUUsUUFBQSxRQUFRLEVBQUVpQixRQVJaO0FBU0UsUUFBQSxLQUFLLEVBQUVoQixLQVRUO0FBVUUsUUFBQSxRQUFRLEVBQUVULFFBVlo7QUFXRSxRQUFBLFFBQVEsRUFBRUMsUUFYWjtBQVlFLFFBQUEsU0FBUyxFQUFFb0UsU0FaYjtBQWFFLFFBQUEsUUFBUSxFQUFFMUYsUUFiWjtBQWNFLFFBQUEsS0FBSyxFQUFFRCxLQWRUO0FBZUUsUUFBQSxXQUFXLEVBQUUrRyxXQWZmO0FBZ0JFLFFBQUEsV0FBVyxFQUFFWixXQWhCZjtBQWlCRSxRQUFBLFNBQVMsRUFBRVAsU0FqQmI7QUFrQkUsUUFBQSxTQUFTLEVBQUVLO0FBbEJiLFFBREY7QUFzQkQ7Ozt3Q0FFbUI7QUFBQSx5QkFnQmQsS0FBS3pGLEtBaEJTO0FBQUEsVUFFaEJzQixNQUZnQixnQkFFaEJBLE1BRmdCO0FBQUEsVUFHaEIvQixRQUhnQixnQkFHaEJBLFFBSGdCO0FBQUEsVUFJaEI4QixRQUpnQixnQkFJaEJBLFFBSmdCO0FBQUEsVUFLaEJVLFFBTGdCLGdCQUtoQkEsUUFMZ0I7QUFBQSxVQU1oQmpCLFFBTmdCLGdCQU1oQkEsUUFOZ0I7QUFBQSxVQU9oQkMsUUFQZ0IsZ0JBT2hCQSxRQVBnQjtBQUFBLFVBUWhCdEIsUUFSZ0IsZ0JBUWhCQSxRQVJnQjtBQUFBLFVBU2hCOEcsV0FUZ0IsZ0JBU2hCQSxXQVRnQjtBQUFBLFVBVWhCbkIsU0FWZ0IsZ0JBVWhCQSxTQVZnQjtBQUFBLFVBV2hCQyxNQVhnQixnQkFXaEJBLE1BWGdCO0FBQUEsVUFZaEJDLE9BWmdCLGdCQVloQkEsT0FaZ0I7QUFBQSwrQ0FhaEIvQyxRQWJnQjtBQUFBLFVBYWhCQSxRQWJnQixzQ0FhTHBELGtCQUFrQixFQWJiO0FBQUEsVUFjaEJzRyxTQWRnQixnQkFjaEJBLFNBZGdCO0FBQUEsVUFlaEJQLElBZmdCLGdCQWVoQkEsSUFmZ0I7QUFpQmxCLFVBQU0zRCxLQUFLLEdBQUcsS0FBS3ZCLEtBQUwsQ0FBVytCLFFBQXpCO0FBakJrQixVQWtCVnlFLE9BbEJVLEdBa0IyQmpFLFFBbEIzQixDQWtCVmlFLE9BbEJVO0FBQUEsVUFrQkRoRSxVQWxCQyxHQWtCMkJELFFBbEIzQixDQWtCREMsVUFsQkM7QUFBQSxVQWtCV21ELFdBbEJYLEdBa0IyQnBELFFBbEIzQixDQWtCV29ELFdBbEJYO0FBbUJsQixVQUFNQyxXQUFXLEdBQUczRyxjQUFjLENBQUNxQyxNQUFNLENBQUNDLEtBQVIsRUFBZWlCLFVBQWYsRUFBMkJULFFBQTNCLENBQWxDO0FBQ0EsVUFBTXZDLEtBQUssR0FBRzhCLE1BQU0sQ0FBQzlCLEtBQVAsSUFBZ0IwRixJQUE5QjtBQUNBLFVBQU0yQixXQUFXLEdBQUc3SCxXQUFXLENBQUM0RyxXQUFELENBQS9COztBQXJCa0Isb0RBdUJibEgsWUFBWSxDQUFDMkMsUUFBRCxDQXZCQztBQXdCaEJ3RixRQUFBQSxXQUFXLEVBQVhBO0FBeEJnQjtBQUFBLHlEQXNCVkosTUF0QlU7QUFBQSxVQXNCVkEsTUF0QlUsdUNBc0JELFFBdEJDO0FBQUEsVUFzQllDLE9BdEJaOztBQTBCbEIsVUFBTUMsTUFBTSxHQUFHbkksU0FBUyxDQUFDOEMsTUFBRCxFQUFTbUYsTUFBVCxFQUFpQkQsT0FBakIsQ0FBeEI7QUFDQSxhQUNFLG9CQUFDLE1BQUQ7QUFDRSxRQUFBLEVBQUUsRUFBRWpILFFBQVEsSUFBSUEsUUFBUSxDQUFDSSxHQUQzQjtBQUVFLFFBQUEsUUFBUSxNQUZWO0FBR0UsUUFBQSxRQUFRLEVBQUUsS0FBS2lILGNBSGpCO0FBSUUsUUFBQSxNQUFNLEVBQUV2QixNQUpWO0FBS0UsUUFBQSxPQUFPLEVBQUVDLE9BTFg7QUFNRSxRQUFBLE9BQU8sRUFBRW9CLE9BTlg7QUFPRSxRQUFBLE1BQU0sRUFBRXBGLE1BUFY7QUFRRSxRQUFBLFFBQVEsRUFBRWlCLFFBUlo7QUFTRSxRQUFBLEtBQUssRUFBRWhCLEtBVFQ7QUFVRSxRQUFBLFFBQVEsRUFBRVQsUUFWWjtBQVdFLFFBQUEsUUFBUSxFQUFFQyxRQVhaO0FBWUUsUUFBQSxRQUFRLEVBQUV0QixRQVpaO0FBYUUsUUFBQSxLQUFLLEVBQUVELEtBYlQ7QUFjRSxRQUFBLFdBQVcsRUFBRStHLFdBZGY7QUFlRSxRQUFBLFdBQVcsRUFBRVosV0FmZjtBQWdCRSxRQUFBLFNBQVMsRUFBRVAsU0FoQmI7QUFpQkUsUUFBQSxTQUFTLEVBQUVLO0FBakJiLFFBREY7QUFxQkQ7OztrQ0FFYTtBQUFBLHlCQWFSLEtBQUt6RixLQWJHO0FBQUEsVUFFVnNCLE1BRlUsZ0JBRVZBLE1BRlU7QUFBQSxVQUdWRCxRQUhVLGdCQUdWQSxRQUhVO0FBQUEsVUFJVjlCLFFBSlUsZ0JBSVZBLFFBSlU7QUFBQSxVQUtWMkYsSUFMVSxnQkFLVkEsSUFMVTtBQUFBLFVBTVZwRSxRQU5VLGdCQU1WQSxRQU5VO0FBQUEsVUFPVkMsUUFQVSxnQkFPVkEsUUFQVTtBQUFBLFVBUVZxRSxTQVJVLGdCQVFWQSxTQVJVO0FBQUEsVUFTVkMsTUFUVSxnQkFTVkEsTUFUVTtBQUFBLFVBVVZDLE9BVlUsZ0JBVVZBLE9BVlU7QUFBQSwrQ0FXVi9DLFFBWFU7QUFBQSxVQVdWQSxRQVhVLHNDQVdDcEQsa0JBQWtCLEVBWG5CO0FBQUEsVUFZVnNHLFNBWlUsZ0JBWVZBLFNBWlU7QUFjWixVQUFNakcsS0FBSyxHQUFHOEIsTUFBTSxDQUFDOUIsS0FBUCxJQUFnQjBGLElBQTlCO0FBQ0EsVUFBTTNELEtBQUssR0FBRyxLQUFLdkIsS0FBTCxDQUFXK0IsUUFBekI7QUFmWSxVQWdCSnlFLE9BaEJJLEdBZ0JxQmpFLFFBaEJyQixDQWdCSmlFLE9BaEJJO0FBQUEsVUFnQktiLFdBaEJMLEdBZ0JxQnBELFFBaEJyQixDQWdCS29ELFdBaEJMOztBQUFBLDJCQWlCNkJqSCxZQUFZLENBQUMyQyxRQUFELENBakJ6QztBQUFBLGlEQWlCSm9GLE1BakJJO0FBQUEsVUFpQkpBLE1BakJJLHNDQWlCSyxPQWpCTDtBQUFBLFVBaUJpQkMsT0FqQmpCOztBQWtCWixVQUFNQyxNQUFNLEdBQUduSSxTQUFTLENBQUM4QyxNQUFELEVBQVNtRixNQUFULEVBQWlCRCxPQUFqQixDQUF4QjtBQUNBLGFBQ0Usb0JBQUMsTUFBRDtBQUNFLFFBQUEsT0FBTyxFQUFFRSxPQURYO0FBRUUsUUFBQSxFQUFFLEVBQUVuSCxRQUFRLElBQUlBLFFBQVEsQ0FBQ0ksR0FGM0I7QUFHRSxRQUFBLFFBQVEsTUFIVjtBQUlFLFFBQUEsUUFBUSxFQUFFLEtBQUtpSCxjQUpqQjtBQUtFLFFBQUEsTUFBTSxFQUFFdkIsTUFMVjtBQU1FLFFBQUEsT0FBTyxFQUFFQyxPQU5YO0FBT0UsUUFBQSxNQUFNLEVBQUVoRSxNQVBWO0FBUUUsUUFBQSxLQUFLLEVBQUU5QixLQVJUO0FBU0UsUUFBQSxLQUFLLEVBQUUrQixLQVRUO0FBVUUsUUFBQSxRQUFRLEVBQUVULFFBVlo7QUFXRSxRQUFBLFFBQVEsRUFBRUMsUUFYWjtBQVlFLFFBQUEsV0FBVyxFQUFFNEUsV0FaZjtBQWFFLFFBQUEsU0FBUyxFQUFFUCxTQWJiO0FBY0UsUUFBQSxTQUFTLEVBQUVLO0FBZGIsUUFERjtBQWtCRDs7O3VDQUVrQjtBQUFBOztBQUFBLHlCQWtCYixLQUFLekYsS0FsQlE7QUFBQSxVQUVmc0IsTUFGZSxnQkFFZkEsTUFGZTtBQUFBLFVBR2ZELFFBSGUsZ0JBR2ZBLFFBSGU7QUFBQSxVQUlmVSxRQUplLGdCQUlmQSxRQUplO0FBQUEsVUFLZndCLFdBTGUsZ0JBS2ZBLFdBTGU7QUFBQSxVQU1mZ0MsUUFOZSxnQkFNZkEsUUFOZTtBQUFBLFVBT2ZDLFdBUGUsZ0JBT2ZBLFdBUGU7QUFBQSxVQVFmakcsUUFSZSxnQkFRZkEsUUFSZTtBQUFBLFVBU2YyRixJQVRlLGdCQVNmQSxJQVRlO0FBQUEsVUFVZnpGLFFBVmUsZ0JBVWZBLFFBVmU7QUFBQSxVQVdmcUIsUUFYZSxnQkFXZkEsUUFYZTtBQUFBLFVBWWZDLFFBWmUsZ0JBWWZBLFFBWmU7QUFBQSxVQWFmcUUsU0FiZSxnQkFhZkEsU0FiZTtBQUFBLCtDQWNmN0MsUUFkZTtBQUFBLFVBY2ZBLFFBZGUsc0NBY0pwRCxrQkFBa0IsRUFkZDtBQUFBLFVBZWZrRyxNQWZlLGdCQWVmQSxNQWZlO0FBQUEsVUFnQmZDLE9BaEJlLGdCQWdCZkEsT0FoQmU7QUFBQSxVQWlCZkcsU0FqQmUsZ0JBaUJmQSxTQWpCZTtBQW1CakIsVUFBTWpHLEtBQUssR0FBRzhCLE1BQU0sQ0FBQzlCLEtBQVAsSUFBZ0IwRixJQUE5QjtBQUNBLFVBQUkzRCxLQUFLLEdBQUcsS0FBS3ZCLEtBQUwsQ0FBVytCLFFBQXZCO0FBcEJpQixVQXFCVDJELGtCQXJCUyxHQXFCK0NuRCxRQXJCL0MsQ0FxQlRtRCxrQkFyQlM7QUFBQSxVQXFCV2xELFVBckJYLEdBcUIrQ0QsUUFyQi9DLENBcUJXQyxVQXJCWDtBQUFBLFVBcUJ1Qm1DLE1BckJ2QixHQXFCK0NwQyxRQXJCL0MsQ0FxQnVCb0MsTUFyQnZCO0FBQUEsVUFxQitCZ0IsV0FyQi9CLEdBcUIrQ3BELFFBckIvQyxDQXFCK0JvRCxXQXJCL0I7QUFBQSxVQXNCVHJHLFVBdEJTLEdBc0JNcUYsTUF0Qk4sQ0FzQlRyRixVQXRCUztBQXVCakIsVUFBTXdILFdBQVcsR0FBR3hGLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhQyxHQUFiLENBQWlCLFVBQUNVLElBQUQsRUFBT2pCLEtBQVA7QUFBQSxlQUNuQ2hDLGNBQWMsQ0FBQ2lELElBQUQsRUFBT00sVUFBUCxFQUFtQlQsUUFBUSxDQUFDZCxLQUFELENBQTNCLENBRHFCO0FBQUEsT0FBakIsQ0FBcEI7QUFHQSxVQUFNOEYsZ0JBQWdCLEdBQUdqSSxvQkFBb0IsQ0FBQ3dDLE1BQUQsQ0FBcEIsR0FDckJyQyxjQUFjLENBQUNxQyxNQUFNLENBQUNvQixlQUFSLEVBQXlCRixVQUF6QixFQUFxQ1QsUUFBckMsQ0FETyxHQUVyQixJQUZKOztBQUlBLFVBQUksQ0FBQ1IsS0FBRCxJQUFVQSxLQUFLLENBQUNrRCxNQUFOLEdBQWVxQyxXQUFXLENBQUNyQyxNQUF6QyxFQUFpRDtBQUMvQztBQUNBbEQsUUFBQUEsS0FBSyxHQUFHQSxLQUFLLElBQUksRUFBakI7QUFDQUEsUUFBQUEsS0FBSyxHQUFHQSxLQUFLLENBQUN5RixNQUFOLENBQWEsSUFBSWhGLEtBQUosQ0FBVThFLFdBQVcsQ0FBQ3JDLE1BQVosR0FBcUJsRCxLQUFLLENBQUNrRCxNQUFyQyxDQUFiLENBQVI7QUFDRCxPQWxDZ0IsQ0FvQ2pCOzs7QUFDQSxVQUFNb0IsVUFBVSxHQUFHO0FBQ2pCcEUsUUFBQUEsTUFBTSxFQUFFLEtBQUtxRSxVQUFMLENBQWdCdkUsS0FBaEIsS0FBMEJ3RixnQkFEakI7QUFFakJ4RyxRQUFBQSxTQUFTLEVBQUUsMkNBRk07QUFHakJPLFFBQUFBLFFBQVEsRUFBUkEsUUFIaUI7QUFJakJ2QixRQUFBQSxRQUFRLEVBQVJBLFFBSmlCO0FBS2pCd0MsUUFBQUEsUUFBUSxFQUFSQSxRQUxpQjtBQU1qQlIsUUFBQUEsS0FBSyxFQUFFLEtBQUsyQixLQUFMLENBQVdkLGFBQVgsQ0FBeUJaLEdBQXpCLENBQTZCLFVBQUNhLFNBQUQsRUFBWXBCLEtBQVosRUFBc0I7QUFBQSxjQUNoRFgsR0FEZ0QsR0FDbEMrQixTQURrQyxDQUNoRC9CLEdBRGdEO0FBQUEsY0FDM0M0QixJQUQyQyxHQUNsQ0csU0FEa0MsQ0FDM0NILElBRDJDO0FBRXhELGNBQU0rRSxVQUFVLEdBQUdoRyxLQUFLLElBQUk2RixXQUFXLENBQUNyQyxNQUF4QztBQUNBLGNBQU1oQyxVQUFVLEdBQUd3RSxVQUFVLEdBQ3pCaEksY0FBYyxDQUFDcUMsTUFBTSxDQUFDb0IsZUFBUixFQUF5QkYsVUFBekIsRUFBcUNOLElBQXJDLENBRFcsR0FFekI0RSxXQUFXLENBQUM3RixLQUFELENBRmY7QUFHQSxjQUFNK0UsWUFBWSxHQUFHekcsUUFBUSxDQUFDSSxHQUFULEdBQWUsR0FBZixHQUFxQnNCLEtBQTFDO0FBQ0EsY0FBTWdGLFlBQVksR0FBRy9HLFVBQVUsQ0FDN0J1RCxVQUQ2QixFQUU3QnVELFlBRjZCLEVBRzdCeEQsVUFINkIsRUFJN0JOLElBSjZCLEVBSzdCcUQsUUFMNkIsRUFNN0JDLFdBTjZCLENBQS9CO0FBUUEsY0FBTWMsWUFBWSxHQUFHVyxVQUFVLEdBQzNCNUYsUUFBUSxDQUFDcUIsZUFBVCxJQUE0QixFQURELEdBRTNCVixLQUFLLENBQUNDLE9BQU4sQ0FBY1osUUFBUSxDQUFDRSxLQUF2QixJQUNBRixRQUFRLENBQUNFLEtBQVQsQ0FBZU4sS0FBZixDQURBLEdBRUFJLFFBQVEsQ0FBQ0UsS0FBVCxJQUFrQixFQUp0QjtBQUtBLGNBQU13RSxlQUFlLEdBQUd4QyxXQUFXLEdBQUdBLFdBQVcsQ0FBQ3RDLEtBQUQsQ0FBZCxHQUF3QjBCLFNBQTNEO0FBRUEsaUJBQU8sTUFBSSxDQUFDdUQsb0JBQUwsQ0FBMEI7QUFDL0I1RixZQUFBQSxHQUFHLEVBQUhBLEdBRCtCO0FBRS9CVyxZQUFBQSxLQUFLLEVBQUxBLEtBRitCO0FBRy9CaUcsWUFBQUEsU0FBUyxFQUFFRCxVQUhvQjtBQUkvQmQsWUFBQUEsU0FBUyxFQUFFbEYsS0FBSyxJQUFJNkYsV0FBVyxDQUFDckMsTUFBWixHQUFxQixDQUpWO0FBSy9CMkIsWUFBQUEsV0FBVyxFQUFFYSxVQUFVLElBQUloRyxLQUFLLEdBQUdNLEtBQUssQ0FBQ2tELE1BQU4sR0FBZSxDQUxuQjtBQU0vQmhDLFlBQUFBLFVBQVUsRUFBVkEsVUFOK0I7QUFPL0I0RCxZQUFBQSxRQUFRLEVBQUVuRSxJQVBxQjtBQVEvQm9FLFlBQUFBLFlBQVksRUFBWkEsWUFSK0I7QUFTL0JMLFlBQUFBLFlBQVksRUFBWkEsWUFUK0I7QUFVL0JGLFlBQUFBLGVBQWUsRUFBZkEsZUFWK0I7QUFXL0JYLFlBQUFBLFNBQVMsRUFBRUEsU0FBUyxJQUFJbkUsS0FBSyxLQUFLLENBWEg7QUFZL0JvRSxZQUFBQSxNQUFNLEVBQU5BLE1BWitCO0FBYS9CQyxZQUFBQSxPQUFPLEVBQVBBO0FBYitCLFdBQTFCLENBQVA7QUFlRCxTQXJDTSxDQU5VO0FBNENqQjVELFFBQUFBLFVBQVUsRUFBRSxLQUFLQSxVQTVDQTtBQTZDakJYLFFBQUFBLFFBQVEsRUFBUkEsUUE3Q2lCO0FBOENqQnRCLFFBQUFBLFFBQVEsRUFBUkEsUUE5Q2lCO0FBK0NqQjZCLFFBQUFBLE1BQU0sRUFBTkEsTUEvQ2lCO0FBZ0RqQkQsUUFBQUEsUUFBUSxFQUFSQSxRQWhEaUI7QUFpRGpCN0IsUUFBQUEsS0FBSyxFQUFMQSxLQWpEaUI7QUFrRGpCRixRQUFBQSxVQUFVLEVBQVZBLFVBbERpQjtBQW1EakJxRyxRQUFBQSxXQUFXLEVBQVhBLFdBbkRpQjtBQW9EakJGLFFBQUFBLFNBQVMsRUFBVEE7QUFwRGlCLE9BQW5CLENBckNpQixDQTRGakI7O0FBQ0EsVUFBTTBCLFFBQVEsR0FDWjlGLFFBQVEsQ0FBQyx1QkFBRCxDQUFSLElBQ0FxRSxrQkFEQSxJQUVBdEUsOEJBSEY7QUFJQSxhQUFPLG9CQUFDLFFBQUQsRUFBY3lFLFVBQWQsQ0FBUDtBQUNEOzs7eUNBRW9CN0YsSyxFQUFPO0FBQUEsVUFFeEJNLEdBRndCLEdBZ0J0Qk4sS0FoQnNCLENBRXhCTSxHQUZ3QjtBQUFBLFVBR3hCVyxLQUh3QixHQWdCdEJqQixLQWhCc0IsQ0FHeEJpQixLQUh3QjtBQUFBLDZCQWdCdEJqQixLQWhCc0IsQ0FJeEJrSCxTQUp3QjtBQUFBLFVBSXhCQSxTQUp3QixpQ0FJWixJQUpZO0FBQUEsNkJBZ0J0QmxILEtBaEJzQixDQUt4Qm1HLFNBTHdCO0FBQUEsVUFLeEJBLFNBTHdCLGlDQUtaLElBTFk7QUFBQSwrQkFnQnRCbkcsS0FoQnNCLENBTXhCb0csV0FOd0I7QUFBQSxVQU14QkEsV0FOd0IsbUNBTVYsSUFOVTtBQUFBLFVBT3hCM0QsVUFQd0IsR0FnQnRCekMsS0FoQnNCLENBT3hCeUMsVUFQd0I7QUFBQSxVQVF4QjRELFFBUndCLEdBZ0J0QnJHLEtBaEJzQixDQVF4QnFHLFFBUndCO0FBQUEsVUFTeEJDLFlBVHdCLEdBZ0J0QnRHLEtBaEJzQixDQVN4QnNHLFlBVHdCO0FBQUEsVUFVeEJMLFlBVndCLEdBZ0J0QmpHLEtBaEJzQixDQVV4QmlHLFlBVndCO0FBQUEsVUFXeEJGLGVBWHdCLEdBZ0J0Qi9GLEtBaEJzQixDQVd4QitGLGVBWHdCO0FBQUEsVUFZeEJYLFNBWndCLEdBZ0J0QnBGLEtBaEJzQixDQVl4Qm9GLFNBWndCO0FBQUEsVUFheEJDLE1BYndCLEdBZ0J0QnJGLEtBaEJzQixDQWF4QnFGLE1BYndCO0FBQUEsVUFjeEJDLE9BZHdCLEdBZ0J0QnRGLEtBaEJzQixDQWN4QnNGLE9BZHdCO0FBQUEsVUFleEJHLFNBZndCLEdBZ0J0QnpGLEtBaEJzQixDQWV4QnlGLFNBZndCO0FBQUEsMEJBc0J0QixLQUFLekYsS0F0QmlCO0FBQUEsVUFrQnhCYyxRQWxCd0IsaUJBa0J4QkEsUUFsQndCO0FBQUEsVUFtQnhCQyxRQW5Cd0IsaUJBbUJ4QkEsUUFuQndCO0FBQUEsVUFvQnhCTSxRQXBCd0IsaUJBb0J4QkEsUUFwQndCO0FBQUEsZ0RBcUJ4QmtCLFFBckJ3QjtBQUFBLFVBcUJ4QkEsUUFyQndCLHNDQXFCYnBELGtCQUFrQixFQXJCTDtBQUFBLFVBd0JkaUksV0F4QmMsR0F5QnRCN0UsUUF6QnNCLENBd0J4Qm9DLE1BeEJ3QixDQXdCZHlDLFdBeEJjOztBQUFBO0FBMkJ4QkMsUUFBQUEsU0FBUyxFQUFFLElBM0JhO0FBNEJ4QkMsUUFBQUEsU0FBUyxFQUFFO0FBNUJhLFNBNkJyQmpHLFFBQVEsQ0FBQyxZQUFELENBN0JhO0FBQUEsVUEwQmxCZ0csU0ExQmtCLHlCQTBCbEJBLFNBMUJrQjtBQUFBLFVBMEJQQyxTQTFCTyx5QkEwQlBBLFNBMUJPOztBQStCMUIsVUFBTUMsR0FBRyxHQUFHO0FBQ1ZDLFFBQUFBLE1BQU0sRUFBRUgsU0FBUyxJQUFJbEIsU0FEWDtBQUVWc0IsUUFBQUEsUUFBUSxFQUFFSixTQUFTLElBQUlqQixXQUZiO0FBR1ZzQixRQUFBQSxNQUFNLEVBQUVKLFNBQVMsSUFBSUo7QUFIWCxPQUFaO0FBS0FLLE1BQUFBLEdBQUcsQ0FBQ0ksT0FBSixHQUFjQyxNQUFNLENBQUNDLElBQVAsQ0FBWU4sR0FBWixFQUFpQk8sSUFBakIsQ0FBc0IsVUFBQXhILEdBQUc7QUFBQSxlQUFJaUgsR0FBRyxDQUFDakgsR0FBRCxDQUFQO0FBQUEsT0FBekIsQ0FBZDtBQUVBLGFBQU87QUFDTEcsUUFBQUEsUUFBUSxFQUNOLG9CQUFDLFdBQUQ7QUFDRSxVQUFBLEtBQUssRUFBRVEsS0FEVDtBQUVFLFVBQUEsTUFBTSxFQUFFd0IsVUFGVjtBQUdFLFVBQUEsUUFBUSxFQUFFNkQsWUFIWjtBQUlFLFVBQUEsUUFBUSxFQUFFRCxRQUpaO0FBS0UsVUFBQSxXQUFXLEVBQUVOLGVBTGY7QUFNRSxVQUFBLFFBQVEsRUFBRSxLQUFLL0YsS0FBTCxDQUFXdUYsUUFOdkI7QUFPRSxVQUFBLFdBQVcsRUFBRSxLQUFLdkYsS0FBTCxDQUFXd0YsV0FQMUI7QUFRRSxVQUFBLFFBQVEsRUFBRVMsWUFSWjtBQVNFLFVBQUEsUUFBUSxFQUFFLEtBQUs4QixjQUFMLENBQW9CdEYsVUFBcEIsQ0FUWjtBQVVFLFVBQUEsUUFBUSxFQUFFLEtBQUt1RixnQkFBTCxDQUFzQi9HLEtBQXRCLENBVlo7QUFXRSxVQUFBLE1BQU0sRUFBRW9FLE1BWFY7QUFZRSxVQUFBLE9BQU8sRUFBRUMsT0FaWDtBQWFFLFVBQUEsUUFBUSxFQUFFLEtBQUt0RixLQUFMLENBQVd1QyxRQWJ2QjtBQWNFLFVBQUEsUUFBUSxFQUFFLEtBQUt2QyxLQUFMLENBQVdjLFFBZHZCO0FBZUUsVUFBQSxRQUFRLEVBQUUsS0FBS2QsS0FBTCxDQUFXZSxRQWZ2QjtBQWdCRSxVQUFBLFNBQVMsRUFBRSxLQUFLZixLQUFMLENBQVdtRixTQWhCeEI7QUFpQkUsVUFBQSxTQUFTLEVBQUVDLFNBakJiO0FBa0JFLFVBQUEsU0FBUyxFQUFFSztBQWxCYixVQUZHO0FBdUJMbEYsUUFBQUEsU0FBUyxFQUFFLFlBdkJOO0FBd0JMTyxRQUFBQSxRQUFRLEVBQVJBLFFBeEJLO0FBeUJMTixRQUFBQSxVQUFVLEVBQUUrRyxHQUFHLENBQUNJLE9BekJYO0FBMEJML0csUUFBQUEsU0FBUyxFQUFFMkcsR0FBRyxDQUFDQyxNQTFCVjtBQTJCTDNHLFFBQUFBLFdBQVcsRUFBRTBHLEdBQUcsQ0FBQ0UsUUEzQlo7QUE0Qkx2RyxRQUFBQSxTQUFTLEVBQUVxRyxHQUFHLENBQUNHLE1BNUJWO0FBNkJMekcsUUFBQUEsS0FBSyxFQUFMQSxLQTdCSztBQThCTFgsUUFBQUEsR0FBRyxFQUFIQSxHQTlCSztBQStCTDJILFFBQUFBLGVBQWUsRUFBRSxLQUFLQSxlQS9CakI7QUFnQ0w5RyxRQUFBQSxnQkFBZ0IsRUFBRSxLQUFLQSxnQkFoQ2xCO0FBaUNMSCxRQUFBQSxjQUFjLEVBQUUsS0FBS0EsY0FqQ2hCO0FBa0NMRCxRQUFBQSxRQUFRLEVBQVJBO0FBbENLLE9BQVA7QUFvQ0Q7Ozt3QkFsbUJlO0FBQUEsVUFDTk8sTUFETSxHQUNLLEtBQUt0QixLQURWLENBQ05zQixNQURNO0FBRWQsYUFBT0EsTUFBTSxDQUFDQyxLQUFQLENBQWEvQixLQUFiLElBQXNCOEIsTUFBTSxDQUFDQyxLQUFQLENBQWF6QixXQUFuQyxJQUFrRCxNQUF6RDtBQUNEOzs7NkNBMUIrQm9JLFMsRUFBV0MsUyxFQUFXO0FBQ3BEO0FBQ0EsVUFBSUEsU0FBUyxDQUFDL0Usb0JBQWQsRUFBb0M7QUFDbEMsZUFBTztBQUNMQSxVQUFBQSxvQkFBb0IsRUFBRTtBQURqQixTQUFQO0FBR0Q7O0FBQ0QsVUFBTWdGLFlBQVksR0FBR0YsU0FBUyxDQUFDbkcsUUFBVixJQUFzQixFQUEzQztBQUNBLFVBQU1zRyxxQkFBcUIsR0FBR0YsU0FBUyxDQUFDL0YsYUFBVixJQUEyQixFQUF6RDtBQUNBLFVBQU1hLGdCQUFnQixHQUNwQm1GLFlBQVksQ0FBQzNELE1BQWIsS0FBd0I0RCxxQkFBcUIsQ0FBQzVELE1BQTlDLEdBQ0k0RCxxQkFBcUIsQ0FBQzdHLEdBQXRCLENBQTBCLFVBQUM4RyxzQkFBRCxFQUF5QnJILEtBQXpCLEVBQW1DO0FBQzNELGVBQU87QUFDTFgsVUFBQUEsR0FBRyxFQUFFZ0ksc0JBQXNCLENBQUNoSSxHQUR2QjtBQUVMNEIsVUFBQUEsSUFBSSxFQUFFa0csWUFBWSxDQUFDbkgsS0FBRDtBQUZiLFNBQVA7QUFJRCxPQUxELENBREosR0FPSWEscUJBQXFCLENBQUNzRyxZQUFELENBUjNCO0FBU0EsYUFBTztBQUNMaEcsUUFBQUEsYUFBYSxFQUFFYTtBQURWLE9BQVA7QUFHRDs7OztFQTFDc0I1RSxTOztnQkFBbkJpRSxVLGtCQUNrQjtBQUNwQmpCLEVBQUFBLFFBQVEsRUFBRSxFQURVO0FBRXBCVSxFQUFBQSxRQUFRLEVBQUUsRUFGVTtBQUdwQnhDLEVBQUFBLFFBQVEsRUFBRSxFQUhVO0FBSXBCRSxFQUFBQSxRQUFRLEVBQUUsS0FKVTtBQUtwQnFCLEVBQUFBLFFBQVEsRUFBRSxLQUxVO0FBTXBCQyxFQUFBQSxRQUFRLEVBQUUsS0FOVTtBQU9wQnFFLEVBQUFBLFNBQVMsRUFBRTtBQVBTLEM7O0FBZ3BCeEIsSUFBSW1ELE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0FBQ3pDbkcsRUFBQUEsVUFBVSxDQUFDb0csU0FBWCxHQUF1Qm5LLEtBQUssQ0FBQ29LLFVBQTdCO0FBQ0Q7O0FBRUQsZUFBZXJHLFVBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRkQnV0dG9uIGZyb20gXCIuLi9BZGRCdXR0b25cIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIi4uL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgaW5jbHVkZXMgZnJvbSBcImNvcmUtanMtcHVyZS9lcy9hcnJheS9pbmNsdWRlc1wiO1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0V2lkZ2V0LFxyXG4gIGdldERlZmF1bHRGb3JtU3RhdGUsXHJcbiAgZ2V0VWlPcHRpb25zLFxyXG4gIGlzTXVsdGlTZWxlY3QsXHJcbiAgaXNGaWxlc0FycmF5LFxyXG4gIGlzRml4ZWRJdGVtcyxcclxuICBhbGxvd0FkZGl0aW9uYWxJdGVtcyxcclxuICBpc0N1c3RvbVdpZGdldCxcclxuICBvcHRpb25zTGlzdCxcclxuICByZXRyaWV2ZVNjaGVtYSxcclxuICB0b0lkU2NoZW1hLFxyXG4gIGdldERlZmF1bHRSZWdpc3RyeSxcclxufSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiO1xyXG5cclxuZnVuY3Rpb24gQXJyYXlGaWVsZFRpdGxlKHsgVGl0bGVGaWVsZCwgaWRTY2hlbWEsIHRpdGxlLCByZXF1aXJlZCB9KSB7XHJcbiAgaWYgKCF0aXRsZSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIGNvbnN0IGlkID0gYCR7aWRTY2hlbWEuJGlkfV9fdGl0bGVgO1xyXG4gIHJldHVybiA8VGl0bGVGaWVsZCBpZD17aWR9IHRpdGxlPXt0aXRsZX0gcmVxdWlyZWQ9e3JlcXVpcmVkfSAvPjtcclxufVxyXG5cclxuZnVuY3Rpb24gQXJyYXlGaWVsZERlc2NyaXB0aW9uKHsgRGVzY3JpcHRpb25GaWVsZCwgaWRTY2hlbWEsIGRlc2NyaXB0aW9uIH0pIHtcclxuICBpZiAoIWRlc2NyaXB0aW9uKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgY29uc3QgaWQgPSBgJHtpZFNjaGVtYS4kaWR9X19kZXNjcmlwdGlvbmA7XHJcbiAgcmV0dXJuIDxEZXNjcmlwdGlvbkZpZWxkIGlkPXtpZH0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSAvPjtcclxufVxyXG5cclxuLy8gVXNlZCBpbiB0aGUgdHdvIHRlbXBsYXRlc1xyXG5mdW5jdGlvbiBEZWZhdWx0QXJyYXlJdGVtKHByb3BzKSB7XHJcbiAgY29uc3QgYnRuU3R5bGUgPSB7XHJcbiAgICBmbGV4OiAxLFxyXG4gICAgcGFkZGluZ0xlZnQ6IDYsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IDYsXHJcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGtleT17cHJvcHMua2V5fSBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5oYXNUb29sYmFyID8gXCJjb2wteHMtOVwiIDogXCJjb2wteHMtMTJcIn0+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtwcm9wcy5oYXNUb29sYmFyICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0zIGFycmF5LWl0ZW0tdG9vbGJveFwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgeyhwcm9wcy5oYXNNb3ZlVXAgfHwgcHJvcHMuaGFzTW92ZURvd24pICYmIChcclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgaWNvbj1cImFycm93LXVwXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJNb3ZlIHVwXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFycmF5LWl0ZW0tbW92ZS11cFwiXHJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD1cIi0xXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXtidG5TdHlsZX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZCB8fCBwcm9wcy5yZWFkb25seSB8fCAhcHJvcHMuaGFzTW92ZVVwfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25SZW9yZGVyQ2xpY2socHJvcHMuaW5kZXgsIHByb3BzLmluZGV4IC0gMSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHsocHJvcHMuaGFzTW92ZVVwIHx8IHByb3BzLmhhc01vdmVEb3duKSAmJiAoXHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgIGljb249XCJhcnJvdy1kb3duXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFycmF5LWl0ZW0tbW92ZS1kb3duXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJNb3ZlIGRvd25cIlxyXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9XCItMVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17YnRuU3R5bGV9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgIHByb3BzLmRpc2FibGVkIHx8IHByb3BzLnJlYWRvbmx5IHx8ICFwcm9wcy5oYXNNb3ZlRG93blxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25SZW9yZGVyQ2xpY2socHJvcHMuaW5kZXgsIHByb3BzLmluZGV4ICsgMSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHtwcm9wcy5oYXNSZW1vdmUgJiYgKFxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIGljb249XCJyZW1vdmVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlJlbW92ZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnJheS1pdGVtLXJlbW92ZVwiXHJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD1cIi0xXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXtidG5TdHlsZX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZCB8fCBwcm9wcy5yZWFkb25seX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uRHJvcEluZGV4Q2xpY2socHJvcHMuaW5kZXgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlZmF1bHRGaXhlZEFycmF5RmllbGRUZW1wbGF0ZShwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9IGlkPXtwcm9wcy5pZFNjaGVtYS4kaWR9PlxyXG4gICAgICA8QXJyYXlGaWVsZFRpdGxlXHJcbiAgICAgICAga2V5PXtgYXJyYXktZmllbGQtdGl0bGUtJHtwcm9wcy5pZFNjaGVtYS4kaWR9YH1cclxuICAgICAgICBUaXRsZUZpZWxkPXtwcm9wcy5UaXRsZUZpZWxkfVxyXG4gICAgICAgIGlkU2NoZW1hPXtwcm9wcy5pZFNjaGVtYX1cclxuICAgICAgICB0aXRsZT17cHJvcHMudWlTY2hlbWFbXCJ1aTp0aXRsZVwiXSB8fCBwcm9wcy50aXRsZX1cclxuICAgICAgICByZXF1aXJlZD17cHJvcHMucmVxdWlyZWR9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7KHByb3BzLnVpU2NoZW1hW1widWk6ZGVzY3JpcHRpb25cIl0gfHwgcHJvcHMuc2NoZW1hLmRlc2NyaXB0aW9uKSAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmllbGQtZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAga2V5PXtgZmllbGQtZGVzY3JpcHRpb24tJHtwcm9wcy5pZFNjaGVtYS4kaWR9YH0+XHJcbiAgICAgICAgICB7cHJvcHMudWlTY2hlbWFbXCJ1aTpkZXNjcmlwdGlvblwiXSB8fCBwcm9wcy5zY2hlbWEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicm93IGFycmF5LWl0ZW0tbGlzdFwiXHJcbiAgICAgICAga2V5PXtgYXJyYXktaXRlbS1saXN0LSR7cHJvcHMuaWRTY2hlbWEuJGlkfWB9PlxyXG4gICAgICAgIHtwcm9wcy5pdGVtcyAmJiBwcm9wcy5pdGVtcy5tYXAoRGVmYXVsdEFycmF5SXRlbSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3Byb3BzLmNhbkFkZCAmJiAoXHJcbiAgICAgICAgPEFkZEJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYXJyYXktaXRlbS1hZGRcIlxyXG4gICAgICAgICAgb25DbGljaz17cHJvcHMub25BZGRDbGlja31cclxuICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZCB8fCBwcm9wcy5yZWFkb25seX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC9maWVsZHNldD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZWZhdWx0Tm9ybWFsQXJyYXlGaWVsZFRlbXBsYXRlKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmaWVsZHNldCBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0gaWQ9e3Byb3BzLmlkU2NoZW1hLiRpZH0+XHJcbiAgICAgIDxBcnJheUZpZWxkVGl0bGVcclxuICAgICAgICBrZXk9e2BhcnJheS1maWVsZC10aXRsZS0ke3Byb3BzLmlkU2NoZW1hLiRpZH1gfVxyXG4gICAgICAgIFRpdGxlRmllbGQ9e3Byb3BzLlRpdGxlRmllbGR9XHJcbiAgICAgICAgaWRTY2hlbWE9e3Byb3BzLmlkU2NoZW1hfVxyXG4gICAgICAgIHRpdGxlPXtwcm9wcy51aVNjaGVtYVtcInVpOnRpdGxlXCJdIHx8IHByb3BzLnRpdGxlfVxyXG4gICAgICAgIHJlcXVpcmVkPXtwcm9wcy5yZXF1aXJlZH1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHsocHJvcHMudWlTY2hlbWFbXCJ1aTpkZXNjcmlwdGlvblwiXSB8fCBwcm9wcy5zY2hlbWEuZGVzY3JpcHRpb24pICYmIChcclxuICAgICAgICA8QXJyYXlGaWVsZERlc2NyaXB0aW9uXHJcbiAgICAgICAgICBrZXk9e2BhcnJheS1maWVsZC1kZXNjcmlwdGlvbi0ke3Byb3BzLmlkU2NoZW1hLiRpZH1gfVxyXG4gICAgICAgICAgRGVzY3JpcHRpb25GaWVsZD17cHJvcHMuRGVzY3JpcHRpb25GaWVsZH1cclxuICAgICAgICAgIGlkU2NoZW1hPXtwcm9wcy5pZFNjaGVtYX1cclxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtcclxuICAgICAgICAgICAgcHJvcHMudWlTY2hlbWFbXCJ1aTpkZXNjcmlwdGlvblwiXSB8fCBwcm9wcy5zY2hlbWEuZGVzY3JpcHRpb25cclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInJvdyBhcnJheS1pdGVtLWxpc3RcIlxyXG4gICAgICAgIGtleT17YGFycmF5LWl0ZW0tbGlzdC0ke3Byb3BzLmlkU2NoZW1hLiRpZH1gfT5cclxuICAgICAgICB7cHJvcHMuaXRlbXMgJiYgcHJvcHMuaXRlbXMubWFwKHAgPT4gRGVmYXVsdEFycmF5SXRlbShwKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3Byb3BzLmNhbkFkZCAmJiAoXHJcbiAgICAgICAgPEFkZEJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYXJyYXktaXRlbS1hZGRcIlxyXG4gICAgICAgICAgb25DbGljaz17cHJvcHMub25BZGRDbGlja31cclxuICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZCB8fCBwcm9wcy5yZWFkb25seX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC9maWVsZHNldD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVJvd0lkKCkge1xyXG4gIHJldHVybiBuYW5vaWQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVLZXllZEZvcm1EYXRhKGZvcm1EYXRhKSB7XHJcbiAgcmV0dXJuICFBcnJheS5pc0FycmF5KGZvcm1EYXRhKVxyXG4gICAgPyBbXVxyXG4gICAgOiBmb3JtRGF0YS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGtleTogZ2VuZXJhdGVSb3dJZCgpLFxyXG4gICAgICAgICAgaXRlbSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24ga2V5ZWRUb1BsYWluRm9ybURhdGEoa2V5ZWRGb3JtRGF0YSkge1xyXG4gIHJldHVybiBrZXllZEZvcm1EYXRhLm1hcChrZXllZEl0ZW0gPT4ga2V5ZWRJdGVtLml0ZW0pO1xyXG59XHJcblxyXG5jbGFzcyBBcnJheUZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgdWlTY2hlbWE6IHt9LFxyXG4gICAgZm9ybURhdGE6IFtdLFxyXG4gICAgaWRTY2hlbWE6IHt9LFxyXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgcmVhZG9ubHk6IGZhbHNlLFxyXG4gICAgYXV0b2ZvY3VzOiBmYWxzZSxcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgY29uc3QgeyBmb3JtRGF0YSB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBrZXllZEZvcm1EYXRhID0gZ2VuZXJhdGVLZXllZEZvcm1EYXRhKGZvcm1EYXRhKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGtleWVkRm9ybURhdGEsXHJcbiAgICAgIHVwZGF0ZWRLZXllZEZvcm1EYXRhOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICAvLyBEb24ndCBjYWxsIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyBpZiBrZXllZCBmb3JtZGF0YSB3YXMganVzdCB1cGRhdGVkLlxyXG4gICAgaWYgKHByZXZTdGF0ZS51cGRhdGVkS2V5ZWRGb3JtRGF0YSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVwZGF0ZWRLZXllZEZvcm1EYXRhOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IG5leHRGb3JtRGF0YSA9IG5leHRQcm9wcy5mb3JtRGF0YSB8fCBbXTtcclxuICAgIGNvbnN0IHByZXZpb3VzS2V5ZWRGb3JtRGF0YSA9IHByZXZTdGF0ZS5rZXllZEZvcm1EYXRhIHx8IFtdO1xyXG4gICAgY29uc3QgbmV3S2V5ZWRGb3JtRGF0YSA9XHJcbiAgICAgIG5leHRGb3JtRGF0YS5sZW5ndGggPT09IHByZXZpb3VzS2V5ZWRGb3JtRGF0YS5sZW5ndGhcclxuICAgICAgICA/IHByZXZpb3VzS2V5ZWRGb3JtRGF0YS5tYXAoKHByZXZpb3VzS2V5ZWRGb3JtRGF0dW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAga2V5OiBwcmV2aW91c0tleWVkRm9ybURhdHVtLmtleSxcclxuICAgICAgICAgICAgICBpdGVtOiBuZXh0Rm9ybURhdGFbaW5kZXhdLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICA6IGdlbmVyYXRlS2V5ZWRGb3JtRGF0YShuZXh0Rm9ybURhdGEpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAga2V5ZWRGb3JtRGF0YTogbmV3S2V5ZWRGb3JtRGF0YSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXQgaXRlbVRpdGxlKCkge1xyXG4gICAgY29uc3QgeyBzY2hlbWEgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gc2NoZW1hLml0ZW1zLnRpdGxlIHx8IHNjaGVtYS5pdGVtcy5kZXNjcmlwdGlvbiB8fCBcIkl0ZW1cIjtcclxuICB9XHJcblxyXG4gIGlzSXRlbVJlcXVpcmVkKGl0ZW1TY2hlbWEpIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1TY2hlbWEudHlwZSkpIHtcclxuICAgICAgLy8gV2hpbGUgd2UgZG9uJ3QgeWV0IHN1cHBvcnQgY29tcG9zaXRlL251bGxhYmxlIGpzb25zY2hlbWEgdHlwZXMsIGl0J3NcclxuICAgICAgLy8gZnV0dXJlLXByb29mIHRvIGNoZWNrIGZvciByZXF1aXJlbWVudCBhZ2FpbnN0IHRoZXNlLlxyXG4gICAgICByZXR1cm4gIWluY2x1ZGVzKGl0ZW1TY2hlbWEudHlwZSwgXCJudWxsXCIpO1xyXG4gICAgfVxyXG4gICAgLy8gQWxsIG5vbi1udWxsIGFycmF5IGl0ZW0gdHlwZXMgYXJlIGluaGVyZW50bHkgcmVxdWlyZWQgYnkgZGVzaWduXHJcbiAgICByZXR1cm4gaXRlbVNjaGVtYS50eXBlICE9PSBcIm51bGxcIjtcclxuICB9XHJcblxyXG4gIGNhbkFkZEl0ZW0oZm9ybUl0ZW1zKSB7XHJcbiAgICBjb25zdCB7IHNjaGVtYSwgdWlTY2hlbWEgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBsZXQgeyBhZGRhYmxlIH0gPSBnZXRVaU9wdGlvbnModWlTY2hlbWEpO1xyXG4gICAgaWYgKGFkZGFibGUgIT09IGZhbHNlKSB7XHJcbiAgICAgIC8vIGlmIHVpOm9wdGlvbnMuYWRkYWJsZSB3YXMgbm90IGV4cGxpY2l0bHkgc2V0IHRvIGZhbHNlLCB3ZSBjYW4gYWRkXHJcbiAgICAgIC8vIGFub3RoZXIgaXRlbSBpZiB3ZSBoYXZlIG5vdCBleGNlZWRlZCBtYXhJdGVtcyB5ZXRcclxuICAgICAgaWYgKHNjaGVtYS5tYXhJdGVtcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgYWRkYWJsZSA9IGZvcm1JdGVtcy5sZW5ndGggPCBzY2hlbWEubWF4SXRlbXM7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWRkYWJsZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhZGRhYmxlO1xyXG4gIH1cclxuXHJcbiAgX2dldE5ld0Zvcm1EYXRhUm93ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBzY2hlbWEsIHJlZ2lzdHJ5ID0gZ2V0RGVmYXVsdFJlZ2lzdHJ5KCkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IHJvb3RTY2hlbWEgfSA9IHJlZ2lzdHJ5O1xyXG4gICAgbGV0IGl0ZW1TY2hlbWEgPSBzY2hlbWEuaXRlbXM7XHJcbiAgICBpZiAoaXNGaXhlZEl0ZW1zKHNjaGVtYSkgJiYgYWxsb3dBZGRpdGlvbmFsSXRlbXMoc2NoZW1hKSkge1xyXG4gICAgICBpdGVtU2NoZW1hID0gc2NoZW1hLmFkZGl0aW9uYWxJdGVtcztcclxuICAgIH1cclxuICAgIHJldHVybiBnZXREZWZhdWx0Rm9ybVN0YXRlKGl0ZW1TY2hlbWEsIHVuZGVmaW5lZCwgcm9vdFNjaGVtYSk7XHJcbiAgfTtcclxuXHJcbiAgb25BZGRDbGljayA9IGV2ZW50ID0+IHtcclxuICAgIGlmIChldmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBuZXdLZXllZEZvcm1EYXRhUm93ID0ge1xyXG4gICAgICBrZXk6IGdlbmVyYXRlUm93SWQoKSxcclxuICAgICAgaXRlbTogdGhpcy5fZ2V0TmV3Rm9ybURhdGFSb3coKSxcclxuICAgIH07XHJcbiAgICBjb25zdCBuZXdLZXllZEZvcm1EYXRhID0gWy4uLnRoaXMuc3RhdGUua2V5ZWRGb3JtRGF0YSwgbmV3S2V5ZWRGb3JtRGF0YVJvd107XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAga2V5ZWRGb3JtRGF0YTogbmV3S2V5ZWRGb3JtRGF0YSxcclxuICAgICAgICB1cGRhdGVkS2V5ZWRGb3JtRGF0YTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4gb25DaGFuZ2Uoa2V5ZWRUb1BsYWluRm9ybURhdGEobmV3S2V5ZWRGb3JtRGF0YSkpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIG9uQWRkSW5kZXhDbGljayA9IGluZGV4ID0+IHtcclxuICAgIHJldHVybiBldmVudCA9PiB7XHJcbiAgICAgIGlmIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgbmV3S2V5ZWRGb3JtRGF0YVJvdyA9IHtcclxuICAgICAgICBrZXk6IGdlbmVyYXRlUm93SWQoKSxcclxuICAgICAgICBpdGVtOiB0aGlzLl9nZXROZXdGb3JtRGF0YVJvdygpLFxyXG4gICAgICB9O1xyXG4gICAgICBsZXQgbmV3S2V5ZWRGb3JtRGF0YSA9IFsuLi50aGlzLnN0YXRlLmtleWVkRm9ybURhdGFdO1xyXG4gICAgICBuZXdLZXllZEZvcm1EYXRhLnNwbGljZShpbmRleCwgMCwgbmV3S2V5ZWRGb3JtRGF0YVJvdyk7XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGtleWVkRm9ybURhdGE6IG5ld0tleWVkRm9ybURhdGEsXHJcbiAgICAgICAgICB1cGRhdGVkS2V5ZWRGb3JtRGF0YTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IG9uQ2hhbmdlKGtleWVkVG9QbGFpbkZvcm1EYXRhKG5ld0tleWVkRm9ybURhdGEpKVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBvbkRyb3BJbmRleENsaWNrID0gaW5kZXggPT4ge1xyXG4gICAgcmV0dXJuIGV2ZW50ID0+IHtcclxuICAgICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCB7IGtleWVkRm9ybURhdGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgIC8vIHJlZnMgIzE5NTogcmV2YWxpZGF0ZSB0byBlbnN1cmUgcHJvcGVybHkgcmVpbmRleGluZyBlcnJvcnNcclxuICAgICAgbGV0IG5ld0Vycm9yU2NoZW1hO1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5lcnJvclNjaGVtYSkge1xyXG4gICAgICAgIG5ld0Vycm9yU2NoZW1hID0ge307XHJcbiAgICAgICAgY29uc3QgZXJyb3JTY2hlbWEgPSB0aGlzLnByb3BzLmVycm9yU2NoZW1hO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gZXJyb3JTY2hlbWEpIHtcclxuICAgICAgICAgIGkgPSBwYXJzZUludChpKTtcclxuICAgICAgICAgIGlmIChpIDwgaW5kZXgpIHtcclxuICAgICAgICAgICAgbmV3RXJyb3JTY2hlbWFbaV0gPSBlcnJvclNjaGVtYVtpXTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaSA+IGluZGV4KSB7XHJcbiAgICAgICAgICAgIG5ld0Vycm9yU2NoZW1hW2kgLSAxXSA9IGVycm9yU2NoZW1hW2ldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBuZXdLZXllZEZvcm1EYXRhID0ga2V5ZWRGb3JtRGF0YS5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGluZGV4KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICBrZXllZEZvcm1EYXRhOiBuZXdLZXllZEZvcm1EYXRhLFxyXG4gICAgICAgICAgdXBkYXRlZEtleWVkRm9ybURhdGE6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiBvbkNoYW5nZShrZXllZFRvUGxhaW5Gb3JtRGF0YShuZXdLZXllZEZvcm1EYXRhKSwgbmV3RXJyb3JTY2hlbWEpXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIG9uUmVvcmRlckNsaWNrID0gKGluZGV4LCBuZXdJbmRleCkgPT4ge1xyXG4gICAgcmV0dXJuIGV2ZW50ID0+IHtcclxuICAgICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC50YXJnZXQuYmx1cigpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGxldCBuZXdFcnJvclNjaGVtYTtcclxuICAgICAgaWYgKHRoaXMucHJvcHMuZXJyb3JTY2hlbWEpIHtcclxuICAgICAgICBuZXdFcnJvclNjaGVtYSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGVycm9yU2NoZW1hID0gdGhpcy5wcm9wcy5lcnJvclNjaGVtYTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIGVycm9yU2NoZW1hKSB7XHJcbiAgICAgICAgICBpZiAoaSA9PSBpbmRleCkge1xyXG4gICAgICAgICAgICBuZXdFcnJvclNjaGVtYVtuZXdJbmRleF0gPSBlcnJvclNjaGVtYVtpbmRleF07XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGkgPT0gbmV3SW5kZXgpIHtcclxuICAgICAgICAgICAgbmV3RXJyb3JTY2hlbWFbaW5kZXhdID0gZXJyb3JTY2hlbWFbbmV3SW5kZXhdO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3RXJyb3JTY2hlbWFbaV0gPSBlcnJvclNjaGVtYVtpXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHsga2V5ZWRGb3JtRGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgZnVuY3Rpb24gcmVPcmRlckFycmF5KCkge1xyXG4gICAgICAgIC8vIENvcHkgaXRlbVxyXG4gICAgICAgIGxldCBfbmV3S2V5ZWRGb3JtRGF0YSA9IGtleWVkRm9ybURhdGEuc2xpY2UoKTtcclxuXHJcbiAgICAgICAgLy8gTW92ZXMgaXRlbSBmcm9tIGluZGV4IHRvIG5ld0luZGV4XHJcbiAgICAgICAgX25ld0tleWVkRm9ybURhdGEuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBfbmV3S2V5ZWRGb3JtRGF0YS5zcGxpY2UobmV3SW5kZXgsIDAsIGtleWVkRm9ybURhdGFbaW5kZXhdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIF9uZXdLZXllZEZvcm1EYXRhO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG5ld0tleWVkRm9ybURhdGEgPSByZU9yZGVyQXJyYXkoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICBrZXllZEZvcm1EYXRhOiBuZXdLZXllZEZvcm1EYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4gb25DaGFuZ2Uoa2V5ZWRUb1BsYWluRm9ybURhdGEobmV3S2V5ZWRGb3JtRGF0YSksIG5ld0Vycm9yU2NoZW1hKVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBvbkNoYW5nZUZvckluZGV4ID0gaW5kZXggPT4ge1xyXG4gICAgcmV0dXJuICh2YWx1ZSwgZXJyb3JTY2hlbWEpID0+IHtcclxuICAgICAgY29uc3QgeyBmb3JtRGF0YSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IG5ld0Zvcm1EYXRhID0gZm9ybURhdGEubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgLy8gV2UgbmVlZCB0byB0cmVhdCB1bmRlZmluZWQgaXRlbXMgYXMgbnVsbHMgdG8gaGF2ZSB2YWxpZGF0aW9uLlxyXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdGRlZ3J1bnQvanNvbnNjaGVtYS9pc3N1ZXMvMjA2XHJcbiAgICAgICAgY29uc3QganNvblZhbHVlID0gdHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiID8gbnVsbCA6IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBpbmRleCA9PT0gaSA/IGpzb25WYWx1ZSA6IGl0ZW07XHJcbiAgICAgIH0pO1xyXG4gICAgICBvbkNoYW5nZShcclxuICAgICAgICBuZXdGb3JtRGF0YSxcclxuICAgICAgICBlcnJvclNjaGVtYSAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5lcnJvclNjaGVtYSAmJiB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuZXJyb3JTY2hlbWEsXHJcbiAgICAgICAgICAgIFtpbmRleF06IGVycm9yU2NoZW1hLFxyXG4gICAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBvblNlbGVjdENoYW5nZSA9IHZhbHVlID0+IHtcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgc2NoZW1hLFxyXG4gICAgICB1aVNjaGVtYSxcclxuICAgICAgaWRTY2hlbWEsXHJcbiAgICAgIHJlZ2lzdHJ5ID0gZ2V0RGVmYXVsdFJlZ2lzdHJ5KCksXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHsgcm9vdFNjaGVtYSB9ID0gcmVnaXN0cnk7XHJcbiAgICBpZiAoIXNjaGVtYS5oYXNPd25Qcm9wZXJ0eShcIml0ZW1zXCIpKSB7XHJcbiAgICAgIGNvbnN0IHsgZmllbGRzIH0gPSByZWdpc3RyeTtcclxuICAgICAgY29uc3QgeyBVbnN1cHBvcnRlZEZpZWxkIH0gPSBmaWVsZHM7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxVbnN1cHBvcnRlZEZpZWxkXHJcbiAgICAgICAgICBzY2hlbWE9e3NjaGVtYX1cclxuICAgICAgICAgIGlkU2NoZW1hPXtpZFNjaGVtYX1cclxuICAgICAgICAgIHJlYXNvbj1cIk1pc3NpbmcgaXRlbXMgZGVmaW5pdGlvblwiXHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmIChpc011bHRpU2VsZWN0KHNjaGVtYSwgcm9vdFNjaGVtYSkpIHtcclxuICAgICAgLy8gSWYgYXJyYXkgaGFzIGVudW0gb3IgdW5pcXVlSXRlbXMgc2V0IHRvIHRydWUsIGNhbGwgcmVuZGVyTXVsdGlTZWxlY3QoKSB0byByZW5kZXIgdGhlIGRlZmF1bHQgbXVsdGlzZWxlY3Qgd2lkZ2V0IG9yIGEgY3VzdG9tIHdpZGdldCwgaWYgc3BlY2lmaWVkLlxyXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJNdWx0aVNlbGVjdCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzQ3VzdG9tV2lkZ2V0KHVpU2NoZW1hKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJDdXN0b21XaWRnZXQoKTtcclxuICAgIH1cclxuICAgIGlmIChpc0ZpeGVkSXRlbXMoc2NoZW1hKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJGaXhlZEFycmF5KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNGaWxlc0FycmF5KHNjaGVtYSwgdWlTY2hlbWEsIHJvb3RTY2hlbWEpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckZpbGVzKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJOb3JtYWxBcnJheSgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyTm9ybWFsQXJyYXkoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHNjaGVtYSxcclxuICAgICAgdWlTY2hlbWEsXHJcbiAgICAgIGVycm9yU2NoZW1hLFxyXG4gICAgICBpZFNjaGVtYSxcclxuICAgICAgbmFtZSxcclxuICAgICAgcmVxdWlyZWQsXHJcbiAgICAgIGRpc2FibGVkLFxyXG4gICAgICByZWFkb25seSxcclxuICAgICAgaGlkZUVycm9yLFxyXG4gICAgICBhdXRvZm9jdXMsXHJcbiAgICAgIHJlZ2lzdHJ5ID0gZ2V0RGVmYXVsdFJlZ2lzdHJ5KCksXHJcbiAgICAgIG9uQmx1cixcclxuICAgICAgb25Gb2N1cyxcclxuICAgICAgaWRQcmVmaXgsXHJcbiAgICAgIGlkU2VwYXJhdG9yLFxyXG4gICAgICByYXdFcnJvcnMsXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHRpdGxlID0gc2NoZW1hLnRpdGxlID09PSB1bmRlZmluZWQgPyBuYW1lIDogc2NoZW1hLnRpdGxlO1xyXG4gICAgY29uc3QgeyBBcnJheUZpZWxkVGVtcGxhdGUsIHJvb3RTY2hlbWEsIGZpZWxkcywgZm9ybUNvbnRleHQgfSA9IHJlZ2lzdHJ5O1xyXG4gICAgY29uc3QgeyBUaXRsZUZpZWxkLCBEZXNjcmlwdGlvbkZpZWxkIH0gPSBmaWVsZHM7XHJcbiAgICBjb25zdCBpdGVtc1NjaGVtYSA9IHJldHJpZXZlU2NoZW1hKHNjaGVtYS5pdGVtcywgcm9vdFNjaGVtYSk7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IGtleWVkVG9QbGFpbkZvcm1EYXRhKHRoaXMuc3RhdGUua2V5ZWRGb3JtRGF0YSk7XHJcbiAgICBjb25zdCBhcnJheVByb3BzID0ge1xyXG4gICAgICBjYW5BZGQ6IHRoaXMuY2FuQWRkSXRlbShmb3JtRGF0YSksXHJcbiAgICAgIGl0ZW1zOiB0aGlzLnN0YXRlLmtleWVkRm9ybURhdGEubWFwKChrZXllZEl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBrZXksIGl0ZW0gfSA9IGtleWVkSXRlbTtcclxuICAgICAgICBjb25zdCBpdGVtU2NoZW1hID0gcmV0cmlldmVTY2hlbWEoc2NoZW1hLml0ZW1zLCByb290U2NoZW1hLCBpdGVtKTtcclxuICAgICAgICBjb25zdCBpdGVtRXJyb3JTY2hlbWEgPSBlcnJvclNjaGVtYSA/IGVycm9yU2NoZW1hW2luZGV4XSA6IHVuZGVmaW5lZDtcclxuICAgICAgICBjb25zdCBpdGVtSWRQcmVmaXggPSBpZFNjaGVtYS4kaWQgKyBcIl9cIiArIGluZGV4O1xyXG4gICAgICAgIGNvbnN0IGl0ZW1JZFNjaGVtYSA9IHRvSWRTY2hlbWEoXHJcbiAgICAgICAgICBpdGVtU2NoZW1hLFxyXG4gICAgICAgICAgaXRlbUlkUHJlZml4LFxyXG4gICAgICAgICAgcm9vdFNjaGVtYSxcclxuICAgICAgICAgIGl0ZW0sXHJcbiAgICAgICAgICBpZFByZWZpeCxcclxuICAgICAgICAgIGlkU2VwYXJhdG9yXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJBcnJheUZpZWxkSXRlbSh7XHJcbiAgICAgICAgICBrZXksXHJcbiAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgIGNhbk1vdmVVcDogaW5kZXggPiAwLFxyXG4gICAgICAgICAgY2FuTW92ZURvd246IGluZGV4IDwgZm9ybURhdGEubGVuZ3RoIC0gMSxcclxuICAgICAgICAgIGl0ZW1TY2hlbWE6IGl0ZW1TY2hlbWEsXHJcbiAgICAgICAgICBpdGVtSWRTY2hlbWEsXHJcbiAgICAgICAgICBpdGVtRXJyb3JTY2hlbWEsXHJcbiAgICAgICAgICBpdGVtRGF0YTogaXRlbSxcclxuICAgICAgICAgIGl0ZW1VaVNjaGVtYTogdWlTY2hlbWEuaXRlbXMsXHJcbiAgICAgICAgICBhdXRvZm9jdXM6IGF1dG9mb2N1cyAmJiBpbmRleCA9PT0gMCxcclxuICAgICAgICAgIG9uQmx1cixcclxuICAgICAgICAgIG9uRm9jdXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pLFxyXG4gICAgICBjbGFzc05hbWU6IGBmaWVsZCBmaWVsZC1hcnJheSBmaWVsZC1hcnJheS1vZi0ke2l0ZW1zU2NoZW1hLnR5cGV9YCxcclxuICAgICAgRGVzY3JpcHRpb25GaWVsZCxcclxuICAgICAgZGlzYWJsZWQsXHJcbiAgICAgIGlkU2NoZW1hLFxyXG4gICAgICB1aVNjaGVtYSxcclxuICAgICAgb25BZGRDbGljazogdGhpcy5vbkFkZENsaWNrLFxyXG4gICAgICByZWFkb25seSxcclxuICAgICAgaGlkZUVycm9yLFxyXG4gICAgICByZXF1aXJlZCxcclxuICAgICAgc2NoZW1hLFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgVGl0bGVGaWVsZCxcclxuICAgICAgZm9ybUNvbnRleHQsXHJcbiAgICAgIGZvcm1EYXRhLFxyXG4gICAgICByYXdFcnJvcnMsXHJcbiAgICAgIHJlZ2lzdHJ5LFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiBhIGN1c3RvbSByZW5kZXIgZnVuY3Rpb24gd2FzIHBhc3NlZCBpblxyXG4gICAgY29uc3QgQ29tcG9uZW50ID1cclxuICAgICAgdWlTY2hlbWFbXCJ1aTpBcnJheUZpZWxkVGVtcGxhdGVcIl0gfHxcclxuICAgICAgQXJyYXlGaWVsZFRlbXBsYXRlIHx8XHJcbiAgICAgIERlZmF1bHROb3JtYWxBcnJheUZpZWxkVGVtcGxhdGU7XHJcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4uYXJyYXlQcm9wc30gLz47XHJcbiAgfVxyXG5cclxuICByZW5kZXJDdXN0b21XaWRnZXQoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHNjaGVtYSxcclxuICAgICAgaWRTY2hlbWEsXHJcbiAgICAgIHVpU2NoZW1hLFxyXG4gICAgICBkaXNhYmxlZCxcclxuICAgICAgcmVhZG9ubHksXHJcbiAgICAgIGhpZGVFcnJvcixcclxuICAgICAgcmVxdWlyZWQsXHJcbiAgICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgICBhdXRvZm9jdXMsXHJcbiAgICAgIG9uQmx1cixcclxuICAgICAgb25Gb2N1cyxcclxuICAgICAgZm9ybURhdGE6IGl0ZW1zLFxyXG4gICAgICByZWdpc3RyeSA9IGdldERlZmF1bHRSZWdpc3RyeSgpLFxyXG4gICAgICByYXdFcnJvcnMsXHJcbiAgICAgIG5hbWUsXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHsgd2lkZ2V0cywgZm9ybUNvbnRleHQgfSA9IHJlZ2lzdHJ5O1xyXG4gICAgY29uc3QgdGl0bGUgPSBzY2hlbWEudGl0bGUgfHwgbmFtZTtcclxuXHJcbiAgICBjb25zdCB7IHdpZGdldCwgLi4ub3B0aW9ucyB9ID0ge1xyXG4gICAgICAuLi5nZXRVaU9wdGlvbnModWlTY2hlbWEpLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IFdpZGdldCA9IGdldFdpZGdldChzY2hlbWEsIHdpZGdldCwgd2lkZ2V0cyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8V2lkZ2V0XHJcbiAgICAgICAgaWQ9e2lkU2NoZW1hICYmIGlkU2NoZW1hLiRpZH1cclxuICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0Q2hhbmdlfVxyXG4gICAgICAgIG9uQmx1cj17b25CbHVyfVxyXG4gICAgICAgIG9uRm9jdXM9e29uRm9jdXN9XHJcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICBzY2hlbWE9e3NjaGVtYX1cclxuICAgICAgICByZWdpc3RyeT17cmVnaXN0cnl9XHJcbiAgICAgICAgdmFsdWU9e2l0ZW1zfVxyXG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICByZWFkb25seT17cmVhZG9ubHl9XHJcbiAgICAgICAgaGlkZUVycm9yPXtoaWRlRXJyb3J9XHJcbiAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgIGxhYmVsPXt0aXRsZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgZm9ybUNvbnRleHQ9e2Zvcm1Db250ZXh0fVxyXG4gICAgICAgIGF1dG9mb2N1cz17YXV0b2ZvY3VzfVxyXG4gICAgICAgIHJhd0Vycm9ycz17cmF3RXJyb3JzfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlck11bHRpU2VsZWN0KCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBzY2hlbWEsXHJcbiAgICAgIGlkU2NoZW1hLFxyXG4gICAgICB1aVNjaGVtYSxcclxuICAgICAgZm9ybURhdGEsXHJcbiAgICAgIGRpc2FibGVkLFxyXG4gICAgICByZWFkb25seSxcclxuICAgICAgcmVxdWlyZWQsXHJcbiAgICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgICBhdXRvZm9jdXMsXHJcbiAgICAgIG9uQmx1cixcclxuICAgICAgb25Gb2N1cyxcclxuICAgICAgcmVnaXN0cnkgPSBnZXREZWZhdWx0UmVnaXN0cnkoKSxcclxuICAgICAgcmF3RXJyb3JzLFxyXG4gICAgICBuYW1lLFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuZm9ybURhdGE7XHJcbiAgICBjb25zdCB7IHdpZGdldHMsIHJvb3RTY2hlbWEsIGZvcm1Db250ZXh0IH0gPSByZWdpc3RyeTtcclxuICAgIGNvbnN0IGl0ZW1zU2NoZW1hID0gcmV0cmlldmVTY2hlbWEoc2NoZW1hLml0ZW1zLCByb290U2NoZW1hLCBmb3JtRGF0YSk7XHJcbiAgICBjb25zdCB0aXRsZSA9IHNjaGVtYS50aXRsZSB8fCBuYW1lO1xyXG4gICAgY29uc3QgZW51bU9wdGlvbnMgPSBvcHRpb25zTGlzdChpdGVtc1NjaGVtYSk7XHJcbiAgICBjb25zdCB7IHdpZGdldCA9IFwic2VsZWN0XCIsIC4uLm9wdGlvbnMgfSA9IHtcclxuICAgICAgLi4uZ2V0VWlPcHRpb25zKHVpU2NoZW1hKSxcclxuICAgICAgZW51bU9wdGlvbnMsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgV2lkZ2V0ID0gZ2V0V2lkZ2V0KHNjaGVtYSwgd2lkZ2V0LCB3aWRnZXRzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxXaWRnZXRcclxuICAgICAgICBpZD17aWRTY2hlbWEgJiYgaWRTY2hlbWEuJGlkfVxyXG4gICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZWxlY3RDaGFuZ2V9XHJcbiAgICAgICAgb25CbHVyPXtvbkJsdXJ9XHJcbiAgICAgICAgb25Gb2N1cz17b25Gb2N1c31cclxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgIHNjaGVtYT17c2NoZW1hfVxyXG4gICAgICAgIHJlZ2lzdHJ5PXtyZWdpc3RyeX1cclxuICAgICAgICB2YWx1ZT17aXRlbXN9XHJcbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgIHJlYWRvbmx5PXtyZWFkb25seX1cclxuICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgbGFiZWw9e3RpdGxlfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICBmb3JtQ29udGV4dD17Zm9ybUNvbnRleHR9XHJcbiAgICAgICAgYXV0b2ZvY3VzPXthdXRvZm9jdXN9XHJcbiAgICAgICAgcmF3RXJyb3JzPXtyYXdFcnJvcnN9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyRmlsZXMoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHNjaGVtYSxcclxuICAgICAgdWlTY2hlbWEsXHJcbiAgICAgIGlkU2NoZW1hLFxyXG4gICAgICBuYW1lLFxyXG4gICAgICBkaXNhYmxlZCxcclxuICAgICAgcmVhZG9ubHksXHJcbiAgICAgIGF1dG9mb2N1cyxcclxuICAgICAgb25CbHVyLFxyXG4gICAgICBvbkZvY3VzLFxyXG4gICAgICByZWdpc3RyeSA9IGdldERlZmF1bHRSZWdpc3RyeSgpLFxyXG4gICAgICByYXdFcnJvcnMsXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHRpdGxlID0gc2NoZW1hLnRpdGxlIHx8IG5hbWU7XHJcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuZm9ybURhdGE7XHJcbiAgICBjb25zdCB7IHdpZGdldHMsIGZvcm1Db250ZXh0IH0gPSByZWdpc3RyeTtcclxuICAgIGNvbnN0IHsgd2lkZ2V0ID0gXCJmaWxlc1wiLCAuLi5vcHRpb25zIH0gPSBnZXRVaU9wdGlvbnModWlTY2hlbWEpO1xyXG4gICAgY29uc3QgV2lkZ2V0ID0gZ2V0V2lkZ2V0KHNjaGVtYSwgd2lkZ2V0LCB3aWRnZXRzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxXaWRnZXRcclxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgIGlkPXtpZFNjaGVtYSAmJiBpZFNjaGVtYS4kaWR9XHJcbiAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdENoYW5nZX1cclxuICAgICAgICBvbkJsdXI9e29uQmx1cn1cclxuICAgICAgICBvbkZvY3VzPXtvbkZvY3VzfVxyXG4gICAgICAgIHNjaGVtYT17c2NoZW1hfVxyXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICB2YWx1ZT17aXRlbXN9XHJcbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgIHJlYWRvbmx5PXtyZWFkb25seX1cclxuICAgICAgICBmb3JtQ29udGV4dD17Zm9ybUNvbnRleHR9XHJcbiAgICAgICAgYXV0b2ZvY3VzPXthdXRvZm9jdXN9XHJcbiAgICAgICAgcmF3RXJyb3JzPXtyYXdFcnJvcnN9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyRml4ZWRBcnJheSgpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgc2NoZW1hLFxyXG4gICAgICB1aVNjaGVtYSxcclxuICAgICAgZm9ybURhdGEsXHJcbiAgICAgIGVycm9yU2NoZW1hLFxyXG4gICAgICBpZFByZWZpeCxcclxuICAgICAgaWRTZXBhcmF0b3IsXHJcbiAgICAgIGlkU2NoZW1hLFxyXG4gICAgICBuYW1lLFxyXG4gICAgICByZXF1aXJlZCxcclxuICAgICAgZGlzYWJsZWQsXHJcbiAgICAgIHJlYWRvbmx5LFxyXG4gICAgICBhdXRvZm9jdXMsXHJcbiAgICAgIHJlZ2lzdHJ5ID0gZ2V0RGVmYXVsdFJlZ2lzdHJ5KCksXHJcbiAgICAgIG9uQmx1cixcclxuICAgICAgb25Gb2N1cyxcclxuICAgICAgcmF3RXJyb3JzLFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB0aXRsZSA9IHNjaGVtYS50aXRsZSB8fCBuYW1lO1xyXG4gICAgbGV0IGl0ZW1zID0gdGhpcy5wcm9wcy5mb3JtRGF0YTtcclxuICAgIGNvbnN0IHsgQXJyYXlGaWVsZFRlbXBsYXRlLCByb290U2NoZW1hLCBmaWVsZHMsIGZvcm1Db250ZXh0IH0gPSByZWdpc3RyeTtcclxuICAgIGNvbnN0IHsgVGl0bGVGaWVsZCB9ID0gZmllbGRzO1xyXG4gICAgY29uc3QgaXRlbVNjaGVtYXMgPSBzY2hlbWEuaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT5cclxuICAgICAgcmV0cmlldmVTY2hlbWEoaXRlbSwgcm9vdFNjaGVtYSwgZm9ybURhdGFbaW5kZXhdKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGFkZGl0aW9uYWxTY2hlbWEgPSBhbGxvd0FkZGl0aW9uYWxJdGVtcyhzY2hlbWEpXHJcbiAgICAgID8gcmV0cmlldmVTY2hlbWEoc2NoZW1hLmFkZGl0aW9uYWxJdGVtcywgcm9vdFNjaGVtYSwgZm9ybURhdGEpXHJcbiAgICAgIDogbnVsbDtcclxuXHJcbiAgICBpZiAoIWl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA8IGl0ZW1TY2hlbWFzLmxlbmd0aCkge1xyXG4gICAgICAvLyB0byBtYWtlIHN1cmUgYXQgbGVhc3QgYWxsIGZpeGVkIGl0ZW1zIGFyZSBnZW5lcmF0ZWRcclxuICAgICAgaXRlbXMgPSBpdGVtcyB8fCBbXTtcclxuICAgICAgaXRlbXMgPSBpdGVtcy5jb25jYXQobmV3IEFycmF5KGl0ZW1TY2hlbWFzLmxlbmd0aCAtIGl0ZW1zLmxlbmd0aCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZXNlIGFyZSB0aGUgcHJvcHMgcGFzc2VkIGludG8gdGhlIHJlbmRlciBmdW5jdGlvblxyXG4gICAgY29uc3QgYXJyYXlQcm9wcyA9IHtcclxuICAgICAgY2FuQWRkOiB0aGlzLmNhbkFkZEl0ZW0oaXRlbXMpICYmIGFkZGl0aW9uYWxTY2hlbWEsXHJcbiAgICAgIGNsYXNzTmFtZTogXCJmaWVsZCBmaWVsZC1hcnJheSBmaWVsZC1hcnJheS1maXhlZC1pdGVtc1wiLFxyXG4gICAgICBkaXNhYmxlZCxcclxuICAgICAgaWRTY2hlbWEsXHJcbiAgICAgIGZvcm1EYXRhLFxyXG4gICAgICBpdGVtczogdGhpcy5zdGF0ZS5rZXllZEZvcm1EYXRhLm1hcCgoa2V5ZWRJdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsga2V5LCBpdGVtIH0gPSBrZXllZEl0ZW07XHJcbiAgICAgICAgY29uc3QgYWRkaXRpb25hbCA9IGluZGV4ID49IGl0ZW1TY2hlbWFzLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBpdGVtU2NoZW1hID0gYWRkaXRpb25hbFxyXG4gICAgICAgICAgPyByZXRyaWV2ZVNjaGVtYShzY2hlbWEuYWRkaXRpb25hbEl0ZW1zLCByb290U2NoZW1hLCBpdGVtKVxyXG4gICAgICAgICAgOiBpdGVtU2NoZW1hc1tpbmRleF07XHJcbiAgICAgICAgY29uc3QgaXRlbUlkUHJlZml4ID0gaWRTY2hlbWEuJGlkICsgXCJfXCIgKyBpbmRleDtcclxuICAgICAgICBjb25zdCBpdGVtSWRTY2hlbWEgPSB0b0lkU2NoZW1hKFxyXG4gICAgICAgICAgaXRlbVNjaGVtYSxcclxuICAgICAgICAgIGl0ZW1JZFByZWZpeCxcclxuICAgICAgICAgIHJvb3RTY2hlbWEsXHJcbiAgICAgICAgICBpdGVtLFxyXG4gICAgICAgICAgaWRQcmVmaXgsXHJcbiAgICAgICAgICBpZFNlcGFyYXRvclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgaXRlbVVpU2NoZW1hID0gYWRkaXRpb25hbFxyXG4gICAgICAgICAgPyB1aVNjaGVtYS5hZGRpdGlvbmFsSXRlbXMgfHwge31cclxuICAgICAgICAgIDogQXJyYXkuaXNBcnJheSh1aVNjaGVtYS5pdGVtcylcclxuICAgICAgICAgID8gdWlTY2hlbWEuaXRlbXNbaW5kZXhdXHJcbiAgICAgICAgICA6IHVpU2NoZW1hLml0ZW1zIHx8IHt9O1xyXG4gICAgICAgIGNvbnN0IGl0ZW1FcnJvclNjaGVtYSA9IGVycm9yU2NoZW1hID8gZXJyb3JTY2hlbWFbaW5kZXhdIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJBcnJheUZpZWxkSXRlbSh7XHJcbiAgICAgICAgICBrZXksXHJcbiAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgIGNhblJlbW92ZTogYWRkaXRpb25hbCxcclxuICAgICAgICAgIGNhbk1vdmVVcDogaW5kZXggPj0gaXRlbVNjaGVtYXMubGVuZ3RoICsgMSxcclxuICAgICAgICAgIGNhbk1vdmVEb3duOiBhZGRpdGlvbmFsICYmIGluZGV4IDwgaXRlbXMubGVuZ3RoIC0gMSxcclxuICAgICAgICAgIGl0ZW1TY2hlbWEsXHJcbiAgICAgICAgICBpdGVtRGF0YTogaXRlbSxcclxuICAgICAgICAgIGl0ZW1VaVNjaGVtYSxcclxuICAgICAgICAgIGl0ZW1JZFNjaGVtYSxcclxuICAgICAgICAgIGl0ZW1FcnJvclNjaGVtYSxcclxuICAgICAgICAgIGF1dG9mb2N1czogYXV0b2ZvY3VzICYmIGluZGV4ID09PSAwLFxyXG4gICAgICAgICAgb25CbHVyLFxyXG4gICAgICAgICAgb25Gb2N1cyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSksXHJcbiAgICAgIG9uQWRkQ2xpY2s6IHRoaXMub25BZGRDbGljayxcclxuICAgICAgcmVhZG9ubHksXHJcbiAgICAgIHJlcXVpcmVkLFxyXG4gICAgICBzY2hlbWEsXHJcbiAgICAgIHVpU2NoZW1hLFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgVGl0bGVGaWVsZCxcclxuICAgICAgZm9ybUNvbnRleHQsXHJcbiAgICAgIHJhd0Vycm9ycyxcclxuICAgIH07XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYSBjdXN0b20gdGVtcGxhdGUgdGVtcGxhdGUgd2FzIHBhc3NlZCBpblxyXG4gICAgY29uc3QgVGVtcGxhdGUgPVxyXG4gICAgICB1aVNjaGVtYVtcInVpOkFycmF5RmllbGRUZW1wbGF0ZVwiXSB8fFxyXG4gICAgICBBcnJheUZpZWxkVGVtcGxhdGUgfHxcclxuICAgICAgRGVmYXVsdEZpeGVkQXJyYXlGaWVsZFRlbXBsYXRlO1xyXG4gICAgcmV0dXJuIDxUZW1wbGF0ZSB7Li4uYXJyYXlQcm9wc30gLz47XHJcbiAgfVxyXG5cclxuICByZW5kZXJBcnJheUZpZWxkSXRlbShwcm9wcykge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBrZXksXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBjYW5SZW1vdmUgPSB0cnVlLFxyXG4gICAgICBjYW5Nb3ZlVXAgPSB0cnVlLFxyXG4gICAgICBjYW5Nb3ZlRG93biA9IHRydWUsXHJcbiAgICAgIGl0ZW1TY2hlbWEsXHJcbiAgICAgIGl0ZW1EYXRhLFxyXG4gICAgICBpdGVtVWlTY2hlbWEsXHJcbiAgICAgIGl0ZW1JZFNjaGVtYSxcclxuICAgICAgaXRlbUVycm9yU2NoZW1hLFxyXG4gICAgICBhdXRvZm9jdXMsXHJcbiAgICAgIG9uQmx1cixcclxuICAgICAgb25Gb2N1cyxcclxuICAgICAgcmF3RXJyb3JzLFxyXG4gICAgfSA9IHByb3BzO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBkaXNhYmxlZCxcclxuICAgICAgcmVhZG9ubHksXHJcbiAgICAgIHVpU2NoZW1hLFxyXG4gICAgICByZWdpc3RyeSA9IGdldERlZmF1bHRSZWdpc3RyeSgpLFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGZpZWxkczogeyBTY2hlbWFGaWVsZCB9LFxyXG4gICAgfSA9IHJlZ2lzdHJ5O1xyXG4gICAgY29uc3QgeyBvcmRlcmFibGUsIHJlbW92YWJsZSB9ID0ge1xyXG4gICAgICBvcmRlcmFibGU6IHRydWUsXHJcbiAgICAgIHJlbW92YWJsZTogdHJ1ZSxcclxuICAgICAgLi4udWlTY2hlbWFbXCJ1aTpvcHRpb25zXCJdLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhcyA9IHtcclxuICAgICAgbW92ZVVwOiBvcmRlcmFibGUgJiYgY2FuTW92ZVVwLFxyXG4gICAgICBtb3ZlRG93bjogb3JkZXJhYmxlICYmIGNhbk1vdmVEb3duLFxyXG4gICAgICByZW1vdmU6IHJlbW92YWJsZSAmJiBjYW5SZW1vdmUsXHJcbiAgICB9O1xyXG4gICAgaGFzLnRvb2xiYXIgPSBPYmplY3Qua2V5cyhoYXMpLnNvbWUoa2V5ID0+IGhhc1trZXldKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjaGlsZHJlbjogKFxyXG4gICAgICAgIDxTY2hlbWFGaWVsZFxyXG4gICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgc2NoZW1hPXtpdGVtU2NoZW1hfVxyXG4gICAgICAgICAgdWlTY2hlbWE9e2l0ZW1VaVNjaGVtYX1cclxuICAgICAgICAgIGZvcm1EYXRhPXtpdGVtRGF0YX1cclxuICAgICAgICAgIGVycm9yU2NoZW1hPXtpdGVtRXJyb3JTY2hlbWF9XHJcbiAgICAgICAgICBpZFByZWZpeD17dGhpcy5wcm9wcy5pZFByZWZpeH1cclxuICAgICAgICAgIGlkU2VwYXJhdG9yPXt0aGlzLnByb3BzLmlkU2VwYXJhdG9yfVxyXG4gICAgICAgICAgaWRTY2hlbWE9e2l0ZW1JZFNjaGVtYX1cclxuICAgICAgICAgIHJlcXVpcmVkPXt0aGlzLmlzSXRlbVJlcXVpcmVkKGl0ZW1TY2hlbWEpfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VGb3JJbmRleChpbmRleCl9XHJcbiAgICAgICAgICBvbkJsdXI9e29uQmx1cn1cclxuICAgICAgICAgIG9uRm9jdXM9e29uRm9jdXN9XHJcbiAgICAgICAgICByZWdpc3RyeT17dGhpcy5wcm9wcy5yZWdpc3RyeX1cclxuICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxyXG4gICAgICAgICAgcmVhZG9ubHk9e3RoaXMucHJvcHMucmVhZG9ubHl9XHJcbiAgICAgICAgICBoaWRlRXJyb3I9e3RoaXMucHJvcHMuaGlkZUVycm9yfVxyXG4gICAgICAgICAgYXV0b2ZvY3VzPXthdXRvZm9jdXN9XHJcbiAgICAgICAgICByYXdFcnJvcnM9e3Jhd0Vycm9yc31cclxuICAgICAgICAvPlxyXG4gICAgICApLFxyXG4gICAgICBjbGFzc05hbWU6IFwiYXJyYXktaXRlbVwiLFxyXG4gICAgICBkaXNhYmxlZCxcclxuICAgICAgaGFzVG9vbGJhcjogaGFzLnRvb2xiYXIsXHJcbiAgICAgIGhhc01vdmVVcDogaGFzLm1vdmVVcCxcclxuICAgICAgaGFzTW92ZURvd246IGhhcy5tb3ZlRG93bixcclxuICAgICAgaGFzUmVtb3ZlOiBoYXMucmVtb3ZlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAga2V5LFxyXG4gICAgICBvbkFkZEluZGV4Q2xpY2s6IHRoaXMub25BZGRJbmRleENsaWNrLFxyXG4gICAgICBvbkRyb3BJbmRleENsaWNrOiB0aGlzLm9uRHJvcEluZGV4Q2xpY2ssXHJcbiAgICAgIG9uUmVvcmRlckNsaWNrOiB0aGlzLm9uUmVvcmRlckNsaWNrLFxyXG4gICAgICByZWFkb25seSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgQXJyYXlGaWVsZC5wcm9wVHlwZXMgPSB0eXBlcy5maWVsZFByb3BzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnJheUZpZWxkO1xyXG4iXX0=