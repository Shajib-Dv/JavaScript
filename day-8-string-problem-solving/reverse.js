/** @format */

// reverse the string

// function strReverse(str) {
//   let reverseName = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseName = reverseName + str[i];
//   }
//   return reverseName;
// }
// let nam = "Hello developer";
// const result = strReverse(nam);
// console.log(result);

// word reverse

function reverseWord(word) {
  let wordReverse = word.split(" ");
  console.log(wordReverse);
  let wordIs = [];
  for (let i = wordReverse.length - 1; i >= 0; i--) {
    wordIs.push(wordReverse[i]);
  }
  let ulta = wordIs.join(" ");
  return ulta;
}
let myWord = "Hello Developer";
const reversed = reverseWord(myWord);
console.log(reversed);
