import React from 'react'

import styles from './index.module.scss'

const Logo: React.FC<{}> = () => (
  <div className={styles.logo}>
    <div className={styles.icon}>
      <i className="iconfont icon-netease"></i>
    </div>
    <h3 className={styles.title}>网易云音乐</h3>
  </div>
)

export default Logo
