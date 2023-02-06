/** @format */

var container = {
  name: "Sojeeb",
  age: 22,
  home: "CD",
  tel: "0174747",
};
var keys = Object.keys(container);
console.log(keys);

//function

function mathAdd(num1, num2) {
  let add = num1 + num2;
  return add;
}

let resultAdd = mathAdd(12, 11);
console.log(resultAdd);

function mathMinus(num1, num2) {
  let add = num1 - num2;
  return add;
}

let resultMinus = mathMinus(40, 20);
console.log(resultMinus);

console.log(resultAdd + resultMinus);

//km to m convert

function kmToMile(a) {
  let result = a * 0.42;
  return result;
}
const ansIs = kmToMile(20);
console.log(ansIs);

//pre-commended value print

function workOutPlan(workOut) {
  let bicepWork = ["There are many bicep exercise go.. "];
  let tricepWork = ["There are many tricep exercise doo..."];
  let chestWork = ["There are many chest exercise doo..."];
  if (workOut == "bicep") {
    return bicepWork;
  } else if (workOut == "tricep") {
    return tricepWork;
  } else if (workOut == "chest") {
    return chestWork;
  }
}

let yourWorkOut = workOutPlan("tricep");
console.log(yourWorkOut);

//hotel offer basic

// let myDay = 11;
// const first10Days = 500;
// const second20Days = 300;
// const thirdAnyDays = 100;

// if (myDay <= 10) {
//   console.log(myDay * 500);
// } else if (myDay <= 20 && myDay > 10) {
//   let firstCost = 10 * 500;
//   let withoutFirstCost = myDay - 10;
//   let secondCost = firstCost + withoutFirstCost * 300;
//   console.log(secondCost);
// } else if (myDay > 20) {
//   let firstCost = 10 * 500;
//   let withSecondCost = 10 * 300;
//   let firstSecondCost = firstCost + withSecondCost;
//   let withThirdCost = myDay - 20;
//   let thirdCost = firstSecondCost + withThirdCost * 100;
//   console.log(thirdCost);
// }

//hotel offer with function

function hotelOffer(myDay) {
  const first10Days = 500;
  const second20Days = 300;
  const thirdAnyDays = 100;

  if (myDay <= 10) {
    let firstCost = myDay * 500;
    return firstCost;
  } else if (myDay <= 20 && myDay > 10) {
    let firstCost = 10 * 500;
    let withoutFirstCost = myDay - 10;
    let secondCost = firstCost + withoutFirstCost * 300;
    return secondCost;
  } else if (myDay > 20) {
    let firstCost = 10 * 500;
    let withSecondCost = 10 * 300;
    let firstSecondCost = firstCost + withSecondCost;
    let withThirdCost = myDay - 20;
    let thirdCost = firstSecondCost + withThirdCost * 100;
    return thirdCost;
  }
}

const totalCost = hotelOffer(31);
console.log(totalCost);

//convert object to array and run a loop to print all element and values.
let card = {
  name: "piyaj",
  dam: 30,
  kam: "ranna hobe",
};
let element = Object.keys(card);
let value = Object.values(card);
console.log(element);
for (let i = 0; i < element.length; i++) {
  console.log(element[i], value[i]);
}
