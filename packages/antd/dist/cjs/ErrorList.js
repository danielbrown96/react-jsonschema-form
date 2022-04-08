"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _alert = _interopRequireDefault(require("antd/lib/alert"));

var _list = _interopRequireDefault(require("antd/lib/list"));

var _space = _interopRequireDefault(require("antd/lib/space"));

var _ExclamationCircleOutlined = _interopRequireDefault(require("@ant-design/icons/ExclamationCircleOutlined"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorList = function ErrorList(_ref) {
  var errors = _ref.errors;

  var renderErrors = function renderErrors() {
    return /*#__PURE__*/_react.default.createElement(_list.default, {
      className: "list-group",
      size: "small"
    }, errors.map(function (error, index) {
      return /*#__PURE__*/_react.default.createElement(_list.default.Item, {
        key: index
      }, /*#__PURE__*/_react.default.createElement(_space.default, null, /*#__PURE__*/_react.default.createElement(_ExclamationCircleOutlined.default, null), error.stack));
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_alert.default, {
    className: "panel panel-danger errors",
    description: renderErrors(),
    message: "Errors",
    type: "error"
  });
};

var _default = ErrorList;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FcnJvckxpc3QuanMiXSwibmFtZXMiOlsiRXJyb3JMaXN0IiwiZXJyb3JzIiwicmVuZGVyRXJyb3JzIiwibWFwIiwiZXJyb3IiLCJpbmRleCIsInN0YWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQU1aO0FBQUEsTUFKSkMsTUFJSSxRQUpKQSxNQUlJOztBQUNKLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsd0JBQ25CLDZCQUFDLGFBQUQ7QUFBTSxNQUFBLFNBQVMsRUFBQyxZQUFoQjtBQUE2QixNQUFBLElBQUksRUFBQztBQUFsQyxPQUNHRCxNQUFNLENBQUNFLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSwwQkFDViw2QkFBQyxhQUFELENBQU0sSUFBTjtBQUFXLFFBQUEsR0FBRyxFQUFFQTtBQUFoQixzQkFDRSw2QkFBQyxjQUFELHFCQUNFLDZCQUFDLGtDQUFELE9BREYsRUFFR0QsS0FBSyxDQUFDRSxLQUZULENBREYsQ0FEVTtBQUFBLEtBQVgsQ0FESCxDQURtQjtBQUFBLEdBQXJCOztBQWFBLHNCQUNFLDZCQUFDLGNBQUQ7QUFDRSxJQUFBLFNBQVMsRUFBQywyQkFEWjtBQUVFLElBQUEsV0FBVyxFQUFFSixZQUFZLEVBRjNCO0FBR0UsSUFBQSxPQUFPLEVBQUMsUUFIVjtBQUlFLElBQUEsSUFBSSxFQUFDO0FBSlAsSUFERjtBQVFELENBNUJEOztlQThCZUYsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQWxlcnQgZnJvbSAnYW50ZC9saWIvYWxlcnQnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdhbnRkL2xpYi9saXN0JztcclxuaW1wb3J0IFNwYWNlIGZyb20gJ2FudGQvbGliL3NwYWNlJztcclxuaW1wb3J0IEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQgZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMvRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZCc7XHJcblxyXG5jb25zdCBFcnJvckxpc3QgPSAoe1xyXG4gIC8vIGVycm9yU2NoZW1hLFxyXG4gIGVycm9ycyxcclxuICAvLyBmb3JtQ29udGV4dCxcclxuICAvLyBzY2hlbWEsXHJcbiAgLy8gdWlTY2hlbWEsXHJcbn0pID0+IHtcclxuICBjb25zdCByZW5kZXJFcnJvcnMgPSAoKSA9PiAoXHJcbiAgICA8TGlzdCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgIHtlcnJvcnMubWFwKChlcnJvciwgaW5kZXgpID0+IChcclxuICAgICAgICA8TGlzdC5JdGVtIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgPFNwYWNlPlxyXG4gICAgICAgICAgICA8RXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICB7ZXJyb3Iuc3RhY2t9XHJcbiAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICApKX1cclxuICAgIDwvTGlzdD5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0XHJcbiAgICAgIGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRhbmdlciBlcnJvcnNcIlxyXG4gICAgICBkZXNjcmlwdGlvbj17cmVuZGVyRXJyb3JzKCl9XHJcbiAgICAgIG1lc3NhZ2U9XCJFcnJvcnNcIlxyXG4gICAgICB0eXBlPVwiZXJyb3JcIlxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JMaXN0O1xyXG4iXX0=