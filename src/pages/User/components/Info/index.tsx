import React from 'react'
import { connect } from 'react-redux'

import { RootState } from '@/store'
import { UserDetail, UserProfile } from '@/types/User'

import IconButton from '@/components/IconButton'

import styles from './index.module.scss'

const GENDER_ICON = ['', 'male', 'female']

const mapStateToProps = ({ account }: RootState) => ({
  account,
})

type StateProps = ReturnType<typeof mapStateToProps>

interface OwnProps {
  detail: UserDetail
  profile: UserProfile
}

type Props = OwnProps & StateProps

const Info: React.FC<Props> = ({ detail, profile }) => {
  // const isSelf = profile.userId === account.profile.userId

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
    <div className={styles.root}>
      <div className={styles.avatar}>
        <img
          src={profile.avatarUrl}
          alt="头像"
          className={styles.avatar__img}
        />
      </div>

      <div className={styles.right}>
        <div className={styles.title}>
          <div className={styles.nickname}>{profile.nickname}</div>
          {GENDER_ICON[profile.gender] && (
            <i
              className={`iconfont icon-${GENDER_ICON[profile.gender]} ${
                styles.gender
              }`}
            ></i>
          )}
          <div className={styles.level}>Lv.{detail.level}</div>
          <div className={styles['flex-grow']}></div>
          <IconButton className={styles.title__btn} icon="xinfeng">
            发私信
          </IconButton>
          <IconButton className={styles['title__btn--subscribe']} icon="plus">
            关注
          </IconButton>
          <IconButton className={styles.title__btn} icon="xinfeng">
            · · ·
          </IconButton>
        </div>

        <div className={styles.count}>
          {counts.map(item => (
            <div className={styles.count__item} key={item.label}>
              <div className={styles['count__item-num']}>{item.num}</div>
              <div className={styles['count__item-label']}>{item.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.social}>
          社交网络：
          <span className={styles.social__content}>nothing</span>
        </div>
        <div className={styles.origin}>
          所在地区：
          <span className={styles.origin__content}>nothing</span>
        </div>
        <div className={styles.desc}>
          个人介绍：
          <span className={styles.desc__content}>
            {profile.signature || '暂无介绍'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Info)
