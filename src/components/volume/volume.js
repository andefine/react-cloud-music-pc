import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './volume.scss'

class Volume extends Component {
  static propTypes = {
    className: PropTypes.string,
    volume: PropTypes.number,
    onChange: PropTypes.func
  }

  static defaultProps = {
    className: '',
    volume: 50
  }

  handleDotMouse = (event) => {
    event.persist()
    this.offsetCenterOnDown = event.clientX - 
    (this.dot.getBoundingClientRect().left + this.dot.offsetWidth / 2)
    document.addEventListener('mousemove', this.onDocumentMouseMove)
    document.addEventListener('mouseup', this.onDocumentMouseUp)
    event.preventDefault()
  }

  onDocumentMouseMove = (event) => {
    let left = event.clientX - 
    this.offsetCenterOnDown - this.rail.getBoundingClientRect().left

    if (left < 0) {
      left = 0
    }
    if (left > this.rail.offsetWidth) {
      left = this.rail.offsetWidth
    }

    this.leftPrecentage = left / this.rail.offsetWidth
    this.dot.style.left = this.leftPrecentage * 100 + '%'
    this.track.style.width = this.leftPrecentage * 100 + '%'

    const { onChange } = this.props
    onChange && onChange(this.leftPrecentage)
  }

  onDocumentMouseUp = () => {
    const { onChange } = this.props
    onChange && onChange(this.leftPrecentage)
    document.removeEventListener('mousemove', this.onDocumentMouseMove)
    document.removeEventListener('mouseup', this.onDocumentMouseUp)
  }
  
  render () {
    const { className, volume } = this.props
    
    return (
      <div className={`volume ${className}`}>
        <div className="volume__i">
          <i className="volume__icon iconfont icon-volume"></i>
        </div>
        <div className="volume-slider">
          <div
            className="volume-slider__rail"
            ref={rail => this.rail = rail}
          ></div>
          <div
            className="volume-slider__track"
            style={{
              width: volume + '%'
            }}
            ref={track => this.track = track}
          ></div>
          <div
            className="volume-slider__dot"
            style={{
              left: volume + '%'
            }}
            ref={dot => this.dot = dot}
            onMouseDown={this.handleDotMouse}
          ></div>
        </div>
      </div>
    )
  }
}

export default Volume
