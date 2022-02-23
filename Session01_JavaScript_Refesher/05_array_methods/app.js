const numbers = [1, 4, 5, 6, 11, 2];

// add elements to an array
numbers.push(123);
// console.log(numbers);

// remove elements from an array
let removedNumber = numbers.pop();
// console.log(numbers);
// console.log(removedNumber);

// add element to head
numbers.unshift(99);
// console.log(numbers);

// remove element from head
const removedNumberFromHead = numbers.shift();
// console.log(removedNumberFromHead);
// console.log(numbers);

// create a string with the array elements
// console.log(JSON.stringify(numbers));
const joinedElements = numbers.join(' --> ');
// console.log(joinedElements);

// fill
numbers.fill(33, 0, 4);
// console.log(numbers);

// splice() - add items into array
const fruits = ['banana', 'orange', 'pineapple', 'mango', 'apple', 'peach'];
const removedFruits = fruits.splice(2, 4, 'Lemon', 'Kiwi', 'Strawberry');
// console.log(removedFruits);
// console.log(fruits);

// slice()
const fruits2 = ['banana', 'orange', 'pineapple', 'mango', 'apple', 'peach'];
const modifiedFruits = fruits2.slice(2, -2);
// console.log(fruits2);
// console.log(modifiedFruits);

// filter
const products = [
	{ name: 'iphone 12', price: 4000 },
	{ name: 'samsung g5', price: 2000 },
	{ name: 'motorola v3', price: 350 },
	{ name: 'siemens a50', price: 120 },
	{ name: 'alcatel one', price: 500 },
	{ name: 'iphone 5s', price: 2600 },
	{ name: 'nokia c3', price: 340 },
	{ name: 'nokia 3310', price: 800 },
];

const filteredProducts = products.filter((product) =>
	product.name.includes('iphone')
);
// console.log(filteredProducts);

// find
const firtsIphone = products.find((product) => product.name.includes('iphone'));
console.log(firtsIphone);

// map
const productCards = products
	.map((product) => `<div>${product.name}</div>`)
	.join('');
console.log(productCards);
