/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

// const getCommonCharacterCount = (s1, s2) => {
//   const getStingExcept = (str, ix) => str.slice(0, ix) + str.slice(ix + 1);

//   let compareTo = s2;
//   return [...s1].reduce((acc, l) => {
//     const ix = compareTo.indexOf(l);
//     if (ix > -1) {
//       compareTo = getStingExcept(compareTo, ix);
//       return acc + 1;
//     }
//     return acc;
//   }, 0);
// };

const getCommonCharacterCount = (s1, s2) => {
  const mutableString = {
    value: s2,
    delete(l) {
      const ix = this.findIndex(l);
      if (ix === -1) return false;
      this.value = this.getExcept(ix);
      return true;
    },
    findIndex(l) {
      return this.value.indexOf(l);
    },
    getExcept(ix) {
      return this.value.slice(0, ix) + this.value.slice(ix + 1);
    },
  };

  return [...s1].reduce((acc, l) => {
    const wasDeleted = mutableString.delete(l);
    return wasDeleted ? acc + 1 : acc;
  }, 0);
};

module.exports = getCommonCharacterCount;
