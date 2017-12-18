// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	console.log('split', str.split(""));
	console.log('split reverse', str.split("").reverse());
	console.log('split reverse join', str.split("").reverse().join(""));
	return str.split("").reverse().join("");
}

reverse('tom');

module.exports = reverse;
