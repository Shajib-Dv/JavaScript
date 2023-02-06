/** @format */

var money = 25;
var danishPrice = 45;
var butter = 35;
var toast = 20;

if (danishPrice < money) {
  console.log("Buy a danish");
} else if (butter < money) {
  console.log("Buy a butter");
} else if (toast < money) {
  console.log("Buy a toast");
} else {
  console.log("Money problem");
}
