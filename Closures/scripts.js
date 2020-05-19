// let add = function(passed) {
	
// 	let addAgain = function(created) {
// 		return passed + created;
// 	};

// 	// return () => passed + created;
// 	return addAgain;
// };

// let addTwo = new add(2);

// console.log(addTwo(2));



function multiplier (factor) {
	

	return (numberOne, numberTwo) => numberOne + numberTwo + factor;
};

let twice = multiplier(2);
console.dir(twice);
console.dir(twice(5, 6));

