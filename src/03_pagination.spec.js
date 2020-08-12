const { solution, data } = require('./03_pagination')

test('Test 1 - page 1, 5 items per page', () => {
  // Arrange
  const expected = ['a', 'b', 'c', 'd', 'e']

  // Act
  const actual = solution(1, 5, data)

  // Assert
  expect(actual).toEqual(expected)
})

test('Test 2 - page 2, 10 items per page', () => {
  // Arrange
  const expected = ['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't']

  // Act
  const actual = solution(2, 10, data)

  // Assert
  expect(actual).toEqual(expected)
})

test('Test 3 - page 3, 10 items per page', () => {
  // Arrange
  const expected = ['u', 'v', 'w', 'x', 'y', 'z']
  // Act
  const actual = solution(3, 10, data)
  // Assert
  expect(actual).toEqual(expected)
})

test('Test 4 - page 9, 3 items per page', () => {
  // Arrange
  const expected = ['y', 'z']
  // Act
  const actual = solution(9, 3, data)
  // Assert
  expect(actual).toEqual(expected)
})

test('Test 5 - page 2, 25 items per page', () => {
  // Arrange
  const expected = ['z']
  // Act
  const actual = solution(2, 25, data)
  // Assert
  expect(actual).toEqual(expected)
})

test('Test 6 - page 4, 10 items per page', () => {
  // Arrange
  const expected = null
  // Act
  const actual = solution(4, 10, data)
  // Assert
  expect(actual).toEqual(expected)
})

test('Test 7 - page 0, 5 items per page', () => {
  // Arrange
  const expected = ['a', 'b', 'c', 'd', 'e']
  // Act
  const actual = solution(0, 5, data)
  // Assert
  expect(actual).toEqual(expected)
})

test('Test 8 - page -1, 5 items per page', () => {
  // Arrange
  const expected = ['a', 'b', 'c', 'd', 'e']
  // Act
  const actual = solution(-1, 5, data)
  // Assert
  expect(actual).toEqual(expected)
})

test('Test 9 - page 1, 100 items per page', () => {
  // Arrange
  const expected = data
  // Act
  const actual = solution(1, 100, data)
  // Assert
  expect(actual).toEqual(expected)
})

test('Test 10 - should throw an error on 0 items per page', () => {
  // Arrange
  const expected = new Error('Invalid Parameters')
  // Assert
  expect(() => { solution(2, 0, data) }).toThrow(expected)
})

test('Test 11 - should throw an error if array is not provided', () => {
  // Arrange
  const expected = new Error('Invalid Parameters')
  // Assert
  expect(() => { solution(2, 0, null) }).toThrow(expected)
})

test('Test 12 - should return null for empty array', () => {
  // Arrange
  const expected = null
  // Act
  const actual = solution(-1, 5, [])
  // Assert
  expect(actual).toEqual(expected)
})
