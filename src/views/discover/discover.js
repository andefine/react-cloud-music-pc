import React, { Component } from 'react'
import { Switch, Redirect, Route, withRouter } from 'react-router-dom'

import './discover.scss'
import * as api from '@/api'

import DiscoverTab from './discover-tab/discover-tab'
import Recommend from '@/views/recommend/recommend'
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
          label: '个性推荐',
          // path: 'recommend',
          path: '/recommend',
          component: Recommend
        },
        {
          label: '歌单',
          path: '/song-sheet',
          component: SongSheet
        },
        {
          label: '主播电台',
          path: '/radio',
          component: Radio
        },
        {
          label: '排行榜',
          path: '/ranking-list',
          component: RankingList
        },
        {
          label: '歌手',
          path: '/singer',
          component: Singer
        },
        {
          label: '最新音乐',
          path: '/latest-music',
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
    const { match } = this.props
    const { tabs } = this.state
  
    return (
      <div className="discover">
        <DiscoverTab tabs={tabs}></DiscoverTab>
        <Switch>
          <Redirect exact from={match.url} to={`${match.url}${tabs[0].path}`}></Redirect>
          {
            tabs.map(({ path, component }, index) => {
              return (
                <Route
                  key={index}
                  path={`${match.url}${path}`}
                  component={component}
                ></Route>
              )
            })
          }
        </Switch>
      </div>
    )
  }
}

export default withRouter(Discover)
