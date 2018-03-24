function songDecoder(song) {
  let isWub = /WUB/g;
  let extraSpace = /\s\s+/g;

  return song.replace(isWub, ' ').replace(extraSpace, ' ').trim();
}