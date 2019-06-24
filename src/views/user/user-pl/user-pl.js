import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserPlTitle from '../user-pl-title/user-pl-title'
import PlaylistCard from '@/components/playlist-card/playlist-card'
import './user-pl.scss'

class UserPlCreated extends Component {
  render () {
    const {
      isSelf,
      profile: {
        playlistCount
      },
      createdPlaylists,
      subscribedPlaylists
    } = this.props
    
    return (
      <div className="user-pl">
        <UserPlTitle
          title={
            `${isSelf ? '我创建的歌单' : '歌单'} (${playlistCount})`
          }
        ></UserPlTitle>
        <div className="user-pl__list">
          {
            createdPlaylists.map(({
              id,
              name,
              coverImgUrl,
              playCount,
              trackCount
            }) => (
              <PlaylistCard
                className='user-pl__list-item'
                key={id}
                id={id}
                name={name}
                picUrl={coverImgUrl}
                playCount={playCount}
                trackCount={trackCount}
              ></PlaylistCard>
            ))
          }
        </div>
        <UserPlTitle
          title={
            `${isSelf ? '我收藏的歌单' : '歌单'}`
          }
        ></UserPlTitle>
        <div className="user-pl__list">
          {
            subscribedPlaylists.map(({
              id,
              name,
              coverImgUrl,
              playCount,
              trackCount
            }) => (
              <PlaylistCard
                className='user-pl__list-item'
                key={id}
                id={id}
                name={name}
                picUrl={coverImgUrl}
                playCount={playCount}
                trackCount={trackCount}
              ></PlaylistCard>
            ))
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({
  account,
  user: {
    profile,
    createdPlaylists,
    subscribedPlaylists
  }
}) => {
  const isSelf = (profile && profile.userId) === (account.profile && account.profile.userId)

  return {
    isSelf,
    profile,
    createdPlaylists,
    subscribedPlaylists
  }
}

export default connect(
  mapStateToProps
)(UserPlCreated)
