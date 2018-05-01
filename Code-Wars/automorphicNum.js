let automorphic = n => {
  let len = n.toString().length;
  return +(Math.pow(n, 2).toString().split('').slice(-len).join('')) === n ? 'Automorphic' : 'Not!!';
}