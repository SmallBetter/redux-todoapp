import { connect } from 'react-redux'
import TodoList from './component'

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter
})

export default connect(mapStateToProps)(TodoList)