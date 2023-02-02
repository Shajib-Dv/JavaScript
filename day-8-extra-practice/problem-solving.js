/**
 * module 1 problems
 *
 * variable declaration
 *
 * variables are  case sensitive
 *
 * variable can not start with number but end with number
 *
 * you should maintain the rule of variable declaration
 *
 * mostly we use camel case
 *
 * @format
 */

var price = 33;

/**
 * practice problem group-1
 */

// var totalTaka = 1000;
// var orangePrice = 700;
// var takaBack = totalTaka - orangePrice;
// console.log(takaBack);

// var numbers = [75.25, 65, 80, 35.45, 99.5];
// var total = 0;
// for (var i = 0; i < numbers.length; i++) {
//   total = total + numbers[i];
//   var result = total / numbers.length;
// }
// console.log(total);
// console.log(result.toFixed(2));

// var firstLine = 'I am going to be';
// var secondLine = 'an awesome web developer.';
// console.log(firstLine,' ', secondLine);

// var value = 119;
// var man = 5;
// console.log(value % man); //modulus or remainder operator.

/**
 * module 2 problems
 */

// set array

// var fruits = ['Apple', 'Banana', 'Orange'];
// console.log(fruits);
// fruits[1] = 'Mango';
// console.log(fruits);

// grade making

// var myNumber = 90;
// if (myNumber > 100) {
//   console.log("Please inter between 0-100");
// } else if (myNumber <= 100 && myNumber >= 0) {
//   if (myNumber >= 80) {
//     console.log("A+");
//   } else if (myNumber >= 70 && myNumber <= 79) {
//     console.log("B+");
//   } else if (myNumber >= 60 && myNumber <= 69) {
//     console.log("C+");
//   } else if (myNumber >= 50 && myNumber <= 59) {
//     console.log("D+");
//   } else if (myNumber >= 33 && myNumber <= 49) {
//     console.log("E+");
//   } else if (myNumber <= 32 && myNumber >= 0) {
//     console.log("F+ your fail");
//   }
// } else {
//   console.log("please input positive number");
// }

// largest number

// var numbers = [12,77,56];
// var largeNumber = 0;
// for(var i = 0; i < numbers.length; i++){
//     if(largeNumber < numbers[i]){
//         largeNumber = numbers[i];
//     }
// }
// console.log(largeNumber);

//triangle check

// var angle = [9, 6, 9];
// if (angle[0] === angle[1] || angle[1] === angle[2] || angle[2] === angle[0]) {
//   console.log("This is a triangle");
// } else {
//   console.log("Not a triangle");
// }

/**
 * module 3 problems
 */

//converter

// function converter(value) {
//   let result = value * 60;
//   return result;
// }
// let hour = 3;
// let second = converter(hour);
// console.log(second);

// find leap year in an array

// function isLeapYear(year) {
//   let leapYear = [];
//   for (let i = 0; i < year.length; i++) {
//     console.log(year[i]);
//     if ((year[i] % 4 === 0 && year[i] % 100 !== 0) || year[i] % 400 === 0) {
//       leapYear.push(year[i]);
//     }
//   }
//   return leapYear;
// }

// let myYear = [2023, 2024, 2025, 2028, 2032];
// let result = isLeapYear(myYear);
// console.log(result.join(", "));

// find the odd number in an array and return their sum

function oddSum(number) {
  let odd = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 1) {
      odd = odd + number[i];
    }
  }
  return odd;
}
let myNumber = [2, 4, 5, 6, 8, 9, 3, , 13];
let total = oddSum(myNumber);
console.log(total);
