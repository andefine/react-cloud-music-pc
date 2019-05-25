import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  changePlayManner,
  getSongsByIds
} from '@/store/playing-songs/actions'
import * as api from '@/api'
import { formatDurationTime } from '@/utils/time'
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
      isPlaying: true,
      curStamp: 0,
      timeProgress: 0,
      progress: 0,
      volume: 0.5
    }
  }

  componentWillMount () {
    const { dispatch } = this.props
    dispatch(getSongsByIds())
  }

  async componentDidMount () {
    const { curIndex, idsOfSongs } = this.props
    const {
      data: [
        { url: musicUrl }
      ]
    } = await api.getSongsUrl(idsOfSongs[curIndex])
    this.setState({
      musicUrl
    })
    this.source.src = musicUrl
    this.audio.load()

    this.audio.volume = 0.1
  }

  handleCanplayThrough = (event) => {
    this.audio.play()
    // event.persist()
    // setTimeout(() => {
    //   const load = this.audio.buffered.end(this.audio.buffered.length-1)
    //   console.log(load)
    //   const { curIndex, idsOfSongs, songsById } = this.props
    //   const { dt } = songsById[idsOfSongs[curIndex]]
    //   const progress = load * 1000 / dt
    //   this.setState({
    //     progress
    //   })
    // }, 2000)
  }

  handleProgress = (event) => {
    // if (this.audio.buffered.length < 1) return
    // const load = this.audio.buffered.end(this.audio.buffered.length-1)
    // console.log(load)
    // const { curIndex, idsOfSongs, songsById } = this.props
    // const { dt } = songsById[idsOfSongs[curIndex]]
    // const progress = load * 1000 / dt
    // this.setState({
    //   progress
    // })
  }

  handleTimeupdate = (event) => {
    event.persist()
    const { curIndex, idsOfSongs, songsById } = this.props
    const { dt } = songsById[idsOfSongs[curIndex]]
    const timeProgress = event.timeStamp / dt
    this.setState({
      curStamp: event.timeStamp,
      timeProgress
    })
  }

  handlePlay = async () => {
    await this.audio.play()
    this.setState({
      isPlaying: true
    })
  }

  handlePause = async () => {
    await this.audio.pause()
    this.setState({
      isPlaying: false
    })
  }

  handleMannerClick = () => {
    const { dispatch } = this.props
    dispatch(changePlayManner())
  }
  
  render () {
    const {
      className,
      playManner,
      curIndex,
      idsOfSongs,
      songsById
    } = this.props
    const { isPlaying, curStamp, timeProgress, progress, volume } = this.state

    const song = songsById[idsOfSongs[curIndex]]
    const durationStamp = song ? song.dt : 0

    return (
      <footer className={`footer-player ${className || ''}`}>
        <audio
          controls={false}
          ref={audio => this.audio = audio}
          onCanPlayThrough={this.handleCanplayThrough}
          onProgress={this.handleProgress}
          onTimeUpdate={this.handleTimeupdate}
        >
          <source
            type="audio/mpeg"
            ref={source => this.source = source}
          />
        </audio>
    
        <div className="footer-player__left">
          <ControlBtn icon="pre-track"></ControlBtn>
          {
            isPlaying ? 
            (
              <ControlBtn
                icon="pause"
                size="34"
                onClick={this.handlePause}
              ></ControlBtn>
            ) : 
            (
              <ControlBtn
                icon="play"
                size="34"
                onClick={this.handlePlay}
              ></ControlBtn>
            )
          }
          <ControlBtn icon="next-track"></ControlBtn>
        </div>

        <span className="footer-player__cur-time">
          {formatDurationTime(curStamp)}
        </span>
        <Slider
          className="footer-player__progress"
          timeProgress={timeProgress}
          progress={progress}
        ></Slider>
        <span className="footer-player__duration">
          {formatDurationTime(durationStamp)}
        </span>

        <Volume
          className="footer-player__volume"
          volume={volume}
          onChange={(vol) => {
            this.setState({
              volume: vol
            })
          }}
        ></Volume>

        <div className="footer-player__right">
          <i
            className={`footer-player__right-i iconfont icon-${playManner.toLowerCase()}`}
            onClick={this.handleMannerClick}
          ></i>
          <div className="footer-player__list-i">
            <i className="footer-player__list-i-icon iconfont icon-bofangliebiao"></i>
            <span className="footer-player__list-i-num">{idsOfSongs.length}</span>
          </div>
        </div>
      </footer>
    )
  }  
}

const mapStateToProps = ({
  playingSongs: {
    playManner,
    curIndex,
    idsOfSongs,
    songsById
  }
}) => ({
  playManner,
  curIndex,
  idsOfSongs,
  songsById
})

export default connect(
  mapStateToProps
)(FooterPlay)
