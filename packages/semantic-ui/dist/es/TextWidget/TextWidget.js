function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/prop-types */
import React from "react";
import { Form } from "semantic-ui-react";
import { getSemanticProps } from "../util";
import { utils } from "@rjsf/core";
var getDisplayLabel = utils.getDisplayLabel;

function TextWidget(props) {
  var id = props.id,
      placeholder = props.placeholder,
      name = props.name,
      label = props.label,
      value = props.value,
      required = props.required,
      readonly = props.readonly,
      disabled = props.disabled,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      autofocus = props.autofocus,
      options = props.options,
      schema = props.schema,
      uiSchema = props.uiSchema,
      formContext = props.formContext;
  var semanticProps = getSemanticProps({
    formContext: formContext,
    options: options,
    uiSchema: uiSchema
  }); // eslint-disable-next-line no-shadow

  var _onChange = function _onChange(_ref) {
    var value = _ref.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur() {
    return onBlur && onBlur(id, value);
  };

  var _onFocus = function _onFocus() {
    return onFocus && onFocus(id, value);
  };

  var displayLabel = getDisplayLabel(schema, uiSchema
  /* TODO: , rootSchema */
  );
  return React.createElement(Form.Input, _extends({
    key: id,
    id: id,
    placeholder: placeholder,
    type: schema.type === 'string' ? 'text' : "".concat(schema.type),
    label: displayLabel ? label || schema.title : false,
    required: required,
    autoFocus: autofocus,
    disabled: disabled || readonly,
    name: name
  }, semanticProps, {
    value: value || value === 0 ? value : "",
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
}

export default TextWidget;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9UZXh0V2lkZ2V0L1RleHRXaWRnZXQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtIiwiZ2V0U2VtYW50aWNQcm9wcyIsInV0aWxzIiwiZ2V0RGlzcGxheUxhYmVsIiwiVGV4dFdpZGdldCIsInByb3BzIiwiaWQiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJsYWJlbCIsInZhbHVlIiwicmVxdWlyZWQiLCJyZWFkb25seSIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJvbkJsdXIiLCJvbkZvY3VzIiwiYXV0b2ZvY3VzIiwib3B0aW9ucyIsInNjaGVtYSIsInVpU2NoZW1hIiwiZm9ybUNvbnRleHQiLCJzZW1hbnRpY1Byb3BzIiwiX29uQ2hhbmdlIiwidGFyZ2V0IiwiZW1wdHlWYWx1ZSIsIl9vbkJsdXIiLCJfb25Gb2N1cyIsImRpc3BsYXlMYWJlbCIsInR5cGUiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLG1CQUFyQjtBQUNBLFNBQVNDLGdCQUFULFFBQWlDLFNBQWpDO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixZQUF0QjtJQUNRQyxlLEdBQW9CRCxLLENBQXBCQyxlOztBQUNSLFNBQVNDLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQUEsTUFFdkJDLEVBRnVCLEdBa0JyQkQsS0FsQnFCLENBRXZCQyxFQUZ1QjtBQUFBLE1BR3ZCQyxXQUh1QixHQWtCckJGLEtBbEJxQixDQUd2QkUsV0FIdUI7QUFBQSxNQUl2QkMsSUFKdUIsR0FrQnJCSCxLQWxCcUIsQ0FJdkJHLElBSnVCO0FBQUEsTUFLdkJDLEtBTHVCLEdBa0JyQkosS0FsQnFCLENBS3ZCSSxLQUx1QjtBQUFBLE1BTXZCQyxLQU51QixHQWtCckJMLEtBbEJxQixDQU12QkssS0FOdUI7QUFBQSxNQU92QkMsUUFQdUIsR0FrQnJCTixLQWxCcUIsQ0FPdkJNLFFBUHVCO0FBQUEsTUFRdkJDLFFBUnVCLEdBa0JyQlAsS0FsQnFCLENBUXZCTyxRQVJ1QjtBQUFBLE1BU3ZCQyxRQVR1QixHQWtCckJSLEtBbEJxQixDQVN2QlEsUUFUdUI7QUFBQSxNQVV2QkMsUUFWdUIsR0FrQnJCVCxLQWxCcUIsQ0FVdkJTLFFBVnVCO0FBQUEsTUFXdkJDLE1BWHVCLEdBa0JyQlYsS0FsQnFCLENBV3ZCVSxNQVh1QjtBQUFBLE1BWXZCQyxPQVp1QixHQWtCckJYLEtBbEJxQixDQVl2QlcsT0FadUI7QUFBQSxNQWF2QkMsU0FidUIsR0FrQnJCWixLQWxCcUIsQ0FhdkJZLFNBYnVCO0FBQUEsTUFjdkJDLE9BZHVCLEdBa0JyQmIsS0FsQnFCLENBY3ZCYSxPQWR1QjtBQUFBLE1BZXZCQyxNQWZ1QixHQWtCckJkLEtBbEJxQixDQWV2QmMsTUFmdUI7QUFBQSxNQWdCdkJDLFFBaEJ1QixHQWtCckJmLEtBbEJxQixDQWdCdkJlLFFBaEJ1QjtBQUFBLE1BaUJ2QkMsV0FqQnVCLEdBa0JyQmhCLEtBbEJxQixDQWlCdkJnQixXQWpCdUI7QUFtQnpCLE1BQU1DLGFBQWEsR0FBR3JCLGdCQUFnQixDQUNwQztBQUFFb0IsSUFBQUEsV0FBVyxFQUFYQSxXQUFGO0FBQ0VILElBQUFBLE9BQU8sRUFBUEEsT0FERjtBQUVFRSxJQUFBQSxRQUFRLEVBQVJBO0FBRkYsR0FEb0MsQ0FBdEMsQ0FuQnlCLENBd0J6Qjs7QUFDQSxNQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFFBQWFiLEtBQWIsUUFBR2MsTUFBSCxDQUFhZCxLQUFiO0FBQUEsV0FDaEJJLFFBQVEsQ0FBQ0osS0FBSyxLQUFLLEVBQVYsR0FBZVEsT0FBTyxDQUFDTyxVQUF2QixHQUFvQ2YsS0FBckMsQ0FEUTtBQUFBLEdBQWxCOztBQUVBLE1BQU1nQixPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFdBQU1YLE1BQU0sSUFBSUEsTUFBTSxDQUFDVCxFQUFELEVBQUtJLEtBQUwsQ0FBdEI7QUFBQSxHQUFoQjs7QUFDQSxNQUFNaUIsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxXQUFNWCxPQUFPLElBQUlBLE9BQU8sQ0FBQ1YsRUFBRCxFQUFLSSxLQUFMLENBQXhCO0FBQUEsR0FBakI7O0FBQ0EsTUFBTWtCLFlBQVksR0FBR3pCLGVBQWUsQ0FDbENnQixNQURrQyxFQUVsQ0M7QUFDQTtBQUhrQyxHQUFwQztBQU1BLFNBQ0Usb0JBQUMsSUFBRCxDQUFNLEtBQU47QUFDRSxJQUFBLEdBQUcsRUFBRWQsRUFEUDtBQUVFLElBQUEsRUFBRSxFQUFFQSxFQUZOO0FBR0UsSUFBQSxXQUFXLEVBQUVDLFdBSGY7QUFJRSxJQUFBLElBQUksRUFBRVksTUFBTSxDQUFDVSxJQUFQLEtBQWdCLFFBQWhCLEdBQTRCLE1BQTVCLGFBQXdDVixNQUFNLENBQUNVLElBQS9DLENBSlI7QUFLRSxJQUFBLEtBQUssRUFBRUQsWUFBWSxHQUFHbkIsS0FBSyxJQUFJVSxNQUFNLENBQUNXLEtBQW5CLEdBQTJCLEtBTGhEO0FBTUUsSUFBQSxRQUFRLEVBQUVuQixRQU5aO0FBT0UsSUFBQSxTQUFTLEVBQUVNLFNBUGI7QUFRRSxJQUFBLFFBQVEsRUFBRUosUUFBUSxJQUFJRCxRQVJ4QjtBQVNFLElBQUEsSUFBSSxFQUFFSjtBQVRSLEtBVU1jLGFBVk47QUFXRSxJQUFBLEtBQUssRUFBRVosS0FBSyxJQUFJQSxLQUFLLEtBQUssQ0FBbkIsR0FBdUJBLEtBQXZCLEdBQStCLEVBWHhDO0FBWUUsSUFBQSxRQUFRLEVBQUVhLFNBWlo7QUFhRSxJQUFBLE1BQU0sRUFBRUcsT0FiVjtBQWNFLElBQUEsT0FBTyxFQUFFQztBQWRYLEtBREY7QUFrQkQ7O0FBQ0QsZUFBZXZCLFVBQWYiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRTZW1hbnRpY1Byb3BzIH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwiQHJqc2YvY29yZVwiO1xyXG5jb25zdCB7IGdldERpc3BsYXlMYWJlbCB9ID0gdXRpbHM7XHJcbmZ1bmN0aW9uIFRleHRXaWRnZXQocHJvcHMpIHtcclxuICBjb25zdCB7XHJcbiAgICBpZCxcclxuICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgbmFtZSxcclxuICAgIGxhYmVsLFxyXG4gICAgdmFsdWUsXHJcbiAgICByZXF1aXJlZCxcclxuICAgIHJlYWRvbmx5LFxyXG4gICAgZGlzYWJsZWQsXHJcbiAgICBvbkNoYW5nZSxcclxuICAgIG9uQmx1cixcclxuICAgIG9uRm9jdXMsXHJcbiAgICBhdXRvZm9jdXMsXHJcbiAgICBvcHRpb25zLFxyXG4gICAgc2NoZW1hLFxyXG4gICAgdWlTY2hlbWEsXHJcbiAgICBmb3JtQ29udGV4dCxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3Qgc2VtYW50aWNQcm9wcyA9IGdldFNlbWFudGljUHJvcHMoXHJcbiAgICB7IGZvcm1Db250ZXh0LFxyXG4gICAgICBvcHRpb25zLFxyXG4gICAgICB1aVNjaGVtYSxcclxuICB9KTtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XHJcbiAgY29uc3QgX29uQ2hhbmdlID0gKHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT5cclxuICAgIG9uQ2hhbmdlKHZhbHVlID09PSBcIlwiID8gb3B0aW9ucy5lbXB0eVZhbHVlIDogdmFsdWUpO1xyXG4gIGNvbnN0IF9vbkJsdXIgPSAoKSA9PiBvbkJsdXIgJiYgb25CbHVyKGlkLCB2YWx1ZSk7XHJcbiAgY29uc3QgX29uRm9jdXMgPSAoKSA9PiBvbkZvY3VzICYmIG9uRm9jdXMoaWQsIHZhbHVlKTtcclxuICBjb25zdCBkaXNwbGF5TGFiZWwgPSBnZXREaXNwbGF5TGFiZWwoXHJcbiAgICBzY2hlbWEsXHJcbiAgICB1aVNjaGVtYVxyXG4gICAgLyogVE9ETzogLCByb290U2NoZW1hICovXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtLklucHV0XHJcbiAgICAgIGtleT17aWR9XHJcbiAgICAgIGlkPXtpZH1cclxuICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICB0eXBlPXtzY2hlbWEudHlwZSA9PT0gJ3N0cmluZycgPyAgJ3RleHQnIDogYCR7c2NoZW1hLnR5cGV9YH1cclxuICAgICAgbGFiZWw9e2Rpc3BsYXlMYWJlbCA/IGxhYmVsIHx8IHNjaGVtYS50aXRsZSA6IGZhbHNlfVxyXG4gICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgIGF1dG9Gb2N1cz17YXV0b2ZvY3VzfVxyXG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgcmVhZG9ubHl9XHJcbiAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgIHsuLi5zZW1hbnRpY1Byb3BzfVxyXG4gICAgICB2YWx1ZT17dmFsdWUgfHwgdmFsdWUgPT09IDAgPyB2YWx1ZSA6IFwiXCJ9XHJcbiAgICAgIG9uQ2hhbmdlPXtfb25DaGFuZ2V9XHJcbiAgICAgIG9uQmx1cj17X29uQmx1cn1cclxuICAgICAgb25Gb2N1cz17X29uRm9jdXN9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVGV4dFdpZGdldDtcclxuIl19