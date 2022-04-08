/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Message } from "semantic-ui-react";
/**
 * @return {null}
 */

function HelpField(_ref) {
  var helpText = _ref.helpText,
      id = _ref.id;

  if (helpText) {
    return React.createElement(Message, {
      size: "mini",
      info: true,
      id: id,
      content: helpText
    });
  }

  return null;
}

HelpField.propTypes = {
  helpText: PropTypes.string,
  id: PropTypes.string
};
export default HelpField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9IZWxwRmllbGQvSGVscEZpZWxkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTWVzc2FnZSIsIkhlbHBGaWVsZCIsImhlbHBUZXh0IiwiaWQiLCJwcm9wVHlwZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxPQUFULFFBQXdCLG1CQUF4QjtBQUVBOzs7O0FBR0EsU0FBU0MsU0FBVCxPQUFxQztBQUFBLE1BQWhCQyxRQUFnQixRQUFoQkEsUUFBZ0I7QUFBQSxNQUFOQyxFQUFNLFFBQU5BLEVBQU07O0FBQ25DLE1BQUlELFFBQUosRUFBYztBQUNaLFdBQU8sb0JBQUMsT0FBRDtBQUFTLE1BQUEsSUFBSSxFQUFDLE1BQWQ7QUFBcUIsTUFBQSxJQUFJLE1BQXpCO0FBQTBCLE1BQUEsRUFBRSxFQUFFQyxFQUE5QjtBQUFrQyxNQUFBLE9BQU8sRUFBRUQ7QUFBM0MsTUFBUDtBQUNEOztBQUNELFNBQU8sSUFBUDtBQUNEOztBQUVERCxTQUFTLENBQUNHLFNBQVYsR0FBc0I7QUFDcEJGLEVBQUFBLFFBQVEsRUFBRUgsU0FBUyxDQUFDTSxNQURBO0FBRXBCRixFQUFBQSxFQUFFLEVBQUVKLFNBQVMsQ0FBQ007QUFGTSxDQUF0QjtBQUtBLGVBQWVKLFNBQWYiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG4vKipcclxuICogQHJldHVybiB7bnVsbH1cclxuICovXHJcbmZ1bmN0aW9uIEhlbHBGaWVsZCh7IGhlbHBUZXh0LCBpZCB9KSB7XHJcbiAgaWYgKGhlbHBUZXh0KSB7XHJcbiAgICByZXR1cm4gPE1lc3NhZ2Ugc2l6ZT1cIm1pbmlcIiBpbmZvIGlkPXtpZH0gY29udGVudD17aGVscFRleHR9IC8+O1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuSGVscEZpZWxkLnByb3BUeXBlcyA9IHtcclxuICBoZWxwVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlbHBGaWVsZDtcclxuIl19