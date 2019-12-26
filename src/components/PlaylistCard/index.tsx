import React from 'react'
import { Link } from 'react-router-dom'

import { formatPlayCount } from '@/utils'

import styles from './index.module.scss'

interface IProps {
  className?: string
  id: number
  name: string
  picUrl: string
  playCount: number
  copywriter?: string
  trackCount?: number
}

const PlaylistCard: React.FC<IProps> = ({
  className = '',
  id,
  name,
  picUrl,
  playCount,
  copywriter = '',
  trackCount = -1,
}) => {
  const to = `/playlist/${id}`
  const hasCopywriter = !(copywriter === '')
  const hasTrackCount = !(trackCount === -1)

  return (
    <div className={`${styles.root} ${className}`}>
      <Link className={styles['img-link']} to={to}>
        <img className={styles.img} src={picUrl} alt={name} />
        <div
          className={hasCopywriter ? styles['count--copywriter'] : styles.count}
        >
          <i className={`iconfont icon-earphone ${styles.count__icon}`}></i>
          <span className={styles.count__num}>
            {formatPlayCount(playCount)}
          </span>
        </div>
        {hasCopywriter && (
          <span className={styles.copywriter}>{copywriter}</span>
        )}
        <i className={`iconfont icon-play-big ${styles.play}`}></i>
      </Link>
      <div className={styles.name}>
        <Link to={to}>{name}</Link>
        {hasTrackCount && (
          <div className={styles['track-count']}>{trackCount}首</div>
        )}
      </div>
    </div>
  )
}

export default PlaylistCard
