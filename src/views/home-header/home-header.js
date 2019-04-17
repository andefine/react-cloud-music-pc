import React, { Component } from 'react'
import './home-header.scss'

import Logo from  './logo/logo'
import BackForward from './back-forward/back-forward'
import Search from './search/search'
import UserAvatar from './user-avatar/user-avatar'
import HeaderMenu from './header-menu/header-menu'

export default class HomeHeader extends Component {
  render () {
    return (
      <header className="home-header">
        <div className="home-header__left">
          <Logo></Logo>
          <BackForward className="home-header__bf"></BackForward>
          <Search className="home-header__search"></Search>
        </div>
        <div className="home-header__right">
          <UserAvatar></UserAvatar>
          <HeaderMenu className="home-header__menu"></HeaderMenu>
        </div>
      </header>
    )
  }
}
