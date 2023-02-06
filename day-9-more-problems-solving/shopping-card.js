/** @format */

const shoppingCard = [
  {
    name: "Shirt",
    price: 600,
  },
  {
    name: "Pant",
    price: 800,
  },
  {
    name: "Shoe",
    price: 400,
  },
  {
    name: "Belt",
    price: 200,
  },
];

// calculate the sum of object

function sumOfObject(card) {
  let subTotal = 0;
  for (let i = 0; i < card.length; i++) {
    let item = card[i];
    subTotal = subTotal + item.price;
  }
  return subTotal;
}
const totalPrice = sumOfObject(shoppingCard);
console.log(totalPrice);
