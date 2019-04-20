import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

import './discover.scss'
import * as api from '@/api'

import DiscoverTab from './discover-tab/discover-tab'
import PersonalRecommend from '@/views/personal-recommend/personal-recommend'
import SongSheet from '@/views/song-sheet/song-sheet'
import Radio from '@/views/radio/radio'
import RankingList from '@/views/ranking-list/ranking-list'
import Singer from '@/views/singer/singer'
import LatestMusic from '@/views/latest-music/latest-music'

class Discover extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tabs: [
        {
          text: '个性推荐',
          path: 'personal-recommend',
          component: PersonalRecommend
        },
        {
          text: '歌单',
          path: 'song-sheet',
          component: SongSheet
        },
        {
          text: '主播电台',
          path: 'radio',
          component: Radio
        },
        {
          text: '排行榜',
          path: 'ranking-list',
          component: RankingList
        },
        {
          text: '歌手',
          path: 'singer',
          component: Singer
        },
        {
          text: '最新音乐',
          path: 'latest-music',
          component: LatestMusic
        }
      ]
    }
  }
  
  async componentDidMount () {
    const banner = await api.getBanner()
    console.log(banner)
  }
  
  render () {
    return (
      <div className="discover">
        <DiscoverTab tabs={this.state.tabs}></DiscoverTab>
        {
          this.state.tabs.map(({ path, component }, index) => {
            let pathname = ''
            if (index !== 0) {
              pathname = `/${path}`
            }
            return (
              <Route
                key={index}
                path={pathname}
                component={component}
              ></Route>
            )
          })
        }
      </div>
    )
  }
}

export default withRouter(Discover)
