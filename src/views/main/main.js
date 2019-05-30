import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import AsideGroup from '@/components/aside-group/aside-group'
import FooterPlayer from '@/components/footer-player/footer-player'
import Discover from '@/views/discover/discover'
import PersonalFm from '@/views/personal-fm/personal-fm'
import Video from '@/views/video/video'
import Friend from '@/views/friend/friend'
import LocalMusic from '@/views/local-music/local-music'
import Download from '@/views/download/download'
import Playlist from '@/views/playlist/playlist'
import './main.scss'

class Main extends Component {
  state = {
    recommendMenus: {
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
    },
    myMusicMenus: {
      title: '我的音乐',
      menus: [
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
      ]
    }
  }

  computeCreatedMenus (createdPlaylists) {
    let menus = []
    if (createdPlaylists.length === 0) {
      menus.push({
        label: '我喜欢的音乐',
        icon: 'like',
        path: '/playlist/my-like'
      })
    }
    if (createdPlaylists.length > 0) {
      menus = createdPlaylists.map(({ name, id }, index) => {
        return index === 0 ? ({
          label: '我喜欢的音乐',
          icon: 'like',
          path: `/playlist/${id}`
        }) : ({
          label: name,
          icon: 'music-list',
          path: `/playlist/${id}`
        })
      })
    }

    return {
      title: '创建的歌单',
      menus
    }
  }

  computeSubscribedMenus (subscribedPlaylists) {
    const menus = subscribedPlaylists.map(({ name, id }) => ({
      label: name,
      icon: 'music-list',
      path: `/playlist/${id}`
    }))
    return {
      title: '收藏的歌单',
      menus
    }
  }
  
  render () {
    const {
      recommendMenus,
      myMusicMenus
    } = this.state
    const { createdPlaylists, subscribedPlaylists } = this.props

    const createdPlaylistMenus = this.computeCreatedMenus(createdPlaylists)
    const subscribedPlaylistMenus = this.computeSubscribedMenus(subscribedPlaylists)

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
            {
              createdPlaylistMenus.menus.length > 0 ? (
                <AsideGroup
                  className="main__aside-group"
                  {...createdPlaylistMenus}
                ></AsideGroup>
              ) : null
            }
            {
              subscribedPlaylistMenus.menus.length > 0 ? (
                <AsideGroup
                  className="main__aside-group"
                  {...subscribedPlaylistMenus}
                ></AsideGroup>
              ) : null
            }
          </div>

          <Switch>
            <Redirect exact from="/" to={recommendMenus.menus[0].path}></Redirect>
            {
              [
                ...recommendMenus.menus,
                ...myMusicMenus.menus
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
              path="/playlist/:id"
              component={Playlist}
            ></Route>
          </Switch>
        </div>
        <FooterPlayer className="main__footer-player"></FooterPlayer>
      </main>
    )
  }
}

const mapStateToProps = ({ user: { profile, playlists } }) => {
  const { userId } = profile
  const createdPlaylists = []
  const subscribedPlaylists = []

  playlists.forEach(val => {
    val.userId === userId ? (
      createdPlaylists.push(val)
    ) : (
      subscribedPlaylists.push(val)
    )
  })
  
  return {
    createdPlaylists,
    subscribedPlaylists
  }
}

export default withRouter(connect(
  mapStateToProps
)(Main))
