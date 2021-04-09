/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

const minesweeper = (initialMatrix) => {
  /* copy */
  const matrix = initialMatrix.map((row) => row.slice());

  const calculateSurround = (y, x, depth = 1) => {
    let counter = 0;
    for (let iy = y - depth; iy <= y + depth; iy++) {
      for (let ix = x - depth; ix <= x + depth; ix++) {
        if (initialMatrix[iy] && initialMatrix[iy][ix]) counter++;
      }
    }
    return counter;
  };

  return matrix.map((matrixRow, y) => matrixRow.map((matrixCell, x) => {
    if (matrixCell === false) return calculateSurround(y, x);
    return 1;
  }));
};

module.exports = minesweeper;
