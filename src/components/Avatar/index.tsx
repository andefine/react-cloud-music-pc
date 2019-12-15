import React from 'react'

import styles from './index.module.scss'

const Avatar: React.FC<{
  className?: string
  url?: string
  radius?: boolean
}> = ({ className = '', url, radius = true }) => (
  <div
    className={`${radius ? styles['root--radius'] : styles.root} ${className}`}
  >
    <img className={styles.img} src={url} alt="" />
  </div>
)

export default React.memo(Avatar)
