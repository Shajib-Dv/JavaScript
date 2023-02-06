/** @format */

let phones = [
  {
    name: "Samsung",
    price: 20000,
    ram: 4,
  },
  {
    name: "Nokia",
    price: 25000,
    ram: 4,
  },
  {
    name: "Oppo",
    price: 22000,
    ram: 4,
  },
  {
    name: "Realme",
    price: 12000,
    ram: 4,
  },
];

function lowPricePhone(phones) {
  let lowPhone = phones[0];
  for (let i = 0; i < phones.length; i++) {
    if (lowPhone.price > phones[i].price) {
      lowPhone = phones[i];
    }
  }
  return lowPhone;
}

const mySelection = lowPricePhone(phones);
console.log(mySelection);

// small number
let number = [1, 2, 3, 4, 54, 67, 6, 46, 45];
let small = number[0];
for (let i = 0; i < number.length; i++) {
  if (small > number[i]) {
    small = number[i];
  }
}
console.log(small);
