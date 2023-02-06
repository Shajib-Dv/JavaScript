/** @format */

// some mathematical  problems solving..

// minus using Math.abs
// function minusSum(num1, num2) {
//   let result = Math.abs(num1 - num2);
//   return result;
// }
// console.log(minusSum(10, 40));

const solution = (letter) => {
  const vowel = ["a", "e", "i", "o", "u"];
  let i;
  for (let i = 0; i < vowel.length; i++) {
    if (vowel[i].toLowerCase() === letter.toLowerCase()) {
      return "VOWEL";
      break;
    }
  }
  if (letter !== vowel[i]) {
    return "CONSONANT";
  }
};
let word = "k";
console.log(solution(word));
