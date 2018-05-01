function solution(roman) {
  let decoder = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let arabic = 0;
  let romanArray = roman.split('');

  for (let i = 0; i < romanArray.length; i++) {
    let currentNumeral = decoder[romanArray[i]]
    let nextNumeral = decoder[romanArray[i + 1]]

    if (currentNumeral < nextNumeral) {
      return arabic += (nextNumeral - currentNumeral);
    } else {
      arabic += currentNumeral
    }
  };
  return arabic;
}