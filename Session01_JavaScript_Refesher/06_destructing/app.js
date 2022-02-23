// array destructuring
let numbers = [3, 2, 1, 4, 5, -2];
// let n1 = numbers[0];
// let n2 = numbers[1];
let [n1, , n2] = numbers;

console.log(n1, n2);

// object destructuring
let person = { name: 'John', age: 35, role: 'Sw dev' };
// let name = person.name;
// let age = person.age;
// let role = person.role;

let { name, role } = person;

console.log(name, role);
