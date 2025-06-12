const arr = [-1, 1, 1, 1, -1];
let k = 2;

const longestSubarrayWithSumK = function (arr: number[]): number {
  let maxSum = -Infinity;
  const store = new Map();
  store.set(0, -1);
  let tempSum = 0;
  for (const [idx, num] of arr.entries()) {
    tempSum += num;
    console.log(`Index: ${idx}, Number: ${num}, Current Sum: ${tempSum}`);
    if (store.has(tempSum - k)) {
      let index = store.get(tempSum - k);
      maxSum = Math.max(maxSum, idx - index);
    } else {
      store.set(tempSum, idx);
    }
  }
  return maxSum;
};

console.log(longestSubarrayWithSumK(arr)); // Output: 3
export default longestSubarrayWithSumK;
