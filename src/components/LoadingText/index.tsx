import React from 'react'

import './index.scss'

interface IProps {
  className?: string
  text?: string
}

const LoadingText: React.FC<IProps> = ({ className = '', text = '加载中' }) => {
  return <div className={`loading-text ${className}`}>{text}</div>
}

export default LoadingText
