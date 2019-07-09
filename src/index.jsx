import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from './App/App'

import reducers from './main/reducer'

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.querySelector('#root'))

module.hot.accept()
