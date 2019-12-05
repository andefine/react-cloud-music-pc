import React from 'react'

import Logo from './Logo'
import BackForward from './BackForward'
import Search from './Search'

import styles from './index.module.scss'

const TopHeader: React.FC<{}> = () => (
  <header className={styles.header}>
    <Logo></Logo>
    <BackForward className={styles.bf}></BackForward>
    <Search className={styles.search}></Search>
    <div className={styles['flex-grow']}></div>
    {/* <div className={styles.left}>
    </div>
    <div className={styles.right}>
      <UserAvatar></UserAvatar>
          <HeaderMenu className="top-header__menu"></HeaderMenu>
    </div> */}
  </header>
)

export default TopHeader
