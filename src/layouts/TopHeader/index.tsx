import React from 'react'

import Logo from './Logo'
import BackForward from './BackForward'
import Search from './Search'

import './index.scss'

class TopHeader extends React.Component<{}> {
  public render() {
    return (
      <header className="top-header">
        <div className="top-header__left">
          <Logo></Logo>
          <BackForward className="top-header__bf"></BackForward>
          <Search className="top-header__search"></Search>
        </div>
        <div className="top-header__right">
          {/* <UserAvatar></UserAvatar>
          <HeaderMenu className="top-header__menu"></HeaderMenu> */}
        </div>
      </header>
    )
  }
}

export default TopHeader
