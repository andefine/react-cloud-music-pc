import { combineReducers } from 'redux'
import user from './user/reducer'
import size from './size/reducer'
import recommend from './recommend/reducer'
import playlist from './playlist/reducer'
import playingSongs from './playing-songs/reducer'

export default combineReducers({
  user,
  size,
  recommend,
  playlist,
  playingSongs
})
