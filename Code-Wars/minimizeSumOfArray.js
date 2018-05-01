let minSum = arr => {
  let solutionArr = [];
  let sortedArr = arr.sort((a, b) => a - b);

  while (arr.length) {
    solutionArr.push(sortedArr.shift() * sortedArr.pop());
  }

  return solutionArr.reduce((a, b) => a + b);
}