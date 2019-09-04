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
        gender,
        eventCount,
        follows,
        followeds,
        signature
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

          <div className="user-info__relations">
            <div className="user-info__relations-item">
              <div className="user-info__relations-count">{eventCount}</div>
              <div className="user-info__relations-label">动态</div>
            </div>
            <div className="user-info__relations-item">
              <div className="user-info__relations-count">{follows}</div>
              <div className="user-info__relations-label">关注</div>
            </div>
            <div className="user-info__relations-item">
              <div className="user-info__relations-count">{followeds}</div>
              <div className="user-info__relations-label">粉丝</div>
            </div>
          </div>

          <div className="user-info__social">
            社交网络：
            <span className="user-info__social-content">nothing</span>
          </div>
          <div className="user-info__origin">
            所在地区：
            <span className="user-info__origin-content">nothing</span>
          </div>
          <div className="user-info__desc">
            个人介绍：
            <span className="user-info__desc-content">{signature || '暂无介绍'}</span>
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
