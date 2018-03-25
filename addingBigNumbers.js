function add(a, b) {

  function _addingHelper(a, b, accum = '', carryOver = 0) {
    if (!(a.length || b.length || carryOver)) return accum.replace(/^0+/, '');

    carryOver = carryOver + (~~a.pop() + ~~b.pop());
    accum = carryOver % 10 + accum;
    carryOver = carryOver > 9;

    return _addingHelper(a, b, accum, carryOver)
  }

  return _addingHelper(a.split(''), b.split(''));
}