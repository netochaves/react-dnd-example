import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Board from './components/board'

ReactDOM.render(
  <Board knightPosition={[0, 0]} />,
  document.getElementById('root')
)
