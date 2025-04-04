const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(arr) {
	// if (arr.length === 0)
	// 	return 0;
	return (arr.reduce((total, item) => total + item), 0);
};

const multiply = function(arr) {
	return (arr.reduce((total, item) => total * item));
};

const power = function(a, b) {
	return (a ** b);
};

const factorial = function(num) {
	let	num1 = 1;
	while (num > 0)
		num1 *= num--;
	return (num1);
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
