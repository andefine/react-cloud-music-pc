import {
  RECEIVE_USER
} from './action-types'
import { combineReducers } from 'redux'

const initialState = {
  detail: {},
  profile: {},
  // 歌单单页数量限制。
  // 创建的和收藏的歌单 单页数量都一样，
  // 而且不会提供给用户修改，所以我们不用修改它。
  limit: 20,
  // 创建的歌单
  createdPlaylists: [],
  // 收藏的歌单
  subscribedPlaylists: [],
  // 收藏的歌单是否还有更多，因为无法得到收藏歌单总数量，我们只好用这个了
  moreSubscribed: false
}

const detail = (state = initialState.detail, { type, payload }) => {
  switch (type) {
    case RECEIVE_USER:
      const { detail } = payload
      return detail
    default:
      return state
  }
}

const profile = (state = initialState.profile, { type, payload }) => {
  switch (type) {
    case RECEIVE_USER:
      const { profile } = payload
      return profile
    default:
      return state
  }
}

const limit = (state = initialState.limit) => {
  return state
}

const createdPlaylists = (
  state = initialState.createdPlaylists,
  { type, payload }
) => {
  switch (type) {
    case RECEIVE_USER:
      const { createdPlaylists } = payload
      return createdPlaylists
    default:
      return state
  }
}

const subscribedPlaylists = (
  state = initialState.subscribedPlaylists,
  { type, payload }
) => {
  switch (type) {
    case RECEIVE_USER:
      const { subscribedPlaylists } = payload
      return subscribedPlaylists
    default:
      return state
  }
}

const moreSubscribed = (state = initialState.moreSubscribed, { type, payload }) => {
  switch (type) {
    case RECEIVE_USER:
      const { moreSubscribed } = payload
      return moreSubscribed
    default:
      return state
  }
}

export default combineReducers({
  detail,
  profile,
  limit,
  createdPlaylists,
  subscribedPlaylists,
  moreSubscribed
})
