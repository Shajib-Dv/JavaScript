/** @format */
// power
// let pwr = Math.pow(3, 2);
// console.log(pwr);

// integer

// let num1 = 3.7785673;
// let numIs = Math.round(num1);

// console.log(numIs);

// random number

// let random = Math.round(Math.random() * 5);
// console.log(random);

// max number

// function maxNumber(number) {
//   let ans = Math.max(...number);
//   return ans;
// }
// let give = [102, 34, 56];
// const result = maxNumber(give);
// console.log(result);

// find big numbers

function bigNumberArray(number) {
  let bigNumber = [0];

  for (let i = 0; i < number.length; i++) {
    if (bigNumber < number[i]) {
      bigNumber = number[i];
    }
  }
  return bigNumber;
}
let numbers = [12, 0, 204, 56, 7, 89];
const smallNumberIs = bigNumberArray(numbers);
console.log(smallNumberIs);
