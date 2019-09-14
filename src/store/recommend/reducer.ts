import { Reducer } from 'redux'
import { IRecommendState, RecommendActionTypes } from './types'

const initialState: IRecommendState = {
  banners: [],
  playlists: [],
  privateContents: [],
  latestMusics: [],
}

export const recommend: Reducer<IRecommendState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case RecommendActionTypes.SAVE_DATA:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

export default recommend
