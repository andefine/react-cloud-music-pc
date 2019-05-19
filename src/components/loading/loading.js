import React from 'react'
import PropTypes from 'prop-types'
import './loading.scss'

const Loading = ({ className, text }) => (
  <div className={`loading ${className || ''}`}>
    {text || '加载中...'}
  </div>
)

Loading.propTypes = {
  text: PropTypes.string
}

export default Loading
