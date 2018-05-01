function removeSmallest(numbers) {
  let smallest = Math.min(...numbers);
  numbers.splice(numbers.indexOf(smallest), 1);
  return numbers;
}