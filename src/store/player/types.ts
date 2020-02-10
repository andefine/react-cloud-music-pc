import { Track } from '@/types/Track'

export enum PlayMode {
  // 顺序播放
  Order,
  // 列表循环
  AllRepeat,
  // 单曲循环
  RepeatOnce,
  // 随机播放
  Shuffle,
}

export interface PlayerState {
  // 当前播放索引
  curIndex: number
  // 播放列表
  playingTracks: Track[]
  idsOfSongs: number[]
  PlayMode: PlayMode
  songsById: {}
}

export enum PlayerActionTypes {
  ADD_TO_PLAYER_LIST = '@player/ADD_TO_PLAYER_LIST',
}

interface AddToPlayerList {
  type: PlayerActionTypes.ADD_TO_PLAYER_LIST
  payload: { tracks: Track[] }
}

export type PlayerAction = AddToPlayerList
