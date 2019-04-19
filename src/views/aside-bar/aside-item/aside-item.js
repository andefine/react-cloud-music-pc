import React, { Component } from 'react'
import './aisde-item.scss'

export default class AsideItem extends Component {
  render () {
    const iconClass = `aside-item__i iconfont icon-${this.props.iconClass}`
    
    return (
      <div
        className={`aside-item${this.props.active ? '--active' : ''}`}
        onClick={this.props.onClick}
      >
        <i className={iconClass}></i>
        <span className="aside-item__text">{this.props.text}</span>
      </div>
    )
  }
}
