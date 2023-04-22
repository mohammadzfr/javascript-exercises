const add = function(value1, value2) {
	return value1+value2;
};

const subtract = function(value1, value2) {
	return value1-value2;
};

const sum = function(values) {
	result = 0
  for (i = 0; i < values.length; i++) result += values[i];
  return result;
};

const multiply = function(values) {
  result = values[0];
  for (i = 1; i < values.length; i++) result *= values[i];
  return result;
};

const power = function(value, exponent) {
	let result = value;
  for (i = 0; i < exponent-1; i++) {
    result *= value;
  }
  return result;
};

const factorial = function(factor) {
  let result = 1;
  for (i = 1; i < factor+1; i++) result *= i;

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
