import React from 'react'
import './icon-button.scss'

const IconButton = ({ className, icon, children }) => (
  <button className={`icon-button ${className}`}>
    {icon ? (
      <i className={`icon-button__icon iconfont icon-${icon}`}></i>
    ) : null}
    {children}
  </button>
)

export default IconButton
