/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

const renameFiles = (namesArray) => {
  const counter = {};
  return namesArray.map((name) => {
    const output = name in counter ? `${name}(${counter[name]++})` : name;
    counter[output] = 1; // initiate, unique any way
    return output;
  });
};

module.exports = renameFiles;
