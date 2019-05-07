import { RECEIVE_PLAYLIST } from "./action-types"

/**
 * 保存
 *
 * @param {*} playlist
 */
const receivePlaylist = (playlist) => ({
  type: RECEIVE_PLAYLIST,
  playlist
})

const getPlaylist = () => {}
