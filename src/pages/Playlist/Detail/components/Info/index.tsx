import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { formatPlayCount } from '@/utils'
import { Playlist } from '@/types/Playlist'
import IconButton from '@/components/IconButton'
import { ThunkDispatchProps } from '@/store'
import * as playerActions from '@/store/player/actions'

import styles from './index.module.scss'

/** 格式化年月日，暂时自己实现，后续可以使用 moment 或者 dayjs */
const formatYearMonthDate = (stamp: number): string => {
  const instance = new Date(stamp)
  const year = instance.getFullYear()
  const month = instance.getMonth() + 1
  const dateNum = instance.getDate()

  return `${year}-${month
    .toString()
    .padStart(2, '0')}-${dateNum.toString().padStart(2, '0')}`
}

interface OwnProps {
  playlist: Playlist
}

type Props = OwnProps & ThunkDispatchProps

class Info extends React.PureComponent<Props> {
  handlePlayAllClick = () => {
    const { dispatch, playlist } = this.props
    dispatch(playerActions.addToPlayerList(playlist.tracks))
  }

  render() {
    const { playlist } = this.props
    const { creator } = playlist
    const counts = [
      {
        label: '歌曲数',
        num: playlist.trackCount,
      },
      {
        label: '播放数',
        num: formatPlayCount(playlist.playCount),
      },
    ]

    return (
      <div className={styles.root}>
        <img
          src={playlist.coverImgUrl}
          alt=""
          className={styles['cover-img']}
        />

        <div className={styles.right}>
          <div className={styles.title}>
            <span className={styles.title__tag}>歌单</span>
            <span className={styles.title__label}>{playlist.name}</span>
            <div className={styles.count}>
              {counts.map(item => (
                <div key={item.label} className={styles.count__item}>
                  <span className={styles['count__item-label']}>
                    {item.label}
                  </span>
                  <span className={styles['count__item-num']}>{item.num}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.creator}>
            <div className="">
              <img
                src={creator.avatarUrl}
                alt=""
                className={styles['creator__avatar-img']}
              />
            </div>
            <span className={styles.creator__nickname}>{creator.nickname}</span>
            <span className={styles['create-time']}>
              {formatYearMonthDate(playlist.createTime)}创建
            </span>
          </div>

          <div className={styles.btns}>
            <IconButton
              className={styles.btns__item}
              icon="btn-play"
              onClick={this.handlePlayAllClick}
            >
              播放全部
            </IconButton>
            <IconButton className={styles.btns__item} icon="yibaocun">
              已收藏{playlist.subscribedCount}
            </IconButton>
            <IconButton className={styles.btns__item} icon="share">
              分享{playlist.shareCount}
            </IconButton>
            <IconButton className={styles.btns__item} icon="download">
              下载全部
            </IconButton>
          </div>

          <div className={styles.tags}>
            标签：
            {playlist.tags.map((item, index) => (
              <React.Fragment key={index}>
                {index === 0 ? '' : ' / '}
                <Link className={styles.tags__item} to="">
                  {item}
                </Link>
              </React.Fragment>
            ))}
          </div>

          <div
            className={styles.desc}
            dangerouslySetInnerHTML={{
              __html:
                playlist.description &&
                playlist.description.replace(/\n/g, '<br>'),
            }}
          ></div>
        </div>
      </div>
    )
  }
}

export default connect()(Info)
