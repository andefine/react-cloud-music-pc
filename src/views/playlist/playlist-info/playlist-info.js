// 歌单详情页，头部的信息部分
import React from 'react'
import './playlist-info.scss'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import IconButton from '@/components/icon-button/icon-button'

/**
 * 将个位数添零
 *
 * @param {*} num
 * @returns {String}
 */
const addZero = (num) => {
  if (num > 9) {
    return '' + num
  }
  return '0' + num
}

/**
 * 将时间戳生成 年月日 字符串。
 *
 * @param {*} stamp 时间戳
 * @returns {String} 年月日 字符串。格式 xxxx-xx-xx
 */
const formatYearMonthDate = (stamp) => {
  const date = new Date(stamp)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const dateNum = date.getDate()
  return `${year}-${addZero(month)}-${addZero(dateNum)}`
}

const PlaylistInfo = ({ playlist }) => {
  const {
    coverImgUrl,
    name,
    creator,
    createTime,
    tags,
    description
  } = playlist

  const { avatarUrl, nickname } = creator
  const arr = description.split('\n')
  console.log(arr)
  
  return (
    <div className="playlist-info">
      <img src={coverImgUrl} alt="" className="playlist-info__cover-img"/>

      <div className="playlist-info__right">

        <div className="playlist-info__title">
          <div className="playlist-info__title-tag">歌单</div>
          {name}
        </div>

        <div className="playlist-info__creator">
          <div className="playlist-info__avatar">
            <img src={avatarUrl} alt="" className="playlist-info__avatar-img"/>
          </div>
          <span className="playlist-info__nickname">{nickname}</span>
          <span className="playlist-info__create-time">
            {formatYearMonthDate(createTime)}创建
          </span>
        </div>

        <div className="playlist-info__btns">
          <IconButton icon="btn-play">播放全部</IconButton>
          <IconButton icon="yibaocun">已收藏</IconButton>
          <IconButton icon="share">分享</IconButton>
          <IconButton icon="download">下载全部</IconButton>
        </div>

        <div className="tags">
          标签： {
            tags.join('/')
          }
        </div>

        <div
          className="desc"
          // 这里的简介可能会出现换行的情况
          dangerouslySetInnerHTML={{ __html: `简介： ${description.replace(/\n/g, '<br>')}` }}
        ></div>

      </div>
      
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
      avatarUrl: PropTypes.string.isRequired,
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
