import React from 'react'
import PropTypes from 'prop-types'
import './loading.scss'

const Loading = ({ text }) => (
  <div className="loading">{text || '加载中...'}</div>
)

Loading.propTypes = {
  text: PropTypes.string
}

export default Loading
