let isTriangle = (a, b, c) => {
  let longestSide = Math.max(a, b, c);
  let sum = a + b + c;

  return (longestSide < sum - longestSide);
}