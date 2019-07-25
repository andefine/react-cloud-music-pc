import React from 'react'
import { connect } from 'react-redux'
import LoginModal from '@/components/login-modal/login-modal'
import './app.scss'

import TopHeader from '@/layouts/top-header/top-header'
import Main from '@/layouts/main/main'

const App = ({ size }) => (
  <div className={`app--${size}`}>
    <TopHeader></TopHeader>
    <Main></Main>

    <LoginModal></LoginModal>
    
  </div>
)

const mapStateToProps = ({ size }) => ({
  size
})

export default connect(
  mapStateToProps
)(App)
