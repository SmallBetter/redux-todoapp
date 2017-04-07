import { initialStore } from '../store'

export default (search = initialStore.search, action) => {
  switch (action.type) {
    default: {
      return search
    }
  }
}