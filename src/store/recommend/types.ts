export interface IBanner {
  id: number
  [key: string]: any
}

export interface IPlaylist {
  id: number
  [key: string]: any
}

export interface IPrivateContent {
  id: number
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
