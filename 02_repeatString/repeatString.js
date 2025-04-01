const repeatString = function(str, numOfReps) {
	let ret = "";

	if (numOfReps < 0)
		return ("ERROR");
	for (let i = 0; i < numOfReps; i++)
	{
		ret += str;
	}
	return (ret);
};

// Do not edit below this line
module.exports = repeatString;
