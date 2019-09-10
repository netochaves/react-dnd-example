import { MOVE_KNIGHT } from './actionsTypes'

function boardReducer(state = { position: { kx: 0, ky: 0 } }, action) {
  const { position } = action
  switch (action.type) {
    case MOVE_KNIGHT:
      return {
        ...state,
        position
      }
    default:
      return state
  }
}

export default boardReducer
