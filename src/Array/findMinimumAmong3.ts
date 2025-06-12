export {};
const a = 10;
const y = -20;
const z = 6;

let minimum = +Infinity;

if (a < y) {
  minimum = a;
} else {
  minimum = y;
}

if (minimum > z) {
  minimum = z;
}

console.log(`The minimum number is ${minimum}`);
