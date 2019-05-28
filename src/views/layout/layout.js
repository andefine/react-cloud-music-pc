import React from 'react'
import { connect } from 'react-redux'
import LoginModal from '@/components/login-modal/login-modal'
import './layout.scss'

import TopHeader from '@/views/top-header/top-header'
import Main from '@/views/main/main'

const Layout = ({ size }) => (
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
)(Layout)
