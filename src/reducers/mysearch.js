import { initialStore } from '../store'
import TYPE from '../actions/types'

export default (mysearch = initialStore.mysearch, action) => {
  switch (action.type) {
    case TYPE.SEARCH.TODO: {
      return {
        search: action.payload.search
      }
    }
    default: {
      return mysearch
    }
  }
}