/** @format */

let solution = "k";
let vowel = ["a", "e", "i", "o", "u"];
let i;
for (i = 0; i < vowel.length; i++) {
  if (solution.toLowerCase() === vowel[i].toLowerCase()) {
    console.log("This is a vowel");
    break;
  }
}

if (i === vowel.length) {
  console.log("This is a consonant");
}
