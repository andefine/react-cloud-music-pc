import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPlaylistDetailIfNeeded } from '@/store/playlist/actions'
import PlaylistInfo from './playlist-info/playlist-info'
import PlaylistTab from './playlist-tab/playlist-tab'
import PlaylistTable from './playlist-table/playlist-table'
import './playlist.scss'

class Playlist extends Component {
  componentWillMount () {
    const { match: { params: { id } }, dispatch } = this.props
    dispatch(getPlaylistDetailIfNeeded(id))
  }
  
  render () {
    const { playlistDetail, match: { params: { id } } } = this.props
    
    // 有两种情况我们不能渲染任何东西，
    // 当然这两种情况都只存在于非常短暂的时间。
    // 1. 防止第一次进入渲染时，playlistDetail 啥都没有，
    //    playlistDetail 为空时，会渲染完整内容。
    // 2. 进入该路由时，与上次不一样，会短暂的显示上次
    //    显示的歌单，虽然没问题，但是体验吊差
    if (
      Object.keys(playlistDetail).length === 0
      || id !== (playlistDetail.id + '')
    ) {
      return <div className="">正在获取歌单详情...</div>
    }

    return (
      <div className="playlist">
        <PlaylistInfo></PlaylistInfo>
        <PlaylistTab></PlaylistTab>
        <PlaylistTable></PlaylistTable>
      </div>
    )
  }
}

const mapStateToProps = ({
  playlist: {
    playlistDetail
  }
}) => ({
  playlistDetail
})

export default withRouter(connect(
  mapStateToProps
)(Playlist))
