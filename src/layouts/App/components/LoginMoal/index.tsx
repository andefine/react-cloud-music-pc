import React from 'react'
import { connect } from 'react-redux'

import { RootState } from '@/store/rootReducer'

import styles from './index.module.scss'

interface StateProps {
  isLoginShow: boolean
}

type Props = StateProps

class LoginModal extends React.Component<Props> {
  private accountInput = React.createRef<HTMLInputElement>()
  private pwInput = React.createRef<HTMLInputElement>()

  handleLogin = () => {
    console.dir(this.accountInput.current && this.accountInput.current.value)
  }

  render() {
    const { isLoginShow } = this.props

    if (!isLoginShow) {
      return null
    }

    return (
      <div className={styles.root}>
        <div className={styles['input-area']}>
          <div className={styles.account}>
            <i className={`iconfont icon-shouji ${styles.icon}`}></i>
            <input
              className={styles['account-input']}
              type="text"
              placeholder="请输入手机号"
              ref={this.accountInput}
            />
          </div>
          <div className={styles.pw}>
            <i className={`iconfont icon-lock ${styles.icon}`}></i>
            <input
              className={styles['pw-input']}
              type="password"
              placeholder="请输入密码"
              ref={this.pwInput}
            />
          </div>
        </div>
        <button className={styles.btn} onClick={this.handleLogin}>
          登录
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ app }: RootState) => ({
  isLoginShow: app.isLoginShow,
})

export default connect(mapStateToProps)(LoginModal)
