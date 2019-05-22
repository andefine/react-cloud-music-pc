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
    volume: 0.5
  }

  constructor (props) {
    super(props)

    this.state = {
      ratio: props.volume,
      lastRatio: props.volume
    }
  }

  handleDotMouseDown = (event) => {
    event.persist()
    this.offsetCenterOnDown = event.clientX - 
    (this.dot.getBoundingClientRect().left + this.dot.offsetWidth / 2)
    this.setState(state => ({
      lastRatio: state.ratio
    }))

    document.addEventListener('mousemove', this.onDocumentMouseMove)
    document.addEventListener('mouseup', this.onDocumentMouseUp)

    event.preventDefault()
    event.stopPropagation()
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

    this.changeRatioByLeft(left)
  }

  onDocumentMouseUp = () => {
    document.removeEventListener('mousemove', this.onDocumentMouseMove)
    document.removeEventListener('mouseup', this.onDocumentMouseUp)
  }

  handleSliderMouseDown = (event) => {
    const left = event.clientX - this.rail.getBoundingClientRect().left
    this.setState(state => ({
      lastRatio: state.ratio
    }))
    this.changeRatioByLeft(left)
  }

  handleIconClick = () => {
    const { ratio } = this.state
    if (ratio > 0) {
      this.setState(state => ({
        ratio: 0,
        lastRatio: state.ratio
      }), this.triggerChange)
    }
    if (ratio === 0) {
      this.setState(state => ({
        ratio: state.lastRatio,
        lastRatio: 0
      }), this.triggerChange)
    }
  }

  changeRatioByLeft = (left) => {
    this.setState({
      ratio: left / this.rail.offsetWidth
    }, this.triggerChange)
  }

  triggerChange = () => {
    const { onChange } = this.props
    onChange && onChange(this.state.ratio)
  }
  
  render () {
    const { className } = this.props
    const { ratio } = this.state
    
    return (
      <div className={`volume ${className}`}>
        <div className="volume__i">
          <i
            className={
              `volume__icon iconfont icon-${ratio === 0 ? 'mute' : 'volume'}`
            }
            onClick={this.handleIconClick}
          ></i>
        </div>
        <div
          className="volume-slider"
          onMouseDown={this.handleSliderMouseDown}
        >
          <div
            className="volume-slider__rail"
            ref={rail => this.rail = rail}
          ></div>
          <div
            className="volume-slider__track"
            style={{
              width: ratio * 100 + '%'
            }}
            ref={track => this.track = track}
          ></div>
          <div
            className="volume-slider__dot"
            style={{
              left: ratio * 100 + '%'
            }}
            ref={dot => this.dot = dot}
            onMouseDown={this.handleDotMouseDown}
          ></div>
        </div>
      </div>
    )
  }
}

export default Volume
