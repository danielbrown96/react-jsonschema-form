"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _DescriptionField = _interopRequireDefault(require("../DescriptionField"));

var _HelpField = _interopRequireDefault(require("../HelpField"));

var _RawErrors = _interopRequireDefault(require("../RawErrors"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function FieldTemplate(_ref) {
  var id = _ref.id,
      children = _ref.children,
      className = _ref.className,
      classNames = _ref.classNames,
      displayLabel = _ref.displayLabel,
      label = _ref.label,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors,
      rawHelp = _ref.rawHelp,
      rawDescription = _ref.rawDescription,
      props = _objectWithoutProperties(_ref, ["id", "children", "className", "classNames", "displayLabel", "label", "rawErrors", "rawHelp", "rawDescription"]);

  var semanticProps = (0, _util.getSemanticProps)(props);
  var wrapLabel = semanticProps.wrapLabel,
      wrapContent = semanticProps.wrapContent;
  var errorOptions = (0, _util.getSemanticErrorProps)(props);
  return _react.default.createElement(_semanticUiReact.Form.Group, {
    key: id,
    widths: "equal",
    grouped: true
  }, _react.default.createElement(_util.MaybeWrap, {
    wrap: wrapContent,
    className: "sui-field-content"
  }, children, displayLabel && rawDescription && _react.default.createElement(_util.MaybeWrap, {
    wrap: wrapLabel,
    className: "sui-field-label"
  }, rawDescription && _react.default.createElement(_DescriptionField.default, {
    description: rawDescription
  })), _react.default.createElement(_HelpField.default, {
    helpText: rawHelp,
    id: id + "__help"
  }), _react.default.createElement(_RawErrors.default, {
    errors: rawErrors,
    options: errorOptions
  })));
}

var _default = FieldTemplate;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9GaWVsZFRlbXBsYXRlL0ZpZWxkVGVtcGxhdGUuanMiXSwibmFtZXMiOlsiRmllbGRUZW1wbGF0ZSIsImlkIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJjbGFzc05hbWVzIiwiZGlzcGxheUxhYmVsIiwibGFiZWwiLCJyYXdFcnJvcnMiLCJyYXdIZWxwIiwicmF3RGVzY3JpcHRpb24iLCJwcm9wcyIsInNlbWFudGljUHJvcHMiLCJ3cmFwTGFiZWwiLCJ3cmFwQ29udGVudCIsImVycm9yT3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLFNBQVNBLGFBQVQsT0FXRztBQUFBLE1BVkRDLEVBVUMsUUFWREEsRUFVQztBQUFBLE1BVERDLFFBU0MsUUFUREEsUUFTQztBQUFBLE1BUkRDLFNBUUMsUUFSREEsU0FRQztBQUFBLE1BUERDLFVBT0MsUUFQREEsVUFPQztBQUFBLE1BTkRDLFlBTUMsUUFOREEsWUFNQztBQUFBLE1BTERDLEtBS0MsUUFMREEsS0FLQztBQUFBLDRCQUpEQyxTQUlDO0FBQUEsTUFKREEsU0FJQywrQkFKVyxFQUlYO0FBQUEsTUFIREMsT0FHQyxRQUhEQSxPQUdDO0FBQUEsTUFGREMsY0FFQyxRQUZEQSxjQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxNQUFNQyxhQUFhLEdBQUcsNEJBQWlCRCxLQUFqQixDQUF0QjtBQURDLE1BRU9FLFNBRlAsR0FFa0NELGFBRmxDLENBRU9DLFNBRlA7QUFBQSxNQUVrQkMsV0FGbEIsR0FFa0NGLGFBRmxDLENBRWtCRSxXQUZsQjtBQUdELE1BQU1DLFlBQVksR0FBRyxpQ0FBc0JKLEtBQXRCLENBQXJCO0FBQ0EsU0FDRSw2QkFBQyxxQkFBRCxDQUFNLEtBQU47QUFBWSxJQUFBLEdBQUcsRUFBRVQsRUFBakI7QUFBcUIsSUFBQSxNQUFNLEVBQUMsT0FBNUI7QUFBb0MsSUFBQSxPQUFPO0FBQTNDLEtBQ0UsNkJBQUMsZUFBRDtBQUFXLElBQUEsSUFBSSxFQUFFWSxXQUFqQjtBQUE4QixJQUFBLFNBQVMsRUFBQztBQUF4QyxLQUNHWCxRQURILEVBRUdHLFlBQVksSUFBSUksY0FBaEIsSUFDQyw2QkFBQyxlQUFEO0FBQVcsSUFBQSxJQUFJLEVBQUVHLFNBQWpCO0FBQTRCLElBQUEsU0FBUyxFQUFDO0FBQXRDLEtBQ0dILGNBQWMsSUFDYiw2QkFBQyx5QkFBRDtBQUFrQixJQUFBLFdBQVcsRUFBRUE7QUFBL0IsSUFGSixDQUhKLEVBU0UsNkJBQUMsa0JBQUQ7QUFBVyxJQUFBLFFBQVEsRUFBRUQsT0FBckI7QUFBOEIsSUFBQSxFQUFFLEVBQUVQLEVBQUUsR0FBRztBQUF2QyxJQVRGLEVBVUUsNkJBQUMsa0JBQUQ7QUFBVyxJQUFBLE1BQU0sRUFBRU0sU0FBbkI7QUFBOEIsSUFBQSxPQUFPLEVBQUVPO0FBQXZDLElBVkYsQ0FERixDQURGO0FBZ0JEOztlQUVjZCxhIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IERlc2NyaXB0aW9uRmllbGQgZnJvbSBcIi4uL0Rlc2NyaXB0aW9uRmllbGRcIjtcclxuaW1wb3J0IEhlbHBGaWVsZCBmcm9tIFwiLi4vSGVscEZpZWxkXCI7XHJcbmltcG9ydCBSYXdFcnJvcnMgZnJvbSBcIi4uL1Jhd0Vycm9yc1wiO1xyXG5pbXBvcnQgeyBnZXRTZW1hbnRpY1Byb3BzLCBnZXRTZW1hbnRpY0Vycm9yUHJvcHMsIE1heWJlV3JhcCB9IGZyb20gXCIuLi91dGlsXCI7XHJcblxyXG5mdW5jdGlvbiBGaWVsZFRlbXBsYXRlKHtcclxuICBpZCxcclxuICBjaGlsZHJlbixcclxuICBjbGFzc05hbWUsIC8vIHBhc3MgY2xhc3NOYW1lIGZvciBzdHlsaW5nIGxpYnMgKGxpa2Ugc3R5bGVkLWNvbXBvbmVudHMpXHJcbiAgY2xhc3NOYW1lcyxcclxuICBkaXNwbGF5TGFiZWwsXHJcbiAgbGFiZWwsXHJcbiAgcmF3RXJyb3JzID0gW10sXHJcbiAgcmF3SGVscCxcclxuICByYXdEZXNjcmlwdGlvbixcclxuICAuLi5wcm9wc1xyXG59KSB7XHJcbiAgY29uc3Qgc2VtYW50aWNQcm9wcyA9IGdldFNlbWFudGljUHJvcHMocHJvcHMpO1xyXG4gIGNvbnN0IHsgd3JhcExhYmVsLCB3cmFwQ29udGVudCB9ID0gc2VtYW50aWNQcm9wcztcclxuICBjb25zdCBlcnJvck9wdGlvbnMgPSBnZXRTZW1hbnRpY0Vycm9yUHJvcHMocHJvcHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybS5Hcm91cCBrZXk9e2lkfSB3aWR0aHM9XCJlcXVhbFwiIGdyb3VwZWQ+XHJcbiAgICAgIDxNYXliZVdyYXAgd3JhcD17d3JhcENvbnRlbnR9IGNsYXNzTmFtZT1cInN1aS1maWVsZC1jb250ZW50XCI+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIHtkaXNwbGF5TGFiZWwgJiYgcmF3RGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgICAgPE1heWJlV3JhcCB3cmFwPXt3cmFwTGFiZWx9IGNsYXNzTmFtZT1cInN1aS1maWVsZC1sYWJlbFwiPlxyXG4gICAgICAgICAgICB7cmF3RGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgICAgICAgIDxEZXNjcmlwdGlvbkZpZWxkIGRlc2NyaXB0aW9uPXtyYXdEZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvTWF5YmVXcmFwPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPEhlbHBGaWVsZCBoZWxwVGV4dD17cmF3SGVscH0gaWQ9e2lkICsgXCJfX2hlbHBcIn0gLz5cclxuICAgICAgICA8UmF3RXJyb3JzIGVycm9ycz17cmF3RXJyb3JzfSBvcHRpb25zPXtlcnJvck9wdGlvbnN9IC8+XHJcbiAgICAgIDwvTWF5YmVXcmFwPlxyXG4gICAgPC9Gb3JtLkdyb3VwPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpZWxkVGVtcGxhdGU7XHJcbiJdfQ==