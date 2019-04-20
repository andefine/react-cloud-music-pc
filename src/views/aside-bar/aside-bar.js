import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './aside-bar.scss'

import AsideTitle from './aside-title/aside-title'
import AsideItem from './aside-item/aside-item'

class AsideBar extends Component {
  render () {
    const recommend = this.props.menus
    
    return (
      <aside className="aside-bar">
        <AsideTitle>{recommend.title}</AsideTitle>
        {
          recommend.list.map((item, index) =>
            <AsideItem
              key={index}
              iconClass={item.icon}
              text={item.title}
              active={this.props.location.pathname.includes(item.path)
              ? true : false}
              onClick={() => {this.props.history.push(`/${item.path}`)}}
            ></AsideItem>
          )
        }
      </aside>
    )
  }
}

export default withRouter(AsideBar)
