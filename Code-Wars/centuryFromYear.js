function century(year) {
  let century = Array.from(year.toString())
  let yearSeconds = parseInt(century.splice(-2).join(''));
  let possibleCentury = parseInt(century.join(''));

  return year < 100 ? 1
      : yearSeconds >= 1
      ? possibleCentury + 1
      : possibleCentury;
}