let iqTest = numbers => {
  let binary =
    numbers
      .split(' ')
      .map((int, i) => int % 2 !== 0 ? int % 2 : int % 1)

  return (binary.reduce((a, b) => a + b, 0) > 1) ? binary.indexOf(0) + 1 : binary.indexOf(1) + 1;
}
