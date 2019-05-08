import { combineReducers } from 'redux'
import recommend from './recommend/reducer'
import playlistDetail from './playlist-detail/reducer'

export default combineReducers({
  recommend,
  playlistDetail
})
