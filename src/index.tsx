import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '@/store'

import 'normalize.css'
import '@/iconfont/iconfont.css'
import '@/styles/index.scss'

import App from '@/layouts/App'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App></App>
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
)
