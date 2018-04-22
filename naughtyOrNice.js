function getNiceNames(people) {
  return people.filter(people => people.wasNice).map(p => p.name);
}

function getNaughtyNames(people) {
  return people.filter(people => !people.wasNice).map(p => p.name);
}