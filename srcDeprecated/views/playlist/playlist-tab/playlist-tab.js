import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Search from '@/components/search/search'
import './playlist-tab.scss'

class PlaylistTab extends Component {
  render () {
    const { commentCount, tab, pathname } = this.props
    
    return (
      <div className="playlist-tab">
        <div className="playlist-tab__left">
          <Link
            className={'playlist-tab__link' + (!tab ? '--active' : '')}
            to={pathname}
            replace
          >歌曲列表</Link>
          <Link
            className={'playlist-tab__link' + (tab === 'comment' ? '--active' : '')}
            to={pathname + '?t=comment'}
            replace
          >评论({commentCount})</Link>
          <Link
            className={'playlist-tab__link' + (tab === 'subscriber' ? '--active' : '')}
            to={pathname + '?t=subscriber'}
            replace
          >收藏者</Link>
        </div>
    
        <Search
          className="playlist-tab__search"
          placeholder="搜索歌单音乐"
        ></Search>
      </div>
    )
  }
}

PlaylistTab.propTypes = {
  commentCount: PropTypes.number.isRequired
}

const mapStateToProps = ({ playlist: { playlistDetail } }) => ({
  commentCount: playlistDetail.commentCount
})

export default connect(
  mapStateToProps
)(PlaylistTab)
