import { combineReducers } from 'redux'
import {
  CHANGE_PLAY_MANNER,
  RECEIVE_SONGS
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

const curIndex = (state = initialState.curIndex) => {
  return state
}

const playManner = (state = initialState.playManner, { type }) => {
  switch (type) {
    case CHANGE_PLAY_MANNER:
      const curMannerIdx = PLAY_MANNERS.indexOf(state)
      return PLAY_MANNERS[(curMannerIdx + 1) % PLAY_MANNERS.length]
    default:
      return state
  }
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
  playManner,
  curIndex,
  idsOfSongs,
  songsById
})
