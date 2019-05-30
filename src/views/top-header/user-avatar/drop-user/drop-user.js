import React, { Component } from 'react'
import './drop-user.scss'

class DropUser extends Component {
  render () {
    const { className } = this.props
    
    return (
      <div className={`drop-user ${className || ''}`}>

      </div>
    )
  }
}

export default DropUser
