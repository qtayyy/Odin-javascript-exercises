// const people = [
// 	{
// 	  name: "Carly",
// 	  yearOfBirth: 1942,
// 	  yearOfDeath: 1970,
// 	},
// 	{
// 	  name: "Ray",
// 	  yearOfBirth: 1962,
// 	  yearOfDeath: 2011,
// 	},
// 	{
// 	  name: "Jane",
// 	  yearOfBirth: 1912,
// 	  yearOfDeath: 1941,
// 	},
// ]

function	getAge(person)
{
	let	age = new Date().getFullYear() - person.yearOfBirth;
	if (person.yearOfDeath)
		age = person.yearOfDeath - person.yearOfBirth;
	return (age);
}

const findTheOldest = function(people) {
	return people.reduce((oldest, curr) => {
		let	oldestAge = getAge(oldest);
		// console.log(`oldestAge: ${oldestAge}`);
		let	currAge = getAge(curr);
		// console.log(`currAge: ${currAge}`);
		// console.table(oldest);
		if (oldestAge < currAge)
			return (curr);
		return (oldest); // need this becauase in the first run, nothing is returned
	});
};

// Do not edit below this line
module.exports = findTheOldest;

// console.table(findTheOldest(people));
