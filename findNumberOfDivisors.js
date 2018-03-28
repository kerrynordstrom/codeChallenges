function getDivisorsCnt(n) {
  let counter = 0;
  for (let i = 0; i <= n; i++) {
    (n % i === 0) ? counter++ : 0
  }
  return counter;
}