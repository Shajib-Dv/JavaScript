/** @format */

// function secondToMinute(value) {
//   let result = value * 60;
//   return result;
// }
// const givenValue = secondToMinute(2);
// console.log(givenValue);

// const given2 = secondToMinute(4);
// console.log(given2);

// // leap year

// function isLeapYear(year) {
//   let leapYearIs = [];
//   for (let i = 0; i < year.length; i++) {
//     console.log(year[i]);
//     let leapYear = year[i];
//     if ((leapYear % 4 === 0 && leapYear % 100 !== 0) || leapYear % 400 === 0) {
//       leapYearIs.push(leapYear);
//     }
//   }
//   return leapYearIs;
// }
// let allYears = [2023, 2024, 2025, 2028, 2030];
// const thisYear = isLeapYear(allYears);
// console.log(thisYear);

// function addSum(str) {
//   let oddSum = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] % 2 === 1) {
//       oddSum = oddSum + str[i];
//     }
//   }
//   return oddSum;
// }
// let result = [5, 7, 8, 10, 45, 30];
// const answer = addSum(result);
// console.log(answer);

// find the big number

// var number = [32, 79, 49];
// var bigNumber = 0;
// for (var i = 0; i < number.length; i++) {
//   if (bigNumber < number[i]) {
//     bigNumber = number[i];
//   }
// }
// console.log(bigNumber);

// find the big name

// var names = ['sbur','basur','moshiour','mofazzoll'];
// var bigName = [];
// for(var i = 0; i < names.length; i++){
//     if(bigName.length < names[i].length){
//         bigName = names[i];
//     }
// }
// console.log(bigName);

// // total calculation

// function printTotal(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// let numbers = [22, 3, 3];
// const result = printTotal(numbers);
// console.log(result);

//convert kilometer to Miles

// function kiloToMiles(num) {
//   let result = num * 0.62;
//   return result;
// }

// let giveKm = 5;
// const answer = kiloToMiles(giveKm);
// console.log("", answer, "Miles");

// Bazar list

// function bazarList(item) {
//   let piyaj = "piyaj 10kg";
//   let rosun = "rosun 5kg";
//   let oil = "Oil 2kg";
//   if (item == "piyaj") {
//     return piyaj;
//   } else if (item == "rosun") {
//     return rosun;
//   } else if (item == "oil") {
//     return oil;
//   } else {
//     return "Item not found on your list.";
//   }
// }
// let result = bazarList("oil");
// console.log(result);

// let friends = {
//   name: "Kamailla",
//   allFriend: ["Mr-Jamal", "Kamal", "Mr-Samal", "Alom", "Kalomullah"],
// };

// //print allFriend length
// console.log(friends.allFriend.length);

// // find boys
// let boyFriends = friends.allFriend.filter((friend) => friend.includes("Mr"));
// console.log(boyFriends);

// //find big name
// let bigName = [];
// for (let i = 0; i < friends.allFriend.length; i++) {
//   if (bigName.length < friends.allFriend[i].length) {
//     bigName = friends.allFriend[i];
//   }
// }

// //big friend name is here
// console.log(bigName);

// serial maintain

// let numbers = [1, 2, 3, 4, 0, 9, 8, 7, 5, 6, 11, 12];

// numbers.sort(function (a, b) {
//   return a - b ;
// });

// console.log(numbers);
