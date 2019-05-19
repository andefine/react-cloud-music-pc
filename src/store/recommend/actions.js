import * as api from '@/api'
import {
  RECEIVE_DATA
} from './action-types'

const receiveData = ({
  banners,
  playlists,
  privateContents,
  latestMusics
}) => ({
  type: RECEIVE_DATA,
  payload: {
    banners,
    playlists,
    privateContents,
    latestMusics
  }
})

export const getRecommendData = () => async (dispatch) => {
  const reqs = Promise.all([
    api.getBanners(),
    api.getRecommendPlaylist(),
    api.getPrivateContents(),
    api.getLatestMusics()
  ])
  console.time('reqs')
  const [
    { banners },
    { result: playlists },
    { result: privateContents },
    { result: latestMusics }
  ] = await reqs
  console.timeEnd('reqs')

  dispatch(receiveData({
    banners,
    playlists,
    privateContents,
    latestMusics
  }))
}
