const arr = [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];

const dnfAlgorith = (arr: number[]): number[] => {
  const arrLength = arr.length;
  let low = 0;

  for (let i = 0; i < arrLength; i++) {
    if (arr[i] === 0) {
      [arr[low], arr[i]] = [arr[i], arr[low]];
      low++;
    }
  }
  return arr;
};

console.log(dnfAlgorith(arr));
export default dnfAlgorith;
