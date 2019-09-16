import React from 'react'
import { RouteComponentProps, Switch, Redirect, Route } from 'react-router-dom'

import DiscoverTab from './DiscoverTab'

import Recommend from '@/pages/Recommend'
import EmptyPage from '@/pages/EmptyPage'

import './index.scss'

export interface ITab {
  label: string
  path: string
  component?: React.ComponentType
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
        component: Recommend,
      },
      {
        label: '歌单',
        path: '/song-sheet',
      },
      {
        label: '主播电台',
        path: '/radio',
      },
      {
        label: '排行榜',
        path: '/ranking-list',
      },
      {
        label: '歌手',
        path: '/singer',
      },
      {
        label: '最新音乐',
        path: '/latest-music',
      },
    ],
  }

  render() {
    const { match } = this.props
    const { tabs } = this.state

    return (
      <div className="discover">
        <DiscoverTab tabs={tabs}></DiscoverTab>
        <div className="discover__content">
          <Switch>
            <Redirect
              exact
              from={match.url}
              to={`${match.url}${tabs[0].path}`}
            ></Redirect>
            {tabs.map((item, index) => {
              const { label, path, component } = item
              const pathToMatch = `${match.url}${path}`
              return component ? (
                <Route
                  key={index}
                  path={pathToMatch}
                  component={component}
                ></Route>
              ) : (
                <Route
                  key={index}
                  path={pathToMatch}
                  render={() => <EmptyPage text={label}></EmptyPage>}
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
