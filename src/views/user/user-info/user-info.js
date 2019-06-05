import React, { Component } from 'react'
import { connect } from 'react-redux'
import IconButton from '@/components/icon-button/icon-button'
import './user-info.scss'

const getGenderIcon = (gender) => {
  switch (gender) {
    case 1:
      return 'male'
    case 2:
      return 'female'
    default:
      return ''
  }
}

class UserInfo extends Component {
  render () {
    const {
      detail: {
        level
      },
      profile: {
        avatarUrl,
        nickname,
        gender
      }
    } = this.props

    const genderIcon = getGenderIcon(gender)
    
    return (
      <div className="user-info">
        <div className="user-info__avatar">
          <img src={avatarUrl} alt=""/>
        </div>
        <div className="user-info__right">
          <div className="user-info__title">
            <div className="user-info__nickname">{nickname}</div>
            {
              genderIcon === '' ? (
                null
              ) : (
                <i className={`user-info__gender iconfont icon-${genderIcon}`}></i>
              )
            }
            <div className="user-info__level">Lv.{level}</div>
            <div className="user-info__title-empty">
            </div>
            <IconButton className="user-info__title-btn" icon="xinfeng">发私信</IconButton>
            <IconButton className="user-info__title-btn--subscribe" icon="plus">关注</IconButton>
            <IconButton className="user-info__title-btn">· · ·</IconButton>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({
  user: { detail, profile },
  account
}) => ({
  isSelf: profile.userId === account.profile.userId,
  detail,
  profile
})

export default connect(
  mapStateToProps
)(UserInfo)
