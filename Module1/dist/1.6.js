"use strict";
var arr = [1, 4, 10];
var newArray = arr.map(function (elem) { return elem * elem; });
console.log(newArray);
// normal function
function add(num1, num2) {
    return num1 + num2;
}
var addition = add(20, 30);
console.log(addition);
// arrow function
var addArrow = function (num1, num2) { return num1 + num2; };
var sum = addArrow(50, 75);
console.log(sum);
