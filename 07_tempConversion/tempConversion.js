const convertToCelsius = function(temp) {
	let result = (temp - 32) * 5 / 9;
	if (Number.isInteger(result))
		return (result)
	return Number(result.toFixed(1));
};

const convertToFahrenheit = function(temp) {
	let result = (temp * 9 / 5) + 32;
	if (Number.isInteger(result))
		return (result)
	return Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// console.log(convertToFahrenheit(0));
