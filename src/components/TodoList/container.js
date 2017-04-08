import { connect } from 'react-redux'
import TodoList from './component'

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter,
  mysearch: state.mysearch
})

export default connect(mapStateToProps)(TodoList)