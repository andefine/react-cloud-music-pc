import React from 'react'
import PropTypes from 'prop-types'
import './control-btn.scss'

const ControlBtn = ({ className, icon, size = 30, onClick }) => {
  size = parseInt(size)
  return (
    <i
      className={`control-i iconfont icon-${icon} ${className || ''}`}
      style={{
        width: size,
        height: size,
        fontSize: size - 2,
        lineHeight: 1
      }}
      onClick={onClick}
    ></i>
  )
}

ControlBtn.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

export default ControlBtn
