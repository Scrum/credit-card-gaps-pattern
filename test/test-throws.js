import test from 'ava';
import constants from '../src/constants';
import creditCardGapsPattern from '../src';

test('gaps option must be provided', t => {
  const {message} = t.throws(creditCardGapsPattern);
  t.is(message, constants.errors.GAPS_MISSING);
});

test('gaps option must be Array', t => {
  const {message} = t.throws(() => {
    creditCardGapsPattern('test');
  });

  t.is(message, constants.errors.GAPS_NOT_ARRAY);
});

test('gaps option must not be empty', t => {
  const {message} = t.throws(() => {
    creditCardGapsPattern([]);
  });

  t.is(message, constants.errors.GAPS_NOT_EMPTY);
});

test('lengths option must be provided', t => {
  const {message} = t.throws(() => {
    creditCardGapsPattern([4, 10]);
  });

  t.is(message, constants.errors.LENGTHS_MISSING);
});

test('lengths option must be Array', t => {
  const {message} = t.throws(() => {
    creditCardGapsPattern([4, 10], 'test');
  });

  t.is(message, constants.errors.LENGTHS_NOT_ARRAY);
});

test('lengths option must not be empty', t => {
  const {message} = t.throws(() => {
    creditCardGapsPattern([4, 10], []);
  });

  t.is(message, constants.errors.LENGTHS_NOT_EMPTY);
});
