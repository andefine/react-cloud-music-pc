// 歌单详情页，头部的信息部分
import React from 'react'
import './playlist-info.scss'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const PlaylistInfo = ({ playlist }) => {
  const {
    name
  } = playlist
  
  return (
    <div className="playlist-info">
      {name}
    </div>
  )
}

PlaylistInfo.propTypes = {
  playlist: PropTypes.shape({
    coverImgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    trackCount: PropTypes.number.isRequired,
    playCount: PropTypes.number.isRequired,
    creator: PropTypes.shape({
      nickname: PropTypes.string.isRequired
    }),
    createTime: PropTypes.number.isRequired,
    subscribedCount: PropTypes.number.isRequired,
    shareCount: PropTypes.number.isRequired,
    tags: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired
  })
}

const mapStateToProps = ({ playlistDetail }) => ({
  playlist: playlistDetail.data
})

export default connect(
  mapStateToProps
)(PlaylistInfo)
