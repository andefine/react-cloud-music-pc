import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  changePlayManner,
  getSongsByIds,
  autoToNext
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
      playProgress: 0,
      loadProgress: 0,
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
    fetch(musicUrl)

    try {
      this.audio.load()
    } catch (err) {
      console.log(err)
    }

    this.audio.volume = 0.1
  }

  handleCanplayThrough = async (event) => {
    try {
      await this.audio.play()
    } catch (err) {
      console.log(err)
      return
    }

    this.audio.addEventListener('timeupdate', this.onTimeUpdate)
    // event.persist()
    // setTimeout(() => {
    //   const load = this.audio.buffered.end(this.audio.buffered.length-1)
    //   console.log(load)
    //   const { curIndex, idsOfSongs, songsById } = this.props
    //   const { dt } = songsById[idsOfSongs[curIndex]]
    //   const loadProgress = load * 1000 / dt
    //   this.setState({
    //     loadProgress
    //   })
    // }, 2000)
  }

  handleProgress = (event) => {
    if (this.audio.buffered.length < 1) {
      this.delaySetProgress()
      return
    }
    this.setProgress()
  }

  delaySetProgress = () => {
    if (this.audio.buffered.length > 0) {
      this.setProgress()
      return
    }
    clearInterval(this.timer)
    this.timer = setInterval(() => {
      this.delaySetProgress()
    }, 1000)
  }

  setProgress = () => {
    const load = this.audio.buffered.end(this.audio.buffered.length - 1)
    const { song } = this.props
    const { dt } = song
    const loadProgress = load * 1000 / dt
    this.setState({
      loadProgress
    })
  }

  // handleTimeupdate = (event) => {
  //   event.persist()
  //   const { curIndex, idsOfSongs, songsById } = this.props
  //   const { dt } = songsById[idsOfSongs[curIndex]]
  //   const playProgress = event.timeStamp / dt
  //   this.setState({
  //     curStamp: event.timeStamp,
  //     playProgress
  //   })
  // }

  onTimeUpdate = (event) => {
    console.log(this.audio.ended)
    const { song } = this.props
    const { dt } = song
    const curStamp = this.audio.currentTime * 1000
    const playProgress = curStamp / dt
    this.setState({
      curStamp,
      playProgress
    })

    if (this.audio.ended) {
      // 这一首播放结束
      
    }
  }

  handlePlay = async () => {
    await this.audio.play()
    this.audio.addEventListener('timeupdate', this.onTimeUpdate)
    this.setState({
      isPlaying: true
    })
  }

  handlePause = async () => {
    await this.audio.pause()
    this.audio.removeEventListener('timeupdate', this.onTimeUpdate)
    this.setState({
      isPlaying: false
    })
  }

  handleNextSong = () => {
    const { dispatch } = this.props
    dispatch(autoToNext())
  }

  handleSliderChange = (percentage) => {
    const { song } = this.props
    const { dt } = song
    const curTime = dt / 1000 * percentage

    this.audio.currentTime = curTime
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
    const { isPlaying, curStamp, playProgress, loadProgress, volume } = this.state

    const song = songsById[idsOfSongs[curIndex]]
    const durationStamp = song ? song.dt : 0

    return (
      <footer className={`footer-player ${className || ''}`}>
        <audio
          preload="auto"
          ref={audio => this.audio = audio}
          onCanPlayThrough={this.handleCanplayThrough}
          onProgress={this.handleProgress}
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
          <ControlBtn
            icon="next-track"
            onClick={this.handleNextSong}
          ></ControlBtn>
        </div>

        <span className="footer-player__cur-time">
          {formatDurationTime(curStamp)}
        </span>
        <Slider
          className="footer-player__progress"
          playProgress={playProgress}
          loadProgress={loadProgress}
          onChange={this.handleSliderChange}
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
  songsById,
  song: songsById[idsOfSongs[curIndex]]
})

export default connect(
  mapStateToProps
)(FooterPlay)
