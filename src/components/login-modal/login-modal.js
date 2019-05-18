import React, { Component } from 'react'
import './login-modal.scss'

class LoginModal extends Component {
  render () {
    return (
      <div className="login">
        <div className="login__input-area">
          <div className="login__account">
            <i className="login__i iconfont icon-shouji"></i>
            <input
              className="login__account-input"
              type="text"
              placeholder="请输入手机号"
            />
          </div>
          <div className="login__pw">
            <i className="login__i iconfont icon-lock"></i>            
            <input
              className="login__pw-input"
              type="password"
              placeholder="请输入密码"
            />
          </div>
        </div>
        <button className="login__btn">登录</button>
      </div>
    )
  }
}

export default LoginModal
