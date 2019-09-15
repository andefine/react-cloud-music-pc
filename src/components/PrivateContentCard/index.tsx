import React from 'react'

import './index.scss'

interface IProps {
  copywriter: string
  sPicUrl: string
}

const PrivateContentCard: React.FC<IProps> = ({ copywriter, sPicUrl }) => {
  return (
    <div className="private-content-card">
      <img src={sPicUrl} alt="" className="private-content-card__img"/>
      <span className="private-content-card__text">{copywriter}</span>
    </div>
  )
}

export default PrivateContentCard
