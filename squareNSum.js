function squareSum(numbers) {
  return numbers.map(num => Math.pow(num, 2)).reduce((a, c) => a + c, 0);
}