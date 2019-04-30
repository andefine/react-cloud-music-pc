import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from '@/store'
import { getBanners, getPlaylists as getRecommendPlaylists } from '@/store/recommend/actions'

import 'normalize.css'
import '@/iconfont/iconfont.css'
import '@/styles/index.scss'

import Layout from '@/views/layout/layout'

store.dispatch(getBanners())
store.dispatch(getRecommendPlaylists())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout />
    </Router>
  </Provider>,
  document.getElementById('root')
)
