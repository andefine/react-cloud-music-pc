import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { numToTenThousand } from '@/utils'
import './playlist-card.scss'

const PlaylistCard = ({ id, name, picUrl, playCount, copywriter }) => (
  <div className="playlist-card">
    <Link
      className="playlist-card__img-link"
      to={`/playlist?id=${id}`}
    >
      <img className="playlist-card__img" src={picUrl} alt=""/>
      <div className="playlist-card__count">
        <i className="playlist-card__count-icon iconfont icon-earphone"></i>
        <span className="playlist-card__count-num">{numToTenThousand(playCount)}万</span>
      </div>
      <span className="playlist-card__copywriter">{copywriter}</span>
      <i className="playlist-card__play iconfont icon-play"></i>
    </Link>
    <div className="playlist-card__name">
      <Link to={`/playlist?id=${id}`}>{name}</Link>
    </div>
  </div>
)

PlaylistCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  picUrl: PropTypes.string.isRequired,
  playCount: PropTypes.number.isRequired,
  copywriter: PropTypes.string.isRequired
}

export default PlaylistCard
