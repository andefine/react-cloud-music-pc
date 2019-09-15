import React from 'react'

import './index.scss'

interface IProps {
  title: string
  className?: string
}

const CardListTitle: React.FC<IProps> = ({ title, className }) => {
  return (
    <div className={`card-list-title ${className || ''}`}>
      <div className="card-list-title__label">{title}</div>
      <div className="card-list-title__more">{'更多>'}</div>
    </div>
  )
}

export default CardListTitle
