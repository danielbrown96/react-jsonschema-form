function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";
/**
 * Extract props meant for semantic UI components from props that are
 * passed to Widgets, Templates and Fields.
 * @param {Object} params
 * @param {Object?} params.formContext
 * @param {Object?} params.uiSchema
 * @param {Object?} params.options
 * @param {Object?} params.defaultSchemaProps
 * @param {Object?} params.defaultContextProps
 * @returns {any}
 */

export function getSemanticProps(_ref) {
  var _ref$formContext = _ref.formContext,
      formContext = _ref$formContext === void 0 ? {} : _ref$formContext,
      _ref$uiSchema = _ref.uiSchema,
      uiSchema = _ref$uiSchema === void 0 ? {} : _ref$uiSchema,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      _ref$defaultSchemaPro = _ref.defaultSchemaProps,
      defaultSchemaProps = _ref$defaultSchemaPro === void 0 ? {
    fluid: true,
    inverted: false
  } : _ref$defaultSchemaPro,
      _ref$defaultContextPr = _ref.defaultContextProps,
      defaultContextProps = _ref$defaultContextPr === void 0 ? {} : _ref$defaultContextPr;
  var formContextProps = formContext.semantic;
  var schemaProps = uiSchema["ui:options"] && uiSchema["ui:options"].semantic;
  var optionProps = options.semantic; // formContext props should overide other props

  return Object.assign({}, _objectSpread({}, defaultSchemaProps && defaultSchemaProps), _objectSpread({}, defaultContextProps && defaultContextProps), schemaProps, optionProps, formContextProps);
}
/**
 * Extract error props meant for semantic UI components from props that are
 * passed to Widgets, Templates and Fields.
 * @param {Object} params
 * @param {Object?} params.formContext
 * @param {Object?} params.uiSchema
 * @param {Object?} params.defaultProps
 * @returns {any}
 */

export function getSemanticErrorProps(_ref2) {
  var _ref2$formContext = _ref2.formContext,
      formContext = _ref2$formContext === void 0 ? {} : _ref2$formContext,
      _ref2$uiSchema = _ref2.uiSchema,
      uiSchema = _ref2$uiSchema === void 0 ? {} : _ref2$uiSchema,
      _ref2$options = _ref2.options,
      options = _ref2$options === void 0 ? {} : _ref2$options,
      _ref2$defaultProps = _ref2.defaultProps,
      defaultProps = _ref2$defaultProps === void 0 ? {
    size: 'small',
    pointing: 'above'
  } : _ref2$defaultProps;
  var formContextProps = formContext.semantic && formContext.semantic.errorOptions;
  var schemaProps = uiSchema["ui:options"] && uiSchema["ui:options"].semantic && uiSchema["ui:options"].semantic.errorOptions;
  var optionProps = options.semantic && options.semantic.errorOptionse;
  return Object.assign({}, _objectSpread({}, defaultProps && defaultProps), schemaProps, optionProps, formContextProps);
}
/**
 * Combine multiple strings containing class names into a single string,
 * removing duplicates. E.g.
 * cleanClassNames('bar', 'baz bar', 'x y ', undefined)
 * // 'bar baz x y'
 * @param {Array} classNameArr
 * @param {Array} omit
 * @returns {string}
 */

export function cleanClassNames(classNameArr) {
  var omit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  // Split each arg on whitespace, and add it to an array. Skip false-y args
  // like "" and undefined.
  var classList = classNameArr.filter(Boolean).reduce(function (previous, current) {
    return previous.concat(current.trim().split(/\s+/));
  }, []); // Remove any class names from omit, and make the rest unique before
  // returning them as a string

  return _toConsumableArray(new Set(classList.filter(function (cn) {
    return !omit.includes(cn);
  }))).join(" ");
}
/**
 *
 * @param {boolean} wrap
 * @param Component
 * @param {Object} props
 * @returns {*}
 * @constructor
 */

export function MaybeWrap(_ref3) {
  var wrap = _ref3.wrap,
      _ref3$component = _ref3.component,
      Component = _ref3$component === void 0 ? "div" : _ref3$component,
      props = _objectWithoutProperties(_ref3, ["wrap", "component"]);

  return wrap ? React.createElement(Component, props) : props.children;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZ2V0U2VtYW50aWNQcm9wcyIsImZvcm1Db250ZXh0IiwidWlTY2hlbWEiLCJvcHRpb25zIiwiZGVmYXVsdFNjaGVtYVByb3BzIiwiZmx1aWQiLCJpbnZlcnRlZCIsImRlZmF1bHRDb250ZXh0UHJvcHMiLCJmb3JtQ29udGV4dFByb3BzIiwic2VtYW50aWMiLCJzY2hlbWFQcm9wcyIsIm9wdGlvblByb3BzIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0U2VtYW50aWNFcnJvclByb3BzIiwiZGVmYXVsdFByb3BzIiwic2l6ZSIsInBvaW50aW5nIiwiZXJyb3JPcHRpb25zIiwiZXJyb3JPcHRpb25zZSIsImNsZWFuQ2xhc3NOYW1lcyIsImNsYXNzTmFtZUFyciIsIm9taXQiLCJjbGFzc0xpc3QiLCJmaWx0ZXIiLCJCb29sZWFuIiwicmVkdWNlIiwicHJldmlvdXMiLCJjdXJyZW50IiwiY29uY2F0IiwidHJpbSIsInNwbGl0IiwiU2V0IiwiY24iLCJpbmNsdWRlcyIsImpvaW4iLCJNYXliZVdyYXAiLCJ3cmFwIiwiY29tcG9uZW50IiwiQ29tcG9uZW50IiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUVBOzs7Ozs7Ozs7Ozs7QUFXQSxPQUFPLFNBQVNDLGdCQUFULE9BTUo7QUFBQSw4QkFMREMsV0FLQztBQUFBLE1BTERBLFdBS0MsaUNBTGEsRUFLYjtBQUFBLDJCQUpEQyxRQUlDO0FBQUEsTUFKREEsUUFJQyw4QkFKVSxFQUlWO0FBQUEsMEJBSERDLE9BR0M7QUFBQSxNQUhEQSxPQUdDLDZCQUhTLEVBR1Q7QUFBQSxtQ0FGREMsa0JBRUM7QUFBQSxNQUZEQSxrQkFFQyxzQ0FGb0I7QUFBRUMsSUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZ0JDLElBQUFBLFFBQVEsRUFBRTtBQUExQixHQUVwQjtBQUFBLG1DQUREQyxtQkFDQztBQUFBLE1BRERBLG1CQUNDLHNDQURvQixFQUNwQjtBQUVBLE1BQU1DLGdCQUFnQixHQUFHUCxXQUFXLENBQUNRLFFBQXJDO0FBQ0EsTUFBSUMsV0FBVyxHQUFHUixRQUFRLENBQUMsWUFBRCxDQUFSLElBQTBCQSxRQUFRLENBQUMsWUFBRCxDQUFSLENBQXVCTyxRQUFuRTtBQUNBLE1BQUlFLFdBQVcsR0FBR1IsT0FBTyxDQUFDTSxRQUExQixDQUpBLENBS0E7O0FBQ0EsU0FBT0csTUFBTSxDQUFDQyxNQUFQLENBQ04sRUFETSxvQkFFQVQsa0JBQWtCLElBQUlBLGtCQUZ0QixxQkFHQUcsbUJBQW1CLElBQUlBLG1CQUh2QixHQUlORyxXQUpNLEVBS05DLFdBTE0sRUFNTkgsZ0JBTk0sQ0FBUDtBQVFGO0FBRUQ7Ozs7Ozs7Ozs7QUFTQSxPQUFPLFNBQVNNLHFCQUFULFFBS0o7QUFBQSxnQ0FKRGIsV0FJQztBQUFBLE1BSkRBLFdBSUMsa0NBSmEsRUFJYjtBQUFBLDZCQUhEQyxRQUdDO0FBQUEsTUFIREEsUUFHQywrQkFIVSxFQUdWO0FBQUEsNEJBRkRDLE9BRUM7QUFBQSxNQUZEQSxPQUVDLDhCQUZTLEVBRVQ7QUFBQSxpQ0FERFksWUFDQztBQUFBLE1BRERBLFlBQ0MsbUNBRGM7QUFBRUMsSUFBQUEsSUFBSSxFQUFFLE9BQVI7QUFBaUJDLElBQUFBLFFBQVEsRUFBQztBQUExQixHQUNkO0FBRUQsTUFBTVQsZ0JBQWdCLEdBQUdQLFdBQVcsQ0FBQ1EsUUFBWixJQUF3QlIsV0FBVyxDQUFDUSxRQUFaLENBQXFCUyxZQUF0RTtBQUNBLE1BQU1SLFdBQVcsR0FBR1IsUUFBUSxDQUFDLFlBQUQsQ0FBUixJQUEwQkEsUUFBUSxDQUFDLFlBQUQsQ0FBUixDQUF1Qk8sUUFBakQsSUFBNkRQLFFBQVEsQ0FBQyxZQUFELENBQVIsQ0FBdUJPLFFBQXZCLENBQWdDUyxZQUFqSDtBQUNBLE1BQU1QLFdBQVcsR0FBR1IsT0FBTyxDQUFDTSxRQUFSLElBQW9CTixPQUFPLENBQUNNLFFBQVIsQ0FBaUJVLGFBQXpEO0FBRUEsU0FBT1AsTUFBTSxDQUFDQyxNQUFQLENBQ0wsRUFESyxvQkFFQ0UsWUFBWSxJQUFJQSxZQUZqQixHQUdMTCxXQUhLLEVBSUxDLFdBSkssRUFLTEgsZ0JBTEssQ0FBUDtBQU9EO0FBRUQ7Ozs7Ozs7Ozs7QUFTQSxPQUFPLFNBQVNZLGVBQVQsQ0FBeUJDLFlBQXpCLEVBQWtEO0FBQUEsTUFBWEMsSUFBVyx1RUFBSixFQUFJO0FBQ3ZEO0FBQ0E7QUFDQSxNQUFNQyxTQUFTLEdBQUdGLFlBQVksQ0FDM0JHLE1BRGUsQ0FDUkMsT0FEUSxFQUVmQyxNQUZlLENBR2QsVUFBQ0MsUUFBRCxFQUFXQyxPQUFYO0FBQUEsV0FBdUJELFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQkQsT0FBTyxDQUFDRSxJQUFSLEdBQWVDLEtBQWYsQ0FBcUIsS0FBckIsQ0FBaEIsQ0FBdkI7QUFBQSxHQUhjLEVBSWQsRUFKYyxDQUFsQixDQUh1RCxDQVV2RDtBQUNBOztBQUNBLFNBQU8sbUJBQUksSUFBSUMsR0FBSixDQUFRVCxTQUFTLENBQUNDLE1BQVYsQ0FBaUIsVUFBQVMsRUFBRTtBQUFBLFdBQUksQ0FBQ1gsSUFBSSxDQUFDWSxRQUFMLENBQWNELEVBQWQsQ0FBTDtBQUFBLEdBQW5CLENBQVIsQ0FBSixFQUF5REUsSUFBekQsQ0FBOEQsR0FBOUQsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7OztBQVFBLE9BQU8sU0FBU0MsU0FBVCxRQUFxRTtBQUFBLE1BQWhEQyxJQUFnRCxTQUFoREEsSUFBZ0Q7QUFBQSw4QkFBMUNDLFNBQTBDO0FBQUEsTUFBL0JDLFNBQStCLGdDQUFuQixLQUFtQjtBQUFBLE1BQVRDLEtBQVM7O0FBQzFFLFNBQU9ILElBQUksR0FBRyxvQkFBQyxTQUFELEVBQWVHLEtBQWYsQ0FBSCxHQUE4QkEsS0FBSyxDQUFDQyxRQUEvQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLyoqXHJcbiAqIEV4dHJhY3QgcHJvcHMgbWVhbnQgZm9yIHNlbWFudGljIFVJIGNvbXBvbmVudHMgZnJvbSBwcm9wcyB0aGF0IGFyZVxyXG4gKiBwYXNzZWQgdG8gV2lkZ2V0cywgVGVtcGxhdGVzIGFuZCBGaWVsZHMuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcclxuICogQHBhcmFtIHtPYmplY3Q/fSBwYXJhbXMuZm9ybUNvbnRleHRcclxuICogQHBhcmFtIHtPYmplY3Q/fSBwYXJhbXMudWlTY2hlbWFcclxuICogQHBhcmFtIHtPYmplY3Q/fSBwYXJhbXMub3B0aW9uc1xyXG4gKiBAcGFyYW0ge09iamVjdD99IHBhcmFtcy5kZWZhdWx0U2NoZW1hUHJvcHNcclxuICogQHBhcmFtIHtPYmplY3Q/fSBwYXJhbXMuZGVmYXVsdENvbnRleHRQcm9wc1xyXG4gKiBAcmV0dXJucyB7YW55fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbWFudGljUHJvcHMoe1xyXG4gIGZvcm1Db250ZXh0ID0ge30sXHJcbiAgdWlTY2hlbWEgPSB7fSxcclxuICBvcHRpb25zID0ge30sXHJcbiAgZGVmYXVsdFNjaGVtYVByb3BzID0geyBmbHVpZDogdHJ1ZSAsIGludmVydGVkOiBmYWxzZSB9LFxyXG4gIGRlZmF1bHRDb250ZXh0UHJvcHM9IHsgfVxyXG59KSB7XHJcblxyXG4gICBjb25zdCBmb3JtQ29udGV4dFByb3BzID0gZm9ybUNvbnRleHQuc2VtYW50aWM7XHJcbiAgIGxldCBzY2hlbWFQcm9wcyA9IHVpU2NoZW1hW1widWk6b3B0aW9uc1wiXSAmJiB1aVNjaGVtYVtcInVpOm9wdGlvbnNcIl0uc2VtYW50aWM7XHJcbiAgIGxldCBvcHRpb25Qcm9wcyA9IG9wdGlvbnMuc2VtYW50aWM7XHJcbiAgIC8vIGZvcm1Db250ZXh0IHByb3BzIHNob3VsZCBvdmVyaWRlIG90aGVyIHByb3BzXHJcbiAgIHJldHVybiBPYmplY3QuYXNzaWduKFxyXG4gICAge30sXHJcbiAgICB7IC4uLihkZWZhdWx0U2NoZW1hUHJvcHMgJiYgZGVmYXVsdFNjaGVtYVByb3BzKSB9LFxyXG4gICAgeyAuLi4oZGVmYXVsdENvbnRleHRQcm9wcyAmJiBkZWZhdWx0Q29udGV4dFByb3BzKSB9LFxyXG4gICAgc2NoZW1hUHJvcHMsXHJcbiAgICBvcHRpb25Qcm9wcyxcclxuICAgIGZvcm1Db250ZXh0UHJvcHMsXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEV4dHJhY3QgZXJyb3IgcHJvcHMgbWVhbnQgZm9yIHNlbWFudGljIFVJIGNvbXBvbmVudHMgZnJvbSBwcm9wcyB0aGF0IGFyZVxyXG4gKiBwYXNzZWQgdG8gV2lkZ2V0cywgVGVtcGxhdGVzIGFuZCBGaWVsZHMuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcclxuICogQHBhcmFtIHtPYmplY3Q/fSBwYXJhbXMuZm9ybUNvbnRleHRcclxuICogQHBhcmFtIHtPYmplY3Q/fSBwYXJhbXMudWlTY2hlbWFcclxuICogQHBhcmFtIHtPYmplY3Q/fSBwYXJhbXMuZGVmYXVsdFByb3BzXHJcbiAqIEByZXR1cm5zIHthbnl9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VtYW50aWNFcnJvclByb3BzKHtcclxuICBmb3JtQ29udGV4dCA9IHt9LFxyXG4gIHVpU2NoZW1hID0ge30sXHJcbiAgb3B0aW9ucyA9IHt9LFxyXG4gIGRlZmF1bHRQcm9wcyA9IHsgc2l6ZTogJ3NtYWxsJywgcG9pbnRpbmc6J2Fib3ZlJyB9XHJcbn0pIHtcclxuXHJcbiAgY29uc3QgZm9ybUNvbnRleHRQcm9wcyA9IGZvcm1Db250ZXh0LnNlbWFudGljICYmIGZvcm1Db250ZXh0LnNlbWFudGljLmVycm9yT3B0aW9ucztcclxuICBjb25zdCBzY2hlbWFQcm9wcyA9IHVpU2NoZW1hW1widWk6b3B0aW9uc1wiXSAmJiB1aVNjaGVtYVtcInVpOm9wdGlvbnNcIl0uc2VtYW50aWMgJiYgdWlTY2hlbWFbXCJ1aTpvcHRpb25zXCJdLnNlbWFudGljLmVycm9yT3B0aW9ucztcclxuICBjb25zdCBvcHRpb25Qcm9wcyA9IG9wdGlvbnMuc2VtYW50aWMgJiYgb3B0aW9ucy5zZW1hbnRpYy5lcnJvck9wdGlvbnNlO1xyXG5cclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihcclxuICAgIHt9LFxyXG4gICAgeyAuLi4oZGVmYXVsdFByb3BzICYmIGRlZmF1bHRQcm9wcykgfSxcclxuICAgIHNjaGVtYVByb3BzLFxyXG4gICAgb3B0aW9uUHJvcHMsXHJcbiAgICBmb3JtQ29udGV4dFByb3BzLFxyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21iaW5lIG11bHRpcGxlIHN0cmluZ3MgY29udGFpbmluZyBjbGFzcyBuYW1lcyBpbnRvIGEgc2luZ2xlIHN0cmluZyxcclxuICogcmVtb3ZpbmcgZHVwbGljYXRlcy4gRS5nLlxyXG4gKiBjbGVhbkNsYXNzTmFtZXMoJ2JhcicsICdiYXogYmFyJywgJ3ggeSAnLCB1bmRlZmluZWQpXHJcbiAqIC8vICdiYXIgYmF6IHggeSdcclxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NOYW1lQXJyXHJcbiAqIEBwYXJhbSB7QXJyYXl9IG9taXRcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhbkNsYXNzTmFtZXMoY2xhc3NOYW1lQXJyLCBvbWl0ID0gW10pIHtcclxuICAvLyBTcGxpdCBlYWNoIGFyZyBvbiB3aGl0ZXNwYWNlLCBhbmQgYWRkIGl0IHRvIGFuIGFycmF5LiBTa2lwIGZhbHNlLXkgYXJnc1xyXG4gIC8vIGxpa2UgXCJcIiBhbmQgdW5kZWZpbmVkLlxyXG4gIGNvbnN0IGNsYXNzTGlzdCA9IGNsYXNzTmFtZUFyclxyXG4gICAgLmZpbHRlcihCb29sZWFuKVxyXG4gICAgLnJlZHVjZShcclxuICAgICAgKHByZXZpb3VzLCBjdXJyZW50KSA9PiBwcmV2aW91cy5jb25jYXQoY3VycmVudC50cmltKCkuc3BsaXQoL1xccysvKSksXHJcbiAgICAgIFtdXHJcbiAgICApO1xyXG5cclxuICAvLyBSZW1vdmUgYW55IGNsYXNzIG5hbWVzIGZyb20gb21pdCwgYW5kIG1ha2UgdGhlIHJlc3QgdW5pcXVlIGJlZm9yZVxyXG4gIC8vIHJldHVybmluZyB0aGVtIGFzIGEgc3RyaW5nXHJcbiAgcmV0dXJuIFsuLi5uZXcgU2V0KGNsYXNzTGlzdC5maWx0ZXIoY24gPT4gIW9taXQuaW5jbHVkZXMoY24pKSldLmpvaW4oXCIgXCIpO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtib29sZWFufSB3cmFwXHJcbiAqIEBwYXJhbSBDb21wb25lbnRcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBNYXliZVdyYXAoeyB3cmFwLCBjb21wb25lbnQ6IENvbXBvbmVudCA9IFwiZGl2XCIsIC4uLnByb3BzIH0pIHtcclxuICByZXR1cm4gd3JhcCA/IDxDb21wb25lbnQgey4uLnByb3BzfSAvPiA6IHByb3BzLmNoaWxkcmVuO1xyXG59XHJcbiJdfQ==