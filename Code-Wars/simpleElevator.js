function goto(level, button) {
  let buttonNum = parseInt(button);
  if (
    typeof level !== 'number' ||
    typeof button !== 'string' ||
    level >= 4 ||
    buttonNum >= 4 ||
    level % 1 !== 0 ||
    buttonNum % 1 !== 0
  ) {
    return 0;
  }
  return level > buttonNum ? -(level - buttonNum) : buttonNum - level;
}