import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import { routerReducer } from 'react-router-redux'
import { Main, Detail, Search, ContactForm } from './containers'
import * as reducers from './reducers'
import {reducer as formReducer} from 'redux-form';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
  form: formReducer
})

const store = createStore(
  reducer
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <Route path='contacts/:id' component={Detail} />
        <Route path='contacts/:id/edit' component={ContactForm} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
