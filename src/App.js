import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import thunk from 'redux-thunk'
import { routerReducer } from 'react-router-redux'
import { Main, Detail, Search } from './containers'
import * as reducers from './reducers'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <Route path='contacts/:id' component={Detail} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
