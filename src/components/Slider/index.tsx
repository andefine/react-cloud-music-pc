import React from 'react'

import styles from './index.module.scss'

interface Props {
  className?: string
  radius?: boolean
  playProgress: number
  loadProgress: number
  // onChange: () => void
}

class Slider extends React.Component<Props> {
  static defaultProps: Props = {
    className: '',
    radius: true,
    playProgress: 0,
    loadProgress: 0,
  }

  render() {
    const { className, radius, playProgress, loadProgress } = this.props

    return (
      <div
        className={`${
          radius ? styles['root--radius'] : styles.root
        } ${className}`}
        onClick={() => {}}
      >
        <div className={styles.rail}></div>
        <div
          className={styles.progress}
          style={{ width: `${loadProgress * 100}%` }}
        ></div>
        <div
          className={styles.track}
          style={{ width: `${playProgress * 100}%` }}
        ></div>
        <div
          className={styles.dot}
          style={{ left: `${playProgress * 100}%` }}
        ></div>
      </div>
    )
  }
}

export default Slider
