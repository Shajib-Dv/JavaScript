/** @format */

//problem from P-Hero course

// problem No.1
var cash = 1000;
var price = 700;
var cashBack = cash - price;
console.log(cashBack);

// problem No.2

//solve with general code

var math = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.5;
var subTotal = math + biology + chemistry + physics + bangla;
var average = subTotal / 5;
average = average.toFixed(3);
average = parseFloat(average);
console.log(average);

//solve with loop
const subjectMark = [75.25, 65, 80, 35.45, 99.5];
let sum = 0;
for (let i = 0; i < subjectMark.length; i++) {
  sum = sum + subjectMark[i] / subjectMark.length;
}

sum = sum.toFixed(3);
sum = parseFloat(sum);

console.log(sum);

// problem no.3

var place = "I am going to be";
var whatWillBe = "a awesome web developer.";

console.log(place + " " + whatWillBe);

//problem 3

var totalApple = 119;
var eater = 5;
var remainder = totalApple % eater;

console.log(remainder);
