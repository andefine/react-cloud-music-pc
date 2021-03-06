import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import './top-swiper.scss'

export default class TopSwiper extends Component {
  componentDidMount () {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        bulletClass: 'top-swiper__bullet',
        bulletActiveClass: 'top-swiper__bullet--active'
      },
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto'
    })
  }
  
  render () {
    const { list } = this.props
    
    return (
      <div className="top-swiper">
        <div className="swiper-container top-swiper__container">
          <div className="swiper-wrapper">
            {
              list.map((item, index) => 
                <div key={index} className="swiper-slide">
                  <img className="top-swiper__img" src={item.imageUrl} alt=""/>
                </div>
              )
            }
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}
