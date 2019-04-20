import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './discover-tab.scss'

class DiscoverTab extends Component {
  handleSwitchTab = (index, path) => {
    let pathname = ''
    if (index === 0) {
      pathname = '/'
    } else {
      pathname = `/${path}`
    }

    // 如果目标路径和当前路径相同，无需跳转
    if (pathname === this.props.location.pathname) {
      return
    }
    
    this.props.history.push(pathname)
  }
  
  render () {
    return (
      <div className="discover-tab">
        {
          this.props.tabs.map(({ text, path }, index) => {
            let active = false
            if (index === 0 && this.props.location.pathname === '/') {
              active = true
            }
            if (index !== 0 && this.props.location.pathname.includes(path)) {
              active = true
            }
            return (
              <div
                key={index}
                className={`discover-tab-item${active ? '--active' : ''}`}
                onClick={() => {this.handleSwitchTab(index, path)}}
              >{text}</div>
            )
          })
        }
      </div>
    )
  }
}

export default withRouter(DiscoverTab)
