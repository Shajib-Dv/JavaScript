/** @format */

//Adding string one into another

var firstName = "Sojeeb";
var lastName = "Hossain";

//'' and a space is very important to add tow string one into another
var fullName = firstName + " " + lastName;

console.log(fullName);

//Adding string and numeric value
var age = 22;
var unit = "Kg";
var totalAge = age + unit;

console.log(totalAge);

//convert string to number

var time = "3";
var workTime = 10;

var newTime = parseInt(time);
var totalWork = newTime * workTime;

console.log(totalWork);

//converting float number from a string case
var gpa = "4.55";
var gpaNumber = parseFloat(gpa);
console.log(gpaNumber);
