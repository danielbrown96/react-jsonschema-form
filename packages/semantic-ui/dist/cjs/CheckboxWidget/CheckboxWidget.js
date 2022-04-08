"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@rjsf/core");

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var getDisplayLabel = _core.utils.getDisplayLabel;

function CheckboxWidget(props) {
  var id = props.id,
      value = props.value,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      label = props.label,
      autofocus = props.autofocus,
      onChange = props.onChange,
      onBlur = props.onBlur,
      options = props.options,
      onFocus = props.onFocus,
      formContext = props.formContext,
      schema = props.schema,
      uiSchema = props.uiSchema;
  var semanticProps = (0, _util.getSemanticProps)({
    options: options,
    formContext: formContext,
    schema: schema,
    uiSchema: uiSchema,
    defaultSchemaProps: {
      inverted: false
    }
  });
  var displayLabel = getDisplayLabel(schema, uiSchema
  /* TODO: , rootSchema */
  );

  var _onChange = function _onChange(event, data) {
    return onChange && onChange(data.checked);
  };

  var _onBlur = function _onBlur() {
    return onBlur && onBlur(id, value);
  };

  var _onFocus = function _onFocus() {
    return onFocus && onFocus(id, value);
  };

  var checked = value == "true" || value == true;
  return _react.default.createElement(_semanticUiReact.Form.Checkbox, _extends({
    id: id,
    disabled: disabled || readonly,
    autoFocus: autofocus
  }, semanticProps, {
    checked: typeof value === "undefined" ? false : checked,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus,
    required: required,
    label: displayLabel ? label || schema.title : false
  }));
}

var _default = CheckboxWidget;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9DaGVja2JveFdpZGdldC9DaGVja2JveFdpZGdldC5qcyJdLCJuYW1lcyI6WyJnZXREaXNwbGF5TGFiZWwiLCJ1dGlscyIsIkNoZWNrYm94V2lkZ2V0IiwicHJvcHMiLCJpZCIsInZhbHVlIiwicmVxdWlyZWQiLCJkaXNhYmxlZCIsInJlYWRvbmx5IiwibGFiZWwiLCJhdXRvZm9jdXMiLCJvbkNoYW5nZSIsIm9uQmx1ciIsIm9wdGlvbnMiLCJvbkZvY3VzIiwiZm9ybUNvbnRleHQiLCJzY2hlbWEiLCJ1aVNjaGVtYSIsInNlbWFudGljUHJvcHMiLCJkZWZhdWx0U2NoZW1hUHJvcHMiLCJpbnZlcnRlZCIsImRpc3BsYXlMYWJlbCIsIl9vbkNoYW5nZSIsImV2ZW50IiwiZGF0YSIsImNoZWNrZWQiLCJfb25CbHVyIiwiX29uRm9jdXMiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7SUFDUUEsZSxHQUFvQkMsVyxDQUFwQkQsZTs7QUFDUixTQUFTRSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBLE1BRTNCQyxFQUYyQixHQWdCekJELEtBaEJ5QixDQUUzQkMsRUFGMkI7QUFBQSxNQUczQkMsS0FIMkIsR0FnQnpCRixLQWhCeUIsQ0FHM0JFLEtBSDJCO0FBQUEsTUFJM0JDLFFBSjJCLEdBZ0J6QkgsS0FoQnlCLENBSTNCRyxRQUoyQjtBQUFBLE1BSzNCQyxRQUwyQixHQWdCekJKLEtBaEJ5QixDQUszQkksUUFMMkI7QUFBQSxNQU0zQkMsUUFOMkIsR0FnQnpCTCxLQWhCeUIsQ0FNM0JLLFFBTjJCO0FBQUEsTUFPM0JDLEtBUDJCLEdBZ0J6Qk4sS0FoQnlCLENBTzNCTSxLQVAyQjtBQUFBLE1BUTNCQyxTQVIyQixHQWdCekJQLEtBaEJ5QixDQVEzQk8sU0FSMkI7QUFBQSxNQVMzQkMsUUFUMkIsR0FnQnpCUixLQWhCeUIsQ0FTM0JRLFFBVDJCO0FBQUEsTUFVM0JDLE1BVjJCLEdBZ0J6QlQsS0FoQnlCLENBVTNCUyxNQVYyQjtBQUFBLE1BVzNCQyxPQVgyQixHQWdCekJWLEtBaEJ5QixDQVczQlUsT0FYMkI7QUFBQSxNQVkzQkMsT0FaMkIsR0FnQnpCWCxLQWhCeUIsQ0FZM0JXLE9BWjJCO0FBQUEsTUFhM0JDLFdBYjJCLEdBZ0J6QlosS0FoQnlCLENBYTNCWSxXQWIyQjtBQUFBLE1BYzNCQyxNQWQyQixHQWdCekJiLEtBaEJ5QixDQWMzQmEsTUFkMkI7QUFBQSxNQWUzQkMsUUFmMkIsR0FnQnpCZCxLQWhCeUIsQ0FlM0JjLFFBZjJCO0FBaUI3QixNQUFNQyxhQUFhLEdBQUcsNEJBQWlCO0FBQ3JDTCxJQUFBQSxPQUFPLEVBQVBBLE9BRHFDO0FBRXJDRSxJQUFBQSxXQUFXLEVBQVhBLFdBRnFDO0FBR3JDQyxJQUFBQSxNQUFNLEVBQU5BLE1BSHFDO0FBSXJDQyxJQUFBQSxRQUFRLEVBQVJBLFFBSnFDO0FBS3JDRSxJQUFBQSxrQkFBa0IsRUFBRTtBQUNsQkMsTUFBQUEsUUFBUSxFQUFFO0FBRFE7QUFMaUIsR0FBakIsQ0FBdEI7QUFTQyxNQUFNQyxZQUFZLEdBQUdyQixlQUFlLENBQ25DZ0IsTUFEbUMsRUFFbkNDO0FBQ0E7QUFIbUMsR0FBcEM7O0FBS0QsTUFBTUssU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFRQyxJQUFSO0FBQUEsV0FBaUJiLFFBQVEsSUFBSUEsUUFBUSxDQUFDYSxJQUFJLENBQUNDLE9BQU4sQ0FBckM7QUFBQSxHQUFsQjs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFdBQU1kLE1BQU0sSUFBSUEsTUFBTSxDQUFDUixFQUFELEVBQUtDLEtBQUwsQ0FBdEI7QUFBQSxHQUFoQjs7QUFDQSxNQUFNc0IsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxXQUFNYixPQUFPLElBQUlBLE9BQU8sQ0FBQ1YsRUFBRCxFQUFLQyxLQUFMLENBQXhCO0FBQUEsR0FBakI7O0FBQ0EsTUFBTW9CLE9BQU8sR0FBR3BCLEtBQUssSUFBSSxNQUFULElBQW1CQSxLQUFLLElBQUksSUFBNUM7QUFDQSxTQUNFLDZCQUFDLHFCQUFELENBQU0sUUFBTjtBQUNFLElBQUEsRUFBRSxFQUFFRCxFQUROO0FBRUUsSUFBQSxRQUFRLEVBQUVHLFFBQVEsSUFBSUMsUUFGeEI7QUFHRSxJQUFBLFNBQVMsRUFBRUU7QUFIYixLQUlNUSxhQUpOO0FBS0UsSUFBQSxPQUFPLEVBQUUsT0FBT2IsS0FBUCxLQUFpQixXQUFqQixHQUErQixLQUEvQixHQUF1Q29CLE9BTGxEO0FBTUUsSUFBQSxRQUFRLEVBQUVILFNBTlo7QUFPRSxJQUFBLE1BQU0sRUFBRUksT0FQVjtBQVFFLElBQUEsT0FBTyxFQUFFQyxRQVJYO0FBU0UsSUFBQSxRQUFRLEVBQUVyQixRQVRaO0FBVUUsSUFBQSxLQUFLLEVBQUVlLFlBQVksR0FBR1osS0FBSyxJQUFJTyxNQUFNLENBQUNZLEtBQW5CLEdBQTJCO0FBVmhELEtBREY7QUFjRDs7ZUFDYzFCLGMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXHJcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSBcIkByanNmL2NvcmVcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IGdldFNlbWFudGljUHJvcHMgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5jb25zdCB7IGdldERpc3BsYXlMYWJlbCB9ID0gdXRpbHM7XHJcbmZ1bmN0aW9uIENoZWNrYm94V2lkZ2V0KHByb3BzKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgaWQsXHJcbiAgICB2YWx1ZSxcclxuICAgIHJlcXVpcmVkLFxyXG4gICAgZGlzYWJsZWQsXHJcbiAgICByZWFkb25seSxcclxuICAgIGxhYmVsLFxyXG4gICAgYXV0b2ZvY3VzLFxyXG4gICAgb25DaGFuZ2UsXHJcbiAgICBvbkJsdXIsXHJcbiAgICBvcHRpb25zLFxyXG4gICAgb25Gb2N1cyxcclxuICAgIGZvcm1Db250ZXh0LFxyXG4gICAgc2NoZW1hLFxyXG4gICAgdWlTY2hlbWEsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHNlbWFudGljUHJvcHMgPSBnZXRTZW1hbnRpY1Byb3BzKHtcclxuICAgIG9wdGlvbnMsXHJcbiAgICBmb3JtQ29udGV4dCxcclxuICAgIHNjaGVtYSxcclxuICAgIHVpU2NoZW1hLFxyXG4gICAgZGVmYXVsdFNjaGVtYVByb3BzOiB7XHJcbiAgICAgIGludmVydGVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgIH0pO1xyXG4gICBjb25zdCBkaXNwbGF5TGFiZWwgPSBnZXREaXNwbGF5TGFiZWwoXHJcbiAgICBzY2hlbWEsXHJcbiAgICB1aVNjaGVtYVxyXG4gICAgLyogVE9ETzogLCByb290U2NoZW1hICovXHJcbiAgKTtcclxuICBjb25zdCBfb25DaGFuZ2UgPSAoZXZlbnQsIGRhdGEpID0+IG9uQ2hhbmdlICYmIG9uQ2hhbmdlKGRhdGEuY2hlY2tlZCk7XHJcbiAgY29uc3QgX29uQmx1ciA9ICgpID0+IG9uQmx1ciAmJiBvbkJsdXIoaWQsIHZhbHVlKTtcclxuICBjb25zdCBfb25Gb2N1cyA9ICgpID0+IG9uRm9jdXMgJiYgb25Gb2N1cyhpZCwgdmFsdWUpO1xyXG4gIGNvbnN0IGNoZWNrZWQgPSB2YWx1ZSA9PSBcInRydWVcIiB8fCB2YWx1ZSA9PSB0cnVlO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybS5DaGVja2JveFxyXG4gICAgICBpZD17aWR9XHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCByZWFkb25seX1cclxuICAgICAgYXV0b0ZvY3VzPXthdXRvZm9jdXN9XHJcbiAgICAgIHsuLi5zZW1hbnRpY1Byb3BzfVxyXG4gICAgICBjaGVja2VkPXt0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIgPyBmYWxzZSA6IGNoZWNrZWR9XHJcbiAgICAgIG9uQ2hhbmdlPXtfb25DaGFuZ2V9XHJcbiAgICAgIG9uQmx1cj17X29uQmx1cn1cclxuICAgICAgb25Gb2N1cz17X29uRm9jdXN9XHJcbiAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgbGFiZWw9e2Rpc3BsYXlMYWJlbCA/IGxhYmVsIHx8IHNjaGVtYS50aXRsZSA6IGZhbHNlfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94V2lkZ2V0O1xyXG4iXX0=