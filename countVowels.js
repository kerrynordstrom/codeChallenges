let getCount = str => {
  let re = new RegExp(/[aeiou]/gi)
  let vowelsCount = str.match(re)
  return vowelsCount === null ? 0 : vowelsCount.length;
}