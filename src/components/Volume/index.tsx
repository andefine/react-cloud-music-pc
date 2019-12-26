import React from 'react'

import styles from './index.module.scss'

interface Props {
  className?: string
  volume: number
  onChange?: () => void
}

interface State {
  ratio: number
  lastRatio: number
}

class Volume extends React.Component<Props, State> {
  static defaultProps: Props = {
    className: '',
    volume: 0.5,
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      ratio: props.volume,
      lastRatio: props.volume,
    }
  }

  render() {
    const { className } = this.props
    const { ratio } = this.state

    return (
      <div className={`${styles.root} ${className}`}>
        <div className={styles.i}>
          <i
            className={`iconfont icon-${ratio === 0 ? 'mute' : 'volume'} ${
              styles.icon
            }`}
          ></i>
        </div>

        <div className={styles.slider}>
          <div className={styles.slider__rail}></div>
          <div
            className={styles.slider__track}
            style={{ width: `${ratio * 100}%` }}
          ></div>
          <div
            className={styles.slider__dot}
            style={{ left: `${ratio * 100}%` }}
          ></div>
        </div>
      </div>
    )
  }
}

export default Volume
