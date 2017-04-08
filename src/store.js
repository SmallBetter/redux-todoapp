import { combineReducers } from 'redux'
import todos from './reducers/todos'
import filter from './reducers/filter'
import mysearch from './reducers/mysearch'

export const initialStore = {
  mysearch: {
    search: ''
  },
  filter: {
    finish: true,
    unfinish: true
  },
  todos: [
    {
      id: 1,
      text: 'List 1',
      finish: false
    },
    {
      id: 2,
      text: 'List 2',
      finish: true
    }
  ]
}

const rootReducer = combineReducers({
  todos,
  filter,
  mysearch
})

export default rootReducer