// 歌单详情页，头部的信息部分
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './playlist-info.scss'
import IconButton from '@/components/icon-button/icon-button'
import { addZero, formatPlayCount } from '@/utils'

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

const PlaylistInfo = ({ playlistDetail }) => {
  const {
    coverImgUrl,
    name,
    trackCount,
    playCount,
    creator,
    createTime,
    subscribedCount,
    shareCount,
    tags,
    description
  } = playlistDetail

  const { avatarUrl, nickname } = creator
  
  return (
    <div className="playlist-info">
      <img src={coverImgUrl} alt="" className="playlist-info__cover-img"/>

      <div className="playlist-info__right">

        <div className="playlist-info__title">
          <span className="playlist-info__title-tag">歌单</span>
          <span className="playlist-info__title-label">{name}</span>
          <div className="playlist-info__count">
            <div className="playlist-info__count-item">
              <span className="playlist-info__count-label">歌曲数</span>
              <span className="playlist-info__count-num">
                {trackCount}
              </span>
            </div>
            <div className="playlist-info__count-item">
              <span className="playlist-info__count-label">播放数</span>
              <span className="playlist-info__count-num">
                {formatPlayCount(playCount)}
              </span>
            </div>
          </div>
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
          <IconButton
            className="playlist-info__btn-item"
            icon="btn-play"
          >播放全部</IconButton>
          <IconButton
            className="playlist-info__btn-item"
            icon="yibaocun"
          >已收藏({subscribedCount})</IconButton>
          <IconButton
            className="playlist-info__btn-item"
            icon="share"
          >分享({shareCount})</IconButton>
          <IconButton
            className="playlist-info__btn-item"
            icon="download"
          >下载全部</IconButton>
        </div>

        <div className="playlist-info__tags">
          标签： {
            tags.map((item, index) => {
              return (
                <Fragment key={index}>
                  {index === 0 ? '' : ' / '}
                  <Link
                    className="playlist-info__tags-item"
                    to=""
                  >{item}</Link>
                </Fragment>
              )
            })
          }
        </div>

        <div
          className="playlist-info__desc"
          // 这里的简介可能会出现换行的情况
          dangerouslySetInnerHTML={
            { __html: description && `简介： ${description.replace(/\n/g, '<br>')}` }
          }
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

const mapStateToProps = ({ playlist: { playlistDetail } }) => ({
  playlistDetail
})

export default connect(
  mapStateToProps
)(PlaylistInfo)
