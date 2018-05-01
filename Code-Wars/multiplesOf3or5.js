let solution = number => {
  let range = number >= 0 ? [...Array(number).keys()] : [0];
  return range.filter(x => (x % 3 === 0 || x % 5 === 0)).reduce((a, c) => a + c, 0);
};