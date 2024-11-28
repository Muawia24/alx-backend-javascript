const assert = require('assert');
const mocha = require('mocha');

const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return sum of integers', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('should return the rounded number if only one is provided', () => {
    assert.strictEqual(calculateNumber('SUM', 2), 2);
    assert.strictEqual(calculateNumber('SUBTRACT', 2.7), 3);
  });

  it('should cast non-numbers into numbers', () => {
    assert.strictEqual(calculateNumber('SUM', true, 3), 4);
  });


  it('should throw typeerror if either param cannot be coerced to a number', () => {
    assert.throws(() => calculateNumber('hello', 1.0, 2.4), {
      name: 'Error',
      message: 'Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".'
    });
  });
});
