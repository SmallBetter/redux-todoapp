import React from 'react'
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


export default TodoItem