export {};

const patternLength = 5;
let pattern = "";

for (let i = 0; i < patternLength; i++) {
  for (let j = 0; j < patternLength; j++) {
    pattern += "*";
  }
  pattern += "\n";
}

console.log(pattern);
// Output:
// *****
