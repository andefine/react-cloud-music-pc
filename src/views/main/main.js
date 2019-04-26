import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

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
    const recommend = this.state.recommend
    const { menus } = recommend
    return (
      <main className="main">
        <AsideBar menus={recommend}></AsideBar>
        <Switch>
          <Redirect exact from="/" to={menus[0].path}></Redirect>
          {
            menus.map(({ path, component }, index) => {
              return (
                <Route
                  key={index}
                  path={path}
                  component={component}
                ></Route>
              )
            })
          }
        </Switch>
      </main>
    )
  }
}

export default withRouter(Main)
