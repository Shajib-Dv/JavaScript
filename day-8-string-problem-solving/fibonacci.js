/** @format */

// fibonacci number

let fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo.join(" => "));

const number = -75;
const result = Math.abs(number);
console.log(result);

function add(a, b) {
  return a + b;
}
console.log(add("adam" + "badam"));
