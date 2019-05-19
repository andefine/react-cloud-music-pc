import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getRecommendData } from '@/store/recommend/actions'
import Loading from '@/components/loading/loading'
import TopSwiper from '@/components/top-swiper/top-swiper'
import CardTitle from '@/components/card-list-title/card-list-title'
import RecommendPlaylist from './recommend-playlist/recommend-playlist'
import PrivateContent from './private-content/private-content'
import LatestMusic from './latest-music/latest-music'
import './recommend.scss'

class Recommend extends Component {
  componentDidMount () {
    const { banners, dispatch } = this.props
    if (banners.length === 0) {
      dispatch(getRecommendData())
    }
  }
  
  render () {
    // return null
    const { banners } = this.props

    if (banners.length === 0) {
      return (
        <Loading
          className="recommend__loading"
          text="正在为你生成个性推荐..."
        ></Loading>
      )
    }
  
    return (
      <div className="recommend">
        <TopSwiper list={banners}></TopSwiper>
        <CardTitle title="推荐歌单"></CardTitle>
        <RecommendPlaylist></RecommendPlaylist>
        <CardTitle className="recommend__only-title" title="独家放送"></CardTitle>
        <PrivateContent></PrivateContent>
        <CardTitle title="最新音乐"></CardTitle>
        <LatestMusic></LatestMusic>
      </div>
    )
  }
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
