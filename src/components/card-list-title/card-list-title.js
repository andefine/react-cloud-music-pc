import React from 'react'

import './card-list-title.scss'

export default function CardListTitle ({ title }) {
  return (
    <div className="card-list-title">
      <div className="card-list-title__label">{title}</div>
      <div className="card-list-title__more">{'更多>'}</div>
    </div>
  )
}
