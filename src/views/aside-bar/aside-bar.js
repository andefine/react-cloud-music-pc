import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './aside-bar.scss'

import AsideTitle from './aside-title/aside-title'
import AsideItem from './aside-item/aside-item'

class AsideBar extends Component {
  handleSwitchMenu = (index, path) => {
    let pathname = ''
    if (index === 0) {
      pathname = '/'
    } else {
      pathname = `/${path}`
    }

    // 如果目标路径和当前路径相同，不用跳转
    if (pathname === this.props.location.pathname) {
      return
    }
    
    this.props.history.push(pathname)
  }
  
  render () {
    const recommend = this.props.menus
    
    return (
      <aside className="aside-bar">
        <AsideTitle>{recommend.title}</AsideTitle>
        {
          recommend.list.map(({ text, icon, path }, index) => {
            let active = false
            if (index === 0 && this.props.location.pathname === '/') {
              active = true
            }
            if (index !== 0 && this.props.location.pathname.includes(path)) {
              active = true
            }
            return (
              <AsideItem
                key={index}
                iconClass={icon}
                text={text}
                active={active}
                onClick={() => {this.handleSwitchMenu(index, path)}}
              ></AsideItem>
            )
          })
        }
      </aside>
    )
  }
}

export default withRouter(AsideBar)
