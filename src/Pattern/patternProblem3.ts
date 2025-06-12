export {};

const patternLength = 5;
let pattern = "";
let starCount = 1;
let spaceCount = patternLength - 1;
let space = " ";
let star = "*";
for (let i = 0; i < patternLength; i++) {
  for (let i = 0; i < spaceCount; i++) {
    pattern += space;
  }
  for (let i = 0; i < starCount; i++) {
    pattern += star;
  }
  pattern += "\n";
  spaceCount--;
  starCount++;
}

console.log(pattern);
