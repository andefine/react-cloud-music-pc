import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import AsideGroup from '@/layouts/AsideGroup'
import FooterPlayer from '@/layouts/FooterPlayer'

import Discover from '@/pages/Discover'
import PersonalFm from '@/pages/PersonalFm'
import Video from '@/pages/Video'
import Friend from '@/pages/Friend'
import LocalMusic from '@/pages/LocalMusic'
import Download from '@/pages/Download'

import './index.scss'

export interface IMenu {
  label: string
  icon: string
  path: string
  component: React.ComponentType<any>
}

interface IFirstMenu {
  title: string
  menus: IMenu[]
}

interface IState {
  recommendMenus: IFirstMenu
  myMusicMenus: IFirstMenu
}

class Main extends React.Component<{}, IState> {
  readonly state: IState = {
    recommendMenus: {
      title: '推荐',
      menus: [
        {
          label: '发现音乐',
          icon: 'music',
          path: '/discover',
          component: Discover,
        },
        {
          label: '私人FM',
          icon: 'FM',
          path: '/personal-fm',
          component: PersonalFm,
        },
        {
          label: '视频',
          icon: 'video',
          path: '/video',
          component: Video,
        },
        {
          label: '朋友',
          icon: 'friend',
          path: '/friend',
          component: Friend,
        },
      ],
    },
    myMusicMenus: {
      title: '我的音乐',
      menus: [
        {
          label: '本地音乐',
          icon: 'local-music',
          path: '/local-music',
          component: LocalMusic,
        },
        {
          label: '下载管理',
          icon: 'download',
          path: '/download',
          component: Download,
        },
      ],
    },
  }

  render() {
    const { recommendMenus, myMusicMenus } = this.state

    return (
      <main className="main">
        <div className="main__area">
          <div className="main__aside-bar">
            <AsideGroup
              className="main__aside-group"
              {...recommendMenus}
            ></AsideGroup>
            <AsideGroup
              className="main__aside-group"
              {...myMusicMenus}
            ></AsideGroup>
          </div>

          <Switch>
            <Redirect
              exact
              from="/"
              to={recommendMenus.menus[0].path}
            ></Redirect>
            {[...recommendMenus.menus, ...myMusicMenus.menus].map(
              (item, index) => {
                const { path, component } = item
                return (
                  <Route key={index} path={path} component={component}></Route>
                )
              },
            )}
          </Switch>
        </div>
        <FooterPlayer></FooterPlayer>
      </main>
    )
  }
}

export default Main
