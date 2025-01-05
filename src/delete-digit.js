const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = -Infinity;
  const length = `${n}`.length;
  for (let i = 0; i < length; i++) {
    let newOne = +`${n}`.split('').filter((_, idx) => idx != i).join('')
    if (max < newOne) {
      max = newOne;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
