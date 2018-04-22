function getMissingElement(inputz) {
  return inputz.sort((a, b) => a - b).filter(z => z === inputz.indexOf(z)).length;
}