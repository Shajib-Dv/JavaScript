/** @format */

//split
let song =
  "amo ki pari ki ba na pari pari r na pari sob pere ki hobe , sobai toh sob parbe emon kono kotha nai";

console.log(song);
let splitWord = song.split(" "); // ' space' make all the word in an array with single word.
console.log(splitWord);

let splitChars = song.split(""); // it make split the character.
console.log(splitChars);

// slice a string

let boyan = "boyan diya neta hoya jai but leader na";
let sliceBoyan = boyan.slice(10, 15);
console.log(sliceBoyan);

//concat string

let str1 = "hello there";
let str2 = " Do you want to be a developer !";

let newStr = str1.concat(str2);
console.log(newStr);

// join array

let joinArr = ["hello", "developer", "whats up"];

console.log(joinArr);

let joinedArr = joinArr.join("-");
console.log(joinedArr);
