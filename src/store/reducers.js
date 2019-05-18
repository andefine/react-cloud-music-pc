import { combineReducers } from 'redux'
import user from './user/reducer'
import size from './size/reducer'
import recommend from './recommend/reducer'
import playlistDetail from './playlist-detail/reducer'

export default combineReducers({
  user,
  size,
  recommend,
  playlistDetail
})
