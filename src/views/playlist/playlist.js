import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './playlist.scss'

// 对于一份歌单详情页，我们没必要把这份数据
// 放在 redux 中。每次进入某一个歌单详情页，
// 虽然不排除前后两次进入的是同一个歌单，
// 但是大部分情况下都是进入不同的歌单详情页，
// 所以我们没必要将当前显示的这一份歌单详情
// 保存到 redux 中，只需要在进入路由时，请求拿到
// 数据即可
import * as api from '@/api'

class Playlist extends Component {
  constructor (props) {
    super(props)
    this.state = {
      playlist: []
    }
  }
  
  async componentDidMount () {
    const { search } = this.props.location
    const query = new URLSearchParams(search)
    const id = query.get('id')

    const { playlist } = await api.getPlaylistDetail(id)
  }

  render () {
    const { playlist } = this.state

    if (playlist.length === 0) {

    }
    
    return (
      <div className="playlist">歌单详情页</div>
    )
  }
}

export default withRouter(Playlist)
