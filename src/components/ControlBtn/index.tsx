import React from 'react'

import styles from './index.module.scss'

const ControlBtn: React.FC<{
  className?: string
  icon: string
  size?: number
  onClick: () => void
}> = ({ className, icon, size = 30, onClick }) => (
  <i
    className={`iconfont icon-${icon} ${styles.root} ${className || ''}`}
    style={{
      width: size,
      height: size,
      fontSize: size - 2,
      lineHeight: 1,
    }}
    onClick={onClick}
  ></i>
)

export default ControlBtn
