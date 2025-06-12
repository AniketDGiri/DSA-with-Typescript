export {};
const a = 10;
const b = 10;
const c = 5;

let isTriangle = false;
if (a + b > c && a + c > b && b + c > a) {
  isTriangle = true;
}

console.log(`The numbers ${a}, ${b}, and ${c} can${isTriangle ? "" : "not"} form a triangle`);
