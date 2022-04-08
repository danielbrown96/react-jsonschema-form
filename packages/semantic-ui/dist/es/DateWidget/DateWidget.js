function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/prop-types */
import React from "react";
import { getSemanticProps } from "../util";
import { Form } from "semantic-ui-react";
import { utils } from "@rjsf/core";
var getDisplayLabel = utils.getDisplayLabel;

function DateWidget(props) {
  var id = props.id,
      required = props.required,
      readonly = props.readonly,
      disabled = props.disabled,
      name = props.name,
      label = props.label,
      value = props.value,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      autofocus = props.autofocus,
      options = props.options,
      formContext = props.formContext,
      schema = props.schema,
      uiSchema = props.uiSchema;
  var semanticProps = getSemanticProps({
    uiSchema: uiSchema,
    schema: schema,
    formContext: formContext,
    options: options
  });

  var _onChange = function _onChange(_ref) {
    var value = _ref.target.value;
    return onChange && onChange(value);
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
    type: "date",
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

export default DateWidget;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9EYXRlV2lkZ2V0L0RhdGVXaWRnZXQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJnZXRTZW1hbnRpY1Byb3BzIiwiRm9ybSIsInV0aWxzIiwiZ2V0RGlzcGxheUxhYmVsIiwiRGF0ZVdpZGdldCIsInByb3BzIiwiaWQiLCJyZXF1aXJlZCIsInJlYWRvbmx5IiwiZGlzYWJsZWQiLCJuYW1lIiwibGFiZWwiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwib25CbHVyIiwib25Gb2N1cyIsImF1dG9mb2N1cyIsIm9wdGlvbnMiLCJmb3JtQ29udGV4dCIsInNjaGVtYSIsInVpU2NoZW1hIiwic2VtYW50aWNQcm9wcyIsIl9vbkNoYW5nZSIsInRhcmdldCIsIl9vbkJsdXIiLCJfb25Gb2N1cyIsImRpc3BsYXlMYWJlbCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLGdCQUFULFFBQWlDLFNBQWpDO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixtQkFBckI7QUFDQSxTQUFVQyxLQUFWLFFBQXVCLFlBQXZCO0lBRVFDLGUsR0FBb0JELEssQ0FBcEJDLGU7O0FBQ1IsU0FBU0MsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQSxNQUV2QkMsRUFGdUIsR0FpQnJCRCxLQWpCcUIsQ0FFdkJDLEVBRnVCO0FBQUEsTUFHdkJDLFFBSHVCLEdBaUJyQkYsS0FqQnFCLENBR3ZCRSxRQUh1QjtBQUFBLE1BSXZCQyxRQUp1QixHQWlCckJILEtBakJxQixDQUl2QkcsUUFKdUI7QUFBQSxNQUt2QkMsUUFMdUIsR0FpQnJCSixLQWpCcUIsQ0FLdkJJLFFBTHVCO0FBQUEsTUFNdkJDLElBTnVCLEdBaUJyQkwsS0FqQnFCLENBTXZCSyxJQU51QjtBQUFBLE1BT3ZCQyxLQVB1QixHQWlCckJOLEtBakJxQixDQU92Qk0sS0FQdUI7QUFBQSxNQVF2QkMsS0FSdUIsR0FpQnJCUCxLQWpCcUIsQ0FRdkJPLEtBUnVCO0FBQUEsTUFTdkJDLFFBVHVCLEdBaUJyQlIsS0FqQnFCLENBU3ZCUSxRQVR1QjtBQUFBLE1BVXZCQyxNQVZ1QixHQWlCckJULEtBakJxQixDQVV2QlMsTUFWdUI7QUFBQSxNQVd2QkMsT0FYdUIsR0FpQnJCVixLQWpCcUIsQ0FXdkJVLE9BWHVCO0FBQUEsTUFZdkJDLFNBWnVCLEdBaUJyQlgsS0FqQnFCLENBWXZCVyxTQVp1QjtBQUFBLE1BYXZCQyxPQWJ1QixHQWlCckJaLEtBakJxQixDQWF2QlksT0FidUI7QUFBQSxNQWN2QkMsV0FkdUIsR0FpQnJCYixLQWpCcUIsQ0FjdkJhLFdBZHVCO0FBQUEsTUFldkJDLE1BZnVCLEdBaUJyQmQsS0FqQnFCLENBZXZCYyxNQWZ1QjtBQUFBLE1BZ0J2QkMsUUFoQnVCLEdBaUJyQmYsS0FqQnFCLENBZ0J2QmUsUUFoQnVCO0FBa0J6QixNQUFNQyxhQUFhLEdBQUdyQixnQkFBZ0IsQ0FBQztBQUNyQ29CLElBQUFBLFFBQVEsRUFBUkEsUUFEcUM7QUFFckNELElBQUFBLE1BQU0sRUFBTkEsTUFGcUM7QUFHckNELElBQUFBLFdBQVcsRUFBWEEsV0FIcUM7QUFJckNELElBQUFBLE9BQU8sRUFBUEE7QUFKcUMsR0FBRCxDQUF0Qzs7QUFNQSxNQUFNSyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFFBQWFWLEtBQWIsUUFBR1csTUFBSCxDQUFhWCxLQUFiO0FBQUEsV0FBMkJDLFFBQVEsSUFBSUEsUUFBUSxDQUFDRCxLQUFELENBQS9DO0FBQUEsR0FBbEI7O0FBQ0EsTUFBTVksT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxXQUFNVixNQUFNLElBQUlBLE1BQU0sQ0FBQ1IsRUFBRCxFQUFLTSxLQUFMLENBQXRCO0FBQUEsR0FBaEI7O0FBQ0EsTUFBTWEsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxXQUFNVixPQUFPLElBQUlBLE9BQU8sQ0FBQ1QsRUFBRCxFQUFLTSxLQUFMLENBQXhCO0FBQUEsR0FBakI7O0FBQ0EsTUFBTWMsWUFBWSxHQUFHdkIsZUFBZSxDQUNsQ2dCLE1BRGtDLEVBRWxDQztBQUNBO0FBSGtDLEdBQXBDO0FBS0EsU0FDRSxvQkFBQyxJQUFELENBQU0sS0FBTjtBQUNBLElBQUEsR0FBRyxFQUFFZCxFQURMO0FBRUEsSUFBQSxFQUFFLEVBQUVBLEVBRko7QUFHQSxJQUFBLElBQUksRUFBQyxNQUhMO0FBSUEsSUFBQSxLQUFLLEVBQUVvQixZQUFZLEdBQUdmLEtBQUssSUFBSVEsTUFBTSxDQUFDUSxLQUFuQixHQUEyQixLQUo5QztBQUtBLElBQUEsUUFBUSxFQUFFcEIsUUFMVjtBQU1BLElBQUEsU0FBUyxFQUFFUyxTQU5YO0FBT0EsSUFBQSxRQUFRLEVBQUVQLFFBQVEsSUFBSUQsUUFQdEI7QUFRQSxJQUFBLElBQUksRUFBRUU7QUFSTixLQVNJVyxhQVRKO0FBVUEsSUFBQSxLQUFLLEVBQUVULEtBQUssSUFBSUEsS0FBSyxLQUFLLENBQW5CLEdBQXVCQSxLQUF2QixHQUErQixFQVZ0QztBQVdBLElBQUEsUUFBUSxFQUFFVSxTQVhWO0FBWUEsSUFBQSxNQUFNLEVBQUVFLE9BWlI7QUFhQSxJQUFBLE9BQU8sRUFBRUM7QUFiVCxLQURGO0FBaUJEOztBQUNELGVBQWVyQixVQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldFNlbWFudGljUHJvcHMgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7ICB1dGlscyB9IGZyb20gXCJAcmpzZi9jb3JlXCI7XHJcblxyXG5jb25zdCB7IGdldERpc3BsYXlMYWJlbCB9ID0gdXRpbHM7XHJcbmZ1bmN0aW9uIERhdGVXaWRnZXQocHJvcHMpIHtcclxuICBjb25zdCB7XHJcbiAgICBpZCxcclxuICAgIHJlcXVpcmVkLFxyXG4gICAgcmVhZG9ubHksXHJcbiAgICBkaXNhYmxlZCxcclxuICAgIG5hbWUsXHJcbiAgICBsYWJlbCxcclxuICAgIHZhbHVlLFxyXG4gICAgb25DaGFuZ2UsXHJcbiAgICBvbkJsdXIsXHJcbiAgICBvbkZvY3VzLFxyXG4gICAgYXV0b2ZvY3VzLFxyXG4gICAgb3B0aW9ucyxcclxuICAgIGZvcm1Db250ZXh0LFxyXG4gICAgc2NoZW1hLFxyXG4gICAgdWlTY2hlbWEsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHNlbWFudGljUHJvcHMgPSBnZXRTZW1hbnRpY1Byb3BzKHtcclxuICAgIHVpU2NoZW1hLFxyXG4gICAgc2NoZW1hLFxyXG4gICAgZm9ybUNvbnRleHQsXHJcbiAgICBvcHRpb25zLFxyXG4gIH0pO1xyXG4gIGNvbnN0IF9vbkNoYW5nZSA9ICh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IG9uQ2hhbmdlICYmIG9uQ2hhbmdlKHZhbHVlKTtcclxuICBjb25zdCBfb25CbHVyID0gKCkgPT4gb25CbHVyICYmIG9uQmx1cihpZCwgdmFsdWUpO1xyXG4gIGNvbnN0IF9vbkZvY3VzID0gKCkgPT4gb25Gb2N1cyAmJiBvbkZvY3VzKGlkLCB2YWx1ZSk7XHJcbiAgY29uc3QgZGlzcGxheUxhYmVsID0gZ2V0RGlzcGxheUxhYmVsKFxyXG4gICAgc2NoZW1hLFxyXG4gICAgdWlTY2hlbWFcclxuICAgIC8qIFRPRE86ICwgcm9vdFNjaGVtYSAqL1xyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtLklucHV0XHJcbiAgICBrZXk9e2lkfVxyXG4gICAgaWQ9e2lkfVxyXG4gICAgdHlwZT1cImRhdGVcIlxyXG4gICAgbGFiZWw9e2Rpc3BsYXlMYWJlbCA/IGxhYmVsIHx8IHNjaGVtYS50aXRsZSA6IGZhbHNlfVxyXG4gICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgYXV0b0ZvY3VzPXthdXRvZm9jdXN9XHJcbiAgICBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgcmVhZG9ubHl9XHJcbiAgICBuYW1lPXtuYW1lfVxyXG4gICAgey4uLnNlbWFudGljUHJvcHN9XHJcbiAgICB2YWx1ZT17dmFsdWUgfHwgdmFsdWUgPT09IDAgPyB2YWx1ZSA6IFwiXCJ9XHJcbiAgICBvbkNoYW5nZT17X29uQ2hhbmdlfVxyXG4gICAgb25CbHVyPXtfb25CbHVyfVxyXG4gICAgb25Gb2N1cz17X29uRm9jdXN9XHJcbiAgLz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERhdGVXaWRnZXQ7XHJcbiJdfQ==