function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

function IconButton(props) {
  var icon = props.icon,
      className = props.className,
      otherProps = _objectWithoutProperties(props, ["icon", "className"]);

  return React.createElement(Button, _extends({
    icon: icon,
    className: className
  }, otherProps));
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string
};
export default IconButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9JY29uQnV0dG9uL0ljb25CdXR0b24uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJCdXR0b24iLCJJY29uQnV0dG9uIiwicHJvcHMiLCJpY29uIiwiY2xhc3NOYW1lIiwib3RoZXJQcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsTUFBVCxRQUF1QixtQkFBdkI7O0FBRUEsU0FBU0MsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQSxNQUNqQkMsSUFEaUIsR0FDa0JELEtBRGxCLENBQ2pCQyxJQURpQjtBQUFBLE1BQ1hDLFNBRFcsR0FDa0JGLEtBRGxCLENBQ1hFLFNBRFc7QUFBQSxNQUNHQyxVQURILDRCQUNrQkgsS0FEbEI7O0FBRXpCLFNBQVEsb0JBQUMsTUFBRDtBQUFRLElBQUEsSUFBSSxFQUFFQyxJQUFkO0FBQW9CLElBQUEsU0FBUyxFQUFFQztBQUEvQixLQUE4Q0MsVUFBOUMsRUFBUjtBQUNEOztBQUVESixVQUFVLENBQUNLLFNBQVgsR0FBdUI7QUFDckJILEVBQUFBLElBQUksRUFBRUosU0FBUyxDQUFDUSxNQUFWLENBQWlCQyxVQURGO0FBRXJCSixFQUFBQSxTQUFTLEVBQUVMLFNBQVMsQ0FBQ1E7QUFGQSxDQUF2QjtBQUtBLGVBQWVOLFVBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBJY29uQnV0dG9uKHByb3BzKSB7XHJcbiAgY29uc3QgeyBpY29uLCBjbGFzc05hbWUsIC4uLm90aGVyUHJvcHMgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoPEJ1dHRvbiBpY29uPXtpY29ufSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLm90aGVyUHJvcHN9IC8+KTtcclxufVxyXG5cclxuSWNvbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb25CdXR0b247XHJcbiJdfQ==