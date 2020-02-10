import React from 'react'

import styles from './index.module.scss'

interface Props {
  className?: string
  volume: number
  onChange?: (volume: number) => void
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

  rail: React.RefObject<HTMLDivElement>
  dot: React.RefObject<HTMLDivElement>
  offsetCenterOnDown: number

  constructor(props: Props) {
    super(props)

    this.state = {
      ratio: props.volume,
      lastRatio: props.volume,
    }

    this.rail = React.createRef()
    this.dot = React.createRef()
    // 点击圆点鼠标位置与圆点中心的偏差
    this.offsetCenterOnDown = 0
  }

  handleDotMouseDown = (e: React.MouseEvent) => {
    console.log('dot down')
    const dotNode = this.dot.current!
    const dotCenterX =
      dotNode.getBoundingClientRect().left + dotNode.offsetWidth / 2
    this.offsetCenterOnDown = e.clientX - dotCenterX

    this.setState(state => ({
      lastRatio: state.ratio,
    }))

    document.addEventListener('mousemove', this.onDocumentMouseMove)
    document.addEventListener('mouseup', this.onDocumentMouseUp)

    // 这里加上组织默认行为，防止拖动到两边的临界状态而产生再次拖动禁止的问题
    e.preventDefault()
  }

  onDocumentMouseMove = (e: MouseEvent) => {
    console.log('document move')
    const railNode = this.rail.current!
    let left =
      e.clientX -
      this.offsetCenterOnDown -
      railNode.getBoundingClientRect().left

    if (left < 0) {
      left = 0
    }
    if (left > railNode.offsetWidth) {
      left = railNode.offsetWidth
    }

    this.changeRatioByLeft(left)
  }

  onDocumentMouseUp = () => {
    console.log('document up')
    document.removeEventListener('mousemove', this.onDocumentMouseMove)
    document.removeEventListener('mouseup', this.onDocumentMouseUp)
  }

  changeRatioByLeft(left: number) {
    this.setState(
      { ratio: left / this.rail.current!.offsetWidth },
      this.triggerChange,
    )
  }

  triggerChange() {
    const { onChange } = this.props
    onChange && onChange(this.state.ratio)
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
          <div className={styles.slider__rail} ref={this.rail}></div>
          <div
            className={styles.slider__track}
            style={{ width: `${ratio * 100}%` }}
          ></div>
          <div
            className={styles.slider__dot}
            style={{ left: `${ratio * 100}%` }}
            ref={this.dot}
            onMouseDown={this.handleDotMouseDown}
          ></div>
        </div>
      </div>
    )
  }
}

export default Volume
