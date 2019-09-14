import {
  RecommendActionTypes,
  IBanner,
  IPlaylist,
  IPrivateContent,
  ILatestMusic,
} from './types'

interface ISavedData {
  banners: IBanner[]
  // playlists: IPlaylist[]
  // privateContents: IPrivateContent[]
  // latestMusics: ILatestMusic[]
}

export const saveData = (data: ISavedData) => ({
  type: RecommendActionTypes.SAVE_DATA,
  payload: data,
})

export const loadData = () => ({
  type: RecommendActionTypes.LOAD_DATA,
})
