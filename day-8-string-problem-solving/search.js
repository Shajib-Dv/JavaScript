/** @format */

const poem = "Rodro vodro santo khanto Hela-khanto, gelo vanto sunle manto";
// search with includes function
// you have to convert etch element before search.

let items = "Rodro";
let isExist = poem.toLowerCase().includes(items.toLowerCase());
console.log(isExist);

//--------- another way to search -------------

console.log(poem.indexOf("vodro"));
let find = "vodro";
if (poem.indexOf(find) !== -1) {
  console.log("paice");
} else {
  console.log("pai nai");
}

//finding first element

console.log(poem.startsWith("Rodro"));

// finding last element

let fileName = "myfile.pdf";
console.log(fileName.endsWith(".pdf"));
