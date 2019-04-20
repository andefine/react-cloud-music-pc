import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import 'normalize.css'
import '@/iconfont/iconfont.css'
import '@/styles/index.scss'

import Layout from '@/views/layout/layout'

ReactDOM.render(
  <Router>
    <Layout />
  </Router>,
  document.getElementById('root')
)
