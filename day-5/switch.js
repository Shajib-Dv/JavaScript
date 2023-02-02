/** @format */

//common case

var color = "blue";
if (color === "red") {
  console.log("you select red");
} else if (color === "blue") {
  console.log("you select blue");
} else if (color === "green") {
  console.log("you select green");
} else if (color === "yellow") {
  console.log("you select yellow");
} else {
  console.log("Please select a color");
}

//switch case
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
