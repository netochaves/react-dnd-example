import React from 'react'
import { DropTarget } from 'react-dnd'
import Square from './square'
import { ItemTypes } from './actionsTypes'

const squareTarget = {
  canDrop({ x, y, canMoveKnight }) {
    return canMoveKnight(x, y)
  },

  drop({ x, y, moveKnight }) {
    moveKnight(x, y)
  }
}

const collect = (connect, monitor) => {
  const info = {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
  return info
}

const BoardSquare = ({
  x,
  y,
  children,
  canMoveKnight,
  moveKnight,
  isOver,
  canDrop,
  connectDropTarget
}) => {
  const black = (x + y) % 2 === 1

  const Overlay = ({ color }) => (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color
      }}
    />
  )
  return connectDropTarget(
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Square black={black}>{children}</Square>
      {isOver && canDrop && <Overlay color="green" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && !canDrop && <Overlay color="red" />}
    </div>
  )
}

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare)
