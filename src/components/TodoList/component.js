import React from 'react'
import TodoItem from '../TodoItem'

const TodoList = ({ todos, filter }) => (
  <ul>
    {todos
      .filter(todo => (todo.finish && filter.finish) || (!todo.finish && filter.unfinish))
      .map(todo => <TodoItem key={todo.id} {...todo} />)}
  </ul>
)


export default TodoList