const chai = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return sum of integers', () => {
    chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    chai.expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('should return the rounded number if only one is provided', () => {
    chai.expect(calculateNumber('SUM', 2)).to.equal(2);
    chai.expect(calculateNumber('SUBTRACT', 2.7)).to.equal(3);
  });

  it('should cast non-numbers into numbers', () => {
    chai.expect(calculateNumber('SUM', true, 3)).to.equal(4);
  });


  it('should throw typeerror if either param cannot be coerced to a number', () => {
    chai.expect(() => calculateNumber('hello', 1.0, 2.4)).to.throw();
  });
});
