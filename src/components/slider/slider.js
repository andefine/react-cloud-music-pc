import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './slider.scss'

class Slider extends Component {
  static propTypes = {
    className: PropTypes.string,
    radius: PropTypes.bool,
    playProgress: PropTypes.number,
    loadProgress: PropTypes.number,
    onChange: PropTypes.func
  }

  static defaultProps = {
    className: '',
    radius: true,
    playProgress: 0,
    loadProgress: 0
  }

  handleDotMouseDown = (event) => {
    event.persist()
    this.offsetCenterOnDown = event.clientX
    - (this.dot.getBoundingClientRect().left + this.dot.offsetWidth / 2)
    document.addEventListener('mousemove', this.onDocumentMouseMove)
    document.addEventListener('mouseup', this.onDocumentMouseUp)
    event.preventDefault()
    event.stopPropagation()
  }

  onDocumentMouseMove = (event) => {
    let left = event.clientX
    - (this.rail.getBoundingClientRect().left + this.offsetCenterOnDown)

    if (left < 0) {
      left = 0
    }
    if (left > this.rail.offsetWidth) {
      left = this.rail.offsetWidth
    }

    this.leftPercentage = left / this.rail.offsetWidth
    this.dot.style.left = this.leftPercentage * 100 + '%'
    this.track.style.width = this.leftPercentage * 100 + '%'
  }

  onDocumentMouseUp = () => {
    const { onChange } = this.props
    onChange && onChange(this.leftPercentage)
    document.removeEventListener('mousemove', this.onDocumentMouseMove)
    document.removeEventListener('mouseup', this.onDocumentMouseUp)
  }

  handleSliderClick = (event) => {
    event.persist()
    let left = event.clientX - this.rail.getBoundingClientRect().left

    this.leftPercentage = left / this.rail.offsetWidth
    this.dot.style.left = this.leftPercentage * 100 + '%'
    this.track.style.width = this.leftPercentage * 100 + '%'

    const { onChange } = this.props
    onChange && onChange(this.leftPercentage)
  }
  
  render () {
    const {
      className,
      radius,
      playProgress,
      loadProgress
    } = this.props
    
    return (
      <div
        className={`slider${radius ? '--radius' : ''} ${className}`}
        onClick={this.handleSliderClick}
      >
        <div
          className="slider__rail"
          ref={rail => this.rail = rail}
          // onClick={this.handleRailClick}
        ></div>
        <div
          className="slider__progress"
          style={{
            width: loadProgress * 100 + '%'
          }}
        ></div>
        <div
          className="slider__track"
          style={{
            width: playProgress * 100 + '%'
          }}
          ref={track => this.track = track}
        ></div>
        <div
          className="slider__dot"
          style={{
            left: playProgress * 100 + '%'
          }}
          ref={dot => this.dot = dot}
          onMouseDown={this.handleDotMouseDown}
        ></div>
      </div>
    )
  }
}

export default Slider
