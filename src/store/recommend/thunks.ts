import { AppThunk } from '@/store'
import * as recommendApi from '@/api/recommend'
import { RecommendActionTypes } from './types'
import { saveData } from './actions'

export const loadData = (): AppThunk => async dispatch => {
  dispatch({ type: RecommendActionTypes.LOAD_DATA })

  const res = await Promise.all<any>([
    recommendApi.getBanners(),
    recommendApi.getPlaylist(),
    recommendApi.getPrivateContent(),
    recommendApi.getLatestMusics(),
  ])

  const [
    { banners },
    { result: playlists },
    { result: privateContents },
    { result: latestMusics },
  ] = res

  dispatch(saveData({ banners, playlists, privateContents, latestMusics }))
}
