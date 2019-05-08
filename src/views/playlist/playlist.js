import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './playlist.scss'
import { getPlaylistDetailIfNeeded } from '@/store/playlist-detail/actions'

class Playlist extends Component {
  componentDidMount () {
    const { location, getPlaylist } = this.props
    const { search } = location
    const queryObj = new URLSearchParams(search)
    const id = queryObj.get('id')
    getPlaylist(id)
  }
  
  render () {
    const { isFetching } = this.props
    
    if (isFetching) {
      return <div>正在获取歌单详情...</div>
    }

    return (
      <div className="playlist">歌单详情页</div>
    )
  }
}

const mapStateToProps = ({ playlistDetail }) => {
  const { isFetching, data } = playlistDetail
  return {
    isFetching,
    playlist: data
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlaylist: (id) => {
    dispatch(getPlaylistDetailIfNeeded(id))
  }
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist))
