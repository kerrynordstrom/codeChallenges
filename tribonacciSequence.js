let tribonacci = (signature, n) => {

  for (let i = 0; i < n - 3; i++) {
    signature.push(parseFloat(signature.slice(i, i + 3).reduce((a, b) => a + b, 0)));
  }

  return n === 0 ? [] : signature.slice(0, n);
}