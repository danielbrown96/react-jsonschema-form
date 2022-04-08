import CheckboxWidget from "../CheckboxWidget/CheckboxWidget";
import CheckboxesWidget from "../CheckboxesWidget/CheckboxesWidget";
import PasswordWidget from "../PasswordWidget/PasswordWidget";
import RadioWidget from "../RadioWidget/RadioWidget";
import RangeWidget from "../RangeWidget/RangeWidget";
import SelectWidget from "../SelectWidget/SelectWidget";
import TextareaWidget from "../TextareaWidget/TextareaWidget";
import TextWidget from "../TextWidget/TextWidget";
import UpDownWidget from "../UpDownWidget/UpDownWidget";
import DateWidget from "../DateWidget/DateWidget";
import DateTimeWidget from "../DateTimeWidget/DateTimeWidget";
import EmailWidget from "../EmailWidget/EmailWidget";
import URLWidget from "../URLWidget/URLWidget";
export default {
  CheckboxWidget: CheckboxWidget,
  CheckboxesWidget: CheckboxesWidget,
  DateWidget: DateWidget,
  DateTimeWidget: DateTimeWidget,
  PasswordWidget: PasswordWidget,
  EmailWidget: EmailWidget,
  URLWidget: URLWidget,
  RadioWidget: RadioWidget,
  RangeWidget: RangeWidget,
  SelectWidget: SelectWidget,
  TextareaWidget: TextareaWidget,
  TextWidget: TextWidget,
  UpDownWidget: UpDownWidget
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9XaWRnZXRzL1dpZGdldHMuanMiXSwibmFtZXMiOlsiQ2hlY2tib3hXaWRnZXQiLCJDaGVja2JveGVzV2lkZ2V0IiwiUGFzc3dvcmRXaWRnZXQiLCJSYWRpb1dpZGdldCIsIlJhbmdlV2lkZ2V0IiwiU2VsZWN0V2lkZ2V0IiwiVGV4dGFyZWFXaWRnZXQiLCJUZXh0V2lkZ2V0IiwiVXBEb3duV2lkZ2V0IiwiRGF0ZVdpZGdldCIsIkRhdGVUaW1lV2lkZ2V0IiwiRW1haWxXaWRnZXQiLCJVUkxXaWRnZXQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLGNBQVAsTUFBMkIsa0NBQTNCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsc0NBQTdCO0FBQ0EsT0FBT0MsY0FBUCxNQUEyQixrQ0FBM0I7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLDRCQUF4QjtBQUNBLE9BQU9DLFdBQVAsTUFBd0IsNEJBQXhCO0FBQ0EsT0FBT0MsWUFBUCxNQUF5Qiw4QkFBekI7QUFDQSxPQUFPQyxjQUFQLE1BQTJCLGtDQUEzQjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsMEJBQXZCO0FBQ0EsT0FBT0MsWUFBUCxNQUF5Qiw4QkFBekI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLDBCQUF2QjtBQUNBLE9BQU9DLGNBQVAsTUFBMkIsa0NBQTNCO0FBQ0EsT0FBT0MsV0FBUCxNQUF3Qiw0QkFBeEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLHdCQUF0QjtBQUVBLGVBQWU7QUFDYlosRUFBQUEsY0FBYyxFQUFkQSxjQURhO0FBRWJDLEVBQUFBLGdCQUFnQixFQUFoQkEsZ0JBRmE7QUFHYlEsRUFBQUEsVUFBVSxFQUFWQSxVQUhhO0FBSWJDLEVBQUFBLGNBQWMsRUFBZEEsY0FKYTtBQUtiUixFQUFBQSxjQUFjLEVBQWRBLGNBTGE7QUFNYlMsRUFBQUEsV0FBVyxFQUFYQSxXQU5hO0FBT2JDLEVBQUFBLFNBQVMsRUFBVEEsU0FQYTtBQVFiVCxFQUFBQSxXQUFXLEVBQVhBLFdBUmE7QUFTYkMsRUFBQUEsV0FBVyxFQUFYQSxXQVRhO0FBVWJDLEVBQUFBLFlBQVksRUFBWkEsWUFWYTtBQVdiQyxFQUFBQSxjQUFjLEVBQWRBLGNBWGE7QUFZYkMsRUFBQUEsVUFBVSxFQUFWQSxVQVphO0FBYWJDLEVBQUFBLFlBQVksRUFBWkE7QUFiYSxDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoZWNrYm94V2lkZ2V0IGZyb20gXCIuLi9DaGVja2JveFdpZGdldC9DaGVja2JveFdpZGdldFwiO1xyXG5pbXBvcnQgQ2hlY2tib3hlc1dpZGdldCBmcm9tIFwiLi4vQ2hlY2tib3hlc1dpZGdldC9DaGVja2JveGVzV2lkZ2V0XCI7XHJcbmltcG9ydCBQYXNzd29yZFdpZGdldCBmcm9tIFwiLi4vUGFzc3dvcmRXaWRnZXQvUGFzc3dvcmRXaWRnZXRcIjtcclxuaW1wb3J0IFJhZGlvV2lkZ2V0IGZyb20gXCIuLi9SYWRpb1dpZGdldC9SYWRpb1dpZGdldFwiO1xyXG5pbXBvcnQgUmFuZ2VXaWRnZXQgZnJvbSBcIi4uL1JhbmdlV2lkZ2V0L1JhbmdlV2lkZ2V0XCI7XHJcbmltcG9ydCBTZWxlY3RXaWRnZXQgZnJvbSBcIi4uL1NlbGVjdFdpZGdldC9TZWxlY3RXaWRnZXRcIjtcclxuaW1wb3J0IFRleHRhcmVhV2lkZ2V0IGZyb20gXCIuLi9UZXh0YXJlYVdpZGdldC9UZXh0YXJlYVdpZGdldFwiO1xyXG5pbXBvcnQgVGV4dFdpZGdldCBmcm9tIFwiLi4vVGV4dFdpZGdldC9UZXh0V2lkZ2V0XCI7XHJcbmltcG9ydCBVcERvd25XaWRnZXQgZnJvbSBcIi4uL1VwRG93bldpZGdldC9VcERvd25XaWRnZXRcIjtcclxuaW1wb3J0IERhdGVXaWRnZXQgZnJvbSBcIi4uL0RhdGVXaWRnZXQvRGF0ZVdpZGdldFwiO1xyXG5pbXBvcnQgRGF0ZVRpbWVXaWRnZXQgZnJvbSBcIi4uL0RhdGVUaW1lV2lkZ2V0L0RhdGVUaW1lV2lkZ2V0XCI7XHJcbmltcG9ydCBFbWFpbFdpZGdldCBmcm9tIFwiLi4vRW1haWxXaWRnZXQvRW1haWxXaWRnZXRcIjtcclxuaW1wb3J0IFVSTFdpZGdldCBmcm9tIFwiLi4vVVJMV2lkZ2V0L1VSTFdpZGdldFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIENoZWNrYm94V2lkZ2V0LFxyXG4gIENoZWNrYm94ZXNXaWRnZXQsXHJcbiAgRGF0ZVdpZGdldCxcclxuICBEYXRlVGltZVdpZGdldCxcclxuICBQYXNzd29yZFdpZGdldCxcclxuICBFbWFpbFdpZGdldCxcclxuICBVUkxXaWRnZXQsXHJcbiAgUmFkaW9XaWRnZXQsXHJcbiAgUmFuZ2VXaWRnZXQsXHJcbiAgU2VsZWN0V2lkZ2V0LFxyXG4gIFRleHRhcmVhV2lkZ2V0LFxyXG4gIFRleHRXaWRnZXQsXHJcbiAgVXBEb3duV2lkZ2V0LFxyXG59O1xyXG4iXX0=