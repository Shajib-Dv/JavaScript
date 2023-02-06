/** @format */

// problem 1

var fruits = ["Apple", "Banana", "Orange"];
var findBanana = fruits.indexOf("Banana");
console.log(findBanana);

//replace Banana with Mango
fruits[1] = "Mango";
console.log(fruits);

//remove orange and add mango
fruits.pop();
fruits.push("Watermelon");
console.log(fruits);

// problem 2

var scores = 33;

//80 or above A grade

if (scores >= 80) {
  console.log("You got A grade");
} else if (scores >= 60) {
  console.log("You got B grade");
} else if (scores >= 50) {
  console.log("You got C grade");
} else if (scores >= 40) {
  console.log("You got D grade");
} else {
  console.log("You are failed");
}

// problem 3

var whoBig = [48, 76, 39, 48, 99, 23, 100, 12];
// print the biggest number with Math.max
console.log(Math.max(...whoBig));
//print the lowest number with Math.min
console.log(Math.min(...whoBig));

//triangle check

var area = [9, 8, 9];
if (area[0] === area[1] || area[1] === area[2] || area[2] === area[0]) {
  console.log("isosceles done");
} else {
  console.log("isosceles failed");
}
