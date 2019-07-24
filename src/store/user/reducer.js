import {
  RECEIVE_USER,
  APPEND_PLAYLISTS_START,
  APPEND_PLAYLISTS_SUCCESS
} from './action-types'
import { combineReducers } from 'redux'

const initialState = {
  detail: {},
  profile: {},
  playlists: {
    isFetching: false,
    created: [],
    subscribed: [],
    more: true,
  },
  // // 是否正在获取歌单
  // isFetchingPlaylists: false,
  // // 创建的歌单
  // createdPlaylists: [],
  // // 收藏的歌单
  // subscribedPlaylists: [],
  // // 收藏的歌单是否还有更多，因为无法得到收藏歌单总数量，我们只好用这个了
  // morePlaylists: false
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

const playlists = (state = initialState.playlists, { type, payload }) => {
  switch (type) {
    case APPEND_PLAYLISTS_START:
      return {
        ...state,
        isFetching: true
      }
    case APPEND_PLAYLISTS_SUCCESS:
      const { created, subscribed, more } = payload
      return {
        isFetching: false,
        created,
        subscribed,
        more
      }
    default:
      return state
  }
}

// const createdPlaylists = (
//   state = initialState.createdPlaylists,
//   { type, payload }
// ) => {
//   switch (type) {
//     case RECEIVE_USER:
//       const { createdPlaylists } = payload
//       return createdPlaylists
//     default:
//       return state
//   }
// }

// const subscribedPlaylists = (
//   state = initialState.subscribedPlaylists,
//   { type, payload }
// ) => {
//   switch (type) {
//     case RECEIVE_USER:
//       const { subscribedPlaylists } = payload
//       return subscribedPlaylists
//     default:
//       return state
//   }
// }

// const moreSubscribed = (state = initialState.moreSubscribed, { type, payload }) => {
//   switch (type) {
//     case RECEIVE_USER:
//       const { moreSubscribed } = payload
//       return moreSubscribed
//     default:
//       return state
//   }
// }

export default combineReducers({
  detail,
  profile,
  playlists,
  // limit,
  // createdPlaylists,
  // subscribedPlaylists,
  // moreSubscribed
})
