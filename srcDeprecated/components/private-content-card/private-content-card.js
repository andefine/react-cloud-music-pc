import React from 'react'
import PropTypes from 'prop-types'
import './private-content-card.scss'

const PrivateContentCard = ({ copywriter, sPicUrl }) => {
  return (
    <div className="private-content-card">
      <img src={sPicUrl} alt="" className="private-content-card__img"/>
      <span className="private-content-card__text">{copywriter}</span>
    </div>
  )
}

PrivateContentCard.propTypes = {
  copywriter: PropTypes.string.isRequired,
  sPicUrl: PropTypes.string.isRequired
}

export default PrivateContentCard
