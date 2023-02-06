/** @format */
/**
 * calculate the average from an object.
 */
// function totalCost(product) {
//   let price = 0;
//   for (let i = 0; i < product.length; i++) {
//     price = price + product[i].price;
//   }
//   return price;
// }
// let totalItem = [
//   { name: "Dano Milk", price: 500 },
//   { name: "Taaza Tea", price: 200 },
//   { name: "Fresh Sugar", price: 500 },
// ];
// console.log(totalCost(totalItem));

/**
 * check string and object;
 */

// function objectArr(input) {
//   let obb = Object.keys(input[0]);
//   let join = obb.join();
//   if (join === input[1]) {
//     return "YES";
//   } else {
//     return "NO";
//   }
// }
// let Input = [
//   {
//     fname: "John",
//   },
//   "fname",
// ];
// console.log(objectArr(Input));

/**
 * get the average..
 */

// function average(arrOfMarks) {
//   //write your code here
//   // don't forget to write return
//   let total = 0;
//   for (let i = 0; i < arrOfMarks.length; i++) {
//     if (typeof arrOfMarks[i] !== "number") {
//       return "Not valid";
//     }
//     total = total + arrOfMarks[i];
//   }
//   let avg = total / arrOfMarks.length;
//   let result = parseFloat(avg.toFixed(2));
//   return result;
// }

// const mark = [75.25, 65, 80, 35.45, 99.5];
// console.log(average(mark));

/**
 * total cost..
 */
// const totalCost = (products) => {
//   let total = 0;

//   for (let i = 0; i < products.length; i++) {
//     total = total + products[i].price;
//   }
//   return total;
// };
// let cost = [
//   { name: "Dano Milk", price: 500 },
//   { name: "Taaza Tea", price: 200 },
//   { name: "Fresh Sugar", price: 300 },
// ];
// console.log(totalCost(cost));

/**
 * find binary length.
 */

// function countZeros(binary_num) {
//   //Write your code here
//   //Don't forget to return

//   let binary = binary_num.split("");

//   let result = [];
//   for (let i = 0; i < binary.length; i++) {
//     if (binary[i] < 1) {
//       result.push(binary[i]);
//     }
//   }
//   return result.length;
// }

// let num = "10101";
// console.log(countZeros(num));

/**
 * triangle check..
 */

// function checkTriangle(side1, side2, side3) {
//write your code here

//don't forget to write return
//   if (side1 === side2 && side2 === side3) {
//     return "No";
//   } else {
//     return "Yes";
//   }
// }

// console.log(checkTriangle(9, 8, 9));

/**
 * is leap year
 */

// function findLeapYear(arrOfYears) {
//   //write your code here
//   //don't forget to write return
//   let result = [];
//   for (let i = 0; i < arrOfYears.length; i++) {
//     if (
//       (arrOfYears[i] % 4 === 0 && arrOfYears[i] % 100 !== 0) ||
//       arrOfYears[i] % 4 === 0
//     ) {
//       result.push(arrOfYears[i]);
//     }
//   }
//   return result;
// }

// const year = [2023, 2024, 2025, 2028, 2030];
// console.log(findLeapYear(year));

/**
 * find the odd numbers from an object and calculate the total of sum.
 */

// function findOddSum(arrOfNumbers) {
//   //write your code here
//   //don't forget to write return

//   let sum = 0;
//   for (let i = 0; i < arrOfNumbers.length; i++) {
//     if (arrOfNumbers[i] % 2 === 1) {
//       sum = sum + arrOfNumbers[i];
//     }
//   }
//   return sum;
// }
// const number = [3, 4, 8, 10, 5, 30];
// console.log(findOddSum(number));

/**
 * find the second largest..
 */

// function secondLargest(numbers) {
//   //Write your code here
//   //Don't forget to return
//   const allNumber = numbers.sort(function (a, b) {
//     return b - a;
//   });
//   const secondLarge = allNumber[1];
//   return secondLarge;
// }
// const num = [10, 33, 5, 99, 60];
// console.log(secondLargest(num));

/**
 * calculate the area of a rectangle..
 */

// function findArea(length, width) {
//   //Write your code here
//   //Don't forget to return
//   const result = length * width;
//   return result;
// }
// console.log(findArea(10, 5));

/**
 * most tricky challenge
 * switch case operation..
 */

// function getLetter(s) {
//   let letter;
//   // Write your code here

//   let sWord = s.toLowerCase();
//   const aPhage = ["a", "e", "i", "o", "u"];
//   const bPhage = ["b", "c", "d", "f", "g"];
//   const cPhage = ["h", "j", "k", "l", "m"];
//   const dPhage = ["n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
//   for (let i = 0; i < dPhage.length; i++) {
//     switch (sWord) {
//       case aPhage[i]:
//         letter = "A";
//         break;
//       case bPhage[i]:
//         letter = "B";
//         break;
//       case cPhage[i]:
//         letter = "C";
//         break;
//       case dPhage[i]:
//         letter = "D";
//         break;
//     }
//   }
//   return letter;
// }
// const word = "b";
// console.log(getLetter(word));

/**
 * tricky challenge  trying to solve using if-else..
 */

function findCase(s) {
  let letter;
  let wordFormat = s.toLowerCase();
  const aPhage = ["a", "e", "i", "o", "u"];
  const bPhage = ["b", "c", "d", "f", "g"];
  const cPhage = ["h", "j", "k", "l", "m"];
  const dPhage = ["n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

  for (let i = 0; i < dPhage.length; i++) {
    if (wordFormat.startsWith(aPhage[i])) {
      letter = "A";
    } else if (wordFormat.startsWith(bPhage[i])) {
      letter = "B";
    } else if (wordFormat.startsWith(cPhage[i])) {
      letter = "C";
    } else if (wordFormat.startsWith(dPhage[i])) {
      letter = "D";
    }
  }
  return letter;
}
const letter = "Yellow";
console.log(findCase(letter));
