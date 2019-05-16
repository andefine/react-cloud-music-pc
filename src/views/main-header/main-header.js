import React, { Component } from 'react'
import './main-header.scss'

import Logo from  './logo/logo'
import BackForward from './back-forward/back-forward'
import Search from './search/search'
import UserAvatar from './user-avatar/user-avatar'
import HeaderMenu from './header-menu/header-menu'

export default class HomeHeader extends Component {
  render () {
    return (
      <header className="main-header">
        <div className="main-header__left">
          <Logo></Logo>
          <BackForward className="main-header__bf"></BackForward>
          <Search className="main-header__search"></Search>
        </div>
        <div className="main-header__right">
          <UserAvatar></UserAvatar>
          <HeaderMenu className="main-header__menu"></HeaderMenu>
          
        </div>
      </header>
    )
  }
}
