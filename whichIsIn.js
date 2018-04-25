function inArray(array1, array2) {
  let uniqueVal = new Set();

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j].includes(array1[i])) {
        uniqueVal.add(array1[i])
      }
    }
  }
  return [...uniqueVal].sort();
}