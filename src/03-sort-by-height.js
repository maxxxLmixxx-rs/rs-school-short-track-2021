/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

const sortByHeight = (array) => {
  const sortedExcept = array
    .filter((n) => n !== -1)
    .sort((a, b) => b - a);
  return array.map((n) => (n === -1 ? n : sortedExcept.pop()));
};

module.exports = sortByHeight;
