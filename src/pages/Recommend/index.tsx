import React from 'react'
import { connect } from 'react-redux'

import { RootState, ThunkDispatchProps } from '@/store'
import { loadData } from '@/store/recommend/thunks'
import { IBanner } from '@/store/recommend/types'

import LoadingText from '@/components/LoadingText'
import TopSwiper from '@/components/TopSwiper'
import CardListTitle from '@/components/CardListTitle'
import RecommendPlaylist from './RecommendPlaylist'
import PrivateContent from './PrivateContent'
import LatestMusic from './LatestMusic'

import './index.scss'

interface IPropsFromState {
  banners: IBanner[]
}

interface IProps {}

type Props = IPropsFromState & ThunkDispatchProps & IProps

class Recommend extends React.Component<Props> {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(loadData())
  }

  render() {
    const { banners } = this.props

    if (banners.length === 0) {
      return (
        <LoadingText
          className="recommend__loading"
          text="正在为你生成个性推荐..."
        ></LoadingText>
      )
    }

    return (
      <div className="recommend">
        <TopSwiper list={banners}></TopSwiper>
        <CardListTitle title="推荐歌单"></CardListTitle>
        <RecommendPlaylist></RecommendPlaylist>
        <CardListTitle
          className="recommend__only-title"
          title="独家放送"
        ></CardListTitle>
        <PrivateContent></PrivateContent>
        <CardListTitle title="最新音乐"></CardListTitle>
        <LatestMusic></LatestMusic>
      </div>
    )
  }
}

const mapStateToProps = ({ recommend }: RootState) => ({
  banners: recommend.banners,
})

export default connect(mapStateToProps)(Recommend)
