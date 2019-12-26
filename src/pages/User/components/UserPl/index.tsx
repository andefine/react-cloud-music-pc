import React from 'react'

import { Playlist } from '@/types/Playlist'

import ListTitle from '../ListTitle'
import PlaylistCard from '@/components/PlaylistCard'

import styles from './index.module.scss'

const UserPl: React.FC<{ isSelf: boolean; playlists: Playlist[] }> = ({
  isSelf,
  playlists,
}) => (
  <div className={styles.root}>
    <ListTitle title={isSelf ? '我创建的歌单' : '歌单'}></ListTitle>
    <div className={styles.list}>
      {playlists.map(item => (
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

    <ListTitle title={isSelf ? '我收藏的歌单' : '收藏'}></ListTitle>
    <div className={styles.list}>
      {playlists.map(item => (
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
  </div>
)

export default UserPl
