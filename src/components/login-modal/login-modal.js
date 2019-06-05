import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loginByPhone, loginStraight, hideLoginModal } from '@/store/account/actions'
import './login-modal.scss'

class LoginModal extends Component {
  static propTypes = {
    isLoginShow: PropTypes.bool.isRequired
  }

  handleLogin = async () => {
    const account = this.accountInput.value
    const pw = this.pwInput.value

    if (!account || !pw) {
      return
    }
    
    const { dispatch } = this.props
    try {
      await dispatch(loginByPhone(account, pw))
    } catch (err) {
      const { code, msg } = err.response.data
      if (code === 400) {
        console.log('账号不存在')
      }
      if (code === 502) {
        console.log(msg)
      }
      return
    }

    await dispatch(loginStraight())
    dispatch(hideLoginModal())
  }
  
  render () {
    const { isLoginShow } = this.props

    if (!isLoginShow) {
      return null
    }
    
    return (
      <div className="login">
        <div className="login__input-area">
          <div className="login__account">
            <i className="login__i iconfont icon-shouji"></i>
            <input
              className="login__account-input"
              type="text"
              placeholder="请输入手机号"
              ref={input => this.accountInput = input}
            />
          </div>
          <div className="login__pw">
            <i className="login__i iconfont icon-lock"></i>            
            <input
              className="login__pw-input"
              type="password"
              placeholder="请输入密码"
              ref={input => this.pwInput = input}
            />
          </div>
        </div>
        <button
          className="login__btn"
          onClick={this.handleLogin}
        >登录</button>
      </div>
    )
  }
}

const mapStateToProps = ({ account: { isLoginShow } }) => ({
  isLoginShow
})

export default connect(
  mapStateToProps
)(LoginModal)
