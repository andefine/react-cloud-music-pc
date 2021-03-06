import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadUser, appendPlaylists } from '@/store/user/actions'
import LoadingText from '@/components/loading-text/loading-text'
import UserInfo from './user-info/user-info'
import UserPl from './user-pl/user-pl'
import './user.scss'

class User extends Component {
  componentDidMount () {
    const {
      match: { params: { id } },
      profile,
      dispatch
    } = this.props

    if (parseInt(id, 10) !== profile.id) {
      dispatch(loadUser(id))
    }
  }

  handleScroll = (event) => {
    const {
      target: { clientHeight, scrollTop, scrollHeight }
    } = event
    const {
      match: { params: { id } },
      dispatch
    } = this.props
    
    if ((clientHeight + scrollTop) > (scrollHeight - 30)) {
      dispatch(appendPlaylists(parseInt(id)))
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
      <div
        className="user"
        onScroll={this.handleScroll}
      >
        {
          isFetching ? (
            <LoadingText></LoadingText>
          ) : (
            <>
              <UserInfo></UserInfo>
              <UserPl></UserPl>
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
