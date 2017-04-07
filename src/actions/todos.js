import TYPE from './types'

export const addTodo = text => ({
  type: TYPE.TODO.ADD,
  payload: { text }
})
export const toggleTodo = id => ({
  type: TYPE.TODO.TOGGLE,
  payload: { id }
})
export const removeTodo = id => ({
  type: TYPE.TODO.REMOVE,
  payload: { id }
})