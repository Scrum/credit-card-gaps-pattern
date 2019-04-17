# credit-card-gaps-pattern

> Creates a pattern for [restricted-input](https://github.com/braintree/restricted-input) from data obtained from [credit-card-type](https://github.com/braintree/credit-card-type)

[![Travis Build Status](https://img.shields.io/travis/Scrum/credit-card-gaps-pattern/master.svg?style=flat-square&label=unix)](https://travis-ci.org/Scrum/credit-card-gaps-pattern)[![AppVeyor Build Status](https://img.shields.io/appveyor/ci/GitScrum/credit-card-gaps-pattern/master.svg?style=flat-square&label=windows)](https://ci.appveyor.com/project/GitScrum/credit-card-gaps-pattern)[![node](https://img.shields.io/node/v/credit-card-gaps-pattern.svg?style=flat-square)]()[![npm version](https://img.shields.io/npm/v/credit-card-gaps-pattern.svg?style=flat-square)](https://www.npmjs.com/package/credit-card-gaps-pattern)[![Dependency Status](https://david-dm.org/Scrum/credit-card-gaps-pattern.svg?style=flat-square)](https://david-dm.org/Scrum/credit-card-gaps-pattern)[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)[![Coveralls status](https://img.shields.io/coveralls/Scrum/credit-card-gaps-pattern.svg?style=flat-square)](https://coveralls.io/r/Scrum/credit-card-gaps-pattern)

[![npm downloads](https://img.shields.io/npm/dm/credit-card-gaps-pattern.svg?style=flat-square)](https://www.npmjs.com/package/credit-card-gaps-pattern)[![npm](https://img.shields.io/npm/dt/credit-card-gaps-pattern.svg?style=flat-square)](https://www.npmjs.com/package/credit-card-gaps-pattern)

## Why ?
Masks on hot for [HTMLInputElement](https://developer.mozilla.org/ru/docs/Web/API/HTMLInputElement)

## Install

```bash
$ npm install credit-card-gaps-pattern 
```

> **Note:** This project is compatible with node v8+

## Usage

```js
// Dependencies
import creditCardGapsPattern from 'credit-card-gaps-pattern';

const gaps = [4, 10];
const lengths = [14, 16, 19];

console.log(creditCardGapsPattern(gaps, lengths));
// => {{9999}} {{999999}} {{999999999}}
```

## Example
```js
// Dependencies
import RestrictedInput from 'restricted-input';
import creditCardType from 'credit-card-type';
import creditCardGapsPattern from 'credit-card-gaps-pattern';

const input = document.querySelector('input');
const {gaps, lengths} = creditCardType('30');

new RestrictedInput({
  element: input,
  pattern: creditCardGapsPattern(gaps, lengths)
});
```
> [Demo](https://scrum.github.io/credit-card-gaps-pattern/)

## Related

- [restricted-input](https://github.com/braintree/restricted-input) - Allow restricted character sets in `input` elements.
- [credit-card-type](https://github.com/braintree/credit-card-type) - A library for determining credit card type 
