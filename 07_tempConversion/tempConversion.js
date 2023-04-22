const convertToCelsius = function(value) {
  value = (value - 32) * 5/9;
  let result = Math.round(value * 10)/10;
  return result;
};

const convertToFahrenheit = function(value) {
  value = (value * (9/5) + 32)
  let result = Math.round(value * 10)/10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
