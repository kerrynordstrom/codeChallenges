function accum(s) {
  let str = s.toUpperCase().split('');
  for (let i = 0; i < s.length; i++) {
    str[i] += str[i].toLowerCase().repeat(i);
  }
  return str.join('-');
}