import {
  RECEIVE_USER
} from './action-types'
import * as api from '@/api'

const receiveUser = (detail, profile) => ({
  type: RECEIVE_USER,
  payload: { detail, profile }
})

export const loadUser = (userId) => async (dispatch) => {
  try {
    const { profile, ...detail } = await api.getUserDetail(userId)
    dispatch(receiveUser(detail, profile))
  } catch (err) {
    console.log(err)
  }
}
