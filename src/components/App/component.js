import React from 'react'
import logo from './assets/logo.svg'
import './assets/style.css'
import TodoList from '../TodoList'
import TodoInput from '../TodoInput'
import FilterTodo from '../FilterTodo'
import SearchTodo from '../SearchTodo/component'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
      <SearchTodo />
    </div>
    <div className="App-intro">
      vCode Dev-Tools<br /><br />
      <TodoInput />
      <FilterTodo />
      <TodoList />
    </div>
  </div>
)

export default App
