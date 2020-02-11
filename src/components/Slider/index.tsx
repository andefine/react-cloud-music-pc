import React from 'react'

import styles from './index.module.scss'

interface Props {
  className?: string
  radius?: boolean
  playProgress: number
  loadProgress: number
  onChange?: (playProgress: number) => any
  onAfterChange?: (playProgress: number) => any
}

class Slider extends React.Component<Props> {
  static defaultProps: Props = {
    className: '',
    radius: true,
    playProgress: 0,
    loadProgress: 0,
  }

  private rail = React.createRef<HTMLDivElement>()
  private dot = React.createRef<HTMLDivElement>()
  // 点击圆点时，鼠标x坐标与圆点中心差值
  private offsetCenterOnDown = 0
  // 用来保存移动比例
  private ratio = 0

  handleDotMouseDown = (e: React.MouseEvent) => {
    const dotNode = this.dot.current!
    const dotPosX =
      dotNode.getBoundingClientRect().left + dotNode.offsetWidth / 2
    this.offsetCenterOnDown = e.clientX - dotPosX

    document.addEventListener('mousemove', this.handleDocMouseMove)
    document.addEventListener('mouseup', this.handleDocMouseUp)

    e.preventDefault()
  }

  handleDocMouseMove = (e: MouseEvent) => {
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

    const { onChange } = this.props
    this.ratio = left / railNode.offsetWidth
    onChange && onChange(this.ratio)
  }

  handleDocMouseUp = (e: MouseEvent) => {
    document.removeEventListener('mousemove', this.handleDocMouseMove)
    document.removeEventListener('mouseup', this.handleDocMouseUp)

    const { onAfterChange } = this.props
    onAfterChange && onAfterChange(this.ratio)
  }

  handleSliderClick = (e: React.MouseEvent) => {
    const railNode = this.rail.current!
    let left = e.clientX - railNode.getBoundingClientRect().left
    this.ratio = left / railNode.offsetWidth

    const { onAfterChange } = this.props
    onAfterChange && onAfterChange(this.ratio)
  }

  render() {
    const { className, radius, playProgress, loadProgress } = this.props

    return (
      <div
        className={`${
          radius ? styles['root--radius'] : styles.root
        } ${className}`}
        onClick={this.handleSliderClick}
      >
        <div className={styles.rail} ref={this.rail}></div>
        <div
          className={styles['load-progress']}
          style={{ width: `${loadProgress * 100}%` }}
        ></div>
        <div
          className={styles.track}
          style={{ width: `${playProgress * 100}%` }}
        ></div>
        <div
          className={styles.dot}
          style={{ left: `${playProgress * 100}%` }}
          ref={this.dot}
          onMouseDown={this.handleDotMouseDown}
        ></div>
      </div>
    )
  }
}

export default Slider
