const solution = require('./04_remote-data')

test('all users have been accounted for', async () => {
  // Arrange
  const expected = 10

  // Act
  const actual = await solution()

  // Assert
  expect(actual.length).toBe(expected)
})

test('returned object has a username and completed property', async () => {
  // Act
  const actual = await solution()

  // Assert
  expect(actual[0]).toHaveProperty('username')
  expect(actual[0]).toHaveProperty('completed')
})
