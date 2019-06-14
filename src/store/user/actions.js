import {
  RECEIVE_USER
} from './action-types'
import * as api from '@/api'

const receiveUser = (detail, profile) => ({
  type: RECEIVE_USER,
  payload: { detail, profile }
})

export const loadUser = (userId) => async (dispatch, getState) => {
  const {
    user: {
      created: {
        limit: createdLimit,
        offset: createdOffset
      }
    }
  } = getState()
  
  try {
    const [
      { profile, ...detail },
      // { more, playlist }
    ] = await Promise.all([
      api.getUserDetail(userId),
      api.getUserPlaylists(userId, createdLimit, createdOffset)
    ])
    dispatch(receiveUser(detail, profile))
  } catch (err) {
  }
}
