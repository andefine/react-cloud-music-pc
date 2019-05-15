import React from 'react'
import { connect } from 'react-redux'
import { addZero } from '@/utils'
import './playlist-table.scss'

const formatDurationTime = (stamp) => {
  const date = new Date(stamp)
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return `${addZero(minutes)}:${addZero(seconds)}`
}

const PlaylistTable = ({ tracks }) => (
  <table className="playlist-table">

    <thead>
      <tr>
        <th></th>
        <th>操作</th>
        <th>音乐标题</th>
        <th>歌手</th>
        <th>专辑</th>
        <th>时长</th>
      </tr>
    </thead>

    <tbody>
      {
        tracks.map((item, index) => {
          return (
            <tr key={item.id}>
              <td>{addZero(index)}</td>
              <td>
                <i className="playlist-table__like iconfont icon-like"></i>
                <i className="playlist-table__download iconfont icon-download"></i>
              </td>
              <td>{item.name}</td>
              <td>{item.ar[0].name}</td>
              <td>{item.al.name}</td>
              <td>{formatDurationTime(item.dt)}</td>
            </tr>
          )
        })
      }
    </tbody>
    
  </table>
)

const mapStateToProps = ({ playlistDetail }) => ({
  tracks: playlistDetail.data.tracks
})

export default connect(
  mapStateToProps
)(PlaylistTable)
