import React, { Component } from 'react'
import './aside-bar.scss'

import AsideTitle from './aside-title/aside-title'
import AsideItem from './aside-item/aside-item'

export default class AsideBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      recommend: {
        title: '推荐',
        list: [
          {
            title: '发现音乐',
            icon: 'music',
            active: true
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

  handleSwitch = (index) => {
    const list = this.state.recommend.list.map(cur => {
      return ({
        ...cur,
        active: false
      })
    })
    list[index].active = true
    this.setState({
      recommend: {
        ...this.state.recommend,
        list
      }
    })
  }
  
  render () {
    return (
      <aside className="aside-bar">
        <AsideTitle>{this.state.recommend.title}</AsideTitle>
        {this.state.recommend.list.map((item, index) =>
          <AsideItem
            key={index}
            iconClass={item.icon}
            text={item.title}
            active={item.active}
            onClick={this.handleSwitch.bind(this, index)}
          ></AsideItem>
        )}
      </aside>
    )
  }
}
