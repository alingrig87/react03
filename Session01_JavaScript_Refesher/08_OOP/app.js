class Person {
	constructor(name, age, role) {
		this.name = name;
		this.age = age;
		this.role = role;
	}

	greet() {
		console.log('My name is ', this.name);
	}
}

let person1 = new Person('Daniel', 24, 'Preafericit');
let person2 = new Person('Alin', 34, 'SW Dev');

// person1.greet();
// person2.greet();

class Student extends Person {
	constructor(bachelor, name, age, role) {
		super(name, age, role);
		this.bachelor = bachelor;
	}

	greet() {
		super.greet();
		console.log('I am a student and my name is :', this.name);
	}
}

function equals(p1, p2) {
	return p1.name == p2.name && p1.age == p2.age && p1.role == p2.role;
}

let student1 = new Student('Computer science', 'Alin', 34, 'SW Dev');
student1.greet();
