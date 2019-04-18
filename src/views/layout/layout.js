import React, { Fragment } from 'react'
import MainHeader from '@/views/main-header/main-header'
import Main from '@/views/main/main'

export default function Layout() {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <Main></Main>
    </Fragment>
  )
}
