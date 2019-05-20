import React, { Component } from 'react'
import ControlBtn from '@/components/control-btn/control-btn'
import './footer-player.scss'

class FooterPlay extends Component {
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
    const { isPlaying } = this.state
    
    return (
      <footer className="footer-play">
        <audio
          controls={false}
          preload='auto'
        >
          <source
            src="https://music.163.com/song/media/outer/url?id=524148143.mp3"
            type="audio/mpeg"
          />
        </audio>
    
        <div className="footer-play__left">
          <ControlBtn icon="pre-track"></ControlBtn>
          {
            isPlaying
            ? (
              <ControlBtn
                icon="pause"
                size="36"
                onClick={this.handlePause}
              ></ControlBtn>
            )
            : (
              <ControlBtn
                icon="play"
                size="36"
                onClick={this.handlePlay}
              ></ControlBtn>
            )
          }
          <ControlBtn icon="next-track"></ControlBtn>
        </div>
      </footer>
    )
  }  
} 

export default FooterPlay
