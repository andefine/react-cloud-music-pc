import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { showLoginModal } from '@/store/user/actions'
import DropUser from './drop-user/drop-user'
import './user-avatar.scss'

class UserAvatar extends Component {
  static propTypes = {
    profile: PropTypes.shape({
      avatarUrl: PropTypes.string,
      nickname: PropTypes.string,
    }),
    showLoginModal: PropTypes.func.isRequired
  }

  state = {
    isDropUserShow: false
  }

  showDropUser = () => {
    if (!this.state.isDropUserShow) {
      this.setState({
        isDropUserShow: true
      })
  
      document.addEventListener('click', this.closeDropUser)
    }
  }

  closeDropUser = () => {
    this.setState({
      isDropUserShow: false
    })
    document.removeEventListener('click', this.closeDropUser)
  }
  
  render () {
    const { profile } = this.props
    const { isDropUserShow } = this.state
    const isLogged = Object.keys(profile).length > 0

    if (isLogged) {
      const { avatarUrl, nickname } = profile
      
      return (
        <div className="user-avatar">
          <img
            className="user-avatar__avatar"
            src={avatarUrl}
            alt=""
          />
          <div
            className="user-avatar__drop"
            onClick={this.showDropUser}
          >
            <span className="user-avatar__username">{nickname}</span>
            <div className="user-avatar__triangle"></div>
          </div>
          {
            isDropUserShow ? (
              <DropUser className="user-avatar__drop-modal"></DropUser>
            ) : null
          }
        </div>
      )
    }

    if (!isLogged) {
      const { showLoginModal } = this.props
      
      return (
        <div
          className="user-avatar"
          onClick={showLoginModal}
        >
          <i className="user-avatar__i iconfont icon-default-avatar"></i>
          <div className="user-avatar__drop">
            <span className="user-avatar__username">未登录</span>
            <div className="user-avatar__triangle"></div>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = ({ user: { profile } }) => ({
  profile
})

const mapDispatchToProps = (dispatch) => ({
  showLoginModal: () => dispatch(showLoginModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAvatar)
