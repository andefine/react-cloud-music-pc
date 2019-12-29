export enum PlayManner {
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
  curIndex: number
  idsOfSongs: number[]
  playManner: PlayManner
  songsById: {}
}
