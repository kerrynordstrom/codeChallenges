// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
  let result = Array.from(new Set(ages)).sort((a, b) => a - b);
  let len = result.length;

  return [result[len - 2], result[len - 1]];
}
