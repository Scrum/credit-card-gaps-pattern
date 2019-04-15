import constants from './constants';

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
