import React from 'react'
import './drop-item.scss'

const DropItem = ({
  className = '',
  icon,
  text,
  label = '',
  arrow = true
}) => (
  <div className={`drop-item ${className}`}>
    <i className={`drop-item__icon iconfont icon-${icon}`}></i>
    <span className="drop-item__text">{text}</span>
    <span className="drop-item__label">{label}</span>
    {
      arrow ? (
        <span className="drop-item__arrow">{'>'}</span>
      ) :
      null
    }
  </div>
)

export default DropItem
