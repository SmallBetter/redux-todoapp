import { connect } from 'react-redux'
import TodoFilter from './component'
import { filterTodo } from '../../actions/filter'

const mapDispatchToProps = { filterTodo }


export default connect(null, mapDispatchToProps)(TodoFilter)