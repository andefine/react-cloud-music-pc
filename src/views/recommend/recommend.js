import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './recommend.scss'
import TopSwiper from '@/components/top-swiper/top-swiper'
import CardTitle from '@/components/card-list-title/card-list-title'
import RecommendPlaylist from './recommend-playlist/recommend-playlist'
import PrivateContent from './private-content/private-content'

function Recommend ({ banners }) {
  return (
    <div className="recommend">
      {
        banners.length > 0 ? (
          <TopSwiper list={banners}></TopSwiper>
        ) : (
          null
        )
      }
      <CardTitle title="推荐歌单"></CardTitle>
      <RecommendPlaylist></RecommendPlaylist>
      <CardTitle className="recommend__only-title" title="独家放送"></CardTitle>
      <PrivateContent></PrivateContent>
    </div>
  )
}

Recommend.propTypes = {
  banners: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = ({ recommend }) => ({
  banners: recommend.banners
})

export default connect(
  mapStateToProps
)(Recommend)
