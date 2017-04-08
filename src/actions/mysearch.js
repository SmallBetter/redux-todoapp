import TYPE from './types'

export const mySearchTodo = search => ({
  type: TYPE.SEARCH.TODO,
  payload: { search }
})