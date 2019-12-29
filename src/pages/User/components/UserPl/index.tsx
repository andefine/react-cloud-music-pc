import React from 'react'

import { Playlist } from '@/types/Playlist'
import { UserProfile } from '@/types/User'

import ListTitle from '../ListTitle'
import PlaylistCard from '@/components/PlaylistCard'

import styles from './index.module.scss'

const UserPl: React.FC<{
  isSelf: boolean
  profile: UserProfile
  createdPlaylists: Playlist[]
  subscribedPlaylists: Playlist[]
}> = ({ isSelf, profile, createdPlaylists, subscribedPlaylists }) => (
  <div className={styles.root}>
    <ListTitle
      title={`${isSelf ? '我创建的' : ''}歌单（${profile.playlistCount}）`}
    ></ListTitle>
    <div className={styles.list}>
      {createdPlaylists.map(item => (
        <PlaylistCard
          className={styles.list__item}
          key={item.id}
          {...{
            id: item.id,
            name: item.name,
            picUrl: item.coverImgUrl,
            playCount: item.playCount,
          }}
        ></PlaylistCard>
      ))}
    </div>

    {subscribedPlaylists.length > 0 && (
      <React.Fragment>
        <ListTitle title={isSelf ? '我收藏的歌单' : '收藏'}></ListTitle>
        <div className={styles.list}>
          {subscribedPlaylists.map(item => (
            <PlaylistCard
              className={styles.list__item}
              key={item.id}
              {...{
                id: item.id,
                name: item.name,
                picUrl: item.coverImgUrl,
                playCount: item.playCount,
              }}
            ></PlaylistCard>
          ))}
        </div>
      </React.Fragment>
    )}
  </div>
)

export default UserPl
