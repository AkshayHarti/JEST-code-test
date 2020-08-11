/**
 * This function returns the values of the input object as an array
 * @param {object} obj
 * @returns array of values
 */
function solution (obj) {
  if (obj == null) {
    return []
  }
  if (typeof obj !== 'object') {
    return [obj]
  }
  return Object.values(obj)
}

module.exports = solution
