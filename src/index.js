module.exports = function reverse (n) {
  let newNumber = Math.abs(n).toString().split('').reverse().join('');
  return Number(newNumber);
}
