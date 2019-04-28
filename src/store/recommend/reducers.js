import {
  GET_BANNERS_BEGIN,
  GET_BANNERS_SUCCESS,
  // GET_BANNERS_FAILURE,
} from './actions'

export function banner (state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case GET_BANNERS_BEGIN:
      return {
        ...state,
        isFetching: true
      }
    case GET_BANNERS_SUCCESS:
      return {
        isFetching: false,
        items: action.banners
      }
    default:
      return state
  }
}
