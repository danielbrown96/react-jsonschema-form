function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { utils } from '@rjsf/core';
import { Form as SuiForm } from "semantic-ui-react";
import SubmitButton from '../SubmitButton';
import ArrayFieldTemplate from "../ArrayFieldTemplate";
import ErrorList from "../ErrorList";
import Fields from "../Fields";
import FieldTemplate from "../FieldTemplate";
import ObjectFieldTemplate from "../ObjectFieldTemplate";
import Widgets from "../Widgets";
var getDefaultRegistry = utils.getDefaultRegistry;

var _getDefaultRegistry = getDefaultRegistry(),
    fields = _getDefaultRegistry.fields,
    widgets = _getDefaultRegistry.widgets;

var Theme = {
  ArrayFieldTemplate: ArrayFieldTemplate,
  ErrorList: ErrorList,
  fields: _objectSpread(_objectSpread({}, fields), Fields),
  FieldTemplate: FieldTemplate,
  ObjectFieldTemplate: ObjectFieldTemplate,
  _internalFormWrapper: SuiForm,
  widgets: _objectSpread(_objectSpread({}, widgets), Widgets),
  children: React.createElement(SubmitButton)
};
export default Theme;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9UaGVtZS9UaGVtZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInV0aWxzIiwiRm9ybSIsIlN1aUZvcm0iLCJTdWJtaXRCdXR0b24iLCJBcnJheUZpZWxkVGVtcGxhdGUiLCJFcnJvckxpc3QiLCJGaWVsZHMiLCJGaWVsZFRlbXBsYXRlIiwiT2JqZWN0RmllbGRUZW1wbGF0ZSIsIldpZGdldHMiLCJnZXREZWZhdWx0UmVnaXN0cnkiLCJmaWVsZHMiLCJ3aWRnZXRzIiwiVGhlbWUiLCJfaW50ZXJuYWxGb3JtV3JhcHBlciIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLEtBQVQsUUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxJQUFJLElBQUlDLE9BQWpCLFFBQWdDLG1CQUFoQztBQUNBLE9BQU9DLFlBQVAsTUFBeUIsaUJBQXpCO0FBQ0EsT0FBT0Msa0JBQVAsTUFBK0IsdUJBQS9CO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixjQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsV0FBbkI7QUFDQSxPQUFPQyxhQUFQLE1BQTBCLGtCQUExQjtBQUNBLE9BQU9DLG1CQUFQLE1BQWdDLHdCQUFoQztBQUNBLE9BQU9DLE9BQVAsTUFBb0IsWUFBcEI7SUFDUUMsa0IsR0FBd0JWLEssQ0FBeEJVLGtCOzswQkFDb0JBLGtCQUFrQixFO0lBQXRDQyxNLHVCQUFBQSxNO0lBQVFDLE8sdUJBQUFBLE87O0FBRWhCLElBQU1DLEtBQUssR0FBRztBQUNaVCxFQUFBQSxrQkFBa0IsRUFBbEJBLGtCQURZO0FBRVpDLEVBQUFBLFNBQVMsRUFBVEEsU0FGWTtBQUdaTSxFQUFBQSxNQUFNLGtDQUFPQSxNQUFQLEdBQWtCTCxNQUFsQixDQUhNO0FBSVpDLEVBQUFBLGFBQWEsRUFBYkEsYUFKWTtBQUtaQyxFQUFBQSxtQkFBbUIsRUFBbkJBLG1CQUxZO0FBTVpNLEVBQUFBLG9CQUFvQixFQUFFWixPQU5WO0FBT1pVLEVBQUFBLE9BQU8sa0NBQU9BLE9BQVAsR0FBbUJILE9BQW5CLENBUEs7QUFRWk0sRUFBQUEsUUFBUSxFQUFFaEIsS0FBSyxDQUFDaUIsYUFBTixDQUFvQmIsWUFBcEI7QUFSRSxDQUFkO0FBV0EsZUFBZVUsS0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSAnQHJqc2YvY29yZSc7XHJcbmltcG9ydCB7IEZvcm0gYXMgU3VpRm9ybSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgU3VibWl0QnV0dG9uIGZyb20gJy4uL1N1Ym1pdEJ1dHRvbic7XHJcbmltcG9ydCBBcnJheUZpZWxkVGVtcGxhdGUgZnJvbSBcIi4uL0FycmF5RmllbGRUZW1wbGF0ZVwiO1xyXG5pbXBvcnQgRXJyb3JMaXN0IGZyb20gXCIuLi9FcnJvckxpc3RcIjtcclxuaW1wb3J0IEZpZWxkcyBmcm9tIFwiLi4vRmllbGRzXCI7XHJcbmltcG9ydCBGaWVsZFRlbXBsYXRlIGZyb20gXCIuLi9GaWVsZFRlbXBsYXRlXCI7XHJcbmltcG9ydCBPYmplY3RGaWVsZFRlbXBsYXRlIGZyb20gXCIuLi9PYmplY3RGaWVsZFRlbXBsYXRlXCI7XHJcbmltcG9ydCBXaWRnZXRzIGZyb20gXCIuLi9XaWRnZXRzXCI7XHJcbmNvbnN0IHsgZ2V0RGVmYXVsdFJlZ2lzdHJ5IH0gID0gdXRpbHM7XHJcbmNvbnN0IHsgZmllbGRzLCB3aWRnZXRzIH0gPSBnZXREZWZhdWx0UmVnaXN0cnkoKTtcclxuXHJcbmNvbnN0IFRoZW1lID0ge1xyXG4gIEFycmF5RmllbGRUZW1wbGF0ZSxcclxuICBFcnJvckxpc3QsXHJcbiAgZmllbGRzOiB7IC4uLmZpZWxkcywgLi4uRmllbGRzIH0sXHJcbiAgRmllbGRUZW1wbGF0ZSxcclxuICBPYmplY3RGaWVsZFRlbXBsYXRlLFxyXG4gIF9pbnRlcm5hbEZvcm1XcmFwcGVyOiBTdWlGb3JtLFxyXG4gIHdpZGdldHM6IHsgLi4ud2lkZ2V0cywgLi4uV2lkZ2V0cyB9LFxyXG4gIGNoaWxkcmVuOiBSZWFjdC5jcmVhdGVFbGVtZW50KFN1Ym1pdEJ1dHRvbilcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoZW1lO1xyXG4iXX0=