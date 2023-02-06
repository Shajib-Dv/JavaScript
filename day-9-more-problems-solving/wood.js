/** @format */

// simple calculation for wood

function calculateWood(tableQuantity, chairQuantity, bedQuantity) {
  const tableWood = 3;
  const chairWood = 10;
  const bedWood = 50;

  const woodForTable = tableQuantity * tableWood;
  const woodForChair = chairQuantity * chairWood;
  const woodForBed = bedQuantity * bedWood;
  const total = woodForBed + woodForChair + woodForTable;
  return total;
}
const totalWood = calculateWood(1, 1, 1);
console.log(totalWood);
