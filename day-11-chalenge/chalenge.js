/** @format */

// inc to feet

// function feetToInch(feet) {
//  inch = feet * 12;
//  return inch;
// }
// const result = feetToInch(2);
// console.log(result + ' ' + 'inc');

// centimeter to meter

// function centimeterToMeter(centimeter){
//     const result = centimeter * 0.01;
//     return result;
// }
// console.log(centimeterToMeter(100));

// calculation using loop and condition

function paperRequirements(firstCopy, secondCopy, thirdCopy) {
  const firstBookPage = 100;
  const secondBookPage = 200;
  const thirdBookPage = 300;
  const firstBookTotalPage = firstBookPage * firstCopy;
  const secondBookTotalPage = secondBookPage * secondCopy;
  const thirdBookTotalPage = thirdBookPage * thirdCopy;
  const totalPage = firstBookPage + secondBookTotalPage + thirdBookTotalPage;
  return totalPage;
}

console.log(paperRequirements(1, 1, 2));

// big name must return and name must be a string.

// function bestFriend(array) {
//   let best = [];
//   for (let i = 0; i < array.length; i++) {
//     let friends = array[i];
//     if (best.length < friends.length) {
//       best = friends;
//     }
//   }
//   return best;
// }
// const friend = [
//   "Kamul",
//   "Mabul",
//   "Abul",
//   "Sofiulla-Al-Sorif",
//   "Babul",
//   "Kolimullah",
// ];
// console.log(bestFriend(friend));

// tricky challenge break the loop when the the number reach negative.

function findPositiveNumber(number) {
  let evenNumber = [];
  for (let i = 0; i < numbers.length; i++) {
    if (number[i] < 0) {
      break;
    }
    evenNumber.push(number[i]);
  }
  return evenNumber;
}
const numbers = [1, 2, 6, -2, -8, -3, 10, -6, 7, -5, 56];
console.log(findPositiveNumber(numbers));
