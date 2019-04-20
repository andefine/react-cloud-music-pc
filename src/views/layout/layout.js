import React, { Component, Fragment } from 'react'

import MainHeader from '@/views/main-header/main-header'
import Main from '@/views/main/main'

export default class Layout extends Component {
  render () {
    return (
      <Fragment>
        <MainHeader></MainHeader>
        <Main></Main>
      </Fragment>
    )
  }
}
