let knightPosition = [0, 0]
let observer = null

const emitChange = () => {
  observer(knightPosition)
}

export const observe = o => {
  if (observer) {
    throw new Error('Multiple observers not implemented.')
  }

  observer = o
  emitChange()
}

