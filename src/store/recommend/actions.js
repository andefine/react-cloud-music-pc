import * as api from '@/api'
import {
  RECEIVE_BANNERS,
  RECEIVE_PLAYLISTS
} from './action-types'

export const receiveBanners = (banners) => ({
  type: RECEIVE_BANNERS,
  banners
})

export const getBanners = () => (dispatch, getState) => {
  const { banners } = getState().recommend
  
  if (banners.length > 0) {
    return Promise.resolve()
  }
  
  return api.getBanners()
    .then(({ banners }) => {
      dispatch(receiveBanners(banners))
    })
}

export const receivePlaylists = (playlists) => ({
  type: RECEIVE_PLAYLISTS,
  playlists
})

export const getPlaylists = () => {
  return async (dispatch) => {
    const { result } = await api.getRecommendPlaylist()
    dispatch(receivePlaylists(result))
  }
}
