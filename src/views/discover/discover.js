import React, { Component } from 'react'
import './discover.scss'

import DiscoverTab from './discover-tab/discover-tab'

export default class Discover extends Component {
  render () {
    return (
      <div className="discover">
        <DiscoverTab></DiscoverTab>
      </div>
    )
  }
}
