import React from 'react'

import styles from './index.module.scss'

const AsideTitle: React.FC<{}> = ({ children }) => (
  <div className={styles.root}>{children}</div>
)

export default AsideTitle
