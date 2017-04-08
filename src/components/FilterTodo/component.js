import React, { PropTypes } from 'react'

const FilterTodo = ({ filterTodo }) => (
  <div>
    <button onClick={() => filterTodo(true, true)}>All</button>
    <button onClick={() => filterTodo(true, false)}>Finish</button>
    <button onClick={() => filterTodo(false, true)}>UnFinish</button>
  </div>
  )

FilterTodo.propTypes = {
  filterTodo: PropTypes.func.isRequired
}

export default FilterTodo