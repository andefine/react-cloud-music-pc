import React from 'react'
import PropTypes from 'prop-types'
import './latest-music-item.scss'

const LatestMusicItem = () => {
  return (
    <li className="latest-music-item"></li>
  )
}

LatestMusicItem.propTypes = {
  name: PropTypes.string.isRequired
}
