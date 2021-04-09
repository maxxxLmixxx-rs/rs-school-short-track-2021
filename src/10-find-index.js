/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

const findIndex = (array, value) => {
  const log2N = Math.ceil(Math.log2(array.length));
  let pivot = Math.floor(array.length / 2);
  for (let i = 1; i <= log2N; i++) {
    if (value < array[pivot]) pivot = Math.floor(pivot - pivot / i ** 2);
    if (value > array[pivot]) pivot = Math.floor(pivot + pivot / i ** 2);
    if (value === array[pivot]) return pivot;
  }
  return -1;
};

module.exports = findIndex;
