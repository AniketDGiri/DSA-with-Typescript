export {};

const patternLength = 5;
let pattern = "";
// This code prints a pyramid pattern of asterisks (*) with a given length

for (let i = 1; i <= patternLength; i++) {
  // Print asterisks
  for (let k = 1; k <= i; k++) {
    pattern += "* ";
  }
  // Move to the next line
  pattern += "\n";
}

console.log(pattern);
// Output:
// *
// * *
