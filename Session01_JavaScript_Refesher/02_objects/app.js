const person = {
	name: 'Daniel',
	dateOfBirth: '15-12-1987',
	//methods
	run() {
		console.log('5km today');
	},
	code: function () {
		console.log('1000 lines of code today');
	},
};

person.run();
person.code();

person.name = 'Costel';
person['name'] = 'Daniel';

function changePerson(object, property, value) {
	object[property] = value;
}

changePerson(person, 'name', 'Iulian');

console.log(person);
