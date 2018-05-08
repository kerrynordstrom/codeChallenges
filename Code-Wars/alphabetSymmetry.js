function solve(arr) {
  let dict = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let count = 0;
  let result = [];

  let temp = arr.map(x => x.toLowerCase().split(''));

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j === dict.indexOf(temp[i][j])) {
        count++
      }
    }
    result.push(count);
    count = 0;
  }
  return result;
};