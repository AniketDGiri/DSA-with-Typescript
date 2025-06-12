const str = "Hello World!";

function countOccurenceOfCharacters(str: string): Record<string, number> {
  const charCount: Record<string, number> = {};

  for (const char of str) {
    if (char !== " ") {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }
  return charCount;
}

console.log(countOccurenceOfCharacters(str));
export default countOccurenceOfCharacters;
