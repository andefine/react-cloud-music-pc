import * as api from '@/api'
import {
  RECEIVE_BANNERS
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

export const receivePlaylists = () => {}

export const getPlaylists = () => dispatch => {
  return api.getRecommendPlaylist()
    .then(res => {
      
    })
}
