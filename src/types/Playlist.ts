import User from './User'

export interface Track {
  id: number
  name: string
  ar: Array<{ id: number; name: string }>
  al: { id: number; name: string; picUrl: string }
  dt: number
  [key: string]: any
}

export default interface Playlist {
  coverImgUrl: string
  name: string
  trackCount: number
  playCount: number
  creator: User
  createTime: number
  subscribedCount: number
  shareCount: number
  tags: string[]
  description: string
  tracks: Track[]
  [key: string]: any
}
