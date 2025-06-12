const arr = [4, 1, 2, 1, 2, 4, 6];

const singleNumber = function (arr: number[]): number {
  let ans = 0;
  for (const num of arr) {
    ans = num ^ ans;
  }
  return ans;
};

console.log(singleNumber(arr)); // Output: 4
export default singleNumber;
