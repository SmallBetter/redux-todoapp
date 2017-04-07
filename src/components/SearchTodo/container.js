import { connect } from 'react-redux'
import { searchTodo } from '../../actions/search'
import SearchTodo from './component'

const mapDispatchToProps = { searchTodo }

export default connect(null, mapDispatchToProps)(SearchTodo)