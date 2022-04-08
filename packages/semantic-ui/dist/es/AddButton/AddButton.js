function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { Button, Icon } from "semantic-ui-react";

function AddButton(props) {
  return React.createElement(Button, _extends({}, props, {
    icon: true,
    size: "tiny",
    labelPosition: "left"
  }), React.createElement(Icon, {
    name: "plus"
  }), "Add Item");
}

export default AddButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9BZGRCdXR0b24vQWRkQnV0dG9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiSWNvbiIsIkFkZEJ1dHRvbiIsInByb3BzIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxNQUFULEVBQWlCQyxJQUFqQixRQUE2QixtQkFBN0I7O0FBRUEsU0FBU0MsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFDeEIsU0FDRSxvQkFBQyxNQUFELGVBQVlBLEtBQVo7QUFBbUIsSUFBQSxJQUFJLE1BQXZCO0FBQXdCLElBQUEsSUFBSSxFQUFDLE1BQTdCO0FBQW9DLElBQUEsYUFBYSxFQUFDO0FBQWxELE1BQ0Usb0JBQUMsSUFBRDtBQUFNLElBQUEsSUFBSSxFQUFDO0FBQVgsSUFERixhQURGO0FBTUQ7O0FBRUQsZUFBZUQsU0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBBZGRCdXR0b24ocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvbiB7Li4ucHJvcHN9IGljb24gc2l6ZT1cInRpbnlcIiBsYWJlbFBvc2l0aW9uPVwibGVmdFwiPlxyXG4gICAgICA8SWNvbiBuYW1lPVwicGx1c1wiIC8+XHJcbiAgICAgIEFkZCBJdGVtXHJcbiAgICA8L0J1dHRvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRCdXR0b247XHJcbiJdfQ==