import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ControlBtn from '@/components/control-btn/control-btn'
import Slider from '@/components/slider/slider'
import './footer-player.scss'

class FooterPlay extends Component {
  static propTypes = {
    className: PropTypes.string
  }
  
  constructor (props) {
    super(props)

    this.state = {
      isPlaying: false
    }
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
    const { isPlaying } = this.state
    
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

        <span style={{ paddingRight: 10, width: 38 }}>00:12</span>
        <Slider className="footer-player__progress"></Slider>
        <span style={{ paddingLeft: 10, width: 38 }}>03:45</span>
      </footer>
    )
  }  
}

export default FooterPlay
