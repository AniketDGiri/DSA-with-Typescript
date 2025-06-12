const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

//first we need to sort the intervals based on the start time

const sortedIntervals = intervals.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

const mergedIntervals = [];
