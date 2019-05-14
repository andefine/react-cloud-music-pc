import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Search from '@/components/search/search'
import './playlist-tab.scss'

const PlaylistTab = ({ commentCount }) => (
  <div className="playlist-tab">
    <div className="playlist-tab__left">
      <Link
        className="playlist-tab__link--active"
        to=""
      >歌曲列表</Link>
      <Link
        className="playlist-tab__link"
        to=""
      >评论({commentCount})</Link>
      <Link
        className="playlist-tab__link"
        to=""
      >收藏者</Link>
    </div>

    <Search
      className="playlist-tab__search"
      placeholder="搜索歌单音乐"
    ></Search>
  </div>
)

PlaylistTab.propTypes = {
  commentCount: PropTypes.number.isRequired
}

const mapStateToProps = ({ playlistDetail }) => ({
  commentCount: playlistDetail.data.commentCount
})

export default connect(
  mapStateToProps
)(PlaylistTab)
