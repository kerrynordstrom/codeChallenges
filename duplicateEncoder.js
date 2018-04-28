let duplicateEncode = word => {
  var wordObj = {};
  let wordArr = word.toLowerCase().split('');

  wordArr.forEach(char => (wordObj.hasOwnProperty(char)) ? wordObj[char]++ : wordObj[char] = 1);

  word = wordArr.map(char => (wordObj[char] > 1) ? ')' : '(').join('');

  return word;
}
