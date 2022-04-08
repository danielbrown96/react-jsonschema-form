"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@rjsf/core");

var _lodash = _interopRequireDefault(require("lodash"));

var _semanticUiReact = require("semantic-ui-react");

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var asNumber = _core.utils.asNumber,
    guessType = _core.utils.guessType;
var nums = new Set(["number", "integer"]);
/**
 * * Returns and creates an array format required for semantic drop down
 * @param {array} enumOptions- array of items for the dropdown
 * @param {array} enumDisabled - array of enum option values to disable
 * @returns {*}
 */

function createDefaultValueOptionsForDropDown(enumOptions, enumDisabled) {
  var disabledOptions = enumDisabled || [];
  var options = []; // eslint-disable-next-line no-shadow

  options = _lodash.default.map(enumOptions, function (_ref) {
    var label = _ref.label,
        value = _ref.value;
    return {
      disabled: disabledOptions.indexOf(value) !== -1,
      key: label,
      text: label,
      value: value
    };
  });
  return options;
}
/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */


var processValue = function processValue(schema, value) {
  // "enum" is a reserved word, so only "type" and "items" can be destructured
  var type = schema.type,
      items = schema.items;

  if (value === "") {
    return undefined;
  } else if (type === "array" && items && nums.has(items.type)) {
    return value.map(asNumber);
  } else if (type === "boolean") {
    return value === "true" || value === true;
  } else if (type === "number") {
    return asNumber(value);
  } // If type is undefined, but an enum is present, try and infer the type from
  // the enum values


  if (schema.enum) {
    if (schema.enum.every(function (x) {
      return guessType(x) === "number";
    })) {
      return asNumber(value);
    } else if (schema.enum.every(function (x) {
      return guessType(x) === "boolean";
    })) {
      return value === "true";
    }
  }

  return value;
};

function SelectWidget(props) {
  var schema = props.schema,
      uiSchema = props.uiSchema,
      formContext = props.formContext,
      id = props.id,
      options = props.options,
      name = props.name,
      label = props.label,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      value = props.value,
      multiple = props.multiple,
      placeholder = props.placeholder,
      autofocus = props.autofocus,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus;
  var semanticProps = (0, _util.getSemanticProps)({
    schema: schema,
    uiSchema: uiSchema,
    formContext: formContext,
    options: options,
    defaultSchemaProps: {
      inverted: "false",
      selection: true,
      fluid: true,
      scrolling: true,
      upward: false
    }
  });
  var enumDisabled = options.enumDisabled,
      enumOptions = options.enumOptions;
  var emptyValue = multiple ? [] : "";
  var dropdownOptions = createDefaultValueOptionsForDropDown(enumOptions, enumDisabled);

  var _onChange = function _onChange(event, // eslint-disable-next-line no-shadow
  _ref2) {
    var value = _ref2.value;
    return onChange && onChange(processValue(schema, value));
  }; // eslint-disable-next-line no-shadow


  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur && onBlur(id, processValue(schema, value));
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus && onFocus(id, processValue(schema, value));
  };

  return _react.default.createElement(_semanticUiReact.Form.Dropdown, _extends({
    key: id,
    name: name,
    label: label || schema.title,
    multiple: typeof multiple === "undefined" ? false : multiple,
    value: typeof value === "undefined" ? emptyValue : value,
    disabled: disabled,
    placeholder: placeholder
  }, semanticProps, {
    required: required,
    autoFocus: autofocus,
    readOnly: readonly,
    options: dropdownOptions,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
}

var _default = SelectWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TZWxlY3RXaWRnZXQvU2VsZWN0V2lkZ2V0LmpzIl0sIm5hbWVzIjpbImFzTnVtYmVyIiwidXRpbHMiLCJndWVzc1R5cGUiLCJudW1zIiwiU2V0IiwiY3JlYXRlRGVmYXVsdFZhbHVlT3B0aW9uc0ZvckRyb3BEb3duIiwiZW51bU9wdGlvbnMiLCJlbnVtRGlzYWJsZWQiLCJkaXNhYmxlZE9wdGlvbnMiLCJvcHRpb25zIiwiXyIsIm1hcCIsImxhYmVsIiwidmFsdWUiLCJkaXNhYmxlZCIsImluZGV4T2YiLCJrZXkiLCJ0ZXh0IiwicHJvY2Vzc1ZhbHVlIiwic2NoZW1hIiwidHlwZSIsIml0ZW1zIiwidW5kZWZpbmVkIiwiaGFzIiwiZW51bSIsImV2ZXJ5IiwieCIsIlNlbGVjdFdpZGdldCIsInByb3BzIiwidWlTY2hlbWEiLCJmb3JtQ29udGV4dCIsImlkIiwibmFtZSIsInJlcXVpcmVkIiwicmVhZG9ubHkiLCJtdWx0aXBsZSIsInBsYWNlaG9sZGVyIiwiYXV0b2ZvY3VzIiwib25DaGFuZ2UiLCJvbkJsdXIiLCJvbkZvY3VzIiwic2VtYW50aWNQcm9wcyIsImRlZmF1bHRTY2hlbWFQcm9wcyIsImludmVydGVkIiwic2VsZWN0aW9uIiwiZmx1aWQiLCJzY3JvbGxpbmciLCJ1cHdhcmQiLCJlbXB0eVZhbHVlIiwiZHJvcGRvd25PcHRpb25zIiwiX29uQ2hhbmdlIiwiZXZlbnQiLCJfb25CbHVyIiwidGFyZ2V0IiwiX29uRm9jdXMiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7SUFHUUEsUSxHQUF3QkMsVyxDQUF4QkQsUTtJQUFVRSxTLEdBQWNELFcsQ0FBZEMsUztBQUVsQixJQUFNQyxJQUFJLEdBQUcsSUFBSUMsR0FBSixDQUFRLENBQUMsUUFBRCxFQUFXLFNBQVgsQ0FBUixDQUFiO0FBRUE7Ozs7Ozs7QUFNQSxTQUFTQyxvQ0FBVCxDQUE4Q0MsV0FBOUMsRUFBMkRD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UU1LLGFBUk47QUFTRSxJQUFBLFFBQVEsRUFBRVIsUUFUWjtBQVVFLElBQUEsU0FBUyxFQUFFSSxTQVZiO0FBV0UsSUFBQSxRQUFRLEVBQUVILFFBWFo7QUFZRSxJQUFBLE9BQU8sRUFBRWUsZUFaWDtBQWFFLElBQUEsUUFBUSxFQUFFQyxTQWJaO0FBY0UsSUFBQSxNQUFNLEVBQUVFLE9BZFY7QUFlRSxJQUFBLE9BQU8sRUFBRUU7QUFmWCxLQURGO0FBbUJEOztlQUNjM0IsWSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1dGlscyB9IGZyb20gJ0ByanNmL2NvcmUnO1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0U2VtYW50aWNQcm9wcyB9IGZyb20gXCIuLi91dGlsXCI7XHJcblxyXG5cclxuY29uc3QgeyBhc051bWJlciwgZ3Vlc3NUeXBlIH0gPSB1dGlscztcclxuXHJcbmNvbnN0IG51bXMgPSBuZXcgU2V0KFtcIm51bWJlclwiLCBcImludGVnZXJcIl0pO1xyXG5cclxuLyoqXHJcbiAqICogUmV0dXJucyBhbmQgY3JlYXRlcyBhbiBhcnJheSBmb3JtYXQgcmVxdWlyZWQgZm9yIHNlbWFudGljIGRyb3AgZG93blxyXG4gKiBAcGFyYW0ge2FycmF5fSBlbnVtT3B0aW9ucy0gYXJyYXkgb2YgaXRlbXMgZm9yIHRoZSBkcm9wZG93blxyXG4gKiBAcGFyYW0ge2FycmF5fSBlbnVtRGlzYWJsZWQgLSBhcnJheSBvZiBlbnVtIG9wdGlvbiB2YWx1ZXMgdG8gZGlzYWJsZVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRWYWx1ZU9wdGlvbnNGb3JEcm9wRG93bihlbnVtT3B0aW9ucywgZW51bURpc2FibGVkKSB7XHJcbiAgY29uc3QgZGlzYWJsZWRPcHRpb25zID0gZW51bURpc2FibGVkIHx8IFtdO1xyXG4gIGxldCBvcHRpb25zID0gW107XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xyXG4gIG9wdGlvbnMgPSBfLm1hcChlbnVtT3B0aW9ucywgKHsgbGFiZWwsIHZhbHVlIH0pID0+ICh7XHJcbiAgICBkaXNhYmxlZDogZGlzYWJsZWRPcHRpb25zLmluZGV4T2YodmFsdWUpICE9PSAtMSxcclxuICAgIGtleTogbGFiZWwsXHJcbiAgICB0ZXh0OiBsYWJlbCxcclxuICAgIHZhbHVlLFxyXG4gIH0pKTtcclxuICByZXR1cm4gb3B0aW9ucztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgaXMgYSBzaWxseSBsaW1pdGF0aW9uIGluIHRoZSBET00gd2hlcmUgb3B0aW9uIGNoYW5nZSBldmVudCB2YWx1ZXMgYXJlXHJcbiAqIGFsd2F5cyByZXRyaWV2ZWQgYXMgc3RyaW5ncy5cclxuICovXHJcbmNvbnN0IHByb2Nlc3NWYWx1ZSA9IChzY2hlbWEsIHZhbHVlKSA9PiB7XHJcbiAgLy8gXCJlbnVtXCIgaXMgYSByZXNlcnZlZCB3b3JkLCBzbyBvbmx5IFwidHlwZVwiIGFuZCBcIml0ZW1zXCIgY2FuIGJlIGRlc3RydWN0dXJlZFxyXG4gIGNvbnN0IHsgdHlwZSwgaXRlbXMgfSA9IHNjaGVtYTtcclxuICBpZiAodmFsdWUgPT09IFwiXCIpIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImFycmF5XCIgJiYgaXRlbXMgJiYgbnVtcy5oYXMoaXRlbXMudHlwZSkpIHtcclxuICAgIHJldHVybiB2YWx1ZS5tYXAoYXNOdW1iZXIpO1xyXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgIHJldHVybiB2YWx1ZSA9PT0gXCJ0cnVlXCIgfHwgdmFsdWUgPT09IHRydWU7XHJcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICByZXR1cm4gYXNOdW1iZXIodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLy8gSWYgdHlwZSBpcyB1bmRlZmluZWQsIGJ1dCBhbiBlbnVtIGlzIHByZXNlbnQsIHRyeSBhbmQgaW5mZXIgdGhlIHR5cGUgZnJvbVxyXG4gIC8vIHRoZSBlbnVtIHZhbHVlc1xyXG4gIGlmIChzY2hlbWEuZW51bSkge1xyXG4gICAgaWYgKHNjaGVtYS5lbnVtLmV2ZXJ5KHggPT4gZ3Vlc3NUeXBlKHgpID09PSBcIm51bWJlclwiKSkge1xyXG4gICAgICByZXR1cm4gYXNOdW1iZXIodmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmIChzY2hlbWEuZW51bS5ldmVyeSh4ID0+IGd1ZXNzVHlwZSh4KSA9PT0gXCJib29sZWFuXCIpKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gXCJ0cnVlXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdmFsdWU7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBTZWxlY3RXaWRnZXQocHJvcHMpIHtcclxuICBjb25zdCB7XHJcbiAgICBzY2hlbWEsXHJcbiAgICB1aVNjaGVtYSxcclxuICAgIGZvcm1Db250ZXh0LFxyXG4gICAgaWQsXHJcbiAgICBvcHRpb25zLFxyXG4gICAgbmFtZSxcclxuICAgIGxhYmVsLFxyXG4gICAgcmVxdWlyZWQsXHJcbiAgICBkaXNhYmxlZCxcclxuICAgIHJlYWRvbmx5LFxyXG4gICAgdmFsdWUsXHJcbiAgICBtdWx0aXBsZSxcclxuICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgYXV0b2ZvY3VzLFxyXG4gICAgb25DaGFuZ2UsXHJcbiAgICBvbkJsdXIsXHJcbiAgICBvbkZvY3VzLFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBzZW1hbnRpY1Byb3BzID0gZ2V0U2VtYW50aWNQcm9wcyh7XHJcbiAgICBzY2hlbWEsXHJcbiAgICB1aVNjaGVtYSxcclxuICAgIGZvcm1Db250ZXh0LFxyXG4gICAgb3B0aW9ucyxcclxuICAgIGRlZmF1bHRTY2hlbWFQcm9wczoge1xyXG4gICAgICBpbnZlcnRlZDogXCJmYWxzZVwiLFxyXG4gICAgICBzZWxlY3Rpb246IHRydWUsXHJcbiAgICAgIGZsdWlkOiB0cnVlLFxyXG4gICAgICBzY3JvbGxpbmc6IHRydWUsXHJcbiAgICAgIHVwd2FyZDogZmFsc2UsXHJcbiAgICB9XHJcbiB9KTtcclxuICBjb25zdCB7IGVudW1EaXNhYmxlZCwgZW51bU9wdGlvbnMgfSA9IG9wdGlvbnM7XHJcbiAgY29uc3QgZW1wdHlWYWx1ZSA9IG11bHRpcGxlID8gW10gOiBcIlwiO1xyXG4gIGNvbnN0IGRyb3Bkb3duT3B0aW9ucyA9IGNyZWF0ZURlZmF1bHRWYWx1ZU9wdGlvbnNGb3JEcm9wRG93bihcclxuICAgIGVudW1PcHRpb25zLFxyXG4gICAgZW51bURpc2FibGVkXHJcbiAgKTtcclxuICBjb25zdCBfb25DaGFuZ2UgPSAoXHJcbiAgICBldmVudCxcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcclxuICAgIHsgdmFsdWUgfVxyXG4gICkgPT4gb25DaGFuZ2UgJiYgb25DaGFuZ2UocHJvY2Vzc1ZhbHVlKHNjaGVtYSwgdmFsdWUpKTtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XHJcbiAgY29uc3QgX29uQmx1ciA9ICh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+XHJcbiAgICBvbkJsdXIgJiYgb25CbHVyKGlkLCBwcm9jZXNzVmFsdWUoc2NoZW1hLCB2YWx1ZSkpO1xyXG4gIGNvbnN0IF9vbkZvY3VzID0gKHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcclxuICAgIHRhcmdldDogeyB2YWx1ZSB9LFxyXG4gIH0pID0+IG9uRm9jdXMgJiYgb25Gb2N1cyhpZCwgcHJvY2Vzc1ZhbHVlKHNjaGVtYSwgdmFsdWUpKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtLkRyb3Bkb3duXHJcbiAgICAgIGtleT17aWR9XHJcbiAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgIGxhYmVsPXtsYWJlbCB8fCBzY2hlbWEudGl0bGV9XHJcbiAgICAgIG11bHRpcGxlPXt0eXBlb2YgbXVsdGlwbGUgPT09IFwidW5kZWZpbmVkXCIgPyBmYWxzZSA6IG11bHRpcGxlfVxyXG4gICAgICB2YWx1ZT17dHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiID8gZW1wdHlWYWx1ZSA6IHZhbHVlfVxyXG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgey4uLnNlbWFudGljUHJvcHN9XHJcbiAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgYXV0b0ZvY3VzPXthdXRvZm9jdXN9XHJcbiAgICAgIHJlYWRPbmx5PXtyZWFkb25seX1cclxuICAgICAgb3B0aW9ucz17ZHJvcGRvd25PcHRpb25zfVxyXG4gICAgICBvbkNoYW5nZT17X29uQ2hhbmdlfVxyXG4gICAgICBvbkJsdXI9e19vbkJsdXJ9XHJcbiAgICAgIG9uRm9jdXM9e19vbkZvY3VzfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFdpZGdldDtcclxuIl19