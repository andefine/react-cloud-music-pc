import React from 'react'
import { connect } from 'react-redux'

import { RootState, ThunkDispatchProps } from '@/store'
import * as appThunks from '@/store/app/thunks'
import * as appActions from '@/store/app/actions'

import styles from './index.module.scss'

const mapStateToProps = ({ app }: RootState) => ({
  isLoginShow: app.isLoginShow,
})

type StateProps = ReturnType<typeof mapStateToProps>

type Props = StateProps & ThunkDispatchProps

interface State {
  account: string
  pw: string
}

class LoginModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      account: '',
      pw: '',
    }
  }

  // 这里看 https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#forwardrefcreateref
  // private accountInput = React.createRef<HTMLInputElement>()
  // private pwInput = React.createRef<HTMLInputElement>()

  componentDidMount() {
    if (process.env.NODE_ENV === 'development') {
      this.setState({
        account: '18356639811',
        pw: '987654321',
      })
    }
  }

  handleLogin = async () => {
    // const account = this.accountInput.current!.value
    // const pw = this.pwInput.current!.value
    const { account, pw } = this.state

    if (!account || !pw) {
      return
    }

    const { dispatch } = this.props
    try {
      await dispatch(appThunks.loginByPhone(account, pw))
      dispatch(appActions.hideLoginModal())
    } catch (error) {}
  }

  render() {
    const { isLoginShow } = this.props
    const { account, pw } = this.state

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
              value={account}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                this.setState({ account: e.target.value })
              }
              onKeyDown={this.handleLogin}
            />
          </div>
          <div className={styles.pw}>
            <i className={`iconfont icon-lock ${styles.icon}`}></i>
            <input
              className={styles['pw-input']}
              type="password"
              placeholder="请输入密码"
              value={pw}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                this.setState({ pw: e.target.value })
              }
              onKeyDown={this.handleLogin}
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

export default connect(mapStateToProps)(LoginModal)
