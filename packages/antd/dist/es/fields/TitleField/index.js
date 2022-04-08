function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import classNames from 'classnames';
import { withConfigConsumer } from 'antd/lib/config-provider/context';

var TitleField = function TitleField(_ref) {
  var _classNames;

  var formContext = _ref.formContext,
      id = _ref.id,
      prefixCls = _ref.prefixCls,
      required = _ref.required,
      title = _ref.title;
  var _formContext$colon = formContext.colon,
      colon = _formContext$colon === void 0 ? true : _formContext$colon;
  var labelChildren = title;

  if (colon && typeof title === 'string' && title.trim() !== '') {
    labelChildren = title.replace(/[：:]\s*$/, '');
  }

  var labelClassName = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-item-required"), required), _defineProperty(_classNames, "".concat(prefixCls, "-item-no-colon"), !colon), _classNames));

  var handleLabelClick = function handleLabelClick() {
    if (!id) {
      return;
    }

    var control = document.querySelector("[id=\"".concat(id, "\"]"));

    if (control && control.focus) {
      control.focus();
    }
  };

  return title ? /*#__PURE__*/React.createElement("label", {
    className: labelClassName,
    htmlFor: id,
    onClick: handleLabelClick,
    title: typeof title === 'string' ? title : ''
  }, labelChildren) : null;
};

TitleField.defaultProps = {
  formContext: {}
};
export default withConfigConsumer({
  prefixCls: 'form'
})(TitleField);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9maWVsZHMvVGl0bGVGaWVsZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImNsYXNzTmFtZXMiLCJ3aXRoQ29uZmlnQ29uc3VtZXIiLCJUaXRsZUZpZWxkIiwiZm9ybUNvbnRleHQiLCJpZCIsInByZWZpeENscyIsInJlcXVpcmVkIiwidGl0bGUiLCJjb2xvbiIsImxhYmVsQ2hpbGRyZW4iLCJ0cmltIiwicmVwbGFjZSIsImxhYmVsQ2xhc3NOYW1lIiwiaGFuZGxlTGFiZWxDbGljayIsImNvbnRyb2wiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUVBLFNBQVNDLGtCQUFULFFBQW1DLGtDQUFuQzs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQWlCYjtBQUFBOztBQUFBLE1BYkpDLFdBYUksUUFiSkEsV0FhSTtBQUFBLE1BWEpDLEVBV0ksUUFYSkEsRUFXSTtBQUFBLE1BUEpDLFNBT0ksUUFQSkEsU0FPSTtBQUFBLE1BSkpDLFFBSUksUUFKSkEsUUFJSTtBQUFBLE1BRkpDLEtBRUksUUFGSkEsS0FFSTtBQUFBLDJCQUNxQkosV0FEckIsQ0FDSUssS0FESjtBQUFBLE1BQ0lBLEtBREosbUNBQ1ksSUFEWjtBQUdKLE1BQUlDLGFBQWEsR0FBR0YsS0FBcEI7O0FBQ0EsTUFBSUMsS0FBSyxJQUFJLE9BQU9ELEtBQVAsS0FBaUIsUUFBMUIsSUFBc0NBLEtBQUssQ0FBQ0csSUFBTixPQUFpQixFQUEzRCxFQUErRDtBQUM3REQsSUFBQUEsYUFBYSxHQUFHRixLQUFLLENBQUNJLE9BQU4sQ0FBYyxVQUFkLEVBQTBCLEVBQTFCLENBQWhCO0FBQ0Q7O0FBRUQsTUFBTUMsY0FBYyxHQUFHWixVQUFVLDJEQUMzQkssU0FEMkIscUJBQ0NDLFFBREQsMENBRTNCRCxTQUYyQixxQkFFQyxDQUFDRyxLQUZGLGdCQUFqQzs7QUFLQSxNQUFNSyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0IsUUFBSSxDQUFDVCxFQUFMLEVBQVM7QUFDUDtBQUNEOztBQUVELFFBQU1VLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULGlCQUErQlosRUFBL0IsU0FBaEI7O0FBQ0EsUUFBSVUsT0FBTyxJQUFJQSxPQUFPLENBQUNHLEtBQXZCLEVBQThCO0FBQzVCSCxNQUFBQSxPQUFPLENBQUNHLEtBQVI7QUFDRDtBQUNGLEdBVEQ7O0FBV0EsU0FBT1YsS0FBSyxnQkFDVjtBQUNFLElBQUEsU0FBUyxFQUFFSyxjQURiO0FBRUUsSUFBQSxPQUFPLEVBQUVSLEVBRlg7QUFHRSxJQUFBLE9BQU8sRUFBRVMsZ0JBSFg7QUFJRSxJQUFBLEtBQUssRUFBRSxPQUFPTixLQUFQLEtBQWlCLFFBQWpCLEdBQTRCQSxLQUE1QixHQUFvQztBQUo3QyxLQU1HRSxhQU5ILENBRFUsR0FTUixJQVRKO0FBVUQsQ0FuREQ7O0FBcURBUCxVQUFVLENBQUNnQixZQUFYLEdBQTBCO0FBQ3hCZixFQUFBQSxXQUFXLEVBQUU7QUFEVyxDQUExQjtBQUlBLGVBQWVGLGtCQUFrQixDQUFDO0FBQUVJLEVBQUFBLFNBQVMsRUFBRTtBQUFiLENBQUQsQ0FBbEIsQ0FBMENILFVBQTFDLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmltcG9ydCB7IHdpdGhDb25maWdDb25zdW1lciB9IGZyb20gJ2FudGQvbGliL2NvbmZpZy1wcm92aWRlci9jb250ZXh0JztcclxuXHJcbmNvbnN0IFRpdGxlRmllbGQgPSAoe1xyXG4gIC8vIGF1dG9mb2N1cyxcclxuICAvLyBkaXNhYmxlZCxcclxuICAvLyBlcnJvclNjaGVtYSxcclxuICBmb3JtQ29udGV4dCxcclxuICAvLyBmb3JtRGF0YSxcclxuICBpZCxcclxuICAvLyBpZFNjaGVtYSxcclxuICAvLyBuYW1lLFxyXG4gIC8vIG9uQ2hhbmdlLFxyXG4gIHByZWZpeENscyxcclxuICAvLyByZWFkb25seSxcclxuICAvLyByZWdpc3RyeSxcclxuICByZXF1aXJlZCxcclxuICAvLyBzY2hlbWEsXHJcbiAgdGl0bGUsXHJcbiAgLy8gdWlTY2hlbWEsXHJcbn0pID0+IHtcclxuICBjb25zdCB7IGNvbG9uID0gdHJ1ZSB9ID0gZm9ybUNvbnRleHQ7XHJcblxyXG4gIGxldCBsYWJlbENoaWxkcmVuID0gdGl0bGU7XHJcbiAgaWYgKGNvbG9uICYmIHR5cGVvZiB0aXRsZSA9PT0gJ3N0cmluZycgJiYgdGl0bGUudHJpbSgpICE9PSAnJykge1xyXG4gICAgbGFiZWxDaGlsZHJlbiA9IHRpdGxlLnJlcGxhY2UoL1vvvJo6XVxccyokLywgJycpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbGFiZWxDbGFzc05hbWUgPSBjbGFzc05hbWVzKHtcclxuICAgIFtgJHtwcmVmaXhDbHN9LWl0ZW0tcmVxdWlyZWRgXTogcmVxdWlyZWQsXHJcbiAgICBbYCR7cHJlZml4Q2xzfS1pdGVtLW5vLWNvbG9uYF06ICFjb2xvbixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTGFiZWxDbGljayA9ICgpID0+IHtcclxuICAgIGlmICghaWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2lkfVwiXWApO1xyXG4gICAgaWYgKGNvbnRyb2wgJiYgY29udHJvbC5mb2N1cykge1xyXG4gICAgICBjb250cm9sLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHRpdGxlID8gKFxyXG4gICAgPGxhYmVsXHJcbiAgICAgIGNsYXNzTmFtZT17bGFiZWxDbGFzc05hbWV9XHJcbiAgICAgIGh0bWxGb3I9e2lkfVxyXG4gICAgICBvbkNsaWNrPXtoYW5kbGVMYWJlbENsaWNrfVxyXG4gICAgICB0aXRsZT17dHlwZW9mIHRpdGxlID09PSAnc3RyaW5nJyA/IHRpdGxlIDogJyd9XHJcbiAgICA+XHJcbiAgICAgIHtsYWJlbENoaWxkcmVufVxyXG4gICAgPC9sYWJlbD5cclxuICApIDogbnVsbDtcclxufTtcclxuXHJcblRpdGxlRmllbGQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGZvcm1Db250ZXh0OiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhDb25maWdDb25zdW1lcih7IHByZWZpeENsczogJ2Zvcm0nIH0pKFRpdGxlRmllbGQpO1xyXG4iXX0=