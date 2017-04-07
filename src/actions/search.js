import TYPE from './types'

export const searchTodo = search => ({
  type: TYPE.SEARCH.TODO,
  payload: { search }
})