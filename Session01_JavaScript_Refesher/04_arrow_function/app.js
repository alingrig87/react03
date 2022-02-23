function square(number) {
	return number * number;
}

console.log(square(2));

const square1 = (number) => {
	return number * number;
};

console.log(square1(3));

const square2 = (number) => number * number;

// arrow function don't rebind this
const person = {
	name: 'Ronaldo',
	showInfo() {
		console.log(this);
	},
	showInfoAfter1Second() {
		// var self = this;
		// setTimeout(function () {
		// 	console.log('this after 1 second', self);
		// }, 1000);
		setTimeout(() => {
			console.log(this);
		}, 1000);
	},
};

person.showInfo();
person.showInfoAfter1Second();
