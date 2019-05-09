import React from 'react'
import './icon-button.scss'

const IconButton = ({ icon, children }) => (
  <button className="icon-button">
    {icon ? (
      <i className={`icon-button__icon iconfont icon-${icon}`}></i>
    ) : null}
    {children}
  </button>
)

export default IconButton
