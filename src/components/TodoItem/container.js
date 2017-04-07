import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../../actions/todos'
import TodoItem from './component'

const mapStateToProps = (state, props) => ({ ...props })
const mapDispatchToProps = { toggleTodo, removeTodo }


export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)