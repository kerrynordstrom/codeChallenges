function correct(string) {
  const dict = {
    5: 'S',
    0: 'O',
    1: 'I',
  }

  let regEx = new RegExp(`[${Object.keys(dict).join('')}]`, 'g')

  return string.replace(regEx, (char => dict[char]));
}