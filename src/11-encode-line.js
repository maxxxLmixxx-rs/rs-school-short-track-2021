/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For 'aabbbc' should return '2a3bc'
 *
 */

const encodeLine = (string) => {
  // First not repeated index
  const repeatedIndex = (str) => [...str].findIndex((l, i, arr) => l !== arr[i + 1]);
  const squashString = (str) => (str.length > 1 ? str.length + str[0] : str[0]);

  let [output, nextStr] = ['', string];
  while (nextStr) {
    const ix = repeatedIndex(nextStr);
    const currentStr = nextStr.slice(0, ix + 1);
    nextStr = nextStr.slice(ix + 1);
    output += squashString(currentStr);
  }

  return output;
};

module.exports = encodeLine;
