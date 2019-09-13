import React from 'react'
import { RouteComponentProps, Switch, Redirect, Route } from 'react-router-dom'

import DiscoverTab from './DiscoverTab'

import Recommend from '@/pages/Recommend'
import SongSheet from '@/pages/SongSheet'
import Radio from '@/pages/Radio'
import RankingList from '@/pages/RankingList'
import Singer from '@/pages/Singer'
import LatestMusic from '@/pages/LatestMusic'

import './index.scss'

export interface ITab {
  label: string
  path: string
  component: React.ComponentType
}

interface IProps {}

type Props = IProps & RouteComponentProps

interface IState {
  tabs: ITab[]
}

class Discover extends React.Component<Props, IState> {
  readonly state: IState = {
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
  
  render() {
    const { match } = this.props
    const { tabs } = this.state
    
    return (
      <div className="discover">
        <DiscoverTab tabs={tabs}></DiscoverTab>
        <div className="discover__content">
          <Switch>
            <Redirect exact from={match.url} to={`${match.url}${tabs[0].path}`}></Redirect>
            {tabs.map((item, index) => {
              const { path, component } = item
              return (
                <Route
                  key={index}
                  path={`${match.url}${path}`}
                  component={component}
                ></Route>
              )
            })}
          </Switch>
        </div>
      </div>
    )
  }
}

export default Discover
