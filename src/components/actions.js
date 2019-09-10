import { MOVE_KNIGHT } from './actionsTypes'

export const setKnightPosition = (kx, ky) => {
  return {
    type: MOVE_KNIGHT,
    position: { kx, ky }
  }
}
