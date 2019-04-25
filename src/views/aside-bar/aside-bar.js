import React from 'react'
import { withRouter } from 'react-router-dom'

import './aside-bar.scss'

import AsideTitle from './aside-title/aside-title'
import AsideItem from './aside-item/aside-item'

function AsideBar ({ menus }) {
  // handleSwitchMenu = (index, path) => {
  //   let pathname = ''
  //   if (index === 0) {
  //     pathname = '/'
  //   } else {
  //     pathname = `/${path}`
  //   }

  //   // 如果目标路径和当前路径相同，不用跳转
  //   if (pathname === this.props.location.pathname) {
  //     return
  //   }
    
  //   this.props.history.push(pathname)
  // }
  
  // render () {
  //   const { menus } = this.props
    
  // }
  return (
    <aside className="aside-bar">
      <AsideTitle>{menus.title}</AsideTitle>
      {
        menus.menus.map(({ label, icon, path, exact }, index) => {
          // let active = false
          // if (index === 0 && this.props.location.pathname === '/') {
          //   active = true
          // }
          // if (index !== 0 && this.props.location.pathname.includes(path)) {
          //   active = true
          // }
          return (
            <AsideItem
              key={index}
              icon={icon}
              label={label}
              to={path}
              exact={exact}
              // active={active}
              // onClick={() => {this.handleSwitchMenu(index, path)}}
            ></AsideItem>
          )
        })
      }
    </aside>
  )
}

export default withRouter(AsideBar)
