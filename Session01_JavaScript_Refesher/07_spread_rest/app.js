// spread
let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers;

newNumbers[1] = 125;
console.log(numbers, newNumbers);

newNumbers = [...numbers];
newNumbers[2] = 55;
console.log(numbers, newNumbers);

let person = { name: 'John', role: 'SW Dev' };
let specialPerson = { ...person, age: 35 };
console.log(person, specialPerson);

// rest
const sum = (...numbers) => {
	let sum = 0;
	for (let i = 0; i <= numbers.length - 1; i++) {
		sum += numbers[i];
	}
	console.log(sum);
};

sum(1);
sum(1, 2);
sum(1, 2, 3, 4);

// sum(1, 2) --> sum(1)(2)
