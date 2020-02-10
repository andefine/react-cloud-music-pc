import React, { MouseEvent } from 'react'

import styles from './index.module.scss'

interface Props {
  className?: string
  icon?: string
  onClick?: (e: MouseEvent) => void
}

const IconButton: React.FC<Props> = ({
  className = '',
  icon,
  onClick,
  children,
}) => (
  <button className={`${styles.root} ${className}`} onClick={onClick}>
    {icon ? <i className={`${styles.icon} iconfont icon-${icon}`}></i> : null}
    {children}
  </button>
)

export default IconButton
