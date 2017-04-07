import { connect } from 'react-redux'
import TodoInput from './component'
import { addTodo } from '../../actions/todos'

const mapDispatchToProps = { addTodo }

export default connect(null, mapDispatchToProps)(TodoInput)