function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/prop-types */
import React from "react";
import { Form } from "semantic-ui-react";
import DescriptionField from "../DescriptionField";
import HelpField from "../HelpField";
import RawErrors from "../RawErrors";
import { getSemanticProps, getSemanticErrorProps, MaybeWrap } from "../util";

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

  var semanticProps = getSemanticProps(props);
  var wrapLabel = semanticProps.wrapLabel,
      wrapContent = semanticProps.wrapContent;
  var errorOptions = getSemanticErrorProps(props);
  return React.createElement(Form.Group, {
    key: id,
    widths: "equal",
    grouped: true
  }, React.createElement(MaybeWrap, {
    wrap: wrapContent,
    className: "sui-field-content"
  }, children, displayLabel && rawDescription && React.createElement(MaybeWrap, {
    wrap: wrapLabel,
    className: "sui-field-label"
  }, rawDescription && React.createElement(DescriptionField, {
    description: rawDescription
  })), React.createElement(HelpField, {
    helpText: rawHelp,
    id: id + "__help"
  }), React.createElement(RawErrors, {
    errors: rawErrors,
    options: errorOptions
  })));
}

export default FieldTemplate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9GaWVsZFRlbXBsYXRlL0ZpZWxkVGVtcGxhdGUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtIiwiRGVzY3JpcHRpb25GaWVsZCIsIkhlbHBGaWVsZCIsIlJhd0Vycm9ycyIsImdldFNlbWFudGljUHJvcHMiLCJnZXRTZW1hbnRpY0Vycm9yUHJvcHMiLCJNYXliZVdyYXAiLCJGaWVsZFRlbXBsYXRlIiwiaWQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImNsYXNzTmFtZXMiLCJkaXNwbGF5TGFiZWwiLCJsYWJlbCIsInJhd0Vycm9ycyIsInJhd0hlbHAiLCJyYXdEZXNjcmlwdGlvbiIsInByb3BzIiwic2VtYW50aWNQcm9wcyIsIndyYXBMYWJlbCIsIndyYXBDb250ZW50IiwiZXJyb3JPcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixtQkFBckI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QixxQkFBN0I7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGNBQXRCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixjQUF0QjtBQUNBLFNBQVNDLGdCQUFULEVBQTJCQyxxQkFBM0IsRUFBa0RDLFNBQWxELFFBQW1FLFNBQW5FOztBQUVBLFNBQVNDLGFBQVQsT0FXRztBQUFBLE1BVkRDLEVBVUMsUUFWREEsRUFVQztBQUFBLE1BVERDLFFBU0MsUUFUREEsUUFTQztBQUFBLE1BUkRDLFNBUUMsUUFSREEsU0FRQztBQUFBLE1BUERDLFVBT0MsUUFQREEsVUFPQztBQUFBLE1BTkRDLFlBTUMsUUFOREEsWUFNQztBQUFBLE1BTERDLEtBS0MsUUFMREEsS0FLQztBQUFBLDRCQUpEQyxTQUlDO0FBQUEsTUFKREEsU0FJQywrQkFKVyxFQUlYO0FBQUEsTUFIREMsT0FHQyxRQUhEQSxPQUdDO0FBQUEsTUFGREMsY0FFQyxRQUZEQSxjQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxNQUFNQyxhQUFhLEdBQUdkLGdCQUFnQixDQUFDYSxLQUFELENBQXRDO0FBREMsTUFFT0UsU0FGUCxHQUVrQ0QsYUFGbEMsQ0FFT0MsU0FGUDtBQUFBLE1BRWtCQyxXQUZsQixHQUVrQ0YsYUFGbEMsQ0FFa0JFLFdBRmxCO0FBR0QsTUFBTUMsWUFBWSxHQUFHaEIscUJBQXFCLENBQUNZLEtBQUQsQ0FBMUM7QUFDQSxTQUNFLG9CQUFDLElBQUQsQ0FBTSxLQUFOO0FBQVksSUFBQSxHQUFHLEVBQUVULEVBQWpCO0FBQXFCLElBQUEsTUFBTSxFQUFDLE9BQTVCO0FBQW9DLElBQUEsT0FBTztBQUEzQyxLQUNFLG9CQUFDLFNBQUQ7QUFBVyxJQUFBLElBQUksRUFBRVksV0FBakI7QUFBOEIsSUFBQSxTQUFTLEVBQUM7QUFBeEMsS0FDR1gsUUFESCxFQUVHRyxZQUFZLElBQUlJLGNBQWhCLElBQ0Msb0JBQUMsU0FBRDtBQUFXLElBQUEsSUFBSSxFQUFFRyxTQUFqQjtBQUE0QixJQUFBLFNBQVMsRUFBQztBQUF0QyxLQUNHSCxjQUFjLElBQ2Isb0JBQUMsZ0JBQUQ7QUFBa0IsSUFBQSxXQUFXLEVBQUVBO0FBQS9CLElBRkosQ0FISixFQVNFLG9CQUFDLFNBQUQ7QUFBVyxJQUFBLFFBQVEsRUFBRUQsT0FBckI7QUFBOEIsSUFBQSxFQUFFLEVBQUVQLEVBQUUsR0FBRztBQUF2QyxJQVRGLEVBVUUsb0JBQUMsU0FBRDtBQUFXLElBQUEsTUFBTSxFQUFFTSxTQUFuQjtBQUE4QixJQUFBLE9BQU8sRUFBRU87QUFBdkMsSUFWRixDQURGLENBREY7QUFnQkQ7O0FBRUQsZUFBZWQsYUFBZiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBEZXNjcmlwdGlvbkZpZWxkIGZyb20gXCIuLi9EZXNjcmlwdGlvbkZpZWxkXCI7XHJcbmltcG9ydCBIZWxwRmllbGQgZnJvbSBcIi4uL0hlbHBGaWVsZFwiO1xyXG5pbXBvcnQgUmF3RXJyb3JzIGZyb20gXCIuLi9SYXdFcnJvcnNcIjtcclxuaW1wb3J0IHsgZ2V0U2VtYW50aWNQcm9wcywgZ2V0U2VtYW50aWNFcnJvclByb3BzLCBNYXliZVdyYXAgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5cclxuZnVuY3Rpb24gRmllbGRUZW1wbGF0ZSh7XHJcbiAgaWQsXHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xhc3NOYW1lLCAvLyBwYXNzIGNsYXNzTmFtZSBmb3Igc3R5bGluZyBsaWJzIChsaWtlIHN0eWxlZC1jb21wb25lbnRzKVxyXG4gIGNsYXNzTmFtZXMsXHJcbiAgZGlzcGxheUxhYmVsLFxyXG4gIGxhYmVsLFxyXG4gIHJhd0Vycm9ycyA9IFtdLFxyXG4gIHJhd0hlbHAsXHJcbiAgcmF3RGVzY3JpcHRpb24sXHJcbiAgLi4ucHJvcHNcclxufSkge1xyXG4gIGNvbnN0IHNlbWFudGljUHJvcHMgPSBnZXRTZW1hbnRpY1Byb3BzKHByb3BzKTtcclxuICBjb25zdCB7IHdyYXBMYWJlbCwgd3JhcENvbnRlbnQgfSA9IHNlbWFudGljUHJvcHM7XHJcbiAgY29uc3QgZXJyb3JPcHRpb25zID0gZ2V0U2VtYW50aWNFcnJvclByb3BzKHByb3BzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0uR3JvdXAga2V5PXtpZH0gd2lkdGhzPVwiZXF1YWxcIiBncm91cGVkPlxyXG4gICAgICA8TWF5YmVXcmFwIHdyYXA9e3dyYXBDb250ZW50fSBjbGFzc05hbWU9XCJzdWktZmllbGQtY29udGVudFwiPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICB7ZGlzcGxheUxhYmVsICYmIHJhd0Rlc2NyaXB0aW9uICYmIChcclxuICAgICAgICAgIDxNYXliZVdyYXAgd3JhcD17d3JhcExhYmVsfSBjbGFzc05hbWU9XCJzdWktZmllbGQtbGFiZWxcIj5cclxuICAgICAgICAgICAge3Jhd0Rlc2NyaXB0aW9uICYmIChcclxuICAgICAgICAgICAgICA8RGVzY3JpcHRpb25GaWVsZCBkZXNjcmlwdGlvbj17cmF3RGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L01heWJlV3JhcD5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxIZWxwRmllbGQgaGVscFRleHQ9e3Jhd0hlbHB9IGlkPXtpZCArIFwiX19oZWxwXCJ9IC8+XHJcbiAgICAgICAgPFJhd0Vycm9ycyBlcnJvcnM9e3Jhd0Vycm9yc30gb3B0aW9ucz17ZXJyb3JPcHRpb25zfSAvPlxyXG4gICAgICA8L01heWJlV3JhcD5cclxuICAgIDwvRm9ybS5Hcm91cD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWVsZFRlbXBsYXRlO1xyXG4iXX0=