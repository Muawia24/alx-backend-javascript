const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round 1 and 3 and return the sum of 5', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round 1 and 3.7 and return the sum of 5', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should round 1.2 and 3.7 and return the sum of 5', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should round 1.5 and 3.7 and return the sum of 6', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
