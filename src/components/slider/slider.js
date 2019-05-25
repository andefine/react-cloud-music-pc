import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './slider.scss'

class Slider extends Component {
  static propTypes = {
    className: PropTypes.string,
    radius: PropTypes.bool,
    timeProgress: PropTypes.number,
    progress: PropTypes.number
  }

  static defaultProps = {
    className: '',
    radius: true,
    timeProgress: 0,
    progress: 0
  }

  handleDotMouseDown = (event) => {
    event.persist()
    this.offsetCenterOnDown = event.clientX
    - (this.dot.getBoundingClientRect().left + this.dot.offsetWidth / 2)
    document.addEventListener('mousemove', this.onDocumentMouseMove)
    document.addEventListener('mouseup', this.onDocumentMouseUp)
    event.preventDefault()
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

    const leftPercentage = left / this.rail.offsetWidth * 100 + '%'
    this.dot.style.left = leftPercentage
    this.track.style.width = leftPercentage
  }

  onDocumentMouseUp = () => {
    document.removeEventListener('mousemove', this.onDocumentMouseMove)
    document.removeEventListener('mouseup', this.onDocumentMouseUp)
  }
  
  render () {
    const {
      className,
      radius,
      timeProgress,
      progress
    } = this.props
    
    return (
      <div className={`slider${radius ? '--radius' : ''} ${className}`}>
        <div
          className="slider__rail"
          ref={rail => this.rail = rail}
        ></div>
        <div
          className="slider__progress"
          style={{
            width: progress * 100 + '%'
          }}
        ></div>
        <div
          className="slider__track"
          ref={track => this.track = track}
        ></div>
        <div
          className="slider__dot"
          style={{
            left: timeProgress * 100 + '%'
          }}
          ref={dot => this.dot = dot}
          onMouseDown={this.handleDotMouseDown}
        ></div>
      </div>
    )
  }
}

export default Slider
