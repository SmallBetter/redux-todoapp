import React from 'react'

const TodoItem = ({ filterTodo }) => (
  <div>
    <button onClick={() => filterTodo(true, true)}>All</button>
    <button onClick={() => filterTodo(true, false)}>Finish</button>
    <button onClick={() => filterTodo(false, true)}>UnFinish</button>
  </div>
  )


export default TodoItem