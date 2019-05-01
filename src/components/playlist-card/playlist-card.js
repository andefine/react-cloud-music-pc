import React from 'react'

import './playlist-card.scss'

const PlaylistCard = ({ name, picUrl }) => (
  <div className="playlist-card">
    <img className="playlist-card__img" src={picUrl} alt=""/>
  </div>
)

export default PlaylistCard
