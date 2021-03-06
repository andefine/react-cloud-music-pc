import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { formatPlayCount } from '@/utils'
import './playlist-card.scss'

const PlaylistCard = ({
  className = '',
  id,
  name,
  picUrl,
  playCount,
  copywriter = '',
  trackCount = -1
} = {}) => {
  const to = `/playlist/${id}`
  const hasCopywriter = !(copywriter === '')
  const hasTrackCount = !(trackCount === -1)

  return (
    <div className={`playlist-card ${className}`}>
      <Link
        className="playlist-card__img-link"
        to={to}
      >
        <img className="playlist-card__img" src={picUrl} alt={name}/>
        <div
          className={`playlist-card__count${hasCopywriter ? '--copywriter' : ''}`}
        >
          <i className="playlist-card__count-icon iconfont icon-earphone"></i>
          <span className="playlist-card__count-num">{formatPlayCount(playCount)}</span>
        </div>
        {
          hasCopywriter ? (
            <span className="playlist-card__copywriter">{copywriter}</span>
          ) : (null)
        }
        <i className="playlist-card__play iconfont icon-play-big"></i>
      </Link>
      <div className="playlist-card__name">
        <Link to={to}>{name}</Link>
        {
          hasTrackCount ? (
            <div className="playlist-card__track-count">{trackCount}首</div>
          ) : (null)
        }
      </div>
    </div>
  )
}

PlaylistCard.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  picUrl: PropTypes.string.isRequired,
  playCount: PropTypes.number.isRequired,
  copywriter: PropTypes.string,
  trackCount: PropTypes.number
}

export default PlaylistCard
