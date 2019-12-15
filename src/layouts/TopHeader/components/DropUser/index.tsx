import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { RootState, ThunkDispatchProps } from '@/store'
import * as AppThunks from '@/store/app/thunks'

import Avatar from '@/components/Avatar'
import MenuItem from './MenuItem'

import styles from './index.module.scss'

const mapStateToProps = ({ app }: RootState) => ({
  profile: app.profile,
  detail: app.detail,
})

type StateProps = ReturnType<typeof mapStateToProps>

interface OwnProps {
  className?: string
}

type Props = StateProps & OwnProps & ThunkDispatchProps

class DropUser extends React.Component<Props> {
  handleSign = () => {
    console.log('签到')
  }

  handleLogout = () => {
    const { dispatch } = this.props
    dispatch(AppThunks.logout())
  }

  render() {
    const { className, profile, detail } = this.props
    const isSignActive = !detail.pcSign

    const counts = [
      {
        num: profile.eventCount,
        label: '动态',
      },
      {
        num: profile.follows,
        label: '关注',
      },
      {
        num: profile.followeds,
        label: '粉丝',
      },
    ]

    return (
      <div className={`${styles.root} ${className || ''}`}>
        <div className={styles.triangle}></div>

        <div className={styles.top}>
          <Link className={styles.top__account} to={`/user/${'123'}`}>
            <Avatar url={profile.avatarUrl}></Avatar>
            <div className={styles.top__nickname}>{profile.nickname}</div>
          </Link>
          <button
            className={
              isSignActive ? styles['sign-btn--active'] : styles['sign-btn']
            }
            onClick={isSignActive ? this.handleSign : undefined}
          >
            {isSignActive ? (
              <React.Fragment>
                <i
                  className={`iconfont icon-jinbi ${styles['sign-btn__icon']}`}
                ></i>
                {'签到'}
              </React.Fragment>
            ) : (
              '已签到'
            )}
          </button>
        </div>

        <div className={styles.count}>
          {counts.map((item, index) => (
            <div key={index} className={styles.count__item}>
              <span className={styles.count__num}>{item.num}</span>
              <span className={styles.count__label}>{item.label}</span>
            </div>
          ))}
        </div>

        <MenuItem
          className={styles['menu-item--first']}
          icon="huiyuan"
          text="会员中心"
        ></MenuItem>
        <MenuItem
          icon="dengji"
          text="等级"
          label={
            <span className={styles['menu-item__level-label']}>
              Lv.{detail.level}
            </span>
          }
        ></MenuItem>
        <MenuItem icon="shangcheng" text="商城"></MenuItem>
        <MenuItem
          className={styles['menu-item--border']}
          icon="shezhi"
          text="个人信息设置"
        ></MenuItem>
        <MenuItem
          className={styles['menu-item--off']}
          icon="off"
          text="退出登录"
          onItemClick={this.handleLogout}
        ></MenuItem>
      </div>
    )
  }
}

export default connect(mapStateToProps)(DropUser)
