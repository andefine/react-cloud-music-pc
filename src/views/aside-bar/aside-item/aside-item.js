import React from 'react'
import { Route, Link } from 'react-router-dom'
import './aisde-item.scss'

export default function AsideItem ({ label, icon, to, exact }) {
  // render () {
  //   // const iconClass = `aside-item__i iconfont icon-${this.props.iconClass}`
    
  // }
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => (
        <Link to={to}>
          <div
            className={`aside-item${match ? '--active' : ''}`}
            // onClick={this.props.onClick}
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
