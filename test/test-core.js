import test from 'ava';
import creditCardGapsPattern from '../src';

test('credit card gaps pattern should return pattern for amex', t => {
  const expected = '{{9999}} {{999999}} {{999999999}}';
  const gaps = [4, 10];
  const lengths = [14, 16, 19];

  t.is(expected, creditCardGapsPattern(gaps, lengths));
});

test('credit card gaps pattern should return pattern for clasic', t => {
  const expected = '{{9999}} {{9999}} {{9999}} {{9999}}';
  const gaps = [4, 8, 12];
  const lengths = [14, 16];

  t.is(expected, creditCardGapsPattern(gaps, lengths));
});
