import React from 'react'

import { formatDurationTime } from '@/utils/time'

import ControlBtn from '@/components/ControlBtn'
import Slider from '@/components/Slider'
import Volume from '@/components/Volume'

import styles from './index.module.scss'

interface OwnProps {}

type Props = OwnProps

interface State {
  isPlaying: boolean
  curTime: number
  playProgress: number
  loadProgress: number
  volume: number
}

class FooterPlay extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      isPlaying: false,
      curTime: 0,
      playProgress: 0,
      loadProgress: 0,
      volume: 0.5,
    }
  }

  render() {
    const {
      isPlaying,
      curTime,
      playProgress,
      loadProgress,
      volume,
    } = this.state
    const durationStamp = 0
    const playManner = 'xx'
    const idsOfSongs = []

    return (
      <footer className={styles.root}>
        <audio preload="auto">
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
          {formatDurationTime(curTime)}
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
