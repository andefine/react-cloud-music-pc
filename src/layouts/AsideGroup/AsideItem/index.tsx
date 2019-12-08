import React from 'react'
import { Route, Link } from 'react-router-dom'

import styles from './index.module.scss'

interface IProps {
  label: string
  icon: string
  to: string
}

const AsideItem: React.FC<IProps> = ({ label, icon, to }) => {
  return (
    <Route
      path={to}
      children={({ match }) => (
        <Link
          className={match ? styles['root--active'] : styles.root}
          to={to}
          replace={!!match}
        >
          <i className={`iconfont icon-${icon}`}></i>
          <span className={styles.text}>{label}</span>
        </Link>
      )}
    ></Route>
  )
}

export default AsideItem
