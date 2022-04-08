function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/prop-types,react/no-array-index-key */
import React from "react";
import { Form } from "semantic-ui-react";
import { getSemanticProps } from "../util";
import TitleField from "../TitleField";

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
  var semanticProps = getSemanticProps({
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
  return React.createElement(React.Fragment, null, title && React.createElement(TitleField, {
    title: title
  }), React.createElement(Form.Group, inlineOption, enumOptions.map(function (option, index) {
    var checked = value.indexOf(option.value) !== -1;
    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) !== -1;
    return React.createElement(Form.Checkbox, _extends({
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

export default CheckboxesWidget;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9DaGVja2JveGVzV2lkZ2V0L0NoZWNrYm94ZXNXaWRnZXQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtIiwiZ2V0U2VtYW50aWNQcm9wcyIsIlRpdGxlRmllbGQiLCJzZWxlY3RWYWx1ZSIsInZhbHVlIiwic2VsZWN0ZWQiLCJhbGwiLCJhdCIsImluZGV4T2YiLCJ1cGRhdGVkIiwic2xpY2UiLCJjb25jYXQiLCJzb3J0IiwiYSIsImIiLCJkZXNlbGVjdFZhbHVlIiwiZmlsdGVyIiwidiIsIkNoZWNrYm94ZXNXaWRnZXQiLCJwcm9wcyIsImlkIiwiZGlzYWJsZWQiLCJvcHRpb25zIiwiYXV0b2ZvY3VzIiwicmVhZG9ubHkiLCJvbkNoYW5nZSIsIm9uQmx1ciIsIm9uRm9jdXMiLCJmb3JtQ29udGV4dCIsInNjaGVtYSIsInVpU2NoZW1hIiwiZW51bU9wdGlvbnMiLCJlbnVtRGlzYWJsZWQiLCJpbmxpbmUiLCJ0aXRsZSIsInNlbWFudGljUHJvcHMiLCJkZWZhdWx0U2NoZW1hUHJvcHMiLCJpbnZlcnRlZCIsIl9vbkNoYW5nZSIsIm9wdGlvbiIsImNoZWNrZWQiLCJ0YXJnZXQiLCJtYXAiLCJfb25CbHVyIiwiX29uRm9jdXMiLCJpbmxpbmVPcHRpb24iLCJncm91cGVkIiwiaW5kZXgiLCJpdGVtRGlzYWJsZWQiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLG1CQUFyQjtBQUNBLFNBQVNDLGdCQUFULFFBQWlDLFNBQWpDO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixlQUF2Qjs7QUFFQSxTQUFTQyxXQUFULENBQXFCQyxLQUFyQixFQUE0QkMsUUFBNUIsRUFBc0NDLEdBQXRDLEVBQTJDO0FBQ3pDLE1BQU1DLEVBQUUsR0FBR0QsR0FBRyxDQUFDRSxPQUFKLENBQVlKLEtBQVosQ0FBWDtBQUNBLE1BQU1LLE9BQU8sR0FBR0osUUFBUSxDQUFDSyxL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bkIsUUFBUSxJQUFJMkIsWUFBWixJQUE0QnhCLFFBTnhDO0FBT0UsTUFBQSxTQUFTLEVBQUVELFNBQVMsSUFBSXdCLEtBQUssS0FBSyxDQVBwQztBQVFFLE1BQUEsUUFBUSxFQUFFVCxTQUFTLENBQUNDLE1BQUQsQ0FSckI7QUFTRSxNQUFBLE1BQU0sRUFBRUksT0FUVjtBQVVFLE1BQUEsT0FBTyxFQUFFQztBQVZYLE9BREY7QUFjRCxHQWxCQSxDQURILENBRkYsQ0FERjtBQTBCRDs7QUFDRCxlQUFlMUIsZ0JBQWYiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzLHJlYWN0L25vLWFycmF5LWluZGV4LWtleSAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0U2VtYW50aWNQcm9wcyB9IGZyb20gXCIuLi91dGlsXCI7XHJcbmltcG9ydCBUaXRsZUZpZWxkIGZyb20gXCIuLi9UaXRsZUZpZWxkXCI7XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RWYWx1ZSh2YWx1ZSwgc2VsZWN0ZWQsIGFsbCkge1xyXG4gIGNvbnN0IGF0ID0gYWxsLmluZGV4T2YodmFsdWUpO1xyXG4gIGNvbnN0IHVwZGF0ZWQgPSBzZWxlY3RlZC5zbGljZSgwLCBhdCkuY29uY2F0KHZhbHVlLCBzZWxlY3RlZC5zbGljZShhdCkpO1xyXG4gIC8vIEFzIGluc2VydGluZyB2YWx1ZXMgYXQgcHJlZGVmaW5lZCBpbmRleCBwb3NpdGlvbnMgZG9lc24ndCB3b3JrIHdpdGggZW1wdHlcclxuICAvLyBhcnJheXMsIHdlIG5lZWQgdG8gcmVvcmRlciB0aGUgdXBkYXRlZCBzZWxlY3Rpb24gdG8gbWF0Y2ggdGhlIGluaXRpYWwgb3JkZXJcclxuICByZXR1cm4gdXBkYXRlZC5zb3J0KChhLCBiKSA9PiBhbGwuaW5kZXhPZihhKSA+IGFsbC5pbmRleE9mKGIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVzZWxlY3RWYWx1ZSh2YWx1ZSwgc2VsZWN0ZWQpIHtcclxuICByZXR1cm4gc2VsZWN0ZWQuZmlsdGVyKHYgPT4gdiAhPT0gdmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDaGVja2JveGVzV2lkZ2V0KHByb3BzKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgaWQsXHJcbiAgICBkaXNhYmxlZCxcclxuICAgIG9wdGlvbnMsXHJcbiAgICB2YWx1ZSxcclxuICAgIGF1dG9mb2N1cyxcclxuICAgIHJlYWRvbmx5LFxyXG4gICAgb25DaGFuZ2UsXHJcbiAgICBvbkJsdXIsXHJcbiAgICBvbkZvY3VzLFxyXG4gICAgZm9ybUNvbnRleHQsXHJcbiAgICBzY2hlbWEsXHJcbiAgICB1aVNjaGVtYSxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgeyBlbnVtT3B0aW9ucywgZW51bURpc2FibGVkLCBpbmxpbmUgfSA9IG9wdGlvbnM7XHJcbiAgY29uc3QgeyB0aXRsZSB9ID0gc2NoZW1hO1xyXG4gIGNvbnN0IHNlbWFudGljUHJvcHMgPSBnZXRTZW1hbnRpY1Byb3BzKHtcclxuICAgIG9wdGlvbnMsXHJcbiAgICBmb3JtQ29udGV4dCxcclxuICAgIHNjaGVtYSxcclxuICAgIHVpU2NoZW1hLFxyXG4gICAgZGVmYXVsdFNjaGVtYVByb3BzOiB7XHJcbiAgICAgIGludmVydGVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgIH0pO1xyXG4gIGNvbnN0IF9vbkNoYW5nZSA9IG9wdGlvbiA9PiAoeyB0YXJnZXQ6IHsgY2hlY2tlZCB9IH0pID0+IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcclxuICAgIGNvbnN0IGFsbCA9IGVudW1PcHRpb25zLm1hcCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSk7XHJcbiAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICBvbkNoYW5nZShzZWxlY3RWYWx1ZShvcHRpb24udmFsdWUsIHZhbHVlLCBhbGwpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9uQ2hhbmdlKGRlc2VsZWN0VmFsdWUob3B0aW9uLnZhbHVlLCB2YWx1ZSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IF9vbkJsdXIgPSAoKSA9PiBvbkJsdXIgJiYgb25CbHVyKGlkLCB2YWx1ZSk7XHJcbiAgY29uc3QgX29uRm9jdXMgPSAoKSA9PiBvbkZvY3VzICYmIG9uRm9jdXMoaWQsIHZhbHVlKTtcclxuICBjb25zdCBpbmxpbmVPcHRpb24gPSBpbmxpbmUgPyB7IGlubGluZTogdHJ1ZSB9IDogeyBncm91cGVkOiB0cnVlIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAge3RpdGxlICYmIDxUaXRsZUZpZWxkIHRpdGxlPXt0aXRsZX0gLz59XHJcbiAgICAgIDxGb3JtLkdyb3VwIHsuLi5pbmxpbmVPcHRpb259PlxyXG4gICAgICAgIHtlbnVtT3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSB2YWx1ZS5pbmRleE9mKG9wdGlvbi52YWx1ZSkgIT09IC0xO1xyXG4gICAgICAgICAgY29uc3QgaXRlbURpc2FibGVkID1cclxuICAgICAgICAgICAgZW51bURpc2FibGVkICYmIGVudW1EaXNhYmxlZC5pbmRleE9mKG9wdGlvbi52YWx1ZSkgIT09IC0xO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZvcm0uQ2hlY2tib3hcclxuICAgICAgICAgICAgICBpZD17YCR7aWR9XyR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICBrZXk9e2Ake2lkfV8ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgbGFiZWw9e29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICB7Li4uc2VtYW50aWNQcm9wc31cclxuICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCBpdGVtRGlzYWJsZWQgfHwgcmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzPXthdXRvZm9jdXMgJiYgaW5kZXggPT09IDB9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e19vbkNoYW5nZShvcHRpb24pfVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17X29uQmx1cn1cclxuICAgICAgICAgICAgICBvbkZvY3VzPXtfb25Gb2N1c31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveGVzV2lkZ2V0O1xyXG4iXX0=