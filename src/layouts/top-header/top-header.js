import React, { Component } from 'react'
import './top-header.scss'

import Logo from  './logo/logo'
import BackForward from './back-forward/back-forward'
import Search from './search/search'
import UserAvatar from './user-avatar/user-avatar'
import HeaderMenu from './header-menu/header-menu'

export default class HomeHeader extends Component {
  render () {
    return (
      <header className="top-header">
        <div className="top-header__left">
          <Logo></Logo>
          <BackForward className="top-header__bf"></BackForward>
          <Search className="top-header__search"></Search>
        </div>
        <div className="top-header__right">
          <UserAvatar></UserAvatar>
          <HeaderMenu className="top-header__menu"></HeaderMenu>
          
        </div>
      </header>
    )
  }
}
