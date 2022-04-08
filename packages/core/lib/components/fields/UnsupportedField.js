import React from "react";
import PropTypes from "prop-types";

function UnsupportedField(_ref) {
  var schema = _ref.schema,
      idSchema = _ref.idSchema,
      reason = _ref.reason;
  return React.createElement("div", {
    className: "unsupported-field"
  }, React.createElement("p", null, "Unsupported field schema", idSchema && idSchema.$id && React.createElement("span", null, " for", " field ", React.createElement("code", null, idSchema.$id)), reason && React.createElement("em", null, ": ", reason), "."), schema && React.createElement("pre", null, JSON.stringify(schema, null, 2)));
}

if (process.env.NODE_ENV !== "production") {
  UnsupportedField.propTypes = {
    schema: PropTypes.object.isRequired,
    idSchema: PropTypes.object,
    reason: PropTypes.string
  };
}

export default UnsupportedField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpZWxkcy9VbnN1cHBvcnRlZEZpZWxkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiVW5zdXBwb3J0ZWRGaWVsZCIsInNjaGVtYSIsImlkU2NoZW1hIiwicmVhc29uIiwiJGlkIiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCOztBQUVBLFNBQVNDLGdCQUFULE9BQXdEO0FBQUEsTUFBNUJDLE1BQTRCLFFBQTVCQSxNQUE0QjtBQUFBLE1BQXBCQyxRQUFvQixRQUFwQkEsUUFBb0I7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDdEQsU0FDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRSwyREFFR0QsUUFBUSxJQUFJQSxRQUFRLENBQUNFLEdBQXJCLElBQ0Msa0NBQ0csTUFESCxhQUNpQixrQ0FBT0YsUUFBUSxDQUFDRSxHQUFoQixDQURqQixDQUhKLEVBT0dELE1BQU0sSUFBSSxzQ0FBT0EsTUFBUCxDQVBiLE1BREYsRUFVR0YsTUFBTSxJQUFJLGlDQUFNSSxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsTUFBZixFQUF1QixJQUF2QixFQUE2QixDQUE3QixDQUFOLENBVmIsQ0FERjtBQWNEOztBQUVELElBQUlNLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0FBQ3pDVCxFQUFBQSxnQkFBZ0IsQ0FBQ1UsU0FBakIsR0FBNkI7QUFDM0JULElBQUFBLE1BQU0sRUFBRUYsU0FBUyxDQUFDWSxNQUFWLENBQWlCQyxVQURFO0FBRTNCVixJQUFBQSxRQUFRLEVBQUVILFNBQVMsQ0FBQ1ksTUFGTztBQUczQlIsSUFBQUEsTUFBTSxFQUFFSixTQUFTLENBQUNjO0FBSFMsR0FBN0I7QUFLRDs7QUFFRCxlQUFlYixnQkFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuZnVuY3Rpb24gVW5zdXBwb3J0ZWRGaWVsZCh7IHNjaGVtYSwgaWRTY2hlbWEsIHJlYXNvbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidW5zdXBwb3J0ZWQtZmllbGRcIj5cclxuICAgICAgPHA+XHJcbiAgICAgICAgVW5zdXBwb3J0ZWQgZmllbGQgc2NoZW1hXHJcbiAgICAgICAge2lkU2NoZW1hICYmIGlkU2NoZW1hLiRpZCAmJiAoXHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAge1wiIGZvclwifSBmaWVsZCA8Y29kZT57aWRTY2hlbWEuJGlkfTwvY29kZT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtyZWFzb24gJiYgPGVtPjoge3JlYXNvbn08L2VtPn0uXHJcbiAgICAgIDwvcD5cclxuICAgICAge3NjaGVtYSAmJiA8cHJlPntKU09OLnN0cmluZ2lmeShzY2hlbWEsIG51bGwsIDIpfTwvcHJlPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICBVbnN1cHBvcnRlZEZpZWxkLnByb3BUeXBlcyA9IHtcclxuICAgIHNjaGVtYTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgaWRTY2hlbWE6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICByZWFzb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVW5zdXBwb3J0ZWRGaWVsZDtcclxuIl19