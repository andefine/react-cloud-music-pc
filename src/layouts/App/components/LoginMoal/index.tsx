import React from 'react'
import { connect, DispatchProp } from 'react-redux'

import { RootState } from '@/store'
import * as appActions from '@/store/app/actions'

import styles from './index.module.scss'

interface StateProps {
  isLoginShow: boolean
}

type Props = StateProps & DispatchProp

class LoginModal extends React.Component<Props> {
  // 这里看 https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#forwardrefcreateref
  private accountInput = React.createRef<HTMLInputElement>()
  private pwInput = React.createRef<HTMLInputElement>()

  handleLogin = async () => {
    console.dir(this.accountInput.current!.value)
    const account = this.accountInput.current!.value
    const pw = this.pwInput.current!.value

    if (!account || !pw) {
      return
    }

    const { dispatch } = this.props
    try {
      await dispatch(appActions.loginByPhone(account, pw))
    } catch (error) {}
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
