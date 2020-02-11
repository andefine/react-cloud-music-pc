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
  isMoving: boolean
}

class Volume extends React.Component<Props, State> {
  static defaultProps: Props = {
    className: '',
    volume: 0.5,
  }

  rail: React.RefObject<HTMLDivElement>
  dot: React.RefObject<HTMLDivElement>
  // 点击圆点时鼠标位置与圆点中心的偏差
  offsetCenterOnDown: number

  constructor(props: Props) {
    super(props)

    this.state = {
      ratio: props.volume,
      lastRatio: props.volume,
      isMoving: false,
    }

    this.rail = React.createRef()
    this.dot = React.createRef()
    this.offsetCenterOnDown = 0
  }

  handleDotMouseDown = (e: React.MouseEvent) => {
    const dotNode = this.dot.current!
    // 圆点中心 x坐标
    const dotPosX =
      dotNode.getBoundingClientRect().left + dotNode.offsetWidth / 2
    this.offsetCenterOnDown = e.clientX - dotPosX

    this.setState(state => ({
      lastRatio: state.ratio,
      isMoving: true,
    }))

    // 在 document 上添加监听回调是为了鼠标移动的范围能够不局限于音量条
    document.addEventListener('mousemove', this.handleDocumentMouseMove)
    document.addEventListener('mouseup', this.handleDocumentMouseUp)

    // 这里加上组织默认行为，防止拖动到两边的临界状态而产生再次拖动禁止的问题
    e.preventDefault()
  }

  handleDocumentMouseMove = (e: MouseEvent) => {
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

  handleDocumentMouseUp = () => {
    this.setState({ isMoving: false })
    document.removeEventListener('mousemove', this.handleDocumentMouseMove)
    document.removeEventListener('mouseup', this.handleDocumentMouseUp)
  }

  handleSliderClick = (e: React.MouseEvent) => {
    const left = e.clientX - this.rail.current!.getBoundingClientRect().left
    this.setState(state => ({
      lastRatio: state.ratio,
    }))
    this.changeRatioByLeft(left)
  }

  handleIconClick = (e: React.MouseEvent) => {
    const { ratio, lastRatio } = this.state
    // 这里我们判断当前音量是否为0，
    // 如果是则需要回到上次调整的位置，
    // 否则就设为0
    const nextRatio = ratio === 0 ? lastRatio : 0
    this.setState(
      {
        ratio: nextRatio,
        lastRatio: ratio,
      },
      this.triggerChange,
    )
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
    const { ratio, isMoving } = this.state

    return (
      <div className={`${styles.root} ${className}`}>
        <div className={styles.i} onClick={this.handleIconClick}>
          <i
            className={`iconfont icon-${ratio === 0 ? 'mute' : 'volume'} ${
              styles.icon
            }`}
          ></i>
        </div>

        <div className={styles.slider} onClick={this.handleSliderClick}>
          <div className={styles.slider__rail} ref={this.rail}></div>
          <div
            className={styles.slider__track}
            style={{ width: `${ratio * 100}%` }}
          ></div>
          <div
            className={
              isMoving ? styles['slider__dot--moving'] : styles.slider__dot
            }
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
