import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './slider.scss'

class Slider extends Component {
  static propTypes = {
    className: PropTypes.string,
    radius: PropTypes.bool
  }
  
  render () {
    const {
      className = '',
      radius = true
    } = this.props
    
    return (
      <div className={`slider${radius ? '--radius' : ''} ${className}`}>
        <div className="slider__dot"></div>
      </div>
    )
  }
}

export default Slider
