/**
 *  Returns an array based on the pageNumber and itemsPerPage from pageData
 * @param {number} pageNumber
 * @param {number} itemsPerPage
 * @param {Array<string>} pageData
 */
function solution (pageNumber, itemsPerPage, pageData) {
  if (!Number.isInteger(pageNumber) ||
    !Number.isInteger(itemsPerPage) || itemsPerPage <= 0 ||
    !Array.isArray(pageData)) {
    throw new Error('Invalid Parameters')
  }

  // Default to 1 as the start page
  const startPage = (pageNumber > 0) ? pageNumber : 1
  const startIndex = (startPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  // Page out of array bounds
  if (startIndex > pageData.length - 1) {
    return null
  }

  return pageData.slice(startIndex, endIndex)
}

const data = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

module.exports = { solution, data }
