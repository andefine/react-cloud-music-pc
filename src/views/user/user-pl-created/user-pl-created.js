import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserPlTitle from '../user-pl-title/user-pl-title'
import './user-pl-created.scss'

class UserPlCreated extends Component {
  render () {
    const {
      isSelf,
      profile: {
        playlistCount
      }
    } = this.props
    
    return (
      <div className="user-pl-created">
        <UserPlTitle
          title={
            `${isSelf ? '我创建的歌单' : '歌单'} (${playlistCount})`
          }
        ></UserPlTitle>
      </div>
    )
  }
}

const mapStateToProps = ({
  account,
  user: {
    profile
  }
}) => {
  const isSelf = (profile && profile.userId) === (account.profile && account.profile.userId)

  return {
    isSelf,
    profile
  }
}

export default connect(
  mapStateToProps
)(UserPlCreated)
