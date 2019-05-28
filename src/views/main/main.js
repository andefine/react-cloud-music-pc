import React, { Component } from 'react'
import { connect } from 'react-redux'
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
  state = {
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
        menuName: 'createdPlaylist'
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
    createdPlaylistMenus: [
      {
        label: '我喜欢的音乐',
        icon: 'like',
        path: '/like',
        component: Like
      }
    ]
  }

  componentDidMount () {
    // console.log('componentDidMount')
    // let { createdPlaylistMenus } = this.state
    // const { createdPlaylists, subscribedPlaylists } = this.props
    // createdPlaylistMenus = createdPlaylists.map((val, index) => {
    //   const { name } = val
    //   return {
    //     label: index === 0 ? '喜欢的音乐' : name,
    //     icon: 'music-list',
    //     path: '/playlist',
    //     component: Playlist
    //   }
    // })
    // debugger
    // this.setState({
    //   createdPlaylistMenus
    // })
  }
  
  render () {
    const {
      asideTitles,
      recommendMenus,
      myMusicMenus,
      createdPlaylistMenus
    } = this.state
    

    return (
      <main className="main">
        <div className="main__area">
          <AsideBar
            className="main__aside-bar"
            titles={asideTitles}
            menus={{ recommendMenus, myMusicMenus, createdPlaylistMenus }}
          ></AsideBar>
          <Switch>
            <Redirect exact from="/" to={recommendMenus[0].path}></Redirect>
            {
              [
                ...recommendMenus,
                ...myMusicMenus,
                createdPlaylistMenus[0]
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
