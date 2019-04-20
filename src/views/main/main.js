import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

import './main.scss'

import AsideBar from '@/views/aside-bar/aside-bar'
import Discover from '@/views/discover/discover'
import PersonalFm from '@/views/personal-fm/personal-fm'
import Video from '@/views/video/video'
import Friend from '@/views/friend/friend'

class Main extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      // 推荐菜单
      recommend: {
        title: '推荐',
        list: [
          {
            text: '发现音乐',
            icon: 'music',
            path: 'discover',
            component: Discover
          },
          {
            text: '私人FM',
            icon: 'FM',
            path: 'personal-fm',
            component: PersonalFm
          },
          {
            text: '视频',
            icon: 'video',
            path: 'video',
            component: Video
          },
          {
            text: '朋友',
            icon: 'friend',
            path: 'friend',
            component: Friend
          }
        ]
      }
    }
  }
  
  render () {
    return (
      <main className="main">
        <AsideBar menus={this.state.recommend}></AsideBar>
        {
          this.state.recommend.list.map(({ path, component }, index) => {
            let pathname = ``
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
      </main>
    )
  }
}

export default withRouter(Main)
