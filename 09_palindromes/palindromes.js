const palindromes = function (str) {
	const alnum = 'abcdefghijklmnopqrstuvwxyz0123456789';
	let	cleaned = str
					.toLowerCase()
					.split("")
					.filter((char) => alnum.includes(char));
	let	reversedstr = cleaned.slice(0);
	reversedstr.reverse();
	return (cleaned.join("") === reversedstr.join(""));
};

// Do not edit below this line
module.exports = palindromes;

palindromes("banana ");