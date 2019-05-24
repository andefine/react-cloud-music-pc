import * as api from '@/api'
import { RECEIVE_SONGS } from './action-types'

const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs
})

export const getTracksByIds = () => async (dispatch, getState) => {
  const { playingSongs: { idsOfSongs } } = getState()
  
  const { songs } = await api.getSongDetails(idsOfSongs)
  dispatch(receiveSongs(songs))
}
