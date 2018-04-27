let findOdd = arr => {
  let setty = new Set();
  for (let i = 0; i < arr.length; i++) {
    (setty.has(arr[i])) ? setty.delete(arr[i]) : setty.add(arr[i])
  }
  return [...setty][0];
}