const leapYears = function(year) {
	if (!Number.isInteger(year))
		return ("ERROR")
	if (!(year % 4) && (year % 100) || !(year % 400))
		return (true);
	return (false);
};

// Do not edit below this line
module.exports = leapYears;

// console.log(leapYears(1600))