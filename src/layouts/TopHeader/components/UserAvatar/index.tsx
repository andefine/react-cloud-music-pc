import React from 'react'
import { DispatchProp, connect } from 'react-redux'

import { RootState } from '@/store'
import { Profile } from '@/store/account/types'
import * as appActions from '@/store/app/actions'

import styles from './index.module.scss'

interface StateProps {
  profile: Partial<Profile>
}

interface OwnProps {}

interface State {
  isDropUserShow: boolean
}

type Props = StateProps & DispatchProp & OwnProps

class UserAvatar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      isDropUserShow: false,
    }
  }

  showDropUser = () => {
    if (!this.state.isDropUserShow) {
      this.setState({ isDropUserShow: true })
    }
  }

  render() {
    const { profile, dispatch } = this.props
    // const { isDropUserShow } = this.state
    const isLogged = Object.keys(profile).length > 0

    const { avatarUrl, nickname } = profile

    return isLogged ? (
      <div className={styles.root}>
        <img className={styles.avatar} src={avatarUrl} alt="" />
        <div className={styles.drop} onClick={this.showDropUser}>
          <span className={styles.username}>{nickname}</span>
          <div className={styles.triangle}></div>
        </div>
        {/* {isDropUserShow ? (
            <DropUser className="user-avatar__drop-modal"></DropUser>
          ) : null} */}
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

const mapStateToProps = ({ app }: RootState) => ({
  profile: app.profile,
})

export default connect(mapStateToProps)(UserAvatar)
