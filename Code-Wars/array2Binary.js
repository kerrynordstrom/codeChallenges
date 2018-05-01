let containsAllInts = curr => typeof curr === 'number';

let arr2bin = arr => {
  let arrayTotal = arr.reduce((a, b) => a + b, 0);
  return !arr.every(containsAllInts) || arr === [] ? false : (arrayTotal >>> 0).toString(2);
}