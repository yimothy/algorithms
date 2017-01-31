// """Inputs
//
// Never Empty Array
// Alway Integer
//
//
// Return new array with all consecutive like values summed
//
// [1, 3, 4, 4, 9, 0] => [1, 3, 8, 9, 0]"""

function consecutiveSum(array) {
	let result = [];
	let tempSum = 0;
	for(let i = 0; i < array.length; i++) {
		let curr = array[i];
		let next = array[i+1];
		tempSum += curr;
		if(curr !== next) {
			result.push(tempSum);
			tempSum = 0;
		}
	}
	return result;
}
