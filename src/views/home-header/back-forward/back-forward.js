import React, { Component } from 'react'
import './back-forward.scss'

export default class BackForward extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: {
        back: true,
        forward: false
      }
    }
  }
  
  render () {
    const backModifier = this.state.active.back ? '--active' : ''
    const forwardModifier = this.state.active.forward ? '--active' : ''
    
    return (
      <div className={this.props.className ? (`bf ${this.props.className}`) : 'bf'}>
        <div className="bf__back">
          <i className={`bf__back-icon${backModifier} iconfont icon-back`}></i>
        </div>
        <div className="bf__forward">
          <i className={`bf__forward-icon${forwardModifier} iconfont icon-back`}></i>
        </div>
      </div>
    )
  }
}
