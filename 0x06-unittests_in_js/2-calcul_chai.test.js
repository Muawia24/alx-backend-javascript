const chai = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return sum of integers', () => {
    chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    chai.expect(calculateNumber('SUM', -1.4, 4.5)).to.equal(4);
  });
});

describe('sUBTRACT', () => {
  it('should return the difference of two rounded numbers', () => {
    chai.expect(calculateNumber('SUBTRACT', 5.4, 2.7)).to.equal(2);
  });

  it('should handle negative results', () => {
    chai.expect(calculateNumber('SUBTRACT', 3.4, 5.6)).to.equal(-3);
  });
});

describe('dIVIDE', () => {
  it('should return the division of two rounded numbers', () => {
    chai.expect(calculateNumber('DIVIDE', 8.5, 2.2)).to.equal(4.5);
  });

  it('should return "Error" for division by zero', () => {
    chai.expect(calculateNumber('DIVIDE', 8.4, 0.2)).to.equal('Error');
  });
  it('should throw typeerror if either param cannot be coerced to a number', () => {
    chai.expect(() => calculateNumber('hello', 1.0, 2.4)).to.throw();
  });
});
