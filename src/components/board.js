import React from 'react'
import Square from './square'
import Knight from './knight'
import { canMoveKnight, moveKnight } from '../Game'

const renderSquare = (i, [knightX, knightY]) => {
  const x = i % 8
  const y = Math.floor(i / 8)
  const isKnightHere = x === knightX && y === knightY
  const black = (x + y) % 2 === 1
  const piece = isKnightHere ? <Knight /> : null

  return (
    <div
      onClick={() => handleSquareClick(x, y)}
      key={i}
      style={{ width: '12.5%', height: '12.5%' }}
    >
      <Square black={black}>{piece}</Square>
    </div>
  )
}

const handleSquareClick = (toX, toY) => {
  if (canMoveKnight(toX, toY)) moveKnight(toX, toY)
}

export default function Board({ knightPosition }) {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }
  console.log(squares)
  return (
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
  )
}
