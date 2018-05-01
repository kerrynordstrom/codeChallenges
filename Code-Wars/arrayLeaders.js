let arrayLeaders = numbers => numbers.filter((int, i) => int > numbers.slice(i + 1).reduce((a, b) => a + b, 0));
