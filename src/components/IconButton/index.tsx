import React from 'react'

import styles from './index.module.scss'

const IconButton: React.FC<{ className?: string; icon?: string }> = ({
  className = '',
  icon,
  children,
}) => (
  <button className={`${styles.root} ${className}`}>
    {icon ? <i className={`${styles.icon} iconfont icon-${icon}`}></i> : null}
    {children}
  </button>
)

export default IconButton
