import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import './aside-bar.scss'

import AsideTitle from './aside-title/aside-title'
import AsideItem from './aside-item/aside-item'

function AsideBar ({ titles, menus }) {
  return (
    <aside className="aside-bar">
      {
        titles.map(({ label, menuName }, index) => (
          <div className="aside-bar__part" key={index}>
            <AsideTitle>{label}</AsideTitle>
            {
              menus[`${menuName}Menus`].map(({ label, icon, path }, index) => {
                return (
                  <AsideItem
                    key={index}
                    icon={icon}
                    label={label}
                    to={path}
                  ></AsideItem>
                )
              })
            }
          </div>
        ))
      }
    </aside>
  )
}

AsideBar.propTypes = {
  titles: PropTypes.array.isRequired,
  menus: PropTypes.object.isRequired
}

export default withRouter(AsideBar)
