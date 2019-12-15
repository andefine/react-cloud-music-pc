import React, { ReactNode } from 'react'

import styles from './index.module.scss'

const MenuItem: React.FC<{
  className?: string
  icon: string
  text: string
  label?: ReactNode
  arrow?: boolean
  onItemClick?: () => void
}> = ({
  className = '',
  icon,
  text,
  label = '',
  arrow = true,
  onItemClick,
}) => (
  <div className={`${styles['menu-item']} ${className}`} onClick={onItemClick}>
    <i className={`iconfont icon-${icon} ${styles['menu-item__icon']}`}></i>
    <span className={styles['menu-item__text']}>{text}</span>
    <span className={styles['menu-item__label']}>{label}</span>
    {arrow ? <span className={styles['menu-item__arrow']}>{'>'}</span> : null}
  </div>
)

export default MenuItem
