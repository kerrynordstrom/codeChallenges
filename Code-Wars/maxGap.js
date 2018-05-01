let maxGap = numbers => {
  let maxDiff = 0;
  numbers.sort((a, b) => a - b)
    .map((e, i, arr) => Math.abs(e - arr[i + 1]) > maxDiff ? maxDiff = Math.abs(e - arr[i + 1]) : maxDiff);
  return maxDiff;
}