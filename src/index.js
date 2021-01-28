module.exports = function toReadable (number) {
	
	let nums = {
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10 : 'ten',
		11 : 'eleven',
		12 : 'twelve',
		13 : 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
		20: 'twenty',
		30: 'thirty',
		40: 'forty',
		50: 'fifty',
		60: 'sixty',
		70: 'seventy',
		80: 'eighty',
		90: 'ninety',
		100: 'hunderd'
	}

	if(!number) return 'zero';

	let hundreds = 0,
		tens = 0;

	if (number >= 100) {
		hundreds = (number - number % 100) / 100;
		number = number % 100;
	}

	if (number >= 20) {
		tens = number - (number % 10);
		number = number % 10;
	}

	let result = [];

	if (hundreds) {
		result.push(nums[hundreds]);
		result.push('hundred');
	}

	if (tens) {
		result.push(nums[tens]);
	}

	if (number) {
		result.push(nums[number]);
	}

	return result.join(' ');
					
}
