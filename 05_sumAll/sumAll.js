const sumAll = function(num1, num2) {
	if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2))
		return ("ERROR");
	let diff = num2 - num1;
	let start, end;
	if (diff > 0)
	{
		end = num2;
		start = num1;
	}
	else
	{
		end = num1;
		start = num2;
	}
	let numOfPairs = (end - start + 1) / 2;
	return ((start + end) * numOfPairs);
};

// Do not edit below this line
module.exports = sumAll;
