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
