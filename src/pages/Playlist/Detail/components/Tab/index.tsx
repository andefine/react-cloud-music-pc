import React from 'react'
import { Link } from 'react-router-dom'

import styles from './index.module.scss'

const Tab: React.FC<{
  tab: string
  pathname: string
}> = ({ tab, pathname }) => (
  <div className={styles.root}>
    <div className={styles.left}>
      <Link
        className={!tab ? styles['link--active'] : styles.link}
        to={pathname}
        replace
      >
        歌曲列表
      </Link>
      <Link
        className={tab === 'comment' ? styles['link--active'] : styles.link}
        to={pathname + '?t=comment'}
        replace
      >
        评论
      </Link>
      <Link
        className={tab === 'subscriber' ? styles['link--active'] : styles.link}
        to={pathname + '?t=subscriber'}
        replace
      >
        收藏者
      </Link>
    </div>
  </div>
)

export default Tab
