import React, { PropTypes } from 'react'
import './assets/style.css'

const TodoItem = ({ id, text, finish, toggleTodo, removeTodo }) => {
  const finishColor = finish ? 'finish' : 'unfinish'

  return (
    <li>
      <span className={finishColor} onClick={() => toggleTodo(id)}>{text}</span>
      <button className="buttonkey" onClick={() => removeTodo(id)}>X</button>
    </li>
  )
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  finish: PropTypes.bool.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoItem