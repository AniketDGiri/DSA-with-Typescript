//

function pivotArray(nums: number[], pivot: number): number[] {
  let start = 0;
  let end = nums.length - 1;
  let len = nums.length;
  let finalAns = [];
  for (let i = 0; i < len; i++) {
    if (nums[i] < pivot) {
      finalAns[start] = nums[i];
      start++;
    }
    if (nums[len - 1 - i] > pivot) {
      finalAns[end] = nums[len - 1 - i];
      end--;
    }
  }

  while (start <= end) {
    finalAns[start] = pivot;
    start++;
  }
  return finalAns;
}
