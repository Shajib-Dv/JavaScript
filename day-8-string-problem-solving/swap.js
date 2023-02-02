/** @format */

let num1 = 5;
let num2 = 8;
console.log(num1, num2);

const temp = num1;
num1 = num2;
num2 = temp;
// console.log(num1, num2);

[num1, num2] = [num1, num2];
console.log(num1, num2);
