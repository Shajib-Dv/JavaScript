/** @format */

// small number in an array

// const arr = [2, 3, 4, 5, 6, 7, 8, 9];
// let arrSmall = Math.min(...arr);
// console.log(arrSmall);

// find the smallest number

// function findSmallNumber(number) {
//   let small = Math.min(...number);
//   return small;
// }
// const myNumber = [12, 3, 4, 6, 7, 76, 78, 54, 32, 99, 0];
// const result = findSmallNumber(myNumber);
// console.log(result);

// find the average

// function findAvg(arr) {
//   let arrSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     arrSum = arrSum + arr[i];
//   }
//   let averageIS = arrSum / arr.length;
//   return averageIS;
// }
// const number = [2, 4, 6, 8, 12, 34];
// const result = findAvg(number);
// console.log(result);

// calculate the area of a square

// function FindArea(x, y) {
//   let area = x * y;
//   return area;
// }

// const areaResult = FindArea(12, 4);
// console.log(areaResult);

// find second largest number
/**
 *
 *
 *
 *
 */
// from google ki korlo kmne korlo bujhar dorkar nai eta sort diye kora jai.
// function findSecondLargest(a, n) {
//   /*
//   Initialize the variable first_largest with the value 0 and second_largest with
//    the value -1.
//   */
//   let first_largest = 0;
//   let second_largest = -1;

//   /*
//   Now update the values of first_largest and second_largest in each
//    iteration as per the approach.
//   */
//   for (let i = 0; i < n; i++) {
//     if (a[i] > a[first_largest]) {
//       second_largest = first_largest;
//       first_largest = i;
//     } else if (a[i] < a[first_largest]) {
//       if (second_largest == -1 || a[second_largest] < a[i]) second_largest = i;
//     }
//   }

//   return a[second_largest];
// }

// const a = [12, 35, 1, 10, 31, 32, 1];
// let n = a.length;
// let answer = findSecondLargest(a, n);
// console.log(answer);

/**
 *
 * crome onusare sajano....
 *
 */

function serialNumber(number) {
  number.sort(function (a, b) {
    return a - b;
  });
}
let numbers = [1, 2, 3, 4, 5, 0, 9, 8, 7, 6, 12, 13, 10, 15, 18, 14];
let result = serialNumber(numbers);
console.log(numbers);

/*
 * find second largest number
 */

const arr = [12, 34, 11, 2, 3, 67, 89, 90];
const sorted = arr.sort(function (a, b) {
  return b - a;
});
console.log(sorted[1]);

/**
 * find the second small number
 */

let anyNumber = [12, 13, 14, 16, 18, 19, 24, 23, 2, 1];
let anyNumberSorted = anyNumber.sort(function (a, b) {
  return a - b;
});

const secondSmall = anyNumber[1];
console.log(secondSmall);
