const arr = ["abc", "hello", "c", "d", "abc", "c", "d"];

function printUniqueStrings(arr: string[]): Record<string, string> {
  const uniqObj: Record<string, string> = {};
  for (const str of arr) {
    if (!uniqObj[str]) {
      uniqObj[str] = str;
    }
  }
  return uniqObj;
}

const uniqStr: string[] = Object.keys(printUniqueStrings(arr));
console.log(uniqStr); // Output: [ 'abc', 'hello', 'c', 'd' ]
export default printUniqueStrings;
