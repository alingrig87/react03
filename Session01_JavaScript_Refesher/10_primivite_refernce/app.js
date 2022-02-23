// var a = 10;
// var b = a;
// b = 3;

// console.log(a, b);

var a = { value: 10 };
var b = a;
console.log('b === a', b === a);
b.value = 2;

console.log(a, b);

var p = { value: 10 };
var q = { value: 10 };

console.log(p == q);
console.log(p === q);

var s = 10;
var t = 10;

console.log(s == t);
console.log(s === t);

console.log(3 == '3');
console.log(3 === '3');
