import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPlaylistComments } from '@/store/playlist/actions'
import './playlist-comment.scss'

class PlaylistCommment extends Component {
  componentWillMount () {
    const { dispatch, id } = this.props
    dispatch(getPlaylistComments(id))
  }
  
  render () {
    return (
      <div className="playlist-comment">
        歌单评论
      </div>
    )
  }
}

const mapStateToProps = ({ playlist: comments }) => ({
  comments
})

export default connect(
  
)(PlaylistCommment)
