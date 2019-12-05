import React from 'react'

import { IProfile } from '@/store/account/types'

import styles from './index.module.scss'

interface Props {
  profile: IProfile
}

interface State {
  isDropUserShow: boolean
}

class UserAvatar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      isDropUserShow: false,
    }
  }

  render() {
    const { profile } = this.props
    const { isDropUserShow } = this.state
    const isLogged = Object.keys(profile).length > 0

    if (isLogged) {
      const { avatarUrl, nickname } = profile

      return (
        <div className="user-avatar">
          <img className="user-avatar__avatar" src={avatarUrl} alt="" />
          <div className="user-avatar__drop" onClick={this.showDropUser}>
            <span className="user-avatar__username">{nickname}</span>
            <div className="user-avatar__triangle"></div>
          </div>
          {/* {isDropUserShow ? (
            <DropUser className="user-avatar__drop-modal"></DropUser>
          ) : null} */}
        </div>
      )
    }
  }
}

export default UserAvatar
