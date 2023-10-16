const convertToCelsius = function(value) {
  let result = (value - 32) * (5 / 9);
  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function(value) {
  let result = (value * (9 / 5)) + 32;
  return Math.round(result * 10) / 10;
};


/* Farenheit to Celsius =
(f - 32) x (5 / 9)

Celsius to Farenheit =
(c x (9 / 5)) + 32 */

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
