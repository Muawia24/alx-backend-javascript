

const Utils = {
  function calculateNumber(type, a, b = 0) {
    if (isNaN(Number(a)) || isNaN(Number(a))){
      throw new TypeError('Parameter must be a number!');
    }
    a = Math.round(a);
    b = Math.round(b);

    switch(type) {
      case 'SUM':
        return a + b;
      case 'SUBTRACT':
        return a - b;
      case 'DIVIDE':
        if (b === 0) {
          return 'Error'
        }
        return a / b;
      default:
        throw Error(
          'Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".'
        );
    }
  }
}

module.exports = Utils;
