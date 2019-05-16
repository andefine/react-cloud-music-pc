import React from 'react'
import { connect } from 'react-redux'
import './layout.scss'

import MainHeader from '@/views/main-header/main-header'
import Main from '@/views/main/main'

const Layout = ({ size }) => (
  <div className={`app--${size}`}>
    <MainHeader></MainHeader>
    <Main></Main>
  </div>
)

const mapStateToProps = ({ size }) => ({
  size
})

export default connect(
  mapStateToProps
)(Layout)
