import { combineReducers } from 'redux'
import { RECEIVE_SONGS } from './action-types'

const initialState = {
  idsOfSongs: [
    30413714,
    188459,
    422252223,
    188332,
    64435
  ],
  songsById: {}
}

const arrOfObjToObj = (arr) => {
  return arr.reduce((acc, cur) => {
    acc[cur.id] = cur
    return acc
  }, {})
}

const idsOfSongs = (state = initialState.idsOfSongs) => {
  return state
}

const songsById = (state = initialState.songsById, { type, songs }) => {
  switch (type) {
    case RECEIVE_SONGS:
      return arrOfObjToObj(songs)
    default:
      return state
  }
}

export default combineReducers({
  idsOfSongs,
  songsById
})
