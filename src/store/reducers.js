import { combineReducers } from 'redux'
import size from './size/reducer'
import recommend from './recommend/reducer'
import playlistDetail from './playlist-detail/reducer'

export default combineReducers({
  size,
  recommend,
  playlistDetail
})
