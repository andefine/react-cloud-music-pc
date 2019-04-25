import React from 'react'
import { withRouter } from 'react-router-dom'

import './aside-bar.scss'

import AsideTitle from './aside-title/aside-title'
import AsideItem from './aside-item/aside-item'

function AsideBar ({ menus }) {
  return (
    <aside className="aside-bar">
      <AsideTitle>{menus.title}</AsideTitle>
      {
        menus.menus.map(({ label, icon, path, exact }, index) => {
          return (
            <AsideItem
              key={index}
              icon={icon}
              label={label}
              to={path}
              exact={exact}
            ></AsideItem>
          )
        })
      }
    </aside>
  )
}

export default withRouter(AsideBar)
