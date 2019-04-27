import React, { Component } from 'react'

import './recommend.scss' 

import TopSwiper from '@/components/top-swiper/top-swiper'
import * as api from '@/api'


export default class PersonalRecommend extends Component {
  constructor (props) {
    super(props)

    this.state = {
      banners: []
    }
  }
  
  async componentDidMount () {
    const { banners } = await api.getBanner()
    this.setState({
      banners
    })
  }
  
  render () {
    const { banners } = this.state
    
    return (
      <div className="recommend">
        {
          banners.length > 0 ? (
            <TopSwiper list={banners}></TopSwiper>
          ) : (
            null
          )
        }
      </div>
    )
  }
}
