import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './playlist.scss'
import { getPlaylistDetailIfNeeded } from '@/store/playlist-detail/actions'
import PlaylistInfo from './playlist-info/playlist-info'

class Playlist extends Component {
  componentDidMount () {
    const { location, getPlaylist } = this.props
    const id = new URLSearchParams(location.search).get('id')
    getPlaylist(id)
  }
  
  render () {
    const { isFetching, playlist, location } = this.props

    if (isFetching) {
      return <div>正在获取歌单详情...</div>
    }
    
    // 有两种情况我们不能渲染任何东西，
    // 当然这两种情况都只存在于非常短暂的时间。
    // 1. 防止第一次进入渲染时，isFetching 为 false，
    //    playlist 为空时，会渲染完整内容。
    // 2. 进入该路由时，与上次不一样，会短暂的显示上次
    //    显示的歌单，虽然没问题，但是体验吊差
    const id = new URLSearchParams(location.search).get('id')
    if (
      Object.keys(playlist).length === 0
      || id !== (playlist.id + '')
    ) {
      return null
    }

    return (
      <div className="playlist">
        <PlaylistInfo></PlaylistInfo>
      </div>
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
  getPlaylist: (id) => dispatch(getPlaylistDetailIfNeeded(id))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist))
