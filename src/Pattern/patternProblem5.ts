export {};
let patternLength = 5;
let pattern = "";

let starCount = patternLength;
for (let i = 0; i < patternLength; i++) {
  for (let j = starCount; j > 0; j--) {
    pattern += "*";
  }
  pattern += "\n";
  starCount--;
}

console.log(pattern);
