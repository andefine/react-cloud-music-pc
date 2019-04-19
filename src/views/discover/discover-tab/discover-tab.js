import React, { Component } from 'react'
import './discover-tab.scss'

export default class DiscoverTab extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tabs: [
        {
          title: '个性推荐',
          active: true
        },
        {
          title: '歌单'
        },
        {
          title: '主播电台'
        },
        {
          title: '排行榜'
        },
        {
          title: '歌手'
        },
        {
          title: '最新音乐'
        }
      ]
    }
  }
  
  render () {
    return (
      <div className="discover-tab">
        {this.state.tabs.map((item, index) => 
          <div
            key={index}
            className={`discover-tab-item${
              item.active ? '--active' : ''
            }`}
          >{item.title}</div>
        )}
      </div>
    )
  }
}
