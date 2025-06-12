export {};
let pattern = "";
let patternLength = 5;
let leftStarCount = patternLength;
let rightStarCount = patternLength;

//printing the pyramid star pattern

for (let i = 1; i <= patternLength; i++) {
  for (let j = 1; j <= 2 * patternLength; j++) {
    if ((j <= 5 && j >= leftStarCount) || (j >= 5 && j <= rightStarCount)) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }
  pattern += "\n";
  leftStarCount--;
  rightStarCount++;
}

console.log(pattern);
