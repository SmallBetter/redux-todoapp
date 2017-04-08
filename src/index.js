/* eslint-disable import/no-extraneous-dependencies,no-underscore-dangle,global-require */
import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { throttle, merge } from 'lodash'
import { loadState, saveState } from './utils/LocalStorage'
import { RouteMain } from './routes'
import rootReducer, { initialStore } from './store'

const preloadedState = merge(initialStore, loadState())
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(
    applyMiddleware(
      thunk
    )
  )
)

store.subscribe(throttle(() => {
  saveState({
    auth: store.getState().auth
  })
}, 1000))

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  )
}

render(RouteMain)
if (module.hot) {
  module.hot.accept('./routes', () => {
    render(require('./routes').RouteMain)
  })
  module.hot.accept('./store', () => {
    store.replaceReducer(require('./store').default)
  })
}