import React from 'react'
import PropTypes from 'prop-types'
import AsideTitle from './aside-title/aside-title'
import AsideItem from './aside-item/aside-item'
import './aside-group.scss'

const AsideGroup = ({ className, title, menus }) => (
  <div className={`aside-group ${className || ''}`}>
    <AsideTitle>{title}</AsideTitle>
    {
      menus.map(({ label, icon, path }, index) => (
        <AsideItem
          key={index}
          icon={icon}
          label={label}
          to={path}
        ></AsideItem>
      ))
    }
  </div>
)

AsideGroup.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  )
}

export default AsideGroup
