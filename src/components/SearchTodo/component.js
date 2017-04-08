import React, { PropTypes } from 'react'
import './assets/style.css'

const SearchTodo = ({ mySearchTodo }) => (
  <input className="Search" type="text" placeholder="Search" onChange={event => mySearchTodo(event.target.value)} />
  )

SearchTodo.propTypes = {
  mySearchTodo: PropTypes.func.isRequired
}


export default SearchTodo