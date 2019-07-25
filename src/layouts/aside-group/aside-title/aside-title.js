import React, { Component } from 'react'
import './aside-title.scss'

export default class AsideTitle extends Component {
  render () {
    return (
      <div className="aside-title">{this.props.children}</div>
    )
  }
}
