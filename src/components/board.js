import React from 'react'
import Knight from './knight'
import { DndProvider } from 'react-dnd'
import { connect } from 'react-redux'
import HTML5Backend from 'react-dnd-html5-backend'
import { setKnightPosition } from './actions'
import BoardSquare from './boardSquare'

const Board = ({ position, setKnightPosition }) => {
  const squares = []

  const canMoveKnight = (toX, toY) => {
    const x = position.kx
    const y = position.ky
    const dx = toX - x
    const dy = toY - y

    return (
      (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    )
  }

  const handleSquareClick = (toX, toY) => {
    if (canMoveKnight(toX, toY)) {
      setKnightPosition(toX, toY)
    }
  }

  const renderPiece = (x, y, position) => {
    if (x === position.kx && y === position.ky) {
      return <Knight />
    }
  }

  const renderSquare = i => {
    const x = i % 8
    const y = Math.floor(i / 8)
    return (
      <div
        onClick={() => handleSquareClick(x, y)}
        key={i}
        style={{ width: '12.5%', height: '12.5%' }}
      >
        <BoardSquare
          x={x}
          y={y}
          canMoveKnight={canMoveKnight}
          moveKnight={handleSquareClick}
        >
          {renderPiece(x, y, position)}
        </BoardSquare>
      </div>
    )
  }

  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, position))
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: '400px',
          height: '400px',
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {squares}
      </div>
    </DndProvider>
  )
}

const mapStateToProps = state => state

export default connect(
  mapStateToProps,
  { setKnightPosition }
)(Board)
