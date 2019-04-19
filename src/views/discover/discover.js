import React, { Component } from 'react'
import './discover.scss'
import * as api from '@/api'

import DiscoverTab from './discover-tab/discover-tab'

export default class Discover extends Component {
  async componentDidMount () {
    const banner = await api.getBanner()
    console.log(banner)
  }
  
  render () {
    return (
      <div className="discover">
        <DiscoverTab></DiscoverTab>
      </div>
    )
  }
}
