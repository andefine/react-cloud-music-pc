import React from 'react'

import './index.scss'

const Logo: React.FC<{}> = () => (
  <div className="logo">
    <div className="logo__icon">
      <i className="logo__i iconfont icon-netease"></i>
    </div>
    <h3 className="logo__title">网易云音乐</h3>
  </div>
)

export default Logo
