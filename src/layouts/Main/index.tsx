import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import AsideGroup from '@/layouts/AsideGroup'
import FooterPlayer from '@/layouts/FooterPlayer'

import Discover from '@/pages/Discover'
import PlaylistDetail from '@/pages/Playlist/Detail'
import EmptyPage from '@/pages/EmptyPage'

import './index.scss'

export interface IMenu {
  label: string
  icon: string
  path: string
  component?: React.ComponentType<any>
}

interface IFirstMenu {
  title: string
  menus: IMenu[]
}

interface IState {
  recommendMenus: IFirstMenu
  myMusicMenus: IFirstMenu
}

// 不在左侧菜单列表，但是需要在内容区域渲染的路由组件
const notAsideRoutes = [
  {
    label: '歌单详情',
    path: '/playlist/:id',
    component: PlaylistDetail,
  },
]

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
        },
        {
          label: '视频',
          icon: 'video',
          path: '/video',
        },
        {
          label: '朋友',
          icon: 'friend',
          path: '/friend',
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
        },
        {
          label: '下载管理',
          icon: 'download',
          path: '/download',
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
            {[
              ...recommendMenus.menus,
              ...myMusicMenus.menus,
              ...notAsideRoutes,
            ].map((item, index) => {
              const { label, path, component } = item
              return component ? (
                <Route key={index} path={path} component={component}></Route>
              ) : (
                <Route
                  key={index}
                  path={path}
                  render={() => <EmptyPage text={label}></EmptyPage>}
                ></Route>
              )
            })}
          </Switch>
        </div>
        <FooterPlayer></FooterPlayer>
      </main>
    )
  }
}

export default Main
