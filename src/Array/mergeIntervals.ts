const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

//first we need to sort the intervals based on the start time

intervals.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

const mergedIntervals = [[intervals[0][0], intervals[0][1]]];

for (let i = 1; i < intervals.length; i++) {
  let [start, end] = mergedIntervals.pop() ?? [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
  let [currStart, currEnd] = intervals[i];

  if (end >= currStart) {
    end = Math.max(currEnd, end);
    mergedIntervals.push([start, end]);
  } else {
    mergedIntervals.push([start, end]);
    mergedIntervals.push([currStart, currEnd]);
  }
}
console.log(mergedIntervals);
