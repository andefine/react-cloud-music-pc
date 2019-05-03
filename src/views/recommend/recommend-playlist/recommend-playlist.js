import React from 'react'
import { connect } from 'react-redux'
import './recommend-playlist.scss'
import { getShowPlaylists } from '@/store/recommend/selectors'
import DailySong from '@/components/daily-song/daily-song'
import PlaylistCard from '@/components/playlist-card/playlist-card'

function RecommendPlaylist ({ playlists }) {
  return (
    <div className="rc-playlist">
      <DailySong></DailySong>
      {
        playlists.map(({ id, ...rest }) => {
          return (
            <PlaylistCard key={id} {...rest}></PlaylistCard>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = ({ recommend }) => {
  return {
    playlists: getShowPlaylists(recommend.playlists)
  }
}

export default connect(
  mapStateToProps
)(RecommendPlaylist)
