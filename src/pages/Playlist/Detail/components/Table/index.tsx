import React from 'react'

import { Track } from '@/types/Playlist'
import { formatDurationTime } from '@/utils/time'

import styles from './index.module.scss'

const Table: React.FC<{ tracks: Track[] }> = ({ tracks }) => (
  <table className={styles.root}>
    <thead>
      <tr>
        <th></th>
        <th>操作</th>
        <th>音乐标题</th>
        <th>歌手</th>
        <th>专辑</th>
        <th>时长</th>
      </tr>
    </thead>

    <tbody>
      {tracks.map((item, index) => (
        <tr key={item.id}>
          <td>{index.toString().padStart(2, '0')}</td>
          <td>
            <i className={`iconfont icon-like ${styles.like}`}></i>
            <i className={`iconfont icon-download ${styles.download}`}></i>
          </td>
          <td>{item.name}</td>
          <td>{item.ar[0].name}</td>
          <td>{item.al.name}</td>
          <td>{formatDurationTime(item.dt)}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default React.memo(Table)
