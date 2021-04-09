/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

const digitsSum = (num) => String(num).split('').reduce((a, n) => +a + +n);
const getSumOfDigits = (number) => {
  if (number < 10) return number;
  return getSumOfDigits(digitsSum(number));
};

module.exports = getSumOfDigits;
