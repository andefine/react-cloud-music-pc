import {
  RECEIVE_USER
} from './action-types'
import { combineReducers } from 'redux'

const initialState = {
  detail: {},
  profile: {},
  // 创建的歌单
  created: {
    // 单页数量限制
    limit: 20,
    // 偏移量，即第几页，0 表示第一页
    offset: 0,
    // 表示在当前页之后是否还有数据
    more: false,
    // 注意这里只会保存当前页的，而不是所有
    playlists: []
  },
  
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

const created = (state = initialState.created, { type }) => {
  switch (type) {
    default:
      return state
  }
}

export default combineReducers({
  detail,
  profile,
  created
})
