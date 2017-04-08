import React, { PropTypes } from 'react'
import TodoItem from '../TodoItem'

const TodoList = ({ todos, filter, mysearch }) => (
  <ul>
    {todos
        .filter(todo => todo.text.includes(mysearch.search))
        .filter(todo => (todo.finish && filter.finish) || (!todo.finish && filter.unfinish))
        .map(todo => <TodoItem key={todo.id} {...todo} />)}
  </ul>
  )

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    finish: PropTypes.bool.isRequired
  })
  ).isRequired,
  filter: PropTypes.shape({
    showFinish: PropTypes.bool.isRequired,
    showUnFinish: PropTypes.bool.isRequired
  }).isRequired,
  mysearch: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired
}

export default TodoList