"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toErrorList = toErrorList;
exports["default"] = validateFormData;
exports.withIdRefPrefix = withIdRefPrefix;
exports.isValid = isValid;

var _toPath = _interopRequireDefault(require("lodash/toPath"));

var _ajv = _interopRequireDefault(require("ajv"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ajv = createAjvInstance();
var formerCustomFormats = null;
var formerMetaSchema = null;
var ROOT_SCHEMA_PREFIX = "__rjsf_rootSchema";

function createAjvInstance() {
  var ajv = new _ajv["default"]({
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
    var path = (0, _toPath["default"])(property);
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

function toErrorList(errorSchema) {
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

  if ((0, _utils.isObject)(formData)) {
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


function validateFormData(formData, schema, customValidate, transformErrors) {
  var additionalMetaSchemas = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  var customFormats = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  // Include form data with undefined values, which is required for validation.
  var rootSchema = schema;
  formData = (0, _utils.getDefaultFormState)(schema, formData, rootSchema, true);
  var newMetaSchemas = !(0, _utils.deepEquals)(formerMetaSchema, additionalMetaSchemas);
  var newFormats = !(0, _utils.deepEquals)(formerCustomFormats, customFormats);

  if (newMetaSchemas || newFormats) {
    ajv = createAjvInstance();
  } // add more schemas to validate against


  if (additionalMetaSchemas && newMetaSchemas && Array.isArray(additionalMetaSchemas)) {
    ajv.addMetaSchema(additionalMetaSchemas);
    formerMetaSchema = additionalMetaSchemas;
  } // add more custom formats to validate against


  if (customFormats && newFormats && (0, _utils.isObject)(customFormats)) {
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
  var newErrorSchema = (0, _utils.mergeObjects)(errorSchema, userErrorSchema, true); // XXX: The errors list produced is not fully compliant with the format
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


function withIdRefPrefix(schemaNode) {
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


function isValid(schema, data, rootSchema) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWxpZGF0ZS5qcyJdLCJuYW1lcyI6WyJhanYiLCJjcmVhdGVBanZJbnN0YW5jZSIsImZvcm1lckN1c3RvbUZvcm1hdHMiLCJmb3JtZXJNZXRhU2NoZW1hIiwiUk9PVF9TQ0hFTUFfUFJFRklYIiwiQWp2IiwiZXJyb3JEYXRhUGF0aCIsImFsbEVycm9ycyIsIm11bHRpcGxlT2ZQcmVjaXNpb24iLCJzY2hlbWFJZCIsInVua25vd25Gb3JtYXRzIiwiYWRkRm9ybWF0IiwidG9FcnJvclNjaGVtYSIsImVycm9ycyIsImxlbmd0aCIsInJlZHVjZSIsImVycm9yU2NoZW1hIiwiZXJyb3IiLCJwcm9wZXJ0eSIsIm1lc3NhZ2UiLCJwYXRoIiwicGFyZW50Iiwic3BsaWNlIiwic2xpY2UiLCJzZWdtZW50IiwiQXJyYXkiLCJpc0FycmF5IiwiX19lcnJvcnMiLCJjb25jYXQiLCJ0b0Vycm9yTGlzdCIsImZpZWxkTmFtZSIsImVycm9yTGlzdCIsIm1hcCIsInN0YWNrIiwiT2JqZWN0Iiwia2V5cyIsImFjYyIsImtleSIsImNyZWF0ZUVycm9ySGFuZGxlciIsImZvcm1EYXRhIiwiaGFuZGxlciIsImFkZEVycm9yIiwicHVzaCIsInZhbHVlIiwidW53cmFwRXJyb3JIYW5kbGVyIiwiZXJyb3JIYW5kbGVyIiwidHJhbnNmb3JtQWp2RXJyb3JzIiwiZSIsImRhdGFQYXRoIiwia2V5d29yZCIsInBhcmFtcyIsInNjaGVtYVBhdGgiLCJuYW1lIiwidHJpbSIsInZhbGlkYXRlRm9ybURhdGEiLCJzY2hlbWEiLCJjdXN0b21WYWxpZGF0ZSIsInRyYW5zZm9ybUVycm9ycyIsImFkZGl0aW9uYWxNZXRhU2NoZW1hcyIsImN1c3RvbUZvcm1hdHMiLCJyb290U2NoZW1hIiwibmV3TWV0YVNjaGVtYXMiLCJuZXdGb3JtYXRzIiwiYWRkTWV0YVNjaGVtYSIsImZvckVhY2giLCJmb3JtYXROYW1lIiwidmFsaWRhdGlvbkVycm9yIiwidmFsaWRhdGUiLCJlcnIiLCJub1Byb3Blck1ldGFTY2hlbWEiLCJpbmNsdWRlcyIsIiRzY2hlbWEiLCJ1c2VyRXJyb3JTY2hlbWEiLCJuZXdFcnJvclNjaGVtYSIsIm5ld0Vycm9ycyIsIndpdGhJZFJlZlByZWZpeCIsInNjaGVtYU5vZGUiLCJvYmoiLCJjb25zdHJ1Y3RvciIsInN0YXJ0c1dpdGgiLCJpIiwiaXNWYWxpZCIsImRhdGEiLCJhZGRTY2hlbWEiLCJyZW1vdmVTY2hlbWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQURBLElBQUlBLEdBQUcsR0FBR0MsaUJBQWlCLEVBQTNCO0FBR0EsSUFBSUMsbUJBQW1CLEdBQUcsSUFBMUI7QUFDQSxJQUFJQyxnQkFBZ0IsR0FBRyxJQUF2QjtBQUNBLElBQU1DLGtCQUFrQixHQUFHLG1CQUEzQjs7QUFJQSxTQUFTSCxpQkFBVCxHQUE2QjtBQUMzQixNQUFNRCxHQUFHLEdBQUcsSUFBSUssZUFBSixDQUFRO0FBQ2xCQyxJQUFBQSxhQUFhLEVBQUUsVUFERztBQUVsQkMsSUFBQUEsU0FBUyxFQUFFLElBRk87QUFHbEJDLElBQUFBLG1CQUFtQixFQUFFLENBSEg7QUFJbEJDLElBQUFBLFFBQVEsRUFBRSxNQUpRO0FBS2xCQyxJQUFBQSxjQUFjLEVBQUU7QUFMRSxHQUFSLENBQVosQ0FEMkIsQ0FTM0I7O0FBQ0FWLEVBQUFBLEdBQUcsQ0FBQ1csU0FBSixDQUNFLFVBREYsRUFFRSwyREFGRjtBQUlBWCxFQUFBQSxHQUFHLENBQUNXLFNBQUosQ0FDRSxPQURGLEVBRUUsNFlBRkY7QUFJQSxTQUFPWCxHQUFQO0FBQ0Q7O0FBRUQsU0FBU1ksYUFBVCxDQUF1QkMsTUFBdkIsRUFBK0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSSxDQUFDQSxNQUFNLENBQUNDLE1BQVosRUFBb0I7QUFDbEIsV0FBTyxFQUFQO0FBQ0Q7O0FBQ0QsU0FB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QVNJLE9BQVQsQ0FBaUIxQixNQUFqQixFQUF5QjJCLElBQXpCLEVBQStCdEIsVUFBL0IsRUFBMkM7QUFDaEQsTUFBSTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBTzVELEdBQUcsQ0FDUG1GLFNBREksQ0FDTXZCLFVBRE4sRUFDa0J4RCxrQkFEbEIsRUFFSitELFFBRkksQ0FFS1EsZUFBZSxDQUFDcEIsTUFBRCxDQUZwQixFQUU4QjJCLElBRjlCLENBQVA7QUFHRCxHQVJELENBUUUsT0FBT25DLENBQVAsRUFBVTtBQUNWLFdBQU8sS0FBUDtBQUNELEdBVkQsU0FVVTtBQUNSO0FBQ0EvQyxJQUFBQSxHQUFHLENBQUNvRixZQUFKLENBQWlCaEYsa0JBQWpCO0FBQ0Q7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b1BhdGggZnJvbSBcImxvZGFzaC90b1BhdGhcIjtcclxuaW1wb3J0IEFqdiBmcm9tIFwiYWp2XCI7XHJcbmxldCBhanYgPSBjcmVhdGVBanZJbnN0YW5jZSgpO1xyXG5pbXBvcnQgeyBkZWVwRXF1YWxzLCBnZXREZWZhdWx0Rm9ybVN0YXRlIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmxldCBmb3JtZXJDdXN0b21Gb3JtYXRzID0gbnVsbDtcclxubGV0IGZvcm1lck1ldGFTY2hlbWEgPSBudWxsO1xyXG5jb25zdCBST09UX1NDSEVNQV9QUkVGSVggPSBcIl9fcmpzZl9yb290U2NoZW1hXCI7XHJcblxyXG5pbXBvcnQgeyBpc09iamVjdCwgbWVyZ2VPYmplY3RzIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFqdkluc3RhbmNlKCkge1xyXG4gIGNvbnN0IGFqdiA9IG5ldyBBanYoe1xyXG4gICAgZXJyb3JEYXRhUGF0aDogXCJwcm9wZXJ0eVwiLFxyXG4gICAgYWxsRXJyb3JzOiB0cnVlLFxyXG4gICAgbXVsdGlwbGVPZlByZWNpc2lvbjogOCxcclxuICAgIHNjaGVtYUlkOiBcImF1dG9cIixcclxuICAgIHVua25vd25Gb3JtYXRzOiBcImlnbm9yZVwiLFxyXG4gIH0pO1xyXG5cclxuICAvLyBhZGQgY3VzdG9tIGZvcm1hdHNcclxuICBhanYuYWRkRm9ybWF0KFxyXG4gICAgXCJkYXRhLXVybFwiLFxyXG4gICAgL15kYXRhOihbYS16XStcXC9bYS16MC05LSsuXSspPzsoPzpuYW1lPSguKik7KT9iYXNlNjQsKC4qKSQvXHJcbiAgKTtcclxuICBhanYuYWRkRm9ybWF0KFxyXG4gICAgXCJjb2xvclwiLFxyXG4gICAgL14oIz8oWzAtOUEtRmEtZl17M30pezEsMn1cXGJ8YXF1YXxibGFja3xibHVlfGZ1Y2hzaWF8Z3JheXxncmVlbnxsaW1lfG1hcm9vbnxuYXZ5fG9saXZlfG9yYW5nZXxwdXJwbGV8cmVkfHNpbHZlcnx0ZWFsfHdoaXRlfHllbGxvd3wocmdiXFwoXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKixcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqLFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccypcXCkpfChyZ2JcXChcXHMqKFxcZD9cXGQlfDEwMCUpK1xccyosXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqLFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKlxcKSkpJC9cclxuICApO1xyXG4gIHJldHVybiBhanY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvRXJyb3JTY2hlbWEoZXJyb3JzKSB7XHJcbiAgLy8gVHJhbnNmb3JtcyBhIGFqdiB2YWxpZGF0aW9uIGVycm9ycyBsaXN0OlxyXG4gIC8vIFtcclxuICAvLyAgIHtwcm9wZXJ0eTogXCIubGV2ZWwxLmxldmVsMlsyXS5sZXZlbDNcIiwgbWVzc2FnZTogXCJlcnIgYVwifSxcclxuICAvLyAgIHtwcm9wZXJ0eTogXCIubGV2ZWwxLmxldmVsMlsyXS5sZXZlbDNcIiwgbWVzc2FnZTogXCJlcnIgYlwifSxcclxuICAvLyAgIHtwcm9wZXJ0eTogXCIubGV2ZWwxLmxldmVsMls0XS5sZXZlbDNcIiwgbWVzc2FnZTogXCJlcnIgYlwifSxcclxuICAvLyBdXHJcbiAgLy8gSW50byBhbiBlcnJvciB0cmVlOlxyXG4gIC8vIHtcclxuICAvLyAgIGxldmVsMToge1xyXG4gIC8vICAgICBsZXZlbDI6IHtcclxuICAvLyAgICAgICAyOiB7bGV2ZWwzOiB7ZXJyb3JzOiBbXCJlcnIgYVwiLCBcImVyciBiXCJdfX0sXHJcbiAgLy8gICAgICAgNDoge2xldmVsMzoge2Vycm9yczogW1wiZXJyIGJcIl19fSxcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfVxyXG4gIC8vIH07XHJcbiAgaWYgKCFlcnJvcnMubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG4gIHJldHVybiBlcnJvcnMucmVkdWNlKChlcnJvclNjaGVtYSwgZXJyb3IpID0+IHtcclxuICAgIGNvbnN0IHsgcHJvcGVydHksIG1lc3NhZ2UgfSA9IGVycm9yO1xyXG4gICAgY29uc3QgcGF0aCA9IHRvUGF0aChwcm9wZXJ0eSk7XHJcbiAgICBsZXQgcGFyZW50ID0gZXJyb3JTY2hlbWE7XHJcblxyXG4gICAgLy8gSWYgdGhlIHByb3BlcnR5IGlzIGF0IHRoZSByb290ICgubGV2ZWwxKSB0aGVuIHRvUGF0aCBjcmVhdGVzXHJcbiAgICAvLyBhbiBlbXB0eSBhcnJheSBlbGVtZW50IGF0IHRoZSBmaXJzdCBpbmRleC4gUmVtb3ZlIGl0LlxyXG4gICAgaWYgKHBhdGgubGVuZ3RoID4gMCAmJiBwYXRoWzBdID09PSBcIlwiKSB7XHJcbiAgICAgIHBhdGguc3BsaWNlKDAsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3Qgc2VnbWVudCBvZiBwYXRoLnNsaWNlKDApKSB7XHJcbiAgICAgIGlmICghKHNlZ21lbnQgaW4gcGFyZW50KSkge1xyXG4gICAgICAgIHBhcmVudFtzZWdtZW50XSA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIHBhcmVudCA9IHBhcmVudFtzZWdtZW50XTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJlbnQuX19lcnJvcnMpKSB7XHJcbiAgICAgIC8vIFdlIHN0b3JlIHRoZSBsaXN0IG9mIGVycm9ycyBmb3IgdGhpcyBub2RlIGluIGEgcHJvcGVydHkgbmFtZWQgX19lcnJvcnNcclxuICAgICAgLy8gdG8gYXZvaWQgbmFtZSBjb2xsaXNpb24gd2l0aCBhIHBvc3NpYmxlIHN1YiBzY2hlbWEgZmllbGQgbmFtZWRcclxuICAgICAgLy8gXCJlcnJvcnNcIiAoc2VlIGB2YWxpZGF0ZS5jcmVhdGVFcnJvckhhbmRsZXJgKS5cclxuICAgICAgcGFyZW50Ll9fZXJyb3JzID0gcGFyZW50Ll9fZXJyb3JzLmNvbmNhdChtZXNzYWdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChtZXNzYWdlKSB7XHJcbiAgICAgICAgcGFyZW50Ll9fZXJyb3JzID0gW21lc3NhZ2VdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3JTY2hlbWE7XHJcbiAgfSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9FcnJvckxpc3QoZXJyb3JTY2hlbWEsIGZpZWxkTmFtZSA9IFwicm9vdFwiKSB7XHJcbiAgLy8gWFhYOiBXZSBzaG91bGQgdHJhbnNmb3JtIGZpZWxkTmFtZSBhcyBhIGZ1bGwgZmllbGQgcGF0aCBzdHJpbmcuXHJcbiAgbGV0IGVycm9yTGlzdCA9IFtdO1xyXG4gIGlmIChcIl9fZXJyb3JzXCIgaW4gZXJyb3JTY2hlbWEpIHtcclxuICAgIGVycm9yTGlzdCA9IGVycm9yTGlzdC5jb25jYXQoXHJcbiAgICAgIGVycm9yU2NoZW1hLl9fZXJyb3JzLm1hcChzdGFjayA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHN0YWNrOiBgJHtmaWVsZE5hbWV9OiAke3N0YWNrfWAsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiBPYmplY3Qua2V5cyhlcnJvclNjaGVtYSkucmVkdWNlKChhY2MsIGtleSkgPT4ge1xyXG4gICAgaWYgKGtleSAhPT0gXCJfX2Vycm9yc1wiKSB7XHJcbiAgICAgIGFjYyA9IGFjYy5jb25jYXQodG9FcnJvckxpc3QoZXJyb3JTY2hlbWFba2V5XSwga2V5KSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWNjO1xyXG4gIH0sIGVycm9yTGlzdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVycm9ySGFuZGxlcihmb3JtRGF0YSkge1xyXG4gIGNvbnN0IGhhbmRsZXIgPSB7XHJcbiAgICAvLyBXZSBzdG9yZSB0aGUgbGlzdCBvZiBlcnJvcnMgZm9yIHRoaXMgbm9kZSBpbiBhIHByb3BlcnR5IG5hbWVkIF9fZXJyb3JzXHJcbiAgICAvLyB0byBhdm9pZCBuYW1lIGNvbGxpc2lvbiB3aXRoIGEgcG9zc2libGUgc3ViIHNjaGVtYSBmaWVsZCBuYW1lZFxyXG4gICAgLy8gXCJlcnJvcnNcIiAoc2VlIGB1dGlscy50b0Vycm9yU2NoZW1hYCkuXHJcbiAgICBfX2Vycm9yczogW10sXHJcbiAgICBhZGRFcnJvcihtZXNzYWdlKSB7XHJcbiAgICAgIHRoaXMuX19lcnJvcnMucHVzaChtZXNzYWdlKTtcclxuICAgIH0sXHJcbiAgfTtcclxuICBpZiAoaXNPYmplY3QoZm9ybURhdGEpKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZm9ybURhdGEpLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcclxuICAgICAgcmV0dXJuIHsgLi4uYWNjLCBba2V5XTogY3JlYXRlRXJyb3JIYW5kbGVyKGZvcm1EYXRhW2tleV0pIH07XHJcbiAgICB9LCBoYW5kbGVyKTtcclxuICB9XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoZm9ybURhdGEpKSB7XHJcbiAgICByZXR1cm4gZm9ybURhdGEucmVkdWNlKChhY2MsIHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgcmV0dXJuIHsgLi4uYWNjLCBba2V5XTogY3JlYXRlRXJyb3JIYW5kbGVyKHZhbHVlKSB9O1xyXG4gICAgfSwgaGFuZGxlcik7XHJcbiAgfVxyXG4gIHJldHVybiBoYW5kbGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bndyYXBFcnJvckhhbmRsZXIoZXJyb3JIYW5kbGVyKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGVycm9ySGFuZGxlcikucmVkdWNlKChhY2MsIGtleSkgPT4ge1xyXG4gICAgaWYgKGtleSA9PT0gXCJhZGRFcnJvclwiKSB7XHJcbiAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJfX2Vycm9yc1wiKSB7XHJcbiAgICAgIHJldHVybiB7IC4uLmFjYywgW2tleV06IGVycm9ySGFuZGxlcltrZXldIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyAuLi5hY2MsIFtrZXldOiB1bndyYXBFcnJvckhhbmRsZXIoZXJyb3JIYW5kbGVyW2tleV0pIH07XHJcbiAgfSwge30pO1xyXG59XHJcblxyXG4vKipcclxuICogVHJhbnNmb3JtaW5nIHRoZSBlcnJvciBvdXRwdXQgZnJvbSBhanYgdG8gZm9ybWF0IHVzZWQgYnkganNvbnNjaGVtYS5cclxuICogQXQgc29tZSBwb2ludCwgY29tcG9uZW50cyBzaG91bGQgYmUgdXBkYXRlZCB0byBzdXBwb3J0IGFqdi5cclxuICovXHJcbmZ1bmN0aW9uIHRyYW5zZm9ybUFqdkVycm9ycyhlcnJvcnMgPSBbXSkge1xyXG4gIGlmIChlcnJvcnMgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIHJldHVybiBlcnJvcnMubWFwKGUgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhUGF0aCwga2V5d29yZCwgbWVzc2FnZSwgcGFyYW1zLCBzY2hlbWFQYXRoIH0gPSBlO1xyXG4gICAgbGV0IHByb3BlcnR5ID0gYCR7ZGF0YVBhdGh9YDtcclxuXHJcbiAgICAvLyBwdXQgZGF0YSBpbiBleHBlY3RlZCBmb3JtYXRcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5hbWU6IGtleXdvcmQsXHJcbiAgICAgIHByb3BlcnR5LFxyXG4gICAgICBtZXNzYWdlLFxyXG4gICAgICBwYXJhbXMsIC8vIHNwZWNpZmljIHRvIGFqdlxyXG4gICAgICBzdGFjazogYCR7cHJvcGVydHl9ICR7bWVzc2FnZX1gLnRyaW0oKSxcclxuICAgICAgc2NoZW1hUGF0aCxcclxuICAgIH07XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIHByb2Nlc3NlcyB0aGUgZm9ybURhdGEgd2l0aCBhIHVzZXIgYHZhbGlkYXRlYCBjb250cmlidXRlZFxyXG4gKiBmdW5jdGlvbiwgd2hpY2ggcmVjZWl2ZXMgdGhlIGZvcm0gZGF0YSBhbmQgYW4gYGVycm9ySGFuZGxlcmAgb2JqZWN0IHRoYXRcclxuICogd2lsbCBiZSB1c2VkIHRvIGFkZCBjdXN0b20gdmFsaWRhdGlvbiBlcnJvcnMgZm9yIGVhY2ggZmllbGQuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1EYXRhKFxyXG4gIGZvcm1EYXRhLFxyXG4gIHNjaGVtYSxcclxuICBjdXN0b21WYWxpZGF0ZSxcclxuICB0cmFuc2Zvcm1FcnJvcnMsXHJcbiAgYWRkaXRpb25hbE1ldGFTY2hlbWFzID0gW10sXHJcbiAgY3VzdG9tRm9ybWF0cyA9IHt9XHJcbikge1xyXG4gIC8vIEluY2x1ZGUgZm9ybSBkYXRhIHdpdGggdW5kZWZpbmVkIHZhbHVlcywgd2hpY2ggaXMgcmVxdWlyZWQgZm9yIHZhbGlkYXRpb24uXHJcbiAgY29uc3Qgcm9vdFNjaGVtYSA9IHNjaGVtYTtcclxuICBmb3JtRGF0YSA9IGdldERlZmF1bHRGb3JtU3RhdGUoc2NoZW1hLCBmb3JtRGF0YSwgcm9vdFNjaGVtYSwgdHJ1ZSk7XHJcblxyXG4gIGNvbnN0IG5ld01ldGFTY2hlbWFzID0gIWRlZXBFcXVhbHMoZm9ybWVyTWV0YVNjaGVtYSwgYWRkaXRpb25hbE1ldGFTY2hlbWFzKTtcclxuICBjb25zdCBuZXdGb3JtYXRzID0gIWRlZXBFcXVhbHMoZm9ybWVyQ3VzdG9tRm9ybWF0cywgY3VzdG9tRm9ybWF0cyk7XHJcblxyXG4gIGlmIChuZXdNZXRhU2NoZW1hcyB8fCBuZXdGb3JtYXRzKSB7XHJcbiAgICBhanYgPSBjcmVhdGVBanZJbnN0YW5jZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gYWRkIG1vcmUgc2NoZW1hcyB0byB2YWxpZGF0ZSBhZ2FpbnN0XHJcbiAgaWYgKFxyXG4gICAgYWRkaXRpb25hbE1ldGFTY2hlbWFzICYmXHJcbiAgICBuZXdNZXRhU2NoZW1hcyAmJlxyXG4gICAgQXJyYXkuaXNBcnJheShhZGRpdGlvbmFsTWV0YVNjaGVtYXMpXHJcbiAgKSB7XHJcbiAgICBhanYuYWRkTWV0YVNjaGVtYShhZGRpdGlvbmFsTWV0YVNjaGVtYXMpO1xyXG4gICAgZm9ybWVyTWV0YVNjaGVtYSA9IGFkZGl0aW9uYWxNZXRhU2NoZW1hcztcclxuICB9XHJcblxyXG4gIC8vIGFkZCBtb3JlIGN1c3RvbSBmb3JtYXRzIHRvIHZhbGlkYXRlIGFnYWluc3RcclxuICBpZiAoY3VzdG9tRm9ybWF0cyAmJiBuZXdGb3JtYXRzICYmIGlzT2JqZWN0KGN1c3RvbUZvcm1hdHMpKSB7XHJcbiAgICBPYmplY3Qua2V5cyhjdXN0b21Gb3JtYXRzKS5mb3JFYWNoKGZvcm1hdE5hbWUgPT4ge1xyXG4gICAgICBhanYuYWRkRm9ybWF0KGZvcm1hdE5hbWUsIGN1c3RvbUZvcm1hdHNbZm9ybWF0TmFtZV0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9ybWVyQ3VzdG9tRm9ybWF0cyA9IGN1c3RvbUZvcm1hdHM7XHJcbiAgfVxyXG5cclxuICBsZXQgdmFsaWRhdGlvbkVycm9yID0gbnVsbDtcclxuICB0cnkge1xyXG4gICAgYWp2LnZhbGlkYXRlKHNjaGVtYSwgZm9ybURhdGEpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgdmFsaWRhdGlvbkVycm9yID0gZXJyO1xyXG4gIH1cclxuXHJcbiAgbGV0IGVycm9ycyA9IHRyYW5zZm9ybUFqdkVycm9ycyhhanYuZXJyb3JzKTtcclxuICAvLyBDbGVhciBlcnJvcnMgdG8gcHJldmVudCBwZXJzaXN0ZW50IGVycm9ycywgc2VlICMxMTA0XHJcblxyXG4gIGFqdi5lcnJvcnMgPSBudWxsO1xyXG5cclxuICBjb25zdCBub1Byb3Blck1ldGFTY2hlbWEgPVxyXG4gICAgdmFsaWRhdGlvbkVycm9yICYmXHJcbiAgICB2YWxpZGF0aW9uRXJyb3IubWVzc2FnZSAmJlxyXG4gICAgdHlwZW9mIHZhbGlkYXRpb25FcnJvci5tZXNzYWdlID09PSBcInN0cmluZ1wiICYmXHJcbiAgICB2YWxpZGF0aW9uRXJyb3IubWVzc2FnZS5pbmNsdWRlcyhcIm5vIHNjaGVtYSB3aXRoIGtleSBvciByZWYgXCIpO1xyXG5cclxuICBpZiAobm9Qcm9wZXJNZXRhU2NoZW1hKSB7XHJcbiAgICBlcnJvcnMgPSBbXHJcbiAgICAgIC4uLmVycm9ycyxcclxuICAgICAge1xyXG4gICAgICAgIHN0YWNrOiB2YWxpZGF0aW9uRXJyb3IubWVzc2FnZSxcclxuICAgICAgfSxcclxuICAgIF07XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgdHJhbnNmb3JtRXJyb3JzID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIGVycm9ycyA9IHRyYW5zZm9ybUVycm9ycyhlcnJvcnMpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGVycm9yU2NoZW1hID0gdG9FcnJvclNjaGVtYShlcnJvcnMpO1xyXG5cclxuICBpZiAobm9Qcm9wZXJNZXRhU2NoZW1hKSB7XHJcbiAgICBlcnJvclNjaGVtYSA9IHtcclxuICAgICAgLi4uZXJyb3JTY2hlbWEsXHJcbiAgICAgIC4uLntcclxuICAgICAgICAkc2NoZW1hOiB7XHJcbiAgICAgICAgICBfX2Vycm9yczogW3ZhbGlkYXRpb25FcnJvci5tZXNzYWdlXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgY3VzdG9tVmFsaWRhdGUgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgcmV0dXJuIHsgZXJyb3JzLCBlcnJvclNjaGVtYSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZXJyb3JIYW5kbGVyID0gY3VzdG9tVmFsaWRhdGUoZm9ybURhdGEsIGNyZWF0ZUVycm9ySGFuZGxlcihmb3JtRGF0YSkpO1xyXG4gIGNvbnN0IHVzZXJFcnJvclNjaGVtYSA9IHVud3JhcEVycm9ySGFuZGxlcihlcnJvckhhbmRsZXIpO1xyXG4gIGNvbnN0IG5ld0Vycm9yU2NoZW1hID0gbWVyZ2VPYmplY3RzKGVycm9yU2NoZW1hLCB1c2VyRXJyb3JTY2hlbWEsIHRydWUpO1xyXG4gIC8vIFhYWDogVGhlIGVycm9ycyBsaXN0IHByb2R1Y2VkIGlzIG5vdCBmdWxseSBjb21wbGlhbnQgd2l0aCB0aGUgZm9ybWF0XHJcbiAgLy8gZXhwb3NlZCBieSB0aGUganNvbnNjaGVtYSBsaWIsIHdoaWNoIGNvbnRhaW5zIGZ1bGwgZmllbGQgcGF0aHMgYW5kIG90aGVyXHJcbiAgLy8gcHJvcGVydGllcy5cclxuICBjb25zdCBuZXdFcnJvcnMgPSB0b0Vycm9yTGlzdChuZXdFcnJvclNjaGVtYSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBlcnJvcnM6IG5ld0Vycm9ycyxcclxuICAgIGVycm9yU2NoZW1hOiBuZXdFcnJvclNjaGVtYSxcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogUmVjdXJzaXZlbHkgcHJlZml4ZXMgYWxsICRyZWYncyBpbiBhIHNjaGVtYSB3aXRoIGBST09UX1NDSEVNQV9QUkVGSVhgXHJcbiAqIFRoaXMgaXMgdXNlZCBpbiBpc1ZhbGlkIHRvIG1ha2UgcmVmZXJlbmNlcyB0byB0aGUgcm9vdFNjaGVtYVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhJZFJlZlByZWZpeChzY2hlbWFOb2RlKSB7XHJcbiAgbGV0IG9iaiA9IHNjaGVtYU5vZGU7XHJcbiAgaWYgKHNjaGVtYU5vZGUuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xyXG4gICAgb2JqID0geyAuLi5zY2hlbWFOb2RlIH07XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGtleSA9PT0gXCIkcmVmXCIgJiZcclxuICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiZcclxuICAgICAgICB2YWx1ZS5zdGFydHNXaXRoKFwiI1wiKVxyXG4gICAgICApIHtcclxuICAgICAgICBvYmpba2V5XSA9IFJPT1RfU0NIRU1BX1BSRUZJWCArIHZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9ialtrZXldID0gd2l0aElkUmVmUHJlZml4KHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzY2hlbWFOb2RlKSkge1xyXG4gICAgb2JqID0gWy4uLnNjaGVtYU5vZGVdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcclxuICAgICAgb2JqW2ldID0gd2l0aElkUmVmUHJlZml4KG9ialtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWYWxpZGF0ZXMgZGF0YSBhZ2FpbnN0IGEgc2NoZW1hLCByZXR1cm5pbmcgdHJ1ZSBpZiB0aGUgZGF0YSBpcyB2YWxpZCwgb3JcclxuICogZmFsc2Ugb3RoZXJ3aXNlLiBJZiB0aGUgc2NoZW1hIGlzIGludmFsaWQsIHRoZW4gdGhpcyBmdW5jdGlvbiB3aWxsIHJldHVyblxyXG4gKiBmYWxzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkKHNjaGVtYSwgZGF0YSwgcm9vdFNjaGVtYSkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBhZGQgdGhlIHJvb3RTY2hlbWEgUk9PVF9TQ0hFTUFfUFJFRklYIGFzIGlkLlxyXG4gICAgLy8gdGhlbiByZXdyaXRlIHRoZSBzY2hlbWEgcmVmJ3MgdG8gcG9pbnQgdG8gdGhlIHJvb3RTY2hlbWFcclxuICAgIC8vIHRoaXMgYWNjb3VudHMgZm9yIHRoZSBjYXNlIHdoZXJlIHNjaGVtYSBoYXZlIHJlZmVyZW5jZXMgdG8gbW9kZWxzXHJcbiAgICAvLyB0aGF0IGxpdmVzIGluIHRoZSByb290U2NoZW1hIGJ1dCBub3QgaW4gdGhlIHNjaGVtYSBpbiBxdWVzdGlvbi5cclxuICAgIHJldHVybiBhanZcclxuICAgICAgLmFkZFNjaGVtYShyb290U2NoZW1hLCBST09UX1NDSEVNQV9QUkVGSVgpXHJcbiAgICAgIC52YWxpZGF0ZSh3aXRoSWRSZWZQcmVmaXgoc2NoZW1hKSwgZGF0YSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICAvLyBtYWtlIHN1cmUgd2UgcmVtb3ZlIHRoZSByb290U2NoZW1hIGZyb20gdGhlIGdsb2JhbCBhanYgaW5zdGFuY2VcclxuICAgIGFqdi5yZW1vdmVTY2hlbWEoUk9PVF9TQ0hFTUFfUFJFRklYKTtcclxuICB9XHJcbn1cclxuIl19