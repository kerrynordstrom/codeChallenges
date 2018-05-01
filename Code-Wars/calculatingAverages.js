var Calculator = {
  average: function (...args) {
    let sum = [...args].reduce((a, b) => a + b, 0);
    let len = [...args].length;
    return len > 0 ? sum / len : 0;
  }
};