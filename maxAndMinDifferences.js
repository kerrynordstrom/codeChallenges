function maxAndMin(arr1,arr2){
  let results = [];
  
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      results.push(Math.abs(arr1[i] - arr2[j]))
    }
  }
  return [Math.max(...results), Math.min(...results)];
}