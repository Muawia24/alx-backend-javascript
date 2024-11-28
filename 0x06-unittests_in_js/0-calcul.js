function calculateNumber(a, b = 0) {
  if (isNaN(Number(a)) || isNaN(Number(a))){
    throw new TypeError('Parameter must be a number!');
  }
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
