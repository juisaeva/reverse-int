module.exports = function reverse (n) {
  let newNumber = n.toString().split('').reverse().join('');
  return Math.abs(Number(newNumber));
}
