const arr = [1, 2, 3, 4, 9, 1, 8, 2, 3];

const reverseArry = function (arr: number[]): number[] {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr;
};

console.log(reverseArry(arr)); // Output: [ 3, 2, 8, 1, 9, 5 ]
export default reverseArry;
