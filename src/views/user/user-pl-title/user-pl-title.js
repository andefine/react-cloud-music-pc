import React from 'react'
import PropTypes from 'prop-types'
import './user-pl-title.scss'

const UserPlTitle = ({
  title
}) => (
  <div className="user-pl-title">
    <span className="user-pl-title__label">{title}</span>
  </div>
)

UserPlTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default UserPlTitle
