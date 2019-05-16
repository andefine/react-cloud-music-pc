import { MAXIMIZE, MINIMIZE } from './actions'

// size 就这两个值
const MIN = 'min'
const MAX = 'max'

const size = (state = MIN, action) => {
  switch (action.type) {
    case MAXIMIZE:
      return MAX
    case MINIMIZE:
      return MIN
    default:
      return state
  }
}

export default size
