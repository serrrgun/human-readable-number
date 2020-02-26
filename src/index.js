const first = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten"
];
const second = [
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
];
const third = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
];

module.exports = function toReadable(number) {
	if (number === 0) {
			return `${first[0]}`;
	}

	if (number <= 10) {
			return `${first[number]}`;
	}

	if (number > 10 && number < 20) {
			return `${second[(number % 10) - 1]}`;
	}

	if (number >= 20 && number < 100) {
			return `${third[Math.floor(number / 10) - 2]} ${number % 10 > 0 ? first[number % 10] : " "}`.trim();
	}

	if (number >= 100 && number < 1000) {
			return `${first[Math.floor(number / 100)]} hundred ${number % 100 > 0 ? toReadable(number % 100) : ""}`.trim();
	}
};
