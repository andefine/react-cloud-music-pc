import { combineReducers } from 'redux'
import account from './account/reducer'
import size from './size/reducer'
import recommend from './recommend/reducer'
import playlist from './playlist/reducer'
import playingSongs from './playing-songs/reducer'
import user from './user/reducer'

export default combineReducers({
  account,
  size,
  recommend,
  playlist,
  playingSongs,
  user
})
