import React, { Component } from 'react'
import './home-header.scss'

import Logo from  './logo/logo'
import BackForward from './back-forward/back-forward'
import Search from './search/search'

export default class HomeHeader extends Component {
  render () {
    return (
      <header className="home-header">
        <div className="home-header__left">
          <Logo></Logo>
          <BackForward className="home-header__bf"></BackForward>
          <Search className="home-header__search"></Search>
        </div>
        <div className="home-header__right"></div>
      </header>
    )
  }
}
