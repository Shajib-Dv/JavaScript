/** @format */

// reverse the name

// function reverseName(name) {
//   let largeName = [];
//   for (let i = 0; i < name.length; i++) {
//     if (largeName < name[i]) {
//       largeName = name[i];
//     }
//   }
//   const reversed = largeName.split("").reverse().join("");
//   return reversed;
// }
// const friend = [
//   "Kamul",
//   "Mabul",
//   "Abul",
//   "Sofiulla-Al-Sorif",
//   "Babul",
//   "Kolimullah",
// ];
// console.log(reverseName(friend));

// converting water volume.

// function waterMiliToLiter(volume) {
//   const milliliter = 0.001;
//   let liter = volume * milliliter;
//   return liter;
// }

// const waterValue = 1000;
// console.log(waterMiliToLiter(waterValue));

// find the small man in an object.

// const names = [
//   { name: "sakib", age: 30 },
//   { name: "samiul", age: 20 },
//   { name: "sahid", age: 15 },
//   { name: "samin", age: 20 },
// ];

// function smallInObject(name) {
//   let smallPerson = name[0];
//   for (let i = 0; i < name.length; i++) {
//     if (smallPerson.age > name[i].age) {
//       smallPerson = name[i];
//     }
//   }
//   return smallPerson;
// }

// console.log(smallInObject(names));

// Oil price

// function oilPrice(diesel, petrol, octan){
// const dieselPrice = 114;
// const petrolPrice = 130;
// const octanPrice = 135;
// let totalDiesel =  diesel * dieselPrice;
// let totalPetrol = petrol * petrolPrice;
// let totalOctan = octan * octanPrice;
// const subTotal = totalDiesel + totalOctan + totalPetrol;
// return subTotal;
// }
// console.log(oilPrice(0,2,3));

// public bus fair

// function publicBusFare(participants) {
//   const busCapacity = 50;
//   const microCapacity = 11;
//   if (typeof participants !== "number" || participants < 50) {
//     return "Picnic hobe na.";
//   }

//   let remainder = 0;
//   remainder = participants % busCapacity;
//   remainder = remainder % microCapacity;
//   let total = remainder * 250;
//   return total;
// }
// console.log(publicBusFare(63));

//is best friend

// function isBestFriend(friends) {
//   if (friend[0].name === friends[1].friend) {
//     return "Best friend"; // return true or false was recommended.
//   } else {
//     return "Not yet best friend";
//   }
// }

// const friend = [
//   { name: "abul", friend: "babul" },
//   { name: "babul", friend: "abul" },
// ];
// console.log(isBestFriend(friend));

// function temperatureConverter(valNum) {
//   let celsius = (valNum - 32) / 1.8;
//   console.log(celsius);
//   const result = parseFloat(celsius.toFixed(2));
//   return result;
// }

// console.log(temperatureConverter(103));

function stringCombine(str1, str2) {
  //write your code here
  //don't forget to write return

  const result = str1.concat(" ", str2);
  return result;
}
console.log(stringCombine("I am", "Go"));
