// return string.split("").reverse().join("");
const reverseString = function(str) {
	let strArr = str.split("");
	let revStr = "";
	for (let i = -1; i >= -1 * str.length; i--)
		revStr += strArr.at(i);
	return(revStr);
};

// Do not edit below this line
module.exports = reverseString;

console.log(reverseString("hello"));