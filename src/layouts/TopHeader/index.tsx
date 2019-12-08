import React from 'react'

import Logo from './components/Logo'
import BackForward from './components/BackForward'
import Search from './components/Search'
import UserAvatar from './components/UserAvatar'
import Menu from './components/Menu'

import styles from './index.module.scss'

const TopHeader: React.FC<{}> = () => (
  <header className={styles.header}>
    <Logo></Logo>
    <BackForward className={styles.bf}></BackForward>
    <Search className={styles.search}></Search>
    <div className={styles['flex-grow']}></div>
    <UserAvatar></UserAvatar>
    <Menu></Menu>
  </header>
)

export default TopHeader
