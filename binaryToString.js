let binaryToString = str => {
  let newBinary = str.split('0b');
  let binaryCode = [];

  newBinary.map((char, i) => binaryCode.push(String.fromCharCode(parseInt(newBinary[i], 2))));

  return binaryCode.join('').replace(/\u0000/, '');
}