function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import toPath from "lodash/toPath";
import Ajv from "ajv";
var ajv = createAjvInstance();
import { deepEquals, getDefaultFormState } from "./utils";
var formerCustomFormats = null;
var formerMetaSchema = null;
var ROOT_SCHEMA_PREFIX = "__rjsf_rootSchema";
import { isObject, mergeObjects } from "./utils";

function createAjvInstance() {
  var ajv = new Ajv({
    errorDataPath: "property",
    allErrors: true,
    multipleOfPrecision: 8,
    schemaId: "auto",
    unknownFormats: "ignore"
  }); // add custom formats

  ajv.addFormat("data-url", /^data:([a-z]+\/[a-z0-9-+.]+)?;(?:name=(.*);)?base64,(.*)$/);
  ajv.addFormat("color", /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/);
  return ajv;
}

function toErrorSchema(errors) {
  // Transforms a ajv validation errors list:
  // [
  //   {property: ".level1.level2[2].level3", message: "err a"},
  //   {property: ".level1.level2[2].level3", message: "err b"},
  //   {property: ".level1.level2[4].level3", message: "err b"},
  // ]
  // Into an error tree:
  // {
  //   level1: {
  //     level2: {
  //       2: {level3: {errors: ["err a", "err b"]}},
  //       4: {level3: {errors: ["err b"]}},
  //     }
  //   }
  // };
  if (!errors.length) {
    return {};
  }

  return errors.reduce(function (errorSchema, error) {
    var property = error.property,
        message = error.message;
    var path = toPath(property);
    var parent = errorSchema; // If the property is at the root (.level1) then toPath creates
    // an empty array element at the first index. Remove it.

    if (path.length > 0 && path[0] === "") {
      path.splice(0, 1);
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = path.slice(0)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var segment = _step.value;

        if (!(segment in parent)) {
          parent[segment] = {};
        }

        parent = parent[segment];
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if (Array.isArray(parent.__errors)) {
      // We store the list of errors for this node in a property named __errors
      // to avoid name collision with a possible sub schema field named
      // "errors" (see `validate.createErrorHandler`).
      parent.__errors = parent.__errors.concat(message);
    } else {
      if (message) {
        parent.__errors = [message];
      }
    }

    return errorSchema;
  }, {});
}

export function toErrorList(errorSchema) {
  var fieldName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "root";
  // XXX: We should transform fieldName as a full field path string.
  var errorList = [];

  if ("__errors" in errorSchema) {
    errorList = errorList.concat(errorSchema.__errors.map(function (stack) {
      return {
        stack: "".concat(fieldName, ": ").concat(stack)
      };
    }));
  }

  return Object.keys(errorSchema).reduce(function (acc, key) {
    if (key !== "__errors") {
      acc = acc.concat(toErrorList(errorSchema[key], key));
    }

    return acc;
  }, errorList);
}

function createErrorHandler(formData) {
  var handler = {
    // We store the list of errors for this node in a property named __errors
    // to avoid name collision with a possible sub schema field named
    // "errors" (see `utils.toErrorSchema`).
    __errors: [],
    addError: function addError(message) {
      this.__errors.push(message);
    }
  };

  if (isObject(formData)) {
    return Object.keys(formData).reduce(function (acc, key) {
      return _objectSpread({}, acc, _defineProperty({}, key, createErrorHandler(formData[key])));
    }, handler);
  }

  if (Array.isArray(formData)) {
    return formData.reduce(function (acc, value, key) {
      return _objectSpread({}, acc, _defineProperty({}, key, createErrorHandler(value)));
    }, handler);
  }

  return handler;
}

function unwrapErrorHandler(errorHandler) {
  return Object.keys(errorHandler).reduce(function (acc, key) {
    if (key === "addError") {
      return acc;
    } else if (key === "__errors") {
      return _objectSpread({}, acc, _defineProperty({}, key, errorHandler[key]));
    }

    return _objectSpread({}, acc, _defineProperty({}, key, unwrapErrorHandler(errorHandler[key])));
  }, {});
}
/**
 * Transforming the error output from ajv to format used by jsonschema.
 * At some point, components should be updated to support ajv.
 */


function transformAjvErrors() {
  var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (errors === null) {
    return [];
  }

  return errors.map(function (e) {
    var dataPath = e.dataPath,
        keyword = e.keyword,
        message = e.message,
        params = e.params,
        schemaPath = e.schemaPath;
    var property = "".concat(dataPath); // put data in expected format

    return {
      name: keyword,
      property: property,
      message: message,
      params: params,
      // specific to ajv
      stack: "".concat(property, " ").concat(message).trim(),
      schemaPath: schemaPath
    };
  });
}
/**
 * This function processes the formData with a user `validate` contributed
 * function, which receives the form data and an `errorHandler` object that
 * will be used to add custom validation errors for each field.
 */


export default function validateFormData(formData, schema, customValidate, transformErrors) {
  var additionalMetaSchemas = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  var customFormats = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  // Include form data with undefined values, which is required for validation.
  var rootSchema = schema;
  formData = getDefaultFormState(schema, formData, rootSchema, true);
  var newMetaSchemas = !deepEquals(formerMetaSchema, additionalMetaSchemas);
  var newFormats = !deepEquals(formerCustomFormats, customFormats);

  if (newMetaSchemas || newFormats) {
    ajv = createAjvInstance();
  } // add more schemas to validate against


  if (additionalMetaSchemas && newMetaSchemas && Array.isArray(additionalMetaSchemas)) {
    ajv.addMetaSchema(additionalMetaSchemas);
    formerMetaSchema = additionalMetaSchemas;
  } // add more custom formats to validate against


  if (customFormats && newFormats && isObject(customFormats)) {
    Object.keys(customFormats).forEach(function (formatName) {
      ajv.addFormat(formatName, customFormats[formatName]);
    });
    formerCustomFormats = customFormats;
  }

  var validationError = null;

  try {
    ajv.validate(schema, formData);
  } catch (err) {
    validationError = err;
  }

  var errors = transformAjvErrors(ajv.errors); // Clear errors to prevent persistent errors, see #1104

  ajv.errors = null;
  var noProperMetaSchema = validationError && validationError.message && typeof validationError.message === "string" && validationError.message.includes("no schema with key or ref ");

  if (noProperMetaSchema) {
    errors = [].concat(_toConsumableArray(errors), [{
      stack: validationError.message
    }]);
  }

  if (typeof transformErrors === "function") {
    errors = transformErrors(errors);
  }

  var errorSchema = toErrorSchema(errors);

  if (noProperMetaSchema) {
    errorSchema = _objectSpread({}, errorSchema, {
      $schema: {
        __errors: [validationError.message]
      }
    });
  }

  if (typeof customValidate !== "function") {
    return {
      errors: errors,
      errorSchema: errorSchema
    };
  }

  var errorHandler = customValidate(formData, createErrorHandler(formData));
  var userErrorSchema = unwrapErrorHandler(errorHandler);
  var newErrorSchema = mergeObjects(errorSchema, userErrorSchema, true); // XXX: The errors list produced is not fully compliant with the format
  // exposed by the jsonschema lib, which contains full field paths and other
  // properties.

  var newErrors = toErrorList(newErrorSchema);
  return {
    errors: newErrors,
    errorSchema: newErrorSchema
  };
}
/**
 * Recursively prefixes all $ref's in a schema with `ROOT_SCHEMA_PREFIX`
 * This is used in isValid to make references to the rootSchema
 */

export function withIdRefPrefix(schemaNode) {
  var obj = schemaNode;

  if (schemaNode.constructor === Object) {
    obj = _objectSpread({}, schemaNode);

    for (var key in obj) {
      var value = obj[key];

      if (key === "$ref" && typeof value === "string" && value.startsWith("#")) {
        obj[key] = ROOT_SCHEMA_PREFIX + value;
      } else {
        obj[key] = withIdRefPrefix(value);
      }
    }
  } else if (Array.isArray(schemaNode)) {
    obj = _toConsumableArray(schemaNode);

    for (var i = 0; i < obj.length; i++) {
      obj[i] = withIdRefPrefix(obj[i]);
    }
  }

  return obj;
}
/**
 * Validates data against a schema, returning true if the data is valid, or
 * false otherwise. If the schema is invalid, then this function will return
 * false.
 */

export function isValid(schema, data, rootSchema) {
  try {
    // add the rootSchema ROOT_SCHEMA_PREFIX as id.
    // then rewrite the schema ref's to point to the rootSchema
    // this accounts for the case where schema have references to models
    // that lives in the rootSchema but not in the schema in question.
    return ajv.addSchema(rootSchema, ROOT_SCHEMA_PREFIX).validate(withIdRefPrefix(schema), data);
  } catch (e) {
    return false;
  } finally {
    // make sure we remove the rootSchema from the global ajv instance
    ajv.removeSchema(ROOT_SCHEMA_PREFIX);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWxpZGF0ZS5qcyJdLCJuYW1lcyI6WyJ0b1BhdGgiLCJBanYiLCJhanYiLCJjcmVhdGVBanZJbnN0YW5jZSIsImRlZXBFcXVhbHMiLCJnZXREZWZhdWx0Rm9ybVN0YXRlIiwiZm9ybWVyQ3VzdG9tRm9ybWF0cyIsImZvcm1lck1ldGFTY2hlbWEiLCJST09UX1NDSEVNQV9QUkVGSVgiLCJpc09iamVjdCIsIm1lcmdlT2JqZWN0cyIsImVycm9yRGF0YVBhdGgiLCJhbGxFcnJvcnMiLCJtdWx0aXBsZU9mUHJlY2lzaW9uIiwic2NoZW1hSWQiLCJ1bmtub3duRm9ybWF0cyIsImFkZEZvcm1hdCIsInRvRXJyb3JTY2hlbWEiLCJlcnJvcnMiLCJsZW5ndGgiLCJyZWR1Y2UiLCJlcnJvclNjaGVtYSIsImVycm9yIiwicHJvcGVydHkiLCJtZXNzYWdlIiwicGF0aCIsInBhcmVudCIsInNwbGljZSIsInNsaWNlIiwic2VnbWVudCIsIkFycmF5IiwiaXNBcnJheSIsIl9fZXJyb3JzIiwiY29uY2F0IiwidG9FcnJvckxpc3QiLCJmaWVsZE5hbWUiLCJlcnJvckxpc3QiLCJtYXAiLCJzdGFjayIsIk9iamVjdCIsImtleXMiLCJhY2MiLCJrZXkiLCJjcmVhdGVFcnJvckhhbmRsZXIiLCJmb3JtRGF0YSIsImhhbmRsZXIiLCJhZGRFcnJvciIsInB1c2giLCJ2YWx1ZSIsInVud3JhcEVycm9ySGFuZGxlciIsImVycm9ySGFuZGxlciIsInRyYW5zZm9ybUFqdkVycm9ycyIsImUiLCJkYXRhUGF0aCIsImtleXdvcmQiLCJwYXJhbXMiLCJzY2hlbWFQYXRoIiwibmFtZSIsInRyaW0iLCJ2YWxpZGF0ZUZvcm1EYXRhIiwic2NoZW1hIiwiY3VzdG9tVmFsaWRhdGUiLCJ0cmFuc2Zvcm1FcnJvcnMiLCJhZGRpdGlvbmFsTWV0YVNjaGVtYXMiLCJjdXN0b21Gb3JtYXRzIiwicm9vdFNjaGVtYSIsIm5ld01ldGFTY2hlbWFzIiwibmV3Rm9ybWF0cyIsImFkZE1ldGFTY2hlbWEiLCJmb3JFYWNoIiwiZm9ybWF0TmFtZSIsInZhbGlkYXRpb25FcnJvciIsInZhbGlkYXRlIiwiZXJyIiwibm9Qcm9wZXJNZXRhU2NoZW1hIiwiaW5jbHVkZXMiLCIkc2NoZW1hIiwidXNlckVycm9yU2NoZW1hIiwibmV3RXJyb3JTY2hlbWEiLCJuZXdFcnJvcnMiLCJ3aXRoSWRSZWZQcmVmaXgiLCJzY2hlbWFOb2RlIiwib2JqIiwiY29uc3RydWN0b3IiLCJzdGFydHNXaXRoIiwiaSIsImlzVmFsaWQiLCJkYXRhIiwiYWRkU2NoZW1hIiwicmVtb3ZlU2NoZW1hIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxNQUFQLE1BQW1CLGVBQW5CO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixLQUFoQjtBQUNBLElBQUlDLEdBQUcsR0FBR0MsaUJBQWlCLEVBQTNCO0FBQ0EsU0FBU0MsVUFBVCxFQUFxQkMsbUJBQXJCLFFBQWdELFNBQWhEO0FBRUEsSUFBSUMsbUJBQW1CLEdBQUcsSUFBMUI7QUFDQSxJQUFJQyxnQkFBZ0IsR0FBRyxJQUF2QjtBQUNBLElBQU1DLGtCQUFrQixHQUFHLG1CQUEzQjtBQUVBLFNBQVNDLFFBQVQsRUFBbUJDLFlBQW5CLFFBQXVDLFNBQXZDOztBQUVBLFNBQVNQLGlCQUFULEdBQTZCO0FBQzNCLE1BQU1ELEdBQUcsR0FBRyxJQUFJRCxHQUFKLENBQVE7QUFDbEJVLElBQUFBLGFBQWEsRUFBRSxVQURHO0FBRWxCQyxJQUFBQSxTQUFTLEVBQUUsSUFGTztBQUdsQkMsSUFBQUEsbUJBQW1CLEVBQUUsQ0FISDtBQUlsQkMsSUFBQUEsUUFBUSxFQUFFLE1BSlE7QUFLbEJDLElBQUFBLGNBQWMsRUFBRTtBQUxFLEdBQVIsQ0FBWixDQUQyQixDQVMzQjs7QUFDQWIsRUFBQUEsR0FBRyxDQUFDYyxTQUFKLENBQ0UsVUFERixFQUVFLDJEQUZGO0FBSUFkLEVBQUFBLEdBQUcsQ0FBQ2MsU0FBSixDQUNFLE9BREYsRUFFRSw0WUFGRjtBQUlBLFNBQU9kLEdBQVA7QUFDRDs7QUFFRCxTQUFTZSxhQUFULENBQXVCQyxNQUF2QixFQUErQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFJLENBQUNBLE1BQU0sQ0FBQ0MsTUFBWixFQUFvQjtBQUNsQixXQUFPLEVBQVA7QUFDRDs7QUFDRCxTQUFPRCxNQUFNLENBQUNFLE1BQVAsQ0FBYyxVQUFDQyxXQUFELEVBQWNDLEtBQWQsRUFBd0I7QUFBQSxRQUNuQ0MsUUFEbUMsR0FDYkQsS0FEYSxDQUNuQ0MsUUFEbUM7QUFBQSxRQUN6QkMsT0FEeUIsR0FDYkYsS0FEYSxDQUN6QkUsT0FEeUI7QUFFM0MsUUFBTUMsSUFBSSxHQUFHekIsTUFBTSxDQUFDdUIsUUFBRCxDQUFuQjtBQUNBLFFBQUlHLE1BQU0sR0FBR0wsV0FBYixDQUgyQyxDQUszQztBQUNBOztBQUNBLFFBQUlJLElBQUksQ0FBQ04sTUFBTCxHQUFjLENBQWQsSUFBbUJNLElBQUksQ0FBQyxDQUFELENBQUosS0FBWSxFQUFuQyxFQUF1QztBQUNyQ0EsTUFBQUEsSUFBSSxDQUFDRSxNQUFMLENBQVksQ0FBWixFQUFlLENBQWY7QUFDRDs7QUFUMEM7QUFBQTtBQUFBOztBQUFBO0FBVzNDLDJCQUFzQkYsSUFBSSxDQUFDRyxLQUFMLENBQVcsQ0FBWCxDQUF0Qiw4SEFBcUM7QUFBQSxZQUExQkMsT0FBMEI7O0FBQ25DLFlBQUksRUFBRUEsT0FBTyxJQUFJSCxNQUFiLENBQUosRUFBMEI7QUFDeEJBLFVBQUFBLE1BQU0sQ0FBQ0csT0FBRCxDQUFOLEdBQWtCLEVBQWxCO0FBQ0Q7O0FBQ0RILFFBQUFBLE1BQU0sR0FBR0EsTUFBTSxDQUFDRyxPQUFELENBQWY7QUFDRDtBQWhCMEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFrQjNDLFFBQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjTCxNQUFNLENBQUNNLFFBQXJCLENBQUosRUFBb0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0FOLE1BQUFBLE1BQU0sQ0FBQ00sUUFBUCxHQUFrQk4sTUFBTSxDQUFDTSxRQUFQLENBQWdCQyxNQUFoQixDQUF1QlQsT0FBdkIsQ0FBbEI7QUFDRCxLQUxELE1BS087QUFDTCxVQUFJQSxPQUFKLEVBQWE7QUFDWEUsUUFBQUEsTUFBTSxDQUFDTSxRQUFQLEdBQWtCLENBQUNSLE9BQUQsQ0FBbEI7QUFDRDtBQUNGOztBQUNELFdBQU9ILFdBQVA7QUFDRCxHQTdCTSxFQTZCSixFQTdCSSxDQUFQO0FBOEJEOztBQUVELE9BQU8sU0FBU2EsV0FBVCxDQUFxQmIsV0FBckIsRUFBc0Q7QUFBQSxNQUFwQmMsU0FBb0IsdUVBQVIsTUFBUTtBQUMzRDtBQUNBLE1BQUlDLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxNQUFJLGNBQWNmLFdBQWxCLEVBQStCO0FBQzdCZSxJQUFBQSxTQUFTLEdBQUdBLFNBQVMsQ0FBQ0gsTUFBVixDQUNWWixXQUFXLENBQUNXLFFBQVosQ0FBcUJLLEdBQXJCLENBQXlCLFVBQUFDLEtBQUssRUFBSTtBQUNoQyxhQUFPO0FBQ0xBLFFBQUFBLEtBQUssWUFBS0gsU0FBTCxlQUFtQkcsS0FBbkI7QUFEQSxPQUFQO0FBR0QsS0FKRCxDQURVLENBQVo7QUFPRDs7QUFDRCxTQUFPQyxNQUFNLENBQUNDLElBQVAsQ0FBWW5CLFdBQVosRUFBeUJELE1BQXpCLENBQWdDLFVBQUNxQixHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNuRCxRQUFJQSxHQUFHLEtBQUssVUFBWixFQUF3QjtBQUN0QkQsTUFBQUEsR0FBRyxHQUFHQSxHQUFHLENBQUNSLE1BQUosQ0FBV0MsV0FBVyxDQUFDYixXQUFXLENBQUNxQixHQUFELENBQVosRUFBbUJBLEdBQW5CLENBQXRCLENBQU47QUFDRDs7QUFDRCxXQUFPRCxHQUFQO0FBQ0QsR0FMTSxFQUtKTCxTQUxJLENBQVA7QUFNRDs7QUFFRCxTQUFTTyxrQkFBVCxDQUE0QkMsUUFBNUIsRUFBc0M7QUFDcEMsTUFBTUMsT0FBTyxHQUFHO0FBQ2Q7QUFDQTtBQUNBO0FBQ0FiLElBQUFBLFFBQVEsRUFBRSxFQUpJO0FBS2RjLElBQUFBLFFBTGMsb0JBS0x0QixPQUxLLEVBS0k7QUFDaEIsV0FBS1EsUUFBTCxDQUFjZSxJQUFkLENBQW1CdkIsT0FBbkI7QUFDRDtBQVBhLEdBQWhCOztBQVNBLE1BQUlmLFFBQVEsQ0FBQ21DLFFBQUQsQ0FBWixFQUF3QjtBQUN0QixXQUFPTCxNQUFNLENBQUNDLElBQVAsQ0FBWUksUUFBWixFQUFzQnhCLE1BQXRCLENBQTZCLFVBQUNxQixHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNoRCwrQkFBWUQsR0FBWixzQkFBa0JDLEdBQWxCLEVBQXdCQyxrQkFBa0IsQ0FBQ0MsUUFBUSxDQUFDRixHQUFELENBQVQsQ0FBMUM7QUFDRCxLQUZNLEVBRUpHLE9BRkksQ0FBUDtBQUdEOztBQUNELE1BQUlmLEtBQUssQ0FBQ0MsT0FBTixDQUFjYSxRQUFkLENBQUosRUFBNkI7QUFDM0IsV0FBT0EsUUFBUSxDQUFDeEIsTUFBVCxDQUFnQixVQUFDcUIsR0FBRCxFQUFNTyxLQUFOLEVBQWFOLEdBQWIsRUFBcUI7QUFDMUMsK0JBQVlELEdBQVosc0JBQWtCQyxHQUFsQixFQUF3QkMsa0JBQWtCLENBQUNLLEtBQUQsQ0FBMUM7QUFDRCxLQUZNLEVBRUpILE9BRkksQ0FBUDtBQUdEOztBQUNELFNBQU9BLE9BQVA7QUFDRDs7QUFFRCxTQUFTSSxrQkFBVCxDQUE0QkMsWUFBNUIsRUFBMEM7QUFDeEMsU0FBT1gsTUFBTSxDQUFDQyxJQUFQLENBQVlVLFlBQVosRUFBMEI5QixNQUExQixDQUFpQyxVQUFDcUIsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDcEQsUUFBSUEsR0FBRyxLQUFLLFVBQVosRUFBd0I7QUFDdEIsYUFBT0QsR0FBUDtBQUNELEtBRkQsTUFFTyxJQUFJQyxHQUFHLEtBQUssVUFBWixFQUF3QjtBQUM3QiwrQkFBWUQsR0FBWixzQkFBa0JDLEdBQWxCLEVBQXdCUSxZQUFZLENBQUNSLEdBQUQsQ0FBcEM7QUFDRDs7QUFDRCw2QkFBWUQsR0FBWixzQkFBa0JDLEdBQWxCLEVBQXdCTyxrQkFBa0IsQ0FBQ0MsWUFBWSxDQUFDUixHQUFELENBQWIsQ0FBMUM7QUFDRCxHQVBNLEVBT0osRUFQSSxDQUFQO0FBUUQ7QUFFRDs7Ozs7O0FBSUEsU0FBU1Msa0JBQVQsR0FBeUM7QUFBQSxNQUFiakMsTUFBYSx1RUFBSixFQUFJOztBQUN2QyxNQUFJQSxNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNuQixXQUFPLEVBQVA7QUFDRDs7QUFFRCxTQUFPQSxNQUFNLENBQUNtQixHQUFQLENBQVcsVUFBQWUsQ0FBQyxFQUFJO0FBQUEsUUFDYkMsUUFEYSxHQUNzQ0QsQ0FEdEMsQ0FDYkMsUUFEYTtBQUFBLFFBQ0hDLE9BREcsR0FDc0NGLENBRHRDLENBQ0hFLE9BREc7QUFBQSxRQUNNOUIsT0FETixHQUNzQzRCLENBRHRDLENBQ001QixPQUROO0FBQUEsUUFDZStCLE1BRGYsR0FDc0NILENBRHRDLENBQ2VHLE1BRGY7QUFBQSxRQUN1QkMsVUFEdkIsR0FDc0NKLENBRHRDLENBQ3VCSSxVQUR2QjtBQUVyQixRQUFJakMsUUFBUSxhQUFNOEIsUUFBTixDQUFaLENBRnFCLENBSXJCOztBQUNBLFdBQU87QUFDTEksTUFBQUEsSUFBSSxFQUFFSCxPQUREO0FBRUwvQixNQUFBQSxRQUFRLEVBQVJBLFFBRks7QUFHTEMsTUFBQUEsT0FBTyxFQUFQQSxPQUhLO0FBSUwrQixNQUFBQSxNQUFNLEVBQU5BLE1BSks7QUFJRztBQUNSakIsTUFBQUEsS0FBSyxFQUFFLFVBQUdmLFFBQUgsY0FBZUMsT0FBZixFQUF5QmtDLElBQXpCLEVBTEY7QUFNTEYsTUFBQUEsVUFBVSxFQUFWQTtBQU5LLEtBQVA7QUFRRCxHQWJNLENBQVA7QUFjRDtBQUVEOzs7Ozs7O0FBS0EsZUFBZSxTQUFTRyxnQkFBVCxDQUNiZixRQURhLEVBRWJnQixNQUZhLEVBR2JDLGNBSGEsRUFJYkMsZUFKYSxFQU9iO0FBQUEsTUFGQUMscUJBRUEsdUVBRndCLEVBRXhCO0FBQUEsTUFEQUMsYUFDQSx1RUFEZ0IsRUFDaEI7QUFDQTtBQUNBLE1BQU1DLFVBQVUsR0FBR0wsTUFBbkI7QUFDQWhCLEVBQUFBLFFBQVEsR0FBR3ZDLG1CQUFtQixDQUFDdUQsTUFBRCxFQUFTaEIsUUFBVCxFQUFtQnFCLFVBQW5CLEVBQStCLElBQS9CLENBQTlCO0FBRUEsTUFBTUMsY0FBYyxHQUFHLENBQUM5RCxVQUFVLENBQUNHLGdCQUFELEVBQW1Cd0QscUJBQW5CLENBQWxDO0FBQ0EsTUFBTUksVUFBVSxHQUFHLENBQUMvRCxVQUFVLENBQUNFLG1CQUFELEVBQXNCMEQsYUFBdEIsQ0FBOUI7O0FBRUEsTUFBSUUsY0FBYyxJQUFJQyxVQUF0QixFQUFrQztBQUNoQ2pFLElBQUFBLEdBQUcsR0FBR0MsaUJBQWlCLEVBQXZCO0FBQ0QsR0FWRCxDQVlBOzs7QUFDQSxNQUNFNEQscUJBQXFCLElBQ3JCRyxjQURBLElBRUFwQyxLQUFLLENBQUNDLE9BQU4sQ0FBY2dDLHFCQUFkLENBSEYsRUFJRTtBQUNBN0QsSUFBQUEsR0FBRyxDQUFDa0UsYUFBSixDQUFrQkwscUJBQWxCO0FBQ0F4RCxJQUFBQSxnQkFBZ0IsR0FBR3dELHFCQUFuQjtBQUNELEdBcEJELENBc0JBOzs7QUFDQSxNQUFJQyxhQUFhLElBQUlHLFVBQWpCLElBQStCMUQsUUFBUSxDQUFDdUQsYUFBRCxDQUEzQyxFQUE0RDtBQUMxRHpCLElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZd0IsYUFBWixFQUEyQkssT0FBM0IsQ0FBbUMsVUFBQUMsVUFBVSxFQUFJO0FBQy9DcEUsTUFBQUEsR0FBRyxDQUFDYyxTQUFKLENBQWNzRCxVQUFkLEVBQTBCTixhQUFhLENBQUNNLFVBQUQsQ0FBdkM7QUFDRCxLQUZEO0FBSUFoRSxJQUFBQSxtQkFBbUIsR0FBRzBELGFBQXRCO0FBQ0Q7O0FBRUQsTUFBSU8sZUFBZSxHQUFHLElBQXRCOztBQUNBLE1BQUk7QUFDRnJFLElBQUFBLEdBQUcsQ0FBQ3NFLFFBQUosQ0FBYVosTUFBYixFQUFxQmhCLFFBQXJCO0FBQ0QsR0FGRCxDQUVFLE9BQU82QixHQUFQLEVBQVk7QUFDWkYsSUFBQUEsZUFBZSxHQUFHRSxHQUFsQjtBQUNEOztBQUVELE1BQUl2RCxNQUFNLEdBQUdpQyxrQkFBa0IsQ0FBQ2pELEdBQUcsQ0FBQ2dCLE1BQUwsQ0FBL0IsQ0F0Q0EsQ0F1Q0E7O0FBRUFoQixFQUFBQSxHQUFHLENBQUNnQixNQUFKLEdBQWEsSUFBYjtBQUVBLE1BQU13RCxrQkFBa0IsR0FDdEJILGVBQWUsSUFDZkEsZUFBZSxDQUFDL0MsT0FEaEIsSUFFQSxPQUFPK0MsZUFBZSxDQUFDL0MsT0FBdkIsS0FBbUMsUUFGbkMsSUFHQStDLGVBQWUsQ0FBQy9DLE9BQWhCLENBQXdCbUQsUUFBeEIsQ0FBaUMsNEJBQWpDLENBSkY7O0FBTUEsTUFBSUQsa0JBQUosRUFBd0I7QUFDdEJ4RCxJQUFBQSxNQUFNLGdDQUNEQSxNQURDLElBRUo7QUFDRW9CLE1BQUFBLEtBQUssRUFBRWlDLGVBQWUsQ0FBQy9DO0FBRHpCLEtBRkksRUFBTjtBQU1EOztBQUNELE1BQUksT0FBT3NDLGVBQVAsS0FBMkIsVUFBL0IsRUFBMkM7QUFDekM1QyxJQUFBQSxNQUFNLEdBQUc0QyxlQUFlLENBQUM1QyxNQUFELENBQXhCO0FBQ0Q7O0FBRUQsTUFBSUcsV0FBVyxHQUFHSixhQUFhLENBQUNDLE1BQUQsQ0FBL0I7O0FBRUEsTUFBSXdELGtCQUFKLEVBQXdCO0FBQ3RCckQsSUFBQUEsV0FBVyxxQkFDTkEsV0FETSxFQUVOO0FBQ0R1RCxNQUFBQSxPQUFPLEVBQUU7QUFDUDVDLFFBQUFBLFFBQVEsRUFBRSxDQUFDdUMsZUFBZSxDQUFDL0MsT0FBakI7QUFESDtBQURSLEtBRk0sQ0FBWDtBQVFEOztBQUVELE1BQUksT0FBT3FDLGNBQVAsS0FBMEIsVUFBOUIsRUFBMEM7QUFDeEMsV0FBTztBQUFFM0MsTUFBQUEsTUFBTSxFQUFOQSxNQUFGO0FBQVVHLE1BQUFBLFdBQVcsRUFBWEE7QUFBVixLQUFQO0FBQ0Q7O0FBRUQsTUFBTTZCLFlBQVksR0FBR1csY0FBYyxDQUFDakIsUUFBRCxFQUFXRCxrQkFBa0IsQ0FBQ0MsUUFBRCxDQUE3QixDQUFuQztBQUNBLE1BQU1pQyxlQUFlLEdBQUc1QixrQkFBa0IsQ0FBQ0MsWUFBRCxDQUExQztBQUNBLE1BQU00QixjQUFjLEdBQUdwRSxZQUFZLENBQUNXLFdBQUQsRUFBY3dELGVBQWQsRUFBK0IsSUFBL0IsQ0FBbkMsQ0FoRkEsQ0FpRkE7QUFDQTtBQUNBOztBQUNBLE1BQU1FLFNBQVMsR0FBRzdDLFdBQVcsQ0FBQzRDLGNBQUQsQ0FBN0I7QUFFQSxTQUFPO0FBQ0w1RCxJQUFBQSxNQUFNLEVBQUU2RCxTQURIO0FBRUwxRCxJQUFBQSxXQUFXLEVBQUV5RDtBQUZSLEdBQVA7QUFJRDtBQUVEOzs7OztBQUlBLE9BQU8sU0FBU0UsZUFBVCxDQUF5QkMsVUFBekIsRUFBcUM7QUFDMUMsTUFBSUMsR0FBRyxHQUFHRCxVQUFWOztBQUNBLE1BQUlBLFVBQVUsQ0FBQ0UsV0FBWCxLQUEyQjVDLE1BQS9CLEVBQXVDO0FBQ3JDMkMsSUFBQUEsR0FBRyxxQkFBUUQsVUFBUixDQUFIOztBQUNBLFNBQUssSUFBTXZDLEdBQVgsSUFBa0J3QyxHQUFsQixFQUF1QjtBQUNyQixVQUFNbEMsS0FBSyxHQUFHa0MsR0FBRyxDQUFDeEMsR0FBRCxDQUFqQjs7QUFDQSxVQUNFQSxHQUFHLEtBQUssTUFBUixJQUNBLE9BQU9NLEtBQVAsS0FBaUIsUUFEakIsSUFFQUEsS0FBSyxDQUFDb0MsVUFBTixDQUFpQixHQUFqQixDQUhGLEVBSUU7QUFDQUYsUUFBQUEsR0FBRyxDQUFDeEMsR0FBRCxDQUFILEdBQVdsQyxrQkFBa0IsR0FBR3dDLEtBQWhDO0FBQ0QsT0FORCxNQU1PO0FBQ0xrQyxRQUFBQSxHQUFHLENBQUN4QyxHQUFELENBQUgsR0FBV3NDLGVBQWUsQ0FBQ2hDLEtBQUQsQ0FBMUI7QUFDRDtBQUNGO0FBQ0YsR0FkRCxNQWNPLElBQUlsQixLQUFLLENBQUNDLE9BQU4sQ0FBY2tELFVBQWQsQ0FBSixFQUErQjtBQUNwQ0MsSUFBQUEsR0FBRyxzQkFBT0QsVUFBUCxDQUFIOztBQUNBLFNBQUssSUFBSUksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsR0FBRyxDQUFDL0QsTUFBeEIsRUFBZ0NrRSxDQUFDLEVBQWpDLEVBQXFDO0FBQ25DSCxNQUFBQSxHQUFHLENBQUNHLENBQUQsQ0FBSCxHQUFTTCxlQUFlLENBQUNFLEdBQUcsQ0FBQ0csQ0FBRCxDQUFKLENBQXhCO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPSCxHQUFQO0FBQ0Q7QUFFRDs7Ozs7O0FBS0EsT0FBTyxTQUFTSSxPQUFULENBQWlCMUIsTUFBakIsRUFBeUIyQixJQUF6QixFQUErQnRCLFVBQS9CLEVBQTJDO0FBQ2hELE1BQUk7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQU8vRCxHQUFHLENBQ1BzRixTQURJLENBQ012QixVQUROLEVBQ2tCekQsa0JBRGxCLEVBRUpnRSxRQUZJLENBRUtRLGVBQWUsQ0FBQ3BCLE1BQUQsQ0FGcEIsRUFFOEIyQixJQUY5QixDQUFQO0FBR0QsR0FSRCxDQVFFLE9BQU9uQyxDQUFQLEVBQVU7QUFDVixXQUFPLEtBQVA7QUFDRCxHQVZELFNBVVU7QUFDUjtBQUNBbEQsSUFBQUEsR0FBRyxDQUFDdUYsWUFBSixDQUFpQmpGLGtCQUFqQjtBQUNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9QYXRoIGZyb20gXCJsb2Rhc2gvdG9QYXRoXCI7XHJcbmltcG9ydCBBanYgZnJvbSBcImFqdlwiO1xyXG5sZXQgYWp2ID0gY3JlYXRlQWp2SW5zdGFuY2UoKTtcclxuaW1wb3J0IHsgZGVlcEVxdWFscywgZ2V0RGVmYXVsdEZvcm1TdGF0ZSB9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5sZXQgZm9ybWVyQ3VzdG9tRm9ybWF0cyA9IG51bGw7XHJcbmxldCBmb3JtZXJNZXRhU2NoZW1hID0gbnVsbDtcclxuY29uc3QgUk9PVF9TQ0hFTUFfUFJFRklYID0gXCJfX3Jqc2Zfcm9vdFNjaGVtYVwiO1xyXG5cclxuaW1wb3J0IHsgaXNPYmplY3QsIG1lcmdlT2JqZWN0cyB9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBanZJbnN0YW5jZSgpIHtcclxuICBjb25zdCBhanYgPSBuZXcgQWp2KHtcclxuICAgIGVycm9yRGF0YVBhdGg6IFwicHJvcGVydHlcIixcclxuICAgIGFsbEVycm9yczogdHJ1ZSxcclxuICAgIG11bHRpcGxlT2ZQcmVjaXNpb246IDgsXHJcbiAgICBzY2hlbWFJZDogXCJhdXRvXCIsXHJcbiAgICB1bmtub3duRm9ybWF0czogXCJpZ25vcmVcIixcclxuICB9KTtcclxuXHJcbiAgLy8gYWRkIGN1c3RvbSBmb3JtYXRzXHJcbiAgYWp2LmFkZEZvcm1hdChcclxuICAgIFwiZGF0YS11cmxcIixcclxuICAgIC9eZGF0YTooW2Etel0rXFwvW2EtejAtOS0rLl0rKT87KD86bmFtZT0oLiopOyk/YmFzZTY0LCguKikkL1xyXG4gICk7XHJcbiAgYWp2LmFkZEZvcm1hdChcclxuICAgIFwiY29sb3JcIixcclxuICAgIC9eKCM/KFswLTlBLUZhLWZdezN9KXsxLDJ9XFxifGFxdWF8YmxhY2t8Ymx1ZXxmdWNoc2lhfGdyYXl8Z3JlZW58bGltZXxtYXJvb258bmF2eXxvbGl2ZXxvcmFuZ2V8cHVycGxlfHJlZHxzaWx2ZXJ8dGVhbHx3aGl0ZXx5ZWxsb3d8KHJnYlxcKFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccyosXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKixcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqXFwpKXwocmdiXFwoXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqLFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKixcXHMqKFxcZD9cXGQlfDEwMCUpK1xccypcXCkpKSQvXHJcbiAgKTtcclxuICByZXR1cm4gYWp2O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0Vycm9yU2NoZW1hKGVycm9ycykge1xyXG4gIC8vIFRyYW5zZm9ybXMgYSBhanYgdmFsaWRhdGlvbiBlcnJvcnMgbGlzdDpcclxuICAvLyBbXHJcbiAgLy8gICB7cHJvcGVydHk6IFwiLmxldmVsMS5sZXZlbDJbMl0ubGV2ZWwzXCIsIG1lc3NhZ2U6IFwiZXJyIGFcIn0sXHJcbiAgLy8gICB7cHJvcGVydHk6IFwiLmxldmVsMS5sZXZlbDJbMl0ubGV2ZWwzXCIsIG1lc3NhZ2U6IFwiZXJyIGJcIn0sXHJcbiAgLy8gICB7cHJvcGVydHk6IFwiLmxldmVsMS5sZXZlbDJbNF0ubGV2ZWwzXCIsIG1lc3NhZ2U6IFwiZXJyIGJcIn0sXHJcbiAgLy8gXVxyXG4gIC8vIEludG8gYW4gZXJyb3IgdHJlZTpcclxuICAvLyB7XHJcbiAgLy8gICBsZXZlbDE6IHtcclxuICAvLyAgICAgbGV2ZWwyOiB7XHJcbiAgLy8gICAgICAgMjoge2xldmVsMzoge2Vycm9yczogW1wiZXJyIGFcIiwgXCJlcnIgYlwiXX19LFxyXG4gIC8vICAgICAgIDQ6IHtsZXZlbDM6IHtlcnJvcnM6IFtcImVyciBiXCJdfX0sXHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH1cclxuICAvLyB9O1xyXG4gIGlmICghZXJyb3JzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuICByZXR1cm4gZXJyb3JzLnJlZHVjZSgoZXJyb3JTY2hlbWEsIGVycm9yKSA9PiB7XHJcbiAgICBjb25zdCB7IHByb3BlcnR5LCBtZXNzYWdlIH0gPSBlcnJvcjtcclxuICAgIGNvbnN0IHBhdGggPSB0b1BhdGgocHJvcGVydHkpO1xyXG4gICAgbGV0IHBhcmVudCA9IGVycm9yU2NoZW1hO1xyXG5cclxuICAgIC8vIElmIHRoZSBwcm9wZXJ0eSBpcyBhdCB0aGUgcm9vdCAoLmxldmVsMSkgdGhlbiB0b1BhdGggY3JlYXRlc1xyXG4gICAgLy8gYW4gZW1wdHkgYXJyYXkgZWxlbWVudCBhdCB0aGUgZmlyc3QgaW5kZXguIFJlbW92ZSBpdC5cclxuICAgIGlmIChwYXRoLmxlbmd0aCA+IDAgJiYgcGF0aFswXSA9PT0gXCJcIikge1xyXG4gICAgICBwYXRoLnNwbGljZSgwLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IHNlZ21lbnQgb2YgcGF0aC5zbGljZSgwKSkge1xyXG4gICAgICBpZiAoIShzZWdtZW50IGluIHBhcmVudCkpIHtcclxuICAgICAgICBwYXJlbnRbc2VnbWVudF0gPSB7fTtcclxuICAgICAgfVxyXG4gICAgICBwYXJlbnQgPSBwYXJlbnRbc2VnbWVudF07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGFyZW50Ll9fZXJyb3JzKSkge1xyXG4gICAgICAvLyBXZSBzdG9yZSB0aGUgbGlzdCBvZiBlcnJvcnMgZm9yIHRoaXMgbm9kZSBpbiBhIHByb3BlcnR5IG5hbWVkIF9fZXJyb3JzXHJcbiAgICAgIC8vIHRvIGF2b2lkIG5hbWUgY29sbGlzaW9uIHdpdGggYSBwb3NzaWJsZSBzdWIgc2NoZW1hIGZpZWxkIG5hbWVkXHJcbiAgICAgIC8vIFwiZXJyb3JzXCIgKHNlZSBgdmFsaWRhdGUuY3JlYXRlRXJyb3JIYW5kbGVyYCkuXHJcbiAgICAgIHBhcmVudC5fX2Vycm9ycyA9IHBhcmVudC5fX2Vycm9ycy5jb25jYXQobWVzc2FnZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobWVzc2FnZSkge1xyXG4gICAgICAgIHBhcmVudC5fX2Vycm9ycyA9IFttZXNzYWdlXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9yU2NoZW1hO1xyXG4gIH0sIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvRXJyb3JMaXN0KGVycm9yU2NoZW1hLCBmaWVsZE5hbWUgPSBcInJvb3RcIikge1xyXG4gIC8vIFhYWDogV2Ugc2hvdWxkIHRyYW5zZm9ybSBmaWVsZE5hbWUgYXMgYSBmdWxsIGZpZWxkIHBhdGggc3RyaW5nLlxyXG4gIGxldCBlcnJvckxpc3QgPSBbXTtcclxuICBpZiAoXCJfX2Vycm9yc1wiIGluIGVycm9yU2NoZW1hKSB7XHJcbiAgICBlcnJvckxpc3QgPSBlcnJvckxpc3QuY29uY2F0KFxyXG4gICAgICBlcnJvclNjaGVtYS5fX2Vycm9ycy5tYXAoc3RhY2sgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzdGFjazogYCR7ZmllbGROYW1lfTogJHtzdGFja31gLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gT2JqZWN0LmtleXMoZXJyb3JTY2hlbWEpLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcclxuICAgIGlmIChrZXkgIT09IFwiX19lcnJvcnNcIikge1xyXG4gICAgICBhY2MgPSBhY2MuY29uY2F0KHRvRXJyb3JMaXN0KGVycm9yU2NoZW1hW2tleV0sIGtleSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFjYztcclxuICB9LCBlcnJvckxpc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFcnJvckhhbmRsZXIoZm9ybURhdGEpIHtcclxuICBjb25zdCBoYW5kbGVyID0ge1xyXG4gICAgLy8gV2Ugc3RvcmUgdGhlIGxpc3Qgb2YgZXJyb3JzIGZvciB0aGlzIG5vZGUgaW4gYSBwcm9wZXJ0eSBuYW1lZCBfX2Vycm9yc1xyXG4gICAgLy8gdG8gYXZvaWQgbmFtZSBjb2xsaXNpb24gd2l0aCBhIHBvc3NpYmxlIHN1YiBzY2hlbWEgZmllbGQgbmFtZWRcclxuICAgIC8vIFwiZXJyb3JzXCIgKHNlZSBgdXRpbHMudG9FcnJvclNjaGVtYWApLlxyXG4gICAgX19lcnJvcnM6IFtdLFxyXG4gICAgYWRkRXJyb3IobWVzc2FnZSkge1xyXG4gICAgICB0aGlzLl9fZXJyb3JzLnB1c2gobWVzc2FnZSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbiAgaWYgKGlzT2JqZWN0KGZvcm1EYXRhKSkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGZvcm1EYXRhKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XHJcbiAgICAgIHJldHVybiB7IC4uLmFjYywgW2tleV06IGNyZWF0ZUVycm9ySGFuZGxlcihmb3JtRGF0YVtrZXldKSB9O1xyXG4gICAgfSwgaGFuZGxlcik7XHJcbiAgfVxyXG4gIGlmIChBcnJheS5pc0FycmF5KGZvcm1EYXRhKSkge1xyXG4gICAgcmV0dXJuIGZvcm1EYXRhLnJlZHVjZSgoYWNjLCB2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgIHJldHVybiB7IC4uLmFjYywgW2tleV06IGNyZWF0ZUVycm9ySGFuZGxlcih2YWx1ZSkgfTtcclxuICAgIH0sIGhhbmRsZXIpO1xyXG4gIH1cclxuICByZXR1cm4gaGFuZGxlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gdW53cmFwRXJyb3JIYW5kbGVyKGVycm9ySGFuZGxlcikge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhlcnJvckhhbmRsZXIpLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcclxuICAgIGlmIChrZXkgPT09IFwiYWRkRXJyb3JcIikge1xyXG4gICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwiX19lcnJvcnNcIikge1xyXG4gICAgICByZXR1cm4geyAuLi5hY2MsIFtrZXldOiBlcnJvckhhbmRsZXJba2V5XSB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgLi4uYWNjLCBba2V5XTogdW53cmFwRXJyb3JIYW5kbGVyKGVycm9ySGFuZGxlcltrZXldKSB9O1xyXG4gIH0sIHt9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyYW5zZm9ybWluZyB0aGUgZXJyb3Igb3V0cHV0IGZyb20gYWp2IHRvIGZvcm1hdCB1c2VkIGJ5IGpzb25zY2hlbWEuXHJcbiAqIEF0IHNvbWUgcG9pbnQsIGNvbXBvbmVudHMgc2hvdWxkIGJlIHVwZGF0ZWQgdG8gc3VwcG9ydCBhanYuXHJcbiAqL1xyXG5mdW5jdGlvbiB0cmFuc2Zvcm1BanZFcnJvcnMoZXJyb3JzID0gW10pIHtcclxuICBpZiAoZXJyb3JzID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZXJyb3JzLm1hcChlID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YVBhdGgsIGtleXdvcmQsIG1lc3NhZ2UsIHBhcmFtcywgc2NoZW1hUGF0aCB9ID0gZTtcclxuICAgIGxldCBwcm9wZXJ0eSA9IGAke2RhdGFQYXRofWA7XHJcblxyXG4gICAgLy8gcHV0IGRhdGEgaW4gZXhwZWN0ZWQgZm9ybWF0XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiBrZXl3b3JkLFxyXG4gICAgICBwcm9wZXJ0eSxcclxuICAgICAgbWVzc2FnZSxcclxuICAgICAgcGFyYW1zLCAvLyBzcGVjaWZpYyB0byBhanZcclxuICAgICAgc3RhY2s6IGAke3Byb3BlcnR5fSAke21lc3NhZ2V9YC50cmltKCksXHJcbiAgICAgIHNjaGVtYVBhdGgsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiBwcm9jZXNzZXMgdGhlIGZvcm1EYXRhIHdpdGggYSB1c2VyIGB2YWxpZGF0ZWAgY29udHJpYnV0ZWRcclxuICogZnVuY3Rpb24sIHdoaWNoIHJlY2VpdmVzIHRoZSBmb3JtIGRhdGEgYW5kIGFuIGBlcnJvckhhbmRsZXJgIG9iamVjdCB0aGF0XHJcbiAqIHdpbGwgYmUgdXNlZCB0byBhZGQgY3VzdG9tIHZhbGlkYXRpb24gZXJyb3JzIGZvciBlYWNoIGZpZWxkLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVGb3JtRGF0YShcclxuICBmb3JtRGF0YSxcclxuICBzY2hlbWEsXHJcbiAgY3VzdG9tVmFsaWRhdGUsXHJcbiAgdHJhbnNmb3JtRXJyb3JzLFxyXG4gIGFkZGl0aW9uYWxNZXRhU2NoZW1hcyA9IFtdLFxyXG4gIGN1c3RvbUZvcm1hdHMgPSB7fVxyXG4pIHtcclxuICAvLyBJbmNsdWRlIGZvcm0gZGF0YSB3aXRoIHVuZGVmaW5lZCB2YWx1ZXMsIHdoaWNoIGlzIHJlcXVpcmVkIGZvciB2YWxpZGF0aW9uLlxyXG4gIGNvbnN0IHJvb3RTY2hlbWEgPSBzY2hlbWE7XHJcbiAgZm9ybURhdGEgPSBnZXREZWZhdWx0Rm9ybVN0YXRlKHNjaGVtYSwgZm9ybURhdGEsIHJvb3RTY2hlbWEsIHRydWUpO1xyXG5cclxuICBjb25zdCBuZXdNZXRhU2NoZW1hcyA9ICFkZWVwRXF1YWxzKGZvcm1lck1ldGFTY2hlbWEsIGFkZGl0aW9uYWxNZXRhU2NoZW1hcyk7XHJcbiAgY29uc3QgbmV3Rm9ybWF0cyA9ICFkZWVwRXF1YWxzKGZvcm1lckN1c3RvbUZvcm1hdHMsIGN1c3RvbUZvcm1hdHMpO1xyXG5cclxuICBpZiAobmV3TWV0YVNjaGVtYXMgfHwgbmV3Rm9ybWF0cykge1xyXG4gICAgYWp2ID0gY3JlYXRlQWp2SW5zdGFuY2UoKTtcclxuICB9XHJcblxyXG4gIC8vIGFkZCBtb3JlIHNjaGVtYXMgdG8gdmFsaWRhdGUgYWdhaW5zdFxyXG4gIGlmIChcclxuICAgIGFkZGl0aW9uYWxNZXRhU2NoZW1hcyAmJlxyXG4gICAgbmV3TWV0YVNjaGVtYXMgJiZcclxuICAgIEFycmF5LmlzQXJyYXkoYWRkaXRpb25hbE1ldGFTY2hlbWFzKVxyXG4gICkge1xyXG4gICAgYWp2LmFkZE1ldGFTY2hlbWEoYWRkaXRpb25hbE1ldGFTY2hlbWFzKTtcclxuICAgIGZvcm1lck1ldGFTY2hlbWEgPSBhZGRpdGlvbmFsTWV0YVNjaGVtYXM7XHJcbiAgfVxyXG5cclxuICAvLyBhZGQgbW9yZSBjdXN0b20gZm9ybWF0cyB0byB2YWxpZGF0ZSBhZ2FpbnN0XHJcbiAgaWYgKGN1c3RvbUZvcm1hdHMgJiYgbmV3Rm9ybWF0cyAmJiBpc09iamVjdChjdXN0b21Gb3JtYXRzKSkge1xyXG4gICAgT2JqZWN0LmtleXMoY3VzdG9tRm9ybWF0cykuZm9yRWFjaChmb3JtYXROYW1lID0+IHtcclxuICAgICAgYWp2LmFkZEZvcm1hdChmb3JtYXROYW1lLCBjdXN0b21Gb3JtYXRzW2Zvcm1hdE5hbWVdKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm1lckN1c3RvbUZvcm1hdHMgPSBjdXN0b21Gb3JtYXRzO1xyXG4gIH1cclxuXHJcbiAgbGV0IHZhbGlkYXRpb25FcnJvciA9IG51bGw7XHJcbiAgdHJ5IHtcclxuICAgIGFqdi52YWxpZGF0ZShzY2hlbWEsIGZvcm1EYXRhKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHZhbGlkYXRpb25FcnJvciA9IGVycjtcclxuICB9XHJcblxyXG4gIGxldCBlcnJvcnMgPSB0cmFuc2Zvcm1BanZFcnJvcnMoYWp2LmVycm9ycyk7XHJcbiAgLy8gQ2xlYXIgZXJyb3JzIHRvIHByZXZlbnQgcGVyc2lzdGVudCBlcnJvcnMsIHNlZSAjMTEwNFxyXG5cclxuICBhanYuZXJyb3JzID0gbnVsbDtcclxuXHJcbiAgY29uc3Qgbm9Qcm9wZXJNZXRhU2NoZW1hID1cclxuICAgIHZhbGlkYXRpb25FcnJvciAmJlxyXG4gICAgdmFsaWRhdGlvbkVycm9yLm1lc3NhZ2UgJiZcclxuICAgIHR5cGVvZiB2YWxpZGF0aW9uRXJyb3IubWVzc2FnZSA9PT0gXCJzdHJpbmdcIiAmJlxyXG4gICAgdmFsaWRhdGlvbkVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJubyBzY2hlbWEgd2l0aCBrZXkgb3IgcmVmIFwiKTtcclxuXHJcbiAgaWYgKG5vUHJvcGVyTWV0YVNjaGVtYSkge1xyXG4gICAgZXJyb3JzID0gW1xyXG4gICAgICAuLi5lcnJvcnMsXHJcbiAgICAgIHtcclxuICAgICAgICBzdGFjazogdmFsaWRhdGlvbkVycm9yLm1lc3NhZ2UsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG4gIH1cclxuICBpZiAodHlwZW9mIHRyYW5zZm9ybUVycm9ycyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICBlcnJvcnMgPSB0cmFuc2Zvcm1FcnJvcnMoZXJyb3JzKTtcclxuICB9XHJcblxyXG4gIGxldCBlcnJvclNjaGVtYSA9IHRvRXJyb3JTY2hlbWEoZXJyb3JzKTtcclxuXHJcbiAgaWYgKG5vUHJvcGVyTWV0YVNjaGVtYSkge1xyXG4gICAgZXJyb3JTY2hlbWEgPSB7XHJcbiAgICAgIC4uLmVycm9yU2NoZW1hLFxyXG4gICAgICAuLi57XHJcbiAgICAgICAgJHNjaGVtYToge1xyXG4gICAgICAgICAgX19lcnJvcnM6IFt2YWxpZGF0aW9uRXJyb3IubWVzc2FnZV0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIGN1c3RvbVZhbGlkYXRlICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHJldHVybiB7IGVycm9ycywgZXJyb3JTY2hlbWEgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGVycm9ySGFuZGxlciA9IGN1c3RvbVZhbGlkYXRlKGZvcm1EYXRhLCBjcmVhdGVFcnJvckhhbmRsZXIoZm9ybURhdGEpKTtcclxuICBjb25zdCB1c2VyRXJyb3JTY2hlbWEgPSB1bndyYXBFcnJvckhhbmRsZXIoZXJyb3JIYW5kbGVyKTtcclxuICBjb25zdCBuZXdFcnJvclNjaGVtYSA9IG1lcmdlT2JqZWN0cyhlcnJvclNjaGVtYSwgdXNlckVycm9yU2NoZW1hLCB0cnVlKTtcclxuICAvLyBYWFg6IFRoZSBlcnJvcnMgbGlzdCBwcm9kdWNlZCBpcyBub3QgZnVsbHkgY29tcGxpYW50IHdpdGggdGhlIGZvcm1hdFxyXG4gIC8vIGV4cG9zZWQgYnkgdGhlIGpzb25zY2hlbWEgbGliLCB3aGljaCBjb250YWlucyBmdWxsIGZpZWxkIHBhdGhzIGFuZCBvdGhlclxyXG4gIC8vIHByb3BlcnRpZXMuXHJcbiAgY29uc3QgbmV3RXJyb3JzID0gdG9FcnJvckxpc3QobmV3RXJyb3JTY2hlbWEpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZXJyb3JzOiBuZXdFcnJvcnMsXHJcbiAgICBlcnJvclNjaGVtYTogbmV3RXJyb3JTY2hlbWEsXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlY3Vyc2l2ZWx5IHByZWZpeGVzIGFsbCAkcmVmJ3MgaW4gYSBzY2hlbWEgd2l0aCBgUk9PVF9TQ0hFTUFfUFJFRklYYFxyXG4gKiBUaGlzIGlzIHVzZWQgaW4gaXNWYWxpZCB0byBtYWtlIHJlZmVyZW5jZXMgdG8gdGhlIHJvb3RTY2hlbWFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3aXRoSWRSZWZQcmVmaXgoc2NoZW1hTm9kZSkge1xyXG4gIGxldCBvYmogPSBzY2hlbWFOb2RlO1xyXG4gIGlmIChzY2hlbWFOb2RlLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgIG9iaiA9IHsgLi4uc2NoZW1hTm9kZSB9O1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XHJcbiAgICAgIGlmIChcclxuICAgICAgICBrZXkgPT09IFwiJHJlZlwiICYmXHJcbiAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmXHJcbiAgICAgICAgdmFsdWUuc3RhcnRzV2l0aChcIiNcIilcclxuICAgICAgKSB7XHJcbiAgICAgICAgb2JqW2tleV0gPSBST09UX1NDSEVNQV9QUkVGSVggKyB2YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvYmpba2V5XSA9IHdpdGhJZFJlZlByZWZpeCh2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc2NoZW1hTm9kZSkpIHtcclxuICAgIG9iaiA9IFsuLi5zY2hlbWFOb2RlXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG9ialtpXSA9IHdpdGhJZFJlZlByZWZpeChvYmpbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG4vKipcclxuICogVmFsaWRhdGVzIGRhdGEgYWdhaW5zdCBhIHNjaGVtYSwgcmV0dXJuaW5nIHRydWUgaWYgdGhlIGRhdGEgaXMgdmFsaWQsIG9yXHJcbiAqIGZhbHNlIG90aGVyd2lzZS4gSWYgdGhlIHNjaGVtYSBpcyBpbnZhbGlkLCB0aGVuIHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm5cclxuICogZmFsc2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZChzY2hlbWEsIGRhdGEsIHJvb3RTY2hlbWEpIHtcclxuICB0cnkge1xyXG4gICAgLy8gYWRkIHRoZSByb290U2NoZW1hIFJPT1RfU0NIRU1BX1BSRUZJWCBhcyBpZC5cclxuICAgIC8vIHRoZW4gcmV3cml0ZSB0aGUgc2NoZW1hIHJlZidzIHRvIHBvaW50IHRvIHRoZSByb290U2NoZW1hXHJcbiAgICAvLyB0aGlzIGFjY291bnRzIGZvciB0aGUgY2FzZSB3aGVyZSBzY2hlbWEgaGF2ZSByZWZlcmVuY2VzIHRvIG1vZGVsc1xyXG4gICAgLy8gdGhhdCBsaXZlcyBpbiB0aGUgcm9vdFNjaGVtYSBidXQgbm90IGluIHRoZSBzY2hlbWEgaW4gcXVlc3Rpb24uXHJcbiAgICByZXR1cm4gYWp2XHJcbiAgICAgIC5hZGRTY2hlbWEocm9vdFNjaGVtYSwgUk9PVF9TQ0hFTUFfUFJFRklYKVxyXG4gICAgICAudmFsaWRhdGUod2l0aElkUmVmUHJlZml4KHNjaGVtYSksIGRhdGEpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGZpbmFsbHkge1xyXG4gICAgLy8gbWFrZSBzdXJlIHdlIHJlbW92ZSB0aGUgcm9vdFNjaGVtYSBmcm9tIHRoZSBnbG9iYWwgYWp2IGluc3RhbmNlXHJcbiAgICBhanYucmVtb3ZlU2NoZW1hKFJPT1RfU0NIRU1BX1BSRUZJWCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==