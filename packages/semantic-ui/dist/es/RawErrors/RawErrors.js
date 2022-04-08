/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { Label, List } from "semantic-ui-react";
/**
 *
 * @param errors
 * @param displayError
 * @returns {*}
 * @constructor
 * @return {null}
 */

function RawErrors(_ref) {
  var errors = _ref.errors,
      options = _ref.options;
  var pointing = options.pointing,
      size = options.size;

  if (errors && errors.length > 0) {
    return React.createElement(Label, {
      color: "red",
      pointing: pointing || "above",
      size: size || "small",
      basic: true
    }, React.createElement(List, {
      bulleted: true
    }, errors.map(function (error) {
      return React.createElement(List.Item, {
        key: nanoid(),
        content: error
      });
    })));
  }

  return null;
}

RawErrors.defaultProps = {
  options: {
    pointing: "above",
    size: "small"
  }
};
RawErrors.propTypes = {
  options: PropTypes.object,
  errors: PropTypes.array
};
export default RawErrors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SYXdFcnJvcnMvUmF3RXJyb3JzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwibmFub2lkIiwiTGFiZWwiLCJMaXN0IiwiUmF3RXJyb3JzIiwiZXJyb3JzIiwib3B0aW9ucyIsInBvaW50aW5nIiwic2l6ZSIsImxlbmd0aCIsIm1hcCIsImVycm9yIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxNQUFULFFBQXVCLFFBQXZCO0FBQ0EsU0FBU0MsS0FBVCxFQUFnQkMsSUFBaEIsUUFBNEIsbUJBQTVCO0FBRUE7Ozs7Ozs7OztBQVFBLFNBQVNDLFNBQVQsT0FBd0M7QUFBQSxNQUFuQkMsTUFBbUIsUUFBbkJBLE1BQW1CO0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQUEsTUFDOUJDLFFBRDhCLEdBQ1hELE9BRFcsQ0FDOUJDLFFBRDhCO0FBQUEsTUFDcEJDLElBRG9CLEdBQ1hGLE9BRFcsQ0FDcEJFLElBRG9COztBQUV0QyxNQUFJSCxNQUFNLElBQUlBLE1BQU0sQ0FBQ0ksTUFBUCxHQUFnQixDQUE5QixFQUFpQztBQUMvQixXQUNFLG9CQUFDLEtBQUQ7QUFBTyxNQUFBLEtBQUssRUFBQyxLQUFiO0FBQW1CLE1BQUEsUUFBUSxFQUFFRixRQUFRLElBQUksT0FBekM7QUFBa0QsTUFBQSxJQUFJLEVBQUVDLElBQUksSUFBSSxPQUFoRTtBQUF5RSxNQUFBLEtBQUs7QUFBOUUsT0FDRSxvQkFBQyxJQUFEO0FBQU0sTUFBQSxRQUFRO0FBQWQsT0FDR0gsTUFBTSxDQUFDSyxHQUFQLENBQVcsVUFBQUMsS0FBSztBQUFBLGFBQ2Ysb0JBQUMsSUFBRCxDQUFNLElBQU47QUFBVyxRQUFBLEdBQUcsRUFBRVYsTUFBTSxFQUF0QjtBQUEwQixRQUFBLE9BQU8sRUFBRVU7QUFBbkMsUUFEZTtBQUFBLEtBQWhCLENBREgsQ0FERixDQURGO0FBU0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0Q7O0FBRURQLFNBQVMsQ0FBQ1EsWUFBVixHQUF5QjtBQUN2Qk4sRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLFFBQVEsRUFBRSxPQURIO0FBRVBDLElBQUFBLElBQUksRUFBRTtBQUZDO0FBRGMsQ0FBekI7QUFPQUosU0FBUyxDQUFDUyxTQUFWLEdBQXNCO0FBQ3BCUCxFQUFBQSxPQUFPLEVBQUNOLFNBQVMsQ0FBQ2MsTUFERTtBQUVwQlQsRUFBQUEsTUFBTSxFQUFFTCxTQUFTLENBQUNlO0FBRkUsQ0FBdEI7QUFLQSxlQUFlWCxTQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwibmFub2lkXCI7XHJcbmltcG9ydCB7IExhYmVsLCBMaXN0IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIGVycm9yc1xyXG4gKiBAcGFyYW0gZGlzcGxheUVycm9yXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHJldHVybiB7bnVsbH1cclxuICovXHJcbmZ1bmN0aW9uIFJhd0Vycm9ycyh7IGVycm9ycywgb3B0aW9ucyB9KSB7XHJcbiAgY29uc3QgeyBwb2ludGluZywgc2l6ZSB9ID0gb3B0aW9ucztcclxuICBpZiAoZXJyb3JzICYmIGVycm9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGFiZWwgY29sb3I9XCJyZWRcIiBwb2ludGluZz17cG9pbnRpbmcgfHwgXCJhYm92ZVwifSBzaXplPXtzaXplIHx8IFwic21hbGxcIn0gYmFzaWM+XHJcbiAgICAgICAgPExpc3QgYnVsbGV0ZWQ+XHJcbiAgICAgICAgICB7ZXJyb3JzLm1hcChlcnJvciA9PiAoXHJcbiAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXtuYW5vaWQoKX0gY29udGVudD17ZXJyb3J9IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgIDwvTGFiZWw+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuUmF3RXJyb3JzLmRlZmF1bHRQcm9wcyA9IHtcclxuICBvcHRpb25zOiB7XHJcbiAgICBwb2ludGluZzogXCJhYm92ZVwiLFxyXG4gICAgc2l6ZTogXCJzbWFsbFwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5SYXdFcnJvcnMucHJvcFR5cGVzID0ge1xyXG4gIG9wdGlvbnM6UHJvcFR5cGVzLm9iamVjdCxcclxuICBlcnJvcnM6IFByb3BUeXBlcy5hcnJheSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhd0Vycm9ycztcclxuIl19