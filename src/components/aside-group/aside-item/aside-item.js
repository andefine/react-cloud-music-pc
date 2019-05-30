import React from 'react'
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './aisde-item.scss'

export default function AsideItem ({ label, icon, to }) {
  return (
    <Route
      path={to}
      children={({ match }) => (
        <Link
          className={`aside-item${match ? '--active' : ''}`}
          to={to}
          replace={!!match}
        >
          <i className={`aside-item__i iconfont icon-${icon}`}></i>
          <span className="aside-item__text">{label}</span>
        </Link>
      )}
    >
    </Route>
  )
}

AsideItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}
