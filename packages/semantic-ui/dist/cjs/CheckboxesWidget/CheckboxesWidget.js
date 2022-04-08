"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _util = require("../util");

var _TitleField = _interopRequireDefault(require("../TitleField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function selectValue(value, selected, all) {
  var at = all.indexOf(value);
  var updated = selected.slice(0, at).concat(value, selected.slice(at)); // As inserting values at predefined index positions doesn't work with empty
  // arrays, we need to reorder the updated selection to match the initial order

  return updated.sort(function (a, b) {
    return all.indexOf(a) > all.indexOf(b);
  });
}

function deselectValue(value, selected) {
  return selected.filter(function (v) {
    return v !== value;
  });
}

function CheckboxesWidget(props) {
  var id = props.id,
      disabled = props.disabled,
      options = props.options,
      value = props.value,
      autofocus = props.autofocus,
      readonly = props.readonly,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      formContext = props.formContext,
      schema = props.schema,
      uiSchema = props.uiSchema;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled,
      inline = options.inline;
  var title = schema.title;
  var semanticProps = (0, _util.getSemanticProps)({
    options: options,
    formContext: formContext,
    schema: schema,
    uiSchema: uiSchema,
    defaultSchemaProps: {
      inverted: false
    }
  });

  var _onChange = function _onChange(option) {
    return function (_ref) {
      var checked = _ref.target.checked;
      // eslint-disable-next-line no-shadow
      var all = enumOptions.map(function (_ref2) {
        var value = _ref2.value;
        return value;
      });

      if (checked) {
        onChange(selectValue(option.value, value, all));
      } else {
        onChange(deselectValue(option.value, value));
      }
    };
  };

  var _onBlur = function _onBlur() {
    return onBlur && onBlur(id, value);
  };

  var _onFocus = function _onFocus() {
    return onFocus && onFocus(id, value);
  };

  var inlineOption = inline ? {
    inline: true
  } : {
    grouped: true
  };
  return _react.default.createElement(_react.default.Fragment, null, title && _react.default.createElement(_TitleField.default, {
    title: title
  }), _react.default.createElement(_semanticUiReact.Form.Group, inlineOption, enumOptions.map(function (option, index) {
    var checked = value.indexOf(option.value) !== -1;
    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) !== -1;
    return _react.default.createElement(_semanticUiReact.Form.Checkbox, _extends({
      id: "".concat(id, "_").concat(index),
      key: "".concat(id, "_").concat(index),
      label: option.label
    }, semanticProps, {
      checked: checked,
      disabled: disabled || itemDisabled || readonly,
      autoFocus: autofocus && index === 0,
      onChange: _onChange(option),
      onBlur: _onBlur,
      onFocus: _onFocus
    }));
  })));
}

var _default = CheckboxesWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9DaGVja2JveGVzV2lkZ2V0L0NoZWNrYm94ZXNXaWRnZXQuanMiXSwibmFtZXMiOlsic2VsZWN0VmFsdWUiLCJ2YWx1ZSIsInNlbGVjdGVkIiwiYWxsIiwiYXQiLCJpbmRleE9mIiwidXBkYXRlZCIsInNsaWNlIiwiY29uY2F0Iiwic29ydCIsImEiLCJiIiwiZGVzZWxlY3RWYWx1ZSIsImZpbHRlciIsInYiLCJDaGVja2JveGVzV2lkZ2V0IiwicHJvcHMiLCJpZCIsImRpc2FibGVkIiwib3B0aW9ucyIsImF1dG9mb2N1cyIsInJlYWRvbmx5Iiwib25DaGFuZ2UiLCJvbkJsdXIiLCJvbkZvY3VzIiwiZm9ybUNvbnRleHQiLCJzY2hlbWEiLCJ1aVNjaGVtYSIsImVudW1PcHRpb25zIiwiZW51bURpc2FibGVkIiwiaW5saW5lIiwidGl0bGUiLCJzZW1hbnRpY1Byb3BzIiwiZGVmYXVsdFNjaGVtYVByb3BzIiwiaW52ZXJ0ZWQiLCJfb25DaGFuZ2UiLCJvcHRpb24iLCJjaGVja2VkIiwidGFyZ2V0IiwibWFwIiwiX29uQmx1ciIsIl9vbkZvY3VzIiwiaW5saW5lT3B0aW9uIiwiZ3JvdXBlZCIsImluZGV4IiwiaXRlbURpc2FibGVkIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEJDLFFBQTVCLEVBQXNDQyxHQUF0QyxFQUEyQztBQUN6QyxNQUFNQyxFQUFFLEdBQUdELEdBQUcsQ0FBQ0UsT0FBSixDQUFZSixLQUFaLENBQVg7QUFDQSxNQUFNSyxPQUFPLEdBQUdKLFFBQVEsQ0FBQ0ssS0FBVCxDQUFlLENBQWYsRUFBa0JILEVBQWxCLEVBQXNCSSxNQUF0QixDQUE2QlAsS0FBN0IsRUFBb0NDLFFBQVEsQ0FBQ0ssS0FBVCxDQUFlSCxFQUFmLENBQXBDLENBQWhCLENBRnlDLENBR3pDO0FBQ0E7O0FBQ0EsU0FBT0UsT0FBTyxD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QU0sRUFBRUksT0FUVjtBQVVFLE1BQUEsT0FBTyxFQUFFQztBQVZYLE9BREY7QUFjRCxHQWxCQSxDQURILENBRkYsQ0FERjtBQTBCRDs7ZUFDYzFCLGdCIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyxyZWFjdC9uby1hcnJheS1pbmRleC1rZXkgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IGdldFNlbWFudGljUHJvcHMgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5pbXBvcnQgVGl0bGVGaWVsZCBmcm9tIFwiLi4vVGl0bGVGaWVsZFwiO1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0VmFsdWUodmFsdWUsIHNlbGVjdGVkLCBhbGwpIHtcclxuICBjb25zdCBhdCA9IGFsbC5pbmRleE9mKHZhbHVlKTtcclxuICBjb25zdCB1cGRhdGVkID0gc2VsZWN0ZWQuc2xpY2UoMCwgYXQpLmNvbmNhdCh2YWx1ZSwgc2VsZWN0ZWQuc2xpY2UoYXQpKTtcclxuICAvLyBBcyBpbnNlcnRpbmcgdmFsdWVzIGF0IHByZWRlZmluZWQgaW5kZXggcG9zaXRpb25zIGRvZXNuJ3Qgd29yayB3aXRoIGVtcHR5XHJcbiAgLy8gYXJyYXlzLCB3ZSBuZWVkIHRvIHJlb3JkZXIgdGhlIHVwZGF0ZWQgc2VsZWN0aW9uIHRvIG1hdGNoIHRoZSBpbml0aWFsIG9yZGVyXHJcbiAgcmV0dXJuIHVwZGF0ZWQuc29ydCgoYSwgYikgPT4gYWxsLmluZGV4T2YoYSkgPiBhbGwuaW5kZXhPZihiKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlc2VsZWN0VmFsdWUodmFsdWUsIHNlbGVjdGVkKSB7XHJcbiAgcmV0dXJuIHNlbGVjdGVkLmZpbHRlcih2ID0+IHYgIT09IHZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ2hlY2tib3hlc1dpZGdldChwcm9wcykge1xyXG4gIGNvbnN0IHtcclxuICAgIGlkLFxyXG4gICAgZGlzYWJsZWQsXHJcbiAgICBvcHRpb25zLFxyXG4gICAgdmFsdWUsXHJcbiAgICBhdXRvZm9jdXMsXHJcbiAgICByZWFkb25seSxcclxuICAgIG9uQ2hhbmdlLFxyXG4gICAgb25CbHVyLFxyXG4gICAgb25Gb2N1cyxcclxuICAgIGZvcm1Db250ZXh0LFxyXG4gICAgc2NoZW1hLFxyXG4gICAgdWlTY2hlbWEsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHsgZW51bU9wdGlvbnMsIGVudW1EaXNhYmxlZCwgaW5saW5lIH0gPSBvcHRpb25zO1xyXG4gIGNvbnN0IHsgdGl0bGUgfSA9IHNjaGVtYTtcclxuICBjb25zdCBzZW1hbnRpY1Byb3BzID0gZ2V0U2VtYW50aWNQcm9wcyh7XHJcbiAgICBvcHRpb25zLFxyXG4gICAgZm9ybUNvbnRleHQsXHJcbiAgICBzY2hlbWEsXHJcbiAgICB1aVNjaGVtYSxcclxuICAgIGRlZmF1bHRTY2hlbWFQcm9wczoge1xyXG4gICAgICBpbnZlcnRlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICB9KTtcclxuICBjb25zdCBfb25DaGFuZ2UgPSBvcHRpb24gPT4gKHsgdGFyZ2V0OiB7IGNoZWNrZWQgfSB9KSA9PiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XHJcbiAgICBjb25zdCBhbGwgPSBlbnVtT3B0aW9ucy5tYXAoKHsgdmFsdWUgfSkgPT4gdmFsdWUpO1xyXG4gICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgb25DaGFuZ2Uoc2VsZWN0VmFsdWUob3B0aW9uLnZhbHVlLCB2YWx1ZSwgYWxsKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvbkNoYW5nZShkZXNlbGVjdFZhbHVlKG9wdGlvbi52YWx1ZSwgdmFsdWUpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBfb25CbHVyID0gKCkgPT4gb25CbHVyICYmIG9uQmx1cihpZCwgdmFsdWUpO1xyXG4gIGNvbnN0IF9vbkZvY3VzID0gKCkgPT4gb25Gb2N1cyAmJiBvbkZvY3VzKGlkLCB2YWx1ZSk7XHJcbiAgY29uc3QgaW5saW5lT3B0aW9uID0gaW5saW5lID8geyBpbmxpbmU6IHRydWUgfSA6IHsgZ3JvdXBlZDogdHJ1ZSB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIHt0aXRsZSAmJiA8VGl0bGVGaWVsZCB0aXRsZT17dGl0bGV9IC8+fVxyXG4gICAgICA8Rm9ybS5Hcm91cCB7Li4uaW5saW5lT3B0aW9ufT5cclxuICAgICAgICB7ZW51bU9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjaGVja2VkID0gdmFsdWUuaW5kZXhPZihvcHRpb24udmFsdWUpICE9PSAtMTtcclxuICAgICAgICAgIGNvbnN0IGl0ZW1EaXNhYmxlZCA9XHJcbiAgICAgICAgICAgIGVudW1EaXNhYmxlZCAmJiBlbnVtRGlzYWJsZWQuaW5kZXhPZihvcHRpb24udmFsdWUpICE9PSAtMTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGb3JtLkNoZWNrYm94XHJcbiAgICAgICAgICAgICAgaWQ9e2Ake2lkfV8ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAga2V5PXtgJHtpZH1fJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtvcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgey4uLnNlbWFudGljUHJvcHN9XHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgaXRlbURpc2FibGVkIHx8IHJlYWRvbmx5fVxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1cz17YXV0b2ZvY3VzICYmIGluZGV4ID09PSAwfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtfb25DaGFuZ2Uob3B0aW9uKX1cclxuICAgICAgICAgICAgICBvbkJsdXI9e19vbkJsdXJ9XHJcbiAgICAgICAgICAgICAgb25Gb2N1cz17X29uRm9jdXN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3hlc1dpZGdldDtcclxuIl19