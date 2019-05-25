import * as api from '@/api'
import {
  CHANGE_PLAY_MANNER,
  RECEIVE_SONGS,
  AUTO_TO_NEXT
} from './action-types'

export const changePlayManner = () => ({
  type: CHANGE_PLAY_MANNER
})

const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs
})

export const getSongsByIds = () => async (dispatch, getState) => {
  const { playingSongs: { idsOfSongs } } = getState()
  
  const { songs } = await api.getSongsDetail(idsOfSongs)
  dispatch(receiveSongs(songs))
}

export const autoToNext = () => ({
  type: AUTO_TO_NEXT
})
