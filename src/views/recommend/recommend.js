import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './recommend.scss'
import TopSwiper from '@/components/top-swiper/top-swiper'

function Recommend ({ banners }) {
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

Recommend.propTypes = {
  banners: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = ({ recommend }) => ({
  banners: recommend.banners
})

export default connect(
  mapStateToProps
)(Recommend)
