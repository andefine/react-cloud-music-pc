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
            title: '发现音乐',
            icon: 'music',
            path: 'discover',
            component: Discover
          },
          {
            title: '私人FM',
            icon: 'FM',
            path: 'personal-fm',
            component: PersonalFm
          },
          {
            title: '视频',
            icon: 'video',
            path: 'video',
            component: Video
          },
          {
            title: '朋友',
            icon: 'friend',
            path: 'friend',
            component: Friend
          }
        ]
      }
    }
  }
  
  render () {
    // 进入改页面如果是根路径，直接重定向到 发现页
    if (this.props.location.pathname === '/') {
      this.props.history.replace('/discover')
    }
    
    return (
      <main className="main">
        <AsideBar menus={this.state.recommend}></AsideBar>
        {
          this.state.recommend.list.map((item, index) => 
            <Route
              key={index}
              path={`/${item.path}`}
              component={item.component}
            ></Route>
          )
        }
        <Route path="/" exact component={Discover}></Route>
      </main>
    )
  }
}

export default withRouter(Main)
