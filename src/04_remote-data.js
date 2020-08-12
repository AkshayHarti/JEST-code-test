const got = require('got')

/**
 *  This function fetches all todos from https://jsonplaceholder.typicode.com/todos
 *  and all users from https://jsonplaceholder.typicode.com/users
 *  The function returns how many todos each user has completed.
 *  Example: If user = [{ id: 1, username: 'Tom'}, { id: 2, username: 'Jerry'}]
 *  and todos = [{ id: 2, userId: 1, completed: true}]
 *  Then the function would output [{ username: 'Tom', completed: 0}, { username: 'Jerry', completed: 1}]
 */
async function solution () {
  const userList = await fetchData('users')
  const toDoList = await fetchData('todos')

  // Error fetching data
  if (!userList || !toDoList) {
    return null
  }

  const completedToDos = getCompletedUserToDos(toDoList)
  return userList
    .map(user => ({
      username: user.username,
      completed: completedToDos[user.id] || 0
    }))
}

/**
 *  This function aggregates completed ToDos per User and returns the same
 *  @param {Array<object>} toDoList the array of ToDos
 */
function getCompletedUserToDos (toDoList) {
  const completedToDos = {}

  for (const item of toDoList) {
    if (completedToDos[item.userId]) {
      completedToDos[item.userId] += item.completed
    } else {
      completedToDos[item.userId] = item.completed ? 1 : 0
    }
  }

  return completedToDos
}

/**
 *  This function fetches data from the url https://jsonplaceholder.typicode.com
 *  based on the object type passed in
 *  @param {string} requestType the type of data to fetch - e.g 'users'
 */
async function fetchData (requestType) {
  try {
    return await got(
      requestType,
      { prefixUrl: 'https://jsonplaceholder.typicode.com' })
      .json()
  } catch (error) {
    if (error.response && error.response.body) {
      console.log(error.response.body)
    } else {
      console.log(error)
    }
    return null
  }
}

module.exports = solution
