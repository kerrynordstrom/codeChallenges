/**
 * @param {number} n
 * @return {string[]}
 */
let fizzBuzz = (n) => {}
  let result = [];
  for (let i = 1; i <= n; i++) {
    (i % 3 === 0 && i % 5 === 0) ? result.push("FizzBuzz")
      : (i % 3 === 0) ? result.push("Fizz")
      : (i % 5 === 0) ? result.push("Buzz")
          : result.push(i.toString())
  }
  return result;
};