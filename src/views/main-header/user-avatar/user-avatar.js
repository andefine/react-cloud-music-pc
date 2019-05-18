import React, { Component, Fragment } from 'react'
import LoginModal from '@/components/login-modal/login-modal'
import './user-avatar.scss'

export default class extends Component {
  render () {
    return (
      <Fragment>
        <div className="user-avatar">
          <i className="user-avatar__i iconfont icon-default-avatar"></i>
          <div className="user-avatar__drop">
            <span className="user-avatar__username">未登录</span>
            <div className="user-avatar__triangle"></div>
          </div>
        </div>
        <LoginModal></LoginModal>
      </Fragment>
    )
  }
}
