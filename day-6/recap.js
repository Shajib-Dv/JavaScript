/** @format */

// //find the big name
// var name = ["sojeeb", "ajib", "najibulla", "Shar-khan-shur"];

// var bigName = [0];
// for (var i = 0; i < name.length; i++) {
//   console.log(name[i]);
//   if (bigName.length < name[i].length) {
//     bigName = name[i];
//   }
// }

// console.log(bigName);

// //find the big number
// var numbers = [2, 4, 6, 30, 8, 12];
// var bigNumber = [0];
// for (var i = 0; i < numbers.length; i++) {
//   if (bigNumber < numbers[i]) {
//     bigNumber = numbers[i];
//   }
// }
// console.log(bigNumber);

// //function test

// function getUp(time) {
//   if (time > 7) {
//     return "get up hurry";
//   } else {
//     return "Ghuma sokal hoy nai";
//   }
// }
// var morningCall = getUp(1);
// console.log(morningCall);

// // const and let uses
// //you can change or replace a value in let but not in const

// var age = 22;
// const authorName = "Sojeeb";
// age = 25;
// console.log(age);
// console.log(authorName);

// // inc to fit convert

// function countHeight(height) {
//   const yourHeight = height / 12;
//   return yourHeight;
// }
// let giveDadaHeight = 84;
// const dadaHeight = countHeight(giveDadaHeight);
// console.log("", dadaHeight.toFixed(2), "fit");

// let giveDadiHeight = 60;
// const dadiHeight = countHeight(giveDadiHeight);
// console.log("", dadiHeight, "fit");

// // check number even or odd
// function whatNumber(inputNumber) {
//   if (inputNumber % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let giveNumber = 117;
// const numberIs = whatNumber(giveNumber);
// console.log(numberIs);

// //check leap year

// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return "Yes this is a leap year.";
//   } else {
//     return "No this is not a leap year.";
//   }
// }
// let checkYear = 2028;
// const yearIs = isLeapYear(checkYear);
// console.log(yearIs);

// find odd and sum
// function sumOdd(numbers) {
//   let sum = 0;
//   console.log(numbers);
//   for (let i = 0; i < numbers.length; i++) {
//     let index = i;
//     let element = numbers[index];
//     sum = sum + element;
//     console.log(index, element, sum);
//   }
// }

// let givenValue = [33, 12, 22, 28, 21, 11];
// sumOdd(givenValue);

// function sumOdd(numbers) {
//   let oddNumber = [];
//   console.log(numbers);
//   for (let i = 0; i < numbers.length; i++) {
//     let index = i;
//     let element = numbers[index];
//     if (element % 2 === 0) {
//       oddNumber.push(element);
//     }
//   }
//   return oddNumber;
// }

// let givenValue = [33, 12, 22, 28, 21, 11];
// const oddNumber = sumOdd(givenValue);
// console.log(oddNumber);

// sum of numbers
// function findTotalNumber(number) {
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     console.log(number[i]);
//     sum = sum + number[i];
//     console.log(sum);
//   }
//   return sum;
// }
// let giveNum = [22, 3, 3, 21, 23];
// const resultAll = findTotalNumber(giveNum);
// console.log(resultAll);

// namta ber kora.

// function namta(value) {
//   for (var i = 1; i <= 10; i++) {
//     let ans = value * i;
//     console.log(i, ans);
//   }
// }
// let valueOne = 12;
// const result = namta(valueOne);

// reverse way.....

// function namta(value) {
//   let total = 1;
//   for (var i = value; i >= 1; i--) {
//     total = total * i;
//     console.log(i);
//   }
//   return total;
// }
// let valueOne = 5;
// const result = namta(valueOne);
// console.log(result);

//while loop

// function factorial(number) {
//   let result = 1;
//   let i = 1;
//   while (i <= number) {
//     result = result * i;
//     i++;
//   }
//   return result;
// }
// let valueOne = 4;
// const answer = factorial(valueOne);
// console.log(answer);
