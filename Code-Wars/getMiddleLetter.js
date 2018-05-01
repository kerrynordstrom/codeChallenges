function getMiddle(s) {
  let len = s.length;
  let half = len / 2
  return len % 2 === 1
    ? s.split('').slice(half, half + 1).join('')
    : s.split('').slice(half - 1, half + 1).join('');
}