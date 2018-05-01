function pickPeaks(peaks) {

  let result = {
    pos: [],
    peaks: [],
  };

  for (let i = 0; i < peaks.length; i++) {
    let curr = peaks[i];
    let prev = peaks[i - 1];
    let next = peaks[i + 1];

    if (curr > prev && curr > next || curr > prev && curr === next && curr && isPlateau(i, peaks)) {
      result.pos.push(i);
      result.peaks.push(curr);
    }
  }

  function isPlateau(startPlateau, peaks) {
    let endPlateau = peaks.findIndex((curr, i, peaks) => i > startPlateau && curr !== peaks[startPlateau])
    return peaks[startPlateau] > peaks[endPlateau];
  }

  return result;
}