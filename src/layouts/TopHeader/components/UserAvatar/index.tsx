import React from 'react'
import { DispatchProp, connect } from 'react-redux'

import { RootState } from '@/store'
import { Profile } from '@/store/user/types'
import * as appActions from '@/store/app/actions'

import DropUser from '../DropUser'

import styles from './index.module.scss'

interface StateProps {
  profile: Partial<Profile>
}

interface State {
  isDropUserShow: boolean
}

type Props = StateProps & DispatchProp

class UserAvatar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      isDropUserShow: false,
    }
  }

  handleShowDropUser = () => {
    if (!this.state.isDropUserShow) {
      this.setState({ isDropUserShow: true })

      // 为了在打开用户下拉信息框时点击其他地方都能够关闭它，
      // 我们在文档上添加事件监听，记得关闭之后移除
      document.addEventListener('click', this.closeDropUser)
    }
  }

  closeDropUser = () => {
    this.setState({
      isDropUserShow: false,
    })
    document.removeEventListener('click', this.closeDropUser)
  }

  render() {
    const { profile, dispatch } = this.props
    const { isDropUserShow } = this.state
    const isLogged = Object.keys(profile).length > 0

    const { avatarUrl, nickname } = profile

    return isLogged ? (
      <div className={styles.root}>
        <img className={styles.avatar} src={avatarUrl} alt="" />
        <div className={styles.drop} onClick={this.handleShowDropUser}>
          <span className={styles.username}>{nickname}</span>
          <div className={styles.triangle}></div>
        </div>
        {isDropUserShow ? (
          <DropUser className={styles['drop-modal']}></DropUser>
        ) : null}
      </div>
    ) : (
      <div
        className={styles.root}
        onClick={() => dispatch(appActions.showLoginModal())}
      >
        <i
          className={`iconfont icon-default-avatar ${styles['default-icon']}`}
        ></i>
        <div className={styles.drop}>
          <span className={styles.username}>未登录</span>
          <div className={styles.triangle}></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ account }: RootState) => ({
  profile: account.profile,
})

export default connect(mapStateToProps)(UserAvatar)
