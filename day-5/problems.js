/** @format */

//module problems

// function fu() {
//   console.log("foo");
//   bar();
// }
// function bar() {
//   console.log("bar");
// }

// fu();

// function make_avg(a, b, c) {
//   var add = a + b + c;
//   var average = add / 3;
//   console.log(average);
//   return average;
// }
// var inputMark = make_avg(10, 10, 30);
// console.log(inputMark.toFixed(2));

// function avg_of_array(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// let values = [5, 10, 30];
// let average = avg_of_array(values);
// console.log(average);

// function making_avg(inputArray){
//  var sum = 0;
//  for(var i = 0; i < inputArray.length; i++){
//     sum += inputArray[i];
//  }
//  return sum / inputArray.length;
// }
// var put = [12,15,20];
// var average = making_avg(put);
// console.log(average.toFixed(2));

// function odd_even(x) {
//   sum = [];
//   if (x % 2 === 0) {
//     sum.push("result is even");
//   } else {
//     sum.push("result is odd");
//   }
//   return sum;
// }

// var inputX = 14;
// var result = odd_even(inputX);
// console.log(result[0]);

// function evenOdd(x){
//     if( x % 2 === 0){
//         return 'Number is even';
//     } else{
//         return 'number is odd';
//     }
// }
// var inputValue = 2;
// var results = evenOdd(inputValue);
// console.log(results);

// function color(x) {
//   if (x === "red") {
//     return "stop, don't cross the road";
//   }else if( x === 'yellow'){
//     return 'wait a minute';
//   }else if(x === 'green'){
//     return 'now cross the road';
//   } else{
//     return 'Please select red,yellow or green';
//   }
// }

// var inputColor = 'gree';
// var action = color(inputColor);
// console.log(action);

var colors = "purpole";
switch (colors) {
  case "red":
    console.log("you select red color");
    break;
  case "blue":
    console.log("You select blue color");
    break;
  case "green":
    console.log("You select green color");
    break;
  case "yellow":
    console.log("You select yellow color");
    break;
  case "orange":
    console.log("You select orange color");
    break;
  default:
    console.log("Please select pin colors");
}
