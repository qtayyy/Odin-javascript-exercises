const removeFromArray = function(array, ...toRemove) {
	if (!Array.isArray(array))
		return [];
	
	// for (let i = 0; i < toRemove.length; i++)
	// {
	// 	for (let j = 0; j < array.length; j++)
	// 	{
	// 		if (toRemove.at(i) === array.at(j))
	// 		{
	// 			array.splice(j, 1);
	// 			j = 0;
	// 		}
	// 	}
	// }
	// return (array);
	const newArray = [];

	array.forEach((item) => {
		if (!toRemove.includes(item))
			newArray.push(item);
	})
	return (newArray);
	return array.filter(val => !toRemove.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;

// console.log(removeFromArray([1, 2, 2, 3], 2));