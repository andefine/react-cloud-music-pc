import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from '@/store'
import { loginStraight } from '@/store/account/actions'

import 'normalize.css'
import '@/iconfont/iconfont.css'
import '@/styles/index.scss'

import App from '@/layouts/app/app'

store.dispatch(loginStraight())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
