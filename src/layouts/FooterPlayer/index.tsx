import React from 'react'

import { formatDurationTime } from '@/utils/time'

import * as songApi from '@/api/song'
import { Track } from '@/types/Track'

import ControlBtn from '@/components/ControlBtn'
import Slider from '@/components/Slider'
import Volume from '@/components/Volume'

import styles from './index.module.scss'

interface OwnProps {}

type Props = OwnProps

interface State {
  isPlaying: boolean
  song: Partial<Track>
  curTime: number
  curStamp: number
  playProgress: number
  loadProgress: number
  volume: number
}

class FooterPlay extends React.Component<Props, State> {
  songId: number
  audio: React.RefObject<HTMLAudioElement>

  constructor(props: Props) {
    super(props)

    this.state = {
      isPlaying: false,
      song: {},
      curTime: 0,
      curStamp: 0,
      playProgress: 0,
      loadProgress: 0,
      volume: 0.5,
    }

    this.songId = 562594267
    this.audio = React.createRef<HTMLAudioElement>()
  }

  async componentDidMount() {
    this.audio.current!.volume = 0.000001
    const detailRes = await songApi.getSongDetail(this.songId)
    this.setState({ song: detailRes.songs[0] })
    const res = await songApi.getSongsUrl(this.songId)
    this.audio.current!.src = res.data[0].url

    this.audio.current!.addEventListener('timeupdate', this.onTimeUpdate)
  }

  onTimeUpdate = () => {
    const curStamp = this.audio.current!.currentTime * 1000
    let loadProgress = 0
    if (this.audio.current!.buffered.length > 0) {
      const load = this.audio.current!.buffered.end(
        this.audio.current!.buffered.length - 1,
      )
      const { song } = this.state
      loadProgress = song.dt ? (load * 1000) / song.dt : 0
    }
    this.setState({ curStamp, loadProgress })
  }

  render() {
    const {
      isPlaying,
      song,
      curStamp,
      // playProgress,
      loadProgress,
      volume,
    } = this.state
    const durationStamp = song.dt ? song.dt : 0
    const playManner = 'xx'
    const idsOfSongs = []

    const playProgress = durationStamp > 0 ? curStamp / durationStamp : 0

    return (
      <footer className={styles.root}>
        <audio preload="auto" autoPlay controls ref={this.audio}>
          <source
            type="audio/mpeg"
            src="http://m8.music.126.net/20191228222749/8f4078aed56ee6e2654e837e05a51e34/ymusic/5852/bf3d/5f06/a2948e91763d97a0d0f5557e8c90e6eb.mp3"
          />
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

        <Volume className={styles.volume} volume={volume}></Volume>

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

export default FooterPlay
