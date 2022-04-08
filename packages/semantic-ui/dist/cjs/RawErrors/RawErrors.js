"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _nanoid = require("nanoid");

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-array-index-key */

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
    return _react.default.createElement(_semanticUiReact.Label, {
      color: "red",
      pointing: pointing || "above",
      size: size || "small",
      basic: true
    }, _react.default.createElement(_semanticUiReact.List, {
      bulleted: true
    }, errors.map(function (error) {
      return _react.default.createElement(_semanticUiReact.List.Item, {
        key: (0, _nanoid.nanoid)(),
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
  options: _propTypes.default.object,
  errors: _propTypes.default.array
};
var _default = RawErrors;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SYXdFcnJvcnMvUmF3RXJyb3JzLmpzIl0sIm5hbWVzIjpbIlJhd0Vycm9ycyIsImVycm9ycyIsIm9wdGlvbnMiLCJwb2ludGluZyIsInNpemUiLCJsZW5ndGgiLCJtYXAiLCJlcnJvciIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFKQTs7QUFNQTs7Ozs7Ozs7QUFRQSxTQUFTQSxTQUFULE9BQXdDO0FBQUEsTUFBbkJDLE1BQW1CLFFBQW5CQSxNQUFtQjtBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUFBLE1BQzlCQyxRQUQ4QixHQUNYRCxPQURXLENBQzlCQyxRQUQ4QjtBQUFBLE1BQ3BCQyxJQURvQixHQUNYRixPQURXLENBQ3BCRSxJQURvQjs7QUFFdEMsTUFBSUgsTUFBTSxJQUFJQSxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsQ0FBOUIsRUFBaUM7QUFDL0IsV0FDRSw2QkFBQyxzQkFBRDtBQUFPLE1BQUEsS0FBSyxFQUFDLEtBQWI7QUFBbUIsTUFBQSxRQUFRLEVBQUVGLFFBQVEsSUFBSSxPQUF6QztBQUFrRCxNQUFBLElBQUksRUFBRUMsSUFBSSxJQUFJLE9BQWhFO0FBQXlFLE1BQUEsS0FBSztBQUE5RSxPQUNFLDZCQUFDLHFCQUFEO0FBQU0sTUFBQSxRQUFRO0FBQWQsT0FDR0gsTUFBTSxDQUFDSyxHQUFQLENBQVcsVUFBQUMsS0FBSztBQUFBLGFBQ2YsNkJBQUMscUJBQUQsQ0FBTSxJQUFOO0FBQVcsUUFBQSxHQUFHLEVBQUUscUJBQWhCO0FBQTBCLFFBQUEsT0FBTyxFQUFFQTtBQUFuQyxRQURlO0FBQUEsS0FBaEIsQ0FESCxDQURGLENBREY7QUFTRDs7QUFDRCxTQUFPLElBQVA7QUFDRDs7QUFFRFAsU0FBUyxDQUFDUSxZQUFWLEdBQXlCO0FBQ3ZCTixFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsUUFBUSxFQUFFLE9BREg7QUFFUEMsSUFBQUEsSUFBSSxFQUFFO0FBRkM7QUFEYyxDQUF6QjtBQU9BSixTQUFTLENBQUNTLFNBQVYsR0FBc0I7QUFDcEJQLEVBQUFBLE9BQU8sRUFBQ1EsbUJBQVVDLE1BREU7QUFFcEJWLEVBQUFBLE1BQU0sRUFBRVMsbUJBQVVFO0FBRkUsQ0FBdEI7ZUFLZVosUyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWFycmF5LWluZGV4LWtleSAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiO1xyXG5pbXBvcnQgeyBMYWJlbCwgTGlzdCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBlcnJvcnNcclxuICogQHBhcmFtIGRpc3BsYXlFcnJvclxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEByZXR1cm4ge251bGx9XHJcbiAqL1xyXG5mdW5jdGlvbiBSYXdFcnJvcnMoeyBlcnJvcnMsIG9wdGlvbnMgfSkge1xyXG4gIGNvbnN0IHsgcG9pbnRpbmcsIHNpemUgfSA9IG9wdGlvbnM7XHJcbiAgaWYgKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExhYmVsIGNvbG9yPVwicmVkXCIgcG9pbnRpbmc9e3BvaW50aW5nIHx8IFwiYWJvdmVcIn0gc2l6ZT17c2l6ZSB8fCBcInNtYWxsXCJ9IGJhc2ljPlxyXG4gICAgICAgIDxMaXN0IGJ1bGxldGVkPlxyXG4gICAgICAgICAge2Vycm9ycy5tYXAoZXJyb3IgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17bmFub2lkKCl9IGNvbnRlbnQ9e2Vycm9yfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L0xhYmVsPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblJhd0Vycm9ycy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgb3B0aW9uczoge1xyXG4gICAgcG9pbnRpbmc6IFwiYWJvdmVcIixcclxuICAgIHNpemU6IFwic21hbGxcIixcclxuICB9LFxyXG59O1xyXG5cclxuUmF3RXJyb3JzLnByb3BUeXBlcyA9IHtcclxuICBvcHRpb25zOlByb3BUeXBlcy5vYmplY3QsXHJcbiAgZXJyb3JzOiBQcm9wVHlwZXMuYXJyYXksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYXdFcnJvcnM7XHJcbiJdfQ==