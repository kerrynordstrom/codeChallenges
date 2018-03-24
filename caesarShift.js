function rot13(str, offset = 13) {
  let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let modulo = upperCase.length;
  let alpha = /[a-zA-Z]/

  if (offset < 0) {
    return rot13(str, offset + 26);
  }

  return str
    .split('')
    .map(char => {
      if (char.match(alpha))
        if (char.charCodeAt() < 90) {
          return upperCase[(upperCase.indexOf(char) + offset) % modulo];
        } else {
          return lowerCase[(lowerCase.indexOf(char) + offset) % modulo];
        }
      return char;
    })
    .join('');
};