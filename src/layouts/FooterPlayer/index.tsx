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

interface OwnProps {}

type StateProps = ReturnType<typeof mapStateToProps>

type Props = OwnProps & StateProps

interface State {
  src: string
  isPlaying: boolean
  song: Track | null
  curTime: number
  curStamp: number
  playProgress: number
  loadProgress: number
  volume: number
}

class FooterPlayer extends React.Component<Props, State> {
  audio: React.RefObject<HTMLAudioElement>

  constructor(props: Props) {
    super(props)

    this.state = {
      src: '',
      isPlaying: false,
      song: null,
      curTime: 0,
      curStamp: 0,
      playProgress: 0,
      loadProgress: 0,
      volume: 0.5,
    }

    this.audio = React.createRef<HTMLAudioElement>()
  }

  async componentDidMount() {
    this.audio.current!.volume = 0.000001
    this.refreshCurrent()

    this.audio.current!.addEventListener('timeupdate', this.onTimeUpdate)
  }

  async componentDidUpdate(prevProps: Props) {
    if (this.props.curIndex !== prevProps.curIndex) {
      this.refreshCurrent()
    }
  }

  componentWillUnmount() {
    this.audio.current!.removeEventListener('timeupdate', this.onTimeUpdate)
  }

  async refreshCurrent() {
    const { curIndex, playingTracks } = this.props
    if (playingTracks[curIndex]) {
      const track = playingTracks[curIndex]
      const urlRes = await songApi.getSongsUrl(track.id)
      this.setState({
        song: playingTracks[curIndex],
        src: urlRes.data[0].url,
      })
    }
  }

  onTimeUpdate = () => {
    const curStamp = this.audio.current!.currentTime * 1000
    let loadProgress = 0
    if (this.audio.current!.buffered.length > 0) {
      const load = this.audio.current!.buffered.end(
        this.audio.current!.buffered.length - 1,
      )
      const { song } = this.state
      const dt = song!.dt
      loadProgress = dt ? (load * 1000) / dt : 0
    }
    this.setState({ curStamp, loadProgress })
  }

  handleVolumeChange = (volume: number) => {
    this.setState({ volume })
    this.audio.current!.volume = volume
  }

  render() {
    const {
      src,
      isPlaying,
      song,
      curStamp,
      // playProgress,
      loadProgress,
      volume,
    } = this.state
    const durationStamp = song ? song.dt : 0
    const playManner = 'xx'
    const idsOfSongs = []

    const playProgress = durationStamp > 0 ? curStamp / durationStamp : 0

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

        <span className={styles['cur-time']}>
          {formatDurationTime(curStamp)}
        </span>
        <Slider
          className={styles.progress}
          {...{ playProgress, loadProgress }}
        ></Slider>
        <span className={styles.duration}>
          {formatDurationTime(durationStamp)}
        </span>

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
