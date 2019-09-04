// import { combineReducers } from 'redux'
import {
  CHANGE_PLAY_MANNER,
  RECEIVE_SONGS,
  AUTO_TO_NEXT
} from './action-types'

const SHUN_XU_BO_FANG = 'SHUN_XU_BO_FANG'
const LIE_BIAO_XUN_HUAN = 'LIE_BIAO_XUN_HUAN'
const DAN_QU_XUN_HUAN = 'DAN_QU_XUN_HUAN'
const SUI_JI_BO_FANG = 'SUI_JI_BO_FANG'
const PLAY_MANNERS = [
  SHUN_XU_BO_FANG,
  LIE_BIAO_XUN_HUAN,
  DAN_QU_XUN_HUAN,
  SUI_JI_BO_FANG
]

const getCurIndexFromStorage = () => {
  const curIndex = localStorage.getItem('curIndex')
  if (Object.prototype.toString.call(curIndex) === '[object Null]') {
    return 0
  }
  return parseInt(curIndex)
}

const getIdsOfSongsFromStorage = () => {
  const idsOfSongs = localStorage.getItem('idsOfSongs')
  if (Object.prototype.toString.call(idsOfSongs) === '[object Null]') {
    return []
  }
  return JSON.parse(idsOfSongs)
}

const curIndexInStorage = getCurIndexFromStorage()
const idsOfSongsInStorage = getIdsOfSongsFromStorage()

const initialState = {
  curIndex: curIndexInStorage,
  idsOfSongs: idsOfSongsInStorage,
  playManner: SHUN_XU_BO_FANG,
  songsById: {}
}

const arrOfObjToObj = (arr) => {
  return arr.reduce((acc, cur) => {
    acc[cur.id] = cur
    return acc
  }, {})
}

// const curIndex = (state = initialState.curIndex, { type }) => {
//   switch (type) {
//     case AUTO_TO_NEXT:
//       return (curIndex + 1) 
//     default:
//       return state
//   }
// }

// const playManner = (state = initialState.playManner, { type }) => {
//   switch (type) {
//     case CHANGE_PLAY_MANNER:
//       const curMannerIdx = PLAY_MANNERS.indexOf(state)
//       return PLAY_MANNERS[(curMannerIdx + 1) % PLAY_MANNERS.length]
//     default:
//       return state
//   }
// }

// const idsOfSongs = (state = initialState.idsOfSongs) => {
//   return state
// }

// const songsById = (state = initialState.songsById, { type, songs }) => {
//   switch (type) {
//     case RECEIVE_SONGS:
//       return arrOfObjToObj(songs)
//     default:
//       return state
//   }
// }

const getNextCurIndex = (state) => {
  const { curIndex, idsOfSongs, playManner } = state
  switch (playManner) {
    case SHUN_XU_BO_FANG:
      if (curIndex === idsOfSongs.length - 1) {
        return curIndex
      }
      return curIndex + 1
    case LIE_BIAO_XUN_HUAN:
      return (curIndex + 1) % idsOfSongs.length
    case DAN_QU_XUN_HUAN:
      return curIndex
    case SUI_JI_BO_FANG:
      const min = 0
      const max = idsOfSongs.length - 1
      return Math.floor(Math.random() * (max - min + 1) + min)
    default:
      return curIndex
  }
}

// export default combineReducers({
//   playManner,
//   curIndex,
//   idsOfSongs,
//   songsById
// })

// dependent state
// https://github.com/reduxjs/redux/issues/749#issuecomment-141570236

const playingSongs = (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case RECEIVE_SONGS:
      const { songs } = action
      return {
        ...state,
        songsById: arrOfObjToObj(songs)
      }
    case CHANGE_PLAY_MANNER:
      const curMannerIdx = PLAY_MANNERS.indexOf(state.playManner)
      return {
        ...state,
        playManner: PLAY_MANNERS[(curMannerIdx + 1) % PLAY_MANNERS.length]
      }
    case AUTO_TO_NEXT:
      return {
        ...state,
        curIndex: getNextCurIndex(state, action)
      }
    default:
      return state
  }
}

export default playingSongs
