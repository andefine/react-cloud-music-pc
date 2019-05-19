import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './search.scss'

export default class extends Component {
  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string
  }
  
  // constructor (props) {
  //   super(props)

  //   this.state = {
  //     placeholder: '搜索音乐，视频，歌词，电台'
  //   }
  // }
  
  render () {
    const { className, placeholder } = this.props
    
    return (
      <div
        className={ `search ${className || ''}` }
      >
        <input
          className="search__input"
          type="text"
          placeholder={placeholder}
        />
        <i className="search__i iconfont icon-search"></i>
      </div>
    )
  }
}
