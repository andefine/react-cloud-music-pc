import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Avatar from '@/components/avatar/avatar'
import SignBtn from './sign-btn/sign-btn'
import DropItem from './drop-item/drop-item'
import './drop-user.scss'

class DropUser extends Component {
  static propTypes = {
    userDetail: PropTypes.shape({
      pcSign: PropTypes.bool.isRequired,
      level: PropTypes.number.isRequired
    }),
    profile: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      eventCount: PropTypes.number.isRequired,
      follows: PropTypes.number.isRequired,
      followeds: PropTypes.number.isRequired
    })
  }

  handleSign = () => {
    // TO DO 签到
    console.log('handleSign')
  }
  
  render () {
    const {
      className,
      userDetail: { level, pcSign },
      profile: {
        avatarUrl,
        nickname,
        eventCount,
        follows,
        followeds
      }
    } = this.props
    
    return (
      <div className={`drop-user ${className || ''}`}>
        <div className="drop-user__triangle"></div>
        
        <div className="drop-user__top">
          <Avatar
            className="drop-user__avatar"
            avatarUrl={avatarUrl}
          ></Avatar>
          <div className="drop-user__nickname">{nickname}</div>
          <SignBtn
            active={!pcSign}
            onClick={pcSign ? null : this.handleSign}
          ></SignBtn>
        </div>

        <div className="drop-user__count">
          <div className="drop-user__count-item">
            <span className="drop-user__count-num">{eventCount}</span>
            <span className="drop-user__count-label">动态</span>
          </div>
          <div className="drop-user__count-border"></div>
          <div className="drop-user__count-item">
            <span className="drop-user__count-num">{follows}</span>
            <span className="drop-user__count-label">关注</span>
          </div>
          <div className="drop-user__count-border"></div>
          <div className="drop-user__count-item">
            <span className="drop-user__count-num">{followeds}</span>
            <span className="drop-user__count-label">粉丝</span>
          </div>
        </div>

        <DropItem
          className="drop-user__item--first"
          icon="huiyuan"
          text="会员中心"
          label="未订购"
        ></DropItem>
        <DropItem
          className="drop-user__item"
          icon="dengji"
          text="等级"
          label={
            <span className="drop-user__item-level">
              Lv.{level}
            </span>
          }
        ></DropItem>
        <DropItem
          className="drop-user__item"
          icon="shangcheng"
          text="商城"
        ></DropItem>
        <DropItem
          className="drop-user__item--border"
          icon="shezhi"
          text="个人信息设置"
          label="未订购"
        ></DropItem>
        <DropItem
          className="drop-user__item--off"
          icon="off"
          text="退出登录"
          arrow={false}
        ></DropItem>
      </div>
    )
  }
}

const mapStateToProps = ({ user: { detail: userDetail, profile } }) => ({
  userDetail,
  profile
})

export default connect(
  mapStateToProps
)(DropUser)
