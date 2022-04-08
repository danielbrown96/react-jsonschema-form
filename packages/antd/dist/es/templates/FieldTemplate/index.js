function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import React from 'react';
import Form from 'antd/lib/form';
import WrapIfAdditional from './WrapIfAdditional';
var VERTICAL_LABEL_COL = {
  span: 24
};
var VERTICAL_WRAPPER_COL = {
  span: 24
};

var FieldTemplate = function FieldTemplate(_ref) {
  var children = _ref.children,
      classNames = _ref.classNames,
      description = _ref.description,
      disabled = _ref.disabled,
      displayLabel = _ref.displayLabel,
      formContext = _ref.formContext,
      help = _ref.help,
      hidden = _ref.hidden,
      id = _ref.id,
      label = _ref.label,
      onDropPropertyClick = _ref.onDropPropertyClick,
      onKeyChange = _ref.onKeyChange,
      rawErrors = _ref.rawErrors,
      rawHelp = _ref.rawHelp,
      readonly = _ref.readonly,
      required = _ref.required,
      schema = _ref.schema;
  var colon = formContext.colon,
      _formContext$labelCol = formContext.labelCol,
      labelCol = _formContext$labelCol === void 0 ? VERTICAL_LABEL_COL : _formContext$labelCol,
      _formContext$wrapperC = formContext.wrapperCol,
      wrapperCol = _formContext$wrapperC === void 0 ? VERTICAL_WRAPPER_COL : _formContext$wrapperC,
      wrapperStyle = formContext.wrapperStyle;

  if (hidden) {
    return /*#__PURE__*/React.createElement("div", {
      className: "field-hidden"
    }, children);
  }

  var renderFieldErrors = function renderFieldErrors() {
    return _toConsumableArray(new Set(rawErrors)).map(function (error) {
      return /*#__PURE__*/React.createElement("div", {
        key: "field-".concat(id, "-error-").concat(error)
      }, error);
    });
  };

  return /*#__PURE__*/React.createElement(WrapIfAdditional, {
    classNames: classNames,
    disabled: disabled,
    formContext: formContext,
    id: id,
    label: label,
    onDropPropertyClick: onDropPropertyClick,
    onKeyChange: onKeyChange,
    readonly: readonly,
    required: required,
    schema: schema
  }, id === 'root' ? children : /*#__PURE__*/React.createElement(Form.Item, {
    colon: colon,
    extra: description,
    hasFeedback: schema.type !== 'array' && schema.type !== 'object',
    help: !!rawHelp && help || !!rawErrors && renderFieldErrors(),
    htmlFor: id,
    label: displayLabel && label,
    labelCol: labelCol,
    required: required,
    style: wrapperStyle,
    validateStatus: rawErrors ? 'error' : undefined,
    wrapperCol: wrapperCol
  }, children));
};

export default FieldTemplate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZW1wbGF0ZXMvRmllbGRUZW1wbGF0ZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkZvcm0iLCJXcmFwSWZBZGRpdGlvbmFsIiwiVkVSVElDQUxfTEFCRUxfQ09MIiwic3BhbiIsIlZFUlRJQ0FMX1dSQVBQRVJfQ09MIiwiRmllbGRUZW1wbGF0ZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lcyIsImRlc2NyaXB0aW9uIiwiZGlzYWJsZWQiLCJkaXNwbGF5TGFiZWwiLCJmb3JtQ29udGV4dCIsImhlbHAiLCJoaWRkZW4iLCJpZCIsImxhYmVsIiwib25Ecm9wUHJvcGVydHlDbGljayIsIm9uS2V5Q2hhbmdlIiwicmF3RXJyb3JzIiwicmF3SGVscCIsInJlYWRvbmx5IiwicmVxdWlyZWQiLCJzY2hlbWEiLCJjb2xvbiIsImxhYmVsQ29sIiwid3JhcHBlckNvbCIsIndyYXBwZXJTdHlsZSIsInJlbmRlckZpZWxkRXJyb3JzIiwiU2V0IiwibWFwIiwiZXJyb3IiLCJ0eXBlIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBRUEsT0FBT0MsSUFBUCxNQUFpQixlQUFqQjtBQUVBLE9BQU9DLGdCQUFQLE1BQTZCLG9CQUE3QjtBQUVBLElBQU1DLGtCQUFrQixHQUFHO0FBQUVDLEVBQUFBLElBQUksRUFBRTtBQUFSLENBQTNCO0FBQ0EsSUFBTUMsb0JBQW9CLEdBQUc7QUFBRUQsRUFBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBN0I7O0FBRUEsSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQXFCaEI7QUFBQSxNQXBCSkMsUUFvQkksUUFwQkpBLFFBb0JJO0FBQUEsTUFuQkpDLFVBbUJJLFFBbkJKQSxVQW1CSTtBQUFBLE1BbEJKQyxXQWtCSSxRQWxCSkEsV0FrQkk7QUFBQSxNQWpCSkMsUUFpQkksUUFqQkpBLFFBaUJJO0FBQUEsTUFoQkpDLFlBZ0JJLFFBaEJKQSxZQWdCSTtBQUFBLE1BYkpDLFdBYUksUUFiSkEsV0FhSTtBQUFBLE1BWkpDLElBWUksUUFaSkEsSUFZSTtBQUFBLE1BWEpDLE1BV0ksUUFYSkEsTUFXSTtBQUFBLE1BVkpDLEVBVUksUUFWSkEsRUFVSTtBQUFBLE1BVEpDLEtBU0ksUUFUSkEsS0FTSTtBQUFBLE1BUkpDLG1CQVFJLFFBUkpBLG1CQVFJO0FBQUEsTUFQSkMsV0FPSSxRQVBKQSxXQU9JO0FBQUEsTUFOSkMsU0FNSSxRQU5KQSxTQU1JO0FBQUEsTUFMSkMsT0FLSSxRQUxKQSxPQUtJO0FBQUEsTUFKSkMsUUFJSSxRQUpKQSxRQUlJO0FBQUEsTUFISkMsUUFHSSxRQUhKQSxRQUdJO0FBQUEsTUFGSkMsTUFFSSxRQUZKQSxNQUVJO0FBQUEsTUFFRkMsS0FGRSxHQU1BWixXQU5BLENBRUZZLEtBRkU7QUFBQSw4QkFNQVosV0FOQSxDQUdGYSxRQUhFO0FBQUEsTUFHRkEsUUFIRSxzQ0FHU3RCLGtCQUhUO0FBQUEsOEJBTUFTLFdBTkEsQ0FJRmMsVUFKRTtBQUFBLE1BSUZBLFVBSkUsc0NBSVdyQixvQkFKWDtBQUFBLE1BS0ZzQixZQUxFLEdBTUFmLFdBTkEsQ0FLRmUsWUFMRTs7QUFRSixNQUFJYixNQUFKLEVBQVk7QUFDVix3QkFBTztBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsT0FBK0JQLFFBQS9CLENBQVA7QUFDRDs7QUFFRCxNQUFNcUIsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLFdBQ3hCLG1CQUFJLElBQUlDLEdBQUosQ0FBUVYsU0FBUixDQUFKLEVBQXdCVyxHQUF4QixDQUE0QixVQUFDQyxLQUFEO0FBQUEsMEJBQzFCO0FBQUssUUFBQSxHQUFHLGtCQUFXaEIsRUFBWCxvQkFBdUJnQixLQUF2QjtBQUFSLFNBQXlDQSxLQUF6QyxDQUQwQjtBQUFBLEtBQTVCLENBRHdCO0FBQUEsR0FBMUI7O0FBS0Esc0JBQ0Usb0JBQUMsZ0JBQUQ7QUFDRSxJQUFBLFVBQVUsRUFBRXZCLFVBRGQ7QUFFRSxJQUFBLFFBQVEsRUFBRUUsUUFGWjtBQUdFLElBQUEsV0FBVyxFQUFFRSxXQUhmO0FBSUUsSUFBQSxFQUFFLEVBQUVHLEVBSk47QUFLRSxJQUFBLEtBQUssRUFBRUMsS0FMVDtBQU1FLElBQUEsbUJBQW1CLEVBQUVDLG1CQU52QjtBQU9FLElBQUEsV0FBVyxFQUFFQyxXQVBmO0FBUUUsSUFBQSxRQUFRLEVBQUVHLFFBUlo7QUFTRSxJQUFBLFFBQVEsRUFBRUMsUUFUWjtBQVVFLElBQUEsTUFBTSxFQUFFQztBQVZWLEtBWUdSLEVBQUUsS0FBSyxNQUFQLEdBQ0NSLFFBREQsZ0JBR0Msb0JBQUMsSUFBRCxDQUFNLElBQU47QUFDRSxJQUFBLEtBQUssRUFBRWlCLEtBRFQ7QUFFRSxJQUFBLEtBQUssRUFBRWYsV0FGVDtBQUdFLElBQUEsV0FBVyxFQUFFYyxNQUFNLENBQUNTLElBQVAsS0FBZ0IsT0FBaEIsSUFBMkJULE1BQU0sQ0FBQ1MsSUFBUCxLQUFnQixRQUgxRDtBQUlFLElBQUEsSUFBSSxFQUFHLENBQUMsQ0FBQ1osT0FBRixJQUFhUCxJQUFkLElBQXdCLENBQUMsQ0FBQ00sU0FBRixJQUFlUyxpQkFBaUIsRUFKaEU7QUFLRSxJQUFBLE9BQU8sRUFBRWIsRUFMWDtBQU1FLElBQUEsS0FBSyxFQUFFSixZQUFZLElBQUlLLEtBTnpCO0FBT0UsSUFBQSxRQUFRLEVBQUVTLFFBUFo7QUFRRSxJQUFBLFFBQVEsRUFBRUgsUUFSWjtBQVNFLElBQUEsS0FBSyxFQUFFSyxZQVRUO0FBVUUsSUFBQSxjQUFjLEVBQUVSLFNBQVMsR0FBRyxPQUFILEdBQWFjLFNBVnhDO0FBV0UsSUFBQSxVQUFVLEVBQUVQO0FBWGQsS0FhR25CLFFBYkgsQ0FmSixDQURGO0FBa0NELENBeEVEOztBQTBFQSxlQUFlRCxhQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBGb3JtIGZyb20gJ2FudGQvbGliL2Zvcm0nO1xyXG5cclxuaW1wb3J0IFdyYXBJZkFkZGl0aW9uYWwgZnJvbSAnLi9XcmFwSWZBZGRpdGlvbmFsJztcclxuXHJcbmNvbnN0IFZFUlRJQ0FMX0xBQkVMX0NPTCA9IHsgc3BhbjogMjQgfTtcclxuY29uc3QgVkVSVElDQUxfV1JBUFBFUl9DT0wgPSB7IHNwYW46IDI0IH07XHJcblxyXG5jb25zdCBGaWVsZFRlbXBsYXRlID0gKHtcclxuICBjaGlsZHJlbixcclxuICBjbGFzc05hbWVzLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIGRpc2FibGVkLFxyXG4gIGRpc3BsYXlMYWJlbCxcclxuICAvLyBlcnJvcnMsXHJcbiAgLy8gZmllbGRzLFxyXG4gIGZvcm1Db250ZXh0LFxyXG4gIGhlbHAsXHJcbiAgaGlkZGVuLFxyXG4gIGlkLFxyXG4gIGxhYmVsLFxyXG4gIG9uRHJvcFByb3BlcnR5Q2xpY2ssXHJcbiAgb25LZXlDaGFuZ2UsXHJcbiAgcmF3RXJyb3JzLFxyXG4gIHJhd0hlbHAsXHJcbiAgcmVhZG9ubHksXHJcbiAgcmVxdWlyZWQsXHJcbiAgc2NoZW1hLFxyXG4gIC8vIHVpU2NoZW1hLFxyXG59KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY29sb24sXHJcbiAgICBsYWJlbENvbCA9IFZFUlRJQ0FMX0xBQkVMX0NPTCxcclxuICAgIHdyYXBwZXJDb2wgPSBWRVJUSUNBTF9XUkFQUEVSX0NPTCxcclxuICAgIHdyYXBwZXJTdHlsZSxcclxuICB9ID0gZm9ybUNvbnRleHQ7XHJcblxyXG4gIGlmIChoaWRkZW4pIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWhpZGRlblwiPntjaGlsZHJlbn08L2Rpdj47XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW5kZXJGaWVsZEVycm9ycyA9ICgpID0+XHJcbiAgICBbLi4ubmV3IFNldChyYXdFcnJvcnMpXS5tYXAoKGVycm9yKSA9PiAoXHJcbiAgICAgIDxkaXYga2V5PXtgZmllbGQtJHtpZH0tZXJyb3ItJHtlcnJvcn1gfT57ZXJyb3J9PC9kaXY+XHJcbiAgICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwSWZBZGRpdGlvbmFsXHJcbiAgICAgIGNsYXNzTmFtZXM9e2NsYXNzTmFtZXN9XHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgZm9ybUNvbnRleHQ9e2Zvcm1Db250ZXh0fVxyXG4gICAgICBpZD17aWR9XHJcbiAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgb25Ecm9wUHJvcGVydHlDbGljaz17b25Ecm9wUHJvcGVydHlDbGlja31cclxuICAgICAgb25LZXlDaGFuZ2U9e29uS2V5Q2hhbmdlfVxyXG4gICAgICByZWFkb25seT17cmVhZG9ubHl9XHJcbiAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgc2NoZW1hPXtzY2hlbWF9XHJcbiAgICA+XHJcbiAgICAgIHtpZCA9PT0gJ3Jvb3QnID8gKFxyXG4gICAgICAgIGNoaWxkcmVuXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgY29sb249e2NvbG9ufVxyXG4gICAgICAgICAgZXh0cmE9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgaGFzRmVlZGJhY2s9e3NjaGVtYS50eXBlICE9PSAnYXJyYXknICYmIHNjaGVtYS50eXBlICE9PSAnb2JqZWN0J31cclxuICAgICAgICAgIGhlbHA9eyghIXJhd0hlbHAgJiYgaGVscCkgfHwgKCEhcmF3RXJyb3JzICYmIHJlbmRlckZpZWxkRXJyb3JzKCkpfVxyXG4gICAgICAgICAgaHRtbEZvcj17aWR9XHJcbiAgICAgICAgICBsYWJlbD17ZGlzcGxheUxhYmVsICYmIGxhYmVsfVxyXG4gICAgICAgICAgbGFiZWxDb2w9e2xhYmVsQ29sfVxyXG4gICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgc3R5bGU9e3dyYXBwZXJTdHlsZX1cclxuICAgICAgICAgIHZhbGlkYXRlU3RhdHVzPXtyYXdFcnJvcnMgPyAnZXJyb3InIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgd3JhcHBlckNvbD17d3JhcHBlckNvbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICl9XHJcbiAgICA8L1dyYXBJZkFkZGl0aW9uYWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpZWxkVGVtcGxhdGU7XHJcbiJdfQ==