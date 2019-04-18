import React, { Component } from 'react'
import './aside-bar.scss'

import AsideTitle from './aside-title/aside-title'

export default class AsideBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      recommend: {
        title: '推荐',
        list: [
          {
            title: '发现音乐',
            icon: 'music'
          },
          {
            title: '私人FM',
            icon: 'FM'
          },
          {
            title: '视频',
            icon: 'video'
          },
          {
            title: '朋友',
            icon: 'friend'
          },
        ]
      }
    }
  }
  
  render () {
    return (
      <aside className="aside-bar">
        <AsideTitle>推荐</AsideTitle>
      </aside>
    )
  }
}
