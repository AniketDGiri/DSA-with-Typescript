const arr = [5, 4, 3, 2, 8, 9, 7];

const secondSmallestFun = function (arr: number[]): number {
  let firstSmallest = arr[0];
  let secondSmallest = Infinity;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < firstSmallest) {
      secondSmallest = firstSmallest;
      firstSmallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== firstSmallest) {
      // Update second smallest only if it's not equal to the first smallest
      secondSmallest = arr[i];
    }
  }
  if (secondSmallest === Infinity) {
    return -1; // Return -1 if there is no second smallest element
  }

  return secondSmallest;
};

console.log(secondSmallestFun(arr)); // Output: 2
export default secondSmallestFun;
