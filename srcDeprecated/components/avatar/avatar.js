import React from 'react'
import PropTypes from 'prop-types'
import './avatar.scss'

const Avatar = ({
  className = '',
  avatarUrl,
  radius = true
}) => (
  <div className={`avatar${radius ? '--radius' : ''} ${className}`}>
    <img src={avatarUrl} alt="" className="avatar__img"/>
  </div>
)

Avatar.propTypes = {
  className: PropTypes.string,
  avatarUrl: PropTypes.string.isRequired,
  radius: PropTypes.bool
}

export default Avatar
