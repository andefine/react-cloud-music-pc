export interface IBanner {
  imageUrl: string
  [key: string]: any
}

export interface IPlaylist {
  id: number
  name: string
  picUrl: string
  playCount: number
  copywriter: string
  [key: string]: any
}

export interface IPrivateContent {
  id: number
  copywriter: string
  sPicUrl: string
  [key: string]: any
}

export interface ILatestMusic {
  id: number
  [key: string]: any
}

export interface IRecommendState {
  banners: IBanner[]
  playlists: IPlaylist[]
  privateContents: IPrivateContent[]
  latestMusics: ILatestMusic[]
}

export enum RecommendActionTypes {
  SAVE_DATA = '@@recommend/SAVE_DATA',
  LOAD_DATA = '@@recommend/LOAD_DATA',
}
