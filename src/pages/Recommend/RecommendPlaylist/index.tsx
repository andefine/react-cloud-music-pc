import React from 'react'
import { connect } from 'react-redux'

import { IRootState } from '@/store/rootReducer'
import { IPlaylist } from '@/store/recommend/types'
import { getShowPlaylists } from '@/store/recommend/selectors'

import DailySong from '@/components/DailySong'
import PlaylistCard from '@/components/PlaylistCard'

import './index.scss'

interface IPropsFromState {
  playlists: IPlaylist[]
}

type Props = IPropsFromState

const RecommendPlaylist: React.FC<Props> = ({ playlists }) => (
  <div className="rc-playlist">
    <DailySong></DailySong>
    {playlists.map(({ id, name, picUrl, playCount, copywriter }) => {
      return (
        <PlaylistCard
          key={id}
          id={id}
          name={name}
          picUrl={picUrl}
          playCount={playCount}
          copywriter={copywriter}
        ></PlaylistCard>
      )
    })}
  </div>
)

const mapStateToProps = ({ recommend }: IRootState) => ({
  playlists: getShowPlaylists(recommend.playlists),
})

export default connect(mapStateToProps)(RecommendPlaylist)
