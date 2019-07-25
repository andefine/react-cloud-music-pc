import React, { Component } from 'react'
import './search.scss'

export default class extends Component {
  constructor (props) {
    super(props)

    this.state = {
      placeholder: '搜索音乐，视频，歌词，电台'
    }
  }
  
  render () {
    return (
      <div
        className={ this.props.className ? `search ${this.props.className}` : 'search' }
      >
        <input
          className="search__input"
          type="text"
          placeholder={this.state.placeholder}
        />
        <i className="search__i iconfont icon-search"></i>
      </div>
    )
  }
}
