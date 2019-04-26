import React from 'react'
import { Route, Link } from 'react-router-dom'
import './aisde-item.scss'

export default function AsideItem ({ label, icon, to }) {
  return (
    <Route
      path={to}
      children={({ match }) => (
        <Link
          to={to}
          replace={!!match}
        >
          <div
            className={`aside-item${match ? '--active' : ''}`}
          >
            <i className={`aside-item__i iconfont icon-${icon}`}></i>
            <span className="aside-item__text">{label}</span>
          </div>
        </Link>
      )}
    >
    </Route>
  )
}
