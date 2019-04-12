export const constants = {
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

export default (gaps, lengths, type = 'DIGIT') => {
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

  return [...gaps, Math.max(...lengths)]
    .map((range, index, array) => {
      const count = index ? range - array[index - 1] : range;
      return `{{${constants.type[type].toString().repeat(count)}}}`;
    })
    .join(' ');
};
