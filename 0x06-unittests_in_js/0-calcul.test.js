const assert = require('assert');
const mocha = require('mocha');

const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return sum of integers', () => {
    assert.strictEqual(calculateNumber(1.0, 3.0), 4);
    assert.strictEqual(calculateNumber(1, -1), 0);
    assert.strictEqual(calculateNumber(1, -3), -2);
  });

  it('should return sum of rounded floats', () => {
    assert.strictEqual(calculateNumber(1.0, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return the rounded number if only one is provided', () => {
    assert.strictEqual(calculateNumber(2), 2);
    assert.strictEqual(calculateNumber(2.7), 3);
  });

  it('should cast non-numbers into numbers', () => {
    assert.strictEqual(calculateNumber(true, '3'), 4);
    assert.strictEqual(calculateNumber(1, '3.7'), 5);
    assert.strictEqual(calculateNumber('1.2', 3.7), 5);
  });

  it('should throw typeerror if either param cannot be coerced to a number', () => {
    assert.throws(() => calculateNumber('hello'), {
      name: 'TypeError',
      message: 'Parameter must be a number!'
    });
  });
});
