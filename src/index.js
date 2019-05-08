import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from '@/store'
import {
  getBanners,
  getPlaylists as getRecommendPlaylists,
  getPrivateContents,
  getLatestMusics
} from '@/store/recommend/actions'

import 'normalize.css'
import '@/iconfont/iconfont.css'
import '@/styles/index.scss'

import Layout from '@/views/layout/layout'

// store.dispatch(getBanners())
// store.dispatch(getRecommendPlaylists())
// store.dispatch(getPrivateContents())
// store.dispatch(getLatestMusics())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout />
    </Router>
  </Provider>,
  document.getElementById('root')
)
