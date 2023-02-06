/** @format */

// var result = 99;

// if (result > 100) {
//   console.log("Result can not up to 100");
// } else if (result <= 100 && result >= 0) {
//   if (result >= 0 && result <= 32) {
//     console.log("Sorry bro, you are failed");
//   } else if (result >= 33 && result <= 49) {
//     console.log("You got E grade");
//   } else if (result >= 50 && result <= 59) {
//     console.log("You got D");
//   } else if (result >= 60 && result <= 69) {
//     console.log("You got C grade");
//   } else if (result >= 70 && result <= 79) {
//     console.log("You got B grade");
//   } else if (result >= 80 && result <= 100) {
//     console.log("Yea ! you got A+");
//   }
// } else {
//   console.log("Result can not be negative");
// }

//find the even number
// var number = 20;
// if (number % 2 == 0) {
//   console.log("Yes this number is even");
// } else {
//   console.log("This number is odd");
// }

//crome onusare sajano

// var numbers = [
//   1, 2, 7, 8, 9, 10, 3, 4, 5, 6, 11, 16, 17, 18, 19, 20, 12, 13, 14, 15,
// ];

// for (var i = 0; i < numbers.length; ) {
//   if (numbers[i] > numbers[i + 1]) {
//     var a = numbers[i];
//     numbers[i] = numbers[i + 1];
//     numbers[i + 1] = a;
//     i--;

//   } else {
//     i++;
//   }
// }

// console.log(numbers);

//find the leap year

// var year = 2025;
// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   console.log("This year is a leap year.");
// } else {
//   console.log("This not a leap year.");
// }

//5 and  3 diye vag kora jay emon number

// for (var i = 0; i <= 50; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(i);
//   }
// }

// // find the big name
// var names = ["karim", "rahimul", "mahidulla", "abdullah-al"];
// var bigName = "";
// for (var i = 0; i < names.length; i++) {
//   if (bigName.length < names[i].length) {
//     bigName = names[i];
//   }
// }

// console.log(bigName);

// var money = 60000;

// if (money > 80000) {
//   console.log("age party de than Mac ne");
// } else if (money <= 80000 && money >= 0) {
//   if (money <= 10000 && money >= 0) {
//     console.log("Poor people");
//   } else if (money >= 11000 && money <= 20000) {
//     console.log("Phone ne");
//   } else if (money >= 21000 && money <= 40000) {
//     console.log("Purono laptop ne");
//   } else if (money >= 41000 && money <= 60000) {
//     console.log("Lenovo yoga ne");
//   } else if (money >= 61000 && money >= 80000) {
//     console.log("gamming laptop ne");
//   }
// } else {
//   console.log("Dhar kore kichu hobe na ");
// }

// var mood = "Ajke amar mon vlo nei";
// for (var i = 0; i < 39; i++) {
//   console.log(mood);
// }

// for (var i = 58; i <= 98; i++){
//   console.log(i);
// }

// for(var i =412; i <= 456; i += 2){
//   console.log(i);
// }

// for (var i = 581; i <= 623; i += 2) {
//   console.log(i);
// }

// var learningPoint = [
//   "Variable",
//   "Index",
//   "For loop",
//   "while loop",
//   "If",
//   "Else",
//   "operation",
//   "short-hand",
//   "More--",
// ];
// for(var i = 0; i < learningPoint.length; i++){
//   console.log(learningPoint[i]);
// }

// var mobile =['nokia', 'symphony', 'samsung', 'itel', 'realme'];
// var i = 0;
// while(i < mobile.length){
//   console.log(mobile[i]);
//   i++;
// }

// for (var i = 30; i <= 86; i++) {
//   console.log(i);
//   if (i >= 44) {
//     break;
//   }
// }

var bookPrice = [120, 300, 250, 180, 150];
for (var i = 0; i < bookPrice.length; i++) {
  if (bookPrice[i] >= 200) {
    continue;
  }
  console.log(bookPrice[i]);
}
