let findSimilarity = (str, word) => {

  let regStr = `${word[0]}${word.slice(1, -1).replace(/./g, ".")}${word.slice(-1)}`;
  let reg = new RegExp(`^${regStr}$`);

  return str.split(' ').filter(word => word.match(reg)).join(' ');
}