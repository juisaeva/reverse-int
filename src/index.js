module.exports = function reverse(n) {
  const newNumber = Math.abs(n).toString().split('').reverse().join('');
  return Number(newNumber);
};
