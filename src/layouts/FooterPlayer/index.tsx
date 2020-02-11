import React from 'react'
import { connect } from 'react-redux'

import { RootState } from '@/store'
import { formatDurationTime } from '@/utils/time'

import * as songApi from '@/api/song'
import { Track } from '@/types/Track'

import ControlBtn from '@/components/ControlBtn'
import Slider from '@/components/Slider'
import Volume from '@/components/Volume'

import styles from './index.module.scss'

const mapStateToProps = ({ player }: RootState) => ({
  curIndex: player.curIndex,
  playingTracks: player.playingTracks,
})

type StateProps = ReturnType<typeof mapStateToProps>

type Props = StateProps

interface State {
  src: string
  isPlaying: boolean
  song: Track | null
  curStampLabel: string
  dtStampLabel: string
  playProgress: number
  loadProgress: number
  volume: number
}

class FooterPlayer extends React.Component<Props, State> {
  private audio = React.createRef<HTMLAudioElement>()
  // 是否在移动进度条
  private isMoving = false

  constructor(props: Props) {
    super(props)

    this.state = {
      src: '',
      isPlaying: false,
      song: null,
      curStampLabel: formatDurationTime(0),
      dtStampLabel: formatDurationTime(0),
      playProgress: 0,
      loadProgress: 0,
      volume: 0.001,
    }
  }

  static getDerivedStateFromProps(props: Props) {
    return {
      song: props.playingTracks[props.curIndex] || null,
    }
  }

  async componentDidMount() {
    this.audio.current!.volume = this.state.volume
    this.getSongData()

    this.audio.current!.addEventListener('timeupdate', this.onTimeUpdate)
  }

  async componentDidUpdate(prevProps: Props) {
    if (this.props.curIndex !== prevProps.curIndex) {
      this.getSongData()
    }
  }

  componentWillUnmount() {
    this.audio.current!.removeEventListener('timeupdate', this.onTimeUpdate)
  }

  async getSongData() {
    const { curIndex, playingTracks } = this.props
    if (playingTracks[curIndex]) {
      const track = playingTracks[curIndex]
      const urlRes = await songApi.getSongsUrl(track.id)
      const song = playingTracks[curIndex]
      this.setState({
        song,
        src: urlRes.data[0].url,
        dtStampLabel: formatDurationTime(song.dt),
      })
    }
  }

  onTimeUpdate = () => {
    const audioNode = this.audio.current!
    const { song } = this.state

    if (!song) {
      return
    }

    let data = {}

    if (!this.isMoving) {
      const curStamp = audioNode.currentTime * 1000
      const curStampLabel = formatDurationTime(curStamp)
      const playProgress = curStamp / song!.dt
      data = { ...data, curStampLabel, playProgress }
    }

    if (audioNode.buffered.length > 0) {
      const load = audioNode.buffered.end(audioNode.buffered.length - 1)
      const dt = song!.dt
      const loadProgress = dt ? (load * 1000) / dt : 0
      data = { ...data, loadProgress }
    }

    this.setState(data)
  }

  handleSliderChange = (playProgress: number) => {
    this.isMoving = true
    const { song } = this.state
    const curStamp = song!.dt * playProgress
    const curStampLabel = formatDurationTime(curStamp)
    this.setState({ curStampLabel, playProgress })
  }

  handleAfterSliderChange = (playProgress: number) => {
    this.isMoving = false
    const audioNode = this.audio.current!
    const { song } = this.state
    audioNode.currentTime = (song!.dt * playProgress) / 1000
  }

  handleVolumeChange = (volume: number) => {
    this.setState({ volume })
    this.audio.current!.volume = volume
  }

  render() {
    const {
      src,
      isPlaying,
      curStampLabel,
      dtStampLabel,
      playProgress,
      loadProgress,
      volume,
    } = this.state
    const playManner = 'xx'
    const idsOfSongs = []

    return (
      <footer className={styles.root}>
        <audio preload="auto" autoPlay controls ref={this.audio} src={src}>
          <source type="audio/mpeg" />
        </audio>
        <div className={styles.left}>
          <ControlBtn icon="pre-track" onClick={() => {}}></ControlBtn>
          {isPlaying ? (
            <ControlBtn icon="pause" size={34} onClick={() => {}}></ControlBtn>
          ) : (
            <ControlBtn icon="play" size={34} onClick={() => {}}></ControlBtn>
          )}
          <ControlBtn icon="next-track" onClick={() => {}}></ControlBtn>
        </div>

        <span className={styles['cur-time']}>{curStampLabel}</span>
        <Slider
          className={styles.progress}
          {...{ playProgress, loadProgress }}
          onChange={this.handleSliderChange}
          onAfterChange={this.handleAfterSliderChange}
        ></Slider>
        <span className={styles.duration}>{dtStampLabel}</span>

        <Volume
          className={styles.volume}
          volume={volume}
          onChange={this.handleVolumeChange}
        ></Volume>

        <div className={styles.right}>
          <i
            className={`iconfont icon-${playManner.toLocaleLowerCase()} ${
              styles['right-i']
            }`}
          ></i>
          <div className={styles['list-i']}>
            <i
              className={`iconfont icon-bofangliebiao ${styles['list-i-icon']}`}
            ></i>
            <span className={styles['list-i-num']}>{idsOfSongs.length}</span>
          </div>
        </div>
      </footer>
    )
  }
}

export default connect(mapStateToProps)(FooterPlayer)
