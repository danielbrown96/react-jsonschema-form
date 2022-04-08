"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Form = exports.Theme = exports.Widgets = exports.Fields = void 0;

var _core = require("@rjsf/core");

var _DescriptionField = _interopRequireDefault(require("./fields/DescriptionField"));

var _TitleField = _interopRequireDefault(require("./fields/TitleField"));

var _FieldTemplate = _interopRequireDefault(require("./templates/FieldTemplate"));

var _ObjectFieldTemplate = _interopRequireDefault(require("./templates/ObjectFieldTemplate"));

var _ArrayFieldTemplate = _interopRequireDefault(require("./templates/ArrayFieldTemplate"));

var _AltDateTimeWidget = _interopRequireDefault(require("./widgets/AltDateTimeWidget"));

var _AltDateWidget = _interopRequireDefault(require("./widgets/AltDateWidget"));

var _CheckboxesWidget = _interopRequireDefault(require("./widgets/CheckboxesWidget"));

var _CheckboxWidget = _interopRequireDefault(require("./widgets/CheckboxWidget"));

var _ColorWidget = _interopRequireDefault(require("./widgets/ColorWidget"));

var _DateTimeWidget = _interopRequireDefault(require("./widgets/DateTimeWidget"));

var _DateWidget = _interopRequireDefault(require("./widgets/DateWidget"));

var _EmailWidget = _interopRequireDefault(require("./widgets/EmailWidget"));

var _PasswordWidget = _interopRequireDefault(require("./widgets/PasswordWidget"));

var _RadioWidget = _interopRequireDefault(require("./widgets/RadioWidget"));

var _RangeWidget = _interopRequireDefault(require("./widgets/RangeWidget"));

var _SelectWidget = _interopRequireDefault(require("./widgets/SelectWidget"));

var _TextareaWidget = _interopRequireDefault(require("./widgets/TextareaWidget"));

var _TextWidget = _interopRequireDefault(require("./widgets/TextWidget"));

var _UpDownWidget = _interopRequireDefault(require("./widgets/UpDownWidget"));

var _URLWidget = _interopRequireDefault(require("./widgets/URLWidget"));

var _ErrorList = _interopRequireDefault(require("./ErrorList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import './index.less';
var getDefaultRegistry = _core.utils.getDefaultRegistry;

var _getDefaultRegistry = getDefaultRegistry(),
    fields = _getDefaultRegistry.fields,
    widgets = _getDefaultRegistry.widgets;

var Fields = {
  DescriptionField: _DescriptionField.default,
  TitleField: _TitleField.default
};
exports.Fields = Fields;
var Widgets = {
  AltDateTimeWidget: _AltDateTimeWidget.default,
  AltDateWidget: _AltDateWidget.default,
  CheckboxesWidget: _CheckboxesWidget.default,
  CheckboxWidget: _CheckboxWidget.default,
  ColorWidget: _ColorWidget.default,
  DateTimeWidget: _DateTimeWidget.default,
  DateWidget: _DateWidget.default,
  EmailWidget: _EmailWidget.default,
  PasswordWidget: _PasswordWidget.default,
  RadioWidget: _RadioWidget.default,
  RangeWidget: _RangeWidget.default,
  SelectWidget: _SelectWidget.default,
  TextareaWidget: _TextareaWidget.default,
  TextWidget: _TextWidget.default,
  UpDownWidget: _UpDownWidget.default,
  URLWidget: _URLWidget.default
};
exports.Widgets = Widgets;
var Theme = {
  ArrayFieldTemplate: _ArrayFieldTemplate.default,
  fields: _objectSpread(_objectSpread({}, fields), Fields),
  FieldTemplate: _FieldTemplate.default,
  ObjectFieldTemplate: _ObjectFieldTemplate.default,
  widgets: _objectSpread(_objectSpread({}, widgets), Widgets),
  ErrorList: _ErrorList.default
};
exports.Theme = Theme;
var Form = (0, _core.withTheme)(Theme);
exports.Form = Form;
var _default = Form;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXREZWZhdWx0UmVnaXN0cnkiLCJ1dGlscyIsImZpZWxkcyIsIndpZGdldHMiLCJGaWVsZHMiLCJEZXNjcmlwdGlvbkZpZWxkIiwiVGl0bGVGaWVsZCIsIldpZGdldHMiLCJBbHREYXRlVGltZVdpZGdldCIsIkFsdERhdGVXaWRnZXQiLCJDaGVja2JveGVzV2lkZ2V0IiwiQ2hlY2tib3hXaWRnZXQiLCJDb2xvcldpZGdldCIsIkRhdGVUaW1lV2lkZ2V0IiwiRGF0ZVdpZGdldCIsIkVtYWlsV2lkZ2V0IiwiUGFzc3dvcmRXaWRnZXQiLCJSYWRpb1dpZGdldCIsIlJhbmdlV2lkZ2V0IiwiU2VsZWN0V2lkZ2V0IiwiVGV4dGFyZWFXaWRnZXQiLCJUZXh0V2lkZ2V0IiwiVXBEb3duV2lkZ2V0IiwiVVJMV2lkZ2V0IiwiVGhlbWUiLCJBcnJheUZpZWxkVGVtcGxhdGUiLCJGaWVsZFRlbXBsYXRlIiwiT2JqZWN0RmllbGRUZW1wbGF0ZSIsIkVycm9yTGlzdCIsIkZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQUVBO0lBRVFBLGtCLEdBQXVCQyxXLENBQXZCRCxrQjs7MEJBQ29CQSxrQkFBa0IsRTtJQUF0Q0UsTSx1QkFBQUEsTTtJQUFRQyxPLHVCQUFBQSxPOztBQUVULElBQU1DLE1BQU0sR0FBRztBQUNwQkMsRUFBQUEsZ0JBQWdCLEVBQWhCQSx5QkFEb0I7QUFFcEJDLEVBQUFBLFVBQVUsRUFBVkE7QUFGb0IsQ0FBZjs7QUFLQSxJQUFNQyxPQUFPLEdBQUc7QUFDckJDLEVBQUFBLGlCQUFpQixFQUFqQkEsMEJBRHFCO0FBRXJCQyxFQUFBQSxhQUFhLEVBQWJBLHNCQUZxQjtBQUdyQkMsRUFBQUEsZ0JBQWdCLEVBQWhCQSx5QkFIcUI7QUFJckJDLEVBQUFBLGNBQWMsRUFBZEEsdUJBSnFCO0FBS3JCQyxFQUFBQSxXQUFXLEVBQVhBLG9CQUxxQjtBQU1yQkMsRUFBQUEsY0FBYyxFQUFkQSx1QkFOcUI7QUFPckJDLEVBQUFBLFVBQVUsRUFBVkEsbUJBUHFCO0FBUXJCQyxFQUFBQSxXQUFXLEVBQVhBLG9CQVJxQjtBQVNyQkMsRUFBQUEsY0FBYyxFQUFkQSx1QkFUcUI7QUFVckJDLEVBQUFBLFdBQVcsRUFBWEEsb0JBVnFCO0FBV3JCQyxFQUFBQSxXQUFXLEVBQVhBLG9CQVhxQjtBQVlyQkMsRUFBQUEsWUFBWSxFQUFaQSxxQkFacUI7QUFhckJDLEVBQUFBLGNBQWMsRUFBZEEsdUJBYnFCO0FBY3JCQyxFQUFBQSxVQUFVLEVBQVZBLG1CQWRxQjtBQWVyQkMsRUFBQUEsWUFBWSxFQUFaQSxxQkFmcUI7QUFnQnJCQyxFQUFBQSxTQUFTLEVBQVRBO0FBaEJxQixDQUFoQjs7QUFtQkEsSUFBTUMsS0FBSyxHQUFHO0FBQ25CQyxFQUFBQSxrQkFBa0IsRUFBbEJBLDJCQURtQjtBQUVuQnZCLEVBQUFBLE1BQU0sa0NBQU9BLE1BQVAsR0FBa0JFLE1BQWxCLENBRmE7QUFHbkJzQixFQUFBQSxhQUFhLEVBQWJBLHNCQUhtQjtBQUluQkMsRUFBQUEsbUJBQW1CLEVBQW5CQSw0QkFKbUI7QUFLbkJ4QixFQUFBQSxPQUFPLGtDQUFPQSxPQUFQLEdBQW1CSSxPQUFuQixDQUxZO0FBTW5CcUIsRUFBQUEsU0FBUyxFQUFUQTtBQU5tQixDQUFkOztBQVNBLElBQU1DLElBQUksR0FBRyxxQkFBVUwsS0FBVixDQUFiOztlQUVRSyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXRpbHMsIHdpdGhUaGVtZSB9IGZyb20gJ0ByanNmL2NvcmUnO1xyXG5cclxuaW1wb3J0IERlc2NyaXB0aW9uRmllbGQgZnJvbSAnLi9maWVsZHMvRGVzY3JpcHRpb25GaWVsZCc7XHJcbmltcG9ydCBUaXRsZUZpZWxkIGZyb20gJy4vZmllbGRzL1RpdGxlRmllbGQnO1xyXG5cclxuaW1wb3J0IEZpZWxkVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMvRmllbGRUZW1wbGF0ZSc7XHJcbmltcG9ydCBPYmplY3RGaWVsZFRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL09iamVjdEZpZWxkVGVtcGxhdGUnO1xyXG5pbXBvcnQgQXJyYXlGaWVsZFRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL0FycmF5RmllbGRUZW1wbGF0ZSc7XHJcblxyXG5pbXBvcnQgQWx0RGF0ZVRpbWVXaWRnZXQgZnJvbSAnLi93aWRnZXRzL0FsdERhdGVUaW1lV2lkZ2V0JztcclxuaW1wb3J0IEFsdERhdGVXaWRnZXQgZnJvbSAnLi93aWRnZXRzL0FsdERhdGVXaWRnZXQnO1xyXG5pbXBvcnQgQ2hlY2tib3hlc1dpZGdldCBmcm9tICcuL3dpZGdldHMvQ2hlY2tib3hlc1dpZGdldCc7XHJcbmltcG9ydCBDaGVja2JveFdpZGdldCBmcm9tICcuL3dpZGdldHMvQ2hlY2tib3hXaWRnZXQnO1xyXG5pbXBvcnQgQ29sb3JXaWRnZXQgZnJvbSAnLi93aWRnZXRzL0NvbG9yV2lkZ2V0JztcclxuaW1wb3J0IERhdGVUaW1lV2lkZ2V0IGZyb20gJy4vd2lkZ2V0cy9EYXRlVGltZVdpZGdldCc7XHJcbmltcG9ydCBEYXRlV2lkZ2V0IGZyb20gJy4vd2lkZ2V0cy9EYXRlV2lkZ2V0JztcclxuaW1wb3J0IEVtYWlsV2lkZ2V0IGZyb20gJy4vd2lkZ2V0cy9FbWFpbFdpZGdldCc7XHJcbmltcG9ydCBQYXNzd29yZFdpZGdldCBmcm9tICcuL3dpZGdldHMvUGFzc3dvcmRXaWRnZXQnO1xyXG5pbXBvcnQgUmFkaW9XaWRnZXQgZnJvbSAnLi93aWRnZXRzL1JhZGlvV2lkZ2V0JztcclxuaW1wb3J0IFJhbmdlV2lkZ2V0IGZyb20gJy4vd2lkZ2V0cy9SYW5nZVdpZGdldCc7XHJcbmltcG9ydCBTZWxlY3RXaWRnZXQgZnJvbSAnLi93aWRnZXRzL1NlbGVjdFdpZGdldCc7XHJcbmltcG9ydCBUZXh0YXJlYVdpZGdldCBmcm9tICcuL3dpZGdldHMvVGV4dGFyZWFXaWRnZXQnO1xyXG5pbXBvcnQgVGV4dFdpZGdldCBmcm9tICcuL3dpZGdldHMvVGV4dFdpZGdldCc7XHJcbmltcG9ydCBVcERvd25XaWRnZXQgZnJvbSAnLi93aWRnZXRzL1VwRG93bldpZGdldCc7XHJcbmltcG9ydCBVUkxXaWRnZXQgZnJvbSAnLi93aWRnZXRzL1VSTFdpZGdldCc7XHJcblxyXG5pbXBvcnQgRXJyb3JMaXN0IGZyb20gJy4vRXJyb3JMaXN0JztcclxuXHJcbi8vIGltcG9ydCAnLi9pbmRleC5sZXNzJztcclxuXHJcbmNvbnN0IHsgZ2V0RGVmYXVsdFJlZ2lzdHJ5IH0gPSB1dGlscztcclxuY29uc3QgeyBmaWVsZHMsIHdpZGdldHMgfSA9IGdldERlZmF1bHRSZWdpc3RyeSgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZpZWxkcyA9IHtcclxuICBEZXNjcmlwdGlvbkZpZWxkLFxyXG4gIFRpdGxlRmllbGQsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgV2lkZ2V0cyA9IHtcclxuICBBbHREYXRlVGltZVdpZGdldCxcclxuICBBbHREYXRlV2lkZ2V0LFxyXG4gIENoZWNrYm94ZXNXaWRnZXQsXHJcbiAgQ2hlY2tib3hXaWRnZXQsXHJcbiAgQ29sb3JXaWRnZXQsXHJcbiAgRGF0ZVRpbWVXaWRnZXQsXHJcbiAgRGF0ZVdpZGdldCxcclxuICBFbWFpbFdpZGdldCxcclxuICBQYXNzd29yZFdpZGdldCxcclxuICBSYWRpb1dpZGdldCxcclxuICBSYW5nZVdpZGdldCxcclxuICBTZWxlY3RXaWRnZXQsXHJcbiAgVGV4dGFyZWFXaWRnZXQsXHJcbiAgVGV4dFdpZGdldCxcclxuICBVcERvd25XaWRnZXQsXHJcbiAgVVJMV2lkZ2V0LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFRoZW1lID0ge1xyXG4gIEFycmF5RmllbGRUZW1wbGF0ZSxcclxuICBmaWVsZHM6IHsgLi4uZmllbGRzLCAuLi5GaWVsZHMgfSxcclxuICBGaWVsZFRlbXBsYXRlLFxyXG4gIE9iamVjdEZpZWxkVGVtcGxhdGUsXHJcbiAgd2lkZ2V0czogeyAuLi53aWRnZXRzLCAuLi5XaWRnZXRzIH0sXHJcbiAgRXJyb3JMaXN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm0gPSB3aXRoVGhlbWUoVGhlbWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcclxuIl19