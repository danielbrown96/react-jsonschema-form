"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _form = _interopRequireDefault(require("antd/lib/form"));

var _WrapIfAdditional = _interopRequireDefault(require("./WrapIfAdditional"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "field-hidden"
    }, children);
  }

  var renderFieldErrors = function renderFieldErrors() {
    return _toConsumableArray(new Set(rawErrors)).map(function (error) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: "field-".concat(id, "-error-").concat(error)
      }, error);
    });
  };

  return /*#__PURE__*/_react.default.createElement(_WrapIfAdditional.default, {
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
  }, id === 'root' ? children : /*#__PURE__*/_react.default.createElement(_form.default.Item, {
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

var _default = FieldTemplate;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZW1wbGF0ZXMvRmllbGRUZW1wbGF0ZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJWRVJUSUNBTF9MQUJFTF9DT0wiLCJzcGFuIiwiVkVSVElDQUxfV1JBUFBFUl9DT0wiLCJGaWVsZFRlbXBsYXRlIiwiY2hpbGRyZW4iLCJjbGFzc05hbWVzIiwiZGVzY3JpcHRpb24iLCJkaXNhYmxlZCIsImRpc3BsYXlMYWJlbCIsImZvcm1Db250ZXh0IiwiaGVscCIsImhpZGRlbiIsImlkIiwibGFiZWwiLCJvbkRyb3BQcm9wZXJ0eUNsaWNrIiwib25LZXlDaGFuZ2UiLCJyYXdFcnJvcnMiLCJyYXdIZWxwIiwicmVhZG9ubHkiLCJyZXF1aXJlZCIsInNjaGVtYSIsImNvbG9uIiwibGFiZWxDb2wiLCJ3cmFwcGVyQ29sIiwid3JhcHBlclN0eWxlIiwicmVuZGVyRmllbGRFcnJvcnMiLCJTZXQiLCJtYXAiLCJlcnJvciIsInR5cGUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQixHQUFHO0FBQUVDLEVBQUFBLElBQUksRUFBRTtBQUFSLENBQTNCO0FBQ0EsSUFBTUMsb0JBQW9CLEdBQUc7QUFBRUQsRUFBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBN0I7O0FBRUEsSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQXFCaEI7QUFBQSxNQXBCSkMsUUFvQkksUUFwQkpBLFFBb0JJO0FBQUEsTUFuQkpDLFVBbUJJLFFBbkJKQSxVQW1CSTtBQUFBLE1BbEJKQyxXQWtCSSxRQWxCSkEsV0FrQkk7QUFBQSxNQWpCSkMsUUFpQkksUUFqQkpBLFFBaUJJO0FBQUEsTUFoQkpDLFlBZ0JJLFFBaEJKQSxZQWdCSTtBQUFBLE1BYkpDLFdBYUksUUFiSkEsV0FhSTtBQUFBLE1BWkpDLElBWUksUUFaSkEsSUFZSTtBQUFBLE1BWEpDLE1BV0ksUUFYSkEsTUFXSTtBQUFBLE1BVkpDLEVBVUksUUFWSkEsRUFVSTtBQUFBLE1BVEpDLEtBU0ksUUFUSkEsS0FTSTtBQUFBLE1BUkpDLG1CQVFJLFFBUkpBLG1CQVFJO0FBQUEsTUFQSkMsV0FPSSxRQVBKQSxXQU9JO0FBQUEsTUFOSkMsU0FNSSxRQU5KQSxTQU1JO0FBQUEsTUFMSkMsT0FLSSxRQUxKQSxPQUtJO0FBQUEsTUFKSkMsUUFJSSxRQUpKQSxRQUlJO0FBQUEsTUFISkMsUUFHSSxRQUhKQSxRQUdJO0FBQUEsTUFGSkMsTUFFSSxRQUZKQSxNQUVJO0FBQUEsTUFFRkMsS0FGRSxHQU1BWixXQU5BLENBRUZZLEtBRkU7QUFBQSw4QkFNQVosV0FOQSxDQUdGYSxRQUhFO0FBQUEsTUFHRkEsUUFIRSxzQ0FHU3RCLGtCQUhUO0FBQUEsOEJBTUFTLFdBTkEsQ0FJRmMsVUFKRTtBQUFBLE1BSUZBLFVBSkUsc0NBSVdyQixvQkFKWDtBQUFBLE1BS0ZzQixZQUxFLEdBTUFmLFdBTkEsQ0FLRmUsWUFMRTs7QUFRSixNQUFJYixNQUFKLEVBQVk7QUFDVix3QkFBTztBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsT0FBK0JQLFFBQS9CLENBQVA7QUFDRDs7QUFFRCxNQUFNcUIsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLFdBQ3hCLG1CQUFJLElBQUlDLEdBQUosQ0FBUVYsU0FBUixDQUFKLEVBQXdCVyxHQUF4QixDQUE0QixVQUFDQyxLQUFEO0FBQUEsMEJBQzFCO0FBQUssUUFBQSxHQUFHLGtCQUFXaEIsRUFBWCxvQkFBdUJnQixLQUF2QjtBQUFSLFNBQXlDQSxLQUF6QyxDQUQwQjtBQUFBLEtBQTVCLENBRHdCO0FBQUEsR0FBMUI7O0FBS0Esc0JBQ0UsNkJBQUMseUJBQUQ7QUFDRSxJQUFBLFVBQVUsRUFBRXZCLFVBRGQ7QUFFRSxJQUFBLFFBQVEsRUFBRUUsUUFGWjtBQUdFLElBQUEsV0FBVyxFQUFFRSxXQUhmO0FBSUUsSUFBQSxFQUFFLEVBQUVHLEVBSk47QUFLRSxJQUFBLEtBQUssRUFBRUMsS0FMVDtBQU1FLElBQUEsbUJBQW1CLEVBQUVDLG1CQU52QjtBQU9FLElBQUEsV0FBVyxFQUFFQyxXQVBmO0FBUUUsSUFBQSxRQUFRLEVBQUVHLFFBUlo7QUFTRSxJQUFBLFFBQVEsRUFBRUMsUUFUWjtBQVVFLElBQUEsTUFBTSxFQUFFQztBQVZWLEtBWUdSLEVBQUUsS0FBSyxNQUFQLEdBQ0NSLFFBREQsZ0JBR0MsNkJBQUMsYUFBRCxDQUFNLElBQU47QUFDRSxJQUFBLEtBQUssRUFBRWlCLEtBRFQ7QUFFRSxJQUFBLEtBQUssRUFBRWYsV0FGVDtBQUdFLElBQUEsV0FBVyxFQUFFYyxNQUFNLENBQUNTLElBQVAsS0FBZ0IsT0FBaEIsSUFBMkJULE1BQU0sQ0FBQ1MsSUFBUCxLQUFnQixRQUgxRDtBQUlFLElBQUEsSUFBSSxFQUFHLENBQUMsQ0FBQ1osT0FBRixJQUFhUCxJQUFkLElBQXdCLENBQUMsQ0FBQ00sU0FBRixJQUFlUyxpQkFBaUIsRUFKaEU7QUFLRSxJQUFBLE9BQU8sRUFBRWIsRUFMWDtBQU1FLElBQUEsS0FBSyxFQUFFSixZQUFZLElBQUlLLEtBTnpCO0FBT0UsSUFBQSxRQUFRLEVBQUVTLFFBUFo7QUFRRSxJQUFBLFFBQVEsRUFBRUgsUUFSWjtBQVNFLElBQUEsS0FBSyxFQUFFSyxZQVRUO0FBVUUsSUFBQSxjQUFjLEVBQUVSLFNBQVMsR0FBRyxPQUFILEdBQWFjLFNBVnhDO0FBV0UsSUFBQSxVQUFVLEVBQUVQO0FBWGQsS0FhR25CLFFBYkgsQ0FmSixDQURGO0FBa0NELENBeEVEOztlQTBFZUQsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgRm9ybSBmcm9tICdhbnRkL2xpYi9mb3JtJztcclxuXHJcbmltcG9ydCBXcmFwSWZBZGRpdGlvbmFsIGZyb20gJy4vV3JhcElmQWRkaXRpb25hbCc7XHJcblxyXG5jb25zdCBWRVJUSUNBTF9MQUJFTF9DT0wgPSB7IHNwYW46IDI0IH07XHJcbmNvbnN0IFZFUlRJQ0FMX1dSQVBQRVJfQ09MID0geyBzcGFuOiAyNCB9O1xyXG5cclxuY29uc3QgRmllbGRUZW1wbGF0ZSA9ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xhc3NOYW1lcyxcclxuICBkZXNjcmlwdGlvbixcclxuICBkaXNhYmxlZCxcclxuICBkaXNwbGF5TGFiZWwsXHJcbiAgLy8gZXJyb3JzLFxyXG4gIC8vIGZpZWxkcyxcclxuICBmb3JtQ29udGV4dCxcclxuICBoZWxwLFxyXG4gIGhpZGRlbixcclxuICBpZCxcclxuICBsYWJlbCxcclxuICBvbkRyb3BQcm9wZXJ0eUNsaWNrLFxyXG4gIG9uS2V5Q2hhbmdlLFxyXG4gIHJhd0Vycm9ycyxcclxuICByYXdIZWxwLFxyXG4gIHJlYWRvbmx5LFxyXG4gIHJlcXVpcmVkLFxyXG4gIHNjaGVtYSxcclxuICAvLyB1aVNjaGVtYSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGNvbG9uLFxyXG4gICAgbGFiZWxDb2wgPSBWRVJUSUNBTF9MQUJFTF9DT0wsXHJcbiAgICB3cmFwcGVyQ29sID0gVkVSVElDQUxfV1JBUFBFUl9DT0wsXHJcbiAgICB3cmFwcGVyU3R5bGUsXHJcbiAgfSA9IGZvcm1Db250ZXh0O1xyXG5cclxuICBpZiAoaGlkZGVuKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1oaWRkZW5cIj57Y2hpbGRyZW59PC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVuZGVyRmllbGRFcnJvcnMgPSAoKSA9PlxyXG4gICAgWy4uLm5ldyBTZXQocmF3RXJyb3JzKV0ubWFwKChlcnJvcikgPT4gKFxyXG4gICAgICA8ZGl2IGtleT17YGZpZWxkLSR7aWR9LWVycm9yLSR7ZXJyb3J9YH0+e2Vycm9yfTwvZGl2PlxyXG4gICAgKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcElmQWRkaXRpb25hbFxyXG4gICAgICBjbGFzc05hbWVzPXtjbGFzc05hbWVzfVxyXG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgIGZvcm1Db250ZXh0PXtmb3JtQ29udGV4dH1cclxuICAgICAgaWQ9e2lkfVxyXG4gICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgIG9uRHJvcFByb3BlcnR5Q2xpY2s9e29uRHJvcFByb3BlcnR5Q2xpY2t9XHJcbiAgICAgIG9uS2V5Q2hhbmdlPXtvbktleUNoYW5nZX1cclxuICAgICAgcmVhZG9ubHk9e3JlYWRvbmx5fVxyXG4gICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgIHNjaGVtYT17c2NoZW1hfVxyXG4gICAgPlxyXG4gICAgICB7aWQgPT09ICdyb290JyA/IChcclxuICAgICAgICBjaGlsZHJlblxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIGNvbG9uPXtjb2xvbn1cclxuICAgICAgICAgIGV4dHJhPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgIGhhc0ZlZWRiYWNrPXtzY2hlbWEudHlwZSAhPT0gJ2FycmF5JyAmJiBzY2hlbWEudHlwZSAhPT0gJ29iamVjdCd9XHJcbiAgICAgICAgICBoZWxwPXsoISFyYXdIZWxwICYmIGhlbHApIHx8ICghIXJhd0Vycm9ycyAmJiByZW5kZXJGaWVsZEVycm9ycygpKX1cclxuICAgICAgICAgIGh0bWxGb3I9e2lkfVxyXG4gICAgICAgICAgbGFiZWw9e2Rpc3BsYXlMYWJlbCAmJiBsYWJlbH1cclxuICAgICAgICAgIGxhYmVsQ29sPXtsYWJlbENvbH1cclxuICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgIHN0eWxlPXt3cmFwcGVyU3R5bGV9XHJcbiAgICAgICAgICB2YWxpZGF0ZVN0YXR1cz17cmF3RXJyb3JzID8gJ2Vycm9yJyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgIHdyYXBwZXJDb2w9e3dyYXBwZXJDb2x9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICApfVxyXG4gICAgPC9XcmFwSWZBZGRpdGlvbmFsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWVsZFRlbXBsYXRlO1xyXG4iXX0=