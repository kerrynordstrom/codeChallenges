function digPow(n, p) {
  let numArray = n.toString().split('');
  let magicSauce = numArray.map((num, i) => Math.pow(num, (p + i))).reduce((a, b) => a + b, 0) / n
  return Number.isInteger(magicSauce) ? magicSauce : -1;
}