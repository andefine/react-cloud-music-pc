import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ControlBtn from '@/components/control-btn/control-btn'
import Slider from '@/components/slider/slider'
import Volume from '@/components/volume/volume'
import './footer-player.scss'

class FooterPlay extends Component {
  static propTypes = {
    className: PropTypes.string
  }
  
  constructor (props) {
    super(props)

    this.state = {
      isPlaying: false,
      progress: 0,
      volume: 0.5
    }
  }

  componentDidMount () {
    const timer = setInterval(() => {
      let { progress } = this.state
      progress += 0.003
      if (progress >= 1) {
        progress = 1
        clearInterval(timer)
      }
      this.setState({
        progress
      })
    }, 100);
  }

  handlePlay = () => {
    this.setState({
      isPlaying: true
    })
  }

  handlePause = () => {
    this.setState({
      isPlaying: false
    })
  }
  
  render () {
    const { className } = this.props
    const { isPlaying, progress, volume } = this.state
    
    return (
      <footer className={`footer-player ${className || ''}`}>
        <audio
          controls={false}
          preload='auto'
        >
          <source
            src="https://music.163.com/song/media/outer/url?id=524148143.mp3"
            type="audio/mpeg"
          />
        </audio>
    
        <div className="footer-player__left">
          <ControlBtn icon="pre-track"></ControlBtn>
          {
            isPlaying
            ? (
              <ControlBtn
                icon="pause"
                size="34"
                onClick={this.handlePause}
              ></ControlBtn>
            )
            : (
              <ControlBtn
                icon="play"
                size="34"
                onClick={this.handlePlay}
              ></ControlBtn>
            )
          }
          <ControlBtn icon="next-track"></ControlBtn>
        </div>

        <span className="footer-player__cur-time">00:12</span>
        <Slider
          className="footer-player__progress"
          progress={progress}
        ></Slider>
        <span className="footer-player__duration">03:45</span>
        <Volume
          className="footer-player__volume"
          volume={volume}
          onChange={(vol) => {
            this.setState({
              volume: vol
            })
          }}
        ></Volume>
      </footer>
    )
  }  
}

export default FooterPlay
