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

  const array = []
  const objKeys = Object.keys(obj)
  const objValues = Object.values(obj)
  for(let i = 0; i < objValues.length; i++) {
    if(objKeys[i] !== null || objValues[i] !== null) {
      array.push(objValues(i))
    }
  }

  return array
}

module.exports = solution
