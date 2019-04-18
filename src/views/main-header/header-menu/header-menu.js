import React, { Component } from 'react'
import './header-menu.scss'

export default class HeaderMenu extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      menus: [
        {
          icon: 'pifu',
          desc: '皮肤'
        },
        {
          icon: 'xinfeng',
          desc: '通知'
        },
        {
          icon: 'shezhi',
          desc: '设置'
        }
      ]
    }
  }
  
  render () {
    return (
      <div
        className={`header-menu ${this.props.className}`}
      >
        {this.state.menus.map((menu, index) => 
          <i
            className={`header-menu__i iconfont icon-${menu.icon}`}
            key={index}
          ></i>
        )}
      </div>
    )
  }
}
