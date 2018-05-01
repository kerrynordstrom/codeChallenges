/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = x => parseInt(x.toString().split('').reverse().join('')) === x ? true : false;