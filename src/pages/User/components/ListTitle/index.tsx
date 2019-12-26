import React from 'react'

import styles from './index.module.scss'

const ListTitle: React.FC<{ title: string }> = ({ title }) => (
  <div className={styles.root}>
    <span>{title}</span>
  </div>
)

export default ListTitle
