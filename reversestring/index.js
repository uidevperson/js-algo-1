// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// solution 1
// function reverse(str) {
// 	const arr = str.split('');
// 	arr.reverse();
// 	return arr.join('');
// }

// solution 2	
// function reverse(str) {
// 	let reversed = '';
// 	//
// 	for (let character of str) {
// 		// character passed to reversed outside loop
// 		reversed = character + reversed;
// 	}
// 	// return reverse string
// 	return reversed;
// }

// solution 3
function reverse(str) {

	return str.split('').reduce((reversed, character) => {
		return character + reversed;
	}, '');
}

// reverse('tomm');

module.exports = reverse;
