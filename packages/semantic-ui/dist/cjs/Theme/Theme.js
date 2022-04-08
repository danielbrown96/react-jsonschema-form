"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@rjsf/core");

var _semanticUiReact = require("semantic-ui-react");

var _SubmitButton = _interopRequireDefault(require("../SubmitButton"));

var _ArrayFieldTemplate = _interopRequireDefault(require("../ArrayFieldTemplate"));

var _ErrorList = _interopRequireDefault(require("../ErrorList"));

var _Fields = _interopRequireDefault(require("../Fields"));

var _FieldTemplate = _interopRequireDefault(require("../FieldTemplate"));

var _ObjectFieldTemplate = _interopRequireDefault(require("../ObjectFieldTemplate"));

var _Widgets = _interopRequireDefault(require("../Widgets"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getDefaultRegistry = _core.utils.getDefaultRegistry;

var _getDefaultRegistry = getDefaultRegistry(),
    fields = _getDefaultRegistry.fields,
    widgets = _getDefaultRegistry.widgets;

var Theme = {
  ArrayFieldTemplate: _ArrayFieldTemplate.default,
  ErrorList: _ErrorList.default,
  fields: _objectSpread(_objectSpread({}, fields), _Fields.default),
  FieldTemplate: _FieldTemplate.default,
  ObjectFieldTemplate: _ObjectFieldTemplate.default,
  _internalFormWrapper: _semanticUiReact.Form,
  widgets: _objectSpread(_objectSpread({}, widgets), _Widgets.default),
  children: _react.default.createElement(_SubmitButton.default)
};
var _default = Theme;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9UaGVtZS9UaGVtZS5qcyJdLCJuYW1lcyI6WyJnZXREZWZhdWx0UmVnaXN0cnkiLCJ1dGlscyIsImZpZWxkcyIsIndpZGdldHMiLCJUaGVtZSIsIkFycmF5RmllbGRUZW1wbGF0ZSIsIkVycm9yTGlzdCIsIkZpZWxkcyIsIkZpZWxkVGVtcGxhdGUiLCJPYmplY3RGaWVsZFRlbXBsYXRlIiwiX2ludGVybmFsRm9ybVdyYXBwZXIiLCJTdWlGb3JtIiwiV2lkZ2V0cyIsImNoaWxkcmVuIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiU3VibWl0QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFDUUEsa0IsR0FBd0JDLFcsQ0FBeEJELGtCOzswQkFDb0JBLGtCQUFrQixFO0lBQXRDRSxNLHVCQUFBQSxNO0lBQVFDLE8sdUJBQUFBLE87O0FBRWhCLElBQU1DLEtBQUssR0FBRztBQUNaQyxFQUFBQSxrQkFBa0IsRUFBbEJBLDJCQURZO0FBRVpDLEVBQUFBLFNBQVMsRUFBVEEsa0JBRlk7QUFHWkosRUFBQUEsTUFBTSxrQ0FBT0EsTUFBUCxHQUFrQkssZUFBbEIsQ0FITTtBQUlaQyxFQUFBQSxhQUFhLEVBQWJBLHNCQUpZO0FBS1pDLEVBQUFBLG1CQUFtQixFQUFuQkEsNEJBTFk7QUFNWkMsRUFBQUEsb0JBQW9CLEVBQUVDLHFCQU5WO0FBT1pSLEVBQUFBLE9BQU8sa0NBQU9BLE9BQVAsR0FBbUJTLGdCQUFuQixDQVBLO0FBUVpDLEVBQUFBLFFBQVEsRUFBRUMsZUFBTUMsYUFBTixDQUFvQkMscUJBQXBCO0FBUkUsQ0FBZDtlQVdlWixLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXRpbHMgfSBmcm9tICdAcmpzZi9jb3JlJztcclxuaW1wb3J0IHsgRm9ybSBhcyBTdWlGb3JtIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBTdWJtaXRCdXR0b24gZnJvbSAnLi4vU3VibWl0QnV0dG9uJztcclxuaW1wb3J0IEFycmF5RmllbGRUZW1wbGF0ZSBmcm9tIFwiLi4vQXJyYXlGaWVsZFRlbXBsYXRlXCI7XHJcbmltcG9ydCBFcnJvckxpc3QgZnJvbSBcIi4uL0Vycm9yTGlzdFwiO1xyXG5pbXBvcnQgRmllbGRzIGZyb20gXCIuLi9GaWVsZHNcIjtcclxuaW1wb3J0IEZpZWxkVGVtcGxhdGUgZnJvbSBcIi4uL0ZpZWxkVGVtcGxhdGVcIjtcclxuaW1wb3J0IE9iamVjdEZpZWxkVGVtcGxhdGUgZnJvbSBcIi4uL09iamVjdEZpZWxkVGVtcGxhdGVcIjtcclxuaW1wb3J0IFdpZGdldHMgZnJvbSBcIi4uL1dpZGdldHNcIjtcclxuY29uc3QgeyBnZXREZWZhdWx0UmVnaXN0cnkgfSAgPSB1dGlscztcclxuY29uc3QgeyBmaWVsZHMsIHdpZGdldHMgfSA9IGdldERlZmF1bHRSZWdpc3RyeSgpO1xyXG5cclxuY29uc3QgVGhlbWUgPSB7XHJcbiAgQXJyYXlGaWVsZFRlbXBsYXRlLFxyXG4gIEVycm9yTGlzdCxcclxuICBmaWVsZHM6IHsgLi4uZmllbGRzLCAuLi5GaWVsZHMgfSxcclxuICBGaWVsZFRlbXBsYXRlLFxyXG4gIE9iamVjdEZpZWxkVGVtcGxhdGUsXHJcbiAgX2ludGVybmFsRm9ybVdyYXBwZXI6IFN1aUZvcm0sXHJcbiAgd2lkZ2V0czogeyAuLi53aWRnZXRzLCAuLi5XaWRnZXRzIH0sXHJcbiAgY2hpbGRyZW46IFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3VibWl0QnV0dG9uKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhlbWU7XHJcbiJdfQ==