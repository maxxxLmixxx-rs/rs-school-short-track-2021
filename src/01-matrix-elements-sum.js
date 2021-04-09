/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

const getMxElementsSum = (matrix) => {
  const mxLength = matrix[0].length;
  return matrix.flat()
    .filter((_, i, flatMatrix) => flatMatrix[i - mxLength] !== 0)
    .reduce((acc, v) => acc + v);
};

module.exports = getMxElementsSum;
