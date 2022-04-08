"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-array-index-key */

/**
 *
 * @param errors
 * @returns {*}
 * @constructor
 */
function ErrorList(_ref) {
  var errors = _ref.errors;
  return _react.default.createElement(_semanticUiReact.Message, {
    negative: true
  }, _react.default.createElement(_semanticUiReact.Message.Header, null, "Errors"), _react.default.createElement(_semanticUiReact.Message.List, null, errors.map(function (error, index) {
    return _react.default.createElement(_semanticUiReact.Message.Item, {
      key: "error-".concat(index)
    }, error.stack);
  })));
}

ErrorList.propTypes = {
  errors: _propTypes.default.array
};
var _default = ErrorList;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9FcnJvckxpc3QvRXJyb3JMaXN0LmpzIl0sIm5hbWVzIjpbIkVycm9yTGlzdCIsImVycm9ycyIsIm1hcCIsImVycm9yIiwiaW5kZXgiLCJzdGFjayIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFIQTs7QUFLQTs7Ozs7O0FBTUEsU0FBU0EsU0FBVCxPQUErQjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUM3QixTQUNFLDZCQUFDLHdCQUFEO0FBQVMsSUFBQSxRQUFRO0FBQWpCLEtBQ0UsNkJBQUMsd0JBQUQsQ0FBUyxNQUFULGlCQURGLEVBRUUsNkJBQUMsd0JBQUQsQ0FBUyxJQUFULFFBQ0dBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLFdBQ1YsNkJBQUMsd0JBQUQsQ0FBUyxJQUFUO0FBQWMsTUFBQSxHQUFHLGtCQUFXQSxLQUFYO0FBQWpCLE9BQXNDRCxLQUFLLENBQUNFLEtBQTVDLENBRFU7QUFBQSxHQUFYLENBREgsQ0FGRixDQURGO0FBVUQ7O0FBRURMLFNBQVMsQ0FBQ00sU0FBVixHQUFzQjtBQUNwQkwsRUFBQUEsTUFBTSxFQUFFTSxtQkFBVUM7QUFERSxDQUF0QjtlQUllUixTIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIGVycm9yc1xyXG4gKiBAcmV0dXJucyB7Kn1cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBFcnJvckxpc3QoeyBlcnJvcnMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWVzc2FnZSBuZWdhdGl2ZT5cclxuICAgICAgPE1lc3NhZ2UuSGVhZGVyPkVycm9yczwvTWVzc2FnZS5IZWFkZXI+XHJcbiAgICAgIDxNZXNzYWdlLkxpc3Q+XHJcbiAgICAgICAge2Vycm9ycy5tYXAoKGVycm9yLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPE1lc3NhZ2UuSXRlbSBrZXk9e2BlcnJvci0ke2luZGV4fWB9PntlcnJvci5zdGFja308L01lc3NhZ2UuSXRlbT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9NZXNzYWdlLkxpc3Q+XHJcbiAgICA8L01lc3NhZ2U+XHJcbiAgKTtcclxufVxyXG5cclxuRXJyb3JMaXN0LnByb3BUeXBlcyA9IHtcclxuICBlcnJvcnM6IFByb3BUeXBlcy5hcnJheSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yTGlzdDtcclxuIl19