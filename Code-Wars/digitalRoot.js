let digital_root = n => {
  let sum = 0;
  let arrNums = n.toString().split('').map(str => parseInt(str));

  while (arrNums.length > 1) {
    sum = arrNums.reduce((a, b) => a + b);
    arrNums = sum.toString().split('').map(str => parseInt(str));
  }

  return sum;
}