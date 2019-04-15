var creditCardGapsPattern = (function () {
  'use strict';

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var constants = {
    type: {
      DIGIT: 9
    },
    errors: {
      GAPS_MISSING: 'A gaps option must be provided',
      GAPS_NOT_ARRAY: 'A gaps option must be Array',
      GAPS_NOT_EMPTY: 'A gaps option must not be empty',
      LENGTHS_MISSING: 'A lengths option must be provided',
      LENGTHS_NOT_ARRAY: 'A lengths option must be Array',
      LENGTHS_NOT_EMPTY: 'A lengths option must not be empty'
    }
  };

  var index = (function (gaps, lengths) {
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'DIGIT';

    if (gaps === undefined) {
      throw new Error(constants.errors.GAPS_MISSING);
    }

    if (Array.isArray(gaps) === false) {
      throw new TypeError(constants.errors.GAPS_NOT_ARRAY);
    }

    if (gaps.length === 0) {
      throw new TypeError(constants.errors.GAPS_NOT_EMPTY);
    }

    if (lengths === undefined) {
      throw new Error(constants.errors.LENGTHS_MISSING);
    }

    if (Array.isArray(lengths) === false) {
      throw new TypeError(constants.errors.LENGTHS_NOT_ARRAY);
    }

    if (lengths.length === 0) {
      throw new TypeError(constants.errors.LENGTHS_NOT_EMPTY);
    }

    return [].concat(_toConsumableArray(gaps), [Math.max.apply(Math, _toConsumableArray(lengths))]).map(function (range, index, array) {
      var count = index ? range - array[index - 1] : range;
      return "{{".concat(constants.type[type].toString().repeat(count), "}}");
    }).join(' ');
  });

  return index;

}());
