/**
 *  This function takes a finite string and returns
 *  the first non repeating unique character.
 *  Assume input string is all lowercase
 * @param {String} str
 */
function solution (str) {
  if (str == null) {
    return null
  }
  if (typeof str !== 'string') {
    throw new Error('Parameter should be a string')
  }

  const result = str
    .replace(/\s/g, '') // Remove whitespaces
    .split('')
    .find((char, _, charArray) =>
      charArray.indexOf(char) === charArray.lastIndexOf(char))

  return result || null
}

module.exports = solution
