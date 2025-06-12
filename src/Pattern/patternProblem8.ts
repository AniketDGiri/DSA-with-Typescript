export {};
let pattern = "";
let patternLength = 4;
let starCount = 1;

let midPoint = Math.floor((2 * patternLength) / 2);
for (let i = 0; i < patternLength; i++) {
  let leftTemp = starCount;
  let rightTemp = starCount;
  for (let j = 0; j < 2 * patternLength; j++) {
    if (j >= midPoint - i && j <= midPoint) {
      pattern += leftTemp - (midPoint - j);
    } else if (j >= midPoint && j <= midPoint + i) {
      pattern += rightTemp - (j - midPoint);
    } else {
      pattern += " ";
    }
  }
  pattern += "\n";
  starCount++;
}

console.log(pattern);
