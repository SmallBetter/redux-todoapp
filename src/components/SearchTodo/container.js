import { connect } from 'react-redux'
import SearchTodo from './component'
import { mySearchTodo } from '../../actions/mysearch'

const mapDispatchToProps = { mySearchTodo }


export default connect(null, mapDispatchToProps)(SearchTodo)