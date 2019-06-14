import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadUser } from '@/store/user/actions'
import LoadingText from '@/components/loading-text/loading-text'
import UserInfo from './user-info/user-info'
import UserPlCreated from './user-pl-created/user-pl-created'
import './user.scss'

class User extends Component {
  componentWillMount () {
    const {
      match: { params: { id } },
      profile,
      dispatch
    } = this.props

    if (parseInt(id, 10) !== profile.id) {
      dispatch(loadUser(id))
    }
  }
  
  render () {
    const {
      match: { params: { id } },
      // detail,
      profile
    } = this.props
    const isFetching = (Object.keys(profile).length === 0 || profile.userId !== parseInt(id, 10))
    
    return (
      <div className="user">
        {
          isFetching ? (
            <LoadingText></LoadingText>
          ) : (
            <>
              <UserInfo></UserInfo>
              <UserPlCreated></UserPlCreated>
            </>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = ({ user: { detail, profile } }) => ({
  detail,
  profile
})

export default withRouter(connect(
  mapStateToProps
)(User))
