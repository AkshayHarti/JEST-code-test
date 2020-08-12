const solution = require('./02_get-first-non-repeating-char')

test('Test 1 - "this is the string"', () => {
  expect(solution('this is the string')).toBe('e')
})

test('Test 2 - "persuit is a good place to work"', () => {
  expect(solution('persuit is a good place to work')).toBe('u')
})

test('Test 3 - "we have free coffee"', () => {
  expect(solution('we have free coffee')).toBe('w')
})

test('Test 4 - white space check - "hot doughnut"', () => {
  expect(solution('hot doughnut')).toBe('d')
})

test('Test 5 - no unique characters - "she sells shells"', () => {
  expect(solution('she sells shells')).toBeNull()
})

test('Test 6 - null value check', () => {
  expect(solution(null)).toBeNull()
})

test('Test 7 - should throw an error when called with an incorrect parameter', () => {
  // Arrange
  const input = ['a', 'b', 'c']
  const error = new Error('Parameter should be a string')

  // Assert
  expect(() => { solution(input) }).toThrow(error)
})
