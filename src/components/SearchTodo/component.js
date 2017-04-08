import React, { PropTypes } from 'react'

const SearchTodo = ({ mySearchTodo }) => (
  <input type="text" placeholder="Search" onChange={event => mySearchTodo(event.target.value)} />
  )

SearchTodo.propTypes = {
  mySearchTodo: PropTypes.func.isRequired
}


export default SearchTodo