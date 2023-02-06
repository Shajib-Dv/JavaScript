/** @format */

// remove duplicate names

function removeDuplicat(names) {
  let unique = [];
  for (let i = 0; i < name.length; i++) {
    let allName = name[i];
    if (unique.includes(allName) === false) {
      unique.push(allName);
    }
  }
  return unique;
}
let name = ["abul", "kabul", "babul", "kabul", "abul", "chabul"];
let uniqueName = removeDuplicat(name);
console.log(uniqueName);

// remove duplicate numbers

function removeDuplicatNumber(number) {
  let unique = [];
  for (let i = 0; i < number.length; i++) {
    if (unique.includes(number[i]) === false) {
      unique.push(number[i]);
    }
  }
  let toUnique = unique.sort(function (a, b) {
    return a - b;
  });
  return toUnique;
}
let myNumber = [
  2, 4, 6, 8, 2, 6, 8, 1, 4, 9, 12, 13, 12, 13, 15, 17, 17, 15, 10, 3,
];
let uniqueNumber = removeDuplicatNumber(myNumber);
console.log(uniqueNumber);
