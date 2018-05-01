String.prototype.toJadenCase = function () {
  let str = String(this);
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};