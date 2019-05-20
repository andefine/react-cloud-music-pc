import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import FooterPlayer from '@/components/footer-player/footer-player'
import AsideBar from '@/views/aside-bar/aside-bar'
import Discover from '@/views/discover/discover'
import PersonalFm from '@/views/personal-fm/personal-fm'
import Video from '@/views/video/video'
import Friend from '@/views/friend/friend'
import LocalMusic from '@/views/local-music/local-music'
import Download from '@/views/download/download'
import Like from '@/views/like/like'
import Playlist from '@/views/playlist/playlist'
import './main.scss'

class Main extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      asideTitles: [
        {
          label: '推荐',
          menuName: 'recommend'
        },
        {
          label: '我的音乐',
          menuName: 'myMusic'
        },
        {
          label: '创建的歌单',
          menuName: 'createdSongSheet'
        },
      ],

      recommendMenus: [
        {
          label: '发现音乐',
          icon: 'music',
          path: '/discover',
          component: Discover
        },
        {
          label: '私人FM',
          icon: 'FM',
          path: '/personal-fm',
          component: PersonalFm
        },
        {
          label: '视频',
          icon: 'video',
          path: '/video',
          component: Video
        },
        {
          label: '朋友',
          icon: 'friend',
          path: '/friend',
          component: Friend
        }
      ],
      myMusicMenus: [
        {
          label: '本地音乐',
          icon: 'local-music',
          path: '/local-music',
          component: LocalMusic
        },
        {
          label: '下载管理',
          icon: 'download',
          path: '/download',
          component: Download
        }
      ],
      createdSongSheetMenus: [
        {
          label: '我喜欢的音乐',
          icon: 'like',
          path: '/like',
          component: Like
        },
      ],

      // 推荐菜单
      recommend: {
        title: '推荐',
        menus: [
          {
            label: '发现音乐',
            icon: 'music',
            path: '/discover',
            component: Discover
          },
          {
            label: '私人FM',
            icon: 'FM',
            path: '/personal-fm',
            component: PersonalFm
          },
          {
            label: '视频',
            icon: 'video',
            path: '/video',
            component: Video
          },
          {
            label: '朋友',
            icon: 'friend',
            path: '/friend',
            component: Friend
          }
        ]
      }
    }
  }
  
  render () {
    const {
      asideTitles,
      recommendMenus,
      myMusicMenus,
      createdSongSheetMenus
    } = this.state

    return (
      <main className="main">
        <div className="main__area">
          <AsideBar
            className="main__aside-bar"
            titles={asideTitles}
            menus={{ recommendMenus, myMusicMenus, createdSongSheetMenus }}
          ></AsideBar>
          <Switch>
            <Redirect exact from="/" to={recommendMenus[0].path}></Redirect>
            {
              [
                ...recommendMenus,
                ...myMusicMenus,
                ...createdSongSheetMenus
              ].map(({ path, component }, index) => {
                return (
                  <Route
                    key={index}
                    path={path}
                    component={component}
                  ></Route>
                )
              })
            }
            <Route
              path="/playlist"
              component={Playlist}
            ></Route>
          </Switch>
        </div>
        <FooterPlayer></FooterPlayer>
      </main>
    )
  }
}

export default withRouter(Main)
