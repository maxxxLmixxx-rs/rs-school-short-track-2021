/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 * You should delete first character that less then next
 * or the last one
 *
 * 229 -> true:  delete 2[2]9
 * 922 -> false: delete 92[2]
 */

const deleteDigit = (n) => {
  const getStingExcept = (str, ix) => str.slice(0, ix) + str.slice(ix + 1);
  const numString = String(n);
  const toDeleteIx = numString.split('').findIndex((val, ix, arr) => val < arr[ix + 1]);
  if (toDeleteIx === -1) return Number(numString.slice(0, -1));
  return Number(getStingExcept(numString, toDeleteIx));
};

module.exports = deleteDigit;
