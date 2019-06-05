import React from 'react'
import PropTypes from 'prop-types'
import './loading-text.scss'

const LoadingText = ({ className, text }) => (
  <div className={`loading-text ${className || ''}`}>
    {text || '加载中...'}
  </div>
)

LoadingText.propTypes = {
  text: PropTypes.string
}

export default LoadingText
