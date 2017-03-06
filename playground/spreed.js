// function add (a, b) {
// 	return a + b;
// }
//
// console.log(add(3,1));
//
//
// var toAdd = [9, 5];
// console.log(add(...toAdd))
// var gA = ['Jen','Cory'];
// var gB = ['Vikran'];
// var f = [3, ...gA];
// console.log(f);

var person = ['Tiago Fernandes', 36];
var person2 = ['Jen', 29];

function hi(name,age) {
	console.log("hi " + name + " you are " + age);
}

hi(...person);
hi(...person2);


var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach(function (name) {
	console.log('Hi ' + name);
})
